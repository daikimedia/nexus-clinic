// HydraFacialLandingPage.jsx
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Shield,
  Clock,
  MapPin,
  ChevronRight,
  Sun,
  Wind,
  Thermometer,
  Heart,
  Star,
  CheckCircle2,
  AlertCircle,
  User,
  Airplay,
  Leaf,
  Sparkle,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const HydraFacialLandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden bg-light">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-wine font-inter text-sm tracking-wider">
                    <Sparkles size={18} />
                    NEXUS CLINIC KUALA LUMPUR
                  </span>

                  <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                    Your clean-skin reset in Kuala Lumpur,
                    <span className="text-wine">
                      {" "}
                      without the "facial drama"
                    </span>
                  </h1>

                  <p className="text-xl text-taupe font-inter leading-relaxed">
                    Deep cleanse. Gentle suction. Fresh hydration. You walk out
                    looking rested, not red. Made for Malaysia's heat, humidity,
                    and city-life buildup.
                  </p>
                </motion.div>

                {/* Trust Strip */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-cream rounded-2xl p-6 border border-rose/20 backdrop-blur-sm"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Shield className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        MOH-registered & doctor-led
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <MapPin className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        Wisma UOA II, KLCC
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Clock className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        Zero downtime • Monthly glow
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex wrap gap-4">
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-inter text-sm hover:bg-brown transition-all duration-300 flex items-center gap-2">
                    Book Your Cleanse
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="border border-taupe text-brown px-8 py-4 rounded-full font-inter text-sm hover:bg-cream transition-all">
                    RM350 • View Details
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Image/Visual */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80"
                    alt="HydraFacial treatment"
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-wine" size={20} />
                      <span className="text-sm font-inter text-brown">
                        KL Weather-Adapted
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Droplets className="text-wine" size={20} />
                      <span className="text-sm font-inter text-brown">
                        Deep Hydration
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* If Your Skin Could Talk Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose/20 rounded-full blur-2xl" />
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6 relative">
                  If your skin could talk,
                  <br />
                  <span className="text-wine">it would ask for this</span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Sun,
                      text: "KL heat and humidity clogging your pores",
                    },
                    { icon: Wind, text: "Air-con drying out your skin" },
                    {
                      icon: Droplets,
                      text: "Makeup sitting on congested texture",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                        <item.icon className="text-wine" size={24} />
                      </div>
                      <p className="text-taupe font-inter text-lg">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-brown font-inter text-lg leading-relaxed"
                >
                  A hydra facial isn't random pampering. It's a practical reset
                  that cleans, clears, and hydrates in one go. Most notice the
                  glow fast. The better part? How smooth your skin feels
                  tomorrow.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center">
                      <Heart className="text-wine" size={32} />
                    </div>
                    <div>
                      <h3 className="font-georgia text-2xl text-brown">
                        Doctor-first approach
                      </h3>
                      <p className="text-taupe">Assessment then plan</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Assess your skin sensitivity",
                      "Match your breakout pattern",
                      "Fit your schedule",
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="text-wine" size={20} />
                        <span className="text-brown font-inter">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Is HydraFacial Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter text-sm tracking-wider mb-4 block"
              >
                THE TREATMENT
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                What is a hydra facial?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-taupe max-w-3xl mx-auto"
              >
                A non-invasive, multi-step facial combining cleansing,
                exfoliation, gentle suction, and hydration with skin serums.
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Cleanse",
                  desc: "Gentle removal of impurities",
                  color: "wine",
                },
                {
                  step: "02",
                  title: "Exfoliate",
                  desc: "Reveal fresh skin layers",
                  color: "rose",
                },
                {
                  step: "03",
                  title: "Extract",
                  desc: "Painless suction cleaning",
                  color: "taupe",
                },
                {
                  step: "04",
                  title: "Hydrate",
                  desc: "Infuse nourishing serums",
                  color: "brown",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative bg-light rounded-2xl p-8 border border-rose/20 hover:border-wine transition-all"
                >
                  <div
                    className={` text-${item.color} absolute top-4 right-4 text-6xl font-georgia opacity-10 group-hover:opacity-20 transition-opacity`}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-2xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-cream rounded-3xl p-8 text-center"
            >
              <p className="text-brown font-inter text-lg italic">
                "Like a regular facial, but your pores actually feel something
                real happened."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why It's Popular in KL Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  Why it's popular in
                  <br />
                  <span className="text-wine">Kuala Lumpur</span>
                </h2>

                <div className="space-y-6">
                  {[
                    "Fits a busy week - no downtime needed",
                    "Perfect when humidity congests your face",
                    "Pre-event glow without looking treated",
                    "Safe for Malaysian skin tones when done right",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine flex items-center justify-center text-white text-sm">
                        {index + 1}
                      </div>
                      <p className="text-brown font-inter text-lg">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    What it helps with
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Oily skin & visible blackheads",
                      "Rough texture & dullness",
                      "Dehydrated skin that still looks shiny",
                      "Enlarged-looking pores",
                      "Uneven tone from daily sun",
                      "Tired face before events",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-all"
                      >
                        <Star className="text-wine" size={16} />
                        <span className="text-brown font-inter">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Who it's for
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <User className="text-wine" size={24} />,
                  title: "Students & Professionals",
                  desc: "Busy schedules need efficient glow",
                },
                {
                  icon: <Heart className="text-wine" size={24} />,
                  title: "Daily Makeup Wearers",
                  desc: "Deep clean under the layers",
                },
                {
                  icon: <User className="text-wine" size={24} />,
                  title: "Men",
                  desc: "Clean pores, simple routine",
                },
                {
                  icon: <Airplay className="text-wine" size={24} />,
                  title: "Frequent Travelers",
                  desc: "Reset from airport skin",
                },
                {
                  icon: <Leaf className="text-wine" size={24} />,
                  title: "KL Locals",
                  desc: "Combat humidity buildup",
                },
                {
                  icon: <Sparkle className="text-wine" size={24} />,
                  title: "Event Prep",
                  desc: "Glow without redness",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-light rounded-2xl p-8 border border-rose/10 hover:border-wine/30 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Pause Section */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-wine/5 rounded-3xl p-8 border border-wine/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-wine shrink-0" size={24} />
                <div>
                  <h4 className="font-georgia text-xl text-brown mb-3">
                    Pause and ask first if:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Active skin infection or cold sore",
                      "Sunburnt skin",
                      "Recent strong peels or lasers",
                      "Started strong prescription products",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-taupe font-inter"
                      >
                        <span className="w-1 h-1 rounded-full bg-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Timeline Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  What results can you expect?
                </h2>

                <div className="space-y-6">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Sparkles className="text-wine" size={20} />
                      </div>
                      <h3 className="font-georgia text-xl text-brown">
                        Immediate glow
                      </h3>
                    </div>
                    <p className="text-taupe font-inter ml-12">
                      Cleaner pores, softer texture, better hydration
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Clock className="text-wine" size={20} />
                      </div>
                      <h3 className="font-georgia text-xl text-brown">
                        How long it lasts
                      </h3>
                    </div>
                    <p className="text-taupe font-inter ml-12">
                      Varies with skincare and sun exposure. Monthly maintenance
                      recommended.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-6">Monthly rhythm</h3>
                  <div className="space-y-4">
                    {[
                      "Month 1: Deep clean & reset",
                      "Month 2: Maintain glow",
                      "Month 3: Build results",
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <span className="font-inter">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Pros & Cons
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe text-lg">
                The honest version, because you deserve to know
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <motion.div variants={fadeInLeft} className="space-y-4">
                <h3 className="font-georgia text-2xl text-wine mb-6">Pros</h3>
                {[
                  "No real downtime for most people",
                  "Good first treatment if you're nervous",
                  "Customizable based on your concerns",
                  "Works perfectly in Malaysia's climate",
                  "Instant results you can see",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <CheckCircle2 className="text-wine shrink-0" size={20} />
                    <span className="text-brown font-inter">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Cons */}
              <motion.div variants={fadeInRight} className="space-y-4">
                <h3 className="font-georgia text-2xl text-brown mb-6">Cons</h3>
                {[
                  "Results aren't permanent - maintenance needed",
                  "Deep acne scars need other options too",
                  "Some may get temporary redness",
                  "Not a one-time fix",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <AlertCircle className="text-taupe shrink-0" size={20} />
                    <span className="text-brown font-inter">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Side Effects Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Side effects & safety
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe text-lg">
                What's normal, what's not
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="font-georgia text-xl text-wine mb-4">
                  Common & short-lived
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mild redness",
                    "Slight tingling",
                    "Temporary sensitivity",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="font-georgia text-xl text-brown mb-4">
                  Less common
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mild puffiness",
                    "Temporary breakouts",
                    "Reactive skin response",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  Hydra facial cost in
                  <br />
                  <span className="text-wine">Malaysia & KL</span>
                </h2>

                <div className="space-y-6">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream rounded-2xl p-8"
                  >
                    <div className="text-3xl font-georgia text-wine mb-2">
                      RM350
                    </div>
                    <p className="text-taupe font-inter">
                      Hydrafacial Deep Cleanse at Nexus Clinic KL
                    </p>
                    <p className="text-sm text-brown mt-2">
                      Zero downtime • Monthly rhythm
                    </p>
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="text-taupe font-inter"
                  >
                    Market range: RM600-800 per session at other KL clinics.
                    Compare what's included - some "cheap" promos exclude
                    boosters or use different machines.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-brown rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-4">
                    What affects price
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Clinic & device brand",
                      "Boosters & add-ons",
                      "Package bundles",
                      "Experience level",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm opacity-80">
                    Consultation clarifies what you're actually booking
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Hydra facial vs other treatments
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "vs Classic Facial",
                  points: [
                    "Massage vs device-based",
                    "Surface vs deep cleansing",
                    "Relaxation vs results",
                  ],
                },
                {
                  title: "vs Microdermabrasion",
                  points: [
                    "Drier vs hydrated process",
                    "More abrasive vs gentle",
                    "No infusion vs serum delivery",
                  ],
                },
                {
                  title: "vs Chemical Peel",
                  points: [
                    "Peeling vs no downtime",
                    "Stronger vs gentler",
                    "Event prep with risk vs safe glow",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="font-georgia text-2xl text-wine mb-6">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-brown">
                        <span className="text-wine">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation & Aftercare */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8"
              >
                <h3 className="font-georgia text-3xl text-brown mb-6">
                  How to prepare
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pause strong actives if skin is sensitive",
                    "Avoid heavy sun exposure before",
                    "Tell doctor about recent treatments",
                    "Bring photos of your products",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-wine shrink-0" size={20} />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine rounded-3xl p-8 text-white"
              >
                <h3 className="font-georgia text-3xl mb-6">
                  Aftercare (24-48h)
                </h3>
                <ul className="space-y-4">
                  {[
                    "Keep it gentle",
                    "Avoid aggressive exfoliation",
                    "Use sunscreen daily",
                    "Gentle cleanser & moisturizer",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-white/80 shrink-0"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm opacity-80">
                  SPF 50 essential in Malaysia's climate
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                People Also Ask
              </motion.h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What is a HydraFacial treatment?",
                  a: "A non-invasive facial combining cleansing, exfoliation, extraction, and hydration in one session using a device and serums.",
                },
                {
                  q: "Is HydraFacial suitable for all skin types?",
                  a: "Yes, including sensitive skin - it can be adjusted to your needs. Always check first if you have active issues.",
                },
                {
                  q: "Is HydraFacial painful?",
                  a: "Most describe it as comfortable, with gentle suction rather than squeezing.",
                },
                {
                  q: "How long does a session take?",
                  a: "Around 1 to 1.5 hours, depending on your plan and add-ons.",
                },
                {
                  q: "Are there any side effects?",
                  a: "Usually mild redness or tingling that settles quickly. Rarely, temporary sensitivity or breakouts.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "You'll see improvement after one, but monthly maintenance is recommended for ongoing results.",
                },
                {
                  q: "Can HydraFacial help with oily skin and blackheads?",
                  a: "Yes - suction helps lift oil and debris from pores without squeezing.",
                },
                {
                  q: "Is there downtime after HydraFacial?",
                  a: "No downtime - you can return to normal activities right away.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                      <span className="font-georgia text-lg text-brown">
                        {faq.q}
                      </span>
                      <ChevronRight
                        className="text-wine group-open:rotate-90 transition-transform"
                        size={20}
                      />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-taupe font-inter">{faq.a}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
              Ready for your
              <br />
              <span className="text-wine">clean-skin reset?</span>
            </h2>

            <p className="text-xl text-taupe font-inter mb-8">
              If your skin feels clogged, dull, or just tired from KL heat,
              <br />a Hydrafacial Deep Cleanse is a clean place to start.
            </p>

            <button className="group bg-wine text-white px-12 py-5 rounded-full font-inter text-lg hover:bg-brown transition-all duration-300 inline-flex items-center gap-3">
              Book Your Assessment
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <p className="mt-6 text-sm text-taupe">
              Nexus Clinic Kuala Lumpur • LG 10, Wisma UOA II, Jalan Pinang
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HydraFacialLandingPage;
