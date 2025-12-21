import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';

import { axiosLogin } from '../axiosInstance';

import type {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IVerifyEmail,
  IVerifyEmailResponse,
  TUpdateTenantUserVariables,
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

export const useVerifyEmailMutation = (): UseMutationResult<IVerifyEmailResponse, Error, IVerifyEmail> =>
  useMutation<IVerifyEmailResponse, Error, IVerifyEmail>({
    mutationFn: async (data: IVerifyEmail) => {
      const res = await axiosLogin.post<IVerifyEmailResponse>(endpoints.auth.verifyEmail, data, {
        skipNotification: true,
      });
      return res.data;
    },
  });

export const useTenantProfileUpdateMutation = (): UseMutationResult<
  void,
  Error,
  TUpdateTenantUserVariables
> =>
  useMutation<void, Error, TUpdateTenantUserVariables>({
    mutationFn: async ({ payload, token }: TUpdateTenantUserVariables) => {
      const res = await axiosLogin.post<void>(endpoints.tenant_profile.updateTenantProfile, payload, {
        skipNotification: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

export const useTenantUserUpdateMutation = (): UseMutationResult<void, Error, TUpdateTenantUserVariables> =>
  useMutation<void, Error, TUpdateTenantUserVariables>({
    mutationFn: async ({ payload, token }: TUpdateTenantUserVariables) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.updateTenantUser, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
