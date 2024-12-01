import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        padding: "5px",
      }}
    >
      <App />
    </div>
  </BrowserRouter>
);
