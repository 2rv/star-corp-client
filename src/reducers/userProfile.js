import { PROFILE_INFO } from '../actions';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  success: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_INFO.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: true,
        data: action.data,
      };

    case PROFILE_INFO.LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case PROFILE_INFO.FAIL:
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
