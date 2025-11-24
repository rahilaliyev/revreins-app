import type { EUserRole } from './enums';

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
