import type { ID } from 'src/types/interfaces';

import type { IProject } from '../projects/types';

export interface IProjectStage {
  name: string;
  project_id: number;
  crm_object_id: number;
  date_field_id: number;
}

export interface IProjectStagePayload extends IProjectStage {
  stageId: number;
}

export interface IProjectStageResponse extends ID {
  created_at: string;
  updated_at: string;
  project_id: number;
  project: Omit<IProject, 'stages'>;
  name: string;
}

export interface IProjectStageMutationResponse {
  project_stage: IProjectStageResponse;
}

export interface IFilterOperator {
  value: string;
  label: string;
  field_types: string[];
}

export interface IStageFilterPayload {
  groups: {
    conditions: {
      crm_object_field_id: number;
      operator: string;
      value: string;
    }[];
  }[];
  stageId: number;
}
