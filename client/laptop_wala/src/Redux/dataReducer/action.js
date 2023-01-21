import * as types from "./actionTypes";
import axios from "axios";
const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

const getDataSuccess = (pa) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload: pa,
  };
};
const getDataError = () => {
  return {
    type: types.GET_DATA_ERROR,
  };
};
const getData = (query) => (dispatch) => {
  dispatch(getDataReq());
  return axios
    .get(`https://rose-shiny-hen.cyclic.app/laptops?q=${query}`)
    .then((re) => dispatch(getDataSuccess(re.data)))
    .catch((err) => dispatch(getDataError(err)));
};
export { getData, getDataError, getDataReq, getDataSuccess };
