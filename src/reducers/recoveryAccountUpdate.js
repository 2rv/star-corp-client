import { RECOVERY_ACCOUNT_UPDATE } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOVERY_ACCOUNT_UPDATE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case RECOVERY_ACCOUNT_UPDATE.LOADING:
      return {
        ...state,
        loading: true,
      };

    case RECOVERY_ACCOUNT_UPDATE.FAIL:
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
