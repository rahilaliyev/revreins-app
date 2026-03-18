import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';

import type { IStageConversionResponse } from './types';

export const useGetStageConversions = (id: string): UseQueryResult<IStageConversionResponse, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.STAGE_CONVERSIONS, id],
    queryFn: async () => {
      const res = await api.get<ICommonResponse<IStageConversionResponse>>(
        endpoints.stageConversions.generateStageConversions,
        {
          params: { project_id: id },
        },
      );
      return res.data.data;
    },
  });
