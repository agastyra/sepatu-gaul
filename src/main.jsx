import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/error";
import ProductsPage from "./pages/products";
import store from "./lib/store.js";
import { Provider } from "react-redux";
import DarkModeProvider from "./context/DarkMode.jsx";
import TotalPriceContextProvider from "./context/TotalPrice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <TotalPriceContextProvider>
          <RouterProvider router={router} />
        </TotalPriceContextProvider>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);
