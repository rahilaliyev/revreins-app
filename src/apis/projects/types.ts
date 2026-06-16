import type { EStageAddEditMode } from 'src/types/enums';
import type { IStage } from 'src/types/interfaces';

export interface IProjectPayload {
  name: string;
  stages: {
    name: string;
  }[];
}

export interface IUiStage extends Partial<IStage> {
  mode: EStageAddEditMode;
  order: number;
}

export interface IProject {
  created_at: string;
  currency_id: number;
  id: number;
  name: string;
  stages: IStage[];
  start_date: string;
  updated_at: string;
  user_id: number;
  order: number;
}

export interface IProjectResponse {
  project: IProject;
}

export interface IProjectUpdatePayload {
  name: string;
  status?: number;
  start_date: string;
  currency_id: number;
}
