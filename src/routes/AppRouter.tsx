import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
