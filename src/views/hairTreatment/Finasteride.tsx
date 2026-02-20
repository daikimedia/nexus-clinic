"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Droplets,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Target,
  Brain,
  Heart,
  Activity,
  Pill,
  FlaskConical,
  Scale,
  Gem,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
const FinasterideLanding = () => {
  const faqs = [
    {
      q: "Does finasteride regrow hair or just stop hair loss?",
      a: "It can do both. Many men see slower hair loss, and some experience new growth. Results vary by stage and consistency of use.",
    },
    {
      q: "How long does finasteride take to work?",
      a: "Most people need 3 to 6 months to notice improvement. A full assessment typically requires closer to 12 months of consistent use.",
    },
    {
      q: "What happens if I stop taking finasteride?",
      a: "The benefits gradually fade over time, and hair loss usually resumes. Finasteride only works while you're taking it consistently.",
    },
    {
      q: "Can finasteride cause depression or anxiety?",
      a: "Mood changes have been reported. Regulators advise vigilance and to stop finasteride 1mg for hair loss if depression or suicidal thoughts occur.",
    },
    {
      q: "Is finasteride safe for long-term use?",
      a: "Many people use it for months or years. Long-term use should include regular monitoring for side effects with your healthcare provider.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-cream font-[--font-inter] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-wine rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                  <Gem className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-[--font-georgia] text-5xl md:text-7xl text-brown leading-tight">
                  Stop the DHT.
                  <span className="block text-wine">Slow the shedding.</span>
                </h1>

                <p className="text-xl text-taupe max-w-lg">
                  Keep the hair you still have with doctor-prescribed
                  finasteride treatment for male pattern hair loss.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-wine text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Book Your Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full text-lg font-semibold hover:bg-wine hover:text-white transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    { icon: Shield, text: "Doctor Led" },
                    { icon: MapPin, text: "KLCC Location" },
                    { icon: Users, text: "Expert Care" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex flex-col items-center text-center space-y-2"
                    >
                      <item.icon className="w-6 h-6 text-rose" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-150 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                    alt="Nexus Clinic KL Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-10 -left-10 bg-glass backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-brown">Starting from</p>
                      <p className="text-2xl font-bold text-wine">
                        RM94
                        <span className="text-sm font-normal text-taupe">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How Finasteride Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light] relative"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                How Finasteride Works
              </h2>
              <p className="text-xl text-taupe">
                Understanding the science behind hair loss treatment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Blocks DHT",
                  description:
                    "Finasteride inhibits 5-alpha reductase, reducing DHT levels by up to 70%",
                },
                {
                  icon: Target,
                  title: "Protects Follicles",
                  description:
                    "Less DHT means reduced miniaturization of sensitive hair follicles",
                },
                {
                  icon: Sparkles,
                  title: "Preserves Hair",
                  description:
                    "Helps maintain existing hair and may stimulate regrowth over time",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-taupe/10 hover:border-wine/30 transition-all"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                Your Treatment Timeline
              </h2>
              <p className="text-xl text-taupe">
                What to expect on your hair restoration journey
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine to-rose hidden lg:block" />

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    time: "Weeks 1-8",
                    title: "Foundation Phase",
                    description:
                      "No visible changes yet. Your body is adjusting to the medication.",
                    icon: Clock,
                    position: "left",
                  },
                  {
                    time: "Months 3-6",
                    title: "Early Results",
                    description:
                      "Reduced shedding and subtle improvements begin to appear.",
                    icon: Activity,
                    position: "right",
                  },
                  {
                    time: "Months 9-12",
                    title: "Optimal Results",
                    description:
                      "Clear improvements visible. Best time to assess effectiveness.",
                    icon: Calendar,
                    position: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col ${item.position === "right" ? "lg:items-end" : ""}`}
                  >
                    <div
                      className={`lg:w-1/2 ${item.position === "right" ? "lg:ml-auto" : ""}`}
                    >
                      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative">
                        {/* Timeline Dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 hidden lg:block w-4 h-4 bg-wine rounded-full 
                        ${item.position === 'left' ? '-right-8' : '-left-8'}"
                        />

                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-wine" />
                          </div>
                          <span className="text-sm font-semibold text-wine">
                            {item.time}
                          </span>
                        </div>
                        <h3 className="text-2xl font-[--font-georgia] text-brown mb-2">
                          {item.title}
                        </h3>
                        <p className="text-taupe">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Good Fit / Not Good Fit */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light]"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                Is Finasteride Right For You?
              </h2>
              <p className="text-xl text-taupe">
                Understanding candidacy for treatment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Fit */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-green-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown">
                    Good Fit For
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Male pattern hair loss (temples, crown, mid scalp)",
                    "Early to moderate stages of thinning",
                    "Consistent with daily medication routine",
                    "Realistic expectations about results",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                      <span className="text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Not Good Fit */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-red-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown">
                    Not Recommended For
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Women or children",
                    "Patchy bald spots (alopecia areata)",
                    "Sudden shedding from stress/illness",
                    "Pregnant women (do not handle tablets)",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInRight}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                      <span className="text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects & Safety */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">Honest & Transparent</span>
              </div>
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                Side Effects & Safety
              </h2>
              <p className="text-xl text-taupe">
                What you need to know before starting treatment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Activity,
                  title: "Sexual Side Effects",
                  description:
                    "Decreased libido, erectile dysfunction, and ejaculation disorders reported. Most resolve after stopping.",
                },
                {
                  icon: Brain,
                  title: "Mood Changes",
                  description:
                    "Monitor for depression or anxiety. Stop immediately if suicidal thoughts occur and contact your doctor.",
                },
                {
                  icon: FlaskConical,
                  title: "PSA Testing",
                  description:
                    "Finasteride lowers PSA levels. Inform your doctor before any PSA tests.",
                },
                {
                  icon: AlertCircle,
                  title: "Breast Changes",
                  description:
                    "Seek medical advice if you notice lumps, pain, swelling, or nipple discharge.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-taupe/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-taupe">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-glass backdrop-blur-sm rounded-2xl border border-wine/20 max-w-4xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <Scale className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="text-sm text-brown">
                  <span className="font-semibold">Note:</span> Most men take
                  finasteride without major issues. Side effects are possible
                  but often reversible. The key is awareness and early action.
                  Discuss your full medical history, including any history of
                  depression or sexual health concerns, during your
                  consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light]"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-taupe">Clear costs, no surprises</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Generic Finasteride",
                  price: "RM94",
                  period: "per month",
                  features: [
                    "30 tablets",
                    "Doctor consultation included",
                    "Online prescription",
                  ],
                  popular: false,
                },
                {
                  title: "Branded Option",
                  price: "RM206",
                  period: "per month",
                  features: [
                    "Propecia",
                    "Follow-up monitoring",
                    "Priority support",
                  ],
                  popular: true,
                },
                {
                  title: "Complete Package",
                  price: "RM240",
                  period: "per month",
                  features: [
                    "Finasteride + Minoxidil",
                    "Monthly check-ins",
                    "PRP add-on available",
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                    plan.popular
                      ? "border-2 border-wine scale-105"
                      : "border border-taupe/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-wine text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-[--font-georgia] text-brown mb-4">
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-wine">
                      {plan.price}
                    </span>
                    <span className="text-taupe">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-rose" />
                        <span className="text-sm text-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.popular
                        ? "bg-wine text-white hover:bg-rose"
                        : "border-2 border-wine text-wine hover:bg-wine hover:text-white"
                    }`}
                  >
                    Select Plan
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-sm text-taupe mt-8"
            >
              *Prices are estimates and may vary based on your specific
              treatment plan
            </motion.p>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto text-white"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl mb-6">
                Ready to Start Your Hair Restoration Journey?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Don't wait until thinning becomes obvious. A short medical
                consult can tell you what type of hair loss you have and whether
                finasteride makes sense for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-wine px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-wine transition-colors"
                >
                  View Clinic Location
                </motion.button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Wisma UOA II, Jalan Pinang, KLCC area, Kuala Lumpur</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default FinasterideLanding;
