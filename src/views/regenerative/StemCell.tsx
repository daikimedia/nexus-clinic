"use client";

import { motion } from "framer-motion";
import {
  Heart,
  AlertCircle,
  CheckCircle,
  XCircle,
  Shield,
  Phone,
  MapPin,
  Activity,
  Droplets,
  Microscope,
  Users,
  ChevronRight,
  Sparkles,
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

const StemCellLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "stemCell");

  const images = {
    hero: "/images/clinic/interior.png",
    stemCells: "/images/clinic/micro.png",
    consultation: "/images/clinic/consultation.png",
    labResearch:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
    patientCare: "/images/clinic/patient-care.png",
    medicalTeam:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
    dna: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    clinic:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  };

  const faqs = Array.from({ length: 12 }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white overflow-hidden">
        {/* Hero Section with Background Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={images.hero}
              alt="Modern medical clinic interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 z-1"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-wine/10 text-wine font-serif text-sm mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl font-bold mb-6"
              style={{ color: "var(--color-brown)" }}
            >
              {t("hero.title1")}
              <br />
              <span style={{ color: "var(--color-wine)" }}>
                {t("hero.title2")}
              </span>{" "}
              {t("hero.title3")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-white shadow-lg"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                {t("hero.cta1")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium border-2 bg-white/80 backdrop-blur-sm"
                style={{
                  borderColor: "var(--color-rose)",
                  color: "var(--color-brown)",
                }}
              >
                {t("hero.cta2")}
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--color-taupe)/20",
              }}
            >
              <p className="text-sm" style={{ color: "var(--color-brown)" }}>
                <span className="font-semibold">
                  📍 {t("hero.clinicLabel")}
                </span>{" "}
                {t("hero.clinicAddress")}
                <br />
                <span className="inline-flex items-center mt-2 gap-2">
                  <Phone
                    className="w-4 h-4"
                    style={{ color: "var(--color-wine)" }}
                  />{" "}
                  {t("hero.clinicPhone")}
                </span>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--color-brown)" }}
              >
                {t("trust.title")}
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "var(--color-taupe)" }}
              >
                {t("trust.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                variants={scaleIn}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
              >
                <img
                  src={images.medicalTeam}
                  alt="Medical team at Nexus Clinic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-linear(to top, var(--color-brown), transparent)",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {t("trust.imageTitle")}
                  </h3>
                  <p className="text-sm text-cream">
                    {t("trust.imageDesc")}
                  </p>
                </div>
              </motion.div>

              {[
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: t("trust.t1Title"),
                  desc: t("trust.t1Desc"),
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: t("trust.t2Title"),
                  desc: t("trust.t2Desc"),
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: t("trust.t3Title"),
                  desc: t("trust.t3Desc"),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl text-center group cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: "var(--color-wine)/10",
                      color: "var(--color-wine)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 rounded-xl border-l-4"
              style={{
                borderLeftColor: "var(--color-wine)",
                backgroundColor: "var(--color-glass)",
              }}
            >
              <p
                className="text-sm italic"
                style={{ color: "var(--color-brown)" }}
              >
                &ldquo;{t("trust.mohQuote")}&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What Is Stem Cell Therapy */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/cells-pattern.svg')] bg-repeat opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: "var(--color-cream)" }}
                >
                  {t("whatIs.badge")}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                  {t("whatIs.title")}
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-cream)" }}
                >
                  {t("whatIs.desc")}
                </p>
                <div
                  className="mt-8 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="font-medium text-white">
                    {t("whatIs.note")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={images.stemCells}
                    alt="Microscopic view of stem cells"
                    className="w-full h-100 object-cover"
                  />
                </div>

                <div
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl backdrop-blur-md"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <h3
                    className="font-serif text-lg font-bold mb-2"
                    style={{ color: "var(--color-wine)" }}
                  >
                    {t("whatIs.truthTitle")}
                  </h3>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("whatIs.truthDesc")}
                  </p>
                  <div className="space-y-1">
                    {["truth1", "truth2", "truth3"].map((key, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs"
                      >
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: "var(--color-rose)" }}
                        />
                        <span style={{ color: "var(--color-taupe)" }}>
                          {t(`whatIs.${key}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Types of Stem Cells */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--color-brown)" }}
              >
                {t("types.title")}
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                {t("types.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* HSCs */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2070&auto=format&fit=crop"
                    alt="Hematopoietic stem cells"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-wine)" }}
                  >
                    <Droplets
                      className="w-6 h-6"
                      style={{ color: "var(--color-wine)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("types.hscTitle")}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("types.hscDesc")}
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-wine)" }}
                    >
                      ✓ {t("types.hscBadge")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* MSCs */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
                    alt="Mesenchymal stem cells in lab"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-rose)" }}
                  >
                    <Microscope
                      className="w-6 h-6"
                      style={{ color: "var(--color-rose)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("types.mscTitle")}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("types.mscDesc")}
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-brown)" }}
                    >
                      ⚠️ {t("types.mscBadge")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Embryonic & iPS */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                    alt="DNA research"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    <Activity
                      className="w-6 h-6"
                      style={{ color: "var(--color-taupe)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("types.ipsTitle")}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("types.ipsDesc")}
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-brown)" }}
                    >
                      ⚠️ {t("types.ipsBadge")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Proven vs Experimental */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <div
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: "var(--color-wine)" }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-6">
                    {t("proven.provenTitle")}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white">
                        &ldquo;{t("proven.provenQuote")}&rdquo;
                      </p>
                    </div>
                    <p className="text-white/80 text-sm">
                      {t("proven.provenNote")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src={images.labResearch}
                  alt="Medical research laboratory"
                  className="rounded-3xl w-full h-100 object-cover"
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-md"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <h4
                      className="font-serif font-bold"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {t("proven.studiedTitle")}
                    </h4>
                  </div>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("proven.studiedDesc")}
                  </p>
                  <p className="text-xs italic">
                    {t("proven.studiedNote")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nexus Clinic Approach */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="font-serif text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("approach.title")}
                </h2>
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  {t("approach.desc")}
                </p>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <img
                  src={images.consultation}
                  alt="Private consultation at Nexus Clinic"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  {t("approach.badge")}
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: t("approach.step1Title"), desc: t("approach.step1Desc") },
                { step: 2, title: t("approach.step2Title"), desc: t("approach.step2Desc") },
                { step: 3, title: t("approach.step3Title"), desc: t("approach.step3Desc") },
                { step: 4, title: t("approach.step4Title"), desc: t("approach.step4Desc") },
              ].map((item, idx) => (
                <motion.div key={idx} variants={scaleIn} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white"
                      style={{ backgroundColor: "var(--color-wine)" }}
                    >
                      {item.step}
                    </div>
                    <h3
                      className="font-serif text-lg font-bold mb-2"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-rose" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Patient Care Image Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-125 overflow-hidden"
        >
          <img
            src={images.patientCare}
            alt="Patient care at Nexus Clinic"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-linear(to right, var(--color-brown), transparent)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div variants={fadeInLeft} className="max-w-xl text-white">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  {t("safety.title")}
                </h2>
                <p className="text-xl mb-8 text-cream">
                  {t("safety.desc")}
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t("safety.stat1")}</div>
                    <div className="text-sm text-cream">{t("safety.stat1Label")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t("safety.stat2")}</div>
                    <div className="text-sm text-cream">{t("safety.stat2Label")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{t("safety.stat3")}</div>
                    <div className="text-sm text-cream">{t("safety.stat3Label")}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits & Risks */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits */}
              <motion.div variants={fadeInLeft}>
                <div
                  className="rounded-3xl p-8"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <Heart
                    className="w-12 h-12 mb-6"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <h3
                    className="font-serif text-3xl font-bold mb-6"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("benefits.title")}
                  </h3>
                  <ul className="space-y-4">
                    {["b1", "b2", "b3", "b4", "b5"].map((key, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span style={{ color: "var(--color-brown)" }}>
                          {t(`benefits.${key}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 rounded-lg bg-white">
                    <p className="text-sm italic">
                      {t("benefits.note")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Risks */}
              <motion.div variants={fadeInRight}>
                <div className="rounded-3xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1932&auto=format&fit=crop"
                    alt="Medical consultation discussing risks"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div
                  className="rounded-3xl p-8 border-2"
                  style={{ borderColor: "var(--color-wine)" }}
                >
                  <AlertCircle
                    className="w-12 h-12 mb-6"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <h3
                    className="font-serif text-3xl font-bold mb-6"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("risks.title")}
                  </h3>
                  <p
                    className="mb-4 font-medium"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {t("risks.intro")}
                  </p>
                  <div className="space-y-3 mb-6">
                    {["r1", "r2", "r3", "r4", "r5", "r6"].map((key, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <XCircle
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-taupe)" }}
                        >
                          {t(`risks.${key}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Clinic Location Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-100 overflow-hidden"
        >
          <img
            src={images.clinic}
            alt="Nexus Clinic interior"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-linear(to left, var(--color-wine), transparent)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-end">
            <motion.div
              variants={fadeInRight}
              className="max-w-xl text-white text-right p-8"
            >
              <h2 className="font-serif text-4xl font-bold mb-4">
                {t("location.title")}
              </h2>
              <p className="text-lg mb-6">{t("location.address")}</p>
              <div className="flex justify-end gap-4">
                <div className="text-center bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">{t("location.phone")}</p>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">{t("location.unit")}</p>
                </div>
              </div>
            </motion.div>
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
          className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="Modern medical facility"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.9 }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-12 text-cream">
              {t("cta.desc")}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm max-w-md mx-auto">
                <p className="font-serif text-lg mb-2">
                  {t("cta.clinicName")}
                </p>
                <p className="text-sm text-cream mb-4">
                  {t("cta.clinicAddress")}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>{t("cta.clinicPhone")}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-full font-medium text-lg shadow-xl"
                style={{ color: "var(--color-wine)" }}
              >
                {t("cta.button")}
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default StemCellLanding;
