import { CAPTCHA } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
import { performCaptchaData } from '../api/captcha';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAPTCHA.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data),
      };

    case CAPTCHA.SUCCESS:
      return {
        ...state,
        data: getReadyState(performCaptchaData(action.data)),
      };

    case CAPTCHA.FAIL:
      return {
        ...state,
        data: getErrorState(action.data),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
