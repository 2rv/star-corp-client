import { PAYMENT_BITCOIN_ADDRESS } from '../actions';
import { getLoadingState, getReadyState, getErrorState, editData } from '../utils/store';

const initialState = {
  isLoading: true,
  isLoaded: false,
  isError: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_BITCOIN_ADDRESS.SUCCESS:
      return {
        ...state,
        ...getReadyState(action.data),
      };
    case PAYMENT_BITCOIN_ADDRESS.LOADING:
      return {
        ...state,
        ...getLoadingState(),
      };
    case PAYMENT_BITCOIN_ADDRESS.FAIL:
      return {
        ...state,
        ...getErrorState(action.data),
        errorMessage: action.message,
      };
    case PAYMENT_BITCOIN_ADDRESS.SET_DATA:
      return {
        ...state,
        data: editData(state.data, (data) => ({ ...data, ...action.data })),
      };
    default:
      return state;
  }
};
