import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Math-game">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
