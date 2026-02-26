import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';
import type { ICommonResponse, ICommonTokenRequest, IInvitingMembers } from 'src/types/interfaces';

import { api, axiosLogin } from '../axiosInstance';

import type {
  IInvitingMemberDetailResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  ITenantUserUpdatePayload,
  IUserUpdatePayload,
  IVerifyEmail,
  IVerifyEmailResponse,
  TInvitingMemberAcceptResponse,
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

export const useUserUpdateMutation = (): UseMutationResult<void, Error, Partial<IUserUpdatePayload>> =>
  useMutation<void, Error, Partial<IUserUpdatePayload>>({
    mutationFn: async (body: Partial<IUserUpdatePayload>) => {
      const res = await api.post<void>(endpoints.tenant.updateTenantUser, body);
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

export const useGetTenantTeamInviteDetails = (): UseMutationResult<
  IInvitingMemberDetailResponse,
  Error,
  TTenantUserDetail
> =>
  useMutation<IInvitingMemberDetailResponse, Error, TTenantUserDetail>({
    mutationFn: async ({ email, token }: TTenantUserDetail) => {
      const res = await axiosLogin.post<ICommonResponse<IInvitingMemberDetailResponse>>(
        endpoints.tenant.inviteDetails,
        { email, token },
        {
          skipNotification: true,
        },
      );
      return res.data.data;
    },
  });

export const useAcceptTeamInvite = (): UseMutationResult<
  TInvitingMemberAcceptResponse,
  Error,
  TTenantUserDetail
> =>
  useMutation<TInvitingMemberAcceptResponse, Error, TTenantUserDetail>({
    mutationFn: async ({ email, token }: TTenantUserDetail) => {
      const res = await axiosLogin.post<ICommonResponse<TInvitingMemberAcceptResponse>>(
        endpoints.tenant.acceptInvite,
        {
          email,
          token,
        },
      );
      return res.data.data;
    },
  });

export const useUpdateInviteMutation = (): UseMutationResult<
  void,
  Error,
  ICommonTokenRequest<ITenantUserUpdatePayload>
> =>
  useMutation<void, Error, ICommonTokenRequest<ITenantUserUpdatePayload>>({
    mutationFn: async ({ payload, token }: ICommonTokenRequest<ITenantUserUpdatePayload>) => {
      const res = await axiosLogin.post<void>(endpoints.tenant_profile.updateInvitedTenantProfile, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        skipNotification: true,
      });
      return res.data;
    },
  });
