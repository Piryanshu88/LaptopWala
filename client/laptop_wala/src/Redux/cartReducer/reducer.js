import { loadData } from "../../utils/accesslocalStorage";
import * as types from "./actionTypes";
const intialData = {
  carts: [],
  isLoading: false,
  isError: false,
  cartLength: loadData("cart_length") || 0,
};
export const reducer = (state = intialData, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case types.GET_CART_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartLength: payload.cartItems.length,
        carts: payload.cartItems,
      };
    case types.GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
