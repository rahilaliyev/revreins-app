import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipNotification?: boolean;
  }

  export interface InternalAxiosRequestConfig {
    skipNotification?: boolean;
  }
}
