import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { REPORT } from './index';
import { convertReportData } from '../api/report';

const setFail = (message) => ({
  type: REPORT.FAIL,
  message,
});

const setSuccess = () => ({
  type: REPORT.SUCCESS,
});

const setLoading = () => ({
  type: REPORT.LOADING,
});

export const sendReportData = (payloadData) => {
  const payload = convertReportData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());
    try {
      setTimeout(() => {
        dispatch(setSuccess());
      }, 5000);
      //   await httpRequest.patch(API.REPORT, payload);
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
