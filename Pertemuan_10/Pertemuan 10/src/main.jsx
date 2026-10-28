import React from "react";
import ReactDOM from "react-dom/client";
import AppProps from "./AppProps.jsx";
// import AppState from "./AppState.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppState /> */}
    <AppProps />
  </React.StrictMode>
);