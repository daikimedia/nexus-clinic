"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Droplets,
  Weight,
  Heart,
  Shield,
  Star,
  ChevronRight,
  Sparkles,
  Moon,
  Sun,
  Users,
  MapPin,
  Award,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const PCOSPage = () => {
  const symptoms = [
    {
      icon: Calendar,
      text: "Irregular periods (late, missed, or very long cycles)",
    },
    { icon: Droplets, text: "Acne and oily skin" },
    { icon: Sparkles, text: "Unwanted facial or body hair (hirsutism)" },
    { icon: Weight, text: "Weight gain or difficulty losing weight" },
    { icon: Sun, text: "Darkened skin patches (acanthosis nigricans)" },
    { icon: Moon, text: "Sleep issues, sometimes sleep apnoea" },
    { icon: Heart, text: "Fertility challenges" },
  ];

  const treatmentSteps = [
    {
      phase: "Phase 1: Diagnosis and clarity",
      description:
        "You bring symptoms. We confirm what's going on using guideline-based criteria and sensible testing.",
    },
    {
      phase: "Phase 2: Build your plan around your main goal",
      options: [
        "Cycle control",
        "Clearer skin",
        "Hair reduction",
        "Weight and insulin resistance",
        "Fertility support",
      ],
      description: "Think of your care in phases:",
    },
    {
      phase: "Phase 3: Track progress and adjust",
      description: "PCOS changes over time. Your plan should too.",
    },
  ];

  const faqs = [
    {
      q: "Can PCOS be cured permanently?",
      a: "PCOS usually cannot be 'cured,' but symptoms can be treated and controlled long term.",
    },
    {
      q: "What is the best treatment for PCOS?",
      a: "There is no single best treatment. The best plan depends on your goal: cycle control, acne and hair, weight and insulin resistance, or fertility. The international guideline recommends tailored care based on symptoms and life stage.",
    },
    {
      q: "Can I get pregnant if I have PCOS?",
      a: "Yes. Many women with PCOS can get pregnant, sometimes naturally and sometimes with ovulation support.",
    },
    {
      q: "What is the first-line fertility medication for PCOS?",
      a: "The 2023 International PCOS Guideline summary states letrozole should be first-line for ovulation induction in infertile anovulatory women with PCOS (with no other infertility factors).",
    },
    {
      q: "How is PCOS diagnosed in adults?",
      a: "Diagnosis uses revised Rotterdam criteria, usually requiring two of: hyperandrogenism, ovulatory dysfunction, or polycystic ovaries on ultrasound, while excluding other conditions like thyroid disease and high prolactin.",
    },
    {
      q: "Do I need an ultrasound to confirm PCOS?",
      a: "Not always. The guideline notes diagnosis can often be made based on clinical features, and ultrasound or AMH may be used in adults depending on the diagnostic pathway.",
    },
    {
      q: "Why do I gain weight so easily with PCOS?",
      a: "Insulin resistance is a common driver in PCOS. It can increase hunger, cravings, and fat storage, and can worsen hormone imbalance.",
    },
    {
      q: "How much weight loss helps PCOS symptoms?",
      a: "Even modest changes can help. NHS guidance notes that around 5% weight loss can significantly improve PCOS symptoms in overweight women.",
    },
    {
      q: "Does metformin help PCOS?",
      a: "Metformin may help in selected PCOS patients, especially where insulin resistance or anovulatory infertility is involved, and the guideline highlights counselling about GI side effects.",
    },
    {
      q: "Is inositol better than metformin for PCOS?",
      a: "The guideline notes metformin should be considered over inositol for hirsutism and central adiposity, and encourages women using complementary therapies to tell their health professional.",
    },
    {
      q: "What is the best treatment for unwanted facial hair in PCOS?",
      a: "Options include hormonal approaches and hair-reduction methods. The guideline specifically states laser and light therapies should be considered for facial hirsutism and quality of life, and more sessions may be needed in PCOS.",
    },
    {
      q: "Does PCOS cause acne?",
      a: "Yes, acne is a common symptom in PCOS. Malaysian hospital pages list acne as a PCOS symptom, and the guideline recommends assessing acne as part of hyperandrogenism review.",
    },
    {
      q: "Should I worry about long-term health if I have PCOS?",
      a: "PCOS is linked with metabolic risks and mental health concerns, so long-term monitoring and early lifestyle support matter.",
    },
    {
      q: "Where can I get PCOS support in Kuala Lumpur?",
      a: "Many women start at hospitals and O&G clinics for diagnosis. If your main concerns include weight, insulin resistance, acne, and unwanted hair, Nexus Clinic Kuala Lumpur is centrally located at Wisma UOA II, Jalan Pinang.",
    },
  ];

  return (
    <>
      <main className="bg-light min-h-screen font-['Inter',sans-serif]">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Peaceful woman practicing self-care"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 bg-wine text-light rounded-full text-sm font-medium tracking-wide">
                  Nexus Clinic Kuala Lumpur
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
              >
                PCOS is not "just
                <span className="block text-wine">irregular periods."</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                style={{ color: "#AC9990" }}
              >
                It affects your skin, weight, mood, and fertility. Let's treat
                the whole you.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-12 max-w-3xl mx-auto"
                style={{ color: "#4B3A33" }}
              >
                If your cycles are unpredictable, your acne will not calm down,
                or your body feels like it is working against you, you are not
                being dramatic. At Nexus Clinic Kuala Lumpur, we build a
                realistic PCOS plan that fits your goals, your schedule, and
                your body.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  style={{ backgroundColor: "#8C4F58", color: "#FAF8F7" }}
                >
                  Start Your Journey
                </button>
                <button
                  className="px-8 py-4 rounded-full text-lg font-medium border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  style={{ borderColor: "#8C4F58", color: "#8C4F58" }}
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Confidential, doctor-led consults",
                  desc: "in central Kuala Lumpur",
                },
                {
                  icon: Users,
                  title: "PCOS support that covers symptoms",
                  desc: "you feel daily, including weight and insulin resistance, acne, unwanted hair, and cycle tracking",
                },
                {
                  icon: Award,
                  title: "Evidence-based approach",
                  desc: "guided by the 2023 International PCOS Guideline (Rotterdam criteria and treatment pathways)",
                },
                {
                  icon: MapPin,
                  title: "Nexus Clinic Kuala Lumpur",
                  desc: "LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(172, 153, 144, 0.2)",
                  }}
                >
                  <item.icon
                    className="w-12 h-12 mb-4"
                    style={{ color: "#8C4F58" }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#4B3A33" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#AC9990" }}>{item.desc}</p>
                  {index === 3 && (
                    <p className="mt-2 text-sm" style={{ color: "#8C4F58" }}>
                      Mobile: 016-7025699 / 03-21635699
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Is PCOS Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  What Is PCOS
                  <span className="block text-wine">(In Simple Words)</span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  PCOS (Polycystic Ovary Syndrome) is a common hormone condition
                  in women of reproductive age. It is linked to irregular
                  ovulation, higher androgens (male-type hormones), and
                  sometimes ovaries that look "polycystic" on ultrasound.
                </p>

                <p className="text-lg italic" style={{ color: "#AC9990" }}>
                  Important detail: PCOS does not always mean you have true
                  cysts. Many sources explain the ovaries may contain many small
                  follicles, and "cysts" is often a confusing word for patients.
                </p>

                <p className="text-lg mt-4" style={{ color: "#8C4F58" }}>
                  13% globally using Rotterdam criteria, and it may be higher in
                  some regions including South East Asia.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="/images/treatment/face-scan.png"
                  alt="Medical consultation for women's health"
                  className="relative rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#4B3A33" }}
                  >
                    Understanding PCOS is the first step to healing
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms and Signs with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                    alt="Woman experiencing PCOS symptoms"
                    className="relative rounded-3xl shadow-2xl w-full h-125 object-cover"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 backdrop-blur-sm">
                    <Heart className="w-6 h-6" style={{ color: "#8C4F58" }} />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  Signs and Symptoms
                  <span className="block text-wine text-2xl mt-2">
                    That Make Women Search "PCOS Treatment Kuala Lumpur"
                  </span>
                </h2>

                <p className="mb-6 text-lg" style={{ color: "#AC9990" }}>
                  PCOS can look different from one woman to another. Common
                  symptoms include:
                </p>

                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/50"
                    >
                      <symptom.icon
                        className="w-6 h-6 mt-1 shrink-0"
                        style={{ color: "#8C4F58" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{symptom.text}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-6 italic p-4 rounded-xl"
                  style={{ backgroundColor: "#F3EFEE", color: "#AC9990" }}
                >
                  PCOS can also affect mental health. Some Malaysian hospital
                  education pages mention depression, anxiety, and even
                  disordered eating patterns in women with PCOS.
                </p>

                <p
                  className="mt-4 font-medium text-lg"
                  style={{ color: "#8C4F58" }}
                >
                  If you read that and thought "That is me," you deserve care
                  that takes it seriously.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Lifestyle Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  Step 1: Lifestyle That Actually Helps
                  <span className="block text-wine text-2xl mt-2">
                    (Without Shame)
                  </span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  This is not about "just lose weight." It is about improving
                  insulin sensitivity and reducing hormone chaos.
                </p>

                <p className="mb-6" style={{ color: "#AC9990" }}>
                  Even small changes can help. NHS guidance notes that in
                  overweight women, losing around 5% of body weight can lead to
                  significant improvement in PCOS. Malaysian hospital pages also
                  highlight regular exercise, a balanced diet, and weight
                  management as core strategies.
                </p>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4B3A33" }}
                >
                  Simple, realistic KL-friendly habits:
                </h3>

                <div className="space-y-4">
                  {[
                    "Walk daily (start with 20 minutes)",
                    "Build muscle 2 to 3 times a week (home workouts count)",
                    "Prioritise protein and fibre in meals",
                    "Reduce sugary drinks and frequent desserts (not forever, just less often)",
                    "Sleep earlier when possible (PCOS and poor sleep feed each other)",
                  ].map((habit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/30 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine/20 flex items-center justify-center">
                        <ChevronRight
                          className="w-5 h-5"
                          style={{ color: "#8C4F58" }}
                        />
                      </div>
                      <span style={{ color: "#4B3A33" }}>{habit}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-6 italic font-medium"
                  style={{ color: "#8C4F58" }}
                >
                  This is the base that makes medication work better, and makes
                  symptoms return less often.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                    alt="Woman exercising outdoors in KL"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-bold">Start with small steps</p>
                    <p className="text-sm">20 minutes walk daily</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: "#4B3A33" }}>
                      Step 2: Irregular Periods
                    </h4>
                    <p className="text-sm" style={{ color: "#AC9990" }}>
                      Combined oral contraceptive pills and other hormone
                      options
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: "#4B3A33" }}>
                      Step 3: Acne Treatment
                    </h4>
                    <p className="text-sm" style={{ color: "#AC9990" }}>
                      Hormonal regulation & medical-grade skincare
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Hair and Insulin Sections with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                  >
                    Step 4: Unwanted Hair and Hair Thinning
                    <span className="block text-xl text-wine mt-1">
                      (Hirsutism and PCOS)
                    </span>
                  </h3>

                  <p className="mb-4" style={{ color: "#AC9990" }}>
                    Unwanted facial hair is one of the most emotionally heavy
                    PCOS symptoms. The guideline even notes the psychosocial
                    impact and encourages clinicians to take patient reporting
                    seriously.
                  </p>

                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                      alt="Laser hair removal treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="font-medium mb-2" style={{ color: "#4B3A33" }}>
                    Treatment options include:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li style={{ color: "#4B3A33" }}>
                      Hormonal options (doctor-led)
                    </li>
                    <li style={{ color: "#4B3A33" }}>
                      Anti-androgens in selected patients, with strong
                      contraception guidance
                    </li>
                    <li style={{ color: "#4B3A33" }}>
                      Laser and light hair reduction (more sessions may be
                      needed in PCOS)
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                  >
                    Step 5: Insulin Resistance and Weight Support
                  </h3>

                  <p className="mb-4" style={{ color: "#AC9990" }}>
                    Many women with PCOS feel like they eat less and still gain
                    weight. Insulin resistance can be part of that story.
                  </p>

                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
                      alt="Healthy balanced meal for PCOS"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mb-4">
                    <p
                      className="font-medium mb-2"
                      style={{ color: "#4B3A33" }}
                    >
                      Metformin
                    </p>
                    <p style={{ color: "#AC9990" }}>
                      Can be used in certain PCOS situations, including
                      anovulatory infertility. May be considered over inositol
                      for hirsutism and central adiposity.
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-medium mb-2"
                      style={{ color: "#4B3A33" }}
                    >
                      Modern weight-loss medications
                    </p>
                    <p style={{ color: "#AC9990" }}>
                      GLP-1 medications in selected PCOS patients under medical
                      care, depending on BMI and health history.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Fertility Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  Step 6: PCOS and Fertility
                  <span className="block text-wine text-2xl">
                    (If You Want to Get Pregnant)
                  </span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  PCOS is one of the most common causes of infertility, but it
                  is also treatable. Many women with PCOS can still get
                  pregnant.
                </p>

                <div
                  className="p-6 rounded-xl backdrop-blur-sm mb-4"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <p
                    className="font-bold text-lg mb-2"
                    style={{ color: "#8C4F58" }}
                  >
                    Ovulation induction:
                  </p>
                  <p>
                    Letrozole should be first-line pharmacological treatment for
                    ovulation induction in infertile anovulatory women with
                    PCOS.
                  </p>
                </div>

                <p className="font-medium mb-2" style={{ color: "#4B3A33" }}>
                  Your plan may include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li style={{ color: "#4B3A33" }}>
                    Cycle tracking and timed intercourse guidance
                  </li>
                  <li style={{ color: "#4B3A33" }}>
                    Ovulation medications (doctor-prescribed)
                  </li>
                  <li style={{ color: "#4B3A33" }}>
                    Referral to fertility specialists if needed
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                  alt="Happy couple expecting a baby"
                  className="relative rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-wine flex items-center justify-center text-white text-2xl font-bold">
                  Hope
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                className="relative order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Medical consultation at Nexus Clinic"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -top-4 -left-4 p-4 rounded-xl bg-white shadow-xl">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#8C4F58" }}
                  >
                    Transparent pricing
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  Cost of PCOS Treatment
                  <span className="block text-wine text-2xl">
                    (Realistic, Not Guessy)
                  </span>
                </h2>

                <p className="text-lg mb-6" style={{ color: "#AC9990" }}>
                  PCOS costs vary because PCOS is not one treatment.
                </p>

                <div
                  className="p-6 rounded-xl mb-4"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <p className="font-bold mb-3" style={{ color: "#4B3A33" }}>
                    What usually drives cost:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Consultation and follow-ups",
                      "Blood tests",
                      "Pelvic ultrasound",
                      "Medications",
                      "Hair reduction or acne-scar treatments",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>
                        <span style={{ color: "#4B3A33" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">Specialist Test</p>
                    <p className="text-lg font-bold text-wine">RM138</p>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">Screening</p>
                    <p className="text-lg font-bold text-wine">RM480</p>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">Ultrasound</p>
                    <p className="text-lg font-bold text-wine">RM285</p>
                  </div>
                </div>

                <p className="text-sm italic" style={{ color: "#8C4F58" }}>
                  Your exact cost depends on what you actually need, not what a
                  package includes.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Rest of sections remain the same but with adjusted styling */}
        {/* ... (Treatment Phases, FAQ, CTA sections with existing content) ... */}

        {/* Treatment Phases */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
            >
              What PCOS Treatment Looks Like
              <span className="block text-wine">
                at Nexus Clinic Kuala Lumpur
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-lg mb-12"
              style={{ color: "#AC9990" }}
            >
              Think of your care in phases:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#8C4F58" }}
                  >
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#4B3A33" }}
                  >
                    {step.phase}
                  </h3>

                  {step.options && (
                    <div className="mb-3">
                      <p
                        className="font-medium mb-2"
                        style={{ color: "#8C4F58" }}
                      >
                        Main goals:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {step.options.map((option, i) => (
                          <li key={i} style={{ color: "#AC9990" }}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p style={{ color: "#4B3A33" }}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
            >
              Competitor Snapshot
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#F3EFEE" }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#8C4F58" }}
                >
                  What top PCOS pages do:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Pantai Hospitals: clear symptoms list, diagnosis approach",
                    "Gleneagles: OCPs for cycle regulation and hirsutism",
                    "Prince Court: patient-friendly education",
                    "KL women specialist: weight-loss with metformin and GLP-1",
                    "Fertility centres: PCOS and fertility FAQs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "#AC9990" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#F3EFEE" }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#8C4F58" }}
                >
                  Where Nexus Clinic wins:
                </h3>
                <ul className="space-y-3">
                  {[
                    "More human language, less 'textbook'",
                    "Clear symptom-based pathways",
                    "Evidence-based choices (Rotterdam criteria)",
                    "Aesthetic support aligned with guidelines",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "#8C4F58" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#8C4F58" }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
              alt="Peaceful moment of self-care"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Start with clarity.
                <span className="block text-cream">Not self-blame.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-8 text-white/90"
              >
                If you are searching for PCOS treatment in Kuala Lumpur or PCOS
                treatment in Malaysia, start with clarity. Not self-blame.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button
                  className="px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
                  style={{ backgroundColor: "#FAF8F7", color: "#8C4F58" }}
                >
                  Book Your Consultation
                </button>
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-6 text-white/80">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </motion.p>
              <motion.p variants={fadeInUp} className="text-white/80">
                Mobile: 016-7025699 / 03-21635699
              </motion.p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PCOSPage;
