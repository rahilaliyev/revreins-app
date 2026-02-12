import type { ELeadCustomFieldType } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

export interface ILeadCustomField extends ID {
  crm_integration_id: number;
  external_id: string;
  name: string;
  description: string;
  type: ELeadCustomFieldType;
  accepts_multiple_values: boolean;
  choises: IChoice[];
}

interface IChoice extends ID {
  value: string;
  sort_order: number;
}
