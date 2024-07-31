import React from "react";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Home />, // Component to render for this path
    errorElement: <ErrorPage />, // Component to render if there's an error
  },
]);

// Router component to provide routing context
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
