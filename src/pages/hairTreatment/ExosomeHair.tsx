import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Target,
  Calendar,
  DollarSign,
  MessageCircle,
  Award,
  FileText,
  Droplets,
  Syringe,
  CalendarClock,
  Activity,
  ShieldCheck,
  Info,
  Minus,
  Plus,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const ExosomeLanding = () => {
  const faqs = [
    {
      q: "Is exosome hair treatment safe?",
      a: "It can be safe when done in a medical setting with proper product quality and hygiene. But the field still has uncertainties, and quality varies by supplier.",
    },
    {
      q: "Is exosome therapy FDA approved for hair loss?",
      a: "No. The FDA has stated there are no FDA-approved exosome products and has issued safety communications about unapproved exosome products.",
    },
    {
      q: "How long does it take to work?",
      a: "Many clinics describe visible improvement over 3 to 6 months, with earlier changes like reduced shedding sometimes appearing sooner.",
    },
    {
      q: "Is it better than PRP?",
      a: "Not always. Some respond well to PRP, some prefer exosomes. Many clinics combine approaches. The best choice depends on your diagnosis.",
    },
    {
      q: "Can women do this treatment?",
      a: "Yes. Many protocols are marketed for both men and women with thinning hair or shedding, especially in early stages.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative overflow-hidden bg-linear-to-br from-cream via-white to-light"
        >
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
          <div className="container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-5 h-5 text-wine" />
                  <span className="text-sm font-medium text-wine font-inter">
                    Non-Surgical Hair Restoration
                  </span>
                </motion.div>

                <h1 className="font-georgia text-5xl lg:text-7xl text-brown leading-tight">
                  Bring Back
                  <span className="block text-wine">Thicker Hair</span>
                  Without Surgery
                </h1>

                <p className="text-lg text-taupe font-inter leading-relaxed">
                  Exosome hair treatment supports your scalp and weak follicles
                  with regenerative signals. A modern option for early thinning
                  in Kuala Lumpur.
                </p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group relative overflow-hidden bg-wine text-white px-8 py-4 rounded-full font-inter font-medium hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">Start Your Assessment</span>
                    <div className="absolute inset-0 bg-rose transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter font-medium hover:bg-wine hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-wine" />
                    <h3 className="font-georgia text-2xl text-brown">
                      Trust at a Glance
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "MOH registered, doctor-led clinic",
                      "Medical approach to hair thinning",
                      "Clear advice on outcomes & alternatives",
                      "Combine with PRP when suitable",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInLeft}
                        custom={i}
                        className="flex items-center gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="font-inter">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Hair Loss Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                If hair loss is hurting your confidence,
                <span className="text-wine"> you are not alone</span>
              </h2>
              <p className="text-lg text-taupe font-inter">
                Hair loss changes how you feel in photos, how you style your
                hair. In KL, we see this every day. Stress, hormones, genetics,
                and scalp inflammation can all play a role.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Droplets,
                  title: "Scalp Inflammation",
                  desc: "A key factor in hair thinning",
                },
                {
                  icon: Activity,
                  title: "Hormonal Changes",
                  desc: "Affecting both men and women",
                },
                {
                  icon: Target,
                  title: "Genetic Factors",
                  desc: "Early intervention helps",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group bg-linear-to-br from-cream to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What are Exosomes */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                  What is exosome hair treatment?
                  <span className="block text-wine text-2xl mt-2">
                    (In simple words)
                  </span>
                </h2>
                <p className="text-lg text-taupe font-inter leading-relaxed">
                  Exosomes are tiny "message carriers" released by cells. They
                  carry signals like proteins and genetic instructions that
                  influence how other cells behave.
                </p>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white">
                  <h3 className="font-georgia text-brown text-xl mb-4">
                    They help:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Support scalp repair and recovery",
                      "Reduce inflammation signals",
                      "Encourage healthier follicle activity",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-brown"
                      >
                        <Plus className="w-4 h-4 text-wine" />
                        <span className="font-inter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700 font-inter">
                    Important: Exosome therapies are still evolving. Evidence is
                    growing, but regulation and product quality vary widely.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-6"
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <ShieldCheck className="w-10 h-10 text-wine mb-3" />
                    <h4 className="font-georgia text-brown mb-2">
                      Non-surgical
                    </h4>
                    <p className="text-sm text-taupe">
                      Minimal downtime, quick sessions
                    </p>
                  </div>
                  <div className="bg-wine p-6 rounded-2xl shadow-xl text-white">
                    <Calendar className="w-10 h-10 mb-3" />
                    <h4 className="font-georgia mb-2">Results in 3-6 months</h4>
                    <p className="text-sm opacity-90">
                      Visible improvement timeline
                    </p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <Syringe className="w-10 h-10 text-wine mb-3" />
                    <h4 className="font-georgia text-brown mb-2">
                      Combine with PRP
                    </h4>
                    <p className="text-sm text-taupe">Enhanced results</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Research & Evidence */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                Does exosome treatment
                <span className="text-wine"> really work?</span>
              </h2>
              <p className="text-lg text-taupe font-inter">
                Research is promising, but it's not "magic".
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  year: "2025",
                  title: "Systematic Review",
                  desc: "Consistent improvements in hair density and thickness across multiple studies",
                  icon: FileText,
                },
                {
                  year: "2025",
                  title: "Comparative Study",
                  desc: "Exosomes vs PRP and minoxidil for androgenetic alopecia",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  whileHover={{ scale: 1.02 }}
                  className="bg-linear-to-br from-cream to-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wine rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-wine font-semibold">
                        {item.year}
                      </span>
                      <h3 className="font-georgia text-xl text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-taupe font-inter">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Safety & Regulation */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-brown to-wine text-white"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="font-georgia text-4xl lg:text-5xl mb-8">
                Safety and regulation
                <span className="block text-cream text-xl mt-2 font-inter">
                  This matters more than marketing
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  "The U.S. FDA has warned there are no FDA-approved exosome products",
                  "ISEV highlights uncertainties and importance of quality control",
                  "2024 paper explains why product approvals face challenges",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInLeft}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                  >
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p className="font-inter">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-8 p-6 bg-cream text-brown rounded-2xl"
              >
                <h3 className="font-georgia text-xl mb-3">
                  What you should do in Malaysia:
                </h3>
                <p className="font-inter">
                  Choose a doctor-led clinic. Ask about product source and
                  documentation. Avoid places that promise guaranteed regrowth
                  or "permanent cure".
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Who is it for */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                Who is exosome hair treatment for?
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-green-50 to-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  Ideal for:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Widening part lines or crown thinning",
                    "Early male/female pattern hair loss",
                    "Increased shedding after stress/illness",
                    "Want non-surgical options",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Plus className="w-4 h-4 text-green-600" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-rose-50 to-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  May not suit:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Active scalp infection",
                    "Bleeding disorders",
                    "Severe baldness (inactive follicles)",
                    "Uncontrolled scalp dermatitis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Minus className="w-4 h-4 text-rose-600" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Target Areas */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="font-georgia text-2xl text-center text-brown mb-8">
                Areas we can target
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Hairline & Temples",
                  "Crown & Vertex",
                  "Diffuse Thinning",
                  "Scalp Health",
                ].map((area, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-cream text-brown rounded-full font-inter shadow-md hover:shadow-lg transition-all"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Procedure Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                How it's done
                <span className="block text-wine text-2xl mt-2">
                  (What to expect)
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Scalp Assessment",
                    desc: "History review and analysis",
                  },
                  {
                    step: "02",
                    title: "Preparation",
                    desc: "Cleansing and optional numbing",
                  },
                  {
                    step: "03",
                    title: "Controlled Delivery",
                    desc: "Micro-infusion or injections",
                  },
                  {
                    step: "04",
                    title: "Aftercare",
                    desc: "Simple but important instructions",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="font-georgia text-3xl text-wine opacity-30">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-georgia text-xl text-brown mb-1">
                        {item.title}
                      </h3>
                      <p className="text-taupe font-inter">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-2xl"
              >
                <CalendarClock className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Session Details
                </h3>
                <p className="text-lg text-taupe mb-6">
                  60-90 minutes per session
                </p>
                <div className="space-y-4">
                  <h4 className="font-georgia text-brown">Delivery Methods:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      <span className="font-inter">Scalp micro-infusion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      <span className="font-inter">Targeted injections</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                Results Timeline
                <span className="block text-wine text-xl mt-2 font-inter">
                  (What's realistic)
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  period: "2-4 weeks",
                  desc: "Scalp feels healthier, reduced shedding",
                  icon: Activity,
                },
                {
                  period: "1-3 months",
                  desc: "Early thickening, improved density",
                  icon: TrendingUp,
                },
                {
                  period: "3-6 months",
                  desc: "Visible improvement in coverage",
                  icon: Sparkles,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-linear-to-b from-cream to-white rounded-3xl shadow-xl"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-georgia text-2xl text-wine mb-2">
                    {item.period}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                Exosome vs Other Treatments
              </h2>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <thead className="bg-wine text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-georgia">Option</th>
                    <th className="px-6 py-4 text-left font-georgia">
                      Best for
                    </th>
                    <th className="px-6 py-4 text-left font-georgia">
                      Downtime
                    </th>
                    <th className="px-6 py-4 text-left font-georgia">
                      What it does
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream">
                  {[
                    [
                      "Exosome",
                      "Early to moderate thinning",
                      "Low",
                      "Regeneration signals",
                    ],
                    [
                      "PRP",
                      "Hair shedding + thinning",
                      "Low",
                      "Uses your growth factors",
                    ],
                    [
                      "Mesotherapy",
                      "Scalp support",
                      "Low",
                      "Nutrients + stimulation",
                    ],
                    [
                      "Medication",
                      "Pattern loss",
                      "None",
                      "Maintains follicles",
                    ],
                    [
                      "Transplant",
                      "Advanced loss",
                      "Higher",
                      "Moves hair to bald areas",
                    ],
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      whileHover={{
                        backgroundColor: "rgba(140, 79, 88, 0.05)",
                      }}
                      className="transition-colors"
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 font-inter text-brown">
                          {cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                Cost in Kuala Lumpur
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-cream p-8 rounded-3xl">
                  <DollarSign className="w-12 h-12 text-wine mb-4" />
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    Pricing Factors
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Area size (hairline vs full top)",
                      "Number of sessions needed",
                      "Exosome product quality",
                      "Combination with PRP",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                        <span className="font-inter text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border border-wine rounded-2xl">
                  <p className="text-sm text-taupe mb-2">Starting from</p>
                  <p className="font-georgia text-4xl text-wine">
                    RM 8,000
                    <span className="text-lg text-taupe">/session</span>
                  </p>
                  <p className="text-xs text-taupe mt-2">
                    *Varies by case and protocol
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-3xl shadow-2xl"
              >
                <h3 className="font-georgia text-2xl mb-6">
                  Nexus Clinic Approach
                </h3>
                <p className="font-inter text-white/90 mb-6">
                  We recommend budgeting only after an assessment. Pay for a
                  plan, not a promise.
                </p>
                <button className="w-full bg-white text-wine py-4 rounded-xl font-inter font-semibold hover:shadow-xl transition-all">
                  Book Assessment
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-brown to-wine text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <MessageCircle className="w-16 h-16 mx-auto mb-8 opacity-75" />
              <h2 className="font-georgia text-4xl lg:text-5xl mb-6">
                Ready to talk to a doctor in KL?
              </h2>
              <p className="text-xl font-inter text-white/90 mb-8">
                Start with an assessment at Nexus Clinic Kuala Lumpur. We'll
                explain what you actually need, what you can skip, and what
                results are realistic.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-5 rounded-full font-inter font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Schedule Your Assessment
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ExosomeLanding;
