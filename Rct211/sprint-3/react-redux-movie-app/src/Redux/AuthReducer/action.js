import * as types from "./actionTypes";
import axios from "axios";
export const login = (payload) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) =>
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token })
    )
    .catch((er) => dispatch({ type: types.LOGIN_FAIL }));
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
