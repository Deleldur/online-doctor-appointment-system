import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MenuComponent from "./MenuComponent"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Form from "./Form";

ReactDOM.render(
  <BrowserRouter>
  <MenuComponent/>
  
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
