export interface IProjectPayload {
  name: string;
  stages: {
    name: string;
  }[];
}

export interface IStage {
  created_at: string;
  crm_object_id: number;
  date_field_id: number;
  deleted_at: string;
  id: number;
  name: string;
  project_id: number;
  updated_at: string;
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
