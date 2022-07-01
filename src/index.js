import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {StoreProvider} from "./stateManagment/store";
import SocketServie from "./stateManagment/socketService";
import Router from "./router"
import "./style.scss"


ReactDOM.render(
   <StoreProvider>
      <Router />
      <SocketServie />
   </StoreProvider>, document.getElementById("root")
);