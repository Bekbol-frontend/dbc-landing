import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";

// i18n
import "./shared/config/i18n";

// styles
import "./app/styles/main.scss";
import { StoreProvider } from "./app/Provider/StoreProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
