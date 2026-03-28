import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { api } from '../axiosInstance';

import type { ICommonResponse } from './../../types/interfaces';
import type { ICurrency } from './types';

export const useGetCurrencies = (): UseQueryResult<ICurrency[], Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.CURRENCY],
    queryFn: async () => {
      const res = await api.get<ICommonResponse<ICurrency[]>>(endpoints.tenant.currencies);
      return res.data.data;
    },
  });
