import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Shield,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Award,
  Layers,
  Droplets,
  Star,
  Scale,
  RefreshCw,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const ShockwaveLanding = () => {
  const faqs = [
    {
      q: "Does shockwave therapy work for erectile dysfunction?",
      a: "It can help some men, especially mild to moderate vasculogenic ED. European guidance supports it for selected patients.",
    },
    {
      q: "How many shockwave sessions do I need for ED?",
      a: "Protocols vary. Many clinics use 6 sessions, while some use 12 sessions depending on severity and response.",
    },
    {
      q: "Is shockwave therapy painful?",
      a: "Typically described as pain-free or mildly uncomfortable. Energy can be adjusted.",
    },
    {
      q: "How long does shockwave therapy take to work?",
      a: "Many notice changes within 1 to 3 months, with improvement continuing over several months.",
    },
    {
      q: "How long do results last?",
      a: "Benefits may last around 1 to 2 years in responders, but results are not permanent for everyone.",
    },
    {
      q: "Is shockwave therapy approved for ED?",
      a: "In the US, FDA has not approved Li-ESWT specifically for ED. Malaysia has different regulatory pathways.",
    },
    {
      q: "What are the risks or side effects?",
      a: "Usually mild: temporary redness or tenderness. Some studies report no significant adverse effects.",
    },
    {
      q: "Can shockwave therapy replace Viagra or Cialis?",
      a: "Sometimes reduces reliance, but many still use medication. ESWT is restorative, tablets are short-term support.",
    },
    {
      q: "What is the cost of shockwave therapy in Malaysia?",
      a: "RM 1,000 to RM 3,000 per session. Package pricing such as RM 4,500 for 6 sessions.",
    },
    {
      q: "Is 'radial wave therapy' the same as shockwave for ED?",
      a: "Not really. Cleveland Clinic warns radial wave has not been proven effective for ED.",
    },
    {
      q: "Who should not do shockwave therapy for ED?",
      a: "Men whose ED is mainly due to nerve damage or psychological causes typically do not respond well.",
    },
    {
      q: "Where can I get shockwave therapy in Kuala Lumpur?",
      a: "Nexus Clinic Kuala Lumpur at Wisma UOA II, Jalan Pinang offers centrally located ESWT.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="w-full bg-light overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1887"
              alt="Modern medical clinic interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown/90 to-wine/80" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 z-10 text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-cream/20 backdrop-blur-sm rounded-full text-cream font-inter text-sm tracking-wider">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl text-cream mb-6 leading-tight"
            >
              Fix the blood flow problem,
              <br />
              <span className="italic">not just the moment</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto font-inter"
            >
              If erections feel weaker, inconsistent, or don't last, Shockwave
              Therapy (ESWT) offers a non-surgical path to healthier blood flow
              and more natural erections.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-cream text-brown rounded-full font-inter font-semibold hover:bg-taupe hover:text-cream transition-all duration-300 shadow-xl">
                Schedule Private Consult
              </button>
              <button className="px-8 py-4 border-2 border-cream text-cream rounded-full font-inter font-semibold hover:bg-cream hover:text-brown transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream"
          >
            <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cream rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-wine"
              >
                <MapPin className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Central KL Location
                </h3>
                <p className="font-inter text-taupe">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
                <p className="font-inter text-rose mt-2 font-semibold">
                  016-7025699 / 03-21635699
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-wine"
              >
                <Heart className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-georgia text-xl text-brown mb-2">
                  Medical First Approach
                </h3>
                <p className="font-inter text-taupe">
                  Proper medical check first because ED can be a risk marker for
                  underlying cardiovascular disease
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-wine"
              >
                <Award className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-georgia text-xl text-brown mb-2">
                  International Standards
                </h3>
                <p className="font-inter text-taupe">
                  Europe supports ESWT for selected men, AUA classifies as
                  investigational - we ensure clear expectations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What is ESWT Section with Image */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-inter text-sm tracking-wider uppercase mb-2 block">
                  Understanding
                </span>
                <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                  What is Shockwave Therapy (ESWT)?
                </h2>
                <p className="font-inter text-taupe text-lg mb-6">
                  Shockwave Therapy for ED usually means low-intensity
                  extracorporeal shockwave therapy (Li-ESWT).
                </p>
                <div className="bg-cream p-6 rounded-xl mb-6">
                  <p className="font-inter text-brown">
                    A handheld device delivers gentle sound waves to targeted
                    areas, stimulating healing responses that may improve penile
                    blood flow and erection quality over time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <p className="font-inter text-rose">
                    Important: Not the same as powerful shockwaves used to break
                    kidney stones. Low-intensity therapy stimulates tissue
                    repair, not destroy tissue.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute -top-4 -right-4 w-64 h-64 bg-cream rounded-full -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1880"
                  alt="Medical shockwave therapy device"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-wine text-cream p-4 rounded-xl shadow-lg">
                  <p className="font-georgia text-sm">Li-ESWT</p>
                  <p className="font-inter text-xs opacity-80">
                    Low-Intensity Therapy
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why ED Happens Section */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Why ED happens
              </h2>
              <p className="font-inter text-xl text-taupe">
                and why shockwave is even discussed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="font-inter text-brown text-lg leading-relaxed">
                    A strong erection depends heavily on healthy blood flow.
                    Anything that reduces circulation can reduce erection
                    quality.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Activity, text: "Diabetes" },
                    { icon: Heart, text: "Hypertension" },
                    { icon: TrendingUp, text: "High Cholesterol" },
                    { icon: XCircle, text: "Smoking" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="font-inter text-brown">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-wine p-6 rounded-xl">
                  <p className="font-inter text-cream font-semibold">
                    That's also why ED is often described as an early health
                    signal, not just a bedroom issue.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <img
                  src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=1887"
                  alt="Medical consultation with doctor"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* How ESWT Works */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                How does ESWT work for ED?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Sparkles,
                  title: "Growth Factors",
                  desc: "Stimulate growth factors and blood vessel repair responses",
                },
                {
                  icon: Droplets,
                  title: "Angiogenesis",
                  desc: "Support new microvessel development",
                },
                {
                  icon: Activity,
                  title: "Endothelial Function",
                  desc: "Improve endothelial function and local circulation",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-8 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-cream" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-r from-brown to-wine p-8 rounded-2xl text-cream"
            >
              <p className="font-inter text-lg leading-relaxed">
                This is the "restorative" appeal. Pills can help blood flow for
                a few hours. Shockwave aims to improve the underlying vascular
                function over weeks and months.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Not All Shockwave is Same */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl text-brown mb-6">
                  Not all "Shockwave Therapy" is the same
                </h2>
                <p className="font-inter text-taupe text-lg mb-8">
                  This matters a lot in Kuala Lumpur because many places market
                  "wave therapy" in different forms.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                  <h3 className="font-georgia text-xl text-wine mb-3">
                    Focused Li-ESWT vs radial wave therapy
                  </h3>
                  <p className="font-inter text-brown">
                    Some clinics advertise shockwave therapy but use radial wave
                    devices. Cleveland Clinic warns radial wave therapy does not
                    deliver the same energy and has not been shown to resolve ED
                    in scientific studies.
                  </p>
                </div>

                <div className="bg-wine p-6 rounded-xl">
                  <p className="font-inter text-cream font-semibold">
                    Yale Urology: Radial waves deliver much lower energy and
                    have not shown benefits for ED in studies.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-rose">
                  <h4 className="font-georgia text-brown mb-2">
                    Ask your clinic:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Is it focused Li-ESWT intended for ED?",
                      "What device is used and what protocol is followed?",
                      "What outcomes are you tracking (IIEF score, erection hardness, medication use)?",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="font-inter text-taupe">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1887"
                  alt="Medical equipment comparison"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Who is Shockwave For */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Who is Shockwave Therapy for?
              </h2>
              <p className="font-inter text-taupe">
                Best evidence supports mild to moderate vasculogenic ED,
                especially when blood flow is the main issue.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-wine" />
                  Good Candidates
                </h3>
                <ul className="space-y-4">
                  {[
                    "You still get partial erections, but they are weak or inconsistent",
                    "You respond somewhat to tablets like sildenafil or tadalafil, but want a more restorative option",
                    "You prefer a drug-free approach, or want to reduce reliance on pills over time",
                    "You are a poor responder to PDE5 inhibitors and want alternatives",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-rose" />
                  May Not Benefit
                </h3>
                <ul className="space-y-4">
                  {[
                    "Nerve damage (post-surgery cases)",
                    "Severe psychological causes without vascular issues",
                    "Very severe, long-standing ED",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-inter text-wine mt-6 italic">
                  This is why screening matters.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Process at Nexus Clinic */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                What happens at Nexus Clinic Kuala Lumpur
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Private consult and root-cause check",
                  desc: "Duration, consistency, lifestyle, stress, medical risk factors like diabetes, blood pressure, and cholesterol",
                },
                {
                  step: "02",
                  title: "Optional labs if needed",
                  desc: "Hormone checks if libido is low or fatigue is present",
                },
                {
                  step: "03",
                  title: "ESWT sessions",
                  desc: "No anesthesia, 15-20 minute sessions, series of sessions tailored to individual needs",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-8 rounded-2xl shadow-lg relative"
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-cream font-georgia text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3 mt-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-wine p-6 rounded-xl">
              <p className="font-inter text-cream text-center">
                Guidelines encourage clinicians to counsel that ED can be a risk
                marker for underlying cardiovascular disease and warrants
                evaluation.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Sessions & Results */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div>
                  <h2 className="font-georgia text-3xl text-brown mb-4">
                    How many sessions do you need?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "6 sessions over a few weeks (very common)",
                      "6 vs 12 session protocols compared in trials",
                      "Plan matches your ED severity and response",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-wine shrink-0 mt-1" />
                        <span className="font-inter text-taupe">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-georgia text-3xl text-brown mb-4">
                    When will you see results?
                  </h2>
                  <div className="bg-cream p-6 rounded-xl">
                    <p className="font-inter text-brown">
                      Improvements within 1 to 3 months, with continued
                      improvement over several months in responders.
                    </p>
                    <p className="font-inter text-wine mt-3">
                      Study: 63.5% achieved erections sufficient for penetration
                      at 18 months in PDE5 inhibitor non-responders.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-georgia text-3xl text-brown mb-4">
                    How long do results last?
                  </h2>
                  <p className="font-inter text-taupe">
                    Cleveland Clinic notes benefits may last about one to two
                    years for some patients. Effects not permanent; some choose
                    maintenance sessions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1887"
                  alt="Medical consultation and treatment planning"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pros & Cons */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Pros and Cons of Shockwave Therapy
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Non-surgical, no anesthesia for most protocols",
                    "Targets vascular causes instead of only treating symptoms",
                    "Minimal downtime",
                    "Can be used alone or alongside PDE5 inhibitors",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-rose mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Not guaranteed, results vary",
                    "Needs course of sessions - time and cost",
                    "Evidence debated: EAU supports, AUA investigational",
                    "Not ideal for every ED type",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Side Effects & Safety */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl text-brown mb-6">
                  Side effects and safety
                </h2>
                <div className="bg-cream p-8 rounded-2xl">
                  <p className="font-inter text-brown mb-4">
                    Most reports describe mild side effects:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Temporary redness",
                      "Mild discomfort in specific spot",
                      "Minor tenderness",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-wine shrink-0" />
                        <span className="font-inter text-taupe">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-inter text-wine">
                    Cleveland Clinic: Procedure typically pain-free, energy
                    adjustable. 18-month study reported no adverse side effects.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <img
                  src="/images/clinic/medical.png"
                  alt="Safe medical procedure"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Shockwave Therapy cost in Malaysia
              </h2>
              <p className="font-inter text-taupe">
                Prices vary by clinic, device type, and number of sessions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  range: "RM 1,000 - RM 3,000",
                  desc: "Per session",
                  icon: Scale,
                },
                {
                  range: "RM 4,500",
                  desc: "6 sessions package (industry reference)",
                  icon: Layers,
                },
                {
                  range: "6 to 12",
                  desc: "Sessions typically needed",
                  icon: RefreshCw,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <item.icon className="w-10 h-10 text-wine mx-auto mb-3" />
                  <div className="font-georgia text-2xl text-brown mb-1">
                    {item.range}
                  </div>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine p-6 rounded-xl text-cream"
            >
              <p className="font-inter">
                Your real cost depends on: number of sessions, whether ED
                evaluation and lab work are included, and if you combine with
                medication or regenerative options.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                ESWT vs Other Treatments
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "vs ED Tablets",
                  desc: "Tablets help short-term. ESWT aims to improve pathways over time. Many use both.",
                },
                {
                  title: "vs P-Shot (PRP)",
                  desc: "PRP and shockwave discussed together. Some guidelines classify PRP as experimental.",
                },
                {
                  title: "vs Injections",
                  desc: "Injections work but more invasive. Used differently in treatment ladder.",
                },
                {
                  title: "vs Penile Implants",
                  desc: "Surgical option for severe ED. Many consider ESWT earlier as non-surgical.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-6 rounded-xl"
                >
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Competitor Review */}
        <section className="py-24 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-4xl text-brown mb-4">
                Quick competitor review
              </h2>
              <p className="font-inter text-taupe">
                How Nexus Clinic KL stands out
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  clinic: "He Medical Clinic",
                  focus: "Non-surgical ESWT, blood flow messaging",
                },
                {
                  clinic: "The Alpha Clinic",
                  focus: "20-min sessions, 4-6 weekly, no downtime",
                },
                {
                  clinic: "Universal Clinic",
                  focus: "Strong pricing, 6-session package, affordable",
                },
                {
                  clinic: "Vivardi Clinics",
                  focus: "Men over 35, mild to moderate ED, drug-free",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="font-georgia text-lg text-wine mb-2">
                    {item.clinic}
                  </h3>
                  <p className="font-inter text-sm text-taupe">{item.focus}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine p-8 rounded-2xl text-cream"
            >
              <h3 className="font-georgia text-2xl mb-4">
                How Nexus Clinic KL stands out:
              </h3>
              <ul className="space-y-3">
                {[
                  "Make it medical, not just marketing. ED is a cardiovascular risk marker, so screening matters.",
                  "Be transparent about device type (focused Li-ESWT vs radial).",
                  "Offer a full pathway: lifestyle, hormone review, medication support, regenerative options, and ESWT in one plan.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 shrink-0 mt-1" />
                    <span className="font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1887"
              alt="Clinic interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown to-wine opacity-90" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl text-cream mb-6"
            >
              Start with a private consult and a clear plan
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto"
            >
              A plan that fits your ED type, your health, and your goals
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button className="px-8 py-4 bg-cream text-brown rounded-full font-inter font-semibold hover:bg-taupe hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-cream space-y-2">
              <p className="font-inter flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="font-inter flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                016-7025699 / 03-21635699
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShockwaveLanding;
