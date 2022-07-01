import React from "react";
import {AuthForm} from "./login.js"
import { Link } from "react-router-dom";

const Register = (props)=> {
    return (
        <div className="loginContainer">
        <div className="inner">
            <div className="logo"> ERFOLG</div>
            <div className="title"> Sign up</div>

            <AuthForm />
            <div className="grid grid-2 grid-gap-2 ">
           
           
                <div className="switchOption" > have account 
                <Link to="/login">log in</Link></div>
            </div>
        </div>
    </div>
    );
};

export default Register;