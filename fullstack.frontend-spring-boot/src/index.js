import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
//import Form from "./Form";

ReactDOM.render(
  <BrowserRouter>
  <MenuComponent/>
  
  <App />
=======


ReactDOM.render(
  <BrowserRouter>
    <App />
>>>>>>> 4c62f80186fd3b72671312c3db5ef5d6fcd75da5
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
