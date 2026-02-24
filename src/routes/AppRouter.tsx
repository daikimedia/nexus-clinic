import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Blogs = lazy(() => import("../pages/Blog"));
const Products = lazy(() => import("../pages/Products"));
const Loading = lazy(() => import("../components/Loading"));

const DermalFillersLanding = lazy(
  () => import("../pages/faceTreatment/DermalFiller"),
);

const LipFillerLanding = lazy(() => import("../pages/faceTreatment/LipFiller"));

const ChinFillerLanding = lazy(
  () => import("../pages/faceTreatment/ChinFiller"),
);

const JawlineFillerLanding = lazy(
  () => import("../pages/faceTreatment/JawlineFiller"),
);

const NoseThreadLiftLanding = lazy(
  () => import("../pages/faceTreatment/NoseTreadLift"),
);

const MasseterBotoxPage = lazy(
  () => import("../pages/faceTreatment/MasseterBotox"),
);
const AcneLandingPage = lazy(
  () => import("../pages/skinTreatment/AcneTreatment"),
);
const AcneScarLanding = lazy(
  () => import("../pages/skinTreatment/AcneScarTreatment"),
);
const PigmentationLanding = lazy(
  () => import("../pages/skinTreatment/PigmentationTreatment"),
);
const MelasmaLanding = lazy(
  () => import("../pages/skinTreatment/MelasmaTreatment"),
);
const MoleRemovalLanding = lazy(
  () => import("../pages/skinTreatment/MoleRemoval"),
);
const HydraFacialLandingPage = lazy(
  () => import("../pages/skinTreatment/Hrdrafracial"),
);
const PicoLaserLanding = lazy(() => import("../pages/skinTreatment/PicoLaser"));
const DarkEyeCircleLanding = lazy(
  () => import("../pages/skinTreatment/DarkEyeCircleTreatment"),
);
const SkinWhiteningLanding = lazy(
  () => import("../pages/skinTreatment/SkinWhitening"),
);
const EczemaLandingPage = lazy(() => import("../pages/skinTreatment/Eczema"));

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
const PageSkinPeelLED = lazy(() => import("../pages/PageSkinPeelLED"));
const PageActiveAcne = lazy(() => import("../pages/PageActiveAcne"));

const HomePageNexus = lazy(() => import("../pages/HomePage"));
const PageOzempicMalaysia = lazy(
  () => import("../pages/weightlossTreatment/PageOzempicMalaysia"),
);
const PageWegovyMalaysia = lazy(
  () => import("../pages/weightlossTreatment/PageWegovyMalaysia"),
);

// WeightLOSS
const CoolSculptingLanding = lazy(
  () => import("../pages/weightlossTreatment/Coolsculpting"),
);
const PageDuromineMalaysia = lazy(
  () => import("../pages/weightlossTreatment/Duromine"),
);

const FatFreezingLanding = lazy(
  () => import("../pages/weightlossTreatment/FatFreezing"),
);

const DoctorMonitoredLanding = lazy(
  () => import("../pages/weightlossTreatment/DoctorMonitored"),
);

const HCGWeightLossLanding = lazy(
  () => import("../pages/weightlossTreatment/HCG"),
);

const DuromineLandingPage = lazy(
  () => import("../pages/weightlossTreatment/Duromine"),
);

const GLP1LandingPage = lazy(() => import("../pages/weightlossTreatment/GLP"));

const ZepboundLanding = lazy(
  () => import("../pages/weightlossTreatment/ZepBound"),
);

const MounjaroLanding = lazy(
  () => import("../pages/weightlossTreatment/Mounjaro"),
);

const TirzepatideLanding = lazy(
  () => import("../pages/weightlossTreatment/Tirzepatide"),
);

const SimaglutideLanding = lazy(
  () => import("../pages/weightlossTreatment/SimaglutideInjection"),
);

// Hair Treatment

const HairTransplantLanding = lazy(
  () => import("../pages/hairTreatment/HairTransplant"),
);

const FUEHairTransplant = lazy(
  () => import("../pages/hairTreatment/FUEHairTransplant"),
);

const PRPLandingPage = lazy(() => import("../pages/hairTreatment/PRPHair"));

const HairLossTreatment = lazy(
  () => import("../pages/hairTreatment/HairLossTreatment"),
);

const BeardLanding = lazy(
  () => import("../pages/hairTreatment/BeardTreatment"),
);

const HairMesotherapyLanding = lazy(
  () => import("../pages/hairTreatment/HairMesotherapy"),
);

const ExosomeLanding = lazy(() => import("../pages/hairTreatment/ExosomeHair"));

const MinoxidilLanding = lazy(
  () => import("../pages/hairTreatment/MinoxidilTreatment"),
);

const FinasterideLanding = lazy(
  () => import("../pages/hairTreatment/Finasteride"),
);

// REGENERATIVE

const TestosteroneLanding = lazy(
  () => import("../pages/regenerative/Testosterone"),
);

const EDTreatment = lazy(() => import("../pages/regenerative/EDTreatment"));

const HormonReplaceLanding = lazy(
  () => import("../pages/regenerative/HormoneReplacement"),
);

const PCOSPage = lazy(() => import("../pages/regenerative/PCOSTreatment"));

