import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Users,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  TrendingDown,
  Heart,
  Sparkles,
  Award,
  ChevronDown,
  MapPin,
  Zap,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  rowVariants,
  containerVariants,
} from "../../lib/animations";
import BeforeAfterSection from "../../components/BeforeAfter";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const pulseGlow = {
  initial: { boxShadow: "0 0 0 0 rgba(140, 79, 88, 0.4)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(140, 79, 88, 0.4)",
      "0 0 0 20px rgba(140, 79, 88, 0)",
      "0 0 0 0 rgba(140, 79, 88, 0)",
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

const dataFaq = [
  {
    q: "Is Wegovy safe for weight loss in Malaysia?",
    a: "Yes, Wegovy is prescribed under medical guidance in Malaysia and is considered safe for most adults. Our doctors conduct thorough assessments before prescribing.",
  },
  {
    q: "Can I get Wegovy without diabetes?",
    a: "Yes! Wegovy is specifically designed for weight loss, even if you do not have diabetes. It's approved for chronic weight management in eligible adults.",
  },
  {
    q: "What are Wegovy's side effects?",
    a: "Mild side effects include nausea and tiredness, which typically improve over time. More serious but rare side effects may include pancreatitis or gallbladder issues.",
  },
  {
    q: "How fast can I lose weight with Wegovy?",
    a: "Many people see changes in 2–4 weeks. Results improve significantly with healthy eating and regular exercise. Individual results vary.",
  },
  {
    q: "How do I use Wegovy?",
    a: "It's a weekly pen injection in the stomach, thigh, or upper arm. Our medical team will provide complete training and ongoing support.",
  },
];

const features = [
  {
    feature: "Active Ingredient",
    mounjaro: "Tirzepatide",
    ozempic: "Semaglutide",
    saxenda: "Liraglutide",
  },
  {
    feature: "Frequency",
    mounjaro: "Once weekly",
    ozempic: "Once weekly",
    saxenda: "Daily",
  },
  {
    feature: "Weight Loss Avg",
    mounjaro: "Up to 22%",
    ozempic: "Up to 15%",
    saxenda: "Up to 10%",
    highlight: "mounjaro",
  },
  {
    feature: "Dual-Hormone Action",
    mounjaro: "Yes (GIP + GLP-1)",
    ozempic: "No (GLP-1 only)",
    saxenda: "No (GLP-1 only)",
    highlight: "mounjaro",
  },
  {
    feature: "Suitable For",
    mounjaro: "Obesity, Diabetes, PCOS",
    ozempic: "Diabetes, Obesity",
    saxenda: "General Weight Loss",
  },
];

export default function PageWegovyMalaysia() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-light font-inter overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-linear-to-br from-cream via-light to-cream overflow-hidden">
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-wine/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-8"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  FDA-Approved Weight Loss Solution
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-georgia text-brown leading-tight"
                >
                  Transform Your Body with{" "}
                  <span className="text-wine relative">
                    Wegovy
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      <motion.path
                        d="M0 6 Q50 0 100 6 T200 6"
                        fill="none"
                        stroke="#8C4F58"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed max-w-xl"
                >
                  Experience clinically proven weight loss with Malaysia's
                  premier aesthetic clinic. Our expert physicians guide you
                  through a personalized journey to sustainable results.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-6"
                >
                  {[
                    { number: "464+", label: "Happy Clients" },
                    { number: "15-22%", label: "Avg Weight Loss" },
                    { number: "Weekly", label: "Simple Dosing" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-georgia text-wine font-bold">
                        {stat.number}
                      </div>
                      <div className="text-sm text-taupe">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="#booking"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-wine text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-wine/30 hover:bg-wine/90 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </motion.a>
                  <motion.a
                    href="https://wa.link/q64h1l"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm border border-wine/20 text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/10 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with Doctor
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Content - Hero Image/Card */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                animate="animate"
                className="relative"
              >
                <motion.div
                  className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-medium">
                    Limited Offer
                  </div>

                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80"
                      alt="Healthy Lifestyle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-wine/30 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-georgia text-brown mb-2">
                    Wegovy Injection
                  </h3>
                  <p className="text-taupe mb-4">
                    Weekly subcutaneous injection for sustainable weight
                    management
                  </p>

                  <div className="flex items-center justify-between border-t border-taupe/20 pt-4">
                    <div>
                      <span className="text-sm text-taupe">Starting from</span>
                      <div className="text-2xl font-bold text-wine">
                        RM 2,500
                        <span className="text-sm font-normal">/month</span>
                      </div>
                    </div>
                    <motion.div
                      {...pulseGlow}
                      className="w-12 h-12 bg-wine rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-brown">FDA Approved</div>
                      <div className="text-sm text-taupe">
                        Clinically Tested
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-wine/50" />
          </motion.div>
        </section>

        {/* What is Wegovy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content */}
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  Understanding the Treatment
                </span>
                <h2 className="text-3xl md:text-4xl font-georgia text-brown">
                  What is Wegovy & How Does It Work?
                </h2>
                <div className="space-y-4 text-taupe leading-relaxed">
                  <p>
                    <strong className="text-brown">Wegovy (semaglutide)</strong>{" "}
                    is a revolutionary FDA-approved medication designed
                    specifically for chronic weight management. It mimics a
                    natural hormone called GLP-1 that regulates appetite and
                    food intake.
                  </p>
                  <p>
                    By activating GLP-1 receptors in the brain, Wegovy helps you
                    feel fuller faster, reduces cravings, and supports
                    sustainable weight loss when combined with a healthy
                    lifestyle.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: TrendingDown, text: "Reduces appetite naturally" },
                    { icon: Clock, text: "Once weekly injection" },
                    { icon: Heart, text: "Improves metabolic health" },
                    { icon: Zap, text: "Visible results in weeks" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-center gap-3 bg-cream/50 p-4 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-wine/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <span className="text-brown font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Background circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full border-2 border-wine/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full border-2 border-rose/20 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-48 h-48 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center shadow-2xl shadow-wine/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold">15%</div>
                        <div className="text-sm opacity-80">
                          Avg Weight Loss
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  {[
                    {
                      top: "10%",
                      left: "10%",
                      label: "Muscle Preservation",
                    },
                    {
                      top: "10%",
                      right: "10%",
                      label: "Targeted Action",
                    },
                    {
                      bottom: "10%",
                      left: "10%",
                      label: "Fast Results",
                    },
                    {
                      bottom: "10%",
                      right: "10%",
                      label: "Safe & Proven",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white rounded-xl p-3 shadow-lg"
                      style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-xs text-brown font-medium whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                Why Choose Wegovy
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                Benefits That Transform Lives
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: TrendingDown,
                  title: "Proven Weight Loss",
                  description:
                    "Clinical studies show average weight loss of 15-22% of body weight with consistent use.",
                  highlight: "15-22%",
                },
                {
                  icon: Heart,
                  title: "Appetite Control",
                  description:
                    "Natural appetite suppression reduces cravings and helps you feel satisfied with less food.",
                  highlight: "Natural",
                },
                {
                  icon: Zap,
                  title: "Metabolic Boost",
                  description:
                    "Improves insulin sensitivity and metabolic health for better overall wellness.",
                  highlight: "Improved",
                },
                {
                  icon: Clock,
                  title: "Weekly Convenience",
                  description:
                    "Simple once-weekly injection that fits seamlessly into your busy lifestyle.",
                  highlight: "1x/week",
                },
                {
                  icon: Shield,
                  title: "FDA Approved",
                  description:
                    "Rigorously tested and approved by FDA for safe, effective weight management.",
                  highlight: "Safe",
                },
                {
                  icon: Award,
                  title: "Expert Guidance",
                  description:
                    "Personalized treatment plans supervised by experienced medical professionals.",
                  highlight: "Custom",
                },
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <motion.div
                    className="h-full bg-white rounded-2xl p-8 shadow-lg shadow-brown/5 border border-transparent hover:border-wine/20 transition-all duration-300"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(140, 79, 88, 0.15)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center group-hover:bg-wine transition-colors">
                        <benefit.icon className="w-7 h-7 text-wine group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-3xl font-bold text-wine/20 group-hover:text-wine/40 transition-colors">
                        {benefit.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-georgia text-brown mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* before after Section */}
        <BeforeAfterSection />

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-cream">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ opacity: "1", transform: "none" }}
          >
            <span className="text-wine font-medium tracking-wider uppercase text-sm">
              Compare Options
            </span>
            <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
              Wegovy vs Other Treatments
            </h2>
            <p className="text-taupe mt-4">
              Find the right solution for your weight loss journey
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Desktop Table */}
            <motion.div
              className="hidden md:block overflow-x-auto rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-wine text-light">
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      Mounjaro
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      Ozempic
                    </th>
                    <th className="px-6 py-4 text-center font-inter font-semibold">
                      Saxenda
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className={`
                  ${index % 2 === 0 ? "bg-light" : "bg-cream"}
                  hover:bg-taupe/20 transition-colors duration-200
                  border-b border-taupe/20
                `}
                    >
                      <td className="px-6 py-4 font-inter font-semibold text-brown">
                        {item.feature}
                      </td>
                      <td
                        className={`px-6 py-4 font-inter text-center ${item.highlight === "mounjaro" ? "text-wine font-bold bg-wine/10" : "text-brown/80"}`}
                      >
                        {item.mounjaro}
                      </td>
                      <td className="px-6 py-4 font-inter text-center text-brown/80">
                        {item.ozempic}
                      </td>
                      <td className="px-6 py-4 font-inter text-center text-brown/80">
                        {item.saxenda}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Cards */}
            <motion.div
              className="md:hidden space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Mounjaro Card */}
              <motion.div
                variants={rowVariants}
                className="bg-wine/10 rounded-xl p-5 shadow-md border-l-4 border-wine"
              >
                <h4 className="font-inter font-bold text-wine text-xl mb-3">
                  Mounjaro
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span
                        className={`${item.highlight === "mounjaro" ? "text-wine font-bold" : "text-brown/80"}`}
                      >
                        {item.mounjaro}
                      </span>
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Ozempic Card */}
              <motion.div
                variants={rowVariants}
                className="bg-light rounded-xl p-5 shadow-md border-l-4 border-rose"
              >
                <h4 className="font-inter font-bold text-brown text-xl mb-3">
                  Ozempic
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span className="text-brown/80">{item.ozempic}</span>
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Saxenda Card */}
              <motion.div
                variants={rowVariants}
                className="bg-light rounded-xl p-5 shadow-md border-l-4 border-taupe"
              >
                <h4 className="font-inter font-bold text-brown text-xl mb-3">
                  Saxenda
                </h4>
                <div className="space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <p key={idx}>
                      <span className="text-taupe">{item.feature}:</span>{" "}
                      <span className="text-brown/80">{item.saxenda}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Footer */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-brown font-inter"
            >
              Want help deciding which one is best for you?{" "}
              <a
                href="/contact-us"
                className="text-wine hover:text-rose underline font-semibold transition-colors"
              >
                Speak to our specialists
              </a>{" "}
              today.
            </motion.p>
          </div>
        </section>

        {/* Is Wegovy Right For You */}
        <section className="py-24 bg-brown text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="text-rose font-medium tracking-wider uppercase text-sm"
                >
                  Eligibility
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-georgia"
                >
                  Is Wegovy Right For You?
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-cream/80 leading-relaxed"
                >
                  Wegovy may be suitable for adults who struggle with weight
                  management, particularly those with:
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {[
                    "BMI of 30 or higher (obesity)",
                    "BMI of 27+ with weight-related health conditions",
                    "Type 2 diabetes or prediabetes",
                    "PCOS or insulin resistance",
                    "History of unsuccessful diet attempts",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-rose shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    href="#booking"
                    className="inline-flex items-center gap-2 bg-rose text-white px-6 py-3 rounded-full font-medium hover:bg-rose/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Book Assessment
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Decorative Visual */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  {/* Glowing orbs */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-wine rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-rose rounded-full blur-2xl"
                    animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Main card */}
                  <motion.div
                    className="relative bg-glass backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                    whileHover={{ y: -10 }}
                  >
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-wine/30 rounded-full flex items-center justify-center mx-auto">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="text-5xl font-bold text-white">
                          464+
                        </div>
                        <div className="text-cream/70 mt-2">
                          Satisfied Clients
                        </div>
                      </div>
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-rose text-rose"
                          />
                        ))}
                      </div>
                      <p className="text-cream/80 italic">
                        "The support from Nexus Clinic made all the difference
                        in my weight loss journey."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                Real Results from Real People
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  name: "Fatimah, 43",
                  location: "Johor Bahru",
                  quote:
                    "In just 3 months, I lost 14kg without starving myself. The support from Nexus Clinic made all the difference in my journey.",
                  result: "-14 kg",
                },
                {
                  name: "Raymond, 52",
                  location: "KLCC",
                  quote:
                    "Dropped two clothing sizes and saw my blood sugar normalize. I feel like I got my life back after years of struggling.",
                  result: "-2 sizes",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-xl shadow-brown/5"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-rose text-rose" />
                    ))}
                  </div>
                  <p className="text-brown text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-brown">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-taupe flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="bg-wine/10 text-wine px-4 py-2 rounded-full font-bold">
                      {testimonial.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                Investment in Your Health
              </h2>
              <p className="text-taupe mt-4">
                Flexible plans tailored to your weight loss goals
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  name: "Starter Plan",
                  price: "2,500",
                  period: "/month",
                  features: [
                    "Initial consultation",
                    "Body composition analysis",
                    "Wegovy injections",
                    "Monthly follow-up",
                    "Diet guidance",
                  ],
                  popular: false,
                },
                {
                  name: "Extended Plan",
                  price: "Custom",
                  period: "pricing",
                  features: [
                    "Everything in Starter",
                    "Extended treatment duration",
                    "Priority scheduling",
                    "Dedicated support line",
                    "Progress tracking app",
                  ],
                  popular: true,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-linear-to-br from-wine to-rose text-white"
                      : "bg-cream/50 border border-taupe/20"
                  }`}
                  whileHover={{
                    y: -10,
                    boxShadow: plan.popular
                      ? "0 25px 50px -12px rgba(140, 79, 88, 0.4)"
                      : "0 25px 50px -12px rgba(75, 58, 51, 0.1)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 bg-brown text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <h3
                    className={`text-2xl font-georgia mb-2 ${plan.popular ? "text-white" : "text-brown"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm">RM</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={plan.popular ? "text-white/70" : "text-taupe"}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 ${plan.popular ? "text-white" : "text-wine"}`}
                        />
                        <span
                          className={
                            plan.popular ? "text-white/90" : "text-brown"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-medium transition-colors ${
                      plan.popular
                        ? "bg-white text-wine hover:bg-cream"
                        : "bg-wine text-white hover:bg-wine/90"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {/* Special Offer Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-linear-to-r from-rose/20 to-wine/20 rounded-2xl p-8 text-center max-w-2xl mx-auto"
            >
              <Sparkles className="w-10 h-10 text-wine mx-auto mb-4" />
              <h3 className="text-xl font-georgia text-brown mb-2">
                Limited Time Offer
              </h3>
              <p className="text-taupe mb-4">
                Get FREE consultation + Body Composition Analysis for first-time
                patients
              </p>
              <motion.a
                href="#booking"
                className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Offer
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-wine font-medium tracking-wider uppercase text-sm">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {[
                {
                  q: "Is Wegovy safe for weight loss in Malaysia?",
                  a: "Yes, Wegovy is prescribed under medical guidance in Malaysia and is considered safe for most adults. Our doctors conduct thorough assessments before prescribing.",
                },
                {
                  q: "Can I get Wegovy without diabetes?",
                  a: "Yes! Wegovy is specifically designed for weight loss, even if you do not have diabetes. It's approved for chronic weight management in eligible adults.",
                },
                {
                  q: "What are Wegovy's side effects?",
                  a: "Mild side effects include nausea and tiredness, which typically improve over time. More serious but rare side effects may include pancreatitis or gallbladder issues.",
                },
                {
                  q: "How fast can I lose weight with Wegovy?",
                  a: "Many people see changes in 2–4 weeks. Results improve significantly with healthy eating and regular exercise. Individual results vary.",
                },
                {
                  q: "How do I use Wegovy?",
                  a: "It's a weekly pen injection in the stomach, thigh, or upper arm. Our medical team will provide complete training and ongoing support.",
                },
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </motion.div>
          </div>
        </section> */}
        <FAQ data={dataFaq} />

        {/* CTA Section */}
        <section
          id="booking"
          className="py-24 bg-linear-to-br from-brown via-brown to-wine text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-georgia mb-6"
              >
                Start Your Transformation Today
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto"
              >
                Take the first step towards a healthier, more confident you.
                Book your consultation with our expert physicians.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                <motion.a
                  href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                  className="inline-flex items-center gap-3 bg-white text-wine px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-6 h-6" />
                  Book Appointment
                </motion.a>
                <motion.a
                  href="https://wa.link/q64h1l"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 grid sm:grid-cols-3 gap-8"
              >
                {[
                  {
                    icon: MapPin,
                    label: "KLCC, Bangsar, Mont Kiara, JB, Penang",
                  },
                  { icon: Phone, label: "+60 16-702 5699" },
                  { icon: Clock, label: "Mon-Sat: 9AM - 6PM" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-rose" />
                    </div>
                    <span className="text-cream/80">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

// function FAQItem({ question, answer }: { question: string; answer: string }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div
//       variants={fadeInUp}
//       className="bg-white rounded-xl overflow-hidden shadow-sm"
//     >
//       <motion.button
//         className="w-full flex items-center justify-between p-6 text-left"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-medium text-brown pr-4">{question}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="shrink-0"
//         >
//           <ChevronDown className="w-5 h-5 text-wine" />
//         </motion.div>
//       </motion.button>
//       <motion.div
//         initial={false}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <p className="px-6 pb-6 text-taupe leading-relaxed">{answer}</p>
//       </motion.div>
//     </motion.div>
//   );
// }
