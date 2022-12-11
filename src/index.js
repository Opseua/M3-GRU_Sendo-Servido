import React from "react";
import ReactDOM from "react-dom/client";

import AppRotas from "./paginas/AppRotas.js";
import "./css/style_server.css";
import "./css/style_loader.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRotas />
  </React.StrictMode>
);
