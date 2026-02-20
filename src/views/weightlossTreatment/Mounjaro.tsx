"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  Heart,
  Activity,
  Droplets,
  Zap,
  Scale,
  TrendingDown,
  Award,
  ChevronRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Syringe,
  Brain,
  UtensilsCrossed,
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

const MounjaroLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "mounjaro");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-light font-[--font-inter]">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="space-y-4">
                  <motion.div
                    variants={scaleIn}
                    className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full"
                  >
                    <Sparkles className="w-4 h-4 text-wine" />
                    <span className="text-sm text-brown">
                      {t("hero.badge")}
                    </span>
                  </motion.div>

                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brown leading-tight">
                    {t("hero.title1")}
                    <span className="block text-wine">
                      {t("hero.title2")}
                    </span>
                  </h1>

                  <p className="text-lg text-taupe max-w-lg">
                    {t("hero.description")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
                  >
                    {t("hero.bookConsultation")}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine hover:text-white transition-all"
                  >
                    {t("hero.learnMore")}
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <motion.div
                  variants={staggerContainer}
                  className="flex items-center gap-6 pt-8"
                >
                  {[
                    { icon: Shield, text: t("hero.badge1") },
                    { icon: Clock, text: t("hero.badge2") },
                    { icon: Target, text: t("hero.badge3") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-5 h-5 text-rose" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-[--color-glass] backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-cream">
                      <Syringe className="w-8 h-8 text-wine" />
                      <div>
                        <h3 className="font-serif text-xl text-brown">
                          {t("hero.overviewTitle")}
                        </h3>
                        <p className="text-taupe">{t("hero.overviewSubtitle")}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            {t("hero.check1Title")}
                          </p>
                          <p className="text-sm text-taupe">
                            {t("hero.check1Desc")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            {t("hero.check2Title")}
                          </p>
                          <p className="text-sm text-taupe">
                            {t("hero.check2Desc")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            {t("hero.check3Title")}
                          </p>
                          <p className="text-sm text-taupe">
                            {t("hero.check3Desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                {t("howItWorks.title1")}
                <span className="text-wine"> {t("howItWorks.title2")}</span>
              </h2>
              <p className="text-taupe">
                {t("howItWorks.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: t("howItWorks.item1Title"),
                  description: t("howItWorks.item1Desc"),
                  color: "from-wine to-rose",
                },
                {
                  icon: UtensilsCrossed,
                  title: t("howItWorks.item2Title"),
                  description: t("howItWorks.item2Desc"),
                  color: "from-rose to-taupe",
                },
                {
                  icon: Zap,
                  title: t("howItWorks.item3Title"),
                  description: t("howItWorks.item3Desc"),
                  color: "from-taupe to-wine",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Eligibility Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brown">
                  {t("eligibility.title1")}
                  <span className="block text-wine">{t("eligibility.title2")}</span>
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      icon: Scale,
                      text: t("eligibility.criteria1Text"),
                      subtext: t("eligibility.criteria1Sub"),
                    },
                    {
                      icon: Heart,
                      text: t("eligibility.criteria2Text"),
                      subtext: t("eligibility.criteria2Sub"),
                    },
                    {
                      icon: Activity,
                      text: t("eligibility.criteria3Text"),
                      subtext: t("eligibility.criteria3Sub"),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 bg-cream rounded-xl"
                    >
                      <div className="bg-wine bg-opacity-10 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-light" />
                      </div>
                      <div>
                        <p className="font-medium text-brown">{item.text}</p>
                        <p className="text-sm text-taupe">{item.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-wine bg-opacity-5 rounded-3xl p-8 border border-wine border-opacity-20">
                  <h3 className="text-2xl font-serif font-bold text-cream/80 mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-cream/80" />
                    {t("eligibility.contraindicationsTitle")}
                  </h3>

                  <div className="space-y-4">
                    {[
                      t("eligibility.contra1"),
                      t("eligibility.contra2"),
                      t("eligibility.contra3"),
                      t("eligibility.contra4"),
                    ].map((text, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></div>
                        <p className="text-light/70">{text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-cream italic">
                    {t("eligibility.contraNote")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                {t("journey.title1")}
                <span className="text-wine"> {t("journey.title2")}</span>
              </h2>
              <p className="text-taupe">
                {t("journey.subtitle")}
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-rose bg-opacity-30"></div>

              <div className="space-y-12">
                {[
                  {
                    week: t("journey.stage1Week"),
                    title: t("journey.stage1Title"),
                    description: t("journey.stage1Desc"),
                    icon: Clock,
                  },
                  {
                    week: t("journey.stage2Week"),
                    title: t("journey.stage2Title"),
                    description: t("journey.stage2Desc"),
                    icon: TrendingDown,
                  },
                  {
                    week: t("journey.stage3Week"),
                    title: t("journey.stage3Title"),
                    description: t("journey.stage3Desc"),
                    icon: Award,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-wine flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-wine" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <span className="text-sm text-wine font-semibold">
                          {item.week}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-brown mt-2">
                          {item.title}
                        </h3>
                        <p className="text-taupe mt-2">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects & Safety */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brown">
                  {t("sideEffects.title1")}
                  <span className="text-[--color-wine"> {t("sideEffects.title2")}</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Droplets, text: t("sideEffects.effect1") },
                    { icon: Activity, text: t("sideEffects.effect2") },
                    { icon: Droplets, text: t("sideEffects.effect3") },
                    { icon: Activity, text: t("sideEffects.effect4") },
                    { icon: Droplets, text: t("sideEffects.effect5") },
                    { icon: Activity, text: t("sideEffects.effect6") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-cream p-4 rounded-xl flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-wine bg-opacity-5 p-6 rounded-2xl">
                  <h3 className="font-serif text-xl text-cream mb-3">
                    {t("sideEffects.tipsTitle")}
                  </h3>
                  <ul className="space-y-2">
                    {[
                      t("sideEffects.tip1"),
                      t("sideEffects.tip2"),
                      t("sideEffects.tip3"),
                      t("sideEffects.tip4"),
                      t("sideEffects.tip5"),
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wine mt-1" />
                        <span className="text-light/90">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-brown bg-opacity-5 rounded-3xl p-8">
                  <h3 className="text-2xl font-serif font-bold text-brown mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-wine" />
                    {t("sideEffects.safetyTitle")}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-taupe">
                      {t("sideEffects.safetyDesc")}
                    </p>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-medium text-brown mb-2">
                        {t("sideEffects.procedureTitle")}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-wine mt-1" />
                          <span className="text-taupe">
                            {t("sideEffects.procedureTip1")}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-wine mt-1" />
                          <span className="text-taupe">
                            {t("sideEffects.procedureTip2")}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-taupe italic">
                      {t("sideEffects.emergencyNote")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                {t("comparison.title")}
              </h2>
              <p className="text-taupe">
                {t("comparison.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: t("comparison.ozempicName"),
                  type: t("comparison.ozempicType"),
                  action: t("comparison.ozempicAction"),
                  use: t("comparison.ozempicUse"),
                  color: "from-taupe to-rose",
                },
                {
                  name: t("comparison.wegovyName"),
                  type: t("comparison.wegovyType"),
                  action: t("comparison.wegovyAction"),
                  use: t("comparison.wegovyUse"),
                  color: "from-rose to-wine",
                },
                {
                  name: t("comparison.mounjaroName"),
                  type: t("comparison.mounjaroType"),
                  action: t("comparison.mounjaroAction"),
                  use: t("comparison.mounjaroUse"),
                  color: "from-wine to-brown",
                  featured: true,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg relative ${
                    item.featured ? "ring-2 ring-wine" : ""
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine text-white px-4 py-1 rounded-full text-sm">
                      {t("comparison.featured")}
                    </div>
                  )}

                  <h3 className="text-xl font-serif font-bold text-brown">
                    {item.name}
                  </h3>
                  <p className="text-sm text-wine mb-3">{item.type}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-brown">
                      <span className="font-medium">{t("comparison.actionLabel")}</span> {item.action}
                    </p>
                    <p className="text-sm text-taupe">{item.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-brown relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                {t("cta.title1")}
                <span className="text-cream"> {t("cta.title2")}</span>
              </h2>
              <p className="text-lg text-cream mb-10 opacity-90">
                {t("cta.description")}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-10 py-5 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  {t("cta.bookConsultation")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-medium hover:bg-white hover:text-brown transition-all text-lg"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  {t("cta.chatWithTeam")}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default MounjaroLanding;
