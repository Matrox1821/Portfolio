import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
reportWebVitals();
