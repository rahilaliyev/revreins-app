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
  type: EUserRole;
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
