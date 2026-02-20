"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Sun,
  Droplets,
  CheckCircle2,
  AlertCircle,
  Heart,
  Target,
  Wind,
  Gem,
  ChevronRight,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const PicoLaserLanding = () => {
  const faqs = [
    {
      q: "Is Pico Laser painful?",
      a: "Most people feel quick snaps or mild tingling—very tolerable.",
    },
    {
      q: "Does your face peel after?",
      a: "Mild peeling can happen, especially when targeting pigmentation.",
    },
    {
      q: "Can I wash my face after?",
      a: "Yes, gently with lukewarm water and mild cleanser.",
    },
    {
      q: "Is it safe for darker skin?",
      a: "Yes, when performed correctly with proper settings.",
    },
    {
      q: "Can it remove melasma permanently?",
      a: "Melasma can improve but recurrence is common—we plan long-term.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-taupe/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
                >
                  Your{" "}
                  <span className="font-serif italic text-wine relative">
                    "clear skin"
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,5 Q20,0 40,5 T80,5 T100,5"
                        stroke="rgba(128, 0, 128, 0.5)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </span>
                  <br />
                  moment starts here
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-brown/70 leading-relaxed max-w-lg"
                >
                  Not in perfect lighting, but in real life. Gentle, precise,
                  and thoughtfully planned for Malaysian skin.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group px-8 py-4 bg-wine text-white rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg shadow-wine/20">
                    Start Your Clear Skin Journey
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border border-taupe text-brown rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300">
                    Book Assessment
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-6 pt-8"
                >
                  {[
                    { icon: Shield, text: "MOH Registered" },
                    { icon: Heart, text: "Doctor Led" },
                    { icon: Target, text: "Evidence Based" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-brown/60"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image/Visual */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80')] backdrop-blur-sm border border-white/50 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                  {/* Decorative Dots */}
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-light/50 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-light/70 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Reality Check */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-wine font-serif italic text-lg">
                Quick reality check
              </span>
              <h2 className="text-3xl md:text-4xl font-light mt-2 mb-6">
                Because your skin is not a filter
              </h2>
              <p className="text-lg text-brown/70 leading-relaxed">
                If you're dealing with pigment that keeps coming back, acne
                marks that refuse to fade, or a "why do I look tired" tone even
                after skincare, Pico Laser can be a smart next step.
                <span className="block mt-4 font-medium text-wine">
                  It's not magic. It's medical precision.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Pico Laser */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-serif italic text-lg">
                  In simple words
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  What is Pico Laser?
                </h2>
                <p className="text-lg text-brown/70 leading-relaxed">
                  Pico Laser delivers energy in ultra short bursts—faster than a
                  snap of your fingers. It breaks pigment into tiny particles
                  and stimulates skin remodeling while limiting excess heat
                  spread.
                </p>
                <div className="pt-6 space-y-4">
                  {[
                    "Ultrashort picosecond pulses for precision",
                    "Minimizes heat damage to surrounding skin",
                    "Safe for Malaysian skin tones when done correctly",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Sun, label: "Sunspots & Freckles" },
                  { icon: Droplets, label: "Post Acne Marks" },
                  { icon: Wind, label: "Enlarged Pores" },
                  { icon: Gem, label: "Uneven Tone" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-taupe/20 hover:border-wine/30 transition-all group"
                  >
                    <item.icon className="w-8 h-8 text-wine mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-brown">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Popular for Malaysian Skin */}
        <section className="py-24 bg-brown text-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-taupe font-serif italic text-lg">
                  Why it works
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  For Malaysian skin tones
                </h2>
                <p className="text-cream/80 leading-relaxed">
                  Many Malaysians sit in medium to deeper skin tone ranges.
                  Heat-based treatments can trigger pigmentation issues—Pico
                  Laser's ultra short pulses minimize this risk.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose/20 rounded-full">
                    <Shield className="w-4 h-4 text-rose" />
                    <span className="text-sm">
                      Recognized safe for darker skin tones
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <p className="text-xl font-serif italic mb-4">
                  "Picosecond lasers minimize unwanted heat damage while
                  maintaining efficacy"
                </p>
                <p className="text-taupe">
                  — Clinical Review on Treating PIH in Skin of Colour
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Nexus Approach */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-wine font-serif italic text-lg">
                The Nexus Clinic approach
              </span>
              <h2 className="text-3xl md:text-4xl font-light mt-2">
                How we keep it safe and worth it
              </h2>
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
                  icon: Target,
                  title: "1. Skin Assessment First",
                  desc: "We analyze your pigment type, inflammation level, and past reactions",
                },
                {
                  icon: AlertCircle,
                  title: "2. Patch Testing",
                  desc: "Essential for reactive skin or history of PIH",
                },
                {
                  icon: Sun,
                  title: "3. Skin + Sun Strategy",
                  desc: "Laser without aftercare is like gym without protein",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-taupe/10 group"
                >
                  <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="text-xl font-medium text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brown/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Areas we treat
              </h2>
              <p className="text-lg text-brown/70">
                Full face to targeted concerns
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                "Full Face",
                "Cheeks",
                "Upper Lip",
                "Neck & Chest",
                "Hands",
                "Back & Shoulders",
                "Tattoo Areas",
                "Custom Spots",
              ].map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-4 bg-white/70 backdrop-blur-sm rounded-lg text-center border border-taupe/20 hover:border-wine/30 transition-all"
                >
                  <p className="text-brown font-medium">{area}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Session Guide */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-serif italic text-lg">
                  Practical guide
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  How many sessions?
                </h2>
                <p className="text-lg text-brown/70">
                  Based on your concern and how your skin responds:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      concern: "Surface pigment & glow",
                      sessions: "3-5 sessions",
                    },
                    { concern: "Post acne marks", sessions: "3-6 sessions" },
                    {
                      concern: "Melasma",
                      sessions: "Results vary, maintenance common",
                    },
                    {
                      concern: "Tattoos",
                      sessions: "Depends on ink colour and depth",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-taupe/20 pb-3"
                    >
                      <span className="text-brown">{item.concern}</span>
                      <span className="text-wine font-medium">
                        {item.sessions}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-linear-to-br from-wine/10 to-rose/10 rounded-3xl p-8 border border-white/50">
                  <Clock className="w-12 h-12 text-wine mb-4" />
                  <h3 className="text-2xl font-light mb-4">Downtime?</h3>
                  <p className="text-lg text-brown/70 mb-6">
                    Most people don't need to hide at home. Mild redness for a
                    few hours—that's it.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brown/60">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>Back to normal same day</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-center mb-16"
            >
              Honest pros & cons
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-wine flex items-center gap-2">
                  <Sparkles className="w-6 h-6" /> Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Targets pigment with less heat spread",
                    "Quick sessions, minimal disruption",
                    "Improves tone and texture over time",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-rose flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" /> Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Not a one-session miracle",
                    "Melasma can recur",
                    "Wrong settings can trigger PIH",
                    "Deep scars may need combination treatments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-rose shrink-0 mt-1" />
                      <span className="text-brown/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-wine to-rose text-light">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Start with a proper diagnosis
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book an assessment at Nexus Clinic Kuala Lumpur. Choose the right
              settings and schedule for your skin.
            </p>
            <button className="px-12 py-4 bg-white text-wine rounded-full hover:bg-light transition-all duration-300 font-medium shadow-xl">
              Book Your Assessment
            </button>
            <p className="mt-6 text-sm opacity-75">
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PicoLaserLanding;
