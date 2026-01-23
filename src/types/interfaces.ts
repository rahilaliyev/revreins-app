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
