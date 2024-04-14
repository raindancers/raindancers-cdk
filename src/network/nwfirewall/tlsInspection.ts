import {
  aws_networkfirewall as networkfirewall,
  aws_certificatemanager as certificatemanager,
}
  from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum Protocols {
  // currently Network Firewall only supports TCP for Inspection
  TCP = 6,
}

export interface Scope {
  /**
     *  needs to be a valid port, or a range of ports. eg ['443', '8000:8080']
     **/
  readonly destinationPorts?: networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[];
  /**
     *  A list of cidrs
     **/
  readonly destinations?: networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[];
  /**
     * Which protocols, if any, to decrypt for inspection. only supports TCP
     */
  readonly protocols?: Protocols[];
  /**
     * needs to be a valid port, or a range of ports. eg ['443', '8000:8080']
     */
  readonly sourcePorts?: networkfirewall.CfnTLSInspectionConfiguration.PortRangeProperty[];
  /**
     * A list of Cidrs
     */
  readonly sources?: networkfirewall.CfnTLSInspectionConfiguration.AddressProperty[];
}


export enum RevokedAction {
  PASS = 'PASS',
  DROP = 'DROP',
  UNKNOWN = 'REJECT'
}

export interface CheckCertificateActions {
  readonly revokedStatusAction?: RevokedAction;
  readonly unknownStatusAction?: RevokedAction;
};


export interface ServerCertificateConfigurations {
  /**
     * An imported caCertificate for using for egress inspection,
     * Supply at least of of caCertificate or serverCertificateName
     */
  readonly caCertificate?: certificatemanager.ICertificate | undefined;
  /**
     * An certificate for ingress inspection,
     * Supply at least of of caCertificate or serverCertificateName
     */
  readonly serverCertificates?: certificatemanager.ICertificate[] | undefined;
  /**
     * What to do with revoked certificates
     */
  readonly certRevocationActions?: CheckCertificateActions;
  /**
     * Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS)
     * traffic that Network Firewall should decrypt for inspection by the stateful rule engine.
     */
  readonly inspectionScopes: Scope[];
}

export interface TLSInspectionConfigurationProps {
  readonly name: string;
  readonly description?: string | undefined;
  readonly serverCertificateConfigurations: ServerCertificateConfigurations[];
}

export class TLSInspectionConfiguration extends constructs.Construct {

  constructor(scope: constructs.Construct, id: string, props: TLSInspectionConfigurationProps) {
    super(scope, id);

    let serverCertificateConfigurations: networkfirewall.CfnTLSInspectionConfiguration.ServerCertificateConfigurationProperty[] = [];


    props.serverCertificateConfigurations.forEach((config) => {

      // check that we have only one Certificate
      if (!config.caCertificate && !config.serverCertificates) {
        throw new Error('Must supply either caCertificate or serverCertificate');
      }
      if (config.caCertificate && config.serverCertificates) {
        throw new Error('Cannot supply both caCertificate and serverCertificate');
      }

      // config.scopes.forEach((scope) => {
      //   // check that the destinationcidrs are valid
      //   if (scope.destinations) {
      //     scope.destinations.forEach((destination) => {
      //       if (!destination.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))?$/)) {
      //         throw new Error('Invalid Cidr');
      //       }
      //     })
      //   }
      //   // check that the soruce cidrs are valid
      //   if (scope.sources) {
      //     scope.sources.forEach((source) => {
      //       if (!source.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))?$/)) {
      //         throw new Error('Invalid Cidr');
      //       }
      //     })
      //   }


      if (config.caCertificate) {
        serverCertificateConfigurations.push({
          certificateAuthorityArn: config.caCertificate.certificateArn,
          checkCertificateRevocationStatus: config.certRevocationActions,
          scopes: config.inspectionScopes,
        });
      }

      if (config.serverCertificates) {
        serverCertificateConfigurations.push({
          serverCertificates: config.serverCertificates.map((cert) => {
            return { resourceArn: cert.certificateArn };
          }),
          checkCertificateRevocationStatus: config.certRevocationActions,
          scopes: config.inspectionScopes,
        });
      }

    });


    new networkfirewall.CfnTLSInspectionConfiguration(this, 'MyCfnTLSInspectionConfiguration', {
      tlsInspectionConfiguration: {
        serverCertificateConfigurations: serverCertificateConfigurations,
      },
      tlsInspectionConfigurationName: props.name,
      description: props.description,
    });

  }
}
