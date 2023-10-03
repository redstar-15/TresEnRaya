import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import TresEnLinea from './tresEnLinea.jsx'
import "./estilos.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TresEnLinea />
  </StrictMode>
);