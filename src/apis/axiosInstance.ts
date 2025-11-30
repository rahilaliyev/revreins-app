import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type Method,
} from 'axios';
import { enqueueSnackbar } from 'notistack';
import qs from 'qs';

import { ROUTES } from 'src/routes/paths';
import { getAccessToken, removeAuthCookies } from 'src/utils/cookie';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const authToken = getAccessToken();

export const axiosLogin: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
  paramsSerializer: (params) => qs.stringify(params, { indices: false }),
});

const onRequestSend = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getAccessToken();

  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponseSuccess = (res: AxiosResponse): Promise<AxiosResponse> => {
  const mutationMethods: Method[] = ['put', 'delete', 'post', 'PUT', 'DELETE', 'POST'];

  if (mutationMethods.includes(res.config.method as Method)) {
    enqueueSnackbar({ message: 'Succesfull operation', variant: 'success' });
  }

  return Promise.resolve(res);
};

const onResponseFailed = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { data, status } = error.response ?? {};

    switch (status) {
      case 401:
        removeAuthCookies();
        window.location.href = ROUTES.AUTH.SIGNIN.PATH;
        enqueueSnackbar({ message: data.message, variant: 'error' });
        break;
      default:
        enqueueSnackbar({ message: data.message, variant: 'error' });
    }
    return Promise.reject(error);
  } else {
    return Promise.reject(new Error('Unexpected error'));
  }
};

const onLoginResponseFailed = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { data } = error.response ?? {};
    enqueueSnackbar({ message: data.message, variant: 'error' });

    return Promise.reject(error);
  } else {
    return Promise.reject(new Error('Unexpected error'));
  }
};

api.interceptors.request.use(onRequestSend, onRequestError);

api.interceptors.response.use(onResponseSuccess, onResponseFailed);
axiosLogin.interceptors.response.use(onResponseSuccess, onLoginResponseFailed);
