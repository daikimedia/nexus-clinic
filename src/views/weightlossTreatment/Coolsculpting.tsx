"use client";
import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Shield,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Award,
  Users,
  Scissors,
  Heart,
  Zap,
  CheckCircle2,
  Star,
  Activity,
  Calendar,
  TrendingUp,
  Dumbbell,
  Pill,
  MapPin,
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

const CoolSculptingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "coolsculpting");

  const benefits = [
    {
      icon: <Scissors className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
      title: t("benefits.benefit1Title"),
      desc: t("benefits.benefit1Desc"),
    },
    {
      icon: <Clock className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
      title: t("benefits.benefit2Title"),
      desc: t("benefits.benefit2Desc"),
    },
    {
      icon: <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
      title: t("benefits.benefit3Title"),
      desc: t("benefits.benefit3Desc"),
    },
    {
      icon: <Shield className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
      title: t("benefits.benefit4Title"),
      desc: t("benefits.benefit4Desc"),
    },
  ];

  const treatmentAreas = [
    { name: t("areas.area1"), icon: <Activity className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
    { name: t("areas.area2"), icon: <Heart className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
    { name: t("areas.area3"), icon: <Dumbbell className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
    { name: t("areas.area4"), icon: <Pill className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
    { name: t("areas.area5"), icon: <MapPin className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
    { name: t("areas.area6"), icon: <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} /> },
  ];

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label"), icon: <TrendingUp className="w-5 h-5" /> },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label"), icon: <Clock className="w-5 h-5" /> },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label"), icon: <Calendar className="w-5 h-5" /> },
    { value: t("hero.stat4Value"), label: t("hero.stat4Label"), icon: <Users className="w-5 h-5" /> },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const competitors = [
    { name: t("competitors.clinic1"), highlight: t("competitors.clinic1Highlight") },
    { name: t("competitors.clinic2"), highlight: t("competitors.clinic2Highlight") },
    { name: t("competitors.clinic3"), highlight: t("competitors.clinic3Highlight") },
    { name: t("competitors.clinic4"), highlight: t("competitors.clinic4Highlight") },
    { name: t("competitors.clinic5"), highlight: t("competitors.clinic5Highlight") },
  ];

  return (
    <>
      <main
        className="min-h-screen"
        style={{
          backgroundColor: "var(--color-light)",
          fontFamily: "var(--font-inter)",
        }}
      >
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cream) 0%, #FFFFFF 100%)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
              style={{ backgroundColor: "var(--color-rose)", opacity: 0.1 }}
            />
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.1 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--color-taupe)",
                  }}
                >
                  <ThermometerSnowflake
                    className="w-4 h-4"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("hero.badge")}
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  {t("hero.title1")}
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    {t("hero.title2")}
                  </span>
                </h1>

                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  {t("hero.description")}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-medium flex items-center gap-2"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    {t("hero.scheduleConsultation")}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--color-glass)",
                      backdropFilter: "blur(10px)",
                      color: "var(--color-brown)",
                      border: "1px solid var(--color-taupe)",
                    }}
                  >
                    {t("hero.viewResults")}
                  </motion.button>
                </div>

                {/* Stats */}
                <motion.div
                  variants={scaleIn}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm flex items-center justify-center gap-1"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {stat.icon}
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                    alt="Luxury clinic interior"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(45deg, var(--color-rose) 0%, transparent 100%)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--color-taupe)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Award
                      className="w-8 h-8"
                      style={{ color: "var(--color-wine)" }}
                    />
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("hero.trustedBy")}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {t("hero.patientsIn")}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose CoolSculpting */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("benefits.title1")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  {t("benefits.title2")}
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                {t("benefits.description")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-2xl text-center group cursor-pointer"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-glass)" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full"
              style={{ backgroundColor: "var(--color-wine)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
              style={{ backgroundColor: "var(--color-rose)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("science.title1")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>{t("science.title2")}</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  {t("science.description")}
                </p>

                <div className="space-y-4">
                  {[
                    t("science.step1"),
                    t("science.step2"),
                    t("science.step3"),
                    t("science.step4"),
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-glass)" }}
                    >
                      <CheckCircle2
                        className="w-6 h-6 shrink-0"
                        style={{ color: "var(---color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <ThermometerSnowflake
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("science.freezing")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Activity
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("science.crystallization")}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Zap
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("science.elimination")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Sparkles
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        {t("science.results")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("areas.title1")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>{t("areas.title2")}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl text-center cursor-pointer group"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div className="text-4xl flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("areas.bookConsultation")}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 rounded-3xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {t("areas.multipleTitle")}
              </h3>
              <p className="mb-6">
                {t("areas.multipleDesc")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                {t("areas.designPlan")}
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Nexus Clinic */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  {t("whyNexus.title1")}
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    {t("whyNexus.title2")}
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    { icon: <Heart className="w-5 h-5" />, title: t("whyNexus.point1Title"), desc: t("whyNexus.point1Desc") },
                    { icon: <Target className="w-5 h-5" />, title: t("whyNexus.point2Title"), desc: t("whyNexus.point2Desc") },
                    { icon: <Sparkles className="w-5 h-5" />, title: t("whyNexus.point3Title"), desc: t("whyNexus.point3Desc") },
                    { icon: <Users className="w-5 h-5" />, title: t("whyNexus.point4Title"), desc: t("whyNexus.point4Desc") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-rose)",
                          color: "white",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "var(--color-brown)" }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--color-taupe)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        5000+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.happyPatients")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        15+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.yearsExperience")}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        100%
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.safeProtocols")}
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        24/7
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        {t("whyNexus.patientSupport")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("journey.title1")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>{t("journey.title2")}</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: t("journey.step1Title"), desc: t("journey.step1Desc") },
                { step: "02", title: t("journey.step2Title"), desc: t("journey.step2Desc") },
                { step: "03", title: t("journey.step3Title"), desc: t("journey.step3Desc") },
                { step: "04", title: t("journey.step4Title"), desc: t("journey.step4Desc") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--color-wine)", opacity: 0.3 }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ChevronRight
                        className="w-6 h-6"
                        style={{ color: "var(--color-taupe)" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  {t("cost.title1")}
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    {t("cost.title2")}
                  </span>
                </h2>

                <div className="space-y-4">
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        {t("cost.perArea")}
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        {t("cost.perAreaPrice")}
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        {t("cost.avgSession")}
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        {t("cost.avgSessionPrice")}
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        {t("cost.advancedPlans")}
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        {t("cost.advancedPlansPrice")}
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm" style={{ color: "var(--color-taupe)" }}>
                  {t("cost.priceNote")}
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t("cost.flexibleOptions")}</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t("cost.flex1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t("cost.flex2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t("cost.flex3")}</span>
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-full bg-white font-semibold"
                    style={{ color: "var(--color-wine)" }}
                  >
                    {t("cost.getQuote")}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Competitor Analysis */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                {t("competitors.title1")}
                <br />
                <span style={{ color: "var(--color-wine)" }}>{t("competitors.title2")}</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("competitors.leadingClinics")}
                </h3>
                <div className="space-y-3">
                  {competitors.map((clinic, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl flex items-center justify-between"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <span style={{ color: "var(--color-brown)" }}>
                        {clinic.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {clinic.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("competitors.nexusAdvantage")}
                </h3>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>{t("competitors.adv1Title")}</strong>
                        <p className="text-sm opacity-90">
                          {t("competitors.adv1Desc")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>{t("competitors.adv2Title")}</strong>
                        <p className="text-sm opacity-90">
                          {t("competitors.adv2Desc")}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>{t("competitors.adv3Title")}</strong>
                        <p className="text-sm opacity-90">
                          {t("competitors.adv3Desc")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div variants={fadeInUp} className="space-y-6">
              <ThermometerSnowflake className="w-16 h-16 mx-auto opacity-75" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-georgia)" }}
              >
                {t("cta.title1")}
                <br />
                {t("cta.title2")}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {t("cta.description")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-full bg-white font-semibold text-lg inline-flex items-center gap-2 mx-auto"
                style={{ color: "var(--color-wine)" }}
              >
                {t("cta.bookButton")}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <p className="text-sm opacity-75">
                {t("cta.note")}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default CoolSculptingLanding;
