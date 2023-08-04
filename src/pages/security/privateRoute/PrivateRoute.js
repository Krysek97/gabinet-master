import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoute = ({children})=>{
    const cookie = new Cookies();
    const token = cookie.get('token');

        if(token) {
          return children 
        } else {
           return <Navigate to= "/login"/>    
        } 
    

  };
  
  export default PrivateRoute;