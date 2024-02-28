import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import AdminLayouts from "../components/Layouts/AdminLayouts";
import {
  DashboardAdminPage,
  ErrorPage,
  LoginPage,
  ProductsPage,
  ProductAdminPage,
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
    element: <AdminLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardAdminPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <ProductAdminPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
