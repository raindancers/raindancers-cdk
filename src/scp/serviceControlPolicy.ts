
export enum PolicyType {
  AISERVICES_OPT_OUT_POLICY = 'AISERVICES_OPT_OUT_POLICY',
  BACKUP_POLICY = 'BACKUP_POLICY',
  SERVICE_CONTROL_POLICY = 'SERVICE_CONTROL_POLICY',
  TAG_POLICY = 'TAG_POLICY',
}

export interface IServiceControlPolicy {
  id: string;
  arn: string;
}