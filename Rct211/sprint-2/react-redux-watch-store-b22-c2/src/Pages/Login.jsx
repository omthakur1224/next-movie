import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthUser } from "../Redux/AuthReducer/action";
import { useLocation } from "react-router-dom";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const location = useLocation();
const commingFrom = location.state?.from || "/";

const handleSubmit =(e)=>{
  e.preventDefault();
  dispatch(AuthUser({email:email,password:password})).then((r)=>{
    if(r.type==LOGIN_SUCCESS){
      navigate(commingFrom ,{replace:true}); 
    }
  })
}
  return (
    <div style={{width: "500px" ,margin:"auto",
    }}>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;