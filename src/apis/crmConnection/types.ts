import type { ECRMStatus } from 'src/types/enums';
import type { ICommonTokenRequest, ID } from 'src/types/interfaces';

export interface ICRMProvider extends ID {
  name: string;
  slug: string;
  display_name: string;
  api_base_url: string;
  oauth_authorize_url: string;
  oauth_token_url: string;
  documentation_url: string;
  logo: string;
  is_active: boolean;
}

export interface ICRMProviderResponse {
  status: number;
  data: ICRMProvider[];
}

export interface ICRMIntegrationPayload {
  crm_provider_id: number;
  name: string;
  api_key: string;
  is_primary: boolean;
}

export type TUpdateCRMIntegrationRequest = ICommonTokenRequest<ICRMIntegrationPayload>;

export interface ICRMIntegrationStatusResponse {
  integrations: {
    crm_provider_id: number;
    error_count: number;
    has_errors: boolean;
    has_max_errors: boolean;
    has_valid_token: boolean;
    id: number;
    integration_name: string;
    is_primary: boolean;
    is_token_expired: boolean;
    last_sync_at: string;
    last_sync_human: string;
    needs_sync: boolean;
    next_sync_human: string;
    sync_frequency: string;
    sync_status: ECRMStatus;
    sync_status_color: string;
  }[];
}
