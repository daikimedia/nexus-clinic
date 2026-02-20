"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Sun,
  Droplets,
  Shield,
  Heart,
  Award,
  MapPin,
  ChevronRight,
  Leaf,
  Flower2,
  Sparkle,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const SkinWhiteningLanding = () => {
  const faqs = [
    {
      q: "What's the best treatment for my skin?",
      a: "It depends on the cause. For stubborn pigmentation, laser toning is often effective. For dullness, chemical peels work well. Many get best results from a combination plan.",
    },
    {
      q: "Is laser safe for Asian skin tones?",
      a: "Yes, when done by experienced doctors with appropriate settings. Our protocols are specifically designed for Asian skin types.",
    },
    {
      q: "How many sessions will I need?",
      a: "Mild dullness may improve quickly, while dark spots and melasma usually need multiple sessions. Your doctor will estimate based on your skin.",
    },
    {
      q: "How long do results last?",
      a: "With good maintenance and daily sun protection, results can last 6-12 months. Skin is alive and responds to sun and stress.",
    },
    {
      q: "Are glutathione drips safe?",
      a: "Only under medical supervision. We keep it grounded with realistic expectations and proper protocols.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              {/* Tag */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-cream text-brown px-4 py-2 rounded-full text-sm font-medium border border-taupe/20">
                  <Sparkle className="w-4 h-4 text-rose" />
                  Nexus Clinic Kuala Lumpur
                  <Sparkle className="w-4 h-4 text-rose" />
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-7xl font-['Georgia',serif] text-center mb-6"
              >
                <span className="text-brown">Brighter skin,</span>
                <br />
                <span className="text-wine italic">not a different you</span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-taupe text-center max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Real tone-correcting treatment in Kuala Lumpur for skin that
                feels alive, fresh, and naturally radiant.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <button className="group relative px-8 py-4 bg-wine text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-wine/20">
                  <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                    Begin Your Journey
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-rose transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button className="px-8 py-4 border-2 border-taupe text-brown rounded-full hover:bg-cream transition-all duration-300 font-medium backdrop-blur-sm bg-white/30">
                  Discover Our Approach
                </button>
              </motion.div>

              {/* Trust Bar */}
              <motion.div
                variants={scaleIn}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
              >
                {[
                  { icon: MapPin, text: "KLCC: Wisma UOA II, Jalan Pinang" },
                  { icon: Award, text: "Established Since 2001" },
                  { icon: Shield, text: "Doctor-Led Protocols" },
                  { icon: Sparkles, text: "Evidence-Based Treatments" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream hover:border-rose transition-all duration-300 group"
                  >
                    <div className="p-2 bg-cream rounded-full group-hover:bg-rose group-hover:text-white transition-all duration-300">
                      <item.icon className="w-4 h-4 text-brown group-hover:text-white" />
                    </div>
                    <span className="text-sm text-brown font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-taupe rounded-full flex justify-center">
              <div className="w-1 h-2 bg-wine rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium mb-4 block">
                  First, a quick truth
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-6">
                  About "Skin Whitening"
                </h2>
                <p className="text-taupe text-lg">
                  When you search for whitening, you might really mean:
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  "My skin looks dull and tired",
                  "I have tan lines that won't fade",
                  "My acne marks are darker",
                  "My melasma keeps returning",
                  "My face and neck don't match",
                  "My skin feels uneven",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-taupe/10 hover:border-rose transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-wine rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-12 text-center text-brown italic bg-white p-8 rounded-2xl border-l-4 border-wine"
              >
                "At Nexus Clinic, the goal is brighter, clearer, more even-toned
                skin. We're here to treat pigmentation, not push beauty
                standards."
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-4">
                  Our Approach
                </h2>
                <p className="text-taupe text-lg max-w-2xl mx-auto">
                  We treat the cause, not just the color. Personalized protocols
                  for your unique skin.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sun,
                    title: "Laser Toning",
                    description:
                      "Target excess pigment and support natural glow",
                    bestFor: "Sunspots, stubborn marks, uneven tone",
                    color: "from-rose to-wine",
                  },
                  {
                    icon: Droplets,
                    title: "Chemical Peels",
                    description: "Lift dead skin and fade surface pigment",
                    bestFor: "Dullness, surface pigmentation, acne marks",
                    color: "from-wine to-rose",
                  },
                  {
                    icon: Flower2,
                    title: "Mesotherapy",
                    description: "Hydration and luminosity boosters",
                    bestFor: "Dehydrated, tired-looking skin",
                    color: "from-rose to-brown",
                  },
                  {
                    icon: Leaf,
                    title: "Glutathione",
                    description: "IV support when appropriate",
                    bestFor: "Internal brightening support",
                    color: "from-brown to-wine",
                  },
                  {
                    icon: Shield,
                    title: "Medical Skincare",
                    description: "Results protector for home",
                    bestFor: "Long-term maintenance",
                    color: "from-wine to-taupe",
                  },
                  {
                    icon: Heart,
                    title: "Body Treatments",
                    description: "For underarms, knees, and more",
                    bestFor: "Sensitive areas, friction darkening",
                    color: "from-taupe to-rose",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-wine" />
                      </div>
                      <h3 className="text-xl font-['Georgia',serif] text-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe mb-4">{item.description}</p>
                      <p className="text-sm text-wine font-medium">
                        Best for: {item.bestFor}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why KL Section */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-rose rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-wine rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft}>
                  <span className="text-wine font-medium mb-4 block">
                    Kuala Lumpur Reality
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-6">
                    Why skin changes in KL
                  </h2>
                  <p className="text-taupe text-lg mb-8">
                    KL is beautiful, but your skin deals with a lot here. Sun,
                    heat, humidity, and stress all show up on your face.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Sun damage: UV pushes melanin production",
                      "Ageing: slower cell turnover brings dullness",
                      "Hormonal changes: trigger melasma",
                      "Pollution and lifestyle affect clarity",
                      "Post-acne marks leave shadows",
                      "Friction darkens inner thighs and underarms",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInRight}
                        className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-taupe/10"
                      >
                        <div className="w-1.5 h-1.5 bg-wine rounded-full"></div>
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-rose to-wine rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-['Georgia',serif] text-brown mb-6">
                      Perfect for:
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Uneven skin tone or dullness",
                        "Sunspots or age spots",
                        "Acne marks that stay brown",
                        "Melasma on cheeks or upper lip",
                        "Stubborn tan lines",
                        "Dark underarms, elbows, knees",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center">
                            <span className="text-wine font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-brown">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-4">
                  Investment in Your Skin
                </h2>
                <p className="text-taupe text-lg">
                  Transparent pricing for your journey to radiance
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Chemical Peel",
                    price: "RM 200 - 500",
                    icon: Droplets,
                    per: "session",
                    features: [
                      "Surface pigmentation",
                      "Dullness",
                      "Texture improvement",
                    ],
                  },
                  {
                    name: "Laser Toning",
                    price: "RM 400 - 1,000",
                    icon: Sun,
                    per: "session",
                    features: [
                      "Stubborn spots",
                      "Uneven tone",
                      "Melasma patterns",
                    ],
                    popular: true,
                  },
                  {
                    name: "Glutathione",
                    price: "RM 250 - 600",
                    icon: Leaf,
                    per: "session",
                    features: [
                      "IV support",
                      "Brightening",
                      "Medical supervision",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className={`relative bg-white rounded-2xl overflow-hidden shadow-xl ${
                      item.popular ? "ring-2 ring-wine" : ""
                    }`}
                  >
                    {item.popular && (
                      <div className="absolute top-5 right-5 bg-wine text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6">
                        <item.icon className="w-8 h-8 text-wine" />
                      </div>
                      <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                        {item.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-wine">
                          {item.price}
                        </span>
                        <span className="text-taupe text-sm ml-1">
                          /{item.per}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-brown"
                          >
                            <div className="w-1.5 h-1.5 bg-rose rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 text-taupe text-sm"
              >
                *Final cost depends on your skin condition and number of
                sessions needed
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <section className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown rounded-full filter blur-3xl opacity-10"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={scaleIn} className="mb-8">
                <div className="inline-flex p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-white mb-6"
              >
                Ready for skin that feels alive?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-10"
              >
                Stop guessing. Start your structured journey to radiant,
                even-toned skin.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button className="group relative px-12 py-5 bg-white text-wine rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 font-medium text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Your Consultation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-white/70 text-sm"
              >
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, Kuala
                Lumpur
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkinWhiteningLanding;
