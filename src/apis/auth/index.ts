import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { endpoints } from 'src/contants';

import { axiosLogin } from '../axiosInstance';

import type { ILoginPayload, ILoginResponse, IRegisterPayload, IVerifyEmail } from './types';

export const useLoginMutation = (): UseMutationResult<ILoginResponse, Error, ILoginPayload, unknown> =>
  useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationFn: async (data: ILoginPayload) => {
      const res = await axiosLogin.post<ILoginResponse>(endpoints.auth.login, data);
      return res.data;
    },
  });

export const useRegisterMutation = (): UseMutationResult<void, Error, IRegisterPayload, unknown> =>
  useMutation<void, Error, IRegisterPayload>({
    mutationFn: async (data: IRegisterPayload) => {
      const res = await axiosLogin.post<void>(endpoints.auth.register, data);
      return res.data;
    },
  });

export const useVerifyEmailMutation = (): UseMutationResult<void, Error, IVerifyEmail, unknown> =>
  useMutation<void, Error, IVerifyEmail>({
    mutationFn: async (data: IVerifyEmail) => {
      const res = await axiosLogin.post<void>(endpoints.auth.verifyEmail, data, { skipNotification: true });
      return res.data;
    },
  });
