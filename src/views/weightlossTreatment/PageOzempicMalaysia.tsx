"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Syringe,
  Clock,
  Zap,
  ShieldCheck,
  ChevronDown,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  TrendingDown,
  Users,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  floatAnimation,
} from "../../lib/animations";
import BeforeAfterSection from "../../components/BeforeAfter";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const PageOzempicMalaysia = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "ozempic");

  const treatments = [
    {
      icon: Syringe,
      label: t("treatments.treatedArea"),
      value: t("treatments.treatedAreaValue"),
    },
    { icon: Clock, label: t("treatments.duration"), value: t("treatments.durationValue") },
    { icon: Zap, label: t("treatments.frequency"), value: t("treatments.frequencyValue") },
    { icon: ShieldCheck, label: t("treatments.downtime"), value: t("treatments.downtimeValue") },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: t("about.benefit1Title"),
      description: t("about.benefit1Desc"),
    },
    {
      icon: Heart,
      title: t("about.benefit2Title"),
      description: t("about.benefit2Desc"),
    },
    {
      icon: Sparkles,
      title: t("about.benefit3Title"),
      description: t("about.benefit3Desc"),
    },
  ];

  const doctors = [
    { name: t("doctors.dr1Name"), specialty: t("doctors.dr1Specialty") },
    { name: t("doctors.dr2Name"), specialty: t("doctors.dr2Specialty") },
    { name: t("doctors.dr3Name"), specialty: t("doctors.dr3Specialty") },
    { name: t("doctors.dr4Name"), specialty: t("doctors.dr4Specialty") },
  ];

  const testimonials = [
    {
      name: t("testimonials.review1Name"),
      text: t("testimonials.review1Text"),
      rating: 5,
    },
    {
      name: t("testimonials.review2Name"),
      text: t("testimonials.review2Text"),
      rating: 5,
    },
    {
      name: t("testimonials.review3Name"),
      text: t("testimonials.review3Text"),
      rating: 5,
    },
  ];

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
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <div className="bg-light min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-cream to-transparent" />
            <motion.div
              animate={floatAnimation}
              className="absolute top-20 right-20 w-72 h-72 bg-rose/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, delay: 1 },
              }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-wine/5 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium">
                    <Sparkles className="w-4 h-4" />
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-4xl sm:text-5xl lg:text-6xl text-brown leading-tight"
                >
                  {t("hero.title1")}{" "}
                  <span className="text-wine italic">{t("hero.title2")}</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-taupe font-inter text-lg leading-relaxed max-w-xl"
                >
                  {t("hero.description")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-wine text-white rounded-full font-inter font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/25 hover:bg-wine/90 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    {t("hero.bookConsultation")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-glass backdrop-blur-sm border border-taupe/20 text-brown rounded-full font-inter font-medium inline-flex items-center gap-2 hover:bg-cream transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("hero.chatWithUs")}
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 pt-4"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-linear-to-br from-rose to-wine border-2 border-light"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-wine">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-taupe text-sm font-inter">
                      {t("hero.satisfiedPatients")}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <motion.div
                    animate={floatAnimation}
                    className="w-full aspect-square bg-linear-to-br from-cream via-rose/20 to-wine/10 rounded-[3rem] overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                      alt={t("hero.weightLossAlt")}
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                  </motion.div>

                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -left-8 top-1/4 bg-glass backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <p className="text-brown font-inter font-semibold">
                          {t("hero.averageResult")}
                        </p>
                        <p className="text-taupe text-sm">{t("hero.averageResultLabel")}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -right-4 bottom-1/4 bg-glass backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-rose" />
                      </div>
                      <div>
                        <p className="text-brown font-inter font-semibold">
                          {t("hero.fdaApproved")}
                        </p>
                        <p className="text-taupe text-sm">{t("hero.safeEffective")}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-taupe" />
          </motion.div>
        </section>

        {/* Treatment Stats */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {treatments.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-georgia text-brown text-lg mb-1">
                    {item.label}
                  </h3>
                  <p className="text-taupe font-inter text-sm">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About GLP-1 */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="aspect-5/5 rounded-4xl overflow-hidden bg-linear-to-br from-rose/20 to-wine/20">
                    <img
                      src="/images/liraglutide.png"
                      alt="Medical Treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cream rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-wine/10 rounded-full -z-10" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-inter font-medium"
                >
                  {t("about.badge")}
                </motion.span>

                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-3xl sm:text-4xl text-brown leading-tight"
                >
                  {t("about.title1")}{" "}
                  <span className="text-wine italic">{t("about.title2")}</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-taupe font-inter leading-relaxed"
                >
                  {t("about.description")}
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-cream/50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                        <benefit.icon className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h4 className="font-georgia text-brown text-lg">
                          {benefit.title}
                        </h4>
                        <p className="text-taupe font-inter text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-brown text-light relative overflow-hidden">
          <motion.div
            animate={floatAnimation}
            className="absolute top-0 right-0 w-96 h-96 bg-wine/20 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/30 text-rose rounded-full text-sm font-inter font-medium mb-4"
              >
                {t("howItWorks.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light"
              >
                {t("howItWorks.title")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  step: t("howItWorks.step1"),
                  title: t("howItWorks.step1Title"),
                  desc: t("howItWorks.step1Desc"),
                },
                {
                  step: t("howItWorks.step2"),
                  title: t("howItWorks.step2Title"),
                  desc: t("howItWorks.step2Desc"),
                },
                {
                  step: t("howItWorks.step3"),
                  title: t("howItWorks.step3Title"),
                  desc: t("howItWorks.step3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute -top-4 -left-4 text-5xl z-10 font-georgia text-glass/50 font-bold">
                    {item.step}
                  </div>
                  <div className="relative bg-glass/10 backdrop-blur-sm p-8 rounded-2xl border border-light/10 h-full">
                    <h3 className="font-georgia text-2xl text-light mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe font-inter">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                {t("benefits.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                {t("benefits.title1")} <span className="text-wine italic">{t("benefits.title2")}</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: TrendingDown,
                  title: t("benefits.item1Title"),
                  desc: t("benefits.item1Desc"),
                },
                {
                  icon: Heart,
                  title: t("benefits.item2Title"),
                  desc: t("benefits.item2Desc"),
                },
                {
                  icon: Sparkles,
                  title: t("benefits.item3Title"),
                  desc: t("benefits.item3Desc"),
                },
                {
                  icon: ShieldCheck,
                  title: t("benefits.item4Title"),
                  desc: t("benefits.item4Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-cream p-8 rounded-2xl text-center group hover:bg-wine transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-wine/10 group-hover:bg-light/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                    <item.icon className="w-8 h-8 text-wine group-hover:text-light transition-colors" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown group-hover:text-light mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-taupe group-hover:text-light/80 font-inter text-sm transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-inter font-medium mb-4"
              >
                {t("doctors.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                {t("doctors.title1")} <span className="text-wine italic">{t("doctors.title2")}</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-square bg-linear-to-br from-rose/20 to-wine/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-wine/20 group-hover:bg-wine/40 transition-colors" />
                    <Users className="w-20 h-20 text-wine/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-georgia text-xl text-brown mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-taupe font-inter text-sm">
                      {doctor.specialty}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                {t("testimonials.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                {t("testimonials.title1")} <span className="text-wine italic">{t("testimonials.title2")}</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-2xl relative"
                >
                  <div className="absolute -top-3 -left-3 text-6xl text-wine/20 font-georgia">
                    &ldquo;
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-wine fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-taupe font-inter mb-6 relative z-10">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                      <span className="text-wine font-georgia font-bold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <p className="font-georgia text-brown">
                      {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Before/After */}
        <BeforeAfterSection />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                {t("faq.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                {t("faq.title1")}{" "}
                <span className="text-wine italic">{t("faq.title2")}</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-cream rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h3 className="font-georgia text-lg text-brown pr-8">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-wine" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-taupe font-inter">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-br from-wine to-brown relative overflow-hidden">
          <motion.div
            animate={floatAnimation}
            className="absolute top-0 left-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 1.5 },
            }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-light/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light mb-6"
              >
                {t("cta.title1")}{" "}
                <span className="italic text-rose">{t("cta.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-light/80 font-inter text-lg mb-10"
              >
                {t("cta.description")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-light text-wine rounded-full font-inter font-medium inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  {t("cta.bookAppointment")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-light/50 text-light rounded-full font-inter font-medium inline-flex items-center justify-center gap-2 hover:bg-light/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t("cta.callUsNow")}
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-light/70 font-inter text-sm"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t("cta.address")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{t("cta.phone")}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageOzempicMalaysia;
