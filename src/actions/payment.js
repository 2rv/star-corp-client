import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { PAYMENT } from './index';
import { convertPaymentData } from '../api/payment';

const setFail = (message) => ({
  type: PAYMENT.FAIL,
  message,
});

const setSuccess = () => ({
  type: PAYMENT.SUCCESS,
});

const setLoading = () => ({
  type: PAYMENT.LOADING,
});

export const sendPaymentData = (payloadData) => {
  const payload = convertPaymentData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());
    try {
      setTimeout(() => {
        dispatch(setSuccess());
      }, 5000);
      //   await httpRequest.patch(API.PAYMENT, payload);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