const HypothyroidLanding = lazy(
  () => import("../pages/regenerative/Hypothyroidism"),
);

const StemCellLanding = lazy(() => import("../pages/regenerative/StemCell"));

const AntiAgingLanding = lazy(() => import("../pages/regenerative/AntiAging"));

const HormoneTestLanding = lazy(
  () => import("../pages/regenerative/HormoneTest"),
);

const MonopauseLanding = lazy(() => import("../pages/regenerative/Monopause"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePageNexus />} />
          <Route path="/duromine-malaysia" element={<PageDuromineMalaysia />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
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
          <Route path="/mesotherapy" element={<PageMesoBrightening />} />
          <Route path="/skin-peel-led" element={<PageSkinPeelLED />} />
          <Route path="/acne-and-acne-scars" element={<PageActiveAcne />} />
          <Route path="acne-treatment-kl/" element={<AcneLandingPage />} />
          <Route path="acne-scar-treatment-kl/" element={<AcneScarLanding />} />
          <Route
            path="pigmentation-treatment-kl/"
            element={<PigmentationLanding />}
          />
          <Route path="melasma-treatment-kl/" element={<MelasmaLanding />} />
          <Route path="mole-removal-kl/" element={<MoleRemovalLanding />} />
          <Route path="hydrafacial-kl/" element={<HydraFacialLandingPage />} />
          <Route path="pico-laser-kl/" element={<PicoLaserLanding />} />
          <Route
            path="dark-eye-circle-treatment-kl/"
            element={<DarkEyeCircleLanding />}
          />
          <Route
            path="skin-whitening-treatment-kl/"
            element={<SkinWhiteningLanding />}
          />
          <Route path="eczema-treatment-kl/" element={<EczemaLandingPage />} />
          {/* WEIGHT LOSS PAGES */}
          <Route path="/ozempic-malaysia" element={<PageOzempicMalaysia />} />
          <Route path="/wegovy-malaysia" element={<PageWegovyMalaysia />} />
          <Route
            path="/coolsculpting-malaysia/"
            element={<CoolSculptingLanding />}
          />
          <Route
            path="/fat-freezing-malaysia/"
            element={<FatFreezingLanding />}
          />
          <Route
            path="/doctor-monitored-malaysia/"
            element={<DoctorMonitoredLanding />}
          />
          <Route
            path="/hcg-weight-loss-malaysia/"
            element={<HCGWeightLossLanding />}
          />
          <Route path="/duromine-malaysia/" element={<DuromineLandingPage />} />
          <Route
            path="/glp-1-programme-malaysia/"
            element={<GLP1LandingPage />}
          />
          <Route path="/zepbound-malaysia/" element={<ZepboundLanding />} />
          <Route path="/mounjaro-malaysia/" element={<MounjaroLanding />} />
          <Route
            path="/tirzepatide-malaysia/"
            element={<TirzepatideLanding />}
          />
          <Route
            path="/semaglutide-malaysia"
            element={<SimaglutideLanding />}
          />
          {/* HAIR TREATMENT */}
          <Route path="/hair-transplant/" element={<HairTransplantLanding />} />
          <Route path="/fue-hair-transplant/" element={<FUEHairTransplant />} />
          <Route path="/prp-hair-treatment/" element={<PRPLandingPage />} />
          <Route path="/hair-loss-treatment/" element={<HairLossTreatment />} />
          <Route path="/beard-transplant/" element={<BeardLanding />} />
          <Route
            path="/mesotherapy-hair-loss/"
            element={<HairMesotherapyLanding />}
          />
          <Route path="/exosome-hair-treatment/" element={<ExosomeLanding />} />
          <Route path="/minoxidil-treatment/" element={<MinoxidilLanding />} />
          <Route path="/finasteride/" element={<FinasterideLanding />} />
          //FACE TREATMENT
          <Route path="/dermal-filler/" element={<DermalFillersLanding />} />
          <Route path="/lip-filler/" element={<LipFillerLanding />} />
          <Route path="/chin-filler/" element={<ChinFillerLanding />} />
          <Route path="/jawline-filler/" element={<JawlineFillerLanding />} />
          <Route
            path="/nose-thread-lift/"
            element={<NoseThreadLiftLanding />}
          />
          <Route path="/masseter-botox/" element={<MasseterBotoxPage />} />
          {/* REGENERATIVE */}
          <Route
            path="/testosterone-therapy-malaysia/"
            element={<TestosteroneLanding />}
          />
          <Route path="/ed-treatment-malaysia/" element={<EDTreatment />} />
          <Route
            path="/hormone-replacement-therapy-malaysia/"
            element={<HormonReplaceLanding />}
          />
          <Route path="/pcos-treatment-malaysia/" element={<PCOSPage />} />
          <Route
            path="/hypothyroidism-treatment-malaysia/"
            element={<HypothyroidLanding />}
          />
          <Route
            path="/stem-cell-therapy-malaysia/"
            element={<StemCellLanding />}
          />
          <Route
            path="/anti-aging-therapy-malaysia/"
            element={<AntiAgingLanding />}
          />
          <Route
            path="/hormone-test-malaysia/"
            element={<HormoneTestLanding />}
          />
          <Route
            path="/menopause-hormone-replacement-malaysia/"
            element={<MonopauseLanding />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
