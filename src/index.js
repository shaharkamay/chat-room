import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.scss';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
const BASE_URL = window.location.hostname === 'localhost' ? "http://localhost:8080" : '';
export default BASE_URL;