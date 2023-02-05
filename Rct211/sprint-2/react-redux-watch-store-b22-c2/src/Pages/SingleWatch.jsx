import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetData } from "../Redux/AppReducer/action";

const SingleWatch = () => {
  const data = useSelector((store)=>store.AppReducer.watches);
  const {id} =  useParams();
  const dispatch= useDispatch()
  const [mydata,setMydata] = useState({});
  useEffect(()=>{
   if(data.length==0){
    dispatch(GetData());
   }
  },[data.length,dispatch])
 
  
  useEffect(()=>{
    let x = data.find((items)=>items.id===Number(id));
    x && setMydata(x);
  },[id,data])

 console.log(id)
  return (
    <div style={{textAlign:"center"}}>
      <h2>{mydata?.name}</h2>
      <div>
        <img src={mydata?.image} width="300px"  alt="Cover Pic" />
      </div>
      <div>
        <div>{mydata?.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;