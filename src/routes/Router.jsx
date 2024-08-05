import React from "react";
import Container from "../WebsiteContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteContainer from "../WebsiteContainer";
import NotFoundPage from "../pages/NotFoundPage";

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <WebsiteContainer />, // Component to render for this path
    errorElement: <NotFoundPage />, // Component to render if there's an error
  },
]);

// Router component to provide routing context
const Router = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default Router;
