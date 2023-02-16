import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { MovieDetail } from "./MovieDetail";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all routes here */}
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/movie/:id"
        element={
          <ReqAuth>
            <MovieDetail />
          </ReqAuth>
        }></Route>
    </Routes>
  );
};
