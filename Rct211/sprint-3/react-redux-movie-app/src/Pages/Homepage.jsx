import React from "react";
import { MovieList } from "../Components/MovieList";
import { Sidebar } from "../Components/Sidebar";

export const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <MovieList />
    </div>
  );
};
