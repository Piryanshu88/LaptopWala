import * as types from "./actionTypes";
const intialData = {
  products: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialData, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case types.GET_DATA_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
