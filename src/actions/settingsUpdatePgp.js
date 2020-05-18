import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { SETTINGS_UPDATE_PGP } from './index';
import { setAccountInfoData } from './accountInfo';
import { convertSettingsUpdatePgpData, performSettingsUpdatePgpData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_UPDATE_PGP.FAIL,
  message,
});

const setSuccess = () => ({
  type: SETTINGS_UPDATE_PGP.SUCCESS,
});

const setLoading = () => ({
  type: SETTINGS_UPDATE_PGP.LOADING,
});

export const settingsUpdatePgp = (payloadData) => {
  const payload = convertSettingsUpdatePgpData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const { data } = await httpRequest.patch(API.UPDATE_PGP, payload);
      dispatch(setAccountInfoData(performSettingsUpdatePgpData(data)));
      dispatch(setSuccess());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
