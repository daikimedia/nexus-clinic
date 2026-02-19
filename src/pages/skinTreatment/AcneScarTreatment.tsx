import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Shield,
  Heart,
  MapPin,
  Star,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Sun,
  Droplets,
  ChevronRight,
  Layers,
  Target,
  Feather,
  Wind,
  Flower2,
  Gem,
  Microscope,
  Stethoscope,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const AcneScarLanding = () => {
  const scarTypes = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ice Pick Scars",
      description:
        "Small, narrow, deep 'holes' that need targeted treatment approaches",
      color: "from-rose/20 to-wine/20",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Boxcar Scars",
      description: "Wider dents with clearer edges, like old chickenpox marks",
      color: "from-taupe/20 to-brown/20",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Rolling Scars",
      description:
        "Soft wave-like dents from bands of scar tissue pulling skin down",
      color: "from-wine/20 to-rose/20",
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Raised Scars",
      description: "Hypertrophic or keloid scars needing different approaches",
      color: "from-brown/20 to-taupe/20",
    },
  ];

  const treatments = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Subcision",
      description:
        "Releases fibrotic strands tethering scars, allowing skin to lift naturally",
      time: "30-60 mins",
      sessions: "1-3 sessions",
      downtime: "Mild swelling/bruising",
      color: "from-wine to-rose",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Fractional CO2 Laser",
      description:
        "Creates micro-zones for skin healing and new collagen building",
      time: "45-60 mins",
      sessions: "3-5 sessions",
      downtime: "5-14 days",
      color: "from-brown to-taupe",
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Microneedling",
      description:
        "Controlled micro-injuries that encourage collagen production",
      time: "30-45 mins",
      sessions: "4-6 sessions",
      downtime: "2-3 days",
      color: "from-rose to-wine",
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "PRP Therapy",
      description: "Platelet-rich plasma support for enhanced healing",
      time: "20-30 mins",
      sessions: "2-3 sessions",
      downtime: "Minimal",
      color: "from-taupe to-brown",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Smoother skin in daily lighting",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: "Makeup sits better",
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Confidence improves in photos",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      text: "Texture feels less bumpy",
    },
  ];

  const considerations = [
    {
      icon: <Calendar className="w-6 h-6" />,
      text: "Active, inflamed acne that keeps flaring",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Pregnancy or breastfeeding",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "History of severe keloids",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      text: "Cannot avoid sun exposure",
    },
  ];

  const stats = [
    {
      value: "2001",
      label: "Established",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      value: "4.7",
      label: "Google Rating",
      icon: <Star className="w-5 h-5" />,
    },
    { value: "437+", label: "Reviews", icon: <Heart className="w-5 h-5" /> },
    {
      value: "24+",
      label: "Years Experience",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-taupe rounded-full blur-3xl opacity-20" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center space-x-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                >
                  <MapPin className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl lg:text-7xl text-brown leading-tight"
                >
                  Clearer skin is
                  <span className="text-wine block italic">not a dream.</span>
                  <span className="text-rose block">It is a plan.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe font-inter leading-relaxed max-w-lg"
                >
                  At Nexus Clinic Kuala Lumpur, we build a scar map for your
                  face and match it with the right mix of treatments, so your
                  skin looks smoother in real life, not just in photos.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-wine text-light font-inter rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group"
                  >
                    <span>Start Your Scar Map</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-wine/30 text-brown font-inter rounded-full hover:bg-glass transition-all"
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 gap-6 pt-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="p-2 bg-glass rounded-lg">{stat.icon}</div>
                      <div>
                        <div className="font-georgia text-xl text-brown">
                          {stat.value}
                        </div>
                        <div className="text-sm text-taupe">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-wine">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-inter text-sm uppercase tracking-wider">
                        Quick, honest note
                      </span>
                    </div>
                    <p className="font-georgia text-brown text-xl italic">
                      "There is no single 'best acne scar treatment' for
                      everyone. Acne scars come in different shapes, depths, and
                      directions."
                    </p>
                    <div className="h-1 w-20 bg-rose rounded-full" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-wine/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Scars Are Stubborn */}
        <section className="py-24 bg-light relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <Stethoscope className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">
                  Understanding Your Skin
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                Why acne scars feel so stubborn
                <span className="text-wine block text-2xl mt-4">
                  (and why they are not your fault)
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter leading-relaxed"
              >
                Acne scars are not just "marks on the surface." Many scars sit
                deeper because acne inflammation damages collagen below the
                skin. When healing happens unevenly, the surface can dip,
                tether, or look rough.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-8 pt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-3xl shadow-lg border border-white/50"
                >
                  <h3 className="font-georgia text-2xl text-wine mb-4">
                    The Good News
                  </h3>
                  <p className="text-brown font-inter">
                    Scars can be improved. The skin can rebuild collagen. It
                    just needs the right trigger and enough time.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-3xl shadow-lg border border-white/50"
                >
                  <h3 className="font-georgia text-2xl text-rose mb-4">
                    The Reality
                  </h3>
                  <p className="text-brown font-inter">
                    Even people who never pick can still scar, especially with
                    cystic acne. But with proper treatment, meaningful
                    improvement is achievable.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scar Types */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter tracking-wider text-sm uppercase"
              >
                Understanding Your Scars
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                Types of Acne Scars
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe font-inter max-w-2xl mx-auto"
              >
                Most facial acne scars fall into these patterns. Identifying
                your scar type is the first step to effective treatment.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {scarTypes.map((scar, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`relative group cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${scar.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative bg-light p-8 rounded-3xl shadow-lg border border-white/50 h-full">
                    <div className="text-wine mb-4">{scar.icon}</div>
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {scar.title}
                    </h3>
                    <p className="text-taupe font-inter text-sm leading-relaxed">
                      {scar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Post-acne marks note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-rose/10 rounded-2xl border border-rose/20"
            >
              <p className="text-brown font-inter text-center">
                <span className="font-bold text-rose">
                  Post-acne marks (not true scars):
                </span>{" "}
                Brown or red marks after acne are very common in Malaysia. They
                can look like scarring, but they are usually pigment or redness.
                They often respond well to pigment-friendly plans and strict sun
                protection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">Who Should Start</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  You are a good fit if:
                </h2>

                <ul className="space-y-4">
                  {[
                    "Your acne is mostly under control and the scars are the main problem",
                    "Your scars show more in certain lighting, selfies, or video calls",
                    "You want improvement, not 'perfect glass skin'",
                    "You can commit to a plan (usually multiple sessions)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown font-inter">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-rose" />
                  <span className="text-sm text-brown">When to Wait</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  You may need to wait or adjust if:
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {considerations.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="bg-cream p-4 rounded-xl border border-white/50"
                    >
                      <div className="text-rose mb-2">{item.icon}</div>
                      <p className="text-sm text-brown font-inter">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scar Mapping Approach */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <MapPin className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">
                  Our Signature Approach
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                The Nexus Scar Mapping Plan
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter"
              >
                A good acne scar plan should feel clear, not confusing. Here's
                how we build yours.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {[
                {
                  step: "01",
                  title: "Map Your Scars",
                  desc: "We analyze scar types, depth, tethering, skin sensitivity, pigment risk, and your lifestyle",
                },
                {
                  step: "02",
                  title: "Choose the Tools",
                  desc: "Often a combination approach - fractional CO2, subcision, microneedling, peels, PRP, and more",
                },
                {
                  step: "03",
                  title: "Set Real Expectations",
                  desc: "We discuss what 'good progress' looks like for your face and timeline",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-wine/10 rounded-full blur-2xl" />
                  <div className="relative bg-light p-8 rounded-3xl shadow-xl border border-white/50">
                    <div className="text-6xl font-georgia text-wine/20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-georgia text-2xl text-brown mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe font-inter">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter tracking-wider text-sm uppercase"
              >
                Our Treatment Arsenal
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                Acne Scar Treatments
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe font-inter max-w-2xl mx-auto"
              >
                Explained in easy words - each with specific benefits for
                different scar types
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${treatment.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative bg-cream p-6 rounded-3xl shadow-lg border border-white/50 h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${treatment.color} text-light flex items-center justify-center mb-4`}
                    >
                      {treatment.icon}
                    </div>

                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-taupe font-inter text-sm mb-4">
                      {treatment.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">Duration:</span>
                        <span className="text-wine">{treatment.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">Sessions:</span>
                        <span className="text-rose">{treatment.sessions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">Downtime:</span>
                        <span className="text-taupe">{treatment.downtime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits & Considerations */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">What Patients Love</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  Realistic Pros
                </h2>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 bg-light p-4 rounded-xl"
                    >
                      <div className="text-wine">{benefit.icon}</div>
                      <span className="text-brown font-inter">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-rose" />
                  <span className="text-sm text-brown">
                    What Can Be Annoying
                  </span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">But Normal</h2>

                <div className="space-y-4">
                  {[
                    "It takes time. Collagen does not rebuild overnight",
                    "Downtime can be inconvenient if you choose resurfacing lasers",
                    "You may need a combination plan for mixed scars",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 bg-light p-4 rounded-xl"
                    >
                      <div className="text-rose">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-brown font-inter">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Side Effects & Safety */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-8"
              >
                <Shield className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">Safety First</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-8"
              >
                Side effects and safety
                <span className="text-wine block text-2xl mt-4">
                  what you should know in Malaysia
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter mb-8"
              >
                Most acne scar procedures are safe when performed by trained
                medical professionals, using proper settings and aftercare.
                Malaysia has guidance around aesthetic medical practice and
                credentialing.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                {[
                  "Redness, swelling, warmth",
                  "Peeling or dryness after resurfacing",
                  "Mild bruising after subcision",
                  "Temporary pigment changes (higher risk in darker skin)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                    <span className="text-brown font-inter text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-rose/10 p-6 rounded-2xl border border-rose/20"
              >
                <p className="text-brown font-inter italic">
                  "The best safety move you can make is simple: follow
                  aftercare, avoid sun, and do not 'over-treat' too fast."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Cost of acne scar treatment
                <span className="text-wine block text-2xl">
                  in Kuala Lumpur and Malaysia
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter mb-8"
              >
                Prices vary by scar severity, treatment type, device used, and
                number of sessions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                {[
                  {
                    treatment: "Trial Session",
                    price: "RM398",
                    clinic: "Dr Chong Clinic",
                  },
                  {
                    treatment: "Subcision",
                    price: "RM800+",
                    clinic: "Premier Clinic",
                  },
                  {
                    treatment: "Fractional CO2",
                    price: "RM1,800+",
                    clinic: "Premier Clinic",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-light p-6 rounded-2xl shadow-lg text-center"
                  >
                    <div className="text-sm text-taupe mb-2">{item.clinic}</div>
                    <div className="font-georgia text-xl text-brown mb-1">
                      {item.treatment}
                    </div>
                    <div className="text-2xl font-bold text-wine">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown font-inter italic"
              >
                At Nexus Clinic Kuala Lumpur, your cost depends on your scar map
                and chosen plan.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Droplets className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Protect Your Results
                  </span>
                </div>

                <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                  Aftercare that protects your results
                </h2>

                <p className="text-lg text-taupe font-inter">
                  Your aftercare is not "optional." It is part of the treatment.
                </p>

                <div className="space-y-4">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream p-6 rounded-2xl"
                  >
                    <h3 className="font-georgia text-xl text-wine mb-3">
                      First 48 Hours
                    </h3>
                    <ul className="space-y-2 text-brown font-inter">
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>Keep it gentle. Cleanse softly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>Avoid heat, sauna, heavy workouts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>Do not pick peeling skin</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream p-6 rounded-2xl"
                  >
                    <h3 className="font-georgia text-xl text-rose mb-3">
                      First Week
                    </h3>
                    <ul className="space-y-2 text-brown font-inter">
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>Sunscreen daily, even indoors</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>Pause harsh actives (retinoids, acids)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>Keep skin hydrated and protected</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-3xl" />
                <div className="relative bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/30">
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    Between Sessions
                  </h3>
                  <p className="text-brown font-inter mb-6">
                    Do not rush. Your skin needs time to rebuild collagen. If
                    acne returns, treat it early so scars do not keep forming.
                  </p>
                  <div className="h-1 w-20 bg-wine rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-8"
              >
                <span className="text-sm text-brown">People Also Ask</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-12"
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How many sessions of fractional CO2 laser are needed?",
                    a: "Many patients are guided toward 3 to 5 sessions, often spaced 4 to 6 weeks apart, depending on scar depth and goals.",
                  },
                  {
                    q: "Is fractional CO2 laser safe for darker skin tones?",
                    a: "It can be safe with proper assessment and customised settings, but pigment risk needs planning. Darker skin tones may have a higher risk of pigmentation changes.",
                  },
                  {
                    q: "What is subcision and what scars is it for?",
                    a: "Subcision is a minor procedure where a needle is used to release tethering strands under the skin, helping depressed scars lift and encouraging collagen formation.",
                  },
                  {
                    q: "What is a realistic acne scar improvement goal?",
                    a: "Visible improvement in texture and depth. Many patients don't need 'perfect,' they want smoother skin in real lighting.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="bg-light p-6 rounded-2xl cursor-pointer group"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-georgia text-lg text-brown group-hover:text-wine transition-colors">
                        {faq.q}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Nexus */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <MapPin className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">Why Choose Us</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                Why Nexus Clinic Kuala Lumpur
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter"
              >
                If you are searching for acne scar treatment in Kuala Lumpur,
                you are probably overwhelmed by options. Many clinics offer
                lasers. Many offer microneedling. The difference is how well
                your plan is built.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-6 pt-8"
              >
                {[
                  "Scar mapping and combination planning for mixed scars",
                  "Established 2001 in KL's Golden Triangle",
                  "Complete toolkit: subcision, CO2, dermaroller, peels, PRP",
                  "Easy access at Wisma UOA II, Jalan Pinang",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 bg-cream p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown font-inter text-left">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={scaleIn} className="pt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-linear-to-r from-wine to-rose text-light font-inter rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-3 group"
                >
                  <span className="text-lg">Start Your Scar Map</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AcneScarLanding;
