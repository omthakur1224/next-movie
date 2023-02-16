import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const authReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    default:
      return state;
  }
};
