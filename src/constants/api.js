export const API = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  RECOVERY_ACCOUNT_UPDATE: ({ key }) => `/auth/reset/${key}`,
  RECOVERY_ACCOUNT_RESET: ({ email }) => `/auth/reset/${email}`,
  UPDATE_PASSWORD: '/auth/settings/password',
  UPDATE_PASSWORD_WITH_CONFIRM: '/auth/settings/password/confirm',
  CONFIRM_PASSWORD_UPDATE: ({ key }) => `/auth/settings/password/confirm/${key}`,
  UPDATE_EMAIL: '/auth/settings/email',
  ACCOUNT_INFO: '/auth/account-info',
  ACCOUNT_BALANCE: '/payment/balance',
};
