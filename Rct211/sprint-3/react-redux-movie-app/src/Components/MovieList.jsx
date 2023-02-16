import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, movies } = useSelector(
    (state) => state.movieReducer
  );
  const [searchParams] = useSearchParams();

  const location = useLocation();

  // useEffect(() => {
  //   dispatch(getMovies());
  // }, []);

  useEffect(() => {
    if (location || movies.length === 0) {
      const order = searchParams.get("order");

      const queryParams = {
        params: {
          rating: searchParams.getAll("rating"),
          _sort: order && "Year",
          _order: order,
        },
      };
      // console.log("called");
      dispatch(getMovies(queryParams));
    }
  }, [location.search]);
  // console.log(movies);
  return (
    <div
      data-testid="movie-list"
      style={{
        cursor: "pointer",
        width: "80%",
        position: "absolute",
        right: "0",
        top: "90px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}>
      {/* Map through movie array  */}

      {isLoading ? (
        <h1>Loading......</h1>
      ) : isError ? (
        <h1>Error occured.....</h1>
      ) : (
        movies.map((el) => <MovieCard key={el.id} {...el} />)
      )}
    </div>
  );
};
