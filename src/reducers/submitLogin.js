import { SUBMIT_LOGIN } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case SUBMIT_LOGIN.LOADING:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_LOGIN.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
