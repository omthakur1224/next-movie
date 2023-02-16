import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  movies: [],
};

export const movieReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case types.GET_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };
    default:
      return state;
  }
};
