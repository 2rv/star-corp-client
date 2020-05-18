import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { RECOVERY_ACCOUNT_UPDATE } from './index';
import { convertRecoveryAccountUpdateData } from '../api/recovery';

const setFail = (message) => ({
  type: RECOVERY_ACCOUNT_UPDATE.FAIL,
  message,
});

const setSuccess = () => ({
  type: RECOVERY_ACCOUNT_UPDATE.SUCCESS,
});

const setLoading = () => ({
  type: RECOVERY_ACCOUNT_UPDATE.LOADING,
});

export const sendRecoveryAccountUpdate = (payloadData) => {
  return async (dispatch, getState) => {
    const { decryptedKey } = getState().pgpConfirm.data;
    dispatch(setLoading());

    const payload = convertRecoveryAccountUpdateData(payloadData);

    try {
      const { data } = await httpRequest.post(API.RECOVERY_ACCOUNT_UPDATE({ key: decryptedKey }), payload);
      setAutorization(data.accessToken);
      redirect(ROUTES.HOME);
      dispatch(setSuccess());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
