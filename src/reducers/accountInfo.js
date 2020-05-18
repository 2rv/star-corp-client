import { ACCOUNT_INFO } from '../actions';
import { getLoadingState, getReadyState, getErrorState, editData } from '../utils/store';

const initialState = {
  error: null,
  errorMessage: null,
  loading: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO.SUCCESS:
      return {
        ...state,
        data: getReadyState(action.data),
      };
    case ACCOUNT_INFO.LOADING:
      return {
        ...state,
        data: getLoadingState(),
      };
    case ACCOUNT_INFO.FAIL:
      return {
        ...state,
        data: getErrorState(action.data),
        errorMessage: action.message,
      };
    case ACCOUNT_INFO.SET_DATA:
      return {
        ...state,
        data: editData(state.data, (data) => ({ ...data, ...action.data })),
      };
    default:
      return state;
  }
};
