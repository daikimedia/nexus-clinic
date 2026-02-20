"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Sparkles,
  Droplet,
  Sun,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Heart,
  Activity,
  Layers,
  UserCheck,
  ShieldCheck,
  Zap,
  Flower2,
  Waves,
  Sparkle,
  BadgeCheck,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import BeforeAfterFaceSection from "../../components/BeforeAfterFace";
import FAQ from "../../components/FAQ";

const DarkEyeCircleLanding = () => {
  const faqs = [
    {
      q: "What causes dark circles under the eyes?",
      a: "Common causes include genetics, fatigue, rubbing, skin thinning, pigment changes, and sun exposure.",
    },
    {
      q: "Can lack of sleep cause dark circles?",
      a: "Yes, fatigue is a known contributor and can make the under-eye area look darker or more hollow.",
    },
    {
      q: "Do allergies cause dark circles?",
      a: "They can. Rubbing habits can lead to post-inflammatory hyperpigmentation around the eyes.",
    },
    {
      q: "Does tear trough filler remove dark circles?",
      a: "It can reduce the 'dark' look when the problem is shadowing from hollowness, but not for pigmentation.",
    },
    {
      q: "Can dark circles be removed permanently?",
      a: "Significant improvement is possible, but 'permanent' depends on the cause.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section with Glass Effect */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:flex lg:items-center lg:gap-12"
            >
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
                >
                  <BadgeCheck className="w-5 h-5 text-wine" />
                  <span className="text-brown font-medium">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-6xl font-bold mb-6 font-['Georgia',serif]"
                >
                  <span className="text-brown">Bright eyes again, </span>
                  <br />
                  <span className="text-wine">without looking "done"</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-taupe mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Just rested, fresh, and like you. At Nexus Clinic, we treat
                  the real cause first, then choose the safest option for your
                  under-eye area.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-brown transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    Start with a diagnosis-first consultation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-taupe text-brown px-8 py-4 rounded-full font-medium hover:border-wine hover:text-wine transition-all duration-300">
                    Learn more
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">
                      Doctor-led clinic
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">
                      Under-eye expertise
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">Wisma UOA II, KL</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2 mt-12 lg:mt-0"
              >
                <div className="relative">
                  {/* Glass Card */}
                  <div className="bg-glass backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <h3 className="text-2xl font-['Georgia',serif] text-brown mb-6">
                      Quick self-check
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Sun,
                          text: "If it looks brown and stays brown - pigment likely",
                          color: "wine",
                        },
                        {
                          icon: Droplet,
                          text: "If it looks blue/purple - vessels and thin skin",
                          color: "rose",
                        },
                        {
                          icon: Layers,
                          text: "If worse under lights - hollows and shadowing",
                          color: "taupe",
                        },
                        {
                          icon: Activity,
                          text: "If puffy in morning - fluid retention",
                          color: "brown",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/50"
                        >
                          <div
                            className={`p-2 rounded-full bg-${item.color}20`}
                          >
                            <item.icon
                              className="w-5 h-5"
                              style={{ color: item.color }}
                            />
                          </div>
                          <span className="text-brown">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                What are dark eye circles, really?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                "Dark circles" is not one problem. It's a label for several
                different under-eye issues.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Pigmented",
                  desc: "Brown, from melasma or sun",
                  icon: Sun,
                  color: "wine",
                },
                {
                  title: "Vascular",
                  desc: "Blue/purple from visible vessels",
                  icon: Droplet,
                  color: "rose",
                },
                {
                  title: "Structural",
                  desc: "Shadows from hollows",
                  icon: Layers,
                  color: "brown",
                },
                {
                  title: "Eye bags",
                  desc: "Puffiness creates shadows",
                  icon: Eye,
                  color: "taupe",
                },
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-xl w-fit mb-4 bg-${type.color}20`}
                  >
                    <type.icon
                      className="w-6 h-6"
                      style={{ color: type.color }}
                    />
                  </div>
                  <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                    {type.title}
                  </h3>
                  <p className="text-taupe">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-cream to-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                Treatment options, tailored to you
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                We don't push one trendy solution for everyone. Here's what we
                offer.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Tear Trough Filler",
                  price: "From RM 1,200",
                  icon: Droplet,
                  color: "wine",
                  best: "Best for hollows & shadowing",
                  desc: "Softens the hollow groove between eyelid and cheek",
                },
                {
                  title: "Ultraformer HIFU",
                  price: "RM 1,500 - 3,500",
                  icon: Zap,
                  color: "rose",
                  best: "Best for eye bags & laxity",
                  desc: "Non-surgical tightening with ultrasound",
                },
                {
                  title: "PDRN Rejuvenation",
                  price: "From RM 800",
                  icon: Flower2,
                  color: "brown",
                  best: "Best for thin, crepey skin",
                  desc: "Skin-repair approach for fine lines",
                },
                {
                  title: "PRP Therapy",
                  price: "RM 800 - 1,800",
                  icon: Sparkles,
                  color: "taupe",
                  best: "Best for natural regeneration",
                  desc: "Uses your body's own growth factors",
                },
                {
                  title: "Carboxy Therapy",
                  price: "From RM 600",
                  icon: Waves,
                  color: "wine",
                  best: "CO2 infusion approach",
                  desc: "Stimulates circulation and collagen",
                },
                {
                  title: "Laser Options",
                  price: "Custom pricing",
                  icon: Sparkle,
                  color: "rose",
                  best: "Best for pigmentation",
                  desc: "Pico Laser, Pro Yellow Laser & more",
                },
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-taupe/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${treatment.color}20`}>
                      <treatment.icon
                        className="w-6 h-6"
                        style={{ color: treatment.color }}
                      />
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: treatment.color }}
                    >
                      {treatment.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-sm font-medium text-wine mb-2">
                    {treatment.best}
                  </p>
                  <p className="text-taupe text-sm">{treatment.desc}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center gap-1 text-brown hover:text-wine transition-colors"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Expertise Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInLeft}
                  className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"
                >
                  <ShieldCheck className="w-5 h-5 text-cream" />
                  <span className="text-sm">Safety first approach</span>
                </motion.div>

                <motion.h2
                  variants={fadeInLeft}
                  className="text-3xl lg:text-4xl font-['Georgia',serif] mb-6"
                >
                  Why expertise matters for under-eye treatments
                </motion.h2>

                <motion.p variants={fadeInLeft} className="text-cream/80 mb-8">
                  The under-eye area is delicate. Dermal fillers can carry
                  serious risks if injected into a blood vessel, including skin
                  injury and rare vision complications. That's why correct
                  patient selection and experienced injection matter.
                </motion.p>

                <motion.div variants={fadeInLeft} className="space-y-4">
                  {[
                    "Doctor-led aesthetic clinic with consultation-first planning",
                    "Conservative dosing and safety-first technique",
                    "Tear trough filler requires careful assessment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                      <span className="text-cream">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInRight}
                className="relative"
              >
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-3xl p-8">
                  <h3 className="text-2xl font-['Georgia',serif] mb-6">
                    Important risk note
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-rose mt-1" />
                      <p className="text-sm text-cream">
                        Nexus Clinic explicitly warns of serious risks if filler
                        is injected into a blood vessel, including skin injury
                        and rare vision complications.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <UserCheck className="w-5 h-5 text-rose mt-1" />
                      <p className="text-sm text-cream">
                        Choose a doctor-led clinic and a conservative technique.
                        Your safety is our priority.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Grid - Visual Showcase */}
        <BeforeAfterFaceSection />

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Pricing Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                Investment in your confidence
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                Transparent pricing from Nexus Clinic Kuala Lumpur
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  treatment: "Dermal Fillers",
                  range: "RM 1,200 - 2,200",
                  note: "per syringe",
                },
                {
                  treatment: "HIFU Face Lift",
                  range: "RM 1,500 - 3,500",
                  note: "per session",
                },
                {
                  treatment: "PRP Therapy",
                  range: "RM 800 - 1,800",
                  note: "per session",
                },
                {
                  treatment: "Custom Packages",
                  range: "Contact us",
                  note: "for combination",
                },
              ].map((price, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl border border-taupe/20 hover:border-wine transition-all duration-300"
                >
                  <p className="text-taupe mb-2">{price.treatment}</p>
                  <p className="text-2xl font-['Georgia',serif] text-brown font-bold">
                    {price.range}
                  </p>
                  <p className="text-sm text-wine mt-2">{price.note}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center text-sm text-taupe mt-8"
            >
              *Prices are indicative. Final cost depends on your specific
              treatment plan.
            </motion.p>
          </div>
        </section>

        {/* Competitor Context - Brief */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-['Georgia',serif] text-brown mb-8"
              >
                Why Nexus Clinic stands out in Kuala Lumpur
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-3xl mx-auto mb-8"
              >
                While other clinics focus on devices and menus, we lead with
                diagnosis-first clarity and under-eye safety. Our doctor-led
                approach ensures you get the right treatment for your specific
                cause.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  "Doctor-led",
                  "Cause-first",
                  "Safety-focused",
                  "Conservative dosing",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-brown text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-wine to-rose text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-['Georgia',serif] mb-6"
            >
              Start with a diagnosis-led consultation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-cream mb-8">
              We'll identify whether your dark circles are pigment, vessels,
              hollows, or eye bags, then build a plan that fits your skin and
              your comfort level.
            </motion.p>
            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brown px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Book your consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-cream/80 mt-6"
            >
              Located at Wisma UOA II, Jalan Pinang, Kuala Lumpur
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default DarkEyeCircleLanding;
