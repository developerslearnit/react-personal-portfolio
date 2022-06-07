import React from "react";
import ReactDOM from "react-dom";
import { AppContext } from "./context/AppContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById("root")
);
