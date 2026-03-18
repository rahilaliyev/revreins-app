import type { JSX } from 'react';

import type { EUserRole } from './enums';

export interface ID {
  id: number;
}

export interface IIconProps {
  width?: number;
  height?: number;
  svgFill?: string;
  pathFill?: string;
}

export interface IInvitingMembers {
  email: string;
  role: EUserRole;
  name?: string;
}

export interface ICommonTokenRequest<T> {
  payload: T;
  token: string;
}

export interface IMenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

export interface ICommonResponse<T> {
  data: T;
  status: boolean;
  message: string;
}

export interface ICommonPaginationResponse<T> {
  data: T[];
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface INotificationActionMapColor {
  color: string;
  bg: string;
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
