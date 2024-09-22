import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import AllItems from "./pages/AllItems";
import Orders from "./pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        index: true,
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
    ],
  },
]);

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
