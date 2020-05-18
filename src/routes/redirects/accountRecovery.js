import { redirect } from '../../utils/navigation';
import { ROUTES } from '../../constants/routes';

export const accountRecoveryConfirm = (ctx) => {
  const { encryptedKey } = ctx.store.getState().pgpConfirm.data;

  if (!encryptedKey) {
    if (typeof window !== 'undefined') {
      redirect(ROUTES.RECOVERY_ACCOUNT_RESET);
    } else {
      ctx.res.writeHead(302, { Location: ROUTES.RECOVERY_ACCOUNT_RESET }).end();
    }
  }
};

export const accountRecoveryUpdate = (ctx) => {
  const { decryptedKey } = ctx.store.getState().pgpConfirm.data;

  if (!decryptedKey) {
    if (typeof window !== 'undefined') {
      redirect(ROUTES.RECOVERY_ACCOUNT_RESET);
    } else {
      ctx.res.writeHead(302, { Location: ROUTES.RECOVERY_ACCOUNT_RESET }).end();
    }
  }
};
