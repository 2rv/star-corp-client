import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { BALANCE } from './index';
import { performBalanceData } from '../api/balance';

const setFail = (message) => ({
  type: BALANCE.FAIL,
  message,
});

const setSuccess = (data) => ({
  type: BALANCE.SUCCESS,
  data: performBalanceData(data),
});

const setLoading = () => ({
  type: BALANCE.LOADING,
});

export const getBalanceData = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const { data } = await httpRequest.get(API.ACCOUNT_BALANCE);
      dispatch(setSuccess(data));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
