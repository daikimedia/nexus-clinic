import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Sparkles,
  Zap,
  Thermometer,
  Scissors,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  MapPin,
  Activity,
  Eye,
  Leaf,
  Flower2,
  Gem,
  Target,
  ShieldCheck,
  ChevronDown,
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

const MoleRemovalLanding = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-cream via-white to-light">
        {/* Hero Section with Glassmorphism */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose rounded-full filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine rounded-full filter blur-[120px] opacity-20"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 md:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="flex items-center gap-2 text-wine">
                  <Gem className="w-5 h-5" />
                  <span className="text-sm tracking-[0.2em] uppercase font-light">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl leading-tight text-brown">
                  Mole Removal in Kuala Lumpur That{" "}
                  <span className="text-wine italic">Looks Natural</span> When
                  It Heals
                </h1>

                <p className="text-lg text-taupe font-light leading-relaxed max-w-lg">
                  If it is on your face, you do not just want it gone. You want
                  the area to heal neatly and blend in.
                </p>

                <p className="text-rose font-medium border-l-4 border-wine pl-4 py-2 bg-white/50 backdrop-blur-sm rounded-r-lg">
                  At Nexus Clinic KL, we choose the safest method for your mole
                  type, location, and skin
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Book Your Assessment
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Trust Strip */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-light backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/60"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        KLCC area, Wisma UOA II
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        Multiple removal methods
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        Doctor-led assessment first
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Visual Elements */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-full animate-pulse"></div>
                  <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-cream pb-4">
                        <Flower2 className="w-8 h-8 text-wine" />
                        <div>
                          <h3 className="font-georgia text-brown">
                            Natural Healing
                          </h3>
                          <p className="text-sm text-taupe">
                            Blends seamlessly with your skin
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Laser",
                          "Electrocautery",
                          "Radiofrequency",
                          "Cryotherapy",
                        ].map((method, i) => (
                          <div
                            key={i}
                            className="bg-cream rounded-xl p-3 text-center"
                          >
                            <span className="text-sm text-brown">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-wine" />
          </motion.div>
        </section>

        {/* Peace of Mind Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cream rounded-full filter blur-[80px]"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 md:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <Leaf className="w-12 h-12 text-wine mx-auto mb-6" />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                Mole removal in Malaysia is not only cosmetic.
                <br />
                <span className="text-wine italic">
                  Sometimes it is peace of mind.
                </span>
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                Most people do not book mole removal because they love skincare.
                They book it because the mole is starting to bother them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: AlertCircle, text: "It catches on a mask" },
                { icon: Eye, text: "It sits right where makeup cakes" },
                { icon: Heart, text: "Someone pointed it out in a photo" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-light rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <item.icon className="w-8 h-8 text-rose mx-auto mb-4" />
                  <p className="text-brown">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Understanding Moles Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                  What is a mole,{" "}
                  <span className="text-wine italic">in simple words</span>
                </h2>
                <p className="text-taupe">
                  A mole is a common skin growth. Many are harmless.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Flat or raised",
                    "Light to dark brown",
                    "Smooth or rough",
                    "Small or larger",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream">
                  <h3 className="font-georgia text-brown mb-4">
                    Mole vs Skin Tag vs Wart
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-wine mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">Mole:</span>{" "}
                        pigmented, flat or raised
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-rose mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">
                          Skin tag:
                        </span>{" "}
                        soft, skin-colored
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-taupe mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">Wart:</span>{" "}
                        rough texture, viral
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine/5 rounded-3xl p-8">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    When to consider removal
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Cosmetic reasons - You don't like how it looks",
                      "Comfort - Irritated by shaving, masks, collars",
                      "Changes - Size, color, or texture differences",
                      "Suspicious - Needs checking",
                    ].map((reason, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-wine">
                          {i + 1}
                        </div>
                        <p className="text-brown">{reason}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABCDE Rule Section */}
        <section className="py-20 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-[80px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-white mb-4 text-center"
              >
                Red Flags You Should Not Ignore
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream text-center mb-12"
              >
                The ABCDE rule for spotting suspicious moles
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { letter: "A", text: "Asymmetry" },
                  { letter: "B", text: "Border", desc: "irregular" },
                  { letter: "C", text: "Color", desc: "variation" },
                  { letter: "D", text: "Diameter", desc: "> pencil eraser" },
                  { letter: "E", text: "Evolving", desc: "changes" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-wine text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                      {item.letter}
                    </div>
                    <p className="text-white font-medium">{item.text}</p>
                    {item.desc && (
                      <p className="text-cream text-sm">{item.desc}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <AlertCircle className="w-5 h-5 text-white" />
                  <span className="text-white">
                    Please do not remove a mole at home - it's risky
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-brown mb-4"
              >
                How Mole Removal Works at{" "}
                <span className="text-wine">Nexus Clinic KL</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">
                A calm, step-by-step process for optimal results
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  icon: Eye,
                  desc: "Shape, color, texture, location assessment",
                },
                {
                  step: 2,
                  title: "Method Selection",
                  icon: Target,
                  desc: "Safest method for your mole type",
                },
                {
                  step: 3,
                  title: "Numbing & Removal",
                  icon: Shield,
                  desc: "Comfortable procedure with local anaesthetic",
                },
                {
                  step: 4,
                  title: "Aftercare",
                  icon: Flower2,
                  desc: "Guidance for clean healing",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="bg-light rounded-2xl p-6 text-center h-full shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-wine text-white flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-rose text-white flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-georgia text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-wine" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                  Multiple Methods, <span className="text-wine">One Goal</span>
                </h2>
                <p className="text-taupe">
                  The method should match the mole, not the marketing
                </p>

                <div className="space-y-4">
                  {[
                    {
                      method: "Laser Mole Removal",
                      icon: Sparkles,
                      desc: "Quick, precise, and controlled for cosmetic moles",
                    },
                    {
                      method: "Electrocautery",
                      icon: Zap,
                      desc: "Uses heat for certain benign growths",
                    },
                    {
                      method: "Radiofrequency",
                      icon: Activity,
                      desc: "High-frequency energy with controlled depth",
                    },
                    {
                      method: "Cryotherapy",
                      icon: Thermometer,
                      desc: "Freezing for certain lesions",
                    },
                    {
                      method: "Surgical Excision",
                      icon: Scissors,
                      desc: "When needed for suspicious or deeper moles",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-wine">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown">
                          {item.method}
                        </h4>
                        <p className="text-sm text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine/5 rounded-3xl p-8">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    Healing Timeline
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        day: "1-3",
                        desc: "Mild redness, tenderness, small wound",
                      },
                      { day: "4-10", desc: "Scab forms and dries" },
                      { day: "2-4", desc: "Skin closes and calms", week: true },
                      { day: "Months", desc: "Scar line fades and blends" },
                    ].map((phase, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-md">
                          <span className="text-xs text-taupe">Day</span>
                          <span className="font-bold text-wine">
                            {phase.day}
                          </span>
                        </div>
                        <p className="text-brown flex-1">{phase.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-white rounded-xl p-4">
                    <p className="text-sm text-taupe">
                      <span className="font-medium text-brown">
                        Will it leave a scar?
                      </span>{" "}
                      Sometimes yes. Sometimes barely. For many people, the scar
                      is cosmetically better than the mole.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">Pros</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Cleaner look where makeup sits better",
                    "Less irritation from shaving, masks, collars",
                    "Less self-consciousness in photos",
                    "Peace of mind once properly assessed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">Cons</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Possible scarring, depending on depth and method",
                    "Healing period where spot looks 'worse' first",
                    "Some moles may require more than one session",
                    "Suspicious moles need different approach",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Is mole removal painful?",
                    a: "Most mole removal is done with numbing medication, so the procedure itself should not be painful. You may feel mild stinging or burning for a few days afterward.",
                  },
                  {
                    q: "How long does it take to heal?",
                    a: "Recovery is often minimal, with mild redness or scabbing for a few days to a week. Laser healing is commonly quoted around 7 to 14 days.",
                  },
                  {
                    q: "Will mole removal leave a scar?",
                    a: "Scar risk depends on mole depth and removal method. Some people find the scar looks better than the mole once it fades.",
                  },
                  {
                    q: "Can a mole grow back?",
                    a: "Moles do not typically grow back unless they were incompletely removed.",
                  },
                  {
                    q: "How much does it cost in Malaysia?",
                    a: "Cost varies widely based on size, depth, location, and method. The most accurate way is a consultation and quotation.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-medium text-brown">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-taupe">{faq.a}</div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wine relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/20 rounded-full filter blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-white mb-6"
              >
                If a mole is making you feel self-conscious,
                <br />
                <span className="italic">
                  you don't need to keep living with that feeling.
                </span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-cream mb-8 text-lg">
                And if a mole is changing, you don't need to keep guessing.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Mole Assessment
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 text-white/80 text-sm"
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                LG 10, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MoleRemovalLanding;
