import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import {
  AdminPage,
  ErrorPage,
  LoginPage,
  ProductsPage,
  RegisterPage,
} from "../pages/";

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
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
