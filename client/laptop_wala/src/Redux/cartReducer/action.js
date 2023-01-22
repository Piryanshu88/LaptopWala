import * as types from "./actionTypes";
import axios from "axios";
import { saveData } from "../../utils/accesslocalStorage";
const getDataReq = () => {
  return {
    type: types.GET_CART_REQ,
  };
};

const getDataSuccess = (pa) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload: pa,
  };
};
const getDataError = () => {
  return {
    type: types.GET_CART_ERROR,
  };
};
const delDataReq = () => {
  return {
    type: types.DEL_CART_REQ,
  };
};
const delDataSuccess = () => {
  return {
    type: types.DEL_CART_SUCCESS,
  };
};
const delDataErr = () => {
  return {
    type: types.DEL_CART_ERROR,
  };
};
const cartLength = () => (dispatch) => {
  dispatch(getDataReq());
  return axios
    .get(`https://rose-shiny-hen.cyclic.app/cart`)
    .then((re) => {
      return (
        saveData("cart_length", re.data.cartItems.length),
        dispatch(getDataSuccess(re.data))
      );
    })
    .catch((err) => dispatch(getDataError()));
};
export {
  getDataError,
  getDataReq,
  getDataSuccess,
  cartLength,
  delDataErr,
  delDataReq,
  delDataSuccess,
};
