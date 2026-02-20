import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  Droplets,
  Award,
  Sun,
  Moon,
  ChevronRight,
  CheckCircle2,
  User,
  AlertCircle,
  Zap,
  Feather,
  Gem,
  Flower2,
  Sparkle,
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

const DermalFillersLanding = () => {
  const faqs = [
    {
      q: "Are dermal fillers safe?",
      a: "When performed by qualified doctors using approved products, yes.",
    },
    {
      q: "How long do fillers last?",
      a: "Typically 6 to 18 months, depending on type and area.",
    },
    {
      q: "Can fillers be reversed?",
      a: "Hyaluronic acid fillers can be dissolved if needed.",
    },
    {
      q: "Is there downtime?",
      a: "Most return to activities immediately, mild effects fade in days.",
    },
    {
      q: "Do fillers hurt?",
      a: "Mild discomfort – numbing methods ensure comfort.",
    },
    {
      q: "What age to start?",
      a: "No perfect age – from late 20s for subtle balance to later for restoration.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen font-inter">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-cream opacity-50" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-linear(circle at 30% 40%, rgba(172, 153, 144, 0.05) 0%, transparent 30%)",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full border border-taupe/20">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown font-medium">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown leading-tight">
                  Dermal Fillers That Look Like{" "}
                  <span className="text-wine relative">
                    You
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-rose/30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                  , Just Rested
                </h1>

                <p className="text-lg text-taupe leading-relaxed max-w-lg">
                  A little lift. A softer shadow under the eyes. Better balance
                  in photos. Dermal fillers can do that, without changing your
                  face.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Shield, text: "Doctor-performed" },
                    { icon: Award, text: "Premium brands" },
                    { icon: Heart, text: "Natural results" },
                    { icon: Clock, text: "Minimal downtime" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-rose/10"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden px-8 py-4 bg-wine text-light rounded-full font-medium inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Book Your Consultation</span>
                  <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-rose"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                variants={fadeInRight}
                className="relative h-125 hidden lg:block"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80')] rounded-3xl" />
                <div className="absolute top-20 right-20 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />

                {/* Floating Elements */}
                {[
                  { Icon: Feather, delay: 0, bottom: "33%", left: "5%" },
                  { Icon: Flower2, delay: 0.2, bottom: "5%", left: "5%" },
                  { Icon: Gem, delay: 0.4, top: "70%", left: "5%" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: item.top,
                      left: item.left,
                      bottom: item.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                  >
                    <div className="p-4 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/20">
                      <item.Icon className="w-6 h-6 text-wine" />
                    </div>
                  </motion.div>
                ))}

                {/* Main Decorative Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-rose/20 border-dashed" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-16 bg-cream/50">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1000+", label: "Happy Clients", icon: User },
                { value: "98%", label: "Natural Results", icon: Sparkle },
                { value: "15+", label: "Years Experience", icon: Award },
                { value: "24/7", label: "Client Support", icon: Heart },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm mb-4">
                    <stat.icon className="w-6 h-6 text-wine" />
                  </div>
                  <div className="font-georgia text-3xl text-brown mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-taupe">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What Are Dermal Fillers */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">
                  What are <span className="text-wine">dermal fillers</span>,
                  <br />
                  in simple terms?
                </h2>
                <p className="text-taupe leading-relaxed">
                  Dermal fillers are gel-like injections placed under the skin
                  to restore volume, soften deeper lines, and shape features
                  naturally.
                </p>

                <div className="space-y-4">
                  {[
                    "Made with hyaluronic acid (HA) – your body already has it",
                    "Attracts water for a hydrated, plump look",
                    "Can support structure or stimulate collagen",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square rounded-3xl bg-linear-to-br from-rose/10 to-wine/10 p-8">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl" />
                    <div className="relative p-6 space-y-4">
                      <h3 className="font-georgia text-xl text-brown">
                        Real-life goals
                      </h3>
                      {[
                        "I look tired even when I sleep",
                        "My cheeks look flatter in photos",
                        "I want a sharper jawline",
                      ].map((quote, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-white rounded-xl shadow-sm border border-taupe/10"
                        >
                          <p className="text-brown italic">"{quote}"</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 bg-linear-to-b from-cream/30 to-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-4">
                Popular <span className="text-wine">dermal filler areas</span>
              </h2>
              <p className="text-taupe">in Kuala Lumpur</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  area: "Lips",
                  desc: "Shape, hydration, balance",
                  icon: Droplets,
                },
                {
                  area: "Cheeks",
                  desc: "Lift and mid-face support",
                  icon: Sun,
                },
                {
                  area: "Under-eye",
                  desc: "Tear trough treatment",
                  icon: Moon,
                },
                {
                  area: "Jawline",
                  desc: "Definition and structure",
                  icon: Zap,
                },
                { area: "Chin", desc: "Profile and harmony", icon: Gem },
                {
                  area: "Smile lines",
                  desc: "Nasolabial folds",
                  icon: Feather,
                },
                {
                  area: "Marionette",
                  desc: "Lines around mouth",
                  icon: Flower2,
                },
                { area: "Temples", desc: "Volume restoration", icon: Sparkles },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-taupe/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-wine/5 to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 bg-cream rounded-xl mb-4 group-hover:bg-wine/10 transition-colors">
                      <item.icon className="w-5 h-5 text-wine" />
                    </div>
                    <h3 className="font-georgia text-lg text-brown mb-1">
                      {item.area}
                    </h3>
                    <p className="text-xs text-taupe">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* The Overfilled Fear */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="relative bg-linear-to-r from-wine to-rose rounded-3xl overflow-hidden p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  variants={fadeInLeft}
                  className="text-light space-y-6"
                >
                  <h2 className="font-georgia text-4xl">
                    The <span className="italic">"overfilled"</span> fear
                  </h2>
                  <p className="text-light/90 leading-relaxed">
                    How Nexus Clinic KL avoids it and ensures natural results
                  </p>

                  <div className="space-y-4">
                    {[
                      "Treating the right point – support first, not just filling lines",
                      "Using conservative amounts",
                      "Respecting facial proportions",
                      "Building results in stages",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-light shrink-0" />
                        <span className="text-light/90">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative h-64">
                  <div className="absolute inset-0 bg-light/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <AlertCircle className="w-8 h-8 text-light" />
                      <span className="text-light font-medium">
                        What we hear often:
                      </span>
                    </div>
                    <p className="text-light/90 text-lg italic">
                      "I don't want to look like I've had work done. I just want
                      to look like me, but refreshed."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Appointment Process */}
        <section className="py-20 bg-cream/30">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-4">
                Your <span className="text-wine">dermal filler</span>
                <br />
                appointment at Nexus Clinic KL
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Facial Assessment",
                  desc: "We analyze your structure, expressions, and goals",
                },
                {
                  step: "02",
                  title: "Comfort & Numbing",
                  desc: "Mild discomfort, not pain – we ensure your comfort",
                },
                {
                  step: "03",
                  title: "Precise Injection",
                  desc: "Treatment done within the hour",
                },
                {
                  step: "04",
                  title: "Review & Aftercare",
                  desc: "Clear guidance on what to expect",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative p-8 bg-white rounded-2xl shadow-sm border border-taupe/10"
                >
                  <div className="text-6xl font-georgia text-wine/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Cost Section */}
        <section className="py-20 bg-cream/50">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">
                  Dermal fillers <span className="text-wine">cost</span>
                  <br />
                  in Kuala Lumpur
                </h2>

                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-taupe mb-4">General range per syringe:</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-georgia text-wine">
                      RM1,500
                    </span>
                    <span className="text-brown">to</span>
                    <span className="text-3xl font-georgia text-wine">
                      RM5,000
                    </span>
                  </div>
                  <p className="text-sm text-taupe">
                    *Depends on area, brand, and complexity
                  </p>

                  <div className="mt-6 pt-6 border-t border-taupe/20">
                    <p className="text-brown font-medium mb-3">
                      Juvederm range:
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-georgia text-rose">
                        RM1,800
                      </span>
                      <span className="text-brown">to</span>
                      <span className="text-2xl font-georgia text-rose">
                        RM3,000
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-taupe italic">
                  Best pricing after facial assessment – pay for a plan, not a
                  package
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: "Doctor-performed", icon: User },
                  { label: "Premium brands", icon: Award },
                  { label: "Natural results", icon: Heart },
                  { label: "Safety-first", icon: Shield },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-sm text-center"
                  >
                    <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                    <span className="text-xs text-brown">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex p-3 bg-wine/10 rounded-full mb-6"
            >
              <Heart className="w-6 h-6 text-wine" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl text-brown mb-6"
            >
              Ready to explore <span className="text-wine">dermal fillers</span>
              <br />
              in Kuala Lumpur?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-lg mb-8 max-w-2xl mx-auto"
            >
              If you want a refreshed look that still feels like you, book a
              consultation at Nexus Clinic Kuala Lumpur.
            </motion.p>

            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-wine text-light rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/20"
            >
              Book Your Consultation
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DermalFillersLanding;
