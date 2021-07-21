import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //BrowserRouter is a component

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context"; //gets regular export instead of default
ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
