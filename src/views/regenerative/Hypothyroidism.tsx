"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Droplet,
  Shield,
  Clock,
  Coffee,
  Moon,
  Apple,
  Heart,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Syringe,
  Pill,
  Scale,
  Droplets,
  Users,
  HeartPulse,
  MapPin,
  DollarSign,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const HypothyroidLanding = () => {
  const faqs = [
    {
      q: "What is the best treatment for hypothyroidism?",
      a: "For most people, the standard treatment is thyroid hormone replacement with levothyroxine, adjusted based on blood tests.",
    },
    {
      q: "Can hypothyroidism be cured permanently?",
      a: "It depends on the cause. Many cases (like Hashimoto's) are long-term and managed with ongoing medication rather than 'cured'.",
    },
    {
      q: "How do I know if I have hypothyroidism or just stress?",
      a: "A thyroid function test (TSH and Free T4) helps separate hypothyroidism from other causes of fatigue and weight changes.",
    },
    {
      q: "How long does levothyroxine take to work?",
      a: "You may need 4 to 8 weeks to start feeling better.",
    },
    {
      q: "What should I avoid when taking levothyroxine?",
      a: "Avoid taking it with food and avoid taking it close to calcium or iron supplements. Many sources recommend taking it on an empty stomach and spacing iron or calcium by several hours.",
    },
    {
      q: "Can I take levothyroxine at night?",
      a: "Yes, for many people it can be taken at bedtime as long as it is several hours after food. Malaysia's guideline notes bedtime dosing can be as efficacious as morning dosing, and timing should support adherence.",
    },
    {
      q: "How often should I test TSH after starting treatment?",
      a: "ATA guidance for patients notes blood checks around 6 to 8 weeks after starting or changing dose.",
    },
    {
      q: "Will hypothyroidism cause weight gain?",
      a: "Hypothyroidism can slow metabolism and contribute to weight gain.",
    },
    {
      q: "Does hypothyroidism cause hair loss?",
      a: "Thinning hair is listed among common symptoms of hypothyroidism.",
    },
    {
      q: "Is Hashimoto's the same as hypothyroidism?",
      a: "Hashimoto's is an autoimmune disease that commonly causes hypothyroidism, but hypothyroidism can have other causes too.",
    },
    {
      q: "Is levothyroxine safe in pregnancy?",
      a: "NHS states levothyroxine is safe in pregnancy, and dose may need to increase with regular testing.",
    },
    {
      q: "How much does a thyroid test cost in Kuala Lumpur?",
      a: "Some providers list basic thyroid screening packages from around RM100, but prices vary depending on what's included.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter']">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Medical professional consulting with patient about thyroid health"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
                  <HeartPulse className="w-4 h-4" />
                  Nexus Clinic Kuala Lumpur
                </span>
                <h1 className="font-['Georgia'] text-4xl lg:text-5xl xl:text-6xl font-bold text-brown leading-tight mb-6">
                  Tired, foggy, and "off" for months? It might be your thyroid,
                  not your willpower.
                </h1>
                <p className="text-xl text-taupe mb-8">
                  Hypothyroidism can make life feel slower in every way: energy,
                  mood, digestion, weight, and even your voice.
                </p>
                <p className="text-lg text-rose mb-8">
                  At Nexus Clinic Kuala Lumpur, we start with clear testing and
                  a doctor-guided plan, so you stop guessing and start feeling
                  steady again.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    Book Consultation <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold hover:bg-wine hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Medically assessed
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">
                        Medically assessed, blood-test guided, doctor monitored
                        programmes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">
                        Central KL location (Wisma UOA II, Jalan Pinang): LG10,
                        Lower Ground Floor, 50450 Kuala Lumpur. Mobile:
                        +6016-7025699 / +603-21635699
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">
                        Clear follow-up steps and medication education (because
                        how you take thyroid meds matters)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">
                        Private, respectful care (no judgement, no rushed
                        consults)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What Is Hypothyroidism with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div variants={fadeInLeft}>
                <span className="inline-block bg-cream text-wine px-4 py-2 rounded-full text-sm mb-4">
                  Understanding Your Thyroid
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                  What Is Hypothyroidism?
                </h2>
                <p className="text-xl text-taupe mb-6">
                  Hypothyroidism means your thyroid gland is not making enough
                  thyroid hormone. That slows down many body functions,
                  including metabolism, energy, and temperature control.
                </p>
                <p className="text-lg text-brown">
                  In real life, it often feels like:
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-100 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
                  alt="Thyroid gland anatomy illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-wine/20 to-transparent"></div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Activity, text: "You are tired even after sleep" },
                {
                  icon: Scale,
                  text: "Your weight changes despite 'normal eating'",
                },
                { icon: Droplets, text: "Your hair and skin feel different" },
                { icon: Heart, text: "Your mood feels flat or anxious" },
                {
                  icon: Users,
                  text: "Your periods can change (for many women)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-cream p-6 rounded-xl text-center"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <p className="text-brown">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Common Symptoms with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2080&auto=format&fit=crop"
                  alt="Woman experiencing fatigue and brain fog"
                  className="w-full h-125 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <span className="inline-block bg-white text-wine px-4 py-2 rounded-full text-sm mb-4">
                  Know the Signs
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                  Common Symptoms (The Ones People Google in Malaysia)
                </h2>
                <p className="text-xl text-taupe mb-6">
                  Symptoms can build slowly, so it is easy to blame stress,
                  work, or "getting older." Mayo Clinic lists classic symptoms
                  like fatigue, weight gain, constipation, dry skin, slowed
                  heart rate, and thinning hair.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Fatigue and low motivation",
                "Weight gain or difficulty losing weight",
                "Feeling cold more than others",
                "Constipation",
                "Dry skin and brittle nails",
                "Hair thinning or hair loss",
                "Puffy face or swelling",
                "Low mood, brain fog, poor focus",
                "Heavy or irregular periods",
              ].map((symptom, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-wine rounded-full"></div>
                  <p className="text-brown">{symptom}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-lg text-rose font-semibold"
            >
              If you feel several of these together, it is worth doing a thyroid
              function test.
            </motion.p>
          </motion.div>
        </section>

        {/* Causes with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              Why It Happens (Causes of Hypothyroidism)
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  1) Hashimoto's thyroiditis
                </h3>
                <p className="text-taupe">
                  Hashimoto's is an autoimmune condition where the immune system
                  attacks the thyroid, which can lead to hypothyroidism over
                  time.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Syringe className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  2) Thyroid surgery or radioiodine treatment
                </h3>
                <p className="text-taupe">
                  Some people become hypothyroid after thyroid procedures.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Pill className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  3) Iodine imbalance, certain medications, or pituitary causes
                </h3>
                <p className="text-taupe">
                  Your doctor checks your history and labs to understand the
                  "why," not just the number.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft}>
                <div className="bg-wine/5 p-8 rounded-xl h-full">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    Hypothyroidism vs "Just Hormone Problems"
                  </h3>
                  <p className="text-taupe text-lg">
                    A big reason people delay testing is they think symptoms are
                    "general." The good news is hypothyroidism is one of the
                    most testable causes of chronic tiredness and weight
                    changes.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop"
                  alt="Blood test for thyroid function"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Diagnosis Section with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                Diagnosis in Kuala Lumpur: How We Confirm It Properly
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    The key tests (simple explanation)
                  </h3>
                  <p className="text-taupe mb-4">
                    Most diagnoses start with blood tests:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-wine" />
                      <span className="text-brown">
                        TSH (thyroid-stimulating hormone)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-wine" />
                      <span className="text-brown">Free T4 (thyroxine)</span>
                    </li>
                  </ul>
                  <p className="text-taupe mt-4">
                    NHS explains these blood tests are used to check how much
                    TSH and T4 is in your blood. Many Malaysian hospital pages
                    also highlight thyroid function tests for diagnosis.
                  </p>
                  <div className="mt-6 p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-wine mb-2">
                      You may also need:
                    </h4>
                    <p className="text-brown">
                      Thyroid antibodies (to check for Hashimoto's)
                    </p>
                    <p className="text-brown mt-2">
                      Other tests to rule out look-alikes (iron deficiency,
                      vitamin levels, diabetes, etc.), depending on symptoms
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    Subclinical Hypothyroidism
                  </h3>
                  <p className="text-taupe mb-4">(High TSH, Normal T4)</p>
                  <p className="text-brown mb-4">
                    This is common and confusing. You may have symptoms, but T4
                    is still in range.
                  </p>
                  <p className="text-brown">
                    Malaysia's Clinical Practice Guideline includes an approach
                    where treatment is more likely when TSH is higher (for
                    example ≥10), and a watch-and-repeat approach is often used
                    for milder cases, especially depending on age and symptoms.
                  </p>
                </div>
                <div className="relative h-50 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                    alt="Doctor explaining test results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Treatment Section with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              Hypothyroidism Treatment in Malaysia: What Actually Works
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-xl"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  The main treatment: Levothyroxine
                </h3>
                <p className="text-taupe mb-4">
                  Levothyroxine is the standard treatment for hypothyroidism.
                  Malaysia's Clinical Practice Guideline lists levothyroxine as
                  the recommended mainstay treatment.
                </p>
                <p className="text-taupe">
                  Pantai also explains that levothyroxine replaces thyroxine,
                  often starting low and increasing gradually, with blood tests
                  used to monitor levels. Gleneagles likewise describes
                  hypothyroidism as typically treated with a daily dose of
                  levothyroxine, adjusted through regular blood tests.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop"
                  alt="Levothyroxine medication"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-xl"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  What good treatment aims to do
                </h3>
                <p className="text-taupe">
                  Malaysia's guideline describes goals like:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    resolving symptoms
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    normalising TSH and thyroid hormone levels
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    avoiding overtreatment (especially in older adults)
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <Clock className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      How long does it take?
                    </h4>
                    <p className="text-xs text-taupe">
                      4-8 weeks to feel better
                    </p>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <AlertCircle className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      Hidden reason
                    </h4>
                    <p className="text-xs text-taupe">
                      Inconsistent absorption
                    </p>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl col-span-2">
                    <Coffee className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      Real KL-life examples
                    </h4>
                    <p className="text-xs text-taupe">
                      Coffee, teh tarik, supplements
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine text-white p-8 rounded-xl mb-12"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                Best practice for taking levothyroxine:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Take it on an empty stomach</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Wait 30 to 60 minutes before breakfast</span>
                </li>
                <li className="flex items-start gap-3">
                  <Moon className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    Or take it at night, 3 to 4 hours after dinner (some people
                    do better with this)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    Avoid taking it close to calcium or iron supplements
                    (separate by about 4 hours)
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                Monitoring and follow-up
              </h3>
              <p className="text-taupe mb-2">
                The American Thyroid Association patient page notes doctors
                often check blood 6 to 8 weeks after starting or changing the
                dose.
              </p>
              <p className="text-taupe mb-2">
                StatPearls also describes monitoring TSH about 6 to 8 weeks
                after starting, then later intervals once stable.
              </p>
              <p className="text-taupe">
                NHS notes you may have blood tests quite often at first, but
                once stable, levels are often checked yearly.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Diet and Lifestyle with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              Diet, Supplements, and Lifestyle (What Helps Without Hype)
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                className="relative h-100 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
                  alt="Healthy diet for thyroid health"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-xl mb-6">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    Do you need a "thyroid diet"?
                  </h3>
                  <p className="text-taupe mb-4">
                    There is no magic diet that replaces thyroid hormone. If you
                    are truly hypothyroid, medication is the foundation.
                  </p>
                  <p className="text-taupe">
                    That said, lifestyle can make symptoms easier:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-brown">
                      <Moon className="w-4 h-4 text-wine" />
                      Prioritise sleep
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Activity className="w-4 h-4 text-wine" />
                      Build muscle and walk regularly
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Apple className="w-4 h-4 text-wine" />
                      Focus on protein, fibre, and steady meals (helps energy
                      swings)
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Droplets className="w-4 h-4 text-wine" />
                      Treat constipation with water, fibre, and movement
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    Supplements: be careful
                  </h3>
                  <p className="text-taupe">
                    Some supplements can interfere with absorption or blood
                    tests. Always tell your doctor what you take, especially
                    biotin, iron, calcium, and "metabolism boosters."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Rest of sections remain the same but with consistent styling */}
        {/* Cost Section */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              Cost of Hypothyroidism Testing and Treatment in Malaysia (Kuala
              Lumpur)
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <DollarSign className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Screening Package
                </h3>
                <p className="text-taupe">
                  A Columbia Asia thyroid screening package is listed at RM100
                  (includes TSH and some minerals).
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <DollarSign className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Health Screening
                </h3>
                <p className="text-taupe">
                  Some health screening packages at major hospitals include
                  thyroid tests as part of broader panels (prices vary widely,
                  for example RM799 in one Sunway package listing).
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <Pill className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Medication cost
                </h3>
                <p className="text-taupe">
                  Malaysian online pharmacy listings show levothyroxine brands
                  such as Euthyrox with listed prices (example listings include
                  RM16.50 for a 100 mcg strip on one platform).
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-rose font-semibold"
            >
              Your monthly cost depends on: dosage, brand vs generic, follow-up
              testing schedule
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-center text-brown mt-4"
            >
              The safest way to budget is to ask for: consult fee + lab range +
              follow-up plan.
            </motion.p>
          </motion.div>
        </section>

        {/* Competitors */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-4"
            >
              "Top Competitors" Snapshot
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12"
            >
              (Google Results Review)
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">
                  Pantai Hospitals
                </h3>
                <p className="text-brown">
                  clear diagnosis and levothyroxine treatment overview, dose
                  titration, and monitoring approach.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">Gleneagles</h3>
                <p className="text-brown">
                  patient-friendly symptom list and the "lifelong levothyroxine
                  + blood test adjustment" message.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">Prince Court</h3>
                <p className="text-brown">
                  positions endocrine specialist services and diagnostic tests
                  for thyroid conditions in KL.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">
                  Screening-focused pages
                </h3>
                <p className="text-brown">
                  (Beacon, Columbia Asia, Sunway): highlight convenient TFT
                  panels and packages.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine text-white p-8 rounded-xl"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                Where Nexus Clinic Kuala Lumpur can stand out:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    Explain the "how to take levothyroxine" rules clearly (this
                    is where many patients struggle)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    Make follow-up expectations simple (6 to 8 weeks after
                    changes, then maintenance)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    Keep it human: symptoms, routines, and realistic timelines,
                    not just textbook definitions
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ */}
        <FAQ data={faqs} />

        {/* CTA with Background Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Modern medical clinic in Kuala Lumpur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brown/70 backdrop-blur-sm"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-cream mb-8">
              If you are searching for hypothyroidism treatment in Malaysia or
              thyroid testing in Kuala Lumpur, start with clear labs and a plan
              you understand.
            </motion.p>
            <motion.div variants={scaleIn}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine text-white px-12 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Book Your Consultation Today
              </motion.button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 text-white">
              <p className="font-semibold text-xl">Nexus Clinic Kuala Lumpur</p>
              <p className="mt-2">
                LGN, Lower Ground Floor, Wisma UOA II, No.21 Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="mt-2">Mobile: +6016-7025699 / +603-21635699</p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HypothyroidLanding;
