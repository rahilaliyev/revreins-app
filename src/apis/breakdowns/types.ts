import type { ELeadCustomFieldType } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

export interface ILeadCustomField extends ID {
  crm_integration_id: number;
  external_id: string;
  name: string;
  description: string;
  type: ELeadCustomFieldType;
  accepts_multiple_values: boolean;
  choices: IChoice[];
}

interface IChoice extends ID {
  value: string;
  sort_order: number;
}

interface ISegment {
  name: string;
  crm_lead_custom_field_choice_id: number;
}

export interface IProjectBreakdownPayload {
  name: string;
  crm_lead_custom_field_id: number;
  project_id: number;
  status: 0 | 1;
  segments: ISegment[];
}

export interface ISegmentResponse extends ISegment {
  created_at: string;
  id: number;
  name: string;
  project_breakdown_id: number;
  updated_at: string;
}

export interface IProjectBreakdownResponse extends ID {
  created_at: string;
  crm_lead_custom_field_id: number;
  name: string;
  project_id: number;
  segments: ISegmentResponse[];
  status: boolean;
  updated_at: string;
}
