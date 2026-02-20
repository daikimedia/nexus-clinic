"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  Heart,
  Activity,
  Zap,
  Calendar,
  Award,
  Users,
  ChevronRight,
  Target,
  Leaf,
  Star,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const PRPLandingPage = () => {
  const faqs = [
    {
      q: "Does PRP actually regrow hair?",
      a: "For many people with thinning hair, it can help. Some see regrowth, some see less shedding.",
    },
    {
      q: "Is PRP painful?",
      a: "Quick pinches or pressure across the scalp. Most people return to normal activities the same day.",
    },
    {
      q: "What happens if you stop PRP?",
      a: "If PRP helped, stopping may lead to gradual loss again. Maintenance supports longer-term results.",
    },
    {
      q: "Is PRP permanent?",
      a: "Not usually a one-time fix. Often needs repeat sessions to maintain benefits.",
    },
    {
      q: "Can I exercise after PRP?",
      a: "Light exercise is often fine the next day. Wait a few days for intense workouts.",
    },
    {
      q: "Can I wash my hair after PRP?",
      a: "Gentle shampoo next morning is often recommended. Follow your clinician's instructions.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative overflow-hidden bg-linear-to-br from-cream via-light to-white pt-20 pb-16 px-4"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-wine opacity-5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                  <Leaf className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    Natural Treatment • Your Own Platelets
                  </span>
                </div>

                <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                  Thinning hair?
                  <span className="block text-wine mt-2">
                    Let's wake up your follicles again.
                  </span>
                </h1>

                <p className="text-lg text-taupe font-inter max-w-lg">
                  PRP hair treatment uses your own blood platelets to support
                  thicker growth. A doctor-guided option for early hair thinning
                  in Kuala Lumpur.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-inter text-sm hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                  >
                    Schedule Consultation
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 backdrop-blur-sm border border-taupe/30 text-brown px-8 py-4 rounded-full font-inter text-sm hover:bg-white transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    {
                      icon: MapPin,
                      text: "Central KL Location",
                      sub: "Wisma UOA II",
                    },
                    {
                      icon: Award,
                      text: "Established 2001",
                      sub: "Over 20 years",
                    },
                    {
                      icon: Users,
                      text: "Doctor Consultations",
                      sub: "Personalized care",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-start gap-2"
                    >
                      <item.icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <div>
                        <p className="font-inter text-sm text-brown font-medium">
                          {item.text}
                        </p>
                        <p className="font-inter text-xs text-taupe">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-rose/10 to-wine/10 p-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/50">
                    <h3 className="font-georgia text-2xl text-brown">
                      Quick Answers
                    </h3>

                    {[
                      {
                        q: "Does PRP work for hair loss?",
                        a: "Can help many with thinning hair, results vary",
                      },
                      {
                        q: "When will I see results?",
                        a: "Less shedding first, visible growth in months",
                      },
                      {
                        q: "How many sessions?",
                        a: "Monthly for 3 months, then boosters",
                      },
                      {
                        q: "Cost in Malaysia?",
                        a: "Varies by clinic and add-ons",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="space-y-1 border-b border-taupe/10 last:border-0 pb-3 last:pb-0"
                      >
                        <p className="font-inter text-sm font-medium text-wine">
                          {item.q}
                        </p>
                        <p className="font-inter text-sm text-brown">
                          {item.a}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What is PRP Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-brown">
                  Natural Approach
                </span>
              </div>
              <h2 className="font-georgia text-4xl text-brown mb-4">
                What is PRP Hair Treatment?
              </h2>
              <p className="text-lg text-taupe font-inter">
                PRP means platelet-rich plasma. Platelets are tiny parts of your
                blood that carry growth factors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: "Blood Draw",
                  desc: "Small blood sample taken from your arm, like a normal blood test",
                  color: "wine",
                },
                {
                  icon: Zap,
                  title: "Centrifuge",
                  desc: "Blood is spun to separate layers and concentrate platelets",
                  color: "rose",
                },
                {
                  icon: Target,
                  title: "Targeted Injection",
                  desc: "PRP injected into thinning areas with precise, controlled injections",
                  color: "brown",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10 group"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-cream to-taupe/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className={`text-${item.color} w-8 h-8`} />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who It's For Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-wine/5 to-rose/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-taupe/20">
                  <Users className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    Ideal Candidates
                  </span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  Who PRP Hair Treatment Is For
                </h2>

                <div className="space-y-4">
                  {[
                    "Notice gradual thinning at the crown or part line",
                    "See a widening hair part or weaker ponytail volume",
                    "Have early male or female pattern hair loss",
                    "Want a non-surgical hair restoration option",
                    "Support results after a hair transplant",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-taupe/10"
                    >
                      <div className="w-5 h-5 rounded-full bg-wine/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-wine"></div>
                      </div>
                      <p className="font-inter text-brown">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  Important Considerations
                </h3>
                <p className="font-inter text-taupe mb-6">
                  PRP may not be suitable if you have:
                </p>
                <ul className="space-y-4">
                  {[
                    "Very low platelets or certain blood-related conditions",
                    "Active infection at the treatment area",
                    "Certain serious medical conditions where injections are not advised",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2 text-brown"
                    >
                      <span className="text-wine">•</span>
                      <span className="font-inter text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mb-4">
                <Clock className="w-4 h-4 text-rose" />
                <span className="text-sm font-inter text-brown">
                  Results Timeline
                </span>
              </div>
              <h2 className="font-georgia text-4xl text-brown mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-taupe font-inter">
                PRP is slow, because hair growth is slow. Here's a realistic
                timeline:
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine via-rose to-taupe rounded-full hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    time: "Weeks 2 to 6",
                    desc: "Less shedding for some people",
                    icon: Activity,
                    position: "left",
                  },
                  {
                    time: "Month 2 to 3",
                    desc: "Early signs of improvement",
                    icon: Sparkles,
                    position: "right",
                  },
                  {
                    time: "Month 3 to 6",
                    desc: "Clearer changes in density and thickness",
                    icon: Star,
                    position: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col md:flex-row ${item.position === "right" ? "md:justify-end" : ""}`}
                  >
                    <div
                      className={`md:w-1/2 ${item.position === "right" ? "md:pl-12" : "md:pr-12"}`}
                    >
                      <div className="bg-linear-to-br from-cream to-white rounded-2xl p-6 shadow-lg border border-taupe/10 hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-wine" />
                          </div>
                          <span className="font-georgia text-xl text-wine">
                            {item.time}
                          </span>
                        </div>
                        <p className="font-inter text-brown pl-16">
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

        {/* Session & Cost Info */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-brown/5 to-wine/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  How Many Sessions?
                </h3>
                <p className="font-inter text-taupe mb-4">
                  A widely used plan is:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine"></div>
                    <p className="font-inter text-brown">
                      One session each month for 3 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose"></div>
                    <p className="font-inter text-brown">
                      Then a booster every 6 months
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Cost in Malaysia
                </h3>
                <p className="font-inter text-taupe mb-4">
                  PRP sessions typically range from:
                </p>
                <p className="font-georgia text-3xl text-wine mb-2">
                  RM800 - RM2,500
                </p>
                <p className="font-inter text-sm text-taupe">
                  per session, depending on clinic and add-ons
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-wine to-rose text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl mb-6"
            >
              Start Your Hair Restoration Journey
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 text-white/90"
            >
              Get a scalp review, realistic expectation, and treatment roadmap
              at Nexus Clinic KL
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-georgia text-xl mb-4">Visit Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        LG 10, Wisma UOA II, Jalan Pinang, 50450 KL
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        +6016-921 5699 / +6016-702 5699
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        contact@nexus-clinic.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-wine px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-cream transition-all duration-300 shadow-lg flex items-center gap-2 group"
                  >
                    Book Your Consultation
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PRPLandingPage;
