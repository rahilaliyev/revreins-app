import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { axiosLogin } from '../axiosInstance';

import type { ICRMProvider, ICRMProviderResponse, TUpdateCRMIntegrationRequest } from './types';

export const useGetCrmProviders = (token: string): UseQueryResult<ICRMProvider[], Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.CRM_PROVIDERS, token],
    queryFn: async () => {
      const res = await axiosLogin.get<ICRMProviderResponse>(endpoints.crmProviders.getCrmProviders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    },
  });

export const useTenantCRMIntegrationMutation = (): UseMutationResult<
  void,
  Error,
  TUpdateCRMIntegrationRequest
> =>
  useMutation<void, Error, TUpdateCRMIntegrationRequest>({
    mutationFn: async ({ payload, token }: TUpdateCRMIntegrationRequest) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.crmIntegrations, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
