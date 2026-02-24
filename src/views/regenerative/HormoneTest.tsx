"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Shield,
  Activity,
  Moon,
  Sun,
  Flower2,
  Brain,
  AlertCircle,
  ChevronRight,
  Phone,
  MapPin,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
  Droplet,
  Flame,
  Thermometer,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

export default function HormoneTestLanding() {
  const faqs = [
    {
      q: "What is a hormone test used for?",
      a: "A hormone test checks hormone levels to help investigate symptoms like irregular periods, fertility issues, acne and unwanted hair, fatigue, thyroid symptoms, and low libido or ED.",
    },
    {
      q: "How much does a hormone test cost in Malaysia?",
      a: "It depends on the panel. Some hospitals publish per-test prices (FSH RM65, LH RM65, estradiol RM95, AMH RM559.70), while fertility packages that include ultrasound and specialist review can be around RM699.",
    },
    {
      q: "Which hormone tests should women do for irregular periods?",
      a: "A KL women's hormone screening guide suggests evaluating thyroid (TSH ± Free T4), prolactin, and FSH/LH/estradiol after excluding pregnancy, with additional tests based on symptoms.",
    },
    {
      q: "Which hormone tests matter for PCOS?",
      a: "For androgen excess signs like hirsutism or acne, testing may include total testosterone, DHEA-S, and 17-OHP, plus metabolic screening.",
    },
    {
      q: "When is the best time to test female hormones?",
      a: "FSH, LH, prolactin, and estradiol are often measured around day 3 to 4 of the cycle.",
    },
    {
      q: "When should I do a progesterone test to confirm ovulation?",
      a: "Many labs recommend testing about 7 days before your expected period (day 21 in a 28-day cycle). ASRM notes progesterone peaks 6 to 8 days after ovulation.",
    },
    {
      q: "Do I need to fast before a hormone blood test?",
      a: "Many hormone tests do not require fasting, but fasting may be needed if your panel includes glucose or lipid tests. Follow clinic instructions.",
    },
    {
      q: "Can biotin affect hormone test results?",
      a: "Yes. A KL women's hormone screening guide notes biotin can interfere with results, especially thyroid tests. Tell your clinic if you take biotin.",
    },
    {
      q: "What hormones are checked for low libido or ED in men?",
      a: "Nexus Clinic's ED and libido pathway mentions hormone level checks as part of assessment, and testosterone testing is commonly included in men's hormone evaluation.",
    },
    {
      q: "Why would my doctor repeat a hormone test?",
      a: "Hormones fluctuate with cycle day, time of day, stress, and sleep. Repeat testing helps confirm a true pattern, especially for progesterone and testosterone timing.",
    },
    {
      q: "Can I do a hormone test for fatigue and weight gain?",
      a: "Yes, but it should be targeted. Thyroid tests are commonly used first, and Nexus Clinic discusses hormone assessment as part of medical weight loss evaluation.",
    },
    {
      q: "Do hormone tests diagnose menopause?",
      a: "Not always. A KL women's hormone screening guide notes that for women aged 45 and above, menopause is usually diagnosed clinically and routine FSH testing is not needed due to fluctuations.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif]">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Medical professional consulting with patient"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown/90 to-wine/80" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cream blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-rose blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.div variants={scaleIn} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Shield className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white font-medium">
                    Medically assessed, blood-test guided programmes
                  </span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
              >
                Your symptoms are real.
                <br />
                <span className="text-cream">
                  A hormone test can finally explain
                </span>
                <br />
                what's going on.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                When your energy drops, periods change, weight shifts, or your
                mood feels "not you," it's exhausting to keep guessing. At Nexus
                Clinic Kuala Lumpur, we use doctor-led, blood-test guided checks
                to find the pattern, then map out the next steps clearly.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="group bg-white text-wine px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Book Your Hormone Test
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +6016-7025699
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-4 text-sm text-white/80"
              >
                <MapPin className="w-4 h-4" />
                <span>
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Is a Hormone Test Section with Image */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-6">
                  <span className="text-wine font-medium mb-2 block">
                    Understanding Hormones
                  </span>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                    What Is a Hormone Test?
                  </h2>
                  <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mb-8" />
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-brown mb-8 leading-relaxed"
                >
                  A hormone test is usually a blood test that measures specific
                  hormones in your body. Hormones act like messages. They
                  influence energy, sleep, metabolism, periods, fertility, sex
                  drive, skin, and mood.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-8 rounded-3xl border border-taupe/20"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <p className="text-brown">
                      Some services also offer saliva hormone profiles, but for
                      many medical decisions, blood testing is the standard
                      starting point, especially when symptoms are strong or
                      treatment decisions are being considered.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Blood test tubes in laboratory"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Reasons Section with Image */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4"
              >
                Why People Book a Hormone Test
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                {/* Women's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Flower2 className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    Common reasons women test hormones
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Irregular, delayed, or missed periods",
                      "PCOS concerns (acne, unwanted hair, stubborn weight gain)",
                      "Fertility planning, egg reserve questions",
                      "Perimenopause symptoms, sleep issues, hot flushes",
                      "Hair thinning, skin changes, mood shifts",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Men's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Activity className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    Common reasons men test hormones
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Low libido, erectile dysfunction, low confidence",
                      "Fatigue, brain fog, poor recovery from workouts",
                      "Weight gain, reduced muscle",
                      "Suspected low testosterone",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Image Column */}
              <motion.div variants={fadeInRight} className="relative h-full">
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical consultation with doctor"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="mt-6 bg-wine/5 p-6 rounded-2xl border border-wine/20">
                    <p className="text-brown text-sm">
                      Nexus Clinic's men's ED and libido pathway specifically
                      mentions symptom assessment plus blood tests, hormone
                      level checks, and cardiovascular evaluation, because ED
                      can be linked to underlying health issues.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Hormone Tests Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 md:order-1"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-rose/20 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Laboratory blood test tubes"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                className="order-1 md:order-2"
              >
                <motion.div variants={fadeInRight}>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    The Most Common Hormone Tests in Malaysia
                  </h2>
                  <p className="text-taupe text-lg mb-8">
                    What They Check and Why It Matters
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Thyroid */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-wine" />
                  </div>
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                  1) Thyroid hormones
                </h3>
                <p className="text-sm text-taupe mb-3">
                  TSH, Free T4 (sometimes Free T3)
                </p>
                <p className="text-brown text-sm">
                  Thyroid imbalance can show up as fatigue, weight change, hair
                  loss, constipation, anxiety, and menstrual disruption.
                </p>
              </motion.div>

              {/* Female Reproductive */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Flower2 className="w-6 h-6 text-wine" />
                  </div>
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                  2) Female reproductive hormones
                </h3>
                <p className="text-sm text-taupe mb-3">
                  FSH, LH, estradiol (E2), progesterone, prolactin, AMH
                </p>
                <p className="text-brown text-sm">
                  Pantai Hospital offers fertility screening packages including
                  female hormone profile + transvaginal ultrasound + specialist
                  review.
                </p>
              </motion.div>

              {/* Androgen */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Flame className="w-6 h-6 text-wine" />
                  </div>
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                  3) Androgen hormones
                </h3>
                <p className="text-sm text-taupe mb-3">
                  Total testosterone, DHEA-S, androstenedione, 17-OHP
                </p>
                <p className="text-brown text-sm">
                  Often linked to PCOS and acne. A KL women's hormone screening
                  guide specifically links hirsutism and acne to androgen
                  testing.
                </p>
              </motion.div>

              {/* Male */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-wine" />
                  </div>
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                  4) Male hormone testing
                </h3>
                <p className="text-sm text-taupe mb-3">
                  Total testosterone, free testosterone, SHBG, LH/FSH
                </p>
                <p className="text-brown text-sm">
                  Nexus Clinic's TRT page describes testing total serum
                  testosterone plus other safety labs at baseline and during
                  follow-up.
                </p>
              </motion.div>

              {/* Stress */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-wine" />
                  </div>
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                  5) Stress and adrenal hormones
                </h3>
                <p className="text-sm text-taupe mb-3">
                  Cortisol, ACTH, DHEA-S
                </p>
                <p className="text-brown text-sm">
                  Selected cases only. In Malaysia, "stress profile" panels are
                  marketed but should be chosen carefully based on symptoms and
                  doctor review.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Time Section with Image Layout */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-8">
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    Best Time to Do a Hormone Test
                  </h2>
                  <p className="text-taupe text-lg">
                    Timing Matters More Than People Think
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {/* Women Timing */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                          Women: cycle timing
                        </h3>
                        <p className="text-brown text-sm">
                          FSH, LH, prolactin, and estradiol are often measured
                          around day 3 to 4 of the menstrual cycle, when
                          hormones are closer to baseline.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Progesterone */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                        <Droplet className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                          Progesterone testing
                        </h3>
                        <p className="text-brown text-sm">
                          Test mid-luteal, about 7 days before your expected
                          period. ASRM notes progesterone typically peaks 6 to 8
                          days after ovulation.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Men Timing */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                        <Sun className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                          Men: morning testing
                        </h3>
                        <p className="text-brown text-sm">
                          Morning sampling is often preferred for testosterone.
                          Many clinical pathways prefer morning sampling when
                          diagnosing low testosterone.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                    alt="Medical consultation with calendar"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same but with adjusted styling */}
        {/* Preparation Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  How to Prepare for a Hormone Blood Test
                </h2>
                <p className="text-taupe">
                  Preparation depends on which hormones you're testing
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Fasting */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Moon className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        Fasting
                      </h3>
                      <p className="text-brown">
                        Many hormone tests do not require fasting, but if your
                        panel includes glucose, insulin, or cholesterol, your
                        clinic may advise fasting. Always follow the clinic's
                        instructions.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Biotin Warning */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-cream p-6 rounded-2xl shadow-lg border-l-4 border-wine"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        Biotin warning (very important)
                      </h3>
                      <p className="text-brown">
                        A KL women's hormone screening guide warns that biotin
                        supplements may interfere with results for tests like
                        thyroid panels. If you take biotin (hair, skin, nails
                        supplements), tell your clinic before testing.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Simple Tips */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-4">
                    Other simple tips
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Bring your cycle dates (first day of last period, usual cycle length)",
                      "List all medications and supplements",
                      "Avoid heavy exercise right before certain hormone tests (your clinician will guide you)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6"
              >
                What Happens After You Get Results?
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
                This is where a lot of people feel lost. A report will show
                "normal ranges," but hormone ranges change based on:
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              >
                {[
                  "age",
                  "sex",
                  "cycle day",
                  "pregnancy status",
                  "time of day",
                  "your symptoms",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-4 rounded-xl shadow-md"
                  >
                    <span className="text-brown capitalize">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-8 rounded-3xl"
              >
                <p className="text-xl text-brown font-medium">
                  The right question is not "Is it normal?" It's "Does this
                  result match what I'm feeling, and what should we do next?"
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-8 text-taupe">
                Nexus Clinic's approach across services is to use blood-test
                guided, doctor monitored programmes, and their women's fertility
                content describes hormone checks as part of a broader clinical
                picture.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  Hormone Test Cost in Malaysia
                </h2>
                <p className="text-taupe">Kuala Lumpur Pricing Reality</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-8 rounded-3xl shadow-xl mb-8"
              >
                <p className="text-brown mb-6">
                  Costs vary depending on how many hormones you test and whether
                  imaging or consult is included.
                </p>

                <h3 className="font-['Georgia',serif] text-xl text-brown mb-4">
                  Real published price references from Malaysia providers:
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-wine mb-3">
                      Pantai Hospital individual test prices:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "FSH: RM65",
                        "LH: RM65",
                        "Estradiol: RM95",
                        "AMH: RM559.70",
                        "Testosterone: RM91.90",
                        "Androstenedione: RM273",
                        "DHEA: RM141.20",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-brown border-b border-taupe/20 py-2"
                        >
                          <span>{item.split(":")[0]}</span>
                          <span className="font-medium">
                            {item.split(":")[1]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          Pantai Hospital KL:
                        </span>{" "}
                        Fertility screening package for women: RM699 including
                        female hormone profile test, transvaginal ultrasound,
                        specialist consult/review
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          Sunway Medical Velocity:
                        </span>{" "}
                        "Comprehensive Blood Profile Female" listed at RM450
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          Rosewood Women's Wellness:
                        </span>{" "}
                        Advanced hormone blood test listed at RM1,498
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-6 rounded-2xl"
              >
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  How to budget smartly
                </h3>
                <p className="text-brown">Ask for a breakdown:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1 text-brown">
                  <li>consultation</li>
                  <li>lab panel</li>
                  <li>repeat tests (if timing needs confirmation)</li>
                  <li>follow-up review</li>
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Market Positioning Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown text-center mb-12"
              >
                Market Positioning in Malaysia
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Position 1 */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Search className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Symptom-Driven Screening
                  </h3>
                  <p className="text-brown text-sm">
                    Clinics position "hormone imbalance tests" as symptom-driven
                    screening. Example: Prinz Klinik promotes hormone imbalance
                    testing to identify root causes of symptoms.
                  </p>
                </motion.div>

                {/* Position 2 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <ClipboardList className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Transparent Test Menus
                  </h3>
                  <p className="text-brown text-sm">
                    Hospitals publish transparent test menus and packages. Panti
                    publishes hormone test price lists and fertility screening
                    packages that combine hormones plus ultrasound and
                    specialist review.
                  </p>
                </motion.div>

                {/* Position 3 */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    Premium Wellness Bundles
                  </h3>
                  <p className="text-brown text-sm">
                    Wellness clinics sell bigger "advanced hormone" bundles.
                    Rosewood promotes a premium hormone blood test bundle at a
                    higher price point.
                  </p>
                </motion.div>
              </div>

              {/* Nexus Stand Out */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-linear-to-r from-wine to-rose p-8 rounded-3xl text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-4">
                  How Nexus Clinic Kuala Lumpur can stand out
                </h3>
                <ul className="space-y-3">
                  {[
                    "Make timing clear (cycle day testing, mid-luteal progesterone, morning testosterone)",
                    "Link symptoms to practical next steps, not just a long list of tests",
                    "Keep it medical and guided, since Nexus highlights blood-test guided programmes and doctor monitoring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-wine to-rose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                Ready to Understand Your Hormones?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-8 text-white/90"
              >
                If you're searching for a hormone test in Kuala Lumpur or a
                hormone blood test in Malaysia, start with the right test, on
                the right day, for the right reason.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Schedule Your Consultation
                </button>

                <div className="pt-6 text-white/80">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur
                  </p>
                  <p className="flex items-center justify-center gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    +6016-7025699 / +603-21635699
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
