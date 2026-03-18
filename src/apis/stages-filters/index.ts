import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { api } from '../axiosInstance';

import type { ICommonResponse } from './../../types/interfaces';
import type { IFilterOperator, IStageFilterPayload } from './types';

export const useGetStageFilters = (): UseQueryResult<IFilterOperator[], Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.STAGE_FILTERS],
    queryFn: async () => {
      const res = await api.get<ICommonResponse<IFilterOperator[]>>(endpoints.tenant.stageFilterOperators);
      return res.data.data;
    },
  });

export const useCreateStageFilterMutation = (): UseMutationResult<void, Error, IStageFilterPayload> =>
  useMutation<void, Error, IStageFilterPayload>({
    mutationFn: async ({ stageId, ...body }: IStageFilterPayload) => {
      await api.post(endpoints.tenant.projectStagesFilters(stageId.toString()), body);
    },
  });
