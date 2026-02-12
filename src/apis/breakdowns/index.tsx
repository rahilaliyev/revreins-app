import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ELeadCustomFieldType } from 'src/types/enums';

import { api } from '../axiosInstance';

import type { ILeadCustomField } from './types';

export const useGetLeadCustomFields = (
  params?: Record<string, ELeadCustomFieldType>,
): UseQueryResult<ILeadCustomField[], Error> =>
  useQuery<ILeadCustomField[], Error>({
    queryKey: [QUERY_KEYS.LEAD_CUSTOM_FIELDS, params],
    queryFn: async () => {
      const res = await api.get<ILeadCustomField[]>(endpoints.tenant.leadCustomFields, { params });

      return res.data;
    },
  });
