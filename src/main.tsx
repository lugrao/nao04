import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "routes/root.js";
import { Home } from "./components";
import { Sales } from "./components";
import { Products } from "./components";
import { Invoices } from "./components";
import "src/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error.</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
