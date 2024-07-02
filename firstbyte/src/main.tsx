/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router/Router";

const rootComponent = ReactDOM.createRoot(document.getElementById("root")!);
rootComponent.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
