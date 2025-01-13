import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import AllItems from "./pages/AllItems";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import { AdminContextProvider } from "./context/adminContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "/",
        element: <AddItem />,
      },

      {
        path: "/:id",
        element: <AddItem />,
      },

      {
        path: "/items",
        element: <AllItems />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div id="app">
      <AdminContextProvider>
        <RouterProvider router={router} />
      </AdminContextProvider>
    </div>
  );
}

export default App;
