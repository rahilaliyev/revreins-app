import type { ECRMObjectType } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

import type { IProject } from '../projects/types';

export interface IProjectStage {
  name: string;
  project_id: number;
  crm_object: ECRMObjectType;
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

interface IReorderStage extends ID {
  order: number;
}

export interface IReorderStagePayload {
  stages: IReorderStage[];
}
