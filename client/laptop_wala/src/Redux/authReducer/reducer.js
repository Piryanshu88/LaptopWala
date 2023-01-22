import { loadData, saveData } from "../../utils/accesslocalStorage";
import * as types from "./actionTypes";
const intialData = {
  isLoading: false,
  isAuth: loadData("dell_auth") || false,
  isSignup: false,
  user: loadData("dell_user") || "",
  isError: false,
  authtoken: "",
};
//console.log(intialData);
export const reducer = (state = intialData, { type, payload }) => {
 // console.log(type, payload);
  switch (type) {
    case types.SIGN_UP_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignup: true,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      saveData("dell_auth", true);
      saveData("dell_user", payload.firstName);
      saveData("dell_email", payload.email);
      return {
        ...state,
        isAuth: true,
        user: payload.firstName,
        isLoading: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.SIGN_OUT_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGN_OUT_SUCCESS:
      localStorage.removeItem("dell_auth");
      localStorage.removeItem("dell_user");
      localStorage.removeItem("cart_length");
      localStorage.removeItem("dell_email");
      return {
        isLoading: false,
        isAuth: false,
        isSignup: false,
        user: "",
        isError: false,
      };
    case types.SIGN_OUT_ERR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
