import type { ECRMObjectType, EDataType } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

export interface ICRMObjects extends ID {
  crm_integration_id: number;
  object_type: ECRMObjectType;
  name: string;
  type: string;
  is_custom: boolean;
  external_id: number;
  description: string;
}

export interface ICRMPayload {
  object_type: ECRMObjectType;
  types: EDataType[];
  type: EDataType;
}
