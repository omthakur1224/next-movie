import { useState,useEffect } from "react";

const useOnlineStatus = () => {
const [isUserOnline,setIsUserOnline] = useState(false)

useEffect(()=>{
    console.log(navigator);
    if (navigator.onLine) {
    // console.log('online');
    setIsUserOnline(true)
  } else {
    // console.log('offline');
    setIsUserOnline(false)
  }
},[navigator.onLine])
  
    return isUserOnline
};

export default useOnlineStatus;