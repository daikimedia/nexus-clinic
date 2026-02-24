import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Sun,
  Clock,
  Heart,
  ChevronRight,
  Phone,
  MapPin,
  CheckCircle2,
  Zap,
  Feather,
  Gem,
  Sparkle,
  Award,
  Star,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const AntiAgingLanding = () => {
  const images = {
    hero: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Woman at skincare clinic
    consultation:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Doctor consultation
    treatment:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Facial treatment
    results: "/images/treatment/happy-patient.png", // Happy client
    clinic:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Modern clinic interior
    skincare:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", // Skincare products
    beforeAfter:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Beauty comparison concept
    facial:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Facial massage
  };

  const faqs = [
    {
      q: "What is the best anti aging treatment in Malaysia?",
      a: "The best treatment depends on your specific concerns. A combination of prevention, collagen support, and targeted correction usually works best.",
    },
    {
      q: "When should I start anti aging treatments?",
      a: "Many clinics frame it as prevention first, then correction. Some people start in their late 20s or early 30s with skincare and gentle treatments, and add devices or injectables when signs become visible.",
    },
    {
      q: "Does sunscreen really prevent ageing?",
      a: "Yes. Sunscreen helps prevent premature skin ageing like wrinkles and age spots caused by UV exposure.",
    },
    {
      q: "How long does Botox last?",
      a: "Commonly about 3 to 4 months, with full effect developing over about 2 weeks.",
    },
    {
      q: "Will Botox make my face look frozen?",
      a: "It shouldn't when done conservatively and placed correctly. The goal is softer movement and smoother lines, not no expression.",
    },
    {
      q: "How long does HIFU last?",
      a: "Many Malaysia-based clinic resources describe HIFU results lasting around 12 to 18 months for many people, with maintenance depending on age and skin condition.",
    },
    {
      q: "Does HIFU hurt?",
      a: "Sensitivity varies. Many people describe it as warm or tingly with short bursts. Clinics often adjust settings for comfort.",
    },
    {
      q: "What is better: HIFU or RF microneedling?",
      a: "They do different jobs. HIFU targets deeper lifting and tightening. RF microneedling is strong for pores, texture, acne scars, and collagen remodeling.",
    },
    {
      q: "How many sessions do I need?",
      a: "It depends. HIFU may be 1 session with maintenance later, while RF microneedling and lasers often work best as a series.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-light font-[--font-inter] overflow-hidden">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={images.hero}
              alt="Luxury skincare clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent" />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-wine blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={scaleIn} className="inline-block">
                  <span className="bg-glass backdrop-blur-sm px-4 py-2 rounded-full text-wine border border-wine/20">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-[--font-georgia] leading-tight">
                  Look refreshed, <span className="text-wine">not "done."</span>
                </h1>

                <p className="text-xl text-brown/80 leading-relaxed bg-glass backdrop-blur-sm p-6 rounded-2xl">
                  Fine lines, sagging, dull skin, and tired-looking eyes build
                  up quietly, then suddenly feel obvious in photos and mirrors.
                  At Nexus Clinic Kuala Lumpur, anti aging therapy is a
                  personalised plan, not a random menu of treatments.
                </p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2">
                    Book Consultation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-white transition-all duration-300">
                    View Treatments
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square rounded-full bg-linear-to-br from-rose to-wine opacity-20 absolute inset-0" />
                <div className="relative bg-glass backdrop-blur-md rounded-3xl p-8 border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="text-wine" />
                      <p className="text-brown">
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-wine" />
                      <p className="text-brown">016-702 5699 / 03-2163 5699</p>
                    </div>
                    <div className="border-t border-taupe/20 pt-6">
                      <h3 className="font-[--font-georgia] text-lg mb-4">
                        Personalised anti aging programmes using:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          Non-surgical face lift techniques
                        </span>
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          Collagen-stimulating treatments
                        </span>
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          Advanced laser treatments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section with Images */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={fadeInLeft}
                className="relative h-96 rounded-3xl overflow-hidden"
              >
                <img
                  src={images.clinic}
                  alt="Modern clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-[--font-georgia]">
                    State-of-the-art Facility
                  </h3>
                  <p>KLCC area location</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden"
              >
                <img
                  src={images.consultation}
                  alt="Expert consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-wine/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-[--font-georgia]">
                    Expert Consultation
                  </h3>
                  <p>MOH certified practitioners</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: MapPin,
                  text: "Central Kuala Lumpur location (KLCC area)",
                },
                {
                  icon: Shield,
                  text: "Personalised anti aging programmes using non-surgical face lift techniques",
                },
                {
                  icon: Sparkles,
                  text: "Focus on non-surgical aesthetic procedures and advanced laser treatments",
                },
                {
                  icon: Heart,
                  text: "Safety-first mindset with MOH guidance and LCP pathway",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <item.icon className="w-10 h-10 text-wine mb-4" />
                  <p className="text-brown">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Anti Aging Really Means with Image */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                What "Anti Aging Therapy"{" "}
                <span className="text-wine">Really Means</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-brown mb-12 text-center"
              >
                Anti aging therapy is not about "stopping time." It's about
                improving the things that make you look tired or older than you
                feel.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInLeft} className="space-y-4">
                  <h3 className="text-2xl font-[--font-georgia] mb-4">
                    Common Concerns:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "fine lines and deeper wrinkles",
                      "loss of firmness (skin laxity)",
                      "volume loss in cheeks and under-eyes",
                      "uneven tone, sun spots, pigmentation",
                      "large pores, rough texture, acne marks",
                      "dullness and dryness",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={scaleIn}
                        className="flex items-center gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-4">
                  <div className="bg-cream p-8 rounded-3xl">
                    <h3 className="text-2xl font-[--font-georgia] mb-4">
                      A good plan does two things:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">
                          1. Prevents fast ageing
                        </p>
                        <p className="text-sm text-brown/70">
                          mostly from UV and lifestyle
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">
                          2. Repairs what has already changed
                        </p>
                        <p className="text-sm text-brown/70">
                          collagen, texture, volume, and expression lines
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img
                      src={images.skincare}
                      alt="Skincare products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Skin Ages Faster in Malaysia with Image */}
        <section className="py-20 bg-wine text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={images.facial}
              alt="Background texture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8"
              >
                Why Skin Ages Faster in Malaysia
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-12 opacity-90"
              >
                Malaysia's sun and heat are not gentle. UV exposure is a major
                driver of premature ageing, and daily sunscreen helps prevent
                wrinkles and age spots linked to unprotected UV exposure.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Sun,
                    text: "humidity and sweat (clogged pores, congestion)",
                  },
                  {
                    icon: Clock,
                    text: "high screen time (sleep disruption and dull skin)",
                  },
                  { icon: Zap, text: "stress (tension lines and breakouts)" },
                  {
                    icon: Feather,
                    text: "inconsistent routines (skin can't 'settle')",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <item.icon className="w-8 h-8 mb-3" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-8 text-lg italic">
                So the best anti aging treatment in Malaysia is usually a mix of
                prevention + collagen support + targeted correction.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatment Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-4 text-center"
              >
                Treatment Menu
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-center mb-12 text-brown"
              >
                What's Commonly Used in KL, and How It Feels
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  variants={fadeInLeft}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src={images.treatment}
                    alt="Luxury facial treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-[--font-georgia">
                      Advanced Treatments
                    </h3>
                    <p>RF Microneedling • Lasers • HIFU</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src={images.results}
                    alt="Happy client results"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-[--font-georgia">
                      Natural Results
                    </h3>
                    <p>Refreshed, not "done"</p>
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Wrinkle Relaxers",
                    type: "Botox-type",
                    best: "forehead lines, frown lines, crow's feet",
                    downtime: "low, maybe mild swelling or bruising",
                    icon: Feather,
                  },
                  {
                    name: "Fillers",
                    best: "under-eyes, cheeks, smile lines, chin, jawline balance",
                    downtime: "mild swelling or bruising possible",
                    longevity: "months, varies by area and product",
                    icon: Gem,
                  },
                  {
                    name: "HIFU / Ultrasound Lifting",
                    best: "mild to moderate sagging, jawline, cheeks, brows",
                    downtime: "minimal",
                    results: "gradual tightening, 12-18 months",
                    icon: Zap,
                  },
                  {
                    name: "RF Microneedling",
                    best: "pores, acne scars, fine lines, texture, firmness",
                    downtime: "few days of redness",
                    icon: Sparkle,
                  },
                  {
                    name: "Lasers",
                    type: "Pico, fractional CO2",
                    best: "pigmentation, sun damage, texture, scars",
                    downtime: "depends on laser type",
                    icon: Sun,
                  },
                ].map((treatment, index) => {
                  const Icon = treatment.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-taupe/10"
                    >
                      <Icon className="w-8 h-8 text-wine mb-3" />
                      <h3 className="text-xl font-[--font-georgia] mb-2 text-wine">
                        {treatment.name}
                      </h3>
                      {treatment.type && (
                        <p className="text-sm text-taupe mb-3">
                          {treatment.type}
                        </p>
                      )}
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Best for:</span>{" "}
                        {treatment.best}
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Downtime:</span>{" "}
                        {treatment.downtime}
                      </p>
                      {treatment.longevity && (
                        <p className="text-sm">
                          <span className="font-semibold">Longevity:</span>{" "}
                          {treatment.longevity}
                        </p>
                      )}
                      {treatment.results && (
                        <p className="text-sm">
                          <span className="font-semibold">Results:</span>{" "}
                          {treatment.results}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Concept with Image */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                Natural Results You Can Expect
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="relative h-96 rounded-3xl overflow-hidden mb-8"
              >
                <img
                  src={images.beforeAfter}
                  alt="Before and after concept"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-wine/30 to-rose/30 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <p className="text-wine font-[--font-georgia] text-xl">
                      Subtle • Natural • Refreshed
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown text-lg"
              >
                The goal is softer movement and smoother lines, not no
                expression.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Consultation Section with Image */}
        <section className="py-20 bg-wine text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={images.consultation}
              alt="Consultation background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                What to Expect at Your Consultation
              </motion.h2>

              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  "You explain what bothers you (photos help)",
                  "The doctor checks skin quality, facial structure, and movement lines",
                  "You get a plan that matches your budget, timeline, and comfort level",
                  "You understand downtime and aftercare before you commit",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-wine flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p>{step}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">MOH Certified</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">KLCC Location</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                Cost of Anti Aging Therapy in Malaysia
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center mb-8 text-brown"
              >
                Kuala Lumpur Price Reality
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4"
              >
                {[
                  { treatment: "HIFU", range: "RM1,500 - RM4,000+" },
                  { treatment: "Ultherapy", range: "RM4,000 - RM15,000" },
                  {
                    treatment: "Botox-type injections",
                    range: "RM500 - RM2,000",
                  },
                  {
                    treatment: "Dermal fillers",
                    range: "RM1,200 - RM3,500 per syringe",
                  },
                  {
                    treatment: "RF microneedling",
                    range: "RM2,800+ per session",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex justify-between items-center p-4 bg-cream rounded-xl"
                  >
                    <span className="font-semibold">{item.treatment}</span>
                    <span className="text-wine">{item.range}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-wine text-white p-6 rounded-2xl"
              >
                <h3 className="text-xl font-[--font-georgia] mb-3">
                  Budget Planning
                </h3>
                <p>
                  Ask the clinic to break it into: "today" (quick win), "next 3
                  months" (collagen plan), and "maintenance" (how often you'll
                  repeat).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ data={faqs} />

        {/* Final CTA with Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={images.clinic}
              alt="Nexus Clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-2xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-6"
              >
                Ready for Your Personalised Plan?
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
                Start with a consult that builds a plan around your face, not a
                package around a machine.
              </motion.p>

              <motion.div variants={scaleIn} className="space-y-4">
                <p className="text-2xl font-[--font-georgia]">
                  Nexus Clinic Kuala Lumpur
                </p>
                <p>
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
                <p className="text-3xl font-semibold">
                  016-702 5699 / 03-2163 5699
                </p>

                <button className="mt-8 bg-white text-wine px-12 py-4 rounded-full text-lg font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Book Your Consultation Today
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AntiAgingLanding;
