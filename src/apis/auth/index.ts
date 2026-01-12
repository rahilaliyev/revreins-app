import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';
import type { ICommonTokenRequest, IInvitingMembers } from 'src/types/interfaces';

import { axiosLogin } from '../axiosInstance';

import type {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IVerifyEmail,
  IVerifyEmailResponse,
  TTenantUserDetail,
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

export const useTenantTeamInviteMutation = (): UseMutationResult<
  void,
  Error,
  ICommonTokenRequest<IInvitingMembers>
> =>
  useMutation<void, Error, ICommonTokenRequest<IInvitingMembers>>({
    mutationFn: async ({ payload, token }: ICommonTokenRequest<IInvitingMembers>) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.inviteTeamMembers, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

export const useGetTenantTeamInviteDetails = (): UseMutationResult<void, Error, TTenantUserDetail> =>
  useMutation<void, Error, TTenantUserDetail>({
    mutationFn: async ({ email, token }: TTenantUserDetail) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.inviteDetails, { email, token });
      return res.data;
    },
  });

export const useAcceptTeamInvite = (): UseMutationResult<void, Error, TTenantUserDetail> =>
  useMutation<void, Error, TTenantUserDetail>({
    mutationFn: async ({ email, token }: TTenantUserDetail) => {
      const res = await axiosLogin.post<void>(endpoints.tenant.acceptInvite, { email, token });
      return res.data;
    },
  });
