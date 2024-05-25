import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Root } from "routes/root.js";
import { store } from "./redux/store";
import "src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
