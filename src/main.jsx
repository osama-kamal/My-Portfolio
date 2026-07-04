import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import { ModeProvider } from "./Utils/Context/ModeContext.jsx";
import { LanguageProvider } from "./Utils/Context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ModeProvider>
  </StrictMode>
);
