import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./lib/store.js";
import { Provider } from "react-redux";
import DarkModeProvider from "./context/DarkMode.jsx";
import TotalPriceContextProvider from "./context/TotalPrice.jsx";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <TotalPriceContextProvider>
          <Routes />
        </TotalPriceContextProvider>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);
