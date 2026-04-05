import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';
import type { IProjectResponse } from '../projects/types';

import type {
  IAssumptionGeneratePayload,
  IConversationRatePayload,
  IConversationRateResponse,
  IForecast,
} from './types';

export const useGenerateAssumptionMutation = (): UseMutationResult<
  IProjectResponse,
  Error,
  IAssumptionGeneratePayload
> =>
  useMutation<IProjectResponse, Error, IAssumptionGeneratePayload>({
    mutationFn: async (data: IAssumptionGeneratePayload) => {
      const res = await api.post<ICommonResponse<IProjectResponse>>(endpoints.assumptions.generate, data);
      return res.data.data;
    },
  });

export const useGetProjectForecast = (
  params?: Record<string, string | number>,
): UseQueryResult<IForecast, Error> =>
  useQuery<IForecast, Error>({
    queryKey: [QUERY_KEYS.PROJECT_FORECAST_DETAIL, params],
    queryFn: async () => {
      const res = await api.get<ICommonResponse<IForecast>>(endpoints.assumptions.forecast, { params });

      return res.data.data;
    },
    enabled: params && !!params.project_id,
  });

export const useConversationRateMutation = (): UseMutationResult<
  IConversationRateResponse,
  Error,
  IConversationRatePayload
> =>
  useMutation<IConversationRateResponse, Error, IConversationRatePayload>({
    mutationFn: async (payload: IConversationRatePayload) => {
      const res = await api.post<ICommonResponse<IConversationRateResponse>>(
        endpoints.assumptions.conversationRate,
        payload,
        {
          skipNotification: true,
        },
      );
      return res.data.data;
    },
  });
