import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  FlaskConical,
  Scissors,
  Droplets,
  Activity,
  Award,
  Users,
  Calendar,
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
import FAQ from "../../components/FAQ";

export default function BeardLanding() {
  const faqs = [
    {
      q: "How can I grow a beard faster?",
      a: "There is no instant switch. Beard growth depends on genetics, hormones, and follicle activity.",
    },
    {
      q: "Why is my beard patchy?",
      a: "Common reasons include genetics, alopecia areata, scarring, and skin inflammation.",
    },
    {
      q: "Is a beard transplant permanent?",
      a: "Yes, once growth is established, results are typically described as long-lasting.",
    },
    {
      q: "Does a beard transplant look natural?",
      a: "It can, when the surgeon plans the direction, angle, and density correctly.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-cream to-light font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-wine font-semibold tracking-wide uppercase text-sm">
                    <Sparkles className="w-4 h-4" />
                    Nexus Clinic Kuala Lumpur
                  </span>
                  <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                    Build a fuller beard,
                    <span className="text-wine"> fix patchy areas</span>
                  </h1>
                  <p className="text-xl text-taupe max-w-lg">
                    From thin cheeks to uneven jawlines, we focus on medical
                    assessment first, then the right plan.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Book Consultation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold hover:bg-wine hover:text-white transition-all duration-300">
                    View Results
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-8 pt-8"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-taupe border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div className="text-brown">
                    <span className="font-bold text-2xl">2000+</span>
                    <span className="text-taupe ml-2">happy clients</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-light backdrop-blur-lg bg-opacity-70 rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-taupe border-opacity-30">
                      <Shield className="w-6 h-6 text-wine" />
                      <span className="font-semibold text-brown">
                        Trust at a glance
                      </span>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Founded in 2001 in KL's Golden Triangle",
                        "LG 10, Wisma UOA II, Jalan Pinang",
                        "Medical assessment first approach",
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInLeft}
                          custom={i}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-wine" />
                          <span className="text-brown">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-light backdrop-blur-lg bg-opacity-70 rounded-2xl p-4 shadow-xl border border-white"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-rose" />
                    <span className="text-sm font-medium text-brown">
                      Permanent results
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
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
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                Quick Answers
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                What you really want to know
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Activity className="w-6 h-6" />,
                  question: "Can patchy beard be treated?",
                  answer:
                    "Yes, in many cases. The best option depends on the cause.",
                },
                {
                  icon: <Scissors className="w-6 h-6" />,
                  question: "Is beard transplant permanent?",
                  answer:
                    "Results are typically described as long-lasting once growth settles.",
                },
                {
                  icon: <FlaskConical className="w-6 h-6" />,
                  question: "Does PRP help beard growth?",
                  answer: "Results vary and evidence is still evolving.",
                },
                {
                  icon: <Droplets className="w-6 h-6" />,
                  question: "How much does it cost?",
                  answer:
                    "RM 3,000 - RM 15,000 depending on grafts and coverage.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-linear-to-br from-light to-cream p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-taupe border-opacity-20"
                >
                  <div className="w-12 h-12 bg-wine bg-opacity-10 rounded-xl flex items-center justify-center text-cream mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] text-lg font-semibold text-brown mb-2">
                    {item.question}
                  </h3>
                  <p className="text-taupe text-sm">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What is Beard Treatment Section */}
        <section className="py-20 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  Understanding Your Needs
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  What does "beard treatment" mean in real life?
                </h2>
                <p className="text-taupe text-lg">
                  In clinic terms, beard treatment usually means one of these
                  goals. A strong plan starts with identifying which one is your
                  problem.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {[
                  {
                    title: "Beard growth & thickening",
                    desc: "You have hair, but it is light, thin, or uneven.",
                  },
                  {
                    title: "Patchy beard treatment",
                    desc: "You have clear gaps, islands, or sections that never filled in.",
                  },
                  {
                    title: "Beard hair loss treatment",
                    desc: "You used to have hair, then it started falling out in patches.",
                  },
                  {
                    title: "Beard skin treatment",
                    desc: "You have beard dandruff, itch, redness, or bumps.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInRight}
                    className="bg-white backdrop-blur-lg bg-opacity-50 p-6 rounded-xl border border-taupe border-opacity-20 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-['Georgia',serif] text-lg font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                Understanding the Root Cause
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                Why your beard is patchy or not growing
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Genetics",
                  desc: "Some men naturally grow thicker beards",
                },
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: "Alopecia Barbae",
                  desc: "Autoimmune condition causing patchy loss",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Scars or Burns",
                  desc: "Scar tissue prevents hair growth",
                },
                {
                  icon: <Scissors className="w-8 h-8" />,
                  title: "Grooming Habits",
                  desc: "Aggressive shaving or friction",
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Beard Dandruff",
                  desc: "Inflammation affecting growth",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-linear-to-b from-light to-cream p-6 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-wine rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] font-semibold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-20 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                Treatment Options
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                What actually helps
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Medical Treatment",
                  subtitle: "For sudden patchy loss",
                  icon: <Activity className="w-8 h-8" />,
                  desc: "Corticosteroid injections for alopecia areata. Medical review essential.",
                  color: "from-wine to-rose",
                },
                {
                  title: "PRP Therapy",
                  subtitle: "For thinning areas",
                  icon: <Droplets className="w-8 h-8" />,
                  desc: "Platelet-rich plasma for early thinning and density support where follicles exist.",
                  color: "from-rose to-taupe",
                },
                {
                  title: "Beard Transplant",
                  subtitle: "For permanent gaps",
                  icon: <Scissors className="w-8 h-8" />,
                  desc: "FUE facial hair transplant for long-term gaps, scars, or absent follicles.",
                  color: "from-brown to-wine",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  ></div>
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-wine font-medium mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-taupe mb-6">{item.desc}</p>
                    <button className="flex items-center text-wine font-semibold group-hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-light backdrop-blur-lg bg-opacity-70 rounded-3xl p-8 border border-taupe border-opacity-30">
                  <h3 className="font-['Georgia',serif] text-3xl text-brown mb-6">
                    Beard Assessment at Nexus Clinic
                  </h3>
                  <div className="space-y-4">
                    {[
                      "What your beard looked like before",
                      "How long the patchiness has been there",
                      "Whether the skin is inflamed or itchy",
                      "If you have sudden patchy loss",
                      "Whether you have scars or injury lines",
                      "Your goal: subtle fill or fuller defined line",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInRight}
                        custom={i}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  Our Approach
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  A consult should not feel like a sales pitch
                </h2>
                <p className="text-taupe text-lg">
                  It should feel like someone finally understands what you are
                  dealing with. If we suspect alopecia areata or another medical
                  condition, we focus on diagnosis first.
                </p>
                <div className="pt-6">
                  <div className="bg-cream p-6 rounded-2xl border-l-4 border-wine">
                    <p className="text-brown italic">
                      "Because cosmetic boosters are not the same as medical
                      treatment."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <section className="py-20 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                Comparison
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                Pros & Cons of Common Treatments
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "PRP for Beard",
                  pros: [
                    "Uses your own platelets",
                    "Minimal downtime",
                    "Suits early thinning",
                  ],
                  cons: [
                    "Results vary",
                    "Needs multiple sessions",
                    "Not for scar zones",
                  ],
                  color: "text-wine",
                },
                {
                  title: "Minoxidil",
                  pros: [
                    "Accessible",
                    "Clinical support exists",
                    "Widely discussed",
                  ],
                  cons: [
                    "Skin irritation risk",
                    "Off-label use",
                    "Store safely from children",
                  ],
                  color: "text-rose",
                },
                {
                  title: "Beard Transplant",
                  pros: [
                    "Permanent density",
                    "Works on scars",
                    "Long-lasting results",
                  ],
                  cons: ["Higher cost", "Healing period", "Skill-dependent"],
                  color: "text-brown",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <h3
                    className={`font-['Georgia',serif] text-2xl font-bold ${item.color} mb-6`}
                  >
                    {item.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {item.pros.map((pro, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-brown"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                            <span className="text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-500 mb-3">Cons</h4>
                      <ul className="space-y-2">
                        {item.cons.map((con, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-brown"
                          >
                            <AlertCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                            <span className="text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  Investment
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  Beard Treatment Cost in Malaysia
                </h2>
                <p className="text-taupe text-lg">
                  Pricing depends on coverage area, technique, and graft count.
                  Here are real ranges from Malaysia sources:
                </p>
                <div className="space-y-4">
                  {[
                    "RM 7,000 - RM 15,000 for beard transplant ranges",
                    "RM 3,000+ starting prices on directories",
                    "RM 5,000 - RM 10,000 at Nexus Clinic (guide only)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-wine rounded-full"></div>
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-cream p-6 rounded-2xl mt-8">
                  <p className="text-wine font-semibold">
                    If a clinic gives pricing without seeing your beard area,
                    that is a red flag. Beard work is custom.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-linear-to-br from-wine to-rose p-8 rounded-3xl text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-6">
                  Price Guide
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>Goatee/Moustache</span>
                    <span className="font-bold">500-1,000 grafts</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>Jawline & Cheeks</span>
                    <span className="font-bold">1,500-2,500 grafts</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>Full Beard</span>
                    <span className="font-bold">2,500-4,000 grafts</span>
                  </div>
                  <div className="pt-6">
                    <p className="text-sm opacity-90">
                      *Final cost determined during consultation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beard Dandruff Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                Often Ignored But Important
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2 mb-8"
              >
                Beard dandruff and beard skin problems
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <p className="text-brown text-xl mb-6">
                  A beard can look patchy even when hair exists, simply because
                  the skin is inflamed.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="p-4 bg-light rounded-xl">
                    <h3 className="font-semibold text-wine mb-2">
                      Common causes:
                    </h3>
                    <ul className="space-y-2 text-taupe">
                      <li>• Seborrheic dermatitis</li>
                      <li>• Flakes and itch</li>
                      <li>• Redness under beard</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-light rounded-xl">
                    <h3 className="font-semibold text-wine mb-2">
                      Treatment focus:
                    </h3>
                    <ul className="space-y-2 text-taupe">
                      <li>• Antifungal approaches</li>
                      <li>• Gentle care routine</li>
                      <li>• Medical guidance</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-brown to-wine">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl mb-6"
              >
                Ready for a beard that looks even, natural, and confident?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
                Start with a proper assessment. We'll help you understand the
                cause, then choose the right path.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <button className="bg-white text-brown px-12 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                  <Calendar className="w-6 h-6" />
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
}
