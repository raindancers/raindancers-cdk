import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';
import {
  TLSInspectionConfiguration,
  Protocols,
  RevokedAction,
} from '../../../src/network/nwfirewall/tlsInspection';

describe('TLSInspectionConfiguration', () => {
  let app: cdk.App;
  let stack: cdk.Stack;
  let caCert: certificatemanager.ICertificate;
  let serverCert: certificatemanager.ICertificate;

  beforeEach(() => {
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');

    caCert = certificatemanager.Certificate.fromCertificateArn(
      stack,
      'CACert',
      'arn:aws:acm:us-east-1:123456789012:certificate/ca-cert',
    );

    serverCert = certificatemanager.Certificate.fromCertificateArn(
      stack,
      'ServerCert',
      'arn:aws:acm:us-east-1:123456789012:certificate/server-cert',
    );
  });

  test('creates TLS inspection with CA certificate', () => {
    const tlsConfig = new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      description: 'Test TLS inspection configuration',
      serverCertificateConfigurations: [{
        caCertificate: caCert,
        inspectionScopes: [{
          destinationPorts: [{ fromPort: 443, toPort: 443 }],
          protocols: [Protocols.TCP],
        }],
      }],
    });

    expect(tlsConfig.arn).toBeDefined();
    expect(tlsConfig.id).toBeDefined();

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfigurationName: 'test-tls-config',
      Description: 'Test TLS inspection configuration',
      TLSInspectionConfiguration: {
        ServerCertificateConfigurations: [{
          CertificateAuthorityArn: 'arn:aws:acm:us-east-1:123456789012:certificate/ca-cert',
          Scopes: [{
            DestinationPorts: [{ FromPort: 443, ToPort: 443 }],
            Protocols: [6],
          }],
        }],
      },
    });
  });

  test('creates TLS inspection with server certificates', () => {
    new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      serverCertificateConfigurations: [{
        serverCertificates: [serverCert],
        inspectionScopes: [{
          destinationPorts: [{ fromPort: 443, toPort: 443 }],
        }],
      }],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfiguration: {
        ServerCertificateConfigurations: [{
          ServerCertificates: [{
            ResourceArn: 'arn:aws:acm:us-east-1:123456789012:certificate/server-cert',
          }],
        }],
      },
    });
  });

  test('creates TLS inspection with certificate revocation actions', () => {
    new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      serverCertificateConfigurations: [{
        caCertificate: caCert,
        certRevocationActions: {
          revokedStatusAction: RevokedAction.DROP,
          unknownStatusAction: RevokedAction.PASS,
        },
        inspectionScopes: [{
          destinationPorts: [{ fromPort: 443, toPort: 443 }],
        }],
      }],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfiguration: {
        ServerCertificateConfigurations: [{
          CheckCertificateRevocationStatus: {
            RevokedStatusAction: 'DROP',
            UnknownStatusAction: 'PASS',
          },
        }],
      },
    });
  });

  test('creates TLS inspection with multiple scopes', () => {
    new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      serverCertificateConfigurations: [{
        caCertificate: caCert,
        inspectionScopes: [
          {
            destinationPorts: [{ fromPort: 443, toPort: 443 }],
            destinations: [{ addressDefinition: '10.0.0.0/8' }],
            protocols: [Protocols.TCP],
          },
          {
            destinationPorts: [{ fromPort: 8443, toPort: 8443 }],
            sources: [{ addressDefinition: '192.168.0.0/16' }],
          },
        ],
      }],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfiguration: {
        ServerCertificateConfigurations: [{
          Scopes: [
            {
              DestinationPorts: [{ FromPort: 443, ToPort: 443 }],
              Destinations: [{ AddressDefinition: '10.0.0.0/8' }],
              Protocols: [6],
            },
            {
              DestinationPorts: [{ FromPort: 8443, ToPort: 8443 }],
              Sources: [{ AddressDefinition: '192.168.0.0/16' }],
            },
          ],
        }],
      },
    });
  });

  test('creates TLS inspection with multiple server certificate configurations', () => {
    const serverCert2 = certificatemanager.Certificate.fromCertificateArn(
      stack,
      'ServerCert2',
      'arn:aws:acm:us-east-1:123456789012:certificate/server-cert-2',
    );

    new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      serverCertificateConfigurations: [
        {
          caCertificate: caCert,
          inspectionScopes: [{
            destinationPorts: [{ fromPort: 443, toPort: 443 }],
          }],
        },
        {
          serverCertificates: [serverCert, serverCert2],
          inspectionScopes: [{
            destinationPorts: [{ fromPort: 8443, toPort: 8443 }],
          }],
        },
      ],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfiguration: {
        ServerCertificateConfigurations: [
          {
            CertificateAuthorityArn: 'arn:aws:acm:us-east-1:123456789012:certificate/ca-cert',
          },
          {
            ServerCertificates: [
              { ResourceArn: 'arn:aws:acm:us-east-1:123456789012:certificate/server-cert' },
              { ResourceArn: 'arn:aws:acm:us-east-1:123456789012:certificate/server-cert-2' },
            ],
          },
        ],
      },
    });
  });

  test('throws error when neither CA nor server certificate provided', () => {
    expect(() => {
      new TLSInspectionConfiguration(stack, 'TLSConfig', {
        name: 'test-tls-config',
        serverCertificateConfigurations: [{
          inspectionScopes: [{
            destinationPorts: [{ fromPort: 443, toPort: 443 }],
          }],
        }],
      });
    }).toThrow('Must supply either caCertificate or serverCertificate');
  });

  test('throws error when both CA and server certificates provided', () => {
    expect(() => {
      new TLSInspectionConfiguration(stack, 'TLSConfig', {
        name: 'test-tls-config',
        serverCertificateConfigurations: [{
          caCertificate: caCert,
          serverCertificates: [serverCert],
          inspectionScopes: [{
            destinationPorts: [{ fromPort: 443, toPort: 443 }],
          }],
        }],
      });
    }).toThrow('Cannot supply both caCertificate and serverCertificate');
  });

  test('creates TLS inspection without description', () => {
    new TLSInspectionConfiguration(stack, 'TLSConfig', {
      name: 'test-tls-config',
      serverCertificateConfigurations: [{
        caCertificate: caCert,
        inspectionScopes: [{
          destinationPorts: [{ fromPort: 443, toPort: 443 }],
        }],
      }],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::NetworkFirewall::TLSInspectionConfiguration', {
      TLSInspectionConfigurationName: 'test-tls-config',
    });
  });
});