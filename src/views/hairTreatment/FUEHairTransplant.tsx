"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Clock,
  Shield,
  Heart,
  Sparkles,
  Droplets,
  Sun,
  ChevronRight,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Quote,
  Award,
  Target,
  Activity,
  Thermometer,
  Flower2,
  Waves,
  Wind,
  Sparkle,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
const FUEHairTransplant = () => {
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream via-white to-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose blur-3xl"
          />

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-taupe/10 rounded-full backdrop-blur-sm border border-taupe/20"
            >
              <Sparkles className="w-4 h-4 text-wine" />
              <span className="text-sm text-brown tracking-wide">
                NEXUS CLINIC KUALA LUMPUR
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-['Georgia',serif] text-5xl md:text-7xl lg:text-8xl text-brown mb-8 leading-tight"
            >
              Your new hairline
              <span className="block text-wine">should look like it</span>
              always belonged to you
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            >
              If your hair is thinning, you may feel older overnight. With FUE
              hair transplant in Kuala Lumpur, you can rebuild a natural look,
              step by step.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-wine text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-rose"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-wine text-wine rounded-full hover:bg-wine hover:text-white transition-all duration-300"
              >
                Watch Stories
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-wine rounded-full flex justify-center">
              <div className="w-1 h-3 bg-wine rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.section>

        {/* Trust Badges */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-20 px-4 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Calendar,
                  title: "Founded 2001",
                  desc: "Two decades of confidential, professional care",
                },
                {
                  icon: MapPin,
                  title: "Kuala Lumpur",
                  desc: "Wisma UOA II, Jalan Pinang - In the heart of KL",
                },
                {
                  icon: Award,
                  title: "Specialized Care",
                  desc: "FUE transplants & comprehensive hair loss treatments",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group p-8 bg-cream rounded-3xl hover:bg-wine transition-all duration-500 cursor-pointer"
                >
                  <item.icon className="w-10 h-10 text-wine group-hover:text-white mb-4 transition-colors" />
                  <h3 className="font-['Georgia',serif] text-2xl text-brown group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-taupe group-hover:text-white/90 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Answers Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-16 text-center"
            >
              Quick <span className="text-wine">Answers</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Scissors,
                  q: "What is FUE?",
                  a: "It removes follicular units one by one using tiny punches, then places them in thinning areas.",
                },
                {
                  icon: Heart,
                  q: "Is it painful?",
                  a: "Local anaesthesia is used. You may feel pressure, then mild soreness later.",
                },
                {
                  icon: Clock,
                  q: "When will I see results?",
                  a: "Most visible change builds over months. Full results around 9 to 12 months or longer.",
                },
                {
                  icon: Shield,
                  q: "Will there be scars?",
                  a: "FUE usually leaves many very tiny scars, not a long strip scar.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-3xl hover:bg-cream transition-all duration-300 border border-taupe/20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-wine rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                    <item.icon className="relative w-8 h-8 text-wine group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {item.q}
                    </h3>
                    <p className="text-taupe leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why FUE Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4 bg-linear-to-br from-wine to-rose overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-white mb-8">
                  Why FUE is the most searched hair transplant option in
                  Malaysia
                </h2>

                <p className="text-white/90 text-xl mb-12 leading-relaxed">
                  People in Kuala Lumpur want results that look normal in real
                  life. Not just in before and after photos.
                </p>

                <div className="space-y-6">
                  {[
                    "No long strip scar on the back of the head",
                    "Quicker healing for many patients",
                    "Perfect for hairline work and detail areas like temples",
                    "Malaysia's strong medical services reputation",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[40px] transform rotate-3" />
                <div className="relative bg-white/20 backdrop-blur-md p-12 rounded-[40px] border border-white/30">
                  <h3 className="font-['Georgia',serif] text-3xl text-white mb-6">
                    What is FUE?
                  </h3>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    FUE stands for follicular unit excision. Your surgeon
                    removes tiny natural hair groupings, usually 1 to 4 hairs.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    These grafts come from the donor area at the back of the
                    scalp. That area usually keeps hair thicker for longer.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Procedure Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-8 text-center"
            >
              The <span className="text-wine">Journey</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe text-center max-w-3xl mx-auto mb-16"
            >
              Every clinic has its own workflow, but FUE usually follows the
              same core stages
            </motion.p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine via-rose to-taupe hidden lg:block" />

              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Consultation & Assessment",
                    desc: "Your doctor checks your hair loss pattern and donor density. You discuss your styling habits and daily routine.",
                    icon: Users,
                    align: "left",
                  },
                  {
                    step: "02",
                    title: "Hairline Design",
                    desc: "A good hairline matches your face and age. This is where natural results begin.",
                    icon: Target,
                    align: "right",
                  },
                  {
                    step: "03",
                    title: "Donor Preparation",
                    desc: "The donor area is trimmed. Local anaesthesia is used for comfort.",
                    icon: Droplets,
                    align: "left",
                  },
                  {
                    step: "04",
                    title: "Extraction & Placement",
                    desc: "Grafts are removed one by one using micro punches, then placed to follow natural direction.",
                    icon: Sparkles,
                    align: "right",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    className={`flex flex-col ${item.align === "right" ? "lg:items-end" : ""}`}
                  >
                    <div
                      className={`relative lg:w-1/2 ${item.align === "right" ? "lg:ml-auto" : ""}`}
                    >
                      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-taupe/20 hover:shadow-xl transition-all duration-500 group">
                        <div className="flex items-center gap-6 mb-4">
                          <span className="text-4xl font-['Georgia',serif] text-wine opacity-30 group-hover:opacity-100 transition-opacity">
                            {item.step}
                          </span>
                          <item.icon className="w-8 h-8 text-wine" />
                        </div>
                        <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                          {item.title}
                        </h3>
                        <p className="text-taupe leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Recovery Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4 bg-cream"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-16 text-center"
            >
              Recovery <span className="text-wine">Timeline</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  period: "First 3 Days",
                  icon: Thermometer,
                  desc: "Tight, sore scalp is common. Swelling can happen.",
                },
                {
                  period: "Days 4-10",
                  icon: Wind,
                  desc: "Scabbing forms, then starts to fall. You must avoid picking.",
                },
                {
                  period: "Weeks 3-8",
                  icon: Flower2,
                  desc: "Shedding can happen. This can look scary, but it is often part of the cycle.",
                },
                {
                  period: "Months 3-6",
                  icon: Activity,
                  desc: "New growth starts to show. It may look fine at first, then thickens.",
                },
                {
                  period: "Months 9-12+",
                  icon: Sun,
                  desc: "Most people see their main result in this window.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group bg-white p-8 rounded-3xl hover:bg-wine transition-all duration-500 cursor-pointer"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-wine rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                    <item.icon className="relative w-10 h-10 text-wine group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-xl text-brown group-hover:text-white mb-3 transition-colors">
                    {item.period}
                  </h3>
                  <p className="text-taupe group-hover:text-white/90 transition-colors text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FUE vs Others Comparison */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-16 text-center"
            >
              FUE <span className="text-wine">vs</span> Others
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  method: "FUE",
                  desc: "Individual graft removal",
                  feature: "Many very tiny scars, usually hard to notice",
                  icon: Sparkle,
                },
                {
                  method: "FUT (Strip)",
                  desc: "A strip is removed, then grafts are separated",
                  feature: "Can leave a single larger scar",
                  icon: Waves,
                },
                {
                  method: "DHI",
                  desc: "Often marketed for precise placement",
                  feature: "Still needs proper extraction and planning",
                  icon: Target,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, rotateY: 5 }}
                  className="group perspective"
                >
                  <div className="bg-white p-8 rounded-3xl border border-taupe/20 hover:border-wine transition-all duration-500 h-full">
                    <item.icon className="w-12 h-12 text-wine mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-['Georgia',serif] text-2xl text-brown mb-3">
                      {item.method}
                    </h3>
                    <p className="text-taupe mb-4">{item.desc}</p>
                    <p className="text-sm text-wine font-medium">
                      {item.feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mt-12 italic"
            >
              In real life, the "best" option is the one that fits your scalp,
              donor, and goals.
            </motion.p>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4 bg-linear-to-br from-brown to-wine overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-white mb-8 text-center"
            >
              Investment in <span className="text-cream">You</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-16"
            >
              FUE hair transplant cost in Kuala Lumpur and Malaysia
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <h3 className="font-['Georgia',serif] text-2xl text-white mb-6">
                    Cost Factors
                  </h3>
                  {[
                    "Number of grafts",
                    "Clinic reputation and credentials",
                    "City overhead (KL can be higher)",
                    "Add-ons like PRP and medicines",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <h3 className="font-['Georgia',serif] text-2xl text-white mb-6">
                    What You May See Online
                  </h3>
                  {[
                    "RM 6,500 to RM 15,000 range",
                    "RM 6 to RM 12 per graft",
                    "Starting from RM 5,000 packages",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <Quote className="w-4 h-4 text-white" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl"
              >
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                  Important Advice
                </h3>
                <p className="text-taupe text-lg mb-8">
                  Do not compare price without comparing what is included. Ask
                  about doctor involvement, graft handling, and follow-up
                  support.
                </p>
                <div className="space-y-4">
                  {[
                    "Doctor involvement",
                    "Graft handling",
                    "Follow-up support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* People Also Ask Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-16 text-center"
            >
              People Also <span className="text-wine">Ask</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "How much does FUE hair transplant cost in Malaysia?",
                "Is FUE hair transplant painful?",
                "How long is recovery after FUE?",
                "When can I wash my hair after FUE?",
                "Why does transplanted hair shed after surgery?",
                "How long does an FUE hair transplant last?",
                "Does FUE leave scars?",
                "How many grafts do I need for my hairline?",
                "Is FUE better than FUT?",
                "Can an FUE hair transplant fail?",
                "Is Malaysia a good place for FUE hair transplant?",
                "What should I avoid after FUE?",
              ].map((question, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-taupe/20 hover:bg-cream transition-all duration-300 cursor-pointer"
                >
                  <AlertCircle className="w-5 h-5 text-wine group-hover:scale-110 transition-transform" />
                  <p className="text-brown flex-1">{question}</p>
                  <ChevronRight className="w-5 h-5 text-taupe group-hover:text-wine group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Nexus Clinic Approach */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4 bg-cream overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div variants={scaleIn} className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-wine rounded-full blur-2xl opacity-30" />
                <Heart className="relative w-16 h-16 text-wine" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-8"
            >
              Nexus Clinic <span className="text-wine">Approach</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-3xl mx-auto mb-12"
            >
              At Nexus Clinic Kuala Lumpur, the goal should be simple. Make the
              plan feel safe, private, and realistic.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                "A graft estimate range",
                "A hairline design explanation",
                "A downtime plan that fits your work life",
                "A maintenance plan for existing hair",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative py-32 px-4 bg-light"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={scaleIn} className="relative mb-12 hidden">
              <div className="absolute inset-0 bg-wine rounded-full blur-3xl opacity-20" />
              <img
                src="/api/placeholder/120/120"
                alt="Nexus Clinic"
                className="relative w-24 h-24 mx-auto rounded-full border-4 border-wine"
              />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-8"
            >
              Begin Your <span className="text-wine">Natural</span> Journey
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-taupe mb-12">
              If you want a natural hairline, start with a calm consult. Ask for
              a plan that matches your face, hair type, and future loss pattern.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-wine text-white rounded-full overflow-hidden shadow-2xl hover:shadow-wine/30 transition-shadow"
              >
                <span className="relative z-10 flex items-center gap-3 text-xl">
                  Book Your Consultation
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-rose to-wine"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center justify-center gap-4 text-taupe"
            >
              <MapPin className="w-4 h-4" />
              <span>Wisma UOA II, Jalan Pinang, Kuala Lumpur</span>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default FUEHairTransplant;
