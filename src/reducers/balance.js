import { BALANCE } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  loaded: null,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BALANCE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        loaded: true,
        data: action.data,
      };

    case BALANCE.LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case BALANCE.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
        loaded: false,
      };

    default:
      return state;
  }
};
