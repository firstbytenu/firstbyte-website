/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./slices/Home/Home";

const rootComponent = ReactDOM.createRoot(document.getElementById("root")!);
rootComponent.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
