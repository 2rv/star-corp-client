import { RECOVERY_ACCOUNT_RESET, RECOVERY_ACCOUNT_UPDATE } from '../constants/fields';

export const convertRecoveryAccountResetData = ({ login }) => ({
  [RECOVERY_ACCOUNT_RESET.LOGIN]: login,
});

export const convertRecoveryAccountUpdateData = ({ password }) => ({
  [RECOVERY_ACCOUNT_UPDATE.PASSWORD]: password,
});
