import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { NextHop, RouterGroup, StackType } from '../../src/cloudNetwork/cloudNetworkInterfaces';
import { Router } from '../../src/cloudNetwork/cloudNetworkRouting';

describe('Router', () => {
  let stack: Stack;
  let vpc: ec2.Vpc;

  beforeEach(() => {
    stack = new Stack();
    vpc = new ec2.Vpc(stack, 'TestVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });
  });

  test('creates router with basic configuration', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '0.0.0.0/0',
        description: 'Default route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    const igw = new ec2.CfnInternetGateway(stack, 'TestIGW');

    new Router(stack, 'TestRouter', {
      vpc,
      subnetRoutes: [routerGroup],
      internetGateway: igw,
      internetGatewayRoutes: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'router.on_event',
    });
  });

  test('validates CIDR format', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: 'invalid-cidr',
        description: 'Invalid route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouter', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('cidr invalid-cidr is invalid');
  });

  test('throws error when TGW ID provided without attachment ID', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [],
    };

    expect(() => {
      new Router(stack, 'TestRouter', {
        vpc,
        subnetRoutes: [routerGroup],
        transitGatewayId: 'tgw-12345',
        internetGatewayRoutes: undefined,
      });
    }).toThrow('If TransitGateway is supplied, TransitGatewayAttachment must be provided as well');
  });

  test('validates route must have either cidr or subnetGroup', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        description: 'Invalid route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouter', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('Either a cidr or subnetGroup must be supplied');
  });

  test('validates route cannot have both cidr and subnetGroup', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.0.0.0/16',
        destSubnetGroup: {
          name: 'other',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        description: 'Invalid route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouter', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('Only one of cidr or subnetGroup must be supplied');
  });

  test('validates IPv6 CIDR format', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '2001:db8::/32',
        description: 'IPv6 route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    const igw = new ec2.CfnInternetGateway(stack, 'TestIGW2');

    new Router(stack, 'TestRouter2', {
      vpc,
      subnetRoutes: [routerGroup],
      internetGateway: igw,
      internetGatewayRoutes: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'router.on_event',
    });
  });

  test('creates router with transit gateway configuration', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.2.0.0/16',
        description: 'TGW route',
        nextHop: NextHop.TRANSITGATEWAY,
      }],
    };

    new Router(stack, 'TestRouterTGW', {
      vpc,
      subnetRoutes: [routerGroup],
      transitGatewayId: 'tgw-12345',
      transitGatewayAttachmentId: 'tgw-attach-12345',
      internetGatewayRoutes: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Environment: {
        Variables: {
          TRANSITGATEWAY_ID: 'tgw-12345',
          TRANSITGATEWAY_ATTACHMENT_ID: 'tgw-attach-12345',
        },
      },
    });
  });

  test('throws error for IGW routes without firewall endpoints', () => {
    expect(() => {
      new Router(stack, 'TestRouter4', {
        vpc,
        subnetRoutes: [],
        internetGatewayRoutes: [{
          name: 'test',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        }],
      });
    }).toThrow('An internet Gateway is required before Routes can be added');
  });

  test('creates router with firewall endpoints', () => {
    const igw = new ec2.CfnInternetGateway(stack, 'TestIGW3');
    const firewallEndpoints = [{
      endpointId: 'vpce-12345',
      az: 'us-east-1a',
    }];

    new Router(stack, 'TestRouterFW', {
      vpc,
      subnetRoutes: [],
      internetGateway: igw,
      firewallEndPoints: firewallEndpoints,
      internetGatewayRoutes: [{
        name: 'private',
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      }],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::InternetGateway', {});
  });

  test('creates Lambda provider for routing operations', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [],
    };

    new Router(stack, 'TestRouterCR', {
      vpc,
      subnetRoutes: [routerGroup],
      internetGatewayRoutes: undefined,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'router.on_event',
      Runtime: 'python3.13',
    });
  });

  test('creates blackhole route', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.1.0.0/16',
        description: 'Blackhole',
        nextHop: NextHop.BLACKHOLE,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterBlackhole', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).not.toThrow();
  });

  test('creates EC2 instance route', () => {
    const instance = new ec2.Instance(stack, 'TestInstance', {
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
    });

    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.1.0.0/16',
        description: 'EC2route',
        nextHop: NextHop.EC2_INSTANCE,
        ec2Instance: instance,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterEC2', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).not.toThrow();
  });

  test('throws error for missing firewall endpoint AZ', () => {
    const firewallEndpoints = [{
      endpointId: 'vpce-12345',
      az: 'us-west-1a',
    }];

    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.1.0.0/16',
        description: 'Firewallroute',
        nextHop: NextHop.FIREWALL_ENDPOINT,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterFirewall', {
        vpc,
        subnetRoutes: [routerGroup],
        firewallEndPoints: firewallEndpoints,
        internetGatewayRoutes: undefined,
      });
    }).toThrow('At least one of fwEndpoints or Firewall must be supplied to route to Firewalls');
  });

  test('throws error for missing firewall endpoints', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.1.0.0/16',
        description: 'Firewallroute2',
        nextHop: NextHop.FIREWALL_ENDPOINT,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterSubnetGroup', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('At least one of fwEndpoints or Firewall must be supplied to route to Firewalls');
  });

  test('creates blackhole with subnet group', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destSubnetGroup: {
          name: 'public',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        description: 'Blackholesubnet',
        nextHop: NextHop.BLACKHOLE,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterBlackholeSubnet', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).not.toThrow();
  });

  test('throws error for TGW route without CIDR', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destSubnetGroup: {
          name: 'public',
          stack: StackType.DUAL_STACK,
          ipv4mask: 24,
        },
        description: 'Invalid TGW route',
        nextHop: NextHop.TRANSITGATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterTGWError', {
        vpc,
        subnetRoutes: [routerGroup],
        transitGatewayId: 'tgw-12345',
        transitGatewayAttachmentId: 'tgw-attach-12345',
        internetGatewayRoutes: undefined,
      });
    }).toThrow('Routes to TransitGateway must have a cidr');
  });

  test('throws error for EC2 route without instance', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '10.1.0.0/16',
        description: 'Invalid EC2 route',
        nextHop: NextHop.EC2_INSTANCE,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterEC2Error', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('if destination is an EC2_Instance then the instance must be supplied');
  });

  test('throws error for IGW route without gateway', () => {
    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '0.0.0.0/0',
        description: 'Invalid IGW route',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterIGWError', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGatewayRoutes: undefined,
      });
    }).toThrow('Can not route to internet gateway as non exisits');
  });

  test('creates IPv6 routes', () => {
    const igw = new ec2.CfnInternetGateway(stack, 'TestIGW5');

    const routerGroup: RouterGroup = {
      subnetGroup: {
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        stack: StackType.DUAL_STACK,
        ipv4mask: 24,
      },
      routes: [{
        destCidr: '::/0',
        description: 'IPv6defaultroute',
        nextHop: NextHop.INTERNET_GATEWAY,
      }],
    };

    expect(() => {
      new Router(stack, 'TestRouterIPv6', {
        vpc,
        subnetRoutes: [routerGroup],
        internetGateway: igw,
        internetGatewayRoutes: undefined,
      });
    }).not.toThrow();
  });
});