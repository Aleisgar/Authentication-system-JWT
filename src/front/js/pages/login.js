import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Login } from "../component/login.jsx";


export const LoginView=()=>{
  return (
    <>
   <Login/>
    </>
  );
}
  