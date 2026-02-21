"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Target,
  Award,
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

const SimaglutideLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "semaglutide");

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
    {
      q: t("faq.q6"),
      a: t("faq.a6"),
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden bg-linear-to-br from-cream via-white to-rose/5 pt-20 pb-24"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-wine/10"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brown leading-tight"
                  style={{ fontFamily: "var(--font-georgia)" }}
                >
                  {t("hero.title1")}
                  <span className="block text-wine">{t("hero.title2")}</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe max-w-lg"
                >
                  {t("hero.description")}
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-brown font-medium italic border-l-4 border-rose pl-4 bg-white/50 p-4 rounded-r-lg"
                >
                  &ldquo;{t("hero.quote")}&rdquo;
                </motion.p>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
                >
                  {[
                    { icon: Shield, text: t("hero.trust1") },
                    { icon: Clock, text: t("hero.trust2") },
                    { icon: Heart, text: t("hero.trust3") },
                    { icon: TrendingUp, text: t("hero.trust4") },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span className="text-xs text-brown">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-rose transition-colors shadow-lg shadow-wine/20"
                  >
                    {t("hero.startButton")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-taupe text-brown px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
                  >
                    {t("hero.learnMore")}
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-wine/10 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-cream">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-serif text-brown text-lg">
                          {t("hero.safetyTitle")}
                        </h3>
                        <p className="text-sm text-taupe">
                          {t("hero.safetySubtitle")}
                        </p>
                      </div>
                    </div>

                    {[
                      t("hero.safetyItem1"),
                      t("hero.safetyItem2"),
                      t("hero.safetyItem3"),
                      t("hero.safetyItem4"),
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glass Card Decoration */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wine/10 rounded-full blur-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Note Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-brown/5"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wine/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-brown text-lg mb-2">
                    {t("quickNote.title")}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">
                    {t("quickNote.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What is Semaglutide */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-brown">
                  {t("whatIs.title1")}
                  <span className="block text-wine">{t("whatIs.title2")}</span>
                </h2>

                <p className="text-taupe leading-relaxed">
                  {t("whatIs.desc")}
                </p>

                <motion.div
                  variants={scaleIn}
                  className="bg-linear-to-br from-cream to-white p-6 rounded-2xl border border-wine/10"
                >
                  <p className="text-brown italic">
                    &ldquo;{t("whatIs.quote")}&rdquo;
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-4 rounded-xl border border-cream">
                    <div className="w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-rose" />
                    </div>
                    <h4 className="font-medium text-brown">{t("whatIs.onceWeekly")}</h4>
                    <p className="text-xs text-taupe">{t("whatIs.subcutaneous")}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-cream">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center mb-2">
                      <Target className="w-5 h-5 text-wine" />
                    </div>
                    <h4 className="font-medium text-brown">
                      {t("whatIs.injectionSites")}
                    </h4>
                    <p className="text-xs text-taupe">
                      {t("whatIs.injectionAreas")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-brown/5 rounded-3xl p-8">
                  <h3 className="font-serif text-xl text-brown mb-6">
                    {t("whatIs.vsTitle")}
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-wine"
                    >
                      <h4 className="font-medium text-wine mb-1">{t("whatIs.wegovyTitle")}</h4>
                      <p className="text-sm text-taupe">
                        {t("whatIs.wegovyDesc")}
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-rose"
                    >
                      <h4 className="font-medium text-rose mb-1">{t("whatIs.ozempicTitle")}</h4>
                      <p className="text-sm text-taupe">
                        {t("whatIs.ozempicDesc")}
                      </p>
                    </motion.div>
                  </div>

                  <p className="text-xs text-taupe mt-4 italic">
                    {t("whatIs.offLabelNote")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-linear-to-b from-white to-cream"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                {t("howItWorks.title1")}
                <span className="block text-wine">{t("howItWorks.title2")}</span>
              </h2>
              <p className="text-taupe">
                {t("howItWorks.description")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: t("howItWorks.step1Title"),
                  desc: t("howItWorks.step1Desc"),
                },
                {
                  icon: Clock,
                  title: t("howItWorks.step2Title"),
                  desc: t("howItWorks.step2Desc"),
                },
                {
                  icon: TrendingUp,
                  title: t("howItWorks.step3Title"),
                  desc: t("howItWorks.step3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-wine/10 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-serif text-lg text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who It's For */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-brown">
                  {t("whoFor.title1")}
                  <span className="block text-wine">{t("whoFor.title2")}</span>
                </h2>

                <p className="text-taupe">
                  {t("whoFor.description")}
                </p>

                <div className="space-y-4">
                  {[
                    t("whoFor.reason1"),
                    t("whoFor.reason2"),
                    t("whoFor.reason3"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-rose" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-wine/5 p-6 rounded-2xl border border-wine/20">
                  <h3 className="font-serif text-xl text-wine mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {t("whoFor.whoShouldNotTitle")}
                  </h3>

                  <ul className="space-y-3">
                    {[
                      t("whoFor.shouldNot1"),
                      t("whoFor.shouldNot2"),
                      t("whoFor.shouldNot3"),
                      t("whoFor.shouldNot4"),
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-brown"
                      >
                        <span className="text-wine font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-cream">
                  <h4 className="font-medium text-brown mb-2">
                    {t("whoFor.extraCareTitle")}
                  </h4>
                  <p className="text-sm text-taupe">
                    {t("whoFor.extraCareDesc")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-brown/5"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                {t("results.title1")}
                <span className="block text-wine">{t("results.title2")}</span>
              </h2>
              <p className="text-taupe">{t("results.subtitle")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: t("results.stat1Value"),
                  label: t("results.stat1Label"),
                  desc: t("results.stat1Desc"),
                },
                {
                  stat: t("results.stat2Value"),
                  label: t("results.stat2Label"),
                  desc: t("results.stat2Desc"),
                },
                {
                  stat: t("results.stat3Value"),
                  label: t("results.stat3Label"),
                  desc: t("results.stat3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-2xl font-serif text-wine mb-2">
                    {item.stat}
                  </div>
                  <div className="font-medium text-brown mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-white rounded-2xl border border-wine/20"
            >
              <p className="text-brown italic">
                {t("results.noticeQuote")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What Happens If You Stop */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-3xl"
              >
                <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                  {t("stopSection.title")}
                </h2>
                <p className="mb-4 text-white/90">
                  {t("stopSection.description")}
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm italic">
                    {t("stopSection.note")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nexus Approach */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                {t("nexusApproach.title")}
              </h2>
              <p className="text-taupe">
                {t("nexusApproach.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: t("nexusApproach.step1Title"),
                  desc: t("nexusApproach.step1Desc"),
                },
                {
                  step: "02",
                  title: t("nexusApproach.step2Title"),
                  desc: t("nexusApproach.step2Desc"),
                },
                {
                  step: "03",
                  title: t("nexusApproach.step3Title"),
                  desc: t("nexusApproach.step3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg relative"
                >
                  <div className="text-5xl font-serif text-wine/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-brown mb-2 relative">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm relative">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pros & Cons */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-green-50 to-white p-8 rounded-3xl border border-green-200"
              >
                <h3 className="font-serif text-2xl text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  {t("prosCons.prosTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prosCons.pro1"),
                    t("prosCons.pro2"),
                    t("prosCons.pro3"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-200"
              >
                <h3 className="font-serif text-2xl text-orange-700 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  {t("prosCons.consTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prosCons.con1"),
                    t("prosCons.con2"),
                    t("prosCons.con3"),
                    t("prosCons.con4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-linear-to-br from-wine to-rose text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={scaleIn} className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-white/90 mb-8">
                {t("cta.description")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-8 py-3 rounded-full font-medium hover:bg-cream transition-colors shadow-lg inline-flex items-center gap-2"
              >
                {t("cta.button")}
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default SimaglutideLanding;
