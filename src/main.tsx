import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter.tsx";
import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
