import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const PageFatFreezingMalaysia = lazy(
  () => import("../pages/PageFatFreezingMalaysia"),
);
const PageBodyContouring = lazy(() => import("../pages/PageBodyContouring"));
const PageFraqtional = lazy(() => import("../pages/PageFractionalLaser"));
const PageLEDPhototherapy = lazy(() => import("../pages/PageLedPhototherapy"));
const PagePRPTreatment = lazy(() => import("../pages/PagePrpPreg"));
const PageSubcision = lazy(() => import("../pages/PageSubcision"));
const PagePeelChemical = lazy(() => import("../pages/PagePeelChimical"));
const PageMesoBrightening = lazy(() => import("../pages/PageMesobrightening"));
const PageMidlite = lazy(() => import("../pages/PageMidlite"));
const PageMicroderMabrasion = lazy(
  () => import("../pages/PageMicroderMabrasion"),
);
const PageBotoxTreatment = lazy(() => import("../pages/PageBotoxTreatment"));
const PageDermalFiler = lazy(() => import("../pages/PageDermalFiler"));
const PageSkinPeelLED = lazy(() => import("../pages/PageSkinPeelLED"));
const PageNonSugarical = lazy(() => import("../pages/PageNonSugarical"));
const PageActiveAcne = lazy(() => import("../pages/PageActiveAcne"));

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
          <Route path="/led-phototherapy" element={<PageLEDPhototherapy />} />
          <Route path="/prp-regenerative" element={<PagePRPTreatment />} />
          <Route path="/subcision" element={<PageSubcision />} />
          <Route path="/chemical-peel" element={<PagePeelChemical />} />
          <Route path="/mesobrightening" element={<PageMesoBrightening />} />
          <Route path="/medlite" element={<PageMidlite />} />
          <Route
            path="/microdermabrasion"
            element={<PageMicroderMabrasion />}
          />
          <Route path="/dermal-fillers" element={<PageDermalFiler />} />
          <Route path="/mesotherapy" element={<PageMesoBrightening />} />
          <Route path="/skin-peel-led" element={<PageSkinPeelLED />} />
          <Route path="/acne-and-acne-scars" element={<PageActiveAcne />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
