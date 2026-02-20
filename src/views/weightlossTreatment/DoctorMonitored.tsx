"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Calendar,
  MapPin,
  Activity,
  Droplet,
  ChevronRight,
  Sparkles,
  Scale,
  Apple,
  AlertCircle,
  CheckCircle2,
  Clock,
  Target,
  UserCheck,
  FileText,
  Ruler,
  TrendingUp,
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

export default function DoctorMonitoredLanding({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "doctorMonitored");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="text-wine block">
                    {t("hero.title2")}
                  </span>
                </h1>

                <p className="text-lg text-taupe max-w-lg">
                  {t("hero.description")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all shadow-lg shadow-wine/20"
                  >
                    {t("hero.bookConsultation")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-all"
                  >
                    {t("hero.learnMore")}
                  </motion.button>
                </div>

                {/* Trust Bar */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    { icon: UserCheck, text: t("hero.trust1") },
                    { icon: FileText, text: t("hero.trust2") },
                    { icon: Activity, text: t("hero.trust3") },
                    { icon: MapPin, text: t("hero.trust4") },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-white/70 backdrop-blur-sm p-2 rounded-lg">
                        <item.icon className="w-4 h-4 text-wine" />
                      </div>
                      <span className="text-sm text-brown">{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-light rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-brown">
                      {t("hero.journeyTitle")}
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: "01", title: t("hero.step1"), desc: t("hero.step1Desc") },
                        { step: "02", title: t("hero.step2"), desc: t("hero.step2Desc") },
                        { step: "03", title: t("hero.step3"), desc: t("hero.step3Desc") },
                        { step: "04", title: t("hero.step4"), desc: t("hero.step4Desc") },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-taupe/20"
                        >
                          <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center text-wine font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-brown">
                              {item.title}
                            </h4>
                            <p className="text-sm text-taupe">{item.desc}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-wine ml-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-wine/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What is Doctor Monitored Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                {t("whatIs.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("whatIs.description")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Scale, title: t("whatIs.card1Title"), desc: t("whatIs.card1Desc"), stat: t("whatIs.card1Stat") },
                { icon: Heart, title: t("whatIs.card2Title"), desc: t("whatIs.card2Desc"), stat: t("whatIs.card2Stat") },
                { icon: Target, title: t("whatIs.card3Title"), desc: t("whatIs.card3Desc"), stat: t("whatIs.card3Stat") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-light rounded-3xl p-8 border border-taupe/20 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-wine/5 rounded-bl-full group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <div className="text-3xl font-bold text-wine mb-2">
                      {item.stat}
                    </div>
                    <h3 className="text-xl font-medium text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why KL Section */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-brown">
                  {t("whyKL.title")}
                </h2>
                <div className="space-y-4">
                  {[
                    t("whyKL.reason1"),
                    t("whyKL.reason2"),
                    t("whyKL.reason3"),
                    t("whyKL.reason4"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-wine" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-taupe text-lg">
                  {t("whyKL.description")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-serif text-brown mb-6">
                  {t("whyKL.isThisForYou")}
                </h3>
                <div className="space-y-4">
                  {[
                    t("whyKL.check1"),
                    t("whyKL.check2"),
                    t("whyKL.check3"),
                    t("whyKL.check4"),
                    t("whyKL.check5"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-cream rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Step by Step Process */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                {t("process.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("process.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: FileText, step: "01", title: t("process.step1Title"), desc: t("process.step1Desc") },
                { icon: Ruler, step: "02", title: t("process.step2Title"), desc: t("process.step2Desc") },
                { icon: Droplet, step: "03", title: t("process.step3Title"), desc: t("process.step3Desc") },
                { icon: Sparkles, step: "04", title: t("process.step4Title"), desc: t("process.step4Desc") },
                { icon: Calendar, step: "05", title: t("process.step5Title"), desc: t("process.step5Desc") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-light rounded-2xl flex items-center justify-center group-hover:bg-wine transition-colors">
                      <item.icon className="w-8 h-8 text-wine group-hover:text-white transition-colors" />
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-0.5 bg-taupe/20" />
                    )}
                  </div>
                  <div className="text-sm text-wine font-medium mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-medium text-brown mb-1">{item.title}</h3>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Treatment Options */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                {t("treatments.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("treatments.description")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t("treatments.lifestyle"),
                  icon: Apple,
                  color: "from-green-500/20",
                  items: [
                    t("treatments.lifestyleItem1"),
                    t("treatments.lifestyleItem2"),
                    t("treatments.lifestyleItem3"),
                    t("treatments.lifestyleItem4"),
                  ],
                },
                {
                  title: t("treatments.prescription"),
                  icon: Droplet,
                  color: "from-wine/20",
                  items: [
                    t("treatments.prescriptionItem1"),
                    t("treatments.prescriptionItem2"),
                    t("treatments.prescriptionItem3"),
                    t("treatments.prescriptionItem4"),
                  ],
                  highlight: true,
                },
                {
                  title: t("treatments.contouring"),
                  icon: Sparkles,
                  color: "from-purple-500/20",
                  items: [
                    t("treatments.contouringItem1"),
                    t("treatments.contouringItem2"),
                    t("treatments.contouringItem3"),
                    t("treatments.contouringItem4"),
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                    item.highlight ? "border-wine" : "border-transparent"
                  } relative overflow-hidden group`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 bg-wine text-white px-4 py-1 rounded-bl-2xl text-sm">
                      {t("treatments.mostPopular")}
                    </div>
                  )}
                  <div
                    className={`absolute top-0 left-0 w-32 h-32 bg-linear-to-br ${item.color} to-transparent rounded-br-full opacity-50`}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <h3 className="text-2xl font-serif text-brown mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((listItem, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-brown"
                        >
                          <CheckCircle2 className="w-4 h-4 text-wine" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-wine/5 rounded-2xl border border-wine/20"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <p className="text-sm text-brown">
                  <span className="font-semibold">Important:</span>{" "}
                  {t("treatments.importantNote")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-brown">
                  {t("results.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("results.description")}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: t("results.stat1Label"), value: t("results.stat1Value"), icon: Scale },
                    { label: t("results.stat2Label"), value: t("results.stat2Value"), icon: TrendingUp },
                    { label: t("results.stat3Label"), value: t("results.stat3Value"), icon: Clock },
                    { label: t("results.stat4Label"), value: t("results.stat4Value"), icon: Heart },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-light p-4 rounded-xl"
                    >
                      <item.icon className="w-5 h-5 text-wine mb-2" />
                      <div className="text-2xl font-bold text-brown">
                        {item.value}
                      </div>
                      <div className="text-sm text-taupe">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-cream p-6 rounded-2xl">
                  <h4 className="font-medium text-brown mb-3">
                    {t("results.dependsOn")}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      t("results.depends1"),
                      t("results.depends2"),
                      t("results.depends3"),
                      t("results.depends4"),
                      t("results.depends5"),
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-brown"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-wine" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-serif mb-6">
                    {t("results.prosConsTitle")}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> {t("results.benefitsTitle")}
                      </h4>
                      <ul className="space-y-2 text-white/80">
                        <li>• {t("results.benefit1")}</li>
                        <li>• {t("results.benefit2")}</li>
                        <li>• {t("results.benefit3")}</li>
                        <li>• {t("results.benefit4")}</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" /> {t("results.downsideTitle")}
                      </h4>
                      <ul className="space-y-2 text-white/80">
                        <li>• {t("results.downside1")}</li>
                        <li>• {t("results.downside2")}</li>
                        <li>• {t("results.downside3")}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wine/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                {t("comparison.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("comparison.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t("comparison.option1Title"),
                  desc: t("comparison.option1Desc"),
                  icon: Heart,
                  for: t("comparison.option1For"),
                },
                {
                  title: t("comparison.option2Title"),
                  desc: t("comparison.option2Desc"),
                  icon: Sparkles,
                  for: t("comparison.option2For"),
                },
                {
                  title: t("comparison.option3Title"),
                  desc: t("comparison.option3Desc"),
                  icon: Activity,
                  for: t("comparison.option3For"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="text-xl font-serif text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm mb-3">{item.desc}</p>
                  <p className="text-xs text-wine font-medium">
                    {t("comparison.bestFor")} {item.for}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Nexus Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-brown">
                {t("whyNexus.title")}
              </h2>
              <p className="text-lg text-taupe max-w-2xl mx-auto">
                {t("whyNexus.description")}
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
                {[
                  t("whyNexus.point1"),
                  t("whyNexus.point2"),
                  t("whyNexus.point3"),
                  t("whyNexus.point4"),
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 bg-light rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-wine text-white px-12 py-4 rounded-full font-medium text-lg shadow-xl shadow-wine/20 inline-flex items-center gap-2"
              >
                {t("whyNexus.bookButton")}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="px-4 py-20 bg-linear-to-r from-wine to-rose text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-3xl text-center"
          >
            <motion.div variants={scaleIn} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">
                {t("cta.title")}
              </h2>
              <p className="text-white/80 text-lg">
                {t("cta.description")}
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "var(--color-wine)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-4 rounded-full font-medium text-lg shadow-xl inline-flex items-center gap-2 transition-all"
              >
                {t("cta.bookButton")}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
