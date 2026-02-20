import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  ChevronRight,
  Droplets,
  Brain,
  Award,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const MasseterBotoxPage = () => {
  const faqs = [
    {
      q: "How long does masseter Botox last?",
      a: "Most people see results for about 3 to 6 months. Stronger muscles may wear off faster at first.",
    },
    {
      q: "How soon will I see results?",
      a: "Some people feel less tension within days. Visible jaw slimming usually becomes clearer around 4 to 6 weeks.",
    },
    {
      q: "Does masseter Botox help teeth grinding?",
      a: "It can reduce the force of grinding and clenching by relaxing the masseter muscle. Some people feel fewer jaw tension symptoms after treatment.",
    },
    {
      q: "Will masseter Botox make my face sag?",
      a: "It can, in some cases, especially if the goal is aggressive cosmetic slimming and the skin has less elasticity. A careful plan and realistic goals reduce the risk.",
    },
    {
      q: "Can men do masseter Botox?",
      a: "Yes. Men often request it for jaw tension, grinding, or to soften a bulky lower face. The dosing approach may differ based on muscle strength.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-light font-[--font-inter] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{
            background: `linear-linear(135deg, var(--color-cream) 0%, var(--color-light) 100%)`,
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-rose opacity-10 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-wine opacity-10 blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-glass backdrop-blur-sm border border-taupe/20 text-brown text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-wine" />
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-[--font-georgia] text-5xl sm:text-6xl lg:text-7xl text-brown mb-6 leading-tight"
            >
              A softer jawline.
              <br />
              <span className="text-wine">A quieter jaw.</span>
              <br />A more relaxed face.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-2xl mx-auto mb-10"
            >
              Masseter Botox helps slim a square jaw caused by muscle bulk. It
              can also ease jaw tension from clenching and teeth grinding.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-wine text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Book Your Consultation
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-glass backdrop-blur-sm border border-taupe/30 text-brown rounded-full font-medium text-lg hover:bg-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-taupe/20"
            >
              {[
                { icon: Shield, text: "Doctor-led assessment" },
                { icon: Heart, text: "Natural-looking results" },
                { icon: MapPin, text: "Central KL location" },
                { icon: Award, text: "Core service expertise" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <p className="text-sm text-brown font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Summary Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium mb-4 block">
                  Quick Summary
                </span>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  What Masseter Botox Does
                </h2>
                <p className="text-lg text-taupe mb-8 leading-relaxed">
                  Masseter Botox is a treatment where botulinum toxin is
                  injected into the masseter muscles, the strong chewing muscles
                  at the sides of your jaw. When these muscles relax, two things
                  can happen:
                </p>

                <div className="space-y-6">
                  {[
                    "Your jaw looks slimmer if the width came mainly from muscle size",
                    "Your jaw feels less tight if you clench, grind, or wake up with soreness",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-wine" />
                      </div>
                      <p className="text-brown text-lg">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={scaleIn}
                  className="mt-10 p-6 bg-[--color-cream] rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-wine" />
                    <div>
                      <p className="font-medium text-brown">
                        Quick in-clinic treatment
                      </p>
                      <p className="text-taupe">
                        Takes about 10-15 minutes • Return to normal routine
                        same day
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-linear-to-br from-wine to-rose p-1 rounded-3xl">
                  <div className="bg-white rounded-3xl p-8">
                    <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                      Why Your Jaw Looks "Wide"
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Masseter hypertrophy from clenching",
                        "Jaw bone structure prominence",
                        "Combination of both factors",
                        "Age-related volume changes",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-[--color-cream] rounded-xl"
                        >
                          <p className="text-brown">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-6 text-taupe text-sm italic">
                      *Masseter Botox works best when muscle bulk is a major
                      cause
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose opacity-20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Best For Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-cream]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                At Nexus Clinic KL
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                What Masseter Botox Is Best For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Jaw Slimming",
                  description:
                    "Create a softer, more tapered contour over time by relaxing overactive masseter muscles",
                  color: "from-wine to-rose",
                },
                {
                  icon: Brain,
                  title: "Teeth Grinding",
                  description:
                    "Reduce the force of clenching and grinding, leading to fewer 'tight jaw' mornings",
                  color: "from-rose to-taupe",
                },
                {
                  icon: Heart,
                  title: "TMJ Tension Relief",
                  description:
                    "Supportive treatment for jaw pain and TMD symptoms by reducing muscle overwork",
                  color: "from-taupe to-brown",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  />
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-6`}
                    >
                      <item.icon className="w-8 h-8 text-light" />
                    </div>
                    <h3 className="font-[--font-georgia] text-2xl text-brown mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium mb-4 block">
                  What to Expect
                </span>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  Results Timeline
                </h2>
                <p className="text-lg text-taupe mb-8">
                  Masseter Botox is not a "one-night" change. It's gradual, and
                  that is actually a good thing because it looks natural.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      time: "Within days to 2 weeks",
                      desc: "First changes in tension",
                    },
                    { time: "1 to 2 weeks", desc: "Visible slimming begins" },
                    { time: "4 to 6 weeks", desc: "Results become clearer" },
                    { time: "3 to 6 months", desc: "Results typically last" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center shrink-0 text-white font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-[--font-georgia] text-xl text-brown mb-1">
                          {item.time}
                        </p>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-[--color-cream] p-8 rounded-3xl">
                  <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                    Treatment Experience
                  </h3>
                  <p className="text-taupe mb-6 leading-relaxed">
                    Most patients describe it as quick and manageable. You may
                    feel small pinches and slight pressure. Some people choose
                    numbing cream, especially if they are nervous, but many do
                    not need it.
                  </p>
                  <div className="p-6 bg-white rounded-2xl">
                    <p className="text-brown italic">
                      "The most common 'after' feeling is mild tenderness at the
                      injection points for a short time."
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 -left-6 w-24 h-24 bg-wine opacity-10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose opacity-10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Units & Pricing Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-cream]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                Investment
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                Units & Pricing
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                  Units Needed
                </h3>
                <p className="text-taupe mb-6">
                  Units depend on your masseter size, facial shape goals, and
                  whether you want help for grinding.
                </p>
                <div className="p-6 bg-[--color-cream] rounded-2xl">
                  <p className="text-3xl font-[--font-georgia] text-wine mb-2">
                    20-50 units
                  </p>
                  <p className="text-taupe">
                    per side, based on muscle strength
                  </p>
                </div>
                <p className="mt-4 text-sm text-taupe italic">
                  At Nexus Clinic KL, your plan should be based on your face,
                  not a one-size template.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                  Price Range
                </h3>
                <p className="text-taupe mb-6">
                  Malaysia price references for masseter Botox:
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    { label: "Per unit range", value: "RM30 - RM50" },
                    { label: "Average total", value: "RM1,200 - RM2,000" },
                    { label: "Nexus Clinic KL", value: "RM1,500 - RM2,500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-taupe/10"
                    >
                      <span className="text-brown">{item.label}</span>
                      <span className="font-[--font-georgia] text-wine text-xl">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-taupe italic">
                  *If you see "too cheap to be true" promos, be careful. Always
                  choose qualified medical providers.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                Compare Options
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                Masseter Botox vs Other Treatments
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "vs Jawline Filler",
                  botox: "Relaxes muscle, reduces bulk over time",
                  filler: "Adds structure and definition instantly",
                  note: "If jaw looks wide mainly from muscle, Botox is first choice",
                },
                {
                  title: "vs HIFU",
                  botox: "Changes muscle activity and bulk",
                  filler: "Focuses on lifting and tightening skin",
                  note: "HIFU alone will not 'shrink' the masseter",
                },
                {
                  title: "vs Surgery",
                  botox: "Non-surgical and temporary",
                  filler: "Permanent and more invasive",
                  note: "Most choose Botox first for lower commitment",
                },
                {
                  title: "for Teeth Grinding",
                  botox: "Reduces muscle force",
                  filler: "Night guard protects teeth",
                  note: "Some people use both",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-[--color-cream] rounded-2xl"
                >
                  <h3 className="font-[--font-georgia] text-xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-start gap-2">
                      <span className="text-wine font-medium">Botox:</span>
                      <span className="text-taupe">{item.botox}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-wine font-medium">
                        Alternative:
                      </span>
                      <span className="text-taupe">{item.filler}</span>
                    </p>
                  </div>
                  <p className="text-sm text-brown italic bg-white p-3 rounded-xl">
                    {item.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br from-wine/5 to-rose/5 rounded-full"
            />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Ready for a Change?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6"
            >
              Ready for a softer jawline
              <br />
              <span className="text-wine">and a calmer jaw?</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-taupe mb-10">
              Book a consultation at Nexus Clinic Kuala Lumpur to get a plan
              based on your face shape, muscle strength, and goals.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-wine text-white rounded-full font-medium text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
              >
                Schedule Your Consultation
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-taupe"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-wine" />
                <span>Wisma UOA II, Jalan Pinang</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-taupe" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-wine" />
                <span>LG 10, Lower Ground Floor</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default MasseterBotoxPage;
