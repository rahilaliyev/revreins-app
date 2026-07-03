import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';

import type {
  IProjectStage,
  IProjectStageMutationResponse,
  IProjectStagePayload,
  IReorderStagePayload,
} from './types';

export const useDeleteStageMutation = (projectId: number): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await api.delete(`${endpoints.tenant.projectStages}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PROJECTS, projectId],
      });
    },
  });
};

export const useEditStageMutation = (): UseMutationResult<void, Error, IProjectStagePayload> =>
  useMutation<void, Error, IProjectStagePayload>({
    mutationFn: async ({ stageId, ...body }: IProjectStagePayload) => {
      await api.put(`${endpoints.tenant.projectStages}/${stageId}`, body);
    },
  });

export const useAddStageMutation = (): UseMutationResult<
  IProjectStageMutationResponse,
  Error,
  IProjectStage
> =>
  useMutation<IProjectStageMutationResponse, Error, IProjectStage>({
    mutationFn: async (body: IProjectStage) => {
      const res = await api.post<ICommonResponse<IProjectStageMutationResponse>>(
        endpoints.tenant.projectStages,
        body,
        {
          skipNotification: true,
        },
      );
      return res.data.data;
    },
  });

export const useReorderStageMutation = (): UseMutationResult<void, Error, IReorderStagePayload> =>
  useMutation<void, Error, IReorderStagePayload>({
    mutationFn: async (body: IReorderStagePayload) => {
      await api.post(endpoints.tenant.reorder, body, {
        skipNotification: true,
      });
    },
  });
