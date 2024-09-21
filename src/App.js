import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
// import Error from './Error'; // Optional, if you have an error page component
import { createBrowserRouter } from "react-router-dom";

// Main App component with Header and Outlet for nested routes
const App = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/", // Parent route
    element: <App />, // Main App layout
      children: [
      {
        path: "/", // Default page (Page1)
        element: <Page1 />
      },
      {
        path: "/Page2", // Route for Page2
        element: <Page2 />
      },
      {
        path: "/Page3", // Route for Page3
        element: <Page3 />
      },
      {
        path: "/Page4", // Route for Page4
        element: <Page4 />
      }
    ]
  }
]);

export default appRouter;
