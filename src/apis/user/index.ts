import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { api, axiosLogin } from '../axiosInstance';

import type { IUserInfoResponse } from './types';

export const useGetUserInfoOnboarding = (token: string): UseQueryResult<IUserInfoResponse, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.USER_INFO, token],
    queryFn: async () => {
      const res = await axiosLogin.get<IUserInfoResponse>(endpoints.user.base, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  });

export const useGetUserInfo = (): UseQueryResult<IUserInfoResponse, Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: async () => {
      const res = await api.get<IUserInfoResponse>(endpoints.user.base);

      return res.data;
    },
  });
