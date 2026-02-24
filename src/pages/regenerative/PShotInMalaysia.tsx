import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  AlertCircle,
  Calendar,
  MessageCircle,
  Award,
  Activity,
  Sparkles,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Syringe,
  Microscope,
  Brain,
  Heart,
  MapPin,
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

const PShotLanding = () => {
  const faqs = [
    {
      q: "What is a P-Shot?",
      a: "A P-Shot (Priapus Shot) is an injection of platelet-rich plasma (PRP) made from your own blood and injected into the penis.",
    },
    {
      q: "Does the P-Shot actually work for ED?",
      a: "Evidence is mixed. Some reviews show improvement, but there are also placebo-controlled studies showing no significant difference, and major urology guidance describes PRP as experimental.",
    },
    {
      q: "Is the P-Shot FDA approved?",
      a: "Cleveland Clinic describes it as experimental and notes limited evidence for common claims.",
    },
    {
      q: "Is P-Shot painful?",
      a: "Most providers use numbing cream or local anesthetic. You may still feel pressure or mild discomfort.",
    },
    {
      q: "How long does the P-Shot last?",
      a: "There is no fixed duration. Studies commonly measure outcomes over 1-6 months, and response varies by person and ED cause.",
    },
    {
      q: "How many sessions do I need?",
      a: "Protocols vary. Some clinics suggest one session, others recommend a series. Research highlights inconsistent protocols as a major limitation.",
    },
    {
      q: "Can the P-Shot increase penis size?",
      a: "Claims about size increase are not supported by strong scientific evidence, according to Cleveland Clinic.",
    },
    {
      q: "Can P-Shot help Peyronie's disease?",
      a: "Some clinics market it for Peyronie's disease, but high-quality evidence is limited. Nexus Clinic mentions Peyronie's as a possible use case with variable results.",
    },
    {
      q: "What are the side effects?",
      a: "Most commonly: mild swelling, bruising, and tenderness. Studies often report mild, transient side effects.",
    },
    {
      q: "How much does P-Shot cost in Malaysia?",
      a: "Many clinics list around RM 2,000 per session, but market ranges can be wider depending on provider and inclusions.",
    },
    {
      q: "Is P-Shot better than Viagra or Cialis?",
      a: "They do different jobs. Tablets improve blood flow short-term. P-Shot aims at tissue support over time.",
    },
    {
      q: "Do I need a check-up before doing P-Shot?",
      a: "Yes. ED can be linked to cardiovascular risk and other health issues, so medical screening is important.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7268396f49aa?q=80&w=1974"
              alt="Medical clinic interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown via-wine/80 to-rose/70" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-6 z-10 relative"
          >
            <motion.div variants={fadeInUp} className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-cream/20 backdrop-blur-sm text-cream rounded-full text-sm font-medium mb-6 border border-cream/30">
                Priapus Shot PRP Therapy
              </span>
              <h1 className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl text-cream mb-6 leading-tight">
                A stronger erection starts with better blood flow,{" "}
                <span className="text-cream italic">not more pressure.</span>
              </h1>
              <p className="text-xl text-cream/90 mb-8 max-w-2xl">
                If erections feel weaker, don't last, or confidence is dropping,
                you're not alone. The P-Shot is a PRP based option some men in
                Kuala Lumpur choose when they want a natural approach and a
                discreet clinic experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-cream text-brown rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule Private Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cream text-cream rounded-full font-semibold hover:bg-cream/10 transition-all"
                >
                  Call 016-7025699
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="absolute bottom-0 left-0 right-0 bg-cream/90 backdrop-blur-md border-t border-taupe"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-wrap justify-between items-center text-sm text-brown">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> LG10, Wisma UOA II, Jalan
                  Pinang
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Doctor-led evaluation first
                </span>
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Results vary, not
                  guaranteed
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* What is P-Shot */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-wine font-semibold tracking-wider text-sm">
                  UNDERSTANDING
                </span>
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mt-4 mb-6">
                  What Is the <span className="text-wine">P-Shot?</span>
                </h2>
                <div className="prose prose-lg text-brown/80 space-y-4">
                  <p>
                    The P-Shot (Priapus Shot) is an injection of platelet-rich
                    plasma (PRP) taken from your own blood and injected into the
                    penis. The idea is to deliver growth factors that may
                    support tissue repair and blood flow.
                  </p>
                  <p>
                    Clinics typically describe it as a non-surgical outpatient
                    procedure. Nexus Clinic KL explains the P-Shot as PRP
                    derived from your own blood, injected into the penis to
                    potentially stimulate blood flow and improve sensitivity,
                    with results varying by person.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-wine/20 to-rose/20 rounded-3xl transform rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
                  alt="Medical procedure preparation"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -left-6 bg-cream p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                  <Syringe className="w-8 h-8 text-wine mb-2" />
                  <p className="text-brown font-medium">
                    Non-surgical outpatient procedure using your own blood
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Evidence Section - Honest, Not Hype */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <AlertCircle className="w-12 h-12 text-wine mx-auto mb-4" />
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                A Very Important Note About Evidence
              </h2>
              <p className="text-xl text-brown/70 italic">(Honest, Not Hype)</p>
              <p className="text-brown/80 mt-6 text-lg">
                You will see big promises online. Some are marketing. Some are
                early research.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Microscope />,
                  title: "Cleveland Clinic",
                  desc: "Describes the P-Shot as experimental with limited evidence, including no strong proof for size increase claims.",
                },
                {
                  icon: <FileCheck />,
                  title: "2024 Systematic Review",
                  desc: "Found small to moderate benefits but highlighted limitations: small samples, mixed protocols, short follow-up.",
                },
                {
                  icon: <Award />,
                  title: "EAU/AUA Guidance",
                  desc: "Treats PRP as experimental for ED and Peyronie's disease.",
                },
                {
                  icon: <Brain />,
                  title: "PLOS ONE Meta-analysis",
                  desc: "PRP 'appears effective' but stressed need for higher-quality trials and longer follow-up.",
                },
                {
                  icon: <Heart />,
                  title: "2024 Placebo Study",
                  desc: "Found no significant difference versus placebo at 1, 3, and 6 months.",
                },
                {
                  icon: <Users />,
                  title: "SMSNA",
                  desc: "Explains P-Shot is being tested as experimental therapy for ED.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-taupe/20"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center text-wine mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown/70 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 p-8 bg-wine/10 rounded-3xl border border-wine/20"
            >
              <p className="text-brown text-lg font-medium text-center">
                So what should your website say? P-Shot may help some men, but
                results vary and it is not a guaranteed "cure." That is the
                safest and most truthful positioning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-8">
                  Who Is the <span className="text-wine">P-Shot</span> For?
                </h2>
                <div className="space-y-4">
                  {[
                    "Have mild to moderate erectile dysfunction",
                    "Want to improve erection quality and sensitivity",
                    "Prefer a 'natural' approach using your own PRP",
                    "Want a non-surgical option with minimal downtime",
                    "May be considered for Peyronie's disease (outcomes vary)",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-8">
                  Who Should <span className="text-wine">Not</span> Do a P-Shot
                </h2>
                <div className="bg-cream p-8 rounded-3xl">
                  <p className="text-brown font-medium mb-6">
                    You may not be a good candidate if you have:
                  </p>
                  <div className="space-y-4">
                    {[
                      "An active infection in the genital area",
                      "Bleeding disorders or on certain blood thinners",
                      "Severe uncontrolled diabetes or vascular disease",
                      "Unrealistic expectations like 'guaranteed size increase'",
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <XCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                        <p className="text-brown/80">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-brown/60 italic">
                    Also, if your main issue is sudden ED or you have chest pain
                    risk factors, you should be medically checked. ED can be a
                    marker of cardiovascular disease risk.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Realistic Goals */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                What the P-Shot Can Help With
              </h2>
              <p className="text-xl text-brown/70">(Realistic Goals)</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Activity />, title: "Better firmness" },
                {
                  icon: <Sparkles />,
                  title: "Better consistency",
                  subtitle: "less 'hit or miss'",
                },
                { icon: <Heart />, title: "Better sensitivity" },
                {
                  icon: <Users />,
                  title: "Better confidence",
                  subtitle: "in intimacy",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-light p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center text-wine mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-brown/60 text-sm">{item.subtitle}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 p-6 bg-light rounded-2xl border border-taupe/20"
            >
              <p className="text-brown/80 text-center">
                Nexus Clinic lists potential benefits like enhanced sensitivity,
                improved erectile function, enhanced blood flow, and improved
                sexual experience, while also noting results vary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What It Cannot Promise */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  What the P-Shot Probably Cannot Promise
                </h2>
                <p className="text-brown/70">
                  Some common claims online are not strongly supported by
                  evidence.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    claim: '"It increases penis size"',
                    fact: "Cleveland Clinic states this claim is not supported by scientific evidence.",
                  },
                  {
                    claim: '"It cures ED for everyone"',
                    fact: "Not true. Evidence is mixed and professional societies describe PRP in sexual medicine as experimental.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-cream p-6 rounded-2xl"
                  >
                    <p className="text-lg font-medium text-wine mb-2">
                      {item.claim}
                    </p>
                    <p className="text-brown/80">{item.fact}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 text-center text-brown font-medium italic"
              >
                So the best promise is this: We assess your ED type, improve the
                factors we can, and choose the safest treatment path.
              </motion.p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                How the P-Shot Works
              </h2>
              <p className="text-xl text-brown/70">(In Easy Words)</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Blood Draw",
                  desc: "Your blood contains platelets that release growth factors involved in healing.",
                  img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2080",
                },
                {
                  step: "02",
                  title: "PRP Creation",
                  desc: "PRP is created by spinning blood to concentrate platelets.",
                  img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2070",
                },
                {
                  step: "03",
                  title: "The Theory",
                  desc: "Growth factors may support tissue repair, blood flow, and sensitivity over time.",
                  img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-cream font-bold text-xl z-10">
                    {item.step}
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 text-center text-brown italic"
            >
              Again, this is the theory and early evidence, not a guarantee.
            </motion.p>
          </div>
        </section>

        {/* What to Expect at Nexus Clinic */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                What to Expect at Nexus Clinic
              </h2>
              <p className="text-xl text-brown/70">Kuala Lumpur</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  step: "Step 1",
                  title: "Private consultation and screening",
                  desc: "You'll be evaluated to see if you are a candidate, and may do a blood test (including testosterone checks in some cases).",
                  details: [
                    "blood flow issues",
                    "hormones",
                    "stress",
                    "medications",
                    "diabetes and cholesterol",
                  ],
                },
                {
                  step: "Step 2",
                  title: "Blood draw and PRP preparation",
                  desc: "Blood is drawn from your arm and processed in a centrifuge to isolate PRP.",
                },
                {
                  step: "Step 3",
                  title: "Numbing and injection",
                  desc: "Many providers use numbing cream or local anesthetic to reduce discomfort.",
                },
                {
                  step: "Step 4",
                  title: "Short observation and you go home",
                  desc: "It is usually an outpatient visit. Nexus Clinic describes it as non-surgical.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <div className="bg-cream p-6 rounded-2xl hover:shadow-lg transition-all">
                    <span className="text-sm font-semibold text-wine tracking-wider">
                      {item.step}
                    </span>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brown/80 mb-3">{item.desc}</p>
                    {item.details && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.details.map((detail, didx) => (
                          <span
                            key={didx}
                            className="px-3 py-1 bg-light text-brown rounded-full text-sm border border-taupe/20"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Downtime and Aftercare */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-6">
                  Downtime and Aftercare
                </h2>
                <p className="text-brown/80 mb-6">
                  Most clinics market P-Shot as low downtime. Nexus Clinic's
                  page says there is no downtime and normal activities can be
                  resumed, with possible minor bruising or swelling.
                </p>
                <div className="bg-light p-6 rounded-2xl">
                  <p className="font-medium text-brown mb-3">
                    A practical, safe approach is:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown/80">
                        Take it easy for the rest of the day
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Activity className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown/80">
                        Avoid intense exercise for a short period if you bruise
                        easily
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown/80">
                        Contact the clinic if you get severe pain, fever, or
                        unusual swelling
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070"
                  alt="Recovery and care"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-wine p-6 rounded-2xl text-cream max-w-xs">
                  <Calendar className="w-8 h-8 mb-2" />
                  <p className="font-medium">
                    Results vary: some report changes within weeks, others need
                    longer
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                P-Shot Cost in Malaysia
              </h2>
              <p className="text-xl text-brown/70">Kuala Lumpur</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  clinic: "Nexus Clinic",
                  price: "RM 2,000",
                  note: "as reported in their content",
                },
                {
                  clinic: "Premier Clinic",
                  price: "RM 2,000",
                  note: "P-Shot & O-Shot",
                },
                {
                  clinic: "Market Range",
                  price: "RM 1,500 - RM 6,000",
                  note: "broader range",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-cream p-6 rounded-2xl text-center hover:shadow-xl transition-all"
                >
                  <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                    {item.clinic}
                  </h3>
                  <p className="text-3xl font-bold text-wine mb-2">
                    {item.price}
                  </p>
                  <p className="text-sm text-brown/60">{item.note}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 text-center text-brown/70 italic"
            >
              Best practice: ask if the quote includes consultation, numbing,
              follow-up, and any optional add-ons.
            </motion.p>
          </div>
        </section>

        {/* Competitor Snapshot */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                Quick Competitor Snapshot
              </h2>
              <p className="text-xl text-brown/70">
                What Top Clinics in KL Are Doing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  clinic: "Alpha Clinic",
                  angle:
                    "Mont Kiara - 'longer, stronger erections' with testimonials",
                },
                {
                  clinic: "HE Medical Clinic",
                  angle: "Markets P-Shots with 'revolutionised' approach",
                },
                {
                  clinic: "PULSE Clinic",
                  angle: "Lists ED services with P-Shot as treatment option",
                },
                {
                  clinic: "Premier Clinic",
                  angle:
                    "Positions P-Shot and O-Shot together with clear pricing",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-light p-4 rounded-xl border border-taupe/20"
                >
                  <h3 className="font-bold text-brown mb-1">{item.clinic}</h3>
                  <p className="text-sm text-brown/70">{item.angle}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 p-8 bg-wine/10 rounded-3xl border border-wine/20"
            >
              <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                How Nexus Clinic KL can stand out
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>
                    Clear explanation that PRP is from your own blood and
                    results vary
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>
                    A safety-first consult (and hormone screening when relevant)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                  <span>
                    A structured ED plan that considers lifestyle, circulation,
                    hormones, and stress
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7268396f49aa?q=80&w=1974"
              alt="Clinic background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                Ready for a Private Consultation?
              </h2>
              <p className="text-xl text-brown/80 mb-8">
                If you're searching for P-Shot in Malaysia or P-Shot in Kuala
                Lumpur, start with a private consult and a clear plan. Not
                guesswork.
              </p>

              <div className="bg-light p-8 rounded-3xl shadow-2xl mb-8">
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                  Nexus Clinic Kuala Lumpur
                </h3>
                <p className="text-brown/70 mb-2">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang
                </p>
                <p className="text-brown/70 mb-4">50450 Kuala Lumpur</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:016-7025699"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-wine text-cream rounded-full font-semibold hover:bg-rose transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    016-7025699
                  </a>
                  <a
                    href="tel:03-21635699"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-wine text-wine rounded-full font-semibold hover:bg-wine hover:text-cream transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    03-21635699
                  </a>
                </div>
              </div>

              <p className="text-sm text-brown/60">
                *Results vary and are not guaranteed. Medical consultation
                required before treatment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Credits - hidden but included for reference */}
        <div className="hidden">
          Images used: - Hero: Medical clinic interior - What is P-Shot: Medical
          procedure preparation - How it works: Blood draw, centrifuge, medical
          procedure - Downtime: Recovery and care - CTA background: Clinic
          interior
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PShotLanding;
