import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { api } from '../axiosInstance';

import type { ICRMObjects, ICRMPayload } from './types';

export const useGetCrmObjectFields = (
  payload: Partial<ICRMPayload> = {},
): UseQueryResult<ICRMObjects[], Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.CRM_OBJECT_FIELDS, payload],
    queryFn: async () => {
      const res = await api.get<ICRMObjects[]>(endpoints.tenant.crmObjectFields, {
        params: payload,
      });
      return res.data;
    },
    staleTime: 0,
  });
