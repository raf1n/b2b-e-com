import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Customers from "../Pages/Customers/Customers";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Payments from "../Pages/Payments/Payments";
import Products from "../Pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/managerOrders",
        element: <Orders></Orders>,
      },
      {
        path: "/customers",
        element: <Customers></Customers>,
      },
      {
        path: "/payments",
        element: <Payments></Payments>,
      },
    ],
  },
]);
