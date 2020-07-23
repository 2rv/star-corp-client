import { REPORT } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
      };

    case REPORT.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case REPORT.FAIL:
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
