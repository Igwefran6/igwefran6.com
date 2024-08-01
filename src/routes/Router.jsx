import React from "react";
import Container from "../WebContainer";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebContainer from "../WebContainer";

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <WebContainer />, // Component to render for this path
    errorElement: <ErrorPage />, // Component to render if there's an error
  },
]);

// Router component to provide routing context
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
