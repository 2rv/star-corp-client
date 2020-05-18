import { USER_ITEM } from '.';
import { httpRequest } from '../utils/request';
import { API } from '../constants/api';

const getSuccess = (data) => ({
  type: USER_ITEM.GET_SUCCESS,
  data,
});

const getStart = () => ({
  type: USER_ITEM.GET_START,
});

const getError = (error) => ({
  type: USER_ITEM.GET_ERROR,
  error,
});

export const getUserItem = ({ id }) => (dispatch) => {
  dispatch(getStart());

  const url = API.USER_ITEM({ id });
  return httpRequest
    .get(url)
    .then(({ data }) => {
      dispatch(getSuccess(data));
      return data;
    })
    .catch(({ response: { data } }) => dispatch(getError(data.message)));
};
