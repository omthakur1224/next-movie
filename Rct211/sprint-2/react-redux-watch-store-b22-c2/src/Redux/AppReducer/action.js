//Write the ActionCreator functions here

import axios from "axios"
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType"

export const GetData = (params)=>(dispatch)=>{

    dispatch({type:GET_WATCHES_DATA_REQUEST})
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/watches`, params).then((res)=>{
        console.log("response")
        dispatch({type:GET_WATCHES_DATA_SUCCESS ,payload:res.data})
    }).catch((err)=>{
        dispatch({type:GET_WATCHES_DATA_FAILURE})
    })
}