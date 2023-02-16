import React, { useEffect, useState } from "react";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
// Complete the logic do not remove any data-testid

export const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const commingFrom = location.state?.from || "/";

  // console.log(auth)
  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    dispatch(login(payload)).then((res) => {
      if (res.type === LOGIN_SUCCESS) {
        navigate(commingFrom, { replace: true });
      }
    });
  };

  return (
    <div>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};
