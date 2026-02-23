import { motion } from "framer-motion";
import {
  HeartPulse,
  Shield,
  Brain,
  Activity,
  Sparkles,
  Pill,
  Syringe,
  Zap,
  Stethoscope,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Scale,
  Moon,
  Dumbbell,
  Wine,
  TestTube,
  ShieldCheck,
  Calendar,
  Timer,
  TrendingUp,
  Users,
  Lock,
  MessageCircle,
  Target,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function EDTreatment() {
  const images = {
    doctorConsultation:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop", // Doctor consulting patient
    modernClinic:
      "https://images.unsplash.com/photo-1631545796175-7e7c94e41a4b?q=80&w=2070&auto=format&fit=crop", // Modern clinic interior
    medicalTeam:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop", // Medical team
    healthyLifestyle:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // Man exercising/healthy lifestyle
    kualaLumpur:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2069&auto=format&fit=crop", // Kuala Lumpur cityscape
    consultation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Private consultation
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream font-['Inter',sans-serif]">
        {/* Hero Section with Image */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Modern Clinic Interior"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #F3EFEE 0%, rgba(243, 239, 238, 0.8) 50%, rgba(243, 239, 238, 0.4) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <HeartPulse className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-serif font-bold"
                  style={{ color: "#4B3A33" }}
                >
                  It's not "in your head."
                  <span className="block text-wine">
                    ED is often a health signal, and it's treatable.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed max-w-lg"
                >
                  If erections feel unpredictable, weaker, or don't last long
                  enough, it can mess with your confidence and your
                  relationship. At Nexus Clinic Kuala Lumpur, we keep it
                  private, medical, and practical, so you can get answers
                  without the awkwardness.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium flex items-center gap-2"
                    style={{
                      background: "#8C4F58",
                      color: "#FAF8F7",
                      boxShadow: "0 10px 25px -5px rgba(140, 79, 88, 0.3)",
                    }}
                  >
                    Book Private Consult
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(172, 153, 144, 0.3)",
                      color: "#4B3A33",
                    }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    {
                      icon: Lock,
                      text: "Confidential, judgement-free consults",
                    },
                    { icon: Target, text: "Root-cause focused approach" },
                    { icon: Shield, text: "Clear treatment options" },
                    {
                      icon: ShieldCheck,
                      text: "Safety checks before you start",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2"
                    >
                      <item.icon className="w-4 h-4 text-wine mt-1 shrink-0" />
                      <span className="text-xs text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 p-4 rounded-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(172, 153, 144, 0.2)",
                  }}
                >
                  <MapPin className="w-5 h-5 text-wine" />
                  <span className="text-sm text-brown">
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur
                  </span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(75, 58, 51, 0.2)",
                  }}
                >
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-serif font-semibold text-brown">
                      Quick Reality Check: What ED Really Means
                    </h3>
                    <p className="text-taupe">
                      Erectile dysfunction (ED) means you often struggle to get
                      or keep an erection firm enough for sex. One bad night
                      does not mean you have ED. But if it keeps happening and
                      it causes stress, it is worth checking.
                    </p>
                    <div
                      className="p-4 rounded-lg"
                      style={{ background: "rgba(140, 79, 88, 0.1)" }}
                    >
                      <p className="text-wine font-medium">
                        Here's the part most men do not hear early enough: ED
                        can be an early sign of other health issues, especially
                        blood flow and heart-related problems. That is why a
                        proper medical review can protect more than your sex
                        life.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who ED Treatment Is For - With Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24 relative overflow-hidden"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              Who ED Treatment Is For
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                variants={fadeInLeft}
                className="relative h-100 rounded-2xl overflow-hidden"
              >
                <img
                  src={images.doctorConsultation}
                  alt="Doctor consulting patient"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(140, 79, 88, 0.2) 0%, transparent 100%)",
                  }}
                ></div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {[
                    { icon: Activity, text: "Difficulty getting an erection" },
                    { icon: TrendingUp, text: "Losing firmness during sex" },
                    {
                      icon: Users,
                      text: "Lower sexual confidence or avoidance",
                    },
                    {
                      icon: Brain,
                      text: "Performance anxiety after repeated 'fails'",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -10 }}
                      className="p-6 rounded-xl"
                      style={{
                        background: "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(172, 153, 144, 0.3)",
                        boxShadow: "0 10px 30px -10px rgba(75, 58, 51, 0.1)",
                      }}
                    >
                      <item.icon className="w-8 h-8 text-wine mb-4" />
                      <p className="text-brown">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(140, 79, 88, 0.05)",
                  border: "1px solid rgba(140, 79, 88, 0.2)",
                }}
              >
                <p className="text-wine font-medium">
                  Erectile issues after diabetes, high blood pressure, smoking,
                  stress, or weight gain (these are common drivers)
                </p>
                <p className="text-brown mt-4">
                  ED is not only an "older man" thing. It can happen at any age,
                  especially with stress, lifestyle factors, and metabolic
                  health.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why ED Happens - With Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-8"
              style={{ color: "#4B3A33" }}
            >
              Why ED Happens{" "}
              <span className="text-wine">(In Simple Words)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-16 max-w-2xl mx-auto"
            >
              An erection depends on blood flow, nerves, hormones, and your mind
              working together.
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "1) Blood flow issues (most common)",
                    desc: "If blood vessels are not working well, erections become weaker. This is also why ED can show up before bigger heart symptoms.",
                  },
                  {
                    icon: Stethoscope,
                    title: "2) Medical conditions and medications",
                    desc: "Diabetes, high blood pressure, cholesterol issues, and some medicines can affect erections.",
                  },
                  {
                    icon: TestTube,
                    title: "3) Hormones (especially low testosterone)",
                    desc: "Low testosterone can affect desire and contribute to ED. Guidelines discuss checking hormones where relevant and tailoring care.",
                  },
                  {
                    icon: Brain,
                    title:
                      "4) Stress, anxiety, depression, relationship tension",
                    desc: "Your brain is the 'starter motor.' If you're stressed or anxious, the body can block arousal even if you want intimacy.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="flex gap-4 p-6 rounded-xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(172, 153, 144, 0.2)",
                    }}
                  >
                    <item.icon className="w-6 h-6 text-wine shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-taupe">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="relative h-75 rounded-2xl overflow-hidden">
                  <img
                    src={images.healthyLifestyle}
                    alt="Healthy lifestyle and exercise"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                    }}
                  ></div>
                </div>

                <div
                  className="sticky top-24 p-8 rounded-2xl"
                  style={{
                    background: "rgba(140, 79, 88, 0.05)",
                    border: "1px solid rgba(140, 79, 88, 0.2)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-6">
                    When You Should See a Doctor (Not Google)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "The issue lasts more than a few weeks",
                      "It affects your relationship or confidence",
                      "You also have chest pain, breathlessness, diabetes, or high blood pressure",
                      "You are tempted to buy ED pills online",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-wine mt-0.5 shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 p-4 rounded-lg"
                    style={{ background: "rgba(140, 79, 88, 0.1)" }}
                  >
                    <p className="text-sm text-wine">
                      Why the online warning? Fake ED meds are a real global
                      problem, and they can contain the wrong dose, hidden
                      substances, or no active ingredient at all. Always use a
                      licensed doctor and pharmacy route.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Medical Team Image Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="relative h-75 rounded-3xl overflow-hidden">
              <img
                src={images.medicalTeam}
                alt="Professional medical team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(75, 58, 51, 0.7) 0%, rgba(75, 58, 51, 0.3) 100%)",
                }}
              ></div>

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div variants={fadeInLeft} className="max-w-2xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-6">
                      How ED Is Assessed at a Good Clinic
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                      A proper ED work-up usually includes:
                    </p>
                    <div className="space-y-4">
                      {[
                        "Your symptoms, timeline, and what situations it happens in",
                        "Medical history (diabetes, BP, sleep, smoking, meds)",
                        "Basic physical checks",
                        "Targeted blood tests (often testosterone and general health markers)",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInRight}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cream shrink-0" />
                          <span className="text-white">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mt-6">
                      This "whole picture" approach is recommended in urology
                      guidance and patient education resources.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl max-w-3xl mx-auto text-center"
              style={{ background: "rgba(140, 79, 88, 0.05)" }}
            >
              <p className="text-wine text-lg">
                At Nexus Clinic Kuala Lumpur, the goal is simple: find the
                cause, then match the treatment to your body and lifestyle, not
                someone else's plan.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Treatment Options with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Options in Malaysia{" "}
              <span className="text-wine">(From Simple to Advanced)</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <motion.div variants={fadeInLeft} className="space-y-8">
                {/* Lifestyle */}
                <motion.div
                  variants={fadeInUp}
                  className="p-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                    1) Lifestyle Fixes That Actually Work (Especially for Mild
                    ED)
                  </h3>
                  <p className="text-taupe mb-6">
                    This is not a lecture. This is the foundation that makes
                    every other treatment work better.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Moon,
                        text: "Better sleep (poor sleep can wreck hormones and arousal)",
                      },
                      { icon: Wine, text: "Cutting smoking and heavy alcohol" },
                      {
                        icon: Dumbbell,
                        text: "Moving your body most days (even brisk walking helps circulation)",
                      },
                      {
                        icon: Scale,
                        text: "Weight management and blood sugar control if needed",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 rounded-lg"
                        style={{ background: "rgba(140, 79, 88, 0.05)" }}
                      >
                        <item.icon className="w-4 h-4 text-wine mt-1 shrink-0" />
                        <span className="text-xs text-brown">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-wine">
                    If your ED is driven by blood flow and lifestyle factors,
                    these changes can move the needle.
                  </p>
                </motion.div>

                {/* Performance Anxiety */}
                <motion.div
                  variants={fadeInUp}
                  className="p-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                    2) Performance Anxiety and Relationship Support
                  </h3>
                  <p className="text-taupe">
                    If ED started after stress, one bad experience, or pressure
                    to "perform," you may be stuck in a loop: Worry → less
                    arousal → weaker erection → more worry. Sometimes the best
                    "treatment" is removing shame and building a plan with your
                    partner. A clinic that normalizes the conversation helps.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-2xl overflow-hidden"
              >
                <img
                  src={images.consultation}
                  alt="Private medical consultation"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                  }}
                ></div>
              </motion.div>
            </div>

            {/* Rest of treatment options (same as before) */}
            <div className="space-y-8">
              {/* ED Tablets */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  3) Prescription ED Tablets (PDE5 Inhibitors)
                </h3>
                <p className="text-taupe mb-4">
                  These are the most common first-line medical treatment for ED,
                  recommended in major guidelines.
                </p>
                <p className="text-brown mb-4">
                  Examples include sildenafil and tadalafil (you may know them
                  by brand names like Viagra or Cialis). They help blood flow to
                  the penis, but they still require sexual stimulation. They do
                  not create instant desire.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-wine mb-2">
                      How to use them properly (small details matter)
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-brown">
                        <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                        Take as directed by your doctor
                      </li>
                      <li className="flex items-start gap-2 text-sm text-brown">
                        <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                        Timing matters
                      </li>
                      <li className="flex items-start gap-2 text-sm text-brown">
                        <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                        High-fat meals can delay the effect of some options (a
                        common reason men think "it didn't work")
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-wine mb-2">
                      Common side effects
                    </h4>
                    <p className="text-sm text-taupe mb-4">
                      Headache, flushing, blocked nose, indigestion. These are
                      widely listed in prescribing guidance.
                    </p>

                    <h4 className="font-medium text-wine mb-2">
                      Who should NOT take them
                    </h4>
                    <p className="text-sm text-taupe">
                      If you take nitrates for chest pain (angina), you must not
                      use sildenafil or similar ED meds because it can cause
                      dangerous drops in blood pressure.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Testosterone Support */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  4) Testosterone Support (Only If You're Truly Low)
                </h3>
                <p className="text-taupe">
                  If blood tests show low testosterone and symptoms match,
                  hormone treatment may be considered as part of a broader plan,
                  especially if pills are not working well and hypogonadism is
                  present. This is not for everyone. Done right, it is careful
                  medicine, not a "quick boost."
                </p>
              </motion.div>

              {/* Vacuum Devices */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  5) Vacuum Erection Devices (Penis Pumps)
                </h3>
                <p className="text-taupe mb-4">
                  A penis pump draws blood into the penis and a ring helps
                  maintain the erection. It is a non-drug option and can be
                  useful when tablets are not suitable.
                </p>
                <p className="text-wine font-medium mb-2">Best for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                    Men who cannot take ED tablets
                  </li>
                  <li className="flex items-start gap-2 text-sm text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                    Men who want a non-medication approach
                  </li>
                  <li className="flex items-start gap-2 text-sm text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                    Some post-surgery situations (doctor guidance matters)
                  </li>
                </ul>
              </motion.div>

              {/* Injections */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  6) Penile Injections or Urethral Medication (Alprostadil)
                </h3>
                <p className="text-taupe">
                  If tablets fail or are not safe for you, doctors may offer
                  alprostadil options. Mayo Clinic outlines intraurethral
                  medication and notes possible side effects like burning and
                  minor bleeding. Some Malaysia clinics also discuss alprostadil
                  (for example, Caverject) as an ED treatment option.
                </p>
              </motion.div>

              {/* Shockwave Therapy */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  7) Shockwave Therapy (Li-ESWT / ESWT) in Kuala Lumpur
                </h3>
                <p className="text-taupe mb-4">
                  Shockwave therapy for ED is widely marketed in Malaysia and KL
                  clinics. Competitor pages commonly position it as non-invasive
                  and drug-free.
                </p>
                <p className="text-wine font-medium mb-2">
                  What matters is who it is for and what results are realistic.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-brown">
                    <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                    It is often discussed for men with mild to moderate
                    vasculogenic ED, where blood flow is the main issue.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-brown">
                    <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                    Evidence exists, but outcomes vary, and it is not a magic
                    switch.
                  </li>
                </ul>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    If you are considering shockwave therapy in Kuala Lumpur,
                    ask these questions:
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside text-sm text-brown">
                    <li>"What type of ED do you think I have and why?"</li>
                    <li>
                      "How many sessions do you recommend and what is the plan
                      if it doesn't work?"
                    </li>
                    <li>
                      "Will you still check heart risk and metabolic health?"
                    </li>
                  </ol>
                  <p className="mt-2 text-sm text-taupe">
                    A clinic should guide you through suitability instead of
                    pushing packages.
                  </p>
                </div>
              </motion.div>

              {/* PRP P-Shot */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  8) PRP (P-Shot) at Nexus Clinic Kuala Lumpur
                </h3>
                <p className="text-taupe mb-4">
                  Nexus Clinic offers a P-Shot page describing it as PRP derived
                  from your own blood, injected with the goal of supporting
                  blood flow and sensitivity, while noting results can vary.
                </p>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    If you are thinking about PRP:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      Treat it as an option to discuss, not a guaranteed cure
                    </li>
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      Ask about expected outcomes for your ED type
                    </li>
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      Ask what evidence the clinic relies on for your case
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Stem Cell */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  9) Stem Cell Based Approaches (Emerging)
                </h3>
                <p className="text-taupe mb-4">
                  Nexus Clinic also describes stem cell therapy for ED as an
                  emerging area and notes results can vary.
                </p>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    Because this space can be heavily marketed, your best
                    protection is:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      Clear explanation of what is proven vs what is still
                      developing
                    </li>
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      Transparent risks, costs, and realistic expectations
                    </li>
                    <li className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      A medical plan that starts with diagnosis first
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Surgery */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  10) Surgery (Penile Implants)
                </h3>
                <p className="text-taupe">
                  For severe ED that does not respond to other treatments,
                  penile implants are a recognized option. Mayo Clinic lists
                  implants as a treatment route when other methods fail. This is
                  typically managed by a urologist, and a clinic can refer if
                  needed.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* KL Location Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={scaleIn}
              className="relative h-100 rounded-3xl overflow-hidden"
            >
              <img
                src={images.kualaLumpur}
                alt="Kuala Lumpur cityscape"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                }}
              ></div>

              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(75, 58, 51, 0.8) 0%, transparent 100%)",
                }}
              >
                <p className="text-white text-xl font-serif">
                  Nexus Clinic Kuala Lumpur — LG 10, Lower Ground Floor, Wisma
                  UOA II, Jalan Pinang
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pros and Cons Comparison */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              Pros and Cons{" "}
              <span className="text-wine">(Simple Comparison)</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Tablets */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Pill className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  Tablets (sildenafil, tadalafil)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Pros: convenient, proven first-line, fast acting for many
                      men
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Cons: not safe with nitrates, may cause side effects, may
                      not help severe cases
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Shockwave */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Zap className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  Shockwave therapy
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Pros: non-invasive, no daily meds, popular in KL clinics
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Cons: not for everyone, needs sessions, results vary
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Vacuum */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Activity className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  Vacuum device
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Pros: drug-free option, useful when meds are
                      contraindicated
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Cons: some men find it awkward; learning curve
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Injections */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Syringe className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  Injections / intraurethral medicine
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Pros: works when tablets fail, targeted action
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Cons: discomfort, technique matters, side effects possible
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* PRP/Stem Cell */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Sparkles className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  PRP (P-Shot) and stem cell approaches
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Pros: regenerative intent; some men explore it when
                      standard options are limited
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">
                      Cons: evidence and outcomes vary; needs careful medical
                      discussion
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Cost in Malaysia{" "}
              <span className="text-wine">(Kuala Lumpur)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              Costs vary based on the cause, tests needed, and treatment choice.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "Consultation",
                  price: "RM 150-300",
                  icon: Stethoscope,
                },
                {
                  title: "Sildenafil tablets",
                  price: "RM 30-50 per pill",
                  note: "brand, cheaper for generics",
                  icon: Pill,
                },
                {
                  title: "Shockwave therapy",
                  price: "RM 1,000-3,000",
                  note: "per session",
                  icon: Zap,
                },
                {
                  title: "Penile implants",
                  price: "RM 30,000-60,000",
                  note: "surgical route",
                  icon: Syringe,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <item.icon className="w-8 h-8 text-wine mx-auto mb-4" />
                  <h3 className="font-medium text-brown mb-2">{item.title}</h3>
                  <p className="text-2xl font-serif font-bold text-wine mb-1">
                    {item.price}
                  </p>
                  {item.note && (
                    <p className="text-xs text-taupe">{item.note}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-sm text-taupe mt-8"
            >
              Use these as rough references, not a guaranteed price list. Your
              real cost depends on your plan and how many sessions or follow-ups
              you need.
            </motion.p>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              Your Journey at Nexus Clinic
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {[
                {
                  step: 1,
                  title: "Private consult",
                  desc: "symptom review",
                  icon: MessageCircle,
                },
                {
                  step: 2,
                  title: "Quick risk screening",
                  desc: "blood pressure, lifestyle, medical conditions",
                  icon: Activity,
                },
                {
                  step: 3,
                  title: "Tests if needed",
                  desc: "hormones, diabetes, cardiovascular risk",
                  icon: TestTube,
                },
                {
                  step: 4,
                  title: "Step-by-step plan",
                  desc: "options and timelines",
                  icon: Calendar,
                },
                {
                  step: 5,
                  title: "Follow-up",
                  desc: "to adjust treatment",
                  icon: Timer,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                  <h3 className="font-medium text-brown mb-1">{item.title}</h3>
                  <p className="text-xs text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-taupe"
            >
              And yes, privacy matters. Nexus Clinic Kuala Lumpur location and
              contact details are listed on their KL pages.
            </motion.p>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-8"
              style={{ color: "#4B3A33" }}
            >
              Competitor Snapshot: What Top Clinics in Malaysia Emphasize{" "}
              <span className="text-wine">(and How to Beat Them)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              When you look at common ranking pages for "ED treatment Malaysia"
              and "erectile dysfunction treatment Kuala Lumpur," you will see
              patterns:
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  text: "Discreet ED testing and treatment pages (PULSE Clinic)",
                },
                {
                  text: '"Men\'s health doctor" positioning plus injection and shockwave packages (Universal Clinic, Alpha Clinic)',
                },
                {
                  text: "Strong push on shockwave as a non-invasive solution (Alpha, HE Medical, Universal)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <p className="text-brown text-sm">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  q: "What is the best treatment for ED in Malaysia?",
                  a: "There is no single best option. Guidelines commonly start with lifestyle improvements and prescription tablets (PDE5 inhibitors) when safe, then move to devices, injections, shockwave therapy, or surgery depending on the cause and severity.",
                },
                {
                  q: "Can ED be cured permanently?",
                  a: "Sometimes ED improves a lot when the root cause is treated, like better blood sugar control, weight loss, stopping smoking, or fixing medication issues. Other cases need ongoing support. Many hospital pages note ED can signal underlying conditions, so treating those matters.",
                },
                {
                  q: "Is ED a normal part of ageing?",
                  a: "ED becomes more common with age, but it is often linked to health factors like blood flow and heart health. It is worth checking instead of assuming it is 'normal.'",
                },
                {
                  q: "How do I know if my ED is physical or psychological?",
                  a: "If it happens in every situation and morning erections are gone, physical causes are more likely. If it happens mainly in high-pressure situations, anxiety can play a big role. Many men have a mix of both, which is why proper assessment helps.",
                },
                {
                  q: "Are sildenafil or tadalafil safe?",
                  a: "They can be safe for many men when prescribed properly. But they are not safe with nitrate heart medications because of dangerous blood pressure drops. Always speak to a doctor first.",
                },
                {
                  q: "How fast do ED pills work?",
                  a: "Timing depends on the medication and how you take it. Mayo Clinic notes oral ED medicine increases blood flow and effect can start within minutes for some, but correct use matters.",
                },
                {
                  q: "What if ED pills do not work?",
                  a: "Next steps can include checking correct usage, adjusting dose, treating underlying causes, then considering vacuum devices, alprostadil injections or urethral options, or shockwave therapy depending on suitability.",
                },
                {
                  q: "Is shockwave therapy effective for ED?",
                  a: "It may help some men, especially when blood flow is the main issue, and many KL clinics offer it. Results vary, so suitability screening is key.",
                },
                {
                  q: "How much does ED treatment cost in Kuala Lumpur?",
                  a: "Costs vary. Some private clinic estimates include consults around RM 150-300 and shockwave sessions around RM 1,000-3,000 per session, with medication costs depending on brand and dose.",
                },
                {
                  q: "Can ED be a sign of heart disease?",
                  a: "Yes, ED is often connected to blood flow problems and can be linked with cardiovascular disease risk. This is why a medical review is important.",
                },
                {
                  q: "Should I buy ED medication online?",
                  a: "Be careful. Counterfeit ED pills are widely seized internationally and can be unsafe. Use a licensed doctor and pharmacy route.",
                },
                {
                  q: "Does PRP (P-Shot) help ED?",
                  a: "Nexus Clinic describes P-Shot as PRP from your own blood that may support blood flow and sensitivity, and notes results can vary. It is best discussed after diagnosis so you understand if it fits your ED type.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="font-medium text-wine mb-3">{item.q}</h3>
                  <p className="text-sm text-brown">{item.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section with Image Background */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Nexus Clinic Modern Facility"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(140, 79, 88, 0.9) 0%, rgba(171, 128, 104, 0.9) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-white mb-6"
              >
                Start with a Private Consult and a Real Diagnosis
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-white/90 mb-8 text-lg"
              >
                If you are searching for ED treatment in Kuala Lumpur or
                erectile dysfunction treatment in Malaysia, start with a private
                consult and a real diagnosis.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-medium text-wine bg-white flex items-center gap-2"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Book Your Private Consult
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>016-7025699</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>03-21635699</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
