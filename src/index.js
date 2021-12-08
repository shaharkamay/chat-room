import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export const BASE_URL = window.location.hostname === 'localhost' ? "http://localhost:8080" : '';