import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "./ThemeProvider";
import "./App.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>
)