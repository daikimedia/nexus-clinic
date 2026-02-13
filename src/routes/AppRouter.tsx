import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageFatFreezingMalaysia from "../pages/PageFatFreezingMalaysia";
import PageBodyContouring from "../pages/PageBodyContouring";
import PageFraqtional from "../pages/PageFractionalLaser";

const HomePageNexus = lazy(() => import("../pages/HomePage"));
const PageOzempicMalaysia = lazy(() => import("../pages/PageOzempicMalaysia"));
const PageWegovyMalaysia = lazy(() => import("../pages/PageWegovyMalaysia"));
const PageSaxendaMalaysia = lazy(() => import("../pages/PageSexandaMalaysia"));
const PageHCGMalaysia = lazy(() => import("../pages/PageHCGMalaysia"));
const PageDuromineMalaysia = lazy(
  () => import("../pages/PageDuromineMalaysia"),
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageNexus />} />
          <Route path="/ozempic-malaysia" element={<PageOzempicMalaysia />} />
          <Route path="/wegovy-malaysia" element={<PageWegovyMalaysia />} />
          <Route path="/saxenda-malaysia" element={<PageSaxendaMalaysia />} />
          <Route path="/duromine-malaysia" element={<PageDuromineMalaysia />} />
          <Route
            path="/hcg-weight-loss-malaysia"
            element={<PageHCGMalaysia />}
          />
          <Route
            path="/fat-freezing-treatment"
            element={<PageFatFreezingMalaysia />}
          />
          <Route
            path="/body-contouring-malaysia"
            element={<PageBodyContouring />}
          />
          <Route
            path="/fraqtional-laser-resurfacing"
            element={<PageFraqtional />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
