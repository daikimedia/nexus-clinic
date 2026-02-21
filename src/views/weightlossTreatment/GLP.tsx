"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Clock,
  Coffee,
  Apple,
  Activity,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Calendar,
  FileText,
  Target,
  Brain,
  Award,
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

const GLP1LandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "glp1");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream to-white font-['Inter'] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-wine/10 rounded-full text-wine font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-['Georgia'] text-5xl md:text-7xl font-bold text-brown mb-6 leading-tight"
            >
              {t("hero.title1")}
              <br />
              <span className="text-wine">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-3xl mx-auto mb-10"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-wine text-white rounded-full font-medium hover:bg-[#7A434B] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                {t("hero.startAssessment")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brown rounded-full font-medium hover:bg-light transition-colors shadow-lg hover:shadow-xl border border-taupe/20"
              >
                {t("hero.learnMore")}
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { icon: Shield, text: t("hero.trust1") },
                { icon: Award, text: t("hero.trust2") },
                { icon: Heart, text: t("hero.trust3") },
                { icon: FileText, text: t("hero.trust4") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-taupe/10"
                >
                  <item.icon className="w-8 h-8 text-wine mb-2" />
                  <span className="text-sm font-medium text-brown">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Understanding Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                  {t("understanding.badge")}
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                  {t("understanding.title")}
                </h2>
                <p className="text-taupe text-lg mb-6">
                  {t("understanding.desc1")}
                </p>
                <p className="text-taupe text-lg mb-8">
                  {t("understanding.desc2")}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-wine text-white rounded-full font-medium hover:bg-[#7A434B] transition-colors inline-flex items-center"
                >
                  {t("understanding.discoverButton")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-taupe/10">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    {t("understanding.howTitle")}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Coffee, text: t("understanding.how1") },
                      { icon: Clock, text: t("understanding.how2") },
                      { icon: Brain, text: t("understanding.how3") },
                      { icon: Activity, text: t("understanding.how4") },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center p-4 bg-cream rounded-xl"
                      >
                        <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center mr-4">
                          <item.icon className="w-5 h-5 text-wine" />
                        </div>
                        <span className="text-brown font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who Is It For Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-cream"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                {t("whoIsItFor.badge")}
              </span>
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                {t("whoIsItFor.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                  {t("whoIsItFor.goodFitTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("whoIsItFor.goodFit1"),
                    t("whoIsItFor.goodFit2"),
                    t("whoIsItFor.goodFit3"),
                    t("whoIsItFor.goodFit4"),
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start text-brown"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-wine mr-3" />
                  {t("whoIsItFor.extraCareTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("whoIsItFor.extraCare1"),
                    t("whoIsItFor.extraCare2"),
                    t("whoIsItFor.extraCare3"),
                    t("whoIsItFor.extraCare4"),
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start text-brown"
                    >
                      <span className="w-2 h-2 bg-wine rounded-full mt-2 mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* BMI Guidance */}
            <motion.div
              variants={scaleIn}
              className="bg-linear-to-r from-wine to-rose p-8 rounded-3xl text-white"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                {t("whoIsItFor.bmiTitle")}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-white/80 mb-2">{t("whoIsItFor.bmiNormal")}</p>
                  <p className="text-3xl font-bold">{t("whoIsItFor.bmiNormalRange")}</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">{t("whoIsItFor.bmiOverweight")}</p>
                  <p className="text-3xl font-bold">{t("whoIsItFor.bmiOverweightRange")}</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">{t("whoIsItFor.bmiObesity")}</p>
                  <p className="text-3xl font-bold">{t("whoIsItFor.bmiObesityRange")}</p>
                </div>
              </div>
              <p className="text-white/80 mt-4 text-sm">
                {t("whoIsItFor.bmiNote")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Programme Structure */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                {t("programme.badge")}
              </span>
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                {t("programme.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: t("programme.item1Title"), desc: t("programme.item1Desc") },
                { icon: Target, title: t("programme.item2Title"), desc: t("programme.item2Desc") },
                { icon: Apple, title: t("programme.item3Title"), desc: t("programme.item3Desc") },
                { icon: Calendar, title: t("programme.item4Title"), desc: t("programme.item4Desc") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-cream p-6 rounded-2xl border border-taupe/10 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-['Georgia'] text-xl font-bold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Results & Side Effects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-cream"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                  {t("results.title")}
                </h2>
                <p className="text-taupe text-lg mb-8">
                  {t("results.description")}
                </p>

                <div className="space-y-6">
                  {[
                    { drug: t("results.drug1"), time: t("results.drug1Time"), result: t("results.drug1Result") },
                    { drug: t("results.drug2"), time: t("results.drug2Time"), result: t("results.drug2Result") },
                    { drug: t("results.drug3"), time: t("results.drug3Time"), result: t("results.drug3Result") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-taupe/10"
                    >
                      <div>
                        <h4 className="font-bold text-brown">{item.drug}</h4>
                        <p className="text-sm text-taupe">{item.time}</p>
                      </div>
                      <span className="text-wine font-semibold">
                        {item.result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                    <AlertCircle className="w-6 h-6 text-wine mr-3" />
                    {t("results.sideEffectsTitle")}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      t("results.effect1"),
                      t("results.effect2"),
                      t("results.effect3"),
                      t("results.effect4"),
                    ].map((effect, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        className="p-3 bg-cream rounded-xl text-center"
                      >
                        <span className="text-brown font-medium">
                          {effect}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-wine/10 p-6 rounded-xl">
                    <h4 className="font-bold text-brown mb-2">
                      {t("results.manageTitle")}
                    </h4>
                    <ul className="space-y-2">
                      {[
                        t("results.manage1"),
                        t("results.manage2"),
                        t("results.manage3"),
                        t("results.manage4"),
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-brown"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {t("results.safetyTitle")}
                    </h4>
                    <p className="text-sm text-yellow-700">
                      {t("results.safetyDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-wine to-rose relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <h2 className="font-['Georgia'] text-4xl md:text-5xl font-bold text-white mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-white/90 text-xl mb-10">
                {t("cta.desc1")}
              </p>
              <p className="text-white/80 text-lg mb-12">
                {t("cta.desc2")}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-wine rounded-full font-bold text-lg hover:bg-light transition-colors shadow-2xl hover:shadow-3xl inline-flex items-center"
              >
                {t("cta.bookButton")}
                <ArrowRight className="w-6 h-6 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default GLP1LandingPage;
