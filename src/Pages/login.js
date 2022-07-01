import React from "react";
import eyeopen from "../assets/eyeopen.png"
import eyeclose from "../assets/eyeclose.png"
import google from "../assets/google.png"
import twitter from "../assets/twitter.png"
import { Link } from "react-router-dom";


const Login = (props)=>{
    return (
    <div className="loginContainer">
        <div className="inner">
            <div className="logo"> ERFOLG</div>
            <div className="title"> Sign in</div>

            <AuthForm login/>
            <div className="grid grid-2 grid-gap-2 ">
                <div className="socialButton">
                    <img src={google} />
                    <span>Google</span>
                </div>

                <div className="socialButton">
                    <img src={twitter} />
                    <span>Twitter</span>
                </div>
                <div className="switchOption" > Dont have account 
                <Link to="/register">Sing in</Link></div>
            </div>
        </div>
    </div>
    );
};

export const AuthForm = (props) =>
{
    return (            
    <form>
        <input className="input-field" placeholder="username"/>
            <div className="input-container">
                <input className="input-field" placeholder="password" type="password" autoComplete="new-password" /> 
                <img src ={eyeclose} />
                <img src ={eyeopen} /> 
            </div>
            {
                props.login && (     
                <div className="flex justify-end">
                <Link to="/" > forgot password</Link>
            </div>
            )
            }
            <button type="submit"> login </button>
    </form>
    )
}

export default Login;