import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Assignment1 from "./Assignment1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Assignment1 />
  </StrictMode>
);
