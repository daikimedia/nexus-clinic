"use client";
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Heart,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Target,
  Sparkles,
  Users,
  FileText,
  Syringe,
  Info,
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

const TirzepatideLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "tirzepatide");

  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5"),
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Glass Element */}
          <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-cream" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center space-x-2 bg-wine/10 px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <h1 className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl leading-tight">
                  {t("hero.title1")}{" "}
                  <span className="text-wine italic">{t("hero.titleBold")}</span>
                  <br />
                  {t("hero.title2")}
                </h1>

                <p className="text-xl text-brown/80 max-w-lg">
                  {t("hero.description")}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-wine text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>{t("hero.bookButton")}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Quick Proof Bar */}
                <motion.div
                  variants={scaleIn}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
                >
                  {[
                    { icon: FileText, text: t("hero.proof1") },
                    { icon: Syringe, text: t("hero.proof2") },
                    { icon: Users, text: t("hero.proof3") },
                    { icon: Heart, text: t("hero.proof4") },
                    { icon: Shield, text: t("hero.proof5") },
                    { icon: Info, text: t("hero.proof6") },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-brown"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Glass Card */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t("hero.doctorMonitored")}
                  </div>

                  <h3 className="font-['Georgia',serif] text-2xl mb-6 text-brown">
                    {t("hero.cardTitle")}
                  </h3>

                  <div className="space-y-6">
                    {[
                      t("hero.cardItem1"),
                      t("hero.cardItem2"),
                      t("hero.cardItem3"),
                      t("hero.cardItem4"),
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-taupe/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-taupe/20 border-2 border-white"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-brown">
                          {t("hero.patients")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  {t("understanding.title1")}
                  <br />
                  <span className="text-wine">
                    {t("understanding.title2")}
                  </span>
                </h2>
                <p className="text-lg text-brown/80 max-w-2xl mx-auto">
                  {t("understanding.subtitle")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-wine/5 rounded-full blur-3xl" />

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-6">
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      {t("understanding.scienceTitle")}
                    </h3>
                    <p className="text-brown leading-relaxed">
                      {t("understanding.scienceDesc")}
                    </p>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-wine" />
                        </div>
                        <div>
                          <div className="text-sm text-brown/70">
                            {t("understanding.activeIn")}
                          </div>
                          <div className="font-medium text-brown">
                            {t("understanding.activeInBrands")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      {t("understanding.patientsNoticeTitle")}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        t("understanding.notice1"),
                        t("understanding.notice2"),
                        t("understanding.notice3"),
                        t("understanding.notice4"),
                        t("understanding.notice5"),
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-wine" />
                          <span className="text-brown">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Target className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    {t("whoFor.badge")}
                  </span>
                </div>

                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("whoFor.suitTitle")}
                </h2>

                <div className="space-y-4">
                  {[
                    t("whoFor.suit1"),
                    t("whoFor.suit2"),
                    t("whoFor.suit3"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-rose/10 px-4 py-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-rose" />
                  <span className="text-sm font-medium text-rose">
                    {t("whoFor.notSuitBadge")}
                  </span>
                </div>

                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("whoFor.notSuitTitle")}
                </h2>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose">
                  <p className="text-sm text-brown/70 mb-4">
                    {t("whoFor.notSuitIntro")}
                  </p>
                  <ul className="space-y-3">
                    {[
                      t("whoFor.notSuit1"),
                      t("whoFor.notSuit2"),
                      t("whoFor.notSuit3"),
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-brown/50 mt-4">
                    {t("whoFor.cautionNote")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  {t("results.title1")}
                  <br />
                  <span className="text-wine">{t("results.title2")}</span>
                </h2>
                <p className="text-lg text-brown/80">
                  {t("results.subtitle")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  {
                    value: t("results.stat1Value"),
                    label: t("results.stat1Label"),
                    sub: t("results.stat1Sub"),
                  },
                  {
                    value: t("results.stat2Value"),
                    label: t("results.stat2Label"),
                    sub: t("results.stat2Sub"),
                  },
                  {
                    value: t("results.stat3Value"),
                    label: t("results.stat3Label"),
                    sub: t("results.stat3Sub"),
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-cream rounded-2xl p-6 text-center"
                  >
                    <div className="font-['Georgia',serif] text-3xl text-wine font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="font-medium text-brown">{stat.label}</div>
                    <div className="text-sm text-brown/60">{stat.sub}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-6">
                  {t("results.timelineTitle")}
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    {
                      period: t("results.tl1Period"),
                      desc: t("results.tl1Desc"),
                      icon: Clock,
                    },
                    {
                      period: t("results.tl2Period"),
                      desc: t("results.tl2Desc"),
                      icon: TrendingDown,
                    },
                    {
                      period: t("results.tl3Period"),
                      desc: t("results.tl3Desc"),
                      icon: Heart,
                    },
                    {
                      period: t("results.tl4Period"),
                      desc: t("results.tl4Desc"),
                      icon: Target,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <div className="font-medium text-sm mb-1">
                          {item.period}
                        </div>
                        <div className="text-xs text-white/80">{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-white/70 mt-4">
                  {t("results.regainNote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nexus Approach Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  {t("approach.title")}
                  <br />
                  <span className="text-wine text-2xl">
                    {t("approach.subtitle")}
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: t("approach.step1Title"),
                    items: t("approach.step1Items", { returnObjects: true }) as string[],
                  },
                  {
                    step: "02",
                    title: t("approach.step2Title"),
                    items: t("approach.step2Items", { returnObjects: true }) as string[],
                  },
                  {
                    step: "03",
                    title: t("approach.step3Title"),
                    items: t("approach.step3Items", { returnObjects: true }) as string[],
                  },
                  {
                    step: "04",
                    title: t("approach.step4Title"),
                    items: t("approach.step4Items", { returnObjects: true }) as string[],
                  },
                  {
                    step: "05",
                    title: t("approach.step5Title"),
                    items: t("approach.step5Items", { returnObjects: true }) as string[],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                        <span className="font-['Georgia',serif] text-xl text-wine">
                          {phase.step}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                          {phase.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {(Array.isArray(phase.items) ? phase.items : []).map((item: string, i: number) => (
                            <span
                              key={i}
                              className="bg-cream px-3 py-1 rounded-full text-sm text-brown"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Side Effects Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("sideEffects.title1")}
                  <br />
                  <span className="text-wine">
                    {t("sideEffects.title2")}
                  </span>
                </h2>

                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-medium text-brown mb-4">
                    {t("sideEffects.commonTitle")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      t("sideEffects.common1"),
                      t("sideEffects.common2"),
                      t("sideEffects.common3"),
                      t("sideEffects.common4"),
                      t("sideEffects.common5"),
                      t("sideEffects.common6"),
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                        <span className="text-brown">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-brown">
                    {t("sideEffects.reduceTitle")}
                  </h3>
                  {[
                    t("sideEffects.tip1"),
                    t("sideEffects.tip2"),
                    t("sideEffects.tip3"),
                    t("sideEffects.tip4"),
                    t("sideEffects.tip5"),
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="bg-rose/10 rounded-2xl p-6 border-l-4 border-rose">
                  <h3 className="font-medium text-brown mb-4 flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-rose" />
                    <span>{t("sideEffects.safetyTitle")}</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm text-brown">
                      <span className="font-medium">{t("sideEffects.boxedWarning")}</span>{" "}
                      {t("sideEffects.boxedWarningDesc")}
                    </li>
                    <li className="text-sm text-brown">
                      <span className="font-medium">
                        {t("sideEffects.npraWarning")}
                      </span>{" "}
                      {t("sideEffects.npraWarningDesc")}
                    </li>
                    <li className="text-sm text-brown font-medium">
                      {t("sideEffects.severeNote")}
                    </li>
                  </ul>
                </div>

                <div className="bg-wine text-white rounded-2xl p-6">
                  <h3 className="font-['Georgia',serif] text-xl mb-4">
                    {t("sideEffects.tellDoctorTitle")}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {t("sideEffects.tellDoctorDesc")}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-2">
                      <Info className="w-4 h-4" />
                      <span className="text-sm">
                        {t("sideEffects.npraNote")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost & Comparison Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("cost.title")}
                </h2>
                <p className="text-lg text-brown/80 mt-4">
                  {t("cost.subtitle")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 shadow-lg mb-12"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-4">
                      {t("cost.factorsTitle")}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        t("cost.factor1"),
                        t("cost.factor2"),
                        t("cost.factor3"),
                        t("cost.factor4"),
                        t("cost.factor5"),
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                          <span className="text-brown">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6">
                    <p className="text-brown text-sm">
                      {t("cost.pricingNote")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <h3 className="font-['Georgia',serif] text-2xl text-brown text-center">
                  {t("cost.comparisonTitle")}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-medium text-wine mb-3">
                      {t("cost.vsSemaTitle")}
                    </h4>
                    <p className="text-sm text-brown">
                      {t("cost.vsSemaDesc")}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-medium text-wine mb-3">
                      {t("cost.vsFatTitle")}
                    </h4>
                    <p className="text-sm text-brown">
                      {t("cost.vsFatDesc")}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                    <h4 className="font-medium text-wine mb-3">
                      {t("cost.vsPillsTitle")}
                    </h4>
                    <p className="text-sm text-brown">
                      {t("cost.vsPillsDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA Section */}
        <section className="py-24 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                {t("cta.title1")}
                <br />
                <span className="italic">{t("cta.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-12 text-white/90"
              >
                {t("cta.description")}
              </motion.p>

              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-5 rounded-full text-lg font-medium hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center space-x-3"
              >
                <span>{t("cta.button")}</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-white/70 mt-6"
              >
                {t("cta.footer")}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TirzepatideLanding;
