import type { EUserRole } from 'src/types/enums';
import type { ID } from 'src/types/interfaces';

interface IUser extends ID {
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  email_verified_at: string;
}

interface ITenantUser extends ID {
  tenant_user_id: 86;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;
  role: EUserRole;
  permissions: null;
  is_active: boolean;
  last_login_at: string;
  settings: null;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface IUserInfoResponse {
  user: IUser;
  tenant_user: ITenantUser;
}
