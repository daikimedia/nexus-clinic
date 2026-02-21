"use client";
import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Shield,
  Heart,
  Sparkles,
  TrendingUp,
  Calendar,
  Droplets,
  Users,
  Award,
  Activity,
  Scissors,
  Wind,
  Sun,
  Star,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const FatFreezingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "fatFreezing");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wine/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                  {t("hero.title1")}
                  <br />
                  <span className="text-wine">{t("hero.title2")}</span>
                </h1>

                <p className="font-inter text-lg text-taupe max-w-lg">
                  {t("hero.description")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-inter text-lg hover:bg-rose transition-all shadow-lg shadow-wine/20"
                  >
                    {t("hero.bookConsultation")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter text-lg hover:bg-wine/5 transition-all"
                  >
                    {t("hero.viewPricing")}
                  </motion.button>
                </div>

                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-xl text-brown">
                        {t("hero.fdaCleared")}
                      </div>
                      <div className="font-inter text-sm text-taupe">
                        {t("hero.technology")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-xl text-brown">
                        5000+
                      </div>
                      <div className="font-inter text-sm text-taupe">
                        {t("hero.happyClients")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-linear-to-br from-rose to-wine rounded-3xl p-1 shadow-2xl">
                  <div className="bg-light rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-georgia text-2xl text-brown">
                          {t("hero.trustTitle")}
                        </h3>
                        <ThermometerSnowflake className="w-8 h-8 text-wine" />
                      </div>
                      <div className="space-y-4">
                        {[
                          t("hero.trust1"),
                          t("hero.trust2"),
                          t("hero.trust3"),
                          t("hero.trust4"),
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-rose" />
                            <span className="font-inter text-brown">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-taupe/20">
                        <p className="font-inter text-sm text-taupe">
                          {t("hero.trustNote")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-lg text-brown">
                        20-25%
                      </div>
                      <div className="font-inter text-xs text-taupe">
                        {t("hero.avgReduction")}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Fat Freezing Section */}
        <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
              >
                <ThermometerSnowflake className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-brown">
                  {t("whatIs.badge")}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("whatIs.title1")}
                <span className="text-wine"> {t("whatIs.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="font-inter text-lg text-taupe"
              >
                {t("whatIs.description")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: t("whatIs.stat1Title"),
                  desc: t("whatIs.stat1Desc"),
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: t("whatIs.stat2Title"),
                  desc: t("whatIs.stat2Desc"),
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: t("whatIs.stat3Title"),
                  desc: t("whatIs.stat3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-light p-8 rounded-3xl border border-taupe/10 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-rose/10 flex items-center justify-center text-rose mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-georgia text-2xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Can and Cannot Do Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("canDo.title1")}
                <span className="text-wine"> {t("canDo.title2")}</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Can Do */}
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-rose/10 to-transparent p-8 rounded-3xl border border-rose/20"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-rose" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">
                    {t("canDo.canTitle")}
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    t("canDo.can1"),
                    t("canDo.can2"),
                    t("canDo.can3"),
                    t("canDo.can4"),
                    t("canDo.can5"),
                    t("canDo.can6"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                      <span className="font-inter text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cannot Do */}
              <motion.div
                variants={fadeInRight}
                className="bg-brown/5 p-8 rounded-3xl border border-brown/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-brown" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">
                    {t("canDo.cannotTitle")}
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    t("canDo.cannot1"),
                    t("canDo.cannot2"),
                    t("canDo.cannot3"),
                    t("canDo.cannot4"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brown" />
                      <span className="font-inter text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-24 px-4 bg-wine/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("areas.title1")}
                <span className="text-wine"> {t("areas.title2")}</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: t("areas.area1"), icon: <Activity /> },
                { area: t("areas.area2"), icon: <Wind /> },
                { area: t("areas.area3"), icon: <Scissors /> },
                { area: t("areas.area4"), icon: <Heart /> },
                { area: t("areas.area5"), icon: <Users /> },
                { area: t("areas.area6"), icon: <Users /> },
                { area: t("areas.area7"), icon: <Award /> },
                { area: t("areas.area8"), icon: <Heart /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl text-center border border-taupe/20 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose mx-auto mb-3">
                    {item.icon}
                  </div>
                  <span className="font-inter text-brown font-medium">
                    {item.area}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("journey.title1")}
                <span className="text-wine"> {t("journey.title2")}</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: t("journey.step1Title"),
                  desc: t("journey.step1Desc"),
                  icon: <Users />,
                },
                {
                  step: "02",
                  title: t("journey.step2Title"),
                  desc: t("journey.step2Desc"),
                  icon: <ThermometerSnowflake />,
                },
                {
                  step: "03",
                  title: t("journey.step3Title"),
                  desc: t("journey.step3Desc"),
                  icon: <Sun />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-3xl border border-taupe/10 shadow-xl">
                    <div className="text-6xl font-georgia text-wine/20 mb-4">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center text-rose mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-georgia text-2xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-taupe">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-wine/30">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="py-24 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("results.title1")}
                <span className="text-wine"> {t("results.title2")}</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-inter text-taupe">
                {t("results.description")}
              </motion.p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-rose/20 hidden md:block" />
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    week: t("results.timeline1Week"),
                    title: t("results.timeline1Title"),
                    desc: t("results.timeline1Desc"),
                    icon: <Calendar />,
                  },
                  {
                    week: t("results.timeline2Week"),
                    title: t("results.timeline2Title"),
                    desc: t("results.timeline2Desc"),
                    icon: <TrendingUp />,
                  },
                  {
                    week: t("results.timeline3Week"),
                    title: t("results.timeline3Title"),
                    desc: t("results.timeline3Desc"),
                    icon: <Star />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="relative bg-white p-8 rounded-3xl border border-taupe/10 shadow-lg text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center text-wine mx-auto mb-4">
                      {item.icon}
                    </div>
                    <div className="font-georgia text-3xl text-wine mb-2">
                      {t("results.week")} {item.week}
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 bg-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("pricing.title1")}
                <span className="text-wine"> {t("pricing.title2")}</span>
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                className="bg-linear-to-br from-wine to-rose rounded-3xl p-1 shadow-2xl"
              >
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="font-georgia text-2xl text-brown">
                        {t("pricing.perSession")}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-taupe/20">
                          <span className="font-inter text-brown">
                            {t("pricing.singleArea")}
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            {t("pricing.singlePrice")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-taupe/20">
                          <span className="font-inter text-brown">
                            {t("pricing.multipleAreas")}
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            {t("pricing.multiplePrice")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-inter text-brown">
                            {t("pricing.packageDeals")}
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            {t("pricing.packagePrice")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-cream p-6 rounded-2xl">
                      <h4 className="font-georgia text-xl text-brown mb-4">
                        {t("pricing.includesTitle")}
                      </h4>
                      <div className="space-y-3">
                        {[
                          t("pricing.includes1"),
                          t("pricing.includes2"),
                          t("pricing.includes3"),
                          t("pricing.includes4"),
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-rose" />
                            <span className="font-inter text-sm text-brown">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="font-inter text-xs text-taupe mt-4">
                        {t("pricing.priceNote")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-4 bg-light">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              className="bg-linear-to-br from-wine to-rose rounded-3xl p-1 shadow-2xl"
            >
              <div className="bg-light rounded-3xl p-12">
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  {t("cta.title")}
                </h2>
                <p className="font-inter text-taupe mb-8 max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-10 py-5 rounded-full font-inter text-lg hover:bg-rose transition-all shadow-xl shadow-wine/30"
                >
                  {t("cta.bookButton")}
                </motion.button>
                <p className="font-inter text-xs text-taupe mt-4">
                  {t("cta.note")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FatFreezingLanding;
