import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, movies } = useSelector(
    (state) => state.movieReducer
  );
  const { id } = useParams();
  const [data, setdata] = useState({});
  useEffect(() => {
    if (movies.length === 0) dispatch(getMovies());
  }, [movies.length, dispatch]);

  // console.log(id);
  useEffect(() => {
    let x = movies.find((items) => items.id === Number(id));
    x && setdata(x);
  }, [id, movies]);
  // console.log(data);

  return (
    <div>
      <h3 className="movie-id">
        {/* Show Movie Id here, Do not add any extra text */}
        {data.id}
      </h3>
      <img src={data.Poster} alt={data.Title} className="movie-image" />
      <h1 className="movie-name">{data.Title}</h1>
      <h4 className="movie-year">Release Year: {data.Year}</h4>
      <p className="movie-year">Type :{data.Type}</p>
      <p className="movie-rating">rating :{data.rating}</p>
      {/* Show Movie details here */}
    </div>
  );
};
