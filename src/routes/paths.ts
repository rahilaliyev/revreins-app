const BASE_PATH = '/';
const BASE_AUTH_PATH = '/auth';

export const ROUTES = {
  DEFAULT: {
    PATH: BASE_PATH,
  },
  AUTH: {
    PATH: BASE_AUTH_PATH,
    SIGNUP: {
      PATH: `${BASE_AUTH_PATH}/signup`,
    },
    SIGNIN: {
      PATH: `${BASE_AUTH_PATH}/signin`,
    },
    CREATE_ACCOUNT: {
      PATH: `${BASE_AUTH_PATH}/create-account`,
    },
    ACCOUNT_SETUP: {
      PATH: `${BASE_AUTH_PATH}/account-setup`,
    },
    FORGOT_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/forgot-password`,
    },
    RESET_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/reset-password`,
    },
  },
};
