import { PAYMENT } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
      };

    case PAYMENT.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case PAYMENT.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
        success: false,
      };

    default:
      return state;
  }
};
