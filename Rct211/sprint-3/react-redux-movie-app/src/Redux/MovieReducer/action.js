import * as types from "./actionTypes";
import axios from "axios";

export const getMovies = (payload) => (dispatch) => {
  //http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}
  // Complete the getMovies logic here
  dispatch({ type: types.GET_MOVIE_LOADING });
  return axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,
      payload
    )
    .then((res) =>
      dispatch({ type: types.GET_MOVIE_SUCCESS, payload: res.data })
    )
    .catch((er) => dispatch({ type: types.GET_MOVIE_FAIL }));
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
