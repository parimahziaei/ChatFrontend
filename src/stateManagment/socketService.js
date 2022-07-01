import React, {useEffect, useContext} from "react";
import openSocket from "socket.io-client"
import { activeChatAction } from "./actions";
import {store} from "./store.js"


const SOCKET_URL ="http://127.0.0.1:9000"
let socket;

const SocketServie = () => {

    const {dispatch, state:{userDetail}} = useContext(store)

    const setupSocket = () =>{
            socket = openSocket(SOCKET_URL);
            socket.on('command', (data) =>{
                console.log("userDetail", userDetail)
                console.log("data", data)
                //if(userDetail!== data.receiver) return ;

                dispatch({type:activeChatAction, payload:data})
                console.log("parimahhhhhh", data);
              });
    };
    useEffect(setupSocket, [userDetail]);

    return <></>;

};

export default SocketServie;

export const sendSocket = (data) =>{
        socket.emit("command",{
            type :data.type,
            id:data.type,
            content:data.content,
        });
        console.log(data)
};

export const sendTestSocket = (data) =>{
    socket.emit("command",data);
    console.log("lkil")
};