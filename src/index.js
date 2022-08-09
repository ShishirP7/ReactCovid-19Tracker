import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import DataProvider from "./Assets/Context/ContextData";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </Router>
);
