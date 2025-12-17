import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';

import { axiosLogin } from '../axiosInstance';

import type {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  ITenantUserUpdatePayload,
  IVerifyEmail,
} from './types';

export const useLoginMutation = (): UseMutationResult<ILoginResponse, Error, ILoginPayload> =>
  useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: async (data: ILoginPayload) => {
      const res = await axiosLogin.post<ILoginResponse>(endpoints.auth.login, data);
      return res.data;
    },
  });

export const useRegisterMutation = (): UseMutationResult<void, Error, IRegisterPayload> =>
  useMutation<void, Error, IRegisterPayload>({
    mutationFn: async (data: IRegisterPayload) => {
      const res = await axiosLogin.post<void>(endpoints.auth.register, data);
      return res.data;
    },
  });

export const useVerifyEmailMutation = (): UseMutationResult<void, Error, IVerifyEmail> =>
  useMutation<void, Error, IVerifyEmail>({
    mutationFn: async (data: IVerifyEmail) => {
      const res = await axiosLogin.post<void>(endpoints.auth.verifyEmail, data, { skipNotification: true });
      return res.data;
    },
  });

export const useTenantProfileUpdateMutation = (): UseMutationResult<void, Error, ITenantUserUpdatePayload> =>
  useMutation<void, Error, ITenantUserUpdatePayload>({
    mutationFn: async (data: ITenantUserUpdatePayload) => {
      const res = await axiosLogin.post<void>(endpoints.auth.tenantProfileUpdate, data, {
        skipNotification: true,
      });
      return res.data;
    },
  });

export const useTenantUserUpdateMutation = (): UseMutationResult<void, Error, ITenantUserUpdatePayload> =>
  useMutation<void, Error, ITenantUserUpdatePayload>({
    mutationFn: async (data: ITenantUserUpdatePayload) => {
      const res = await axiosLogin.post<void>(endpoints.auth.tenantUserUpdate, data);
      return res.data;
    },
  });
