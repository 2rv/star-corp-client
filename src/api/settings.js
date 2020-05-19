import { SETTINGS_UPDATE_EMAIL, SETTINGS_UPDATE_PASSWORD } from '../constants/fields';

export const convertSettingsUpdateEmailData = ({ email }) => ({
  [SETTINGS_UPDATE_EMAIL.EMAIL]: email,
});

export const convertSettingsUpdatePasswordData = ({ password }) => ({
  [SETTINGS_UPDATE_PASSWORD.PASSWORD]: password,
});

export const performSettingsUpdateEmailData = (raw) => ({
  email: raw[SETTINGS_UPDATE_EMAIL.EMAIL],
});
