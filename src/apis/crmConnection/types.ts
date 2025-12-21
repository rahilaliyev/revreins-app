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
