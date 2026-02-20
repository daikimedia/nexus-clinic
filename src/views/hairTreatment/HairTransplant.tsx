"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Clock,
  Shield,
  Heart,
  Star,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MapPin,
  Award,
  Users,
  Scissors,
  Sparkle,
  Flower2,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const HairTransplantLanding = () => {
  const faqs = [
    {
      q: "Is shedding after a hair transplant normal?",
      a: "Yes, shedding can happen and it often worries people. It is commonly linked to shock loss, where hair shafts shed while follicles rest before growing again.",
    },
    {
      q: "Can a hair transplant fail?",
      a: "Most grafts survive when the plan is good and aftercare is followed. Risk factors include poor donor selection, smoking, uncontrolled health issues, and poor post-op care.",
    },
    {
      q: "Can women get a hair transplant in Malaysia?",
      a: "Yes, women can get hair transplants. The suitability depends on the pattern of hair loss and donor area strength.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-taupe blur-3xl opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-full"
              >
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-brown">
                  Nexus Clinic Kuala Lumpur
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-brown">Hair Transplant</span>
                <br />
                <span className="bg-linear-to-r from-wine to-rose bg-clip-text text-transparent">
                  in Kuala Lumpur
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-brown mb-8 max-w-2xl mx-auto font-light"
              >
                A hair transplant is not just hair. It is confidence, restored.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe mb-12 max-w-2xl mx-auto"
              >
                If your hairline keeps moving back, you are not alone. At Nexus
                Clinic Kuala Lumpur, we help you plan results that look natural.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-linear-to-r from-wine to-rose text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  Book Your Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-cream text-brown rounded-full font-semibold hover:bg-white transition-all duration-300"
                >
                  View Gallery
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-10 opacity-20"
          >
            <Flower2 className="w-24 h-24 text-wine" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 opacity-20"
          >
            <Leaf className="w-32 h-32 text-rose" />
          </motion.div>
        </section>

        {/* Trust at a Glance Section */}
        <section className="py-20 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-wine/5 to-rose/5"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  Prime Location
                </h3>
                <p className="text-taupe">
                  In the heart of Kuala Lumpur (Jalan Pinang, near KLCC)
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  Established Since 2001
                </h3>
                <p className="text-taupe">
                  Two decades of excellence in aesthetic medicine
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  Private Consultations
                </h3>
                <p className="text-taupe">
                  Doctor-led, clear treatment planning
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Quick Answers People Want First
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                Everything you need to know before your consultation
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-wine" />,
                    question: "Is hair transplant permanent?",
                    answer:
                      "In many cases, yes, because donor hair is usually more resistant to hair loss.",
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-wine" />,
                    question: "Is it painful?",
                    answer:
                      "Most people feel pressure, not sharp pain, because local anaesthesia is used.",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-wine" />,
                    question: "How long until results look 'done'?",
                    answer: "Full results often take 12 to 18 months.",
                  },
                  {
                    icon: <Sparkle className="w-6 h-6 text-wine" />,
                    question: "How much does it cost in Malaysia?",
                    answer:
                      "From RM 5,500 to RM 30,000, depending on grafts and method.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-linear-to-br from-cream to-white p-6 rounded-xl border border-cream hover:border-wine/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-brown mb-2">
                          {item.question}
                        </h3>
                        <p className="text-taupe text-sm">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methods Comparison Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Hair Transplant Methods
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                FUE vs FUT vs DHI - Understanding your options
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "FUE",
                    fullTitle: "Follicular Unit Extraction",
                    description:
                      "Removes follicles one by one, then places them where needed.",
                    benefits: [
                      "No long strip scar",
                      "Faster healing",
                      "Works well for hairline and crown",
                    ],
                    linear: "from-wine to-rose",
                  },
                  {
                    title: "FUT",
                    fullTitle: "Follicular Unit Transplant",
                    description:
                      "Removes a thin strip from donor area, then separates grafts.",
                    benefits: [
                      "Useful for many grafts",
                      "Suits certain donor types",
                      "Budget-friendly option",
                    ],
                    linear: "from-brown to-taupe",
                  },
                  {
                    title: "DHI",
                    fullTitle: "Direct Hair Implantation",
                    description:
                      "Placement style using an implanter tool for precise results.",
                    benefits: ["No cuts", "No stitches", "Precise placement"],
                    linear: "from-rose to-wine",
                  },
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${method.linear} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="p-8">
                      <h3 className="font-['Georgia',serif] text-3xl font-bold text-brown mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm font-medium text-wine mb-4">
                        {method.fullTitle}
                      </p>
                      <p className="text-taupe mb-6">{method.description}</p>

                      <div className="space-y-3">
                        {method.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                            <span className="text-sm text-brown">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <button className="text-wine font-semibold flex items-center gap-2 group/btn">
                        Learn More
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown mt-8 italic"
              >
                In real life, the "best" method depends on your hair loss
                pattern, donor strength, and goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Who Is Hair Transplant For?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {/* Good Candidates */}
                <motion.div variants={fadeInLeft} className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown">
                      Good Candidates
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Stable hair loss pattern",
                      "Strong donor area",
                      "Want long-term solution",
                      "Understand results take time",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-1 bg-green-100 rounded-full group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 p-6 bg-linear-to-br from-cream to-white rounded-xl">
                    <h4 className="font-semibold text-brown mb-3">
                      Common reasons in KL:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Receding hairline",
                        "Crown thinning",
                        "Diffuse thinning",
                        "Beard gaps",
                      ].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-wine rounded-full text-sm shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Should Wait */}
                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown">
                      Should Wait
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Hair loss is still very fast",
                      "Active scalp inflammation",
                      "Donor hair is weak",
                      "Expect instant density",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-1 bg-cream rounded-full group-hover:scale-110 transition-transform">
                          <AlertCircle className="w-4 h-4 text-wine" />
                        </div>
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    variants={scaleIn}
                    className="mt-8 p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-xl border border-cream"
                  >
                    <p className="text-brown italic">
                      Start with non-surgical options first (PRP, medications,
                      or laser), then re-check your progress.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas We Treat */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Areas We Can Treat
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                Not just the scalp - personalized restoration for every area
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: <Scissors className="w-6 h-6" />, label: "Hairline" },
                  { icon: <Sparkles className="w-6 h-6" />, label: "Temples" },
                  { icon: <Leaf className="w-6 h-6" />, label: "Crown" },
                  { icon: <Flower2 className="w-6 h-6" />, label: "Beard" },
                  { icon: <Star className="w-6 h-6" />, label: "Moustache" },
                  { icon: <Heart className="w-6 h-6" />, label: "Eyebrows" },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-wine to-rose rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {area.icon}
                    </div>
                    <p className="font-medium text-brown">{area.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Patient Journey */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-12"
              >
                Your Journey at Nexus Clinic
              </motion.h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-wine via-rose to-taupe hidden md:block"></div>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Consultation & Scalp Check",
                      description:
                        "We discuss your hair loss story, check donor area, density, and scalp health.",
                      icon: <Users className="w-6 h-6" />,
                    },
                    {
                      step: "02",
                      title: "Hairline Design",
                      description:
                        "A good hairline should fit your age and features. We design it together.",
                      icon: <Scissors className="w-6 h-6" />,
                    },
                    {
                      step: "03",
                      title: "Graft Estimate",
                      description:
                        "Clear pricing by graft count or session. You know what you're paying for.",
                      icon: <Sparkle className="w-6 h-6" />,
                    },
                    {
                      step: "04",
                      title: "Procedure Day",
                      description:
                        "Local anaesthesia, bring music or podcasts. We guide you through.",
                      icon: <Calendar className="w-6 h-6" />,
                    },
                    {
                      step: "05",
                      title: "Aftercare & Follow-ups",
                      description:
                        "Washing guidance, activity limits, and protected results.",
                      icon: <Heart className="w-6 h-6" />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      whileHover={{ x: 10 }}
                      className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
                    >
                      <div className="flex items-center gap-4 md:w-48">
                        <div className="w-16 h-16 bg-linear-to-br from-wine to-rose rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div className="md:hidden">
                          <h3 className="font-semibold text-brown">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex-1 bg-cream p-6 rounded-xl ml-0 md:ml-4">
                        <h3 className="font-semibold text-brown mb-2 hidden md:block">
                          {item.title}
                        </h3>
                        <p className="text-taupe">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Recovery Timeline
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                What you will actually see, week by week
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  {
                    period: "Days 1-7",
                    desc: "Scalp feels tight, swelling, gentle washing",
                  },
                  {
                    period: "Days 8-14",
                    desc: "Scabs fall off, grafts secure",
                  },
                  {
                    period: "Weeks 3-8",
                    desc: "Shedding (shock loss) - temporary",
                  },
                  { period: "Months 3-6", desc: "New growth begins, thickens" },
                  { period: "Months 9-18", desc: "Full density, natural look" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-wine mb-2">
                      {item.period}
                    </h3>
                    <p className="text-sm text-brown">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-12"
              >
                Honest View: Pros & Cons
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pros */}
                <motion.div variants={fadeInLeft} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-600 mb-6">
                    Benefits
                  </h3>
                  {[
                    "Uses your own hair, so it looks real",
                    "Can improve hairline shape and coverage",
                    "Often long-lasting when planned well",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 bg-linear-to-r from-green-50 to-transparent rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Cons */}
                <motion.div variants={fadeInRight} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-wine mb-6">
                    Limitations
                  </h3>
                  {[
                    "Results take time (12-18 months)",
                    "May still lose native hair around transplant",
                    "Some need second procedure later",
                    "Not everyone has enough donor supply",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 bg-linear-to-r from-cream to-transparent rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-wine mt-8 italic font-medium"
              >
                A good clinic will say this clearly, before you commit.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                Hair Transplant Cost in Malaysia
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-xl mb-8"
              >
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-wine">RM 5,500</span>
                  <span className="text-taupe mx-4">to</span>
                  <span className="text-5xl font-bold text-rose">
                    RM 30,000
                  </span>
                </div>

                <p className="text-center text-brown mb-8">
                  Depending on grafts, method, and clinic's team
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-brown mb-2">FUE Cases</h4>
                    <p className="text-wine">RM 5,500 - RM 15,000</p>
                    <p className="text-sm text-taupe mt-1">
                      For many standard cases
                    </p>
                  </div>

                  <div className="p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-brown mb-2">Per Graft</h4>
                    <p className="text-wine">RM 6 - RM 12</p>
                    <p className="text-sm text-taupe mt-1">
                      FUE, DHI often higher
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 border border-cream rounded-xl">
                  <h4 className="font-semibold text-brown mb-4">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Consultation & planning",
                      "Procedure & team support",
                      "Aftercare visits",
                      "Post-op instructions",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-taupe"
                      >
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />
        {/* Final Note */}
        <section className="py-20 bg-linear-to-br from-wine to-rose text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl font-bold mb-6"
            >
              You Deserve an Honest Plan
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              A hair transplant can be life-changing, but only when it is
              planned well. Start with a proper assessment.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg mb-12">
              <MapPin className="inline w-5 h-5 mr-2" />
              Nexus Clinic Kuala Lumpur - LG 10, Lower Ground Floor, Wisma UOA
              II, Jalan Pinang, 50450 Kuala Lumpur
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-white text-wine rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Book Your Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-wine transition-all duration-300">
                Call Us
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm opacity-70 mt-12">
              This page is general information and does not replace medical
              advice.
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HairTransplantLanding;
