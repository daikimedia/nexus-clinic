"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Heart,
  Leaf,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Syringe,
  Wind,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const HairMesotherapyLanding = () => {
  const faqs = [
    {
      q: "Does hair mesotherapy really work?",
      a: "Yes, especially for early thinning. It delivers nutrients directly to the scalp and supports follicle function. Results are gradual, with most patients noticing changes within weeks to months.",
    },
    {
      q: "How many sessions do I need?",
      a: "Most plans start with 4-6 sessions initially, followed by maintenance every 1-3 months depending on your specific case and response to treatment.",
    },
    {
      q: "Is it painful?",
      a: "Most patients describe it as mild pinching or pressure. We apply local anaesthetic to ensure your comfort throughout the procedure.",
    },
    {
      q: "What are the side effects?",
      a: "Mild redness, swelling, or tenderness at injection sites are common and typically resolve within a few days.",
    },
    {
      q: "When will I see results?",
      a: "Results are gradual. Most patients notice improved quality and thickness within weeks to a few months of starting treatment.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          {/* Background Ornament */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              variants={fadeInLeft}
              className="absolute -top-1/2 -left-1/2 w-full h-full"
            >
              <div className="w-200 h-200 rounded-full bg-linear-to-r from-wine/5 to-rose/5 blur-3xl"></div>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full"
            >
              <div className="w-200 h-200 rounded-full bg-linear-to-l from-taupe/5 to-brown/5 blur-3xl"></div>
            </motion.div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-taupe/20"
            >
              <Sparkles className="w-4 h-4 text-wine" />
              <span className="text-sm font-medium text-brown">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-['Georgia',serif] text-brown mb-6 leading-tight"
            >
              Feed your follicles
              <span className="block text-wine">again.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-2xl mx-auto mb-8"
            >
              Bring back thicker-looking hair with doctor-guided mesotherapy in
              the heart of Kuala Lumpur
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-wine text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Your Assessment
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                className="px-8 py-4 bg-white/70 backdrop-blur-sm text-brown rounded-2xl font-semibold border border-taupe/30 hover:bg-white/90 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Users, label: "Happy Patients", value: "5000+" },
                { icon: Award, label: "MOH Registered", value: "Certified" },
                { icon: Clock, label: "Session Time", value: "30-45 min" },
                {
                  icon: MapPin,
                  label: "KL City Center",
                  value: "Wisma UOA II",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                  <div className="text-lg font-bold text-brown">
                    {stat.value}
                  </div>
                  <div className="text-sm text-taupe">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-wine/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-wine rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* What is Mesotherapy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
                >
                  <Syringe className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    The Procedure
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-['Georgia',serif] text-brown mb-6"
                >
                  What is hair mesotherapy?
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe mb-6"
                >
                  A minimally invasive treatment that injects a tailored mix of
                  nutrients into the scalp at 2-4mm depth to nourish follicles
                  and support healthier growth.
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4">
                  {[
                    "Delivers nutrients closer to the follicles",
                    "Supports scalp circulation and environment",
                    "Helps reduce scalp inflammation",
                    "Improves hair quality and thickness over time",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInRight}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square bg-[url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80)] bg-cover rounded-3xl bg-linear-to-br from-wine to-rose p-1"></div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-taupe/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wine/20 flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <div className="text-sm text-taupe">Injection depth</div>
                      <div className="text-lg font-bold text-brown">2-4 mm</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                Why choose hair mesotherapy?
              </h2>
              <p className="text-lg text-taupe">
                A gentle, effective approach to hair restoration that fits your
                lifestyle
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Non-surgical",
                  description:
                    "Minimally invasive with no downtime, perfect for busy KL professionals",
                },
                {
                  icon: Leaf,
                  title: "Natural Results",
                  description:
                    "Gradual improvement that looks and feels natural",
                },
                {
                  icon: Shield,
                  title: "Doctor-Led",
                  description:
                    "MOH registered clinic with personalized treatment plans",
                },
                {
                  icon: Sparkles,
                  title: "Targeted Support",
                  description: "Direct nutrient delivery to thinning areas",
                },
                {
                  icon: Calendar,
                  title: "Quick Sessions",
                  description: "30-45 minute treatments that fit your schedule",
                },
                {
                  icon: Wind,
                  title: "Scalp Health",
                  description:
                    "Improves overall scalp condition and circulation",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-wine/10 to-rose/10 group-hover:from-wine group-hover:to-rose transition-all duration-300 flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-wine group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-taupe leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                Your Journey at Nexus Clinic
              </h2>
              <p className="text-lg text-taupe">
                A simple, comfortable process from assessment to results
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine via-rose to-taupe hidden lg:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Scalp Assessment",
                    description:
                      "Doctor-led evaluation of your hair loss pattern and scalp health",
                    icon: Users,
                    align: "left",
                  },
                  {
                    step: "02",
                    title: "Comfort Prep",
                    description:
                      "Local anaesthetic applied for a comfortable experience",
                    icon: Heart,
                    align: "right",
                  },
                  {
                    step: "03",
                    title: "Micro-injections",
                    description:
                      "Precise nutrient delivery to targeted thinning zones",
                    icon: Syringe,
                    align: "left",
                  },
                  {
                    step: "04",
                    title: "Aftercare Guidance",
                    description: "Simple instructions for optimal results",
                    icon: Leaf,
                    align: "right",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col ${item.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 relative`}
                  >
                    <div className="flex-1 text-center lg:text-left">
                      {item.align === "left" && (
                        <>
                          <div className="text-wine font-bold mb-2">
                            Step {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-brown mb-4">
                            {item.title}
                          </h3>
                          <p className="text-taupe">{item.description}</p>
                        </>
                      )}
                    </div>

                    <div className="relative z-10 w-16 h-16 rounded-full bg-linear-to-br from-wine to-rose flex items-center justify-center text-white font-bold shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1 text-center lg:text-right">
                      {item.align === "right" && (
                        <>
                          <div className="text-wine font-bold mb-2">
                            Step {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-brown mb-4">
                            {item.title}
                          </h3>
                          <p className="text-taupe">{item.description}</p>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                Investment in Your Hair
              </h2>
              <p className="text-lg text-taupe">
                Transparent pricing for personalized care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Single Session",
                  price: "RM 750",
                  description:
                    "Perfect for maintenance or trying the treatment",
                  features: [
                    "Complete scalp assessment",
                    "One mesotherapy session",
                    "Aftercare guidance",
                    "Follow-up consultation",
                  ],
                },
                {
                  name: "Initial Series",
                  price: "RM 3,600",
                  period: "4 sessions",
                  description: "Recommended for optimal results",
                  features: [
                    "Complete scalp assessment",
                    "4 mesotherapy sessions",
                    "Progress tracking",
                    "Priority booking",
                    "10% savings",
                  ],
                  popular: true,
                },
                {
                  name: "Yearly Plan",
                  price: "RM 6,800",
                  period: "8 sessions",
                  description: "Comprehensive year-long support",
                  features: [
                    "Complete scalp assessment",
                    "8 mesotherapy sessions",
                    "Quarterly progress reviews",
                    "VIP booking priority",
                    "15% savings",
                    "Complimentary scalp analysis",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${
                    plan.popular
                      ? "border-wine ring-2 ring-wine/20"
                      : "border-taupe/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-linear-to-r from-wine to-rose text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-brown mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-wine">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-taupe ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-taupe mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-sm text-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-linear-to-r from-wine to-rose text-white shadow-lg hover:shadow-xl"
                        : "bg-brown/10 text-brown hover:bg-brown/20"
                    }`}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="relative bg-linear-to-br from-wine to-rose rounded-3xl p-12 text-center overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>

              <motion.div variants={staggerContainer} className="relative z-10">
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-['Georgia',serif] text-white mb-4"
                >
                  Ready to start your journey?
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/90 mb-8"
                >
                  Book a consultation with our doctor-led team today
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-wine rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Your Assessment
                  </motion.button>

                  <motion.a
                    href="tel:016-7025699"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    Call 016-702 5699
                  </motion.a>
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-white/80 mt-6 text-sm"
                >
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HairMesotherapyLanding;
