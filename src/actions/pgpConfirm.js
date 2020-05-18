import { httpRequest } from '../utils/request';
import { redirect } from '../utils/navigation';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { PGP_CONFIRM } from './index';
import { settingsUpdatePasswordSuccess } from './settingsUpdatePassword';

const setFail = (message) => ({
  type: PGP_CONFIRM.FAIL,
  message,
});

const setSuccess = () => ({
  type: PGP_CONFIRM.SUCCESS,
});

const setLoading = () => ({
  type: PGP_CONFIRM.LOADING,
});

export const setPgpConfirmData = (data) => ({
  type: PGP_CONFIRM.SET_DATA,
  data,
});

export const sendPgpRecoveryAccountConfirm = ({ key }) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await httpRequest.get(API.PGP_CONFIRM({ key }));
      dispatch(setPgpConfirmData({ decryptedKey: key.trim() }));
      dispatch(setSuccess());
      redirect(ROUTES.RECOVERY_ACCOUNT_UPDATE);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const sendSettingsUpdatePasswordConfirm = ({ key }) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await httpRequest.post(API.CONFIRM_PASSWORD_UPDATE({ key }));
      dispatch(settingsUpdatePasswordSuccess());
      redirect(ROUTES.SETTINGS);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
