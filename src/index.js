import React from "react";
import App from "./app/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./app/app.scss";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
