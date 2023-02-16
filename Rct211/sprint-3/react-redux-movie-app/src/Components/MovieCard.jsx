import React from "react";
import { Link, useParams } from "react-router-dom";

export const MovieCard = ({
  id,
  Title,
  Year,
  imdbID,
  Type,
  rating,
  Poster,
}) => {
  return (
    <div
      className={"movie-card"}
      style={{
        border: "1px solid red",
      }}>
      <img
        src={Poster}
        className="movie-image"
        alt={Title}
        style={{ width: "200px" }}
      />
      <Link to={`/movie/${id}`}>
        <h3 className="movie-name">{Title}</h3>
        <p className="movie-year">{Year}</p>
        <p className="movie-type">{Type}</p>
        <p className="movie-rating">{rating}</p>
      </Link>
    </div>
  );
};
