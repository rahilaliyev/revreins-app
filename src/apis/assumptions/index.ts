import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';

import { api } from '../axiosInstance';

import type { IAssumptionGeneratePayload } from './types';

export const useGenerateAssumptionMutation = (): UseMutationResult<void, Error, IAssumptionGeneratePayload> =>
  useMutation<void, Error, IAssumptionGeneratePayload>({
    mutationFn: async (data: IAssumptionGeneratePayload) => {
      const res = await api.post<void>(endpoints.assumptions.generate, data);
      return res.data;
    },
  });
