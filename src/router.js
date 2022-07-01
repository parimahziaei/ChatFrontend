 import React from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login  from "./Pages/login";
 import Register from "./Pages/register";
 import Home from "./Pages/home";
import AuthController from "./Pages/authController";


const mahome = (props)=> (
        <AuthController {...props}>
            <Route path="/" element={<Home />} exact/>
        </AuthController>
        );

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}  />
            <Route path="/register" element={<Register/>} exact />
             <Route
             path="/55" 
             element={< myhome/>} /> 
            <Route path="/" element={<AuthController/>} exact />
        </Routes>
        </BrowserRouter>   
 );
 };

export default Router;

