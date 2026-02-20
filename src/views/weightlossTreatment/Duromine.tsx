"use client";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Brain,
  BrainCircuit,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock,
  Droplet,
  FileCheck,
  Heart,
  Info,
  Lock,
  Moon,
  Pill,
  Scale,
  Shield,
  Stethoscope,
  Syringe,
  Target,
  Thermometer,
  TrendingDown,
  UserCheck,
  Utensils,
  Volume2,
  X,
  XCircle,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const DuromineLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "duromine");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-[(--font-inter)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-linear(circle at 30% 50%, var(--color-wine) 0%, transparent 25%),
                              radial-linear(circle at 80% 80%, var(--color-rose) 0%, transparent 30%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
          />

          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 rounded-full mb-6"
                >
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-[(--font-georgia)] text-4xl md:text-5xl lg:text-6xl text-brown mb-6 leading-tight"
                >
                  {t("hero.title1")}{" "}
                  <span className="text-wine relative">
                    {t("hero.title2")}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-1 bg-rose/30"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-taupe mb-8 max-w-lg"
                >
                  {t("hero.description")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    {t("hero.startJourney")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-all duration-300">
                    {t("hero.learnMore")}
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 mt-8 pt-8 border-t border-taupe/20"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-linear-to-br from-wine to-rose ring-2 ring-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-brown">
                    <span className="font-bold">{t("hero.patientsCount")}</span> {t("hero.patientsStarted")}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Brain, text: t("hero.card1") },
                      { icon: Heart, text: t("hero.card2") },
                      { icon: Shield, text: t("hero.card3") },
                      { icon: Clock, text: t("hero.card4") },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index}
                        className="text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-wine/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-wine" />
                        </div>
                        <p className="text-sm text-brown">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 p-4 bg-cream rounded-2xl"
                    variants={fadeInUp}
                  >
                    <p className="text-sm text-brown">
                      <span className="font-bold text-wine">
                        {t("hero.npraNote")}
                      </span>{" "}
                      {t("hero.npraDesc")}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: UserCheck, title: t("trust.item1Title"), desc: t("trust.item1Desc") },
                { icon: FileCheck, title: t("trust.item2Title"), desc: t("trust.item2Desc") },
                { icon: CalendarCheck, title: t("trust.item3Title"), desc: t("trust.item3Desc") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cream"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-wine/10 group-hover:bg-wine transition-colors duration-300 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-wine group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-2 font-[(--font-georgia)]">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-wine uppercase tracking-wider">
                  {t("overview.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">
                  {t("overview.title")}
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: Pill, title: t("overview.item1Title"), desc: t("overview.item1Desc") },
                    { icon: Target, title: t("overview.item2Title"), desc: t("overview.item2Desc") },
                    { icon: BrainCircuit, title: t("overview.item3Title"), desc: t("overview.item3Desc") },
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-wine/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brown">{item.title}</h3>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-[(--font-georgia)] mb-4">
                    {t("overview.importantTitle")}
                  </h3>
                  <p className="mb-4 opacity-90">
                    {t("overview.importantDesc")}
                  </p>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-sm">
                      <span className="font-bold">{t("overview.notFatPill")}</span>{" "}
                      {t("overview.notFatPillDesc")}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
                >
                  <Pill className="w-10 h-10 text-wine" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">
                {t("whoItsFor.badge")}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">
                {t("whoItsFor.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">
                {t("whoItsFor.subtitle")}
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  {t("whoItsFor.suitableTitle")}
                </h3>
                <div className="space-y-4">
                  {[t("whoItsFor.suitable1"), t("whoItsFor.suitable2"), t("whoItsFor.suitable3"), t("whoItsFor.suitable4")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  {t("whoItsFor.notSuitableTitle")}
                </h3>
                <div className="space-y-4">
                  {[t("whoItsFor.notSuitable1"), t("whoItsFor.notSuitable2"), t("whoItsFor.notSuitable3"), t("whoItsFor.notSuitable4"), t("whoItsFor.notSuitable5"), t("whoItsFor.notSuitable6")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-bold text-brown">{t("whoItsFor.alcoholTitle")}</p>
                  <p className="text-taupe">{t("whoItsFor.alcoholDesc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">{t("howItWorks.badge")}</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">{t("howItWorks.title")}</motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Volume2 className="w-8 h-8" />
                    <h3 className="text-2xl font-[(--font-georgia)]">{t("howItWorks.volumeTitle")}</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-90">{t("howItWorks.volumeDesc1")}</p>
                  <p>{t("howItWorks.volumeDesc2")}</p>
                </div>

                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-48 bg-white rounded-full shadow-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-full bg-wine absolute bottom-0"
                    initial={{ height: "80%" }}
                    animate={{ height: "30%" }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6">{t("howItWorks.easierTitle")}</h3>
                <div className="space-y-4">
                  {[
                    { icon: Utensils, text: t("howItWorks.easier1") },
                    { icon: Scale, text: t("howItWorks.easier2") },
                    { icon: Moon, text: t("howItWorks.easier3") },
                    { icon: Activity, text: t("howItWorks.easier4") },
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <span className="text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey at Nexus Clinic */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">{t("journey.badge")}</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">{t("journey.title")}</motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">{t("journey.subtitle")}</motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: t("journey.step1"), title: t("journey.step1Title"), icon: Stethoscope, items: [t("journey.step1Item1"), t("journey.step1Item2"), t("journey.step1Item3"), t("journey.step1Item4")] },
                { step: t("journey.step2"), title: t("journey.step2Title"), icon: ClipboardList, items: [t("journey.step2Item1"), t("journey.step2Item2"), t("journey.step2Item3"), t("journey.step2Item4")] },
                { step: t("journey.step3"), title: t("journey.step3Title"), icon: Activity, items: [t("journey.step3Item1"), t("journey.step3Item2"), t("journey.step3Item3"), t("journey.step3Item4")] },
              ].map((phase, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-wine to-rose rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg h-full">
                    <span className="text-6xl font-[(--font-georgia)] text-wine/10 font-bold">{phase.step}</span>
                    <div className="mt-4">
                      <div className="w-12 h-12 mb-4 rounded-lg bg-wine/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-wine" />
                      </div>
                      <h3 className="text-xl font-bold text-brown mb-4 font-[(--font-georgia)]">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-taupe">
                            <Check className="w-4 h-4 text-wine" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 p-6 bg-wine/5 rounded-2xl border border-wine/20 text-center">
              <p className="text-brown">
                <span className="font-bold">Important:</span> {t("journey.safetyNote")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-sm font-medium text-wine uppercase tracking-wider">{t("results.badge")}</span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">{t("results.title")}</h2>
                <div className="space-y-4">
                  {[t("results.result1"), t("results.result2"), t("results.result3"), t("results.result4")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={fadeInUp} className="mt-8 p-4 bg-cream rounded-xl">
                  <p className="text-sm text-brown italic">&ldquo;{t("results.disclaimer")}&rdquo;</p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream">
                  <h3 className="text-xl font-[(--font-georgia)] text-brown mb-6">{t("results.timelineTitle")}</h3>
                  <div className="space-y-6">
                    {[
                      { week: t("results.week1"), desc: t("results.week1Desc"), progress: 20 },
                      { week: t("results.week2"), desc: t("results.week2Desc"), progress: 40 },
                      { week: t("results.week4"), desc: t("results.week4Desc"), progress: 60 },
                      { week: t("results.week8"), desc: t("results.week8Desc"), progress: 80 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-brown">{item.week}</span>
                          <span className="text-wine">{item.desc}</span>
                        </div>
                        <div className="h-2 bg-cream rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-linear-to-r from-wine to-rose rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">{t("proscons.badge")}</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">{t("proscons.title")}</motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-[(--font-georgia)] text-green-600 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  {t("proscons.benefitsTitle")}
                </h3>
                <div className="space-y-4">
                  {[t("proscons.benefit1"), t("proscons.benefit2"), t("proscons.benefit3"), t("proscons.benefit4")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">
                <h3 className="text-2xl font-[(--font-georgia)] text-red-600 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  {t("proscons.downsideTitle")}
                </h3>
                <div className="space-y-4">
                  {[t("proscons.downside1"), t("proscons.downside2"), t("proscons.downside3"), t("proscons.downside4")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Side Effects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <span className="text-sm font-medium text-wine uppercase tracking-wider">{t("sideEffects.badge")}</span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">{t("sideEffects.title")}</h2>

                <div className="grid grid-cols-2 gap-4">
                  {[t("sideEffects.effect1"), t("sideEffects.effect2"), t("sideEffects.effect3"), t("sideEffects.effect4"), t("sideEffects.effect5"), t("sideEffects.effect6")].map((effect, index) => (
                    <motion.div key={index} variants={fadeInUp} className="p-4 bg-white rounded-xl shadow-md flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-brown">{effect}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp} className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-200">
                  <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {t("sideEffects.urgentTitle")}
                  </h3>
                  <p className="text-sm text-red-600">{t("sideEffects.urgentDesc")}</p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white h-full">
                  <h3 className="text-2xl font-[(--font-georgia)] mb-4">{t("sideEffects.supervisionTitle")}</h3>
                  <p className="mb-6 opacity-90">{t("sideEffects.supervisionDesc")}</p>
                  <div className="space-y-4">
                    {[t("sideEffects.monitoring1"), t("sideEffects.monitoring2"), t("sideEffects.monitoring3"), t("sideEffects.monitoring4")].map((item, index) => (
                      <motion.div key={index} variants={fadeInUp} className="flex items-center gap-3">
                        <Shield className="w-5 h-5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">{t("cost.badge")}</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">{t("cost.title")}</motion.h2>
            </motion.div>

            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream">
                <p className="text-taupe mb-6">{t("cost.desc")}</p>
                <div className="flex justify-center items-baseline gap-2 mb-8">
                  <span className="text-4xl font-[(--font-georgia)] text-wine">{t("cost.priceFrom")}</span>
                  <span className="text-taupe">{t("cost.to")}</span>
                  <span className="text-4xl font-[(--font-georgia)] text-wine">{t("cost.priceTo")}</span>
                  <span className="text-taupe">{t("cost.perMonth")}</span>
                </div>
                <div className="space-y-4">
                  {[t("cost.item1"), t("cost.item2"), t("cost.item3"), t("cost.item4")].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-center justify-between p-3 bg-cream rounded-xl">
                      <span className="text-brown">{item}</span>
                      <Info className="w-4 h-4 text-taupe" />
                    </motion.div>
                  ))}
                </div>
                <motion.p variants={fadeInUp} className="mt-6 text-sm text-wine font-medium text-center">
                  {t("cost.priceNote")}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <motion.span variants={fadeInUp} className="text-sm font-medium text-wine uppercase tracking-wider">{t("comparison.badge")}</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4">{t("comparison.title")}</motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t("comparison.item1Title"), icon: Pill, desc: t("comparison.item1Desc"), use: t("comparison.item1Use"), color: "wine" },
                { title: t("comparison.item2Title"), icon: Droplet, desc: t("comparison.item2Desc"), use: t("comparison.item2Use"), color: "wine" },
                { title: t("comparison.item3Title"), icon: Syringe, desc: t("comparison.item3Desc"), use: t("comparison.item3Use"), color: "wine" },
                { title: t("comparison.item4Title"), icon: Thermometer, desc: t("comparison.item4Desc"), use: t("comparison.item4Use"), color: "wine" },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cream">
                    <div className={`w-12 h-12 mb-4 rounded-lg bg-${item.color}/10 group-hover:bg-${item.color} transition-colors duration-300 flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 text-${item.color} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h3 className="text-lg font-bold text-brown mb-2">{item.title}</h3>
                    <p className="text-sm text-taupe mb-2">{item.desc}</p>
                    <p className="text-xs text-wine">{item.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 p-6 bg-cream rounded-2xl">
              <p className="text-center text-brown">
                <span className="font-bold">Key insight:</span> {t("comparison.insight")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-white max-w-3xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-[(--font-georgia)] mb-6">
                {t("cta.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl mb-8 opacity-90">
                {t("cta.description")}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <button className="group bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  {t("cta.bookConsultation")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  {t("cta.learnMoreClinic")}
                </button>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  {t("cta.badge1")}
                </span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  {t("cta.badge2")}
                </span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {t("cta.badge3")}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Trust Message */}
        <section className="py-12 bg-brown text-white">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
              <motion.p variants={fadeInUp} className="text-lg italic max-w-2xl mx-auto font-[(--font-georgia)]">
                &ldquo;{t("finalMessage.quote")}&rdquo;
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-cream">
                {t("finalMessage.author")}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DuromineLandingPage;
