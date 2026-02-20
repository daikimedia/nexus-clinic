"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Shield,
  Sparkles,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Heart,
  Thermometer,
  Moon,
  SunDim,
  Wind,
  Zap,
  Leaf,
  Gem,
  ArrowRight,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

const MelasmaLanding = () => {
  const services = [
    {
      title: "Advanced Pigmentation Lasers",
      description:
        "Target pigment clusters dengan gradual, safe untuk Asian skin",
      icon: <Zap className="w-6 h-6" />,
      color: "from-wine/20 to-rose/20",
    },
    {
      title: "Dermamelan Treatment",
      description: "Professional depigmentation reset untuk melasma stubborn",
      icon: <Gem className="w-6 h-6" />,
      color: "from-brown/20 to-taupe/20",
    },
    {
      title: "Chemical Peels",
      description: "Surface pigment treatment dengan barrier protection",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-rose/20 to-wine/20",
    },
    {
      title: "Topical Treatment Plan",
      description: "Customized home care untuk long-term control",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-taupe/20 to-brown/20",
    },
  ];

  const triggers = [
    {
      icon: <Sun className="w-5 h-5" />,
      text: "UV Exposure",
      color: "text-rose",
    },
    {
      icon: <Thermometer className="w-5 h-5" />,
      text: "Heat & Humidity",
      color: "text-wine",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Hormonal Changes",
      color: "text-brown",
    },
    {
      icon: <Wind className="w-5 h-5" />,
      text: "Skin Irritation",
      color: "text-taupe",
    },
  ];

  const comparisons = [
    {
      type: "Creams",
      best: "Daily control & prevention",
      limit: "Slow, needs consistency",
    },
    {
      type: "Chemical Peels",
      best: "Surface pigment, mild cases",
      limit: "Limited for deeper pigment",
    },
    {
      type: "Lasers",
      best: "Stubborn pigment clusters",
      limit: "Needs careful settings",
    },
  ];

  const faqs = [
    {
      q: "Is laser safe for melasma on Asian skin?",
      a: "Yes, with right settings and gradual approach. Aggressive lasers can trigger rebound pigmentation.",
    },
    {
      q: "How many sessions do I need?",
      a: "Varies based on depth, skin type, and sun protection consistency. Multiple sessions are normal.",
    },
    {
      q: "Does melasma come back after treatment?",
      a: "Relapse is common if triggers return. Maintenance is part of the plan, not an afterthought.",
    },
    {
      q: "What sunscreen is best for melasma in Malaysia?",
      a: "Broad spectrum with visible light protection. Tinted products with iron oxide are recommended.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light via-cream/50 to-light">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft} className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-cream">
                    <span className="w-2 h-2 bg-wine rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-brown">
                      Nexus Clinic KL • Est. 2001
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                    Melasma doesn't need to
                    <span className="block text-wine">run your confidence</span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-taupe leading-relaxed max-w-lg">
                    At Nexus Clinic Kuala Lumpur, we treat melasma with calm,
                    step by step plans that respect Asian skin and real life in
                    Malaysia.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex wrap gap-6 pt-4">
                    {[
                      "KLCC Location",
                      "Dermatology Led",
                      "Transparent Pricing",
                      "Easy Booking",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={scaleIn}
                        className="flex items-center gap-2 text-sm text-brown"
                      >
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex wrap gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-wine text-light rounded-full font-medium 
                             hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl
                             flex items-center gap-2"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border-2 border-wine/30 text-wine rounded-full 
                             font-medium hover:border-wine hover:bg-wine/5 transition-all"
                    >
                      WhatsApp Us
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative">
                  {/* Glass Card */}
                  <div className="bg-glass backdrop-blur-md rounded-3xl p-8 border border-cream shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-wine/10 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-wine" />
                        </div>
                        <div>
                          <h3 className="font-georgia text-xl text-brown">
                            If you're here,
                          </h3>
                          <p className="text-taupe">
                            you probably know the feeling
                          </p>
                        </div>
                      </div>

                      <p className="text-brown/80 leading-relaxed">
                        "You look in the mirror and the patches are the first
                        thing you see. Cheeks. Upper lip. Forehead. Sometimes
                        all three."
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {["Cheeks", "Forehead", "Upper Lip", "Jawline"].map(
                          (area, i) => (
                            <div
                              key={i}
                              className="bg-cream/50 rounded-xl p-3 text-center"
                            >
                              <span className="text-sm font-medium text-brown">
                                {area}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Melasma Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeInLeft} className="space-y-8">
                  <div>
                    <span className="text-wine font-medium tracking-wider text-sm uppercase">
                      Understanding
                    </span>
                    <h2 className="font-georgia text-4xl text-brown mt-2">
                      What is melasma?
                    </h2>
                  </div>

                  <p className="text-lg text-taupe leading-relaxed">
                    Melasma is a type of pigmentation that appears as brown or
                    grey brown patches, usually on the face. It's common,
                    especially in women, and often linked with hormones and sun
                    exposure.
                  </p>

                  <div className="bg-cream/50 rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-4">
                      Common Triggers in KL
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {triggers.map((trigger, i) => (
                        <motion.div
                          key={i}
                          variants={scaleIn}
                          className="flex items-center gap-3 bg-white/50 rounded-xl p-3"
                        >
                          <div className={`${trigger.color} p-2 rounded-lg`}>
                            {trigger.icon}
                          </div>
                          <span className="text-sm font-medium text-brown">
                            {trigger.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-6">
                      Why Malaysia?
                    </h3>
                    <p className="text-brown/70 mb-6">
                      Year round strong UV levels and hot, humid climate make
                      melasma management uniquely challenging.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Sun exposure and tanning habits",
                        "Pregnancy related melasma",
                        "Birth control or hormone shifts",
                        "Strong acids irritating skin barrier",
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                          <span className="text-brown/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-wine/5 rounded-3xl p-8 border border-wine/10">
                    <h3 className="font-georgia text-xl text-brown mb-4">
                      Is it really melasma?
                    </h3>
                    <p className="text-brown/70 mb-4">
                      Melasma looks patchy and spread out, appears on both sides
                      of the face, and deepens with triggers.
                    </p>
                    <p className="text-sm text-taupe">
                      Can be confused with sunspots, PIH, or freckles — which is
                      why we start with assessment, not assumptions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-linear-to-b from-cream/30 to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <span className="text-wine font-medium tracking-wider text-sm uppercase">
                Our Philosophy
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-2 mb-6">
                Why melasma needs a plan, not a single treatment
              </h2>
              <p className="text-lg text-taupe">
                Most people don't fail treatment. They fail incomplete
                treatment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Calm the triggers",
                  desc: "Sun, heat, inflammation, irritation",
                  icon: <Moon className="w-8 h-8" />,
                  color: "from-wine/20 to-rose/20",
                },
                {
                  step: "02",
                  title: "Lift & break down pigment",
                  desc: "Laser, peel, or both depending on depth",
                  icon: <Sparkles className="w-8 h-8" />,
                  color: "from-brown/20 to-taupe/20",
                },
                {
                  step: "03",
                  title: "Stop the rebound",
                  desc: "Maintenance and correct home care",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-rose/20 to-wine/20",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div
                    className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream 
                              hover:border-wine/30 transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-3xl opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div className="text-6xl font-georgia text-brown/10 mb-4">
                        {item.step}
                      </div>
                      <div
                        className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6
                                  group-hover:scale-110 transition-transform duration-300"
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-georgia text-xl text-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-wine/5 via-transparent to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider text-sm uppercase">
                  Our Treatments
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  Melasma treatment options at Nexus Clinic
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.color} rounded-3xl 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div
                      className="relative bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream 
                                h-full group-hover:border-wine/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 bg-wine/10 rounded-2xl flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300"
                        >
                          {service.icon}
                        </div>
                        <div className="1">
                          <h3 className="font-georgia text-xl text-brown mb-2">
                            {service.title}
                          </h3>
                          <p className="text-taupe mb-4">
                            {service.description}
                          </p>
                          <button
                            className="text-wine font-medium inline-flex items-center gap-2 
                                         hover:gap-3 transition-all"
                          >
                            Learn more <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Expectations */}
        <section className="py-24 bg-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft} className="space-y-6">
                  <span className="text-wine font-medium tracking-wider text-sm uppercase">
                    Realistic Results
                  </span>
                  <h2 className="font-georgia text-4xl text-brown">
                    What to expect
                  </h2>

                  <div className="space-y-4">
                    {[
                      "Patches soften and blend into your natural tone",
                      "Makeup sits better, stop color correcting daily",
                      "Flare ups become smaller and easier to calm",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown/70">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-cream">
                    <h3 className="font-georgia text-lg text-brown mb-3">
                      Important to know
                    </h3>
                    <p className="text-taupe text-sm">
                      Melasma often improves in stages, not overnight. Dermal or
                      deeper pigment is harder to "erase" — the goal becomes
                      visible softening and long term control.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-6">
                      Quick Comparison
                    </h3>
                    <div className="space-y-4">
                      {comparisons.map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-cream last:border-0 pb-4 last:pb-0"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-georgia text-brown">
                              {item.type}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-wine font-medium">
                                Best:{" "}
                              </span>
                              <span className="text-taupe">{item.best}</span>
                            </div>
                            <div>
                              <span className="text-rose font-medium">
                                Limit:{" "}
                              </span>
                              <span className="text-taupe">{item.limit}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-wine/5 rounded-2xl">
                    <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                    <p className="text-sm text-brown">
                      <span className="font-medium">
                        The big risk to respect:
                      </span>{" "}
                      Rebound pigmentation (PIH) if laser is too aggressive. We
                      prioritize controlled progress, not trauma.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <span className="text-wine font-medium tracking-wider text-sm uppercase">
                Prevention
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-2">
                Your melasma prevention routine in Malaysia
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <SunDim className="w-8 h-8" />,
                  title: "Daily Sunscreen",
                  desc: "Even when indoors. Melasma is triggered by light.",
                  color: "from-wine/20 to-rose/20",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Visible Light Protection",
                  desc: "Iron oxide in tinted products helps block visible light.",
                  color: "from-brown/20 to-taupe/20",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Keep Barrier Calm",
                  desc: "Over-exfoliation is a common mistake. Don't scrub.",
                  color: "from-rose/20 to-wine/20",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-3xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className="relative bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream 
                              text-center group-hover:border-wine/30 transition-all duration-300"
                  >
                    <div
                      className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mx-auto mb-4
                                group-hover:scale-110 transition-transform duration-300"
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-taupe text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-linear-to-b from-light to-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-wine font-medium tracking-wider text-sm uppercase">
                  FAQ
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  Common questions about melasma
                </h2>
              </div>

              <div className="grid gap-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="group bg-glass backdrop-blur-sm rounded-2xl border border-cream 
                           hover:border-wine/30 transition-all duration-300 overflow-hidden"
                  >
                    <details className="group">
                      <summary
                        className="flex items-center justify-between p-6 cursor-pointer 
                                     list-none marker:hidden"
                      >
                        <span className="font-georgia text-brown text-lg pr-8">
                          {faq.q}
                        </span>
                        <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-taupe leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,var(--tw-linear-stops))] from-wine/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={scaleIn} className="mb-8">
                <span className="hidden w-20 h-20 bg-wine/10 rounded-full mb-6" />
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6 leading-tight"
              >
                If your melasma keeps coming back,
                <span className="block text-wine">don't blame yourself</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe mb-10 max-w-2xl mx-auto"
              >
                Most people were never given a full plan. Book a consultation
                and let's map your pigment, calm your triggers, and build a
                routine you can actually keep up with.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-wine text-light rounded-full font-medium 
                         hover:bg-brown transition-all duration-300 shadow-xl hover:shadow-2xl
                         flex items-center gap-3 text-lg"
                >
                  Book Your Consultation
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-wine/30 text-wine rounded-full 
                         font-medium hover:border-wine hover:bg-wine/5 transition-all text-lg"
                >
                  WhatsApp Us
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-taupe"
              >
                <span>✓ KLCC Location</span>
                <span>✓ Est. 2001</span>
                <span>✓ Dermatology Led</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MelasmaLanding;
