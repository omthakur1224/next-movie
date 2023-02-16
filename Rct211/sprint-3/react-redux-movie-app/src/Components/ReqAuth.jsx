import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ReqAuth = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isAuth } = useSelector((state) => state.authReducer);
  //   console.log(isAuth, token)
  //
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location?.pathname }} />;
  }

  return children;
};

export default ReqAuth;
