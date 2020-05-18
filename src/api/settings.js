import { SETTINGS_UPDATE_EMAIL, SETTINGS_UPDATE_PASSWORD, SETTINGS_UPDATE_PGP } from '../constants/fields';

export const convertSettingsUpdateEmailData = ({ email }) => ({
  [SETTINGS_UPDATE_EMAIL.EMAIL]: email,
});

export const convertSettingsUpdatePasswordData = ({ password }) => ({
  [SETTINGS_UPDATE_PASSWORD.PASSWORD]: password,
});

export const convertSettingsUpdatePgpData = ({ pgp }) => ({
  [SETTINGS_UPDATE_PGP.PGP]: pgp,
});

export const performSettingsUpdateEmailData = (raw) => ({
  email: raw[SETTINGS_UPDATE_EMAIL.EMAIL],
});

export const performSettingsUpdatePgpData = (raw) => ({
  pgp: raw[SETTINGS_UPDATE_PGP.PGP],
});
