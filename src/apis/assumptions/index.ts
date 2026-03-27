import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';
import type { IProjectResponse } from '../projects/types';

import type { IAssumptionGeneratePayload } from './types';

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
