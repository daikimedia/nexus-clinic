import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageNexus from "./pages/HomePage";
import "./index.css";
import PageOzempicMalaysia from "./pages/PageOzempicMalaysia";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageNexus />} />
        <Route
          path="/ozempic-weight-loss-malaysia"
          element={<PageOzempicMalaysia />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
