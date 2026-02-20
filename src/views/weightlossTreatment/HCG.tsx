"use client";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Shield,
  FileText,
  Sparkles,
  Calendar,
  Droplets,
  Pill,
  Apple,
  Dumbbell,
  ChevronRight,
  XCircle,
  Info,
  Target,
  Activity,
  FileWarning,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HCGWeightLossLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hcg");

  const trustPoints = [
    { icon: Shield, text: t("hero.trust1") },
    { icon: Target, text: t("hero.trust2") },
    { icon: MapPin, text: t("hero.trust3") },
  ];

  const risks = [
    { title: t("risks.risk1Title"), desc: t("risks.risk1Desc") },
    { title: t("risks.risk2Title"), desc: t("risks.risk2Desc") },
    { title: t("risks.risk3Title"), desc: t("risks.risk3Desc") },
    { title: t("risks.risk4Title"), desc: t("risks.risk4Desc") },
  ];

  const exclusions = [
    t("exclusions.item1"),
    t("exclusions.item2"),
    t("exclusions.item3"),
    t("exclusions.item4"),
  ];

  const saferApproach = [
    { icon: Apple, text: t("safer.approach1") },
    { icon: Dumbbell, text: t("safer.approach2") },
    { icon: Activity, text: t("safer.approach3") },
    { icon: Calendar, text: t("safer.approach4") },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream via-white to-light">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-8">
                <h1 className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight">
                  {t("hero.title")}
                  <span className="block text-2xl md:text-3xl text-wine mt-4 font-inter font-light">
                    {t("hero.subtitle")}
                  </span>
                </h1>

                <div className="inline-block bg-cream px-8 py-4 rounded-full border border-taupe/20">
                  <p className="text-brown font-georgia text-xl italic">
                    {t("hero.tagline")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light backdrop-blur-sm bg-opacity-70 rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mt-12"
              >
                <div className="flex items-start gap-4 mb-8">
                  <FileWarning className="w-8 h-8 text-wine shrink-0 mt-1" />
                  <div>
                    <h2 className="font-georgia text-2xl text-brown mb-3">
                      {t("hero.warningTitle")}
                    </h2>
                    <p className="text-brown/80 text-lg leading-relaxed">
                      {t("hero.warningDesc")}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {trustPoints.map((point, index) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-taupe/10"
                      >
                        <div className="bg-wine/10 p-2 rounded-full">
                          <Icon className="w-5 h-5 text-wine" />
                        </div>
                        <span className="text-brown text-sm font-medium">
                          {point.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Truth Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-wine font-georgia italic text-lg">
                  {t("truth.badge")}
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  {t("truth.title")}
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8 md:p-10"
              >
                <p className="text-brown text-lg leading-relaxed mb-6">
                  {t("truth.desc1")}
                </p>
                <p className="text-wine font-georgia text-xl italic">
                  {t("truth.desc2")}
                  <span className="block mt-2 font-inter not-italic text-brown">
                    {t("truth.betterQuestion")}
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is HCG */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft}>
                  <h2 className="font-georgia text-4xl text-brown mb-6">
                    {t("whatIs.title")}
                  </h2>
                  <div className="space-y-4 text-brown/80 leading-relaxed">
                    <p>{t("whatIs.desc")}</p>
                    <div className="bg-cream p-6 rounded-xl border-l-4 border-wine">
                      <p className="font-medium text-brown">
                        {t("whatIs.mohNote")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-taupe/10">
                    <h3 className="font-georgia text-xl text-wine mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {t("whatIs.meaningTitle")}
                    </h3>
                    <p className="text-brown/80 mb-4">
                      {t("whatIs.meaningDesc")}
                    </p>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-brown">
                        <span className="font-bold">{t("whatIs.promisedBenefits")}</span>{" "}
                        {t("whatIs.promisedDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-taupe/10">
                    <h3 className="font-georgia text-xl text-wine mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      {t("whatIs.evidenceTitle")}
                    </h3>
                    <p className="text-brown/80">
                      {t("whatIs.evidenceDesc")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-brown text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-georgia text-4xl mb-4">
                  {t("safety.title")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("safety.subtitle")}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-wine p-3 rounded-full">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-georgia text-2xl">
                      {t("safety.hormoneTitle")}
                    </h3>
                  </div>
                  <p className="text-taupe leading-relaxed">
                    {t("safety.hormoneDesc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-wine p-3 rounded-full">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <h3 className="font-georgia text-2xl">{t("safety.vlcdTitle")}</h3>
                  </div>
                  <p className="text-taupe leading-relaxed">
                    {t("safety.vlcdDesc")}
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-12 bg-wine/20 rounded-2xl p-8 border border-wine/30"
              >
                <h4 className="font-georgia text-xl mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  {t("safety.fdaTitle")}
                </h4>
                <p className="text-taupe">
                  {t("safety.fdaDesc")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Risks Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-brown text-center mb-12"
              >
                {t("risks.title")}
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-cream rounded-xl p-6"
                  >
                    <div className="bg-wine/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <XCircle className="w-6 h-6 text-wine" />
                    </div>
                    <h3 className="font-georgia text-lg text-brown mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-brown/70 text-sm">{risk.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Drops Warning */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-linear-to-r from-rose to-wine rounded-2xl p-8 text-white"
              >
                <h3 className="font-georgia text-2xl mb-4 flex items-center gap-2">
                  <Pill className="w-6 h-6" />
                  {t("risks.dropsTitle")}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {t("risks.dropsDesc")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who Should Avoid */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-10">
                <h2 className="font-georgia text-4xl text-brown mb-4">
                  {t("exclusions.title")}
                </h2>
                <p className="text-brown/70">
                  {t("exclusions.subtitle")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {exclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-cream rounded-lg">
                  <p className="text-brown italic">
                    {t("exclusions.note")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Safer Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-wine font-georgia italic text-lg">
                  {t("safer.badge")}
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  {t("safer.title")}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInLeft} className="space-y-4">
                  {saferApproach.slice(0, 2).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-cream rounded-xl p-4"
                      >
                        <div className="bg-wine p-2 rounded-full">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-brown">{item.text}</span>
                      </div>
                    );
                  })}
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-4">
                  {saferApproach.slice(2, 4).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-cream rounded-xl p-4"
                      >
                        <div className="bg-wine p-2 rounded-full">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-brown">{item.text}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-8 bg-brown text-white rounded-2xl p-8 text-center"
              >
                <p className="text-2xl font-georgia mb-2">{t("safer.paceTitle")}</p>
                <p className="text-4xl font-bold text-taupe">
                  {t("safer.paceValue")}
                </p>
                <p className="text-lg mt-2 text-white/80">{t("safer.paceNote")}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-wine to-rose text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl mb-6"
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                {t("cta.description")}
              </motion.p>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <button className="bg-white text-wine px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
                  {t("cta.bookButton")}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-white/70 text-sm"
              >
                {t("cta.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HCGWeightLossLanding;
