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
}

export interface IProjectResponse {
  project: IProject;
}
