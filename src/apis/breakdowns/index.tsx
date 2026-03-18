import { useMutation, type UseMutationResult, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';
import type { ELeadCustomFieldType } from 'src/types/enums';
import type { ICommonResponse } from 'src/types/interfaces';

import { api } from '../axiosInstance';

import type { ILeadCustomField, IProjectBreakdownPayload, IProjectBreakdownResponse } from './types';

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

export const useCreateProjectBreakdownMutation = (): UseMutationResult<
  IProjectBreakdownResponse,
  Error,
  IProjectBreakdownPayload
> =>
  useMutation<IProjectBreakdownResponse, Error, IProjectBreakdownPayload>({
    mutationFn: async (data: IProjectBreakdownPayload) => {
      const res = await api.post<ICommonResponse<IProjectBreakdownResponse>>(
        endpoints.tenant.projectBreakdowns,
        data,
      );
      return res.data.data;
    },
  });

export const useGetProjectBreakdowns = (id: string): UseQueryResult<void, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PROJECT_BREAKDOWNS, id],
    queryFn: async () => {
      const res = await api.get<void>(endpoints.tenant.projectBreakdowns, {
        params: { project_id: id },
      });
      return res.data;
    },
  });

export const useGetProjectBreakdownDetail = (id: string): UseQueryResult<void, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PROJECT_BREAKDOWN_DETAIL, id],
    queryFn: async () => {
      const res = await api.get<void>(endpoints.tenant.projectBreakdownDetail(id));
      return res.data;
    },
  });
