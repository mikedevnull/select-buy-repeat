import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("refresh needed");
    updateSW();
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
