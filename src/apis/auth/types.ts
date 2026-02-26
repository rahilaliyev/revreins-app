import type { EUserRole } from 'src/types/enums';
import type { ICommonTokenRequest } from 'src/types/interfaces';

export interface IRegisterPayload {
  email: string;
}

export interface ILoginPayload extends IRegisterPayload {
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  expires_in: number;
}

export interface IVerifyEmail extends IRegisterPayload {
  token: string;
}

export type TTenantUserDetail = IVerifyEmail;

export interface ITenantUserUpdatePayload {
  first_name: string;
  last_name: string;
  company_name?: string;
  password: string;
  confirm_password: string;
}

export type TUpdateTenantUserVariables = ICommonTokenRequest<ITenantUserUpdatePayload>;

export interface IVerifyEmailResponse {
  access_token: string;
}

export interface IUserUpdatePayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: EUserRole;
  permissions: {
    read: boolean;
    write: boolean;
  };
  is_active: number;
}

export type TInvitingMemberAcceptResponse = IVerifyEmailResponse;

export interface IInvitingMemberDetailResponse {
  team_size: number;
  role: EUserRole;
  invited_user: {
    name: string;
    email: string;
    avatar: string;
  };
  tenant: {
    name: string;
    logo: string;
  };
}
