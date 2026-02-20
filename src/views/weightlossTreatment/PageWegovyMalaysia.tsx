"use client";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Users,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  TrendingDown,
  Heart,
  Sparkles,
  Award,
  ChevronDown,
  MapPin,
  Zap,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  rowVariants,
  containerVariants,
} from "../../lib/animations";
import BeforeAfterSection from "../../components/BeforeAfter";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const pulseGlow = {
  initial: { boxShadow: "0 0 0 0 rgba(140, 79, 88, 0.4)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(140, 79, 88, 0.4)",
      "0 0 0 20px rgba(140, 79, 88, 0)",
      "0 0 0 0 rgba(140, 79, 88, 0)",
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default function PageWegovyMalaysia({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "wegovy");

  const dataFaq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const features = [
    {
      feature: t("comparison.feat1"),
      mounjaro: t("comparison.feat1Mounjaro"),
      ozempic: t("comparison.feat1Ozempic"),
      saxenda: t("comparison.feat1Saxenda"),
    },
    {
      feature: t("comparison.feat2"),
      mounjaro: t("comparison.feat2Mounjaro"),
      ozempic: t("comparison.feat2Ozempic"),
      saxenda: t("comparison.feat2Saxenda"),
    },
    {
      feature: t("comparison.feat3"),
      mounjaro: t("comparison.feat3Mounjaro"),
      ozempic: t("comparison.feat3Ozempic"),
      saxenda: t("comparison.feat3Saxenda"),
      highlight: "mounjaro",
    },
    {
      feature: t("comparison.feat4"),
      mounjaro: t("comparison.feat4Mounjaro"),
      ozempic: t("comparison.feat4Ozempic"),
      saxenda: t("comparison.feat4Saxenda"),
      highlight: "mounjaro",
    },
    {
      feature: t("comparison.feat5"),
      mounjaro: t("comparison.feat5Mounjaro"),
      ozempic: t("comparison.feat5Ozempic"),
      saxenda: t("comparison.feat5Saxenda"),
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-light font-inter overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-linear-to-br from-cream via-light to-cream overflow-hidden">
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-wine/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-8"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  {t("hero.badge")}
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-georgia text-brown leading-tight"
                >
                  {t("hero.title1")}{" "}
                  <span className="text-wine relative">
                    {t("hero.title2")}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      <motion.path
                        d="M0 6 Q50 0 100 6 T200 6"
                        fill="none"
                        stroke="#8C4F58"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed max-w-xl"
                >
                  {t("hero.description")}
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-6"
                >
                  {[
                    { number: t("hero.stat1Number"), label: t("hero.stat1Label") },
                    { number: t("hero.stat2Number"), label: t("hero.stat2Label") },
                    { number: t("hero.stat3Number"), label: t("hero.stat3Label") },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-georgia text-wine font-bold">
                        {stat.number}
                      </div>
                      <div className="text-sm text-taupe">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-wine text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-wine/30 hover:bg-wine/90 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    {t("hero.bookConsultation")}
                  </motion.a>
                  <motion.a
                    href="https://wa.link/q64h1l"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm border border-wine/20 text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/10 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("hero.chatWithDoctor")}
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Content - Hero Image/Card */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <motion.div
                  className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t("hero.limitedOffer")}
                  </div>

                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80"
                      alt={t("hero.heroImageAlt")}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-wine/30 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-georgia text-brown mb-2">
                    {t("hero.heroCardTitle")}
                  </h3>
                  <p className="text-taupe mb-4">
                    {t("hero.heroCardDesc")}
                  </p>

                  <div className="flex items-center justify-between border-t border-taupe/20 pt-4">
                    <div>
                      <span className="text-sm text-taupe">{t("hero.startingFrom")}</span>
                      <div className="text-2xl font-bold text-wine">
                        RM {t("hero.price")}
                        <span className="text-sm font-normal">{t("hero.perMonth")}</span>
                      </div>
                    </div>
                    <motion.div
                      {...pulseGlow}
                      className="w-12 h-12 bg-wine rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-brown">{t("hero.fdaApproved")}</div>
                      <div className="text-sm text-taupe">
                        {t("hero.clinicallyTested")}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-wine/50" />
          </motion.div>
        </section>

        {/* What is Wegovy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content */}
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  {t("whatIs.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-georgia text-brown">
                  {t("whatIs.title")}
                </h2>
                <div className="space-y-4 text-taupe leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t("whatIs.desc1") }} />
                  <p>
                    {t("whatIs.desc2")}
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: TrendingDown, text: t("whatIs.point1") },
                    { icon: Clock, text: t("whatIs.point2") },
                    { icon: Heart, text: t("whatIs.point3") },
                    { icon: Zap, text: t("whatIs.point4") },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-center gap-3 bg-cream/50 p-4 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-wine/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <span className="text-brown font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Background circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full border-2 border-wine/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full border-2 border-rose/20 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-48 h-48 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center shadow-2xl shadow-wine/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold">{t("whatIs.avgWeightLoss")}</div>
                        <div className="text-sm opacity-80">
                          {t("whatIs.avgWeightLossLabel")}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  {[
                    {
                      top: "10%",
                      left: "10%",
                      label: t("whatIs.floatingLabel1"),
                    },
                    {
                      top: "10%",
                      right: "10%",
                      label: t("whatIs.floatingLabel2"),
                    },
                    {
                      bottom: "10%",
                      left: "10%",
                      label: t("whatIs.floatingLabel3"),
                    },
                    {
                      bottom: "10%",
                      right: "10%",
                      label: t("whatIs.floatingLabel4"),
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white rounded-xl p-3 shadow-lg"
                      style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-xs text-brown font-medium whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                {t("benefits.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                {t("benefits.title")}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: TrendingDown,
                  title: t("benefits.item1Title"),
                  description: t("benefits.item1Desc"),
                  highlight: t("benefits.item1Highlight"),
                },
                {
                  icon: Heart,
                  title: t("benefits.item2Title"),
                  description: t("benefits.item2Desc"),
                  highlight: t("benefits.item2Highlight"),
                },
                {
                  icon: Zap,
                  title: t("benefits.item3Title"),
                  description: t("benefits.item3Desc"),
                  highlight: t("benefits.item3Highlight"),
                },
                {
                  icon: Clock,
                  title: t("benefits.item4Title"),
                  description: t("benefits.item4Desc"),
                  highlight: t("benefits.item4Highlight"),
                },
                {
                  icon: Shield,
                  title: t("benefits.item5Title"),
                  description: t("benefits.item5Desc"),
                  highlight: t("benefits.item5Highlight"),
                },
                {
                  icon: Award,
                  title: t("benefits.item6Title"),
                  description: t("benefits.item6Desc"),
                  highlight: t("benefits.item6Highlight"),
                },
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <motion.div
                    className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-brown/5 border border-transparent hover:border-wine/20 transition-all duration-300"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(140, 79, 88, 0.15)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center group-hover:bg-wine transition-colors">
                        <benefit.icon className="w-7 h-7 text-wine group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-3xl font-bold text-wine/20 group-hover:text-wine/40 transition-colors">
                        {benefit.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-georgia text-brown mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* before after Section */}
        <BeforeAfterSection />

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-cream">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ opacity: "1", transform: "none" }}
          >
            <span className="text-wine font-medium tracking-wider uppercase text-sm">
              {t("comparison.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
              {t("comparison.title")}
            </h2>
            <p className="text-taupe mt-4">
              {t("comparison.subtitle")}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Desktop Table */}
            <motion.div
              className="hidden md:block overflow-x-auto rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-wine text-light">
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      {t("comparison.featureHeader")}
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      {t("comparison.mounjaro")}
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      {t("comparison.ozempic")}
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      {t("comparison.saxenda")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className={`
                  ${index % 2 === 0 ? "bg-light" : "bg-cream"}
                  hover:bg-taupe/20 transition-colors duration-200
                  border-b border-taupe/20
                `}
                    >
                      <td className="px-6 py-4 font-inter font-semibold text-brown">
                        {item.feature}
                      </td>
                      <td
                        className={`px-6 py-4 font-inter text-center ${item.highlight === "mounjaro" ? "text-wine font-bold bg-wine/10" : "text-brown/80"}`}
                      >
                        {item.mounjaro}
                      </td>
                      <td className="px-6 py-4 font-inter text-center text-brown/80">
                        {item.ozempic}
                      </td>
                      <td className="px-6 py-4 font-inter text-center text-brown/80">
                        {item.saxenda}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Cards */}
            <motion.div
              className="md:hidden space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Mounjaro Card */}
              <motion.div
                variants={rowVariants}
                className="bg-wine/10 rounded-xl p-5 shadow-md border-l-4 border-wine"
              >
                <h4 className="font-inter font-bold text-wine text-xl mb-3">
                  {t("comparison.mounjaro")}
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span
                        className={`${item.highlight === "mounjaro" ? "text-wine font-bold" : "text-brown/80"}`}
                      >
                        {item.mounjaro}
                      </span>
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Ozempic Card */}
              <motion.div
                variants={rowVariants}
                className="bg-light rounded-xl p-5 shadow-md border-l-4 border-rose"
              >
                <h4 className="font-inter font-bold text-brown text-xl mb-3">
                  {t("comparison.ozempic")}
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span className="text-brown/80">{item.ozempic}</span>
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Saxenda Card */}
              <motion.div
                variants={rowVariants}
                className="bg-light rounded-xl p-5 shadow-md border-l-4 border-taupe"
              >
                <h4 className="font-inter font-bold text-brown text-xl mb-3">
                  {t("comparison.saxenda")}
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span className="text-brown/80">{item.saxenda}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Footer */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-brown font-inter"
            >
              {t("comparison.ctaText")}{" "}
              <a
                href="/contact-us"
                className="text-wine hover:text-rose underline font-semibold transition-colors"
              >
                {t("comparison.ctaLink")}
              </a>{" "}
              {t("comparison.ctaEnd")}
            </motion.p>
          </div>
        </section>

        {/* Is Wegovy Right For You */}
        <section className="py-24 bg-brown text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="text-rose font-medium tracking-wider uppercase text-sm"
                >
                  {t("eligibility.badge")}
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-georgia"
                >
                  {t("eligibility.title")}
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-cream/80 leading-relaxed"
                >
                  {t("eligibility.description")}
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {[
                    t("eligibility.criteria1"),
                    t("eligibility.criteria2"),
                    t("eligibility.criteria3"),
                    t("eligibility.criteria4"),
                    t("eligibility.criteria5"),
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-rose shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    href="#booking"
                    className="inline-flex items-center gap-2 bg-rose text-white px-6 py-3 rounded-full font-medium hover:bg-rose/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-5 h-5" />
                    {t("eligibility.bookAssessment")}
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Decorative Visual */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  {/* Glowing orbs */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-wine rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-rose rounded-full blur-2xl"
                    animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Main card */}
                  <motion.div
                    className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                    whileHover={{ y: -10 }}
                  >
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-wine/30 rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-bold text-white">
                          {t("eligibility.satisfiedClients")}
                        </div>
                        <div className="text-cream/70 mt-2">
                          {t("eligibility.satisfiedClientsLabel")}
                        </div>
                      </div>
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-rose text-rose"
                          />
                        ))}
                      </div>
                      <p className="text-cream/80 italic">
                        &ldquo;{t("eligibility.testimonialQuote")}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                {t("testimonials.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                {t("testimonials.title")}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  name: t("testimonials.review1Name"),
                  location: t("testimonials.review1Location"),
                  quote: t("testimonials.review1Quote"),
                  result: t("testimonials.review1Result"),
                },
                {
                  name: t("testimonials.review2Name"),
                  location: t("testimonials.review2Location"),
                  quote: t("testimonials.review2Quote"),
                  result: t("testimonials.review2Result"),
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-xl shadow-brown/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-rose text-rose" />
                    ))}
                  </div>
                  <p className="text-brown text-lg italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-brown">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-taupe flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="bg-wine/10 text-wine px-4 py-2 rounded-full font-bold">
                      {testimonial.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                {t("pricing.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                {t("pricing.title")}
              </h2>
              <p className="text-taupe mt-4">
                {t("pricing.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  name: t("pricing.plan1Name"),
                  price: t("pricing.plan1Price"),
                  period: t("pricing.plan1Period"),
                  features: [
                    t("pricing.plan1Feat1"),
                    t("pricing.plan1Feat2"),
                    t("pricing.plan1Feat3"),
                    t("pricing.plan1Feat4"),
                    t("pricing.plan1Feat5"),
                  ],
                  popular: false,
                },
                {
                  name: t("pricing.plan2Name"),
                  price: t("pricing.plan2Price"),
                  period: t("pricing.plan2Period"),
                  features: [
                    t("pricing.plan2Feat1"),
                    t("pricing.plan2Feat2"),
                    t("pricing.plan2Feat3"),
                    t("pricing.plan2Feat4"),
                    t("pricing.plan2Feat5"),
                  ],
                  popular: true,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-linear-to-br from-wine to-rose text-white"
                      : "bg-cream/50 border border-taupe/20"
                  }`}
                  whileHover={{
                    y: -10,
                    boxShadow: plan.popular
                      ? "0 25px 50px -12px rgba(140, 79, 88, 0.4)"
                      : "0 25px 50px -12px rgba(75, 58, 51, 0.1)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 bg-brown text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t("pricing.mostPopular")}
                    </div>
                  )}

                  <h3
                    className={`text-2xl font-georgia mb-2 ${plan.popular ? "text-white" : "text-brown"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm">RM</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={plan.popular ? "text-white/70" : "text-taupe"}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 ${plan.popular ? "text-white" : "text-wine"}`}
                        />
                        <span
                          className={
                            plan.popular ? "text-white/90" : "text-brown"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-medium transition-colors ${
                      plan.popular
                        ? "bg-white text-wine hover:bg-cream"
                        : "bg-wine text-white hover:bg-wine/90"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("pricing.getStarted")}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {/* Special Offer Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-linear-to-r from-rose/20 to-wine/20 rounded-2xl p-8 text-center max-w-2xl mx-auto"
            >
              <Sparkles className="w-10 h-10 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-georgia text-brown mb-2">
                {t("pricing.offerTitle")}
              </h3>
              <p className="text-taupe mb-4">
                {t("pricing.offerDesc")}
              </p>
              <motion.a
                href="#booking"
                className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("pricing.claimOffer")}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <FAQ data={dataFaq} />

        {/* CTA Section */}
        <section
          id="booking"
          className="py-24 bg-linear-to-br from-brown via-brown to-wine text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-georgia mb-6"
              >
                {t("cta.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto"
              >
                {t("cta.description")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                <motion.a
                  href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                  className="inline-flex items-center gap-3 bg-white text-wine px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-6 h-6" />
                  {t("cta.bookAppointment")}
                </motion.a>
                <motion.a
                  href="https://wa.link/q64h1l"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  {t("cta.whatsappUs")}
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 grid sm:grid-cols-3 gap-8"
              >
                {[
                  {
                    icon: MapPin,
                    label: t("cta.address"),
                  },
                  { icon: Phone, label: t("cta.phone") },
                  { icon: Clock, label: t("cta.hours") },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-rose" />
                    </div>
                    <span className="text-cream/80">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
