import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Root } from "routes/root.js";
import { Home } from "./components";
import { Sales } from "./components";
import { Products } from "./components";
import { Invoices } from "./components";
import { store } from "./redux/store";
import { Login } from "./routes/login";
import { SignUp } from "./routes/signup";
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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
