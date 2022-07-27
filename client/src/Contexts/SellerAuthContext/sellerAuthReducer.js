import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSellerAuthenticated: false,
        loading: false,
        token: action.payload.token,
        seller: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("sellerToken", action.payload.token);
      return {
        ...state,
        isSellerAuthenticated: false,
        loading: false,
        token: action.payload.token,
        seller: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isSellerAuthenticated: true,
        sellerError: null,
        loading: false,
        seller: action.payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem("sellerToken");
      return {
        ...state,
        isSellerAuthenticated: false,
        loading: false,
        sellerError: action.payload,
        token: null,
        seller: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        sellerError: null,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_FAIL: {
      return {
        ...state,
        products: [...state.products],
        productError: "Product Create Failed",
      };
    }
    default:
      return state;
  }
};
