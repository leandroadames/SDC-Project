import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import MovieProvider from "./context/MovieProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <MovieProvider>
        <App />
      </MovieProvider>
    </HashRouter>
  </React.StrictMode>
);
