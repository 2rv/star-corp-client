import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { PROFILE_INFO } from './index';
import { performBalanceData } from '../api/balance';

const setFail = (message) => ({
  type: PROFILE_INFO.FAIL,
  message,
});

const setSuccess = (data) => ({
  type: PROFILE_INFO.SUCCESS,
  data,
});

const setLoading = () => ({
  type: PROFILE_INFO.LOADING,
});

export const getProfileInfoData = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      // const { data } = await httpRequest.get(API.PROFILE_INFO);
      setTimeout(() => {
        dispatch(setSuccess({ id: 1, nickname: '123kfdsfu' }));
      }, 1000);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
