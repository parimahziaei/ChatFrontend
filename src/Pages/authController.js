import React, {useEffect, useState, useContext} from "react";
//import Loader from "../components/loader"
//import { withRouter } from "react-router";




const tokenName = "tokenName";

const AuthController = (props)=>{


    const [checking, setChecking] = useState(true);

    const  checkAuthState =() => {
        const token = localStorage.getItem(tokenName);
        if(!token){
            console.log("parimahooo")
            this.props.history.push("/login")
            return;
        };
    };
    useEffect(()=>{
        checkAuthState();
    },[]
    );

    return (
    <div className="authContainer">
        {checking ? 
       <div className="centerAll">
            {/* <Loader /> */}
       </div>
         : 
            props.children
        }
        </div>
    );
};

//export default withRouter(AuthController);
export default AuthController;