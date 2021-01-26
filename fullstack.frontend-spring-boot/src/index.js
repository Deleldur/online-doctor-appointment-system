import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Form from "./Form";

ReactDOM.render(
  <BrowserRouter> 
  <Form/>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
