import * as types from "./actionTypes";
import axios from "axios";
const signUpReq = () => {
  return {
    type: types.SIGN_UP_REQ,
  };
};
const signUpSuccess = (pa) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: pa,
  };
};
const signUpErr = () => {
  return {
    type: types.SIGN_UP_ERROR,
  };
};
const loginReq = () => {
  return {
    type: types.LOGIN_REQ,
  };
};
const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginError = () => {
  return {
    type: types.LOGIN_ERROR,
  };
};
const signOutReq = () => {
  return {
    type: types.SIGN_OUT_REQ,
  };
};
const signOutSuccess = () => {
  return {
    type: types.SIGN_OUT_SUCCESS,
  };
};
const signOutErr = () => {
  return {
    type: types.SIGN_OUT_ERR,
  };
};

const SignUp = (signupdata) => (dispatch) => {
  return axios
    .post(`https://rose-shiny-hen.cyclic.app/user/register`, signupdata)
    .then((re) => console.log(re))
    .catch((err) => console.log(err));
};

export {
  signUpErr,
  signUpReq,
  signUpSuccess,
  loginError,
  loginReq,
  loginSuccess,
  signOutErr,
  SignUp,
  signOutReq,
  signOutSuccess,
};
