const BASE_PATH = '/';
const BASE_AUTH_PATH = '/auth';

export const ROUTES = {
  DEFAULT: {
    PATH: BASE_PATH,
  },
  AUTH: {
    PATH: BASE_AUTH_PATH,
    LOGIN: {
      PATH: `${BASE_AUTH_PATH}/login`,
    },
    FORGOT_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/forgot-password`,
    },
  },
};
