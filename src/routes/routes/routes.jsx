import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/home/Home";
import CreateCoffee from "../../pages/create_coffee/CreateCoffee";
import UpdateCoffee from "../../pages/update_coffee/UpdateCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/coffees`),
      },
      {
        path: "addcoffee",
        element: <CreateCoffee></CreateCoffee>,
      },
      {
        path: "update",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);
export default router;
