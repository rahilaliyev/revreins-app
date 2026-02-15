const BASE_PATH = '';
const BASE_AUTH_PATH = '/auth';

export const ROUTES = {
  DEFAULT: {
    PATH: '/',
    PROJECTS: {
      PATH: `${BASE_PATH}/projects`,
      NEW_PROJECT: {
        PATH: `${BASE_PATH}/projects/new`,
        STAGES: {
          PATH: `${BASE_PATH}/projects/new/stages`,
        },
        ASSUMPTIONS: {
          PATH: `${BASE_PATH}/projects/new/assumptions`,
        },
      },
    },
    CRM_DATA: {
      PATH: `${BASE_PATH}/crm-data`,
    },
    SETTING: {
      PATH: `${BASE_PATH}/setting`,
    },
    TEAM_BILLING: {
      PATH: `${BASE_PATH}/team-and-billing`,
    },
    USER_PROFILE: {
      PATH: `${BASE_PATH}/profile`,
    },
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
    INVITE_USER: {
      PATH: `${BASE_AUTH_PATH}/invite-user`,
    },
    FORGOT_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/forgot-password`,
    },
    RESET_PASSWORD: {
      PATH: `${BASE_AUTH_PATH}/reset-password`,
    },
  },
};
