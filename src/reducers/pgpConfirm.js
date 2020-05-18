import { PGP_CONFIRM } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  data: {
    encryptedKey: null,
    decryptedKey: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PGP_CONFIRM.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
      };

    case PGP_CONFIRM.LOADING:
      return {
        ...state,
        loading: true,
      };

    case PGP_CONFIRM.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };
    case PGP_CONFIRM.SET_DATA:
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
