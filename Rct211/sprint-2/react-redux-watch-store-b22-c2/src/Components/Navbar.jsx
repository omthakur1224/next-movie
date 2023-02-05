import React from "react";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import url  from '../watch.png';

const Navbar = () => {

  const Auth = useSelector((store)=>{ return store.AuthReducer.isAuth},shallowEqual);
     
  console.log(Auth)
  useEffect(()=>{
      
  },[Auth]);
 console.log(Auth);
  return (
    <div data-testid="navbar" style={{width:"80%",margin:"auto",padding:"15px",display:"flex",justifyContent:"space-between"}}>
      <div data-testid="navbar-home-link">
        <Link to="/">
        <img
          src={`${url}`}
          width="60px"
          alt="logo"
          style={{display:"block"}}
        />
          </Link>
      </div>

  {
    !Auth && 
    <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}

        <Link to="/login" > 
          <button data-testid="navbar-login-button">LOGIN</button>
        </Link>
      </div>
    }
     
    </div>
  );
};

export default Navbar;