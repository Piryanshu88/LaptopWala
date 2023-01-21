import * as types from "./actionTypes";
import axios from "axios";
const signUpReq = () => {
  return {
    type: types.SIGN_UP_REQ,
  };
};
const signUpSuccess = () => {
  return {
    type: types.SIGN_UP_SUCCESS,
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
  console.log(signupdata);
  return axios.post(
    `https://rose-shiny-hen.cyclic.app/user/register`,
    signupdata
  );
};
const Login = (logindata) => (dispatch) => {
  return axios.post(`https://rose-shiny-hen.cyclic.app/user/login`, logindata);
};

export {
  signUpErr,
  signUpReq,
  signUpSuccess,
  Login,
  loginError,
  loginReq,
  loginSuccess,
  signOutErr,
  SignUp,
  signOutReq,
  signOutSuccess,
};
