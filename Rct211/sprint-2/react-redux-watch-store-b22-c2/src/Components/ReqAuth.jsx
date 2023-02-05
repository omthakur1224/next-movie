import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {Navigate} from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
  const auth = useSelector(store=>store.AuthReducer.isAuth);
  const location = useLocation();
  
  if(!auth){
    return <Navigate to="/login" state={{from:location.pathname}} />
  }
 return children;
};

export default ReqAuth;