import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import App from "./App";
import "./styles.css";

hydrateRoot(document.getElementById("root")!,
  <StrictMode>
    <App routePath={window.location.pathname} />
  </StrictMode>,
);
