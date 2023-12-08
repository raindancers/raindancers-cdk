import * as fs from 'fs';

import {
  aws_ssm as ssm,
} from 'aws-cdk-lib';

import * as constructs from 'constructs';

export enum DocumentType {
  AUTOMATION = 'AUTOMATION'
}

export enum DocumentFormat {
  YAML = 'YAML'
}

export interface DocumentProps {
  /**
   * default AUTOMATION
   */
  readonly documentType?: DocumentType | undefined;
  /**
   * default is YAML
   */
  readonly documentFormat?: DocumentFormat | undefined;
  /**
   * name must be unique
   */
  readonly name: string;
  /**
   * path to the document
   */
  readonly path: string;
}


export class Document extends constructs.Construct {

  name: string;

  constructor(scope: constructs.Construct, id: string, props: DocumentProps) {
    super(scope, id);

    const document = fs.readFileSync(props.path, 'utf-8');

    new ssm.CfnDocument(this, 'SSMDocument', {
      documentType: props.documentType ?? DocumentType.AUTOMATION,
      documentFormat: props.documentFormat ?? DocumentFormat.YAML,
      name: props.name,
      content: document,
    });

    this.name = props.name;

  }
}