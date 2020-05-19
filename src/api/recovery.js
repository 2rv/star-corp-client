import { RECOVERY_ACCOUNT_RESET, RECOVERY_ACCOUNT_UPDATE } from '../constants/fields';

export const convertRecoveryAccountResetData = ({ email }) => ({
  [RECOVERY_ACCOUNT_RESET.EMAIL]: email,
});

export const convertRecoveryAccountUpdateData = ({ password }) => ({
  [RECOVERY_ACCOUNT_UPDATE.PASSWORD]: password,
});
