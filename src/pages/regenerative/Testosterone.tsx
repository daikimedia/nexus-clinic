import { motion } from "framer-motion";
import {
  Activity,
  Droplets,
  Heart,
  Brain,
  Moon,
  Dumbbell,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  FlaskRound as Flask,
  Syringe,
  Pill,
  AlertTriangle,
  Phone,
  MapPin,
  HeartPulse,
  Zap,
  Scale,
  Sparkles,
  BarChart3,
  Thermometer,
  Briefcase,
  Award,
  Star,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInRight,
  scaleIn,
  fadeInLeft,
} from "../../lib/animations";
import React from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const TestosteroneLanding = () => {
  const images = {
    doctorConsultation:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    labTesting:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    clinicInterior:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
    patientCare: "/images/treatment/happy-patient.png",
  };
  const faqs = [
    {
      q: "How do I know if I need testosterone therapy?",
      a: "If you have symptoms like low energy, low libido, brain fog, or reduced strength, the next step is a medical review and blood tests. Diagnosis usually requires symptoms plus consistently low results on repeat morning tests.",
    },
    {
      q: "Is testosterone therapy safe?",
      a: "It can be safe when prescribed for true deficiency and monitored. You need follow-ups because side effects like increased red blood cells and blood pressure changes can occur.",
    },
    {
      q: "How long does it take for TRT to work?",
      a: "Many men notice changes within weeks, but full benefits can take months. Clinicians often check levels around 30 days after starting, and sexual function changes may take longer.",
    },
    {
      q: "What are the side effects of TRT?",
      a: "Possible side effects include acne, fluid retention, breast tenderness, increased red blood cell count, and possible worsening of sleep apnea. Monitoring is part of safe care.",
    },
    {
      q: "Can TRT cause infertility?",
      a: "Yes. TRT can reduce sperm count and fertility. If you want children, talk to your doctor before starting, because alternatives may be considered in specialist care.",
    },
    {
      q: "Can I increase testosterone naturally?",
      a: "Sometimes, yes. Sleep, strength training, healthy weight, and stress reduction can support testosterone. Supplements are a different story and many are not well regulated.",
    },
    {
      q: "How much does testosterone therapy cost in Malaysia?",
      a: "Typical published ranges vary by method. Injections around RM 800-2,500 per session and gels/pouches around RM 300-700 per month, but your total depends on labs and follow-ups.",
    },
    {
      q: "Do I need blood tests before testosterone therapy?",
      a: "Yes. Always. Testing confirms deficiency and rules out other causes. This is non-negotiable for safe care.",
    },
    {
      q: "Will TRT help with erectile dysfunction?",
      a: "TRT can help if ED is related to low testosterone, but ED has many causes. Some men may need separate ED treatment or a combined plan after assessment.",
    },
    {
      q: "Can I stop TRT once I start?",
      a: "Some men stop if symptoms do not improve after a trial period, or if side effects appear. Always stop only with medical guidance.",
    },
    {
      q: "Does TRT increase heart risk?",
      a: "Large trial evidence (TRAVERSE) found testosterone therapy was noninferior to placebo for major cardiovascular events. The FDA updated labeling in 2025 with blood pressure warnings. This is why monitoring matters.",
    },
    {
      q: "Which type of TRT is best: injections or gel?",
      a: "There is no 'best' for everyone. Injections may be convenient for some. Gels avoid needles but need daily use and careful handling to avoid transferring to others.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-color-light font-inter overflow-hidden">
        {/* Hero Section with Image Background */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={images.clinicInterior}
              alt="Nexus Clinic Modern Interior"
              className="w-full h-full object-cover opacity-20"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-cream) 0%, rgba(243, 239, 238, 0.9) 50%, var(--color-cream) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <motion.div
              variants={fadeInUp}
              className="inline-block p-4 mb-6 rounded-2xl"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--color-taupe)",
              }}
            >
              <HeartPulse
                className="w-8 h-8"
                style={{ color: "var(--color-wine)" }}
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia mb-6 leading-tight"
              style={{ color: "var(--color-brown)" }}
            >
              You're not "just getting older."
              <br />
              <span style={{ color: "var(--color-wine)" }}>
                You might be running low on testosterone.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              If you feel tired all the time, your drive is gone, and your
              workouts do not hit the same, it can be frustrating and confusing.
              At Nexus Clinic Kuala Lumpur, we help you check what's really
              happening, then build a safe plan that fits your body and your
              life.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl text-white font-semibold text-lg"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                Book Your Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                  color: "var(--color-brown)",
                  border: "1px solid var(--color-taupe)",
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Award />,
                  text: "Doctor-led assessment and clear next steps (no guessing, no hype)",
                },
                {
                  icon: <Flask />,
                  text: "Full hormone and health screening before treatment, with follow-up monitoring (this matters for safety)",
                },
                {
                  icon: <MapPin />,
                  text: "Central Kuala Lumpur location: LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur",
                },
                {
                  icon: <Shield />,
                  text: "Private, discreet care, because men's health is personal",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="mb-4" style={{ color: "var(--color-wine)" }}>
                    {item.icon}
                  </div>
                  <p className="text-white">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-2xl text-center"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.9 }}
            >
              <p className="text-white italic">
                Quick note: Testosterone therapy is a medical treatment, not a
                "performance upgrade." Good care starts with proper diagnosis
                and repeat testing.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What is TRT Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  What is Testosterone Therapy (TRT)?
                </h2>
                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--color-taupe)" }}
                >
                  Testosterone therapy, often called TRT (Testosterone
                  Replacement Therapy), is treatment that raises testosterone to
                  a healthy range for men who have:
                </p>
                <ul className="space-y-3">
                  {[
                    "symptoms, and",
                    "consistently low testosterone confirmed on blood tests (usually morning tests, repeated)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <p
                  className="mt-6 text-lg"
                  style={{ color: "var(--color-taupe)" }}
                >
                  Testosterone is linked to energy, sex drive, erections, mood,
                  sleep quality, muscle mass, fat distribution, and bone
                  strength. When it drops too low, you can feel like your
                  "engine" is always running on empty.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden group"
              >
                <img
                  src={images.doctorConsultation}
                  alt="Doctor consultation at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-wine) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/50 to-transparent">
                  <p className="text-white font-semibold">
                    Expert medical consultation at Nexus Clinic KL
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              Signs You Might Have Low Testosterone
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-center mb-12 max-w-3xl mx-auto italic"
              style={{ color: "var(--color-taupe)" }}
            >
              "I'm functioning... but I'm not myself."
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Zap />, text: "Low energy and constant tiredness" },
                {
                  icon: <Heart />,
                  text: "Lower sex drive, fewer morning erections",
                },
                { icon: <Activity />, text: "Erectile issues (sometimes)" },
                {
                  icon: <Brain />,
                  text: "Low mood, irritability, anxiety, loss of confidence",
                },
                { icon: <Sparkles />, text: "Brain fog, poor focus" },
                { icon: <Scale />, text: "More belly fat, less muscle" },
                { icon: <Dumbbell />, text: "Poor recovery after workouts" },
                { icon: <Moon />, text: "Sleep problems" },
              ].map((symptom, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    {React.cloneElement(symptom.icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{symptom.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              Important: these symptoms can also come from stress, poor sleep,
              obesity, thyroid issues, diabetes, depression, or sleep apnea.
              That's why testing and a proper medical review matter.
            </motion.p>
          </div>
        </motion.section>

        {/* Diagnosis Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                className="relative h-96 rounded-3xl overflow-hidden order-2 lg:order-1 group"
              >
                <img
                  src={images.labTesting}
                  alt="Advanced laboratory testing at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-brown) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/50 to-transparent">
                  <p className="text-white font-semibold">
                    State-of-the-art diagnostic equipment
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  How Diagnosis Works
                  <span
                    className="block text-xl mt-2"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    (What Good Clinics Do)
                  </span>
                </h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-8"
                  style={{ color: "var(--color-brown)" }}
                >
                  Medical guidelines recommend diagnosing low testosterone only
                  when symptoms and repeated lab results match.
                </motion.p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Clock />,
                      text: "Morning blood tests, sometimes fasting",
                    },
                    {
                      icon: <Calendar />,
                      text: "Repeat confirmation (because testosterone can fluctuate)",
                    },
                    {
                      icon: <BarChart3 />,
                      text: "A broader panel to understand why it's low and to set safe baselines (often includes blood count, lipids, liver markers, and sometimes PSA depending on age and risk)",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="p-2 rounded-lg shrink-0"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      >
                        {React.cloneElement(item.icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </div>
                      <p style={{ color: "var(--color-brown)" }}>{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Options Section with Image Cards */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              Testosterone Therapy Options in Malaysia
              <span
                className="block text-xl mt-2"
                style={{ color: "var(--color-taupe)" }}
              >
                (What You Can Choose)
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Syringe />,
                  title: "Injections",
                  desc: "Simple schedule, strong results, no daily application. Trade-offs: peaks and dips can happen.",
                  price: "RM 800-2,500/session",
                  image:
                    "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  icon: <Droplets />,
                  title: "Gels",
                  desc: "No needles, easy dose adjustment, steady daily rhythm. Must apply daily, risk of transfer.",
                  price: "RM 300-700/month",
                  image:
                    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  icon: <Pill />,
                  title: "Patches",
                  desc: "Less common than gels and injections, but still an option in some settings.",
                  price: "Varies",
                  image:
                    "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  icon: <Briefcase />,
                  title: "Pellets",
                  desc: "Rare in Malaysia, require minor procedure.",
                  price: "Contact for pricing",
                  image:
                    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, var(--color-brown) 0%, transparent 100%)",
                        opacity: 0.5,
                      }}
                    />
                  </div>
                  <div
                    className="p-6"
                    style={{ backgroundColor: "var(--color-light)" }}
                  >
                    <div
                      className="mb-3"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {option.icon}
                    </div>
                    <h3
                      className="text-xl font-georgia mb-2"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {option.title}
                    </h3>
                    <p
                      className="mb-4 text-sm"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      {option.desc}
                    </p>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {option.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Patient Care Image Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="text-white">
                <h2 className="text-4xl md:text-5xl font-georgia mb-6">
                  Private, Discreet, Professional Care
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  At Nexus Clinic Kuala Lumpur, we understand that men's health
                  is personal. Our approach combines medical expertise with
                  complete privacy and discretion.
                </p>
                <ul className="space-y-4">
                  {[
                    "One-on-one consultations in private rooms",
                    "Confidential medical records and testing",
                    "Flexible appointment scheduling",
                    "Continuity of care with the same doctor",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="w-5 h-5 shrink-0"
                        style={{ color: "var(--color-rose)" }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden group"
              >
                <img
                  src={images.patientCare}
                  alt="Private patient consultation at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-wine) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Rest of the sections remain the same but with enhanced styling */}
        {/* ... (sections from previous code from Results Timeline to CTA) ... */}

        {/* For brevity, I'll continue with the remaining sections but maintain the same pattern */}

        {/* Results Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              What Results to Expect (and When)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 italic"
              style={{ color: "var(--color-taupe)" }}
            >
              TRT is not instant. A realistic timeline helps you stay patient
              and safe.
            </motion.p>

            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"
                style={{ backgroundColor: "var(--color-rose)" }}
              />

              {[
                {
                  time: "Weeks",
                  desc: "Many men notice mood and body changes after a few weeks, and clinicians often re-check levels around the first month.",
                },
                {
                  time: "Months",
                  desc: "Sexual interest can improve within weeks, while erections and ejaculation changes may take longer, sometimes months.",
                },
                {
                  time: "3-6 Months",
                  desc: "If you have been on TRT for 3-6 months and nothing improves, your clinician may reassess whether testosterone was really the cause.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`w-5/12 p-6 rounded-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    style={{
                      backgroundColor: "var(--color-glass)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h3
                      className="text-2xl font-georgia mb-2"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {item.time}
                    </h3>
                    <p style={{ color: "var(--color-brown)" }}>{item.desc}</p>
                  </div>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12"
              style={{ color: "var(--color-brown)" }}
            >
              Benefits Men Commonly Want From TRT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Zap />, text: "Better energy and stamina" },
                {
                  icon: <Heart />,
                  text: "Improved libido and sexual function",
                },
                { icon: <Brain />, text: "Better mood and mental clarity" },
                { icon: <Dumbbell />, text: "Stronger workouts and recovery" },
                {
                  icon: <Scale />,
                  text: "Improved body composition (with training and diet)",
                },
                {
                  icon: <Activity />,
                  text: "Follow-up monitoring ensures safety",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "var(--color-wine)" }}
                    >
                      {React.cloneElement(benefit.icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Risks Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              Risks and Side Effects
              <span
                className="block text-xl mt-2"
                style={{ color: "var(--color-taupe)" }}
              >
                (Real Talk)
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "var(--color-brown)" }}
            >
              TRT can be life-changing for the right person. It can also cause
              problems if used casually.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Thermometer />, text: "Acne or oily skin" },
                { icon: <Droplets />, text: "Fluid retention" },
                { icon: <Heart />, text: "Breast tenderness or gynecomastia" },
                { icon: <Moon />, text: "Worsening sleep apnea in some men" },
                {
                  icon: <Activity />,
                  text: "Increased red blood cell count (hematocrit), which needs monitoring",
                },
                { icon: <HeartPulse />, text: "Blood pressure and heart risk" },
              ].map((risk, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <AlertTriangle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <p style={{ color: "var(--color-brown)" }}>{risk.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <p style={{ color: "var(--color-brown)" }}>
                In 2025, the FDA announced class-wide labeling changes after
                reviewing the TRAVERSE trial and blood pressure monitoring
                studies. The FDA noted TRAVERSE showed no increased risk of
                major cardiovascular outcomes for the studied group, while blood
                pressure increases were confirmed across testosterone products,
                leading to blood pressure warnings.
              </p>
              <p
                className="mt-4 font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                Bottom line: you want TRT managed medically, with follow-ups,
                not guessed.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Fertility Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  TRT and Fertility
                  <span
                    className="block text-lg mt-2"
                    style={{ color: "var(--color-wine)" }}
                  >
                    (Most Men Are Not Told This Early Enough)
                  </span>
                </h2>
                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  If you want children, this part matters.
                </p>
                <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                  TRT can lower sperm count significantly and may cause
                  fertility issues. Some fertility education resources note
                  sperm can return after stopping testosterone, often around a
                  few months, but the timeline varies and it is not something to
                  gamble with.
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "var(--color-wine)" }}
                >
                  If you are trying to conceive soon (or even "maybe this
                  year"), tell the doctor before starting.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Heart
                  className="w-16 h-16 mb-4"
                  style={{ color: "var(--color-wine)" }}
                />
                <p style={{ color: "var(--color-brown)" }}>
                  There are fertility-preserving approaches in specialist care,
                  but the right choice depends on your case.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* TRT vs Others Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  TRT vs "Testosterone Boosters" (Supplements)
                </h3>
                <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                  A lot of men in Malaysia try supplements first because it
                  feels easier.
                </p>
                <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                  But many over-the-counter "boosters" are not regulated like
                  prescription medicine, and effectiveness is often
                  questionable.
                </p>
                <p style={{ color: "var(--color-brown)" }}>
                  If you want to raise testosterone naturally, basics like
                  sleep, resistance training, weight management, and stress
                  reduction can help, even before you consider TRT.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  TRT vs ED Medications (They Are Not the Same)
                </h3>
                <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                  ED medications (like PDE5 inhibitors) help blood flow and
                  erections. TRT supports hormone balance.
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  Some men need one, some need the other, some need both. A
                  proper assessment avoids wasting money and time.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              Cost of Testosterone Therapy in Malaysia (Kuala Lumpur)
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              Prices vary a lot depending on your baseline tests, your treatment
              type, and how often you need follow-ups.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                variants={scaleIn}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  Injections
                </h3>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-brown)" }}
                >
                  RM 800-2,500
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  per session (depends on type)
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  Gels/Patches
                </h3>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-brown)" }}
                >
                  RM 300-700
                </p>
                <p style={{ color: "var(--color-taupe)" }}>per month</p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-brown)" }}
            >
              <p className="text-white text-center">
                Simple tip: when you compare clinics, do not compare only the
                injection price. Compare the full plan:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {[
                  "baseline lab panel",
                  "follow-up labs schedule",
                  "doctor review frequency",
                  "safety monitoring",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-2 rounded"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  >
                    <p className="text-white text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Competitor Analysis */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              What We Noticed From Top-Ranking Competitors
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  Common patterns on competitor pages:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Strong focus on benefits and symptom lists",
                    "Social proof and privacy messaging (example: 'served more than 46,000 international patients')",
                    "Many pages mention 'assessment + monitoring,' but often keep the actual step-by-step process brief",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-wine">•</span>
                      <span style={{ color: "var(--color-brown)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                <h3 className="text-2xl font-georgia mb-4 text-white">
                  How Nexus Clinic KL content should win:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Make diagnosis standards clear (symptoms + repeat morning labs)",
                    "Explain monitoring and safety in plain language (hematocrit, BP, prostate checks when appropriate)",
                    "Give honest cost ranges and what drives price",
                    "Address fertility clearly, early, and directly",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-white mt-1 shrink-0" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Nexus Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12"
              style={{ color: "var(--color-brown)" }}
            >
              Why Nexus Clinic Kuala Lumpur
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 max-w-4xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              If you're considering testosterone therapy in Kuala Lumpur, you
              want a clinic that treats this like healthcare, not like a trend.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 rounded-3xl max-w-3xl mx-auto"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MapPin
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--color-wine)" }}
              />
              <p
                className="mb-2 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                Nexus Clinic Kuala Lumpur
              </p>
              <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <div className="flex justify-center gap-4">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "var(--color-wine)" }}
                >
                  <Phone className="w-4 h-4" /> 016-7025699
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{ color: "var(--color-wine)" }}
                >
                  <Phone className="w-4 h-4" /> 03-21635699
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-white"
            >
              Start with the step most men skip:
              <span
                className="block text-2xl mt-2"
                style={{ color: "var(--color-rose)" }}
              >
                a proper diagnosis.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 text-white opacity-90"
            >
              Book a consultation at Nexus Clinic Kuala Lumpur and get a clear
              plan based on symptoms, repeat blood tests, and safe monitoring.
            </motion.p>

            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-xl text-lg font-semibold"
              style={{ backgroundColor: "var(--color-wine)", color: "white" }}
            >
              Book Your Consultation
            </motion.button>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-white opacity-75"
            >
              Nexus Clinic Kuala Lumpur, LG 10, Lower Ground Floor, Wisma UOA
              II, Jalan Pinang, 50450 Kuala Lumpur
            </motion.p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default TestosteroneLanding;
