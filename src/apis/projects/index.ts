import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';

import type { IProject, IProjectPayload, IProjectResponse } from './types';

export const useGetProjects = (): UseQueryResult<void, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
    queryFn: async () => {
      const res = await api.get<void>(endpoints.tenant.projects);
      return res.data;
    },
  });

export const useGetProjectDetailById = (projectId: number): UseQueryResult<IProject, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PROJECTS, projectId],
    queryFn: async () => {
      const res = await api.get<ICommonResponse<IProject>>(`${endpoints.tenant.projects}/${projectId}`);

      return res.data.data;
    },
    enabled: !!projectId,
  });

export const useCreateProjectMutation = (): UseMutationResult<IProjectResponse, Error, IProjectPayload> =>
  useMutation<IProjectResponse, Error, IProjectPayload>({
    mutationFn: async (data: IProjectPayload) => {
      const res = await api.post<ICommonResponse<IProjectResponse>>(endpoints.tenant.projects, data);
      return res.data.data;
    },
  });
