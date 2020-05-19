import { RECOVERY_ACCOUNT_CONFIRM } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  data: {
    login: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOVERY_ACCOUNT_CONFIRM.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case RECOVERY_ACCOUNT_CONFIRM.LOADING:
      return {
        ...state,
        loading: true,
      };

    case RECOVERY_ACCOUNT_CONFIRM.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };
    case RECOVERY_ACCOUNT_CONFIRM.SET_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };

    default:
      return state;
  }
};
