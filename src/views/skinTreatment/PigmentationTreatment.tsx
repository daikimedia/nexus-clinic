"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Sun,
  Droplets,
  ChevronRight,
  Star,
  Heart,
  Flower2,
  Sparkle,
  Target,
  Calendar,
  MessageCircle,
  Quote,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

const PigmentationLanding = () => {
  return (
    <>
      <main className="w-full bg-light font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-linear-to-br from-cream to-transparent opacity-60 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-taupe to-transparent opacity-20 rounded-tr-[100px]" />
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 text-wine opacity-20">
              <Sparkle size={60} />
            </div>
            <div className="absolute bottom-40 right-20 text-rose opacity-20">
              <Flower2 size={80} />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-cream">
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Since 2001 • Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                  Stop chasing
                  <span className="block text-wine relative">
                    "brightening"
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-taupe"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>
                  Start treating the cause
                </h1>

                <p className="text-xl text-taupe leading-relaxed">
                  Pigmentation is frustrating because it keeps changing with
                  sun, stress, and hormones. At Nexus Clinic Kuala Lumpur, we
                  build a personalised plan that targets your pigment type, not
                  just your skin tone.
                </p>

                <motion.div variants={scaleIn} className="flex wrap gap-4">
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <span>Start Your Consultation</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-cream transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>

                {/* Location Badge */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-2 text-brown bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-cream"
                >
                  <MapPin className="w-5 h-5 text-wine" />
                  <span>
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur
                  </span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                    alt="Nexus Clinic KL"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />

                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-wine rounded-full p-2">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-brown font-medium">
                          Advanced Options Available
                        </p>
                        <p className="text-xs text-taupe">
                          MedLite C6 ND:YAG • Pico Laser • Dermamelan
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Malaysia Section */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center justify-center space-x-2 mb-4">
                  <Sun className="w-6 h-6 text-wine" />
                  <span className="text-wine font-medium">
                    Living in Malaysia?
                  </span>
                </div>
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Here's why pigmentation feels extra stubborn
                </h2>
                <p className="text-lg text-taupe">
                  Pigmentation does not just show up. It builds. In Malaysia, a
                  few things make pigment flare-ups common.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    icon: Sun,
                    title: "Sun Exposure",
                    desc: "Even short daily exposure adds up",
                    color: "rose",
                  },
                  {
                    icon: Heart,
                    title: "Hormonal Shifts",
                    desc: "Pregnancy, stress, and cycles",
                    color: "wine",
                  },
                  {
                    icon: Droplets,
                    title: "Skin Inflammation",
                    desc: "Acne, irritation, harsh products",
                    color: "taupe",
                  },
                  {
                    icon: Flower2,
                    title: "Genetics & Ageing",
                    desc: "Natural melanin production",
                    color: "brown",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cream"
                  >
                    <div
                      className={`bg-${item.color}/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Pigmentation Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  What pigmentation actually is
                  <span className="block text-wine text-2xl mt-2">
                    (in simple words)
                  </span>
                </h2>

                <p className="text-lg text-taupe leading-relaxed">
                  Pigmentation happens when your skin produces extra melanin
                  (the pigment that gives skin its colour). Sometimes the
                  pigment is on the surface. Sometimes it sits deeper. That
                  depth matters, because it changes what will work best.
                </p>

                <div className="bg-cream p-6 rounded-2xl border-l-4 border-wine">
                  <p className="text-brown italic">
                    "That is why one person improves fast with a peel, while
                    another needs lasers and long-term maintenance."
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Surface Pigment",
                    "Deep Pigment",
                    "Melasma",
                    "Sunspots",
                  ].map((type, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-xl shadow-md border border-cream"
                    >
                      <div className="w-full h-2 bg-linear-to-r from-taupe to-wine rounded-full mb-3" />
                      <p className="text-brown font-medium">{type}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-cream rounded-full opacity-50" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types of Pigmentation */}
        <section className="relative py-24 bg-linear-to-b from-white to-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Types of pigmentation we commonly see in Kuala Lumpur
                </h2>
                <p className="text-lg text-taupe">
                  Not all "dark spots" are the same. Most patients have more
                  than one type.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    title: "Melasma",
                    desc: "Patchy, hormonal pigment on cheeks, forehead, upper lip",
                    color: "wine",
                    icon: Heart,
                  },
                  {
                    title: "Sunspots & Age Spots",
                    desc: "Small, defined brown spots from UV exposure",
                    color: "rose",
                    icon: Sun,
                  },
                  {
                    title: "Freckles",
                    desc: "Genetic spots that darken with sun exposure",
                    color: "taupe",
                    icon: Sparkle,
                  },
                  {
                    title: "PIH",
                    desc: "Dark marks after acne, rash, or irritation",
                    color: "brown",
                    icon: Droplets,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div
                      className={`bg-${item.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-6 h-6`} />
                    </div>
                    <h3 className="text-xl font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Warning Box */}
              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border-2 border-wine shadow-lg max-w-3xl mx-auto"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-wine rounded-full p-2 shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brown mb-2">
                      Is it pigmentation or something else?
                    </h4>
                    <p className="text-taupe">
                      If a spot is changing fast, bleeding, ulcerating, or looks
                      very different from other spots, do not treat it like
                      cosmetic pigmentation. Get it assessed medically first.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Good Fit */}
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
              >
                <div className="bg-rose/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                  You are likely a good fit if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You have dark spots, melasma patches, uneven tone, or stubborn marks",
                    "Your pigment gets worse after sun exposure",
                    "You want a plan that balances results with skin safety",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-taupe">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Pause */}
              <motion.div
                variants={fadeInRight}
                className="bg-cream p-8 rounded-3xl shadow-xl border border-taupe"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                  You may need to pause if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Your skin is actively inflamed (eczema flare, severe acne)",
                    "You are pregnant or breastfeeding",
                    "You are using strong prescriptions without guidance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-taupe">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="relative py-24 bg-brown text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-['Georgia',serif] text-4xl mb-4">
                  Pigmentation treatments available at Nexus Clinic
                </h2>
                <p className="text-lg text-taupe">
                  Each treatment is matched to your pigment type, depth, and
                  skin response
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Laser */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    Pigmentation Lasers
                  </h3>
                  <p className="text-taupe mb-4">
                    MedLite C6 ND:YAG and Pico Laser for stubborn, deeper, or
                    well-defined spots
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Non-ablative, minimal downtime</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Ultra-short pulses for precision</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Chemical Peels */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-rose w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    Chemical Peels
                  </h3>
                  <p className="text-taupe mb-4">
                    Surface refresh for superficial pigment and dullness
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Great for post-acne marks</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Improves tone and texture</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Topical */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-taupe w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    Topical Treatments
                  </h3>
                  <p className="text-taupe mb-4">
                    Medical-grade homecare to maintain results
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Reduces pigment production</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Essential for long-term success</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dermamelan */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    Dermamelan Program
                  </h3>
                  <p className="text-taupe mb-4">
                    Professional depigmentation for stubborn cases
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Structured homecare program</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>Ideal for melasma patterns</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Laser vs Peel */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Laser vs Chemical Peel in Malaysia
                </h2>
                <p className="text-lg text-taupe">
                  Which one should you choose?
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-8"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brown mb-4">
                    Laser
                  </h3>
                  <p className="text-taupe mb-6">
                    Better for defined spots or deeper pigment, when properly
                    selected and performed
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-wine rounded-full" />
                      <span className="text-sm text-brown">
                        Precision targeting
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-wine rounded-full" />
                      <span className="text-sm text-brown">
                        Effective for deep pigment
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
                >
                  <div className="bg-rose w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brown mb-4">
                    Chemical Peel
                  </h3>
                  <p className="text-taupe mb-6">
                    Great for surface pigment, dullness, and tone, especially if
                    your barrier is sensitive
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-rose rounded-full" />
                      <span className="text-sm text-brown">
                        Surface renewal
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-rose rounded-full" />
                      <span className="text-sm text-brown">
                        Improves overall tone
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-3xl text-center"
              >
                <p className="text-lg text-brown font-medium">
                  Many patients do best with a combination plan, not a single
                  method.
                </p>
                <p className="text-taupe mt-2">
                  Nexus Clinic has an in-depth guide comparing both for Asian
                  skin tones.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results & Downtime */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  What results can you expect
                  <span className="block text-wine text-2xl mt-2">
                    (the honest version)
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    "Faster brightening in the first few weeks if pigment is superficial",
                    "Gradual improvement over months for deeper pigment or melasma",
                    "Best long-term results when you treat and maintain together",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-wine rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-taupe">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                  <p className="text-brown italic">
                    Melasma, in particular, can be long-term. It may fade
                    slightly, but often persists without professional treatment.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  Downtime: what it feels like in real life
                </h2>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <ul className="space-y-4">
                    {[
                      "Mild redness and warmth",
                      "Temporary darkening of spots before they fade",
                      "Light flaking or dryness if a peel is used",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-3"
                      >
                        <Calendar className="w-5 h-5 text-wine" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-taupe">
                    If you have events coming up, we plan around them.
                    Pigmentation treatment is not just medical, it is lifestyle
                    timing too.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Safety & Risks */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Shield className="w-16 h-16 text-wine mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Side effects and risks
                </h2>
                <p className="text-lg text-taupe">(and how we reduce them)</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
              >
                <p className="text-brown mb-6">
                  Most side effects are temporary, but pigmentation treatments
                  need respect, especially for Asian skin.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    "Redness, swelling, sensitivity",
                    "Temporary dryness and flaking",
                    "PIH if skin is over-treated",
                  ].map((item, index) => (
                    <div key={index} className="bg-cream p-4 rounded-xl">
                      <p className="text-sm text-brown">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-wine text-white p-6 rounded-2xl">
                  <p className="font-medium">
                    Your safest decision is simple: do not chase aggressive
                    settings because you want faster results. Pigmentation loves
                    inflammation.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Areas we can treat
                </h2>
                <p className="text-lg text-taupe">
                  Pigmentation is not only on the cheeks
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  "Forehead",
                  "Cheeks",
                  "Upper lip",
                  "Nose",
                  "Side of face",
                  "Chin",
                  "Jawline",
                  "Neck",
                  "Hands",
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-xl shadow-md text-center border border-taupe/20"
                  >
                    <p className="text-brown font-medium">{area}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Cost of pigmentation treatment in Kuala Lumpur
                </h2>
                <p className="text-lg text-taupe">
                  Pricing varies because pigmentation varies
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-cream"
                >
                  <p className="text-2xl font-semibold text-wine mb-2">
                    RM500 - RM1,000
                  </p>
                  <p className="text-taupe">Laser pigmentation (per session)</p>
                  <p className="text-xs text-brown mt-2">
                    *Varies by sessions and area size
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-cream"
                >
                  <p className="text-2xl font-semibold text-rose mb-2">
                    RM400 - RM900
                  </p>
                  <p className="text-taupe">Pico laser (per session)</p>
                  <p className="text-xs text-brown mt-2">
                    *Varies by clinic and device
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-2xl text-center max-w-3xl mx-auto"
              >
                <p className="text-brown">
                  Treat these as general benchmarks, not fixed pricing. The
                  right plan is the one that works for your pigment and does not
                  trigger rebound.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-brown text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <MessageCircle className="w-16 h-16 text-taupe mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-taupe">
                  Everything you need to know about pigmentation treatment in KL
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  {
                    q: "What causes pigmentation on the face?",
                    a: "Pigmentation can come from sun exposure, hormonal changes, genetics, ageing, and skin injury or inflammation. In Malaysia, sun exposure and inflammation from acne or irritation are common triggers.",
                  },
                  {
                    q: "Can pigmentation be removed permanently?",
                    a: "Some pigmentation can fade for a long time, but 'permanent' is tricky, especially if the trigger is still present. Maintenance is the difference-maker. Without sun protection and the right homecare, pigment can return.",
                  },
                  {
                    q: "What is the best treatment for pigmentation in Malaysia?",
                    a: "It depends on the type and depth of pigment. Malaysian clinics commonly discuss options like pico laser, Q-switched laser, and chemical peels. A plan is 'best' when it improves pigment without triggering rebound or irritation.",
                  },
                  {
                    q: "Is laser treatment safe for melasma?",
                    a: "Laser can be safe when performed by trained doctors using appropriate technology and settings, but melasma needs extra care. Aggressive laser approaches can worsen pigmentation if not used carefully.",
                  },
                  {
                    q: "How many sessions will I need?",
                    a: "There is no single number. Some people see visible improvement after a few sessions, while deeper or recurring pigment patterns take more time. Multiple sessions are typical for pico laser programs.",
                  },
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    variants={fadeInUp}
                    className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 cursor-pointer"
                  >
                    <summary className="flex items-center justify-between text-lg font-medium">
                      {faq.q}
                      <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-taupe">{faq.a}</p>
                  </motion.details>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Nexus */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <Quote className="w-16 h-16 text-wine mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Why choose Nexus Clinic Kuala Lumpur?
                </h2>
                <p className="text-lg text-taupe">
                  Because you do not just want lighter spots. You want stable
                  skin that stays calm.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Clock,
                    title: "Established 2001",
                    desc: "Long-standing KL clinic with proven expertise",
                  },
                  {
                    icon: MapPin,
                    title: "Prime Location",
                    desc: "Easy access at Wisma UOA II, Jalan Pinang",
                  },
                  {
                    icon: Sparkles,
                    title: "Multiple Pathways",
                    desc: "Not one 'signature laser' for everyone",
                  },
                  {
                    icon: Heart,
                    title: "Asian Skin Focus",
                    desc: "Practical education for Asian skin tones",
                  },
                  {
                    icon: Shield,
                    title: "Safety First",
                    desc: "Balancing results with skin protection",
                  },
                  {
                    icon: Star,
                    title: "Comprehensive Care",
                    desc: "Laser, peel, topical, and maintenance",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-cream text-center"
                  >
                    <div className="bg-wine/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-wine" />
                    </div>
                    <h3 className="text-lg font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PigmentationLanding;
