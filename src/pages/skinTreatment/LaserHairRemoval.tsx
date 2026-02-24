import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Sun,
  Zap,
  Clock,
  Heart,
  Droplets,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Flower2,
  Sparkle,
  Leaf,
  Waves,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const LaserHairRemoval = () => {
  const faqs = [
    {
      q: "How many sessions do I need for laser hair removal?",
      a: "Most people need multiple sessions. AAD notes 2-6 treatments for many patients, while some clinic protocols plan 6-8 sessions for optimal results.",
    },
    {
      q: "Is laser hair removal permanent?",
      a: "It's long-lasting hair reduction. Many people stay hair-free for months or years. Regrowth is usually finer and lighter, and maintenance may be needed.",
    },
    {
      q: "Does laser hair removal hurt?",
      a: "Most people describe it like warm pinpricks or a rubber band snap. Numbing gel may be used for sensitive areas.",
    },
    {
      q: "What should I avoid before my laser session?",
      a: "Avoid waxing or plucking for at least 4 weeks before treatment. Avoid sun exposure and tanning, and follow your provider's instructions.",
    },
    {
      q: "Can I shave between sessions?",
      a: "Yes. Shaving is usually recommended because it keeps the follicle intact while removing surface hair.",
    },
    {
      q: "How soon will I see results?",
      a: "AAD notes many people see a 10%-25% reduction after the first treatment, with bigger changes after completing the series.",
    },
    {
      q: "Is IPL the same as laser hair removal?",
      a: "No. IPL uses broad-spectrum light, while laser uses a specific wavelength. Results and safety can differ depending on device and skin tone.",
    },
    {
      q: "Should I do laser hair removal at a salon or a medical clinic?",
      a: "AAD and Mayo Clinic both caution that complications like burns and pigment changes are more likely in inexperienced hands, so medical supervision and trained providers matter.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light font-[--font-inter] overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-[90vh] flex items-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[--font-georgia] text-brown leading-tight">
                  Smooth skin is nice.
                  <span className="block text-wine mt-2">
                    Not thinking about hair every week is even nicer.
                  </span>
                </h1>

                <p className="text-lg text-taupe leading-relaxed max-w-xl">
                  Laser hair removal helps reduce unwanted hair for months or
                  even years, with softer regrowth when it returns. At Nexus
                  Clinic Kuala Lumpur, we focus on safe settings, realistic
                  results, and a plan that suits your skin tone and hair type.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Your Consultation
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-150 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/clinic/interior.png"
                  alt="Luxurious clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-glass backdrop-blur-md p-6 rounded-xl">
                  <p className="text-brown font-medium">
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "MOH-Compliant",
                  desc: "Prioritises safety and compliance with Malaysia MOH guidelines",
                },
                {
                  icon: Clock,
                  title: "Realistic Results",
                  desc: "Long-lasting hair reduction, not always 100% permanent for life",
                },
                {
                  icon: Sun,
                  title: "Sun-Safe Protocols",
                  desc: "After treatment, protecting skin from sun is a core safety step",
                },
                {
                  icon: Heart,
                  title: "Published Details",
                  desc: "Clear contact info and operating hours at Wisma UOA II",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="text-lg font-bold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Is Laser Hair Removal */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown">
                  What Is Laser Hair Removal?
                </h2>
                <p className="text-lg text-taupe leading-relaxed">
                  Laser hair removal uses concentrated light energy to target
                  hair follicles and reduce future hair growth. It works best
                  when the laser energy is absorbed by pigment in the hair. That
                  is why dark hair usually responds best, and why hair colour
                  and skin tone influence results.
                </p>

                <div className="bg-cream p-8 rounded-2xl space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <p className="text-brown line-through opacity-60">
                      Waxing removes hair now
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <p className="text-brown font-semibold">
                      Laser reduces hair growth over time
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src="/images/hair/laser-process.png"
                  alt="Laser treatment process"
                  className="rounded-2xl shadow-xl h-64 object-cover"
                />
                <img
                  src="/images/hair/happy-patient-hair.png"
                  alt="Happy patient"
                  className="rounded-2xl shadow-xl h-80 object-cover mt-8"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Permanent? Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-linear-to-br from-wine to-rose text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-[--font-georgia] mb-6"
              >
                Is Laser Hair Removal Permanent?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl opacity-90 mb-8 leading-relaxed"
              >
                It is best described as long-term hair reduction. Most patients
                are hair-free for months or even years after completing
                sessions, and if hair returns, it is often finer and lighter.
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl"
              >
                <p className="italic mb-4">
                  "Mayo Clinic also notes laser hair removal slows hair growth
                  but does not guarantee permanent hair removal forever."
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    "Less time shaving",
                    "Fewer ingrown hairs",
                    "Smoother with less maintenance",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Popular in KL */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <img
                  src="/images/hair/kuala-lumpur.png"
                  alt="Kuala Lumpur cityscape"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div variants={fadeInRight} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown">
                  Why Laser Hair Removal Is So Popular in Kuala Lumpur
                </h2>
                <p className="text-lg text-taupe">
                  Malaysia's heat, humidity, and daily routines make hair
                  removal feel constant.
                </p>
                <div className="space-y-4">
                  {[
                    "Shaving causes dark shadow and stubble fast",
                    "Waxing hurts and can trigger irritation",
                    "Ingrown hairs keep coming back",
                    "Underarms and bikini areas feel more comfortable when hair is reduced",
                  ].map((reason, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-wine/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-wine" />
                      </div>
                      <p className="text-brown">{reason}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Candidate Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] text-brown text-center mb-12"
            >
              Who Is a Good Candidate?
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-wine mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    Great Candidate If:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Your hair is dark (black or dark brown)",
                      "You want reduction on underarms, legs, bikini, face, back, or chest",
                      "You get ingrown hairs or razor bumps",
                      "You want a cleaner, low-maintenance routine",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-wine/20">
                  <h3 className="text-2xl font-bold text-rose mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    Consider This:
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-brown mb-2">
                        If your hair is light (blonde, red, white, grey):
                      </p>
                      <p className="text-taupe">
                        Laser is often less effective because these hairs absorb
                        less laser energy. A consultation matters here, so you
                        don't waste money on the wrong method.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-brown mb-2">
                        Who Should Avoid or Pause:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Recent strong sun exposure or tanning",
                          "Active skin infection in the area",
                          "Certain medications that increase light sensitivity",
                          "Pregnancy (many clinics postpone)",
                          "Not recommended around eyelids and eyebrows",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-taupe"
                          >
                            <XCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] text-brown text-center mb-4"
            >
              Areas We Commonly Treat in Malaysia
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12"
            >
              Customized treatments for every area, for women and men
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Flower2,
                  title: "Face",
                  areas: "Upper lip, chin, jawline, sideburns, full face",
                },
                {
                  icon: Droplets,
                  title: "Underarms",
                  areas: "Life-changing for daily comfort",
                },
                {
                  icon: Sparkle,
                  title: "Bikini & Brazilian",
                  areas: "Great for razor bumps and ingrowns",
                },
                {
                  icon: Leaf,
                  title: "Legs",
                  areas: "Lower legs or full legs",
                },
                {
                  icon: Waves,
                  title: "Arms",
                  areas: "Half arms or full arms",
                },
                {
                  icon: Heart,
                  title: "Men's Areas",
                  areas: "Chest, stomach, back, shoulders, neck line",
                },
              ].map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-6 rounded-xl hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-wine rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-2">
                    {area.title}
                  </h3>
                  <p className="text-taupe text-sm">{area.areas}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Laser vs IPL */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] text-brown text-center mb-12"
            >
              Laser vs IPL in Malaysia
              <span className="block text-lg text-taupe mt-2">
                Quick, Honest Comparison
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brown text-center mb-4">
                  Laser Hair Removal
                </h3>
                <p className="text-taupe text-center">
                  Uses a single wavelength laser designed to target follicles
                  more precisely.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-wine/20"
              >
                <div className="w-16 h-16 bg-rose rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brown text-center mb-4">
                  IPL
                </h3>
                <p className="text-taupe text-center">
                  Uses broad-spectrum light. Cost is often lower, but results
                  can vary widely.
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-brown italic"
            >
              If you want the "real deal" hair reduction journey, ask the clinic
              what device they use and why it suits your skin tone.
            </motion.p>
          </div>
        </motion.section>

        {/* Sessions & Process */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown">
                  How Many Sessions Do You Need?
                </h2>
                <p className="text-lg text-taupe">
                  Most people need a series because hair grows in cycles, and
                  laser is most effective when hair is in the active growth
                  stage.
                </p>

                <div className="bg-cream p-6 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-taupe/20 pb-4">
                    <span className="font-semibold text-brown">AAD Notes:</span>
                    <span className="text-wine">2 to 6 treatments</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-taupe/20 pb-4">
                    <span className="font-semibold text-brown">
                      Mayo Clinic:
                    </span>
                    <span className="text-wine">2 to 6 treatments</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-brown">
                      Nexus Clinic:
                    </span>
                    <span className="text-wine">6 to 8 sessions</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-brown mb-4">
                    Typical Timing:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-2 bg-wine rounded-full" />
                      <span className="text-brown">
                        Face: every 4 to 8 weeks
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-rose rounded-full" />
                      <span className="text-brown">
                        Back: every 12 to 16 weeks
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown">
                  What Happens During Treatment?
                </h2>
                <div className="bg-cream p-8 rounded-2xl">
                  <ol className="space-y-4">
                    {[
                      "Cleaning the area",
                      "Optional numbing gel for sensitive areas",
                      "Protective eyewear for everyone in the room",
                      "Laser pulses that feel like warm pinpricks or a rubber band snap",
                      "Short session time for small areas, longer for full legs or back",
                    ].map((step, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-4"
                      >
                        <span className="w-6 h-6 bg-wine text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-brown">{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                  <p className="mt-6 text-taupe italic">
                    Afterward, mild redness and swelling can happen. It often
                    looks like a light sunburn and settles within hours to a
                    couple of days.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Preparation & Aftercare */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-8">
                  How to Prepare
                  <span className="block text-lg text-taupe mt-2">
                    So You Get Better Results and Fewer Side Effects
                  </span>
                </h2>

                <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Do
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Avoid sun exposure before and after, and wear SPF 30+",
                      "Shave the area the day before or the day of treatment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Avoid
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Waxing, plucking, or electrolysis for at least 4 weeks before",
                      "Using fake tan products right before sessions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-8">
                  Aftercare
                  <span className="block text-lg text-taupe mt-2">
                    The Part That Protects Your Skin
                  </span>
                </h2>

                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <p className="text-brown leading-relaxed mb-4">
                    AAD's advice is clear: protect treated skin from sun, avoid
                    tanning equipment, and follow your doctor's aftercare
                    instructions.
                  </p>
                  <p className="text-brown">
                    Cool compresses can help if the area feels warm or slightly
                    swollen. Most people return to normal activities
                    immediately, but treat your skin gently for a day or two.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-brown mb-4">
                  Side Effects and Risks
                </h3>
                <div className="grid gap-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-semibold text-brown mb-2">
                      Common (short-term)
                    </h4>
                    <p className="text-taupe">
                      redness • swelling • mild discomfort
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-wine/20">
                    <h4 className="font-semibold text-brown mb-2">
                      Less common but possible
                    </h4>
                    <ul className="space-y-2 text-taupe">
                      <li>• pigment changes (darkening or lightening)</li>
                      <li>
                        • blistering, crusting, scarring (rare, higher risk in
                        untrained hands)
                      </li>
                      <li>
                        • paradoxical hair growth, especially on darker skin
                        (rare but real)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] text-brown text-center mb-4"
            >
              How Much Does Laser Hair Removal Cost in Malaysia?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              Laser hair removal cost in Kuala Lumpur varies by area size,
              number of sessions, technology used, and clinic location and
              expertise.
            </motion.p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-cream p-8 rounded-2xl">
                <p className="text-center text-2xl font-bold text-wine mb-8">
                  RM150 to RM1,500 per session
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-brown">
                      Small areas (upper lip, chin, underarms)
                    </span>
                    <span className="font-bold text-wine">RM150 - RM350</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-brown">
                      Medium areas (bikini, half legs)
                    </span>
                    <span className="font-bold text-wine">RM350 - RM600</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-brown">
                      Large areas (full legs, back)
                    </span>
                    <span className="font-bold text-wine">RM600 - RM1,200</span>
                  </div>
                </div>

                <p className="mt-6 text-taupe text-center italic">
                  Many clinics push trial promotions (example: RM66 trial deals
                  for selected areas) to attract new customers.
                </p>
                <p className="mt-4 text-brown font-semibold text-center">
                  Best tip: price is important, but device type + safety +
                  correct settings matter more for long-term satisfaction.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Competitor Review */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] text-brown text-center mb-12"
            >
              Competitor Review
              <span className="block text-lg text-taupe mt-2">
                What Top Clinics in Malaysia Are Doing
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-wine mb-6">
                  Market Patterns
                </h3>
                <ul className="space-y-4">
                  {[
                    "Heavy promo pricing (RM66 style deals)",
                    "Price transparency by area",
                    "Big directory presence on WhatClinic and ERUFU",
                    "Device-led marketing (Alexandrite, diode, Nd:YAG)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wine rounded-full mt-2" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine text-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">
                  How Nexus Clinic Stands Out
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Nexus Clinic's own content leans into what matters most:
                  safety, MOH guideline compliance, and realistic session
                  planning (often 6-8 sessions). That messaging builds trust,
                  especially for Malaysian skin tones where pigment safety
                  matters.
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
          className="py-20 bg-linear-to-r from-wine to-rose text-white"
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[--font-georgia] mb-6"
            >
              Ready for Smooth, Care-Free Skin?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            >
              If you're searching for laser hair removal in Kuala Lumpur or
              laser hair removal in Malaysia, start with a consultation that
              matches the laser to your skin tone and hair type.
            </motion.p>

            <motion.div variants={scaleIn} className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-4 rounded-full text-lg font-bold hover:bg-cream transition-colors shadow-2xl"
              >
                Book Your Consultation Today
              </motion.button>

              <p className="text-white/80">
                Nexus Clinic Kuala Lumpur
                <br />
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
                <br />
                Phone: 016-7025699 / 03-21635699
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default LaserHairRemoval;
