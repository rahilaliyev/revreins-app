import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ICommonPaginationResponse, ICommonResponse, ICommonTokenRequest } from 'src/types/interfaces';

import { api, axiosLogin } from '../axiosInstance';

import type { IProject, IProjectPayload, IProjectResponse, IProjectUpdatePayload } from './types';

export const useGetProjects = (): UseQueryResult<ICommonPaginationResponse<IProject>, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
    queryFn: async () => {
      const res = await api.get<ICommonPaginationResponse<IProject>>(endpoints.tenant.projects);
      return res.data;
    },
  });

export const useGetProjectDetailById = (projectId: string): UseQueryResult<IProject, Error> =>
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

export const useUpdateProjectMutation = (id: number): UseMutationResult<void, Error, IProjectUpdatePayload> =>
  useMutation<void, Error, IProjectUpdatePayload>({
    mutationFn: async (data: IProjectUpdatePayload) => {
      const res = await api.post<void>(`${endpoints.tenant.projects}/${id}`, data);
      return res.data;
    },
  });

export const useCreateProjectOnboardingMutation = (): UseMutationResult<
  void,
  Error,
  ICommonTokenRequest<IProjectPayload>
> =>
  useMutation<void, Error, ICommonTokenRequest<IProjectPayload>>({
    mutationFn: async ({ payload, token }: ICommonTokenRequest<IProjectPayload>) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.projects, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
