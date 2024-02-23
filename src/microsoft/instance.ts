import {
  aws_iam as iam,
  aws_ec2 as ec2,
  aws_ssm as ssm,
  CfnOutput,
  aws_ec2,
  Stack,
  Fn,
  aws_secretsmanager,
} from 'aws-cdk-lib';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

/**
   * The properties of an DomainWindowsNodeProps, requires Active Directory parameter to read the Secret to join the domain
   * Default setting: Domain joined, m5.2xlarge, latest windows, Managed by SSM.
   */
export interface IADJoinedNodeProps {
  /**
     * IAM Instance role permissions
     * @default - 'AmazonSSMManagedInstanceCore, AmazonSSMDirectoryServiceAccess'.
     */
  iamManagedPoliciesList?: iam.IManagedPolicy[];
  /**
     * The EC2 Instance type to use
     */
  instanceType: ec2.InstanceType;
  /**
     * Where the instance should be launched
     * @default - Private.
     */
  subnets: ec2.SubnetSelection;
  /**
     * The name of the AMI to search in SSM (ec2.LookupNodeImage) supports Regex
     *  @default - 'Windows_Server-2022-English-Full'
     */
  machineImage?: ec2.IMachineImage | undefined;
  /**
     * Specific UserData to use
     *
     * The UserData may still be mutated after creation.
     *
     *  @default - 'undefined'
     */
  userData?: string | undefined;

  /**
     * The hostname to use for the instance
     */
  hostname: string;
  /**
     * the domain name
     */
  domainName: string;
  /**
     * the secrect that contains the credentials of a AD user than has permissions to join an instance to the domain
     */
  passwordObject: aws_secretsmanager.ISecret;
  /**
     * optionally add a securityGroup
     * @default a new group will be added.
     */
  securityGroup?: ec2.SecurityGroup | undefined;
  /**
     * Enforce the use of imdsv2
     * @default - true
     */
  imdsv2?: boolean | undefined;


  /**
     * Fully Distinguished Name of the OU
     */
  ouPath: string;

  /**
     * The VPC to use
     */
  vpc: ec2.IVpc;
}

/**
   * An AD Domain Node represents one Windows EC2 instance configured with Active Directory.
   *
   * The DomainWindowsNode can be customized to different instance sizes and additional permissions set just like any other EC2 Instance.
   * You can use this construct to run elevated domain tasks with domain permissions or run your application in a single instance setup.
   * * The machine will be joined to the provided Active Directory domain using a custom CloudFormation bootstrap that will wait until the required reboot to join the domain. Then it will register the machine in SSM and pull tasks from the SSM State manager.
   * * You can send tasks to that machine using the provided methods: runPsCommands() and runPSwithDomainAdmin()
   *
   */
export class ADDomainJoinedWindowsNode extends Construct {
  readonly instance: ec2.Instance;
  readonly nodeRole: iam.Role;
  readonly vpc: ec2.IVpc;
  readonly passwordObject?: ISecret;

  constructor(scope: Construct, id: string, props: IADJoinedNodeProps) {
    super(scope, id);

    this.passwordObject = props.passwordObject;
    this.vpc = props.vpc;


    // set up defaults
    props.iamManagedPoliciesList = props.iamManagedPoliciesList ?? [
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        'AmazonSSMManagedInstanceCore',
      ),
      iam.ManagedPolicy.fromAwsManagedPolicyName('SecretsManagerReadWrite'),
    ];

    props.userData = props.userData ?? '';

