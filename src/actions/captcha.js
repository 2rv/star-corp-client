import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { CAPTCHA } from '.';

const captchaLoading = () => ({
  type: CAPTCHA.LOADING,
});

const captchaSuccess = (data) => ({
  type: CAPTCHA.SUCCESS,
  data,
});

export const generateCaptcha = () => (dispatch) => {
  dispatch(captchaLoading());

  return httpRequest.get(API.GENERATE_CAPTCHA).then(({ data }) => {
    return dispatch(captchaSuccess(data));
  });
};
