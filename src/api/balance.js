import { ACCOUNT_BALANCE } from '../constants/fields';

export const performBalanceData = (raw) => ({
  balance: raw[ACCOUNT_BALANCE.AMOUNT],
});
