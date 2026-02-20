import { motion } from "framer-motion";
import {
  Award,
  Syringe,
  Clock,
  Sparkles,
  TrendingUp,
  Heart,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BadgeCheck,
  ChevronRight,
  Droplets,
  Brain,
  Zap,
  Feather,
  Target,
  Sun,
  Moon,
  Wind,
  Gem,
  Layers,
  ScanFace,
  Sparkle,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const JawlineFillerLanding = () => {
  const faqs = [
    {
      q: "How long does jawline filler last?",
      a: "Most people see results for 6 to 12 months, and sometimes longer depending on the product and your metabolism.",
    },
    {
      q: "Can jawline filler look natural?",
      a: "Yes, if the plan matches your face and the volume is appropriate. Natural results are about balance, not maximum sharpness.",
    },
    {
      q: "Is jawline filler safe?",
      a: "When done by trained medical professionals using authentic products, it is generally safe. Like any medical procedure, risks exist.",
    },
    {
      q: "Can jawline filler be dissolved?",
      a: "If it is hyaluronic acid filler, it can often be dissolved using hyaluronidase.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-br from-cream via-light to-cream">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-rose blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-taupe/10 px-4 py-2 rounded-full">
                  <Sparkle className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                  A sharper jawline,
                  <span className="block text-wine">without surgery</span>
                </h1>

                <p className="text-lg text-brown/80 max-w-lg">
                  Subtle definition or a stronger angle, we tailor it to your
                  face, not a trend. Doctor-led planning, authentic products,
                  and a result that still looks like you.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {[
                    { icon: BadgeCheck, text: "Authentic Juvederm®" },
                    { icon: Syringe, text: "Per-syringe pricing" },
                    { icon: Award, text: "Since 2001" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-colors shadow-lg shadow-wine/20"
                  >
                    Book Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border border-taupe text-brown px-8 py-4 rounded-full font-medium hover:bg-taupe/10 transition-colors"
                  >
                    View Gallery
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column - Visual Element */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Profile Silhouette */}
                  <div className="absolute inset-0 bg-linear-to-br from-wine/10 to-rose/10 rounded-full blur-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-72 h-96 bg-taupe/20 rounded-full backdrop-blur-sm border border-white/30 relative overflow-hidden">
                      {/* Simplified profile outline */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-48 border-2 border-wine/30 rounded-full"></div>
                      </div>
                      {/* Jawline highlight */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-1 bg-linear-to-r from-transparent via-wine to-transparent"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {[
                    { icon: Gem, text: "Structure", top: "10%", right: "0%" },
                    {
                      icon: Feather,
                      text: "Natural",
                      bottom: "20%",
                      left: "0%",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: idx * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-xl"
                      style={{
                        top: item.top,
                        right: item.right,
                        bottom: item.bottom,
                        left: item.left,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-wine" />
                        <span className="text-sm text-brown">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Jawline Definition Matters */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-6">
                  Why jawline definition matters
                  <span className="block text-wine text-2xl mt-2">
                    more than you think
                  </span>
                </h2>
                <p className="text-lg text-brown/70 max-w-2xl mx-auto">
                  A well-defined jawline does not just "look sharp." It balances
                  the entire lower face, creating harmony and confidence.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: ScanFace,
                    title: "Balances",
                    desc: "the entire lower face",
                  },
                  {
                    icon: TrendingUp,
                    title: "Lifts",
                    desc: "cheeks naturally",
                  },
                  { icon: Sparkles, title: "Softens", desc: "early jowls" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-taupe/20 hover:border-wine/30 transition-colors"
                  >
                    <div className="w-16 h-16 bg-linear-to-br from-wine/10 to-rose/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brown/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-8 bg-taupe/10 rounded-3xl border border-taupe/20"
              >
                <p className="text-brown italic text-center">
                  "In Kuala Lumpur, we see one common pattern. People do not
                  want a dramatic change. They want a cleaner line from ear to
                  chin, a more confident side profile, and a face that looks
                  less tired."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Jawline Filler */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  What is
                  <span className="block text-wine">jawline filler?</span>
                </h2>

                <p className="text-brown/80 leading-relaxed">
                  Jawline filler is a non-surgical injectable treatment that
                  adds structure along the jaw, usually using hyaluronic acid
                  (HA) dermal fillers. HA is widely used in dermal fillers and
                  is gradually absorbed by the body over time.
                </p>

                <p className="text-brown/80 leading-relaxed">
                  Think of it like subtle sculpting. Small amounts are placed
                  along specific points to create a smoother jawline, support
                  the jaw angle, and reduce the look of sagging around the lower
                  face.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-taupe/20">
                  <h4 className="font-semibold text-brown mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-wine" />
                    Nexus Clinic Approach
                  </h4>
                  <p className="text-brown/70">
                    The focus is facial harmony. We plan your jawline with your
                    chin, cheeks, and natural face shape in mind, not a one-size
                    template.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Droplets,
                      label: "Hyaluronic Acid",
                      color: "from-blue-400/20 to-blue-600/20",
                    },
                    {
                      icon: Layers,
                      label: "Structural Support",
                      color: "from-purple-400/20 to-purple-600/20",
                    },
                    {
                      icon: Heart,
                      label: "Natural Integration",
                      color: "from-pink-400/20 to-pink-600/20",
                    },
                    {
                      icon: Sparkles,
                      label: "Subtle Results",
                      color: "from-yellow-400/20 to-yellow-600/20",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-linear-to-br ${item.color} backdrop-blur-sm rounded-2xl p-6 border border-white/30`}
                    >
                      <item.icon className="w-8 h-8 text-wine mb-3" />
                      <p className="text-sm font-medium text-brown">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-wine/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose/5 rounded-full blur-2xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Can Help vs Cannot Fix */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                What jawline filler can help with
                <span className="block text-wine text-2xl mt-2">
                  (and what it cannot)
                </span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Can Help */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white rounded-3xl p-8 border border-green-200/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      Can help with
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Soft or weak jawline definition",
                      "Mild jowls and 'pre-jowl' hollowing",
                      "Uneven jawline on one side",
                      "Less defined jaw angle",
                      "Enhancing structured lower face",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeInLeft}
                        custom={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-brown/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Cannot Fix */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-white rounded-3xl p-8 border border-red-200/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      Cannot fully fix
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Significant loose skin (may need HIFU/threads)",
                      "Heavy lower face from muscle bulk",
                      "Double chin caused mainly by fat",
                      "Severe skin laxity",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeInRight}
                        custom={idx}
                        className="flex items-start gap-3"
                      >
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-brown/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 p-6 bg-taupe/10 rounded-2xl text-brown"
              >
                The best results often come from choosing the correct tool, or
                combining treatments in a staged plan.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  Areas we treat for
                  <span className="text-wine"> jawline contouring</span>
                </h2>
                <p className="text-brown/70">
                  Jawline contouring is not one injection point. It is a "map."
                </p>
              </motion.div>

              <div className="relative">
                {/* Profile silhouette with points */}
                <div className="max-w-xs mx-auto mb-12">
                  <div className="relative aspect-3/4 bg-taupe/10 rounded-3xl overflow-hidden border border-taupe/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-40 border-2 border-wine/30 rounded-full"></div>
                    </div>

                    {/* Treatment points */}
                    {[
                      { top: "45%", left: "45%", label: "Jaw angle" },
                      { top: "60%", left: "40%", label: "Jaw body" },
                      { top: "75%", left: "35%", label: "Pre-jowl" },
                      { top: "85%", left: "45%", label: "Chin" },
                    ].map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        className="absolute w-4 h-4 bg-wine rounded-full cursor-pointer group"
                        style={{ top: point.top, left: point.left }}
                      >
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          {point.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Jaw angle: stronger corner",
                    "Jaw body: smooth line",
                    "Pre-jowl: reduce shadow",
                    "Chin: balanced projection",
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center border border-taupe/20"
                    >
                      <p className="text-sm text-brown">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-sm text-brown/60 italic text-center"
                >
                  This is why online pricing "per treatment" can be misleading.
                  Jawline shaping often needs more product than smaller areas
                  like lips.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fillers Used */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                What fillers are typically used?
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white rounded-3xl p-8 border border-taupe/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-wine/20 to-rose/20 rounded-2xl flex items-center justify-center">
                      <Gem className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-xl text-brown">
                        Juvederm Volux
                      </h3>
                      <p className="text-sm text-brown/60">
                        Firmer, structural support
                      </p>
                    </div>
                  </div>
                  <p className="text-brown/70">
                    Specifically designed for jawline definition with high G'
                    prime for lift and structure.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white rounded-3xl p-8 border border-taupe/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-wine/20 to-rose/20 rounded-2xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-xl text-brown">
                        Juvederm Volift
                      </h3>
                      <p className="text-sm text-brown/60">
                        Versatile, smooth integration
                      </p>
                    </div>
                  </div>
                  <p className="text-brown/70">
                    Ideal for jaw body and pre-jowl areas with balanced lift and
                    natural movement.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-6 bg-taupe/10 rounded-2xl border border-taupe/20"
              >
                <p className="text-brown text-center">
                  HA fillers can differ in how they are formulated and
                  crosslinked, which affects properties like firmness and
                  longevity. That is one reason product choice matters as much
                  as technique.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-4"
              >
                What to expect at
                <span className="text-wine"> Nexus Clinic Kuala Lumpur</span>
              </motion.h2>

              <div className="grid md:grid-cols-4 gap-4 mt-16">
                {[
                  {
                    icon: ScanFace,
                    title: "Consultation",
                    desc: "Facial assessment at rest and in motion",
                    step: "01",
                  },
                  {
                    icon: Layers,
                    title: "Face Mapping",
                    desc: "Plan key jawline points and volume",
                    step: "02",
                  },
                  {
                    icon: Syringe,
                    title: "Treatment",
                    desc: "Precise injection with your plan",
                    step: "03",
                  },
                  {
                    icon: Sparkles,
                    title: "Review",
                    desc: "Refinement if needed, staged approach",
                    step: "04",
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={scaleIn} className="relative">
                    <div className="bg-white rounded-2xl p-6 border border-taupe/20 h-full">
                      <span className="text-5xl font-['Georgia',serif] text-wine/20 absolute top-2 right-4">
                        {item.step}
                      </span>
                      <item.icon
                        size={32}
                        className="w-10 h-10 text-wine mb-4"
                      />
                      <h3 className="font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brown/60">{item.desc}</p>
                    </div>

                    {idx < 3 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain & Downtime */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  Does jawline filler hurt?
                  <span className="block text-wine text-2xl mt-2">
                    Downtime & healing timeline
                  </span>
                </h2>

                <p className="text-brown/80">
                  Most people describe it as pressure or brief pinches. Many
                  fillers include lidocaine, and numbing can be used to improve
                  comfort.
                </p>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-taupe/20">
                  <h4 className="font-semibold text-brown mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-wine" />
                    Healing Timeline
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Mild swelling for a few days",
                      "Possible bruising (varies by person)",
                      "Tenderness when pressed",
                      "Final results in 1-2 weeks",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-brown/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: Wind,
                    label: "Return to normal routine",
                    time: "Immediate",
                  },
                  { icon: Sun, label: "Avoid heat/sauna", time: "24-48 hrs" },
                  { icon: Moon, label: "Sleep elevated", time: "First night" },
                  { icon: Zap, label: "No strenuous exercise", time: "24 hrs" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 border border-taupe/20"
                  >
                    <item.icon className="w-6 h-6 text-wine mb-3" />
                    <p className="text-sm font-medium text-brown">
                      {item.label}
                    </p>
                    <p className="text-xs text-wine mt-1">{item.time}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-8"
              >
                Aftercare that protects your result
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-brown/70 mb-12"
              >
                Good aftercare reduces swelling and helps your jawline settle
                smoothly.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  "Avoid strenuous exercise for 24 hours",
                  "Avoid excessive heat (saunas) for 24-48 hours",
                  "Avoid alcohol and blood-thinning medications",
                  "Do not press or massage the jawline",
                  "Sleep slightly elevated the first night",
                  "Contact clinic if anything feels unusual",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    custom={idx}
                    className="flex items-start gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="mt-8 text-sm text-brown/60 italic"
              >
                Source: American Society of Plastic Surgeons
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Longevity & Syringes */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  How long does
                  <span className="block text-wine">jawline filler last?</span>
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-taupe/20">
                    <p className="text-brown/80">
                      <span className="font-semibold text-wine">
                        6-12 months
                      </span>{" "}
                      for most HA fillers
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-taupe/20">
                    <p className="text-brown/80">
                      <span className="font-semibold text-wine">
                        Up to 12 months
                      </span>{" "}
                      for CaHA fillers
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-taupe/20">
                    <p className="text-brown/80">
                      <span className="font-semibold text-wine">
                        Up to 2 years
                      </span>{" "}
                      possible depending on product and metabolism
                    </p>
                  </div>
                </div>

                <p className="text-sm text-brown/60">
                  Source: Cleveland Clinic
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-taupe/20"
              >
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-wine" />
                  How many syringes?
                </h3>

                <p className="text-brown/70 mb-6">
                  Jawline usually needs more product because it is a longer area
                  focused on structure.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      range: "2-4 syringes",
                      desc: "Typical range for definition",
                    },
                    {
                      range: "Subtle",
                      desc: "Less product for natural enhancement",
                    },
                    {
                      range: "Stronger angle",
                      desc: "More product for dramatic change",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-taupe/5 rounded-lg"
                    >
                      <span className="font-semibold text-wine">
                        {item.range}
                      </span>
                      <span className="text-sm text-brown/60">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-4"
              >
                Jawline filler cost in Kuala Lumpur
                <span className="block text-wine text-2xl mt-2">
                  transparent planning
                </span>
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 border border-taupe/20 mt-12"
              >
                <p className="text-lg text-brown/70 mb-8">
                  Per 1 cc syringe pricing
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-2xl">
                    <h4 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      Juvederm Volux
                    </h4>
                    <p className="text-2xl text-wine font-light">RM 2,500</p>
                    <p className="text-sm text-brown/60 line-through">
                      RM 3,000
                    </p>
                    <p className="text-xs text-green-600 mt-2">Promo price</p>
                  </div>

                  <div className="p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-2xl">
                    <h4 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      Juvederm Volift
                    </h4>
                    <p className="text-2xl text-wine font-light">RM 2,500</p>
                    <p className="text-sm text-brown/60 line-through">
                      RM 3,000
                    </p>
                    <p className="text-xs text-green-600 mt-2">Promo price</p>
                  </div>
                </div>

                <p className="mt-8 text-sm text-brown/60">
                  Because jawline often needs multiple syringes, total budget
                  depends on your plan. Consultation lets us estimate the likely
                  range.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                Jawline filler vs other treatments
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Jawline filler vs Masseter Botox",
                    filler: "Adds structure and definition",
                    botox: "Slims jaw if muscle is bulky",
                    icon: Brain,
                  },
                  {
                    title: "Jawline filler vs HIFU",
                    filler: "Shapes and supports",
                    hifu: "Improves skin laxity",
                    icon: Zap,
                  },
                  {
                    title: "Jawline filler vs Threads",
                    filler: "Builds structure",
                    threads: "Lifts tissue",
                    icon: Target,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-taupe/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-5 h-5 text-wine" />
                      <h3 className="font-semibold text-brown">{item.title}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></div>
                        <p className="text-sm text-brown/70">{item.filler}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2"></div>
                        <p className="text-sm text-brown/70">
                          {item.botox || item.hifu || item.threads}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 p-4 bg-wine/5 rounded-xl text-brown italic"
              >
                Some faces need lift first, others need shape first. We decide
                based on your anatomy.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-8"
              >
                Side effects and safety
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 border border-taupe/20 mb-8"
              >
                <h3 className="font-semibold text-brown mb-4">
                  Common (temporary)
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {["Swelling", "Bruising", "Redness", "Tenderness"].map(
                    (item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-taupe/10 rounded-full text-sm text-brown"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                <div className="border-t border-taupe/20 pt-6">
                  <h3 className="font-semibold text-brown mb-4">
                    Rare but serious
                  </h3>
                  <p className="text-sm text-brown/70">
                    Infection, allergic reactions, vascular occlusion. This is
                    why jawline filler should be done by trained medical
                    professionals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-red-50 border border-red-200 rounded-2xl p-6"
              >
                <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <p className="text-sm text-red-700">
                  If you ever experience severe pain, skin whitening, spreading
                  discoloration, or vision symptoms after any filler treatment,
                  seek urgent medical care.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Location */}
        <section className="py-16 bg-brown text-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center"
            >
              <motion.div variants={fadeInUp}>
                <p className="text-taupe mb-2">Visit us at</p>
                <p className="text-lg">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
                <p className="text-sm text-taupe mt-4">
                  Nexus Clinic Kuala Lumpur - Established 2001
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JawlineFillerLanding;
