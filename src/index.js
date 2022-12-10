import React from "react";
import ReactDOM from "react-dom/client";

import AppServer from "./paginas/AppServer.js";
import "./css/style_server.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppServer />
  </React.StrictMode>
);