    this.nodeRole = new iam.Role(this, 'iam-Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies: props.iamManagedPoliciesList,
    });

    const securityGroup = props.securityGroup ?? new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: this.vpc,
    });

    // Setting static logical ID for the Worker, to allow further customization
    const workerName = 'EC2Node' + id;
    workerName.replace(/[^0-9a-z]/gi, ''); //convert string to alphanumeric


    this.passwordObject.grantRead(this.nodeRole);

    // Create CloudFormation Config set to allow the Domain join report back to Cloudformation only after reboot.
    const config = ec2.CloudFormationInit.fromConfigSets({
      configSets: {
        domainJoinRestart: ['domainJoin', 'signal'],
      },
      configs: {
        domainJoin: new ec2.InitConfig([
          ec2.InitCommand.shellCommand(
            // Step1 : Domain Join using the Secret provided
            `powershell.exe -command  "Invoke-Command -ScriptBlock {[string]$SecretAD  = '${this.passwordObject.secretName}' ;$SecretObj = Get-SECSecretValue -SecretId $SecretAD ;[PSCustomObject]$Secret = ($SecretObj.SecretString  | ConvertFrom-Json) ;$password   = $Secret.pass | ConvertTo-SecureString -asPlainText -Force ;$username   = $Secret.user ;$credential = New-Object System.Management.Automation.PSCredential($username,$password) ;Add-Computer -DomainName ${props.domainName} -OUPath ${props.ouPath} -NewName ${props.hostname} -Credential $credential; Restart-Computer -Force}"`,
            {
              waitAfterCompletion: ec2.InitCommandWaitDuration.forever(),
            },
          ),
        ]),
        signal: new ec2.InitConfig([
          ec2.InitCommand.shellCommand(
            // Step 3: CloudFormation signal
            `cfn-signal.exe --success=true --resource=${workerName} --stack=${
              Stack.of(this).stackName
            } --region=${Stack.of(this).region}`,
            {
              waitAfterCompletion: ec2.InitCommandWaitDuration.none(),
            },
          ),
        ]),
      },
    });

    const attachInitOptions: ec2.AttachInitOptions = {
      platform: ec2.OperatingSystemType.WINDOWS,
      configSets: ['domainJoinRestart'],
      instanceRole: this.nodeRole,
      userData: aws_ec2.UserData.custom(''),
      embedFingerprint: false,
    };

    this.instance = new ec2.Instance(this, `adjoined-${props.hostname}`, {
      instanceType: props.instanceType,
      machineImage: props.machineImage ?? ec2.MachineImage.latestWindows(ec2.WindowsVersion.WINDOWS_SERVER_2022_ENGLISH_FULL_BASE),
      vpc: this.vpc,
      role: this.nodeRole,
      securityGroup: securityGroup,
      vpcSubnets: props.subnets,
      init: config,
      initOptions: attachInitOptions,
      requireImdsv2: props.imdsv2 ?? true,
      instanceName: props.hostname,
    });

    // Override the logical ID name so it can be refereed before initialized
    const CfnInstance = this.instance.node.defaultChild as ec2.CfnInstance;
    CfnInstance.overrideLogicalId(workerName);

    // Override the default UserData script to execute only the cfn-init (without cfn-signal) as we want cfn-signal to be executed after reboot. More details here: https://aws.amazon.com/premiumsupport/knowledge-center/create-complete-bootstrapping/
    CfnInstance.userData = Fn.base64(
      `<powershell>cfn-init.exe -v -s ${
        Stack.of(this).stackName
      } -r ${workerName} --configsets=domainJoinRestart --region ${
        Stack.of(this).region
      }</powershell>`,
    );

    // Override the default 5M timeout to support longer Windows boot time
    CfnInstance.cfnOptions.creationPolicy = {
      resourceSignal: {
        count: 1,
        timeout: 'PT30M',
      },
    };


    // Append the user data
    if (props.userData != '') {
      this.instance.addUserData(props.userData);
    }

    new CfnOutput(this, 'InstanceId', {
      value: `InstanceId: ${this.instance.instanceId}; dnsName: ${this.instance.instancePublicDnsName}`,
    });
  }

  /**
     * Running bash scripts on the Node with SSM Document.
     * i.e: runPsCommands(["echo 'hello world'", "echo 'Second command'"], "myScript")
     */
  runShellCommands(ShellCommands: string[], id: string) {
    new ssm.CfnAssociation(this, id, {
      name: 'AWS-RunShellScript',
      parameters: {
        commands: ShellCommands,
      },
      targets: [{ key: 'InstanceIds', values: [this.instance.instanceId] }],
      maxErrors: '5',
      maxConcurrency: '1',
    });
  }

  /**
     * Running PowerShell scripts on the Node with SSM Document.
     * i.e: runPsCommands(["Write-host 'Hello world'", "Write-host 'Second command'"], "myScript")
     */
  runPsCommands(psCommands: string[], id: string) {
    new ssm.CfnAssociation(this, id, {
      name: 'AWS-RunPowerShellScript',
      parameters: {
        commands: psCommands,
      },
      targets: [{ key: 'InstanceIds', values: [this.instance.instanceId] }],
      maxErrors: '5',
      maxConcurrency: '1',
    });
  }

  /**
     * Running PowerShell scripts on the Node with SSM Document with Domain Admin (Using the Secret used to join the machine to the domain)
     * i.e: runPsCommands(["Write-host 'Hello world'", "Write-host 'Second command'"], "myScript")
     * The provided psCommands will be stored in C:\Scripts and will be run with scheduled task with Domain Admin rights
     */
  runPSwithDomainAdmin(psCommands: string[], id: string) {
    var commands = ['$oneTimePS = {'];
    psCommands.forEach((command: string) => {
      commands.push(command);
    });
    commands.push(
      '}',
      `[string]$SecretAD  = '${this.passwordObject!.secretName}'`,
      '$SecretObj = Get-SECSecretValue -SecretId $SecretAD',
      '[PSCustomObject]$Secret = ($SecretObj.SecretString  | ConvertFrom-Json)',
      '$password   = $Secret.Password | ConvertTo-SecureString -asPlainText -Force',
      "$username   = 'Admin'",
      '$domain_admin_credential = New-Object System.Management.Automation.PSCredential($username,$password)',
      'New-Item -ItemType Directory -Path c:\\Scripts',
      '$tempScriptPath = "C:\\Scripts\\$PID.ps1"',
      '$oneTimePS | set-content $tempScriptPath',
      '# Create a scheduled task on startup to execute the mapping',
      '$action = New-ScheduledTaskAction -Execute "Powershell.exe" -Argument $tempScriptPath',
      '$trigger =  New-ScheduledTaskTrigger -Once -At (get-date).AddSeconds(10); ',
      '$trigger.EndBoundary = (get-date).AddSeconds(60).ToString("s") ',
      'Register-ScheduledTask -Force -Action $action -Trigger $trigger -TaskName "Task $PID to run with DomainAdmin" -Description "Workaround to run the code with domain admin" -RunLevel Highest -User $username -Password $Secret.Password',
    );

    new ssm.CfnAssociation(this, id, {
      name: 'AWS-RunPowerShellScript',
      parameters: {
        commands: commands,
      },
      targets: [{ key: 'InstanceIds', values: [this.instance.instanceId] }],
      maxErrors: '5',
      maxConcurrency: '1',
    });
  }

  startInstance() {
    new AwsCustomResource(
      this,
      'start-instance-needed-' + this.instance.instanceId,
      {
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
        onUpdate: {
          service: 'EC2',
          action: 'startInstances', // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#startInstances-property
          parameters: {
            InstanceIds: [this.instance.instanceId],
          },
          physicalResourceId: {
            id: 'startInstance-' + this.instance.instanceId,
          },
        },
      },
    );
  }
}