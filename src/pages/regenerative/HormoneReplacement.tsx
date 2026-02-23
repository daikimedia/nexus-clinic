import { motion } from "framer-motion";
import {
  Moon,
  Brain,
  Heart,
  Shield,
  Clock,
  MapPin,
  Activity,
  Users,
  Scale,
  ThermometerSun,
  Droplet,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const HormonReplaceLanding = () => {
  const images = {
    heroWoman:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    consultation:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    clinic:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1191&q=80",
    hormones:
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    wellness:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
  };
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-taupe rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  Feel like yourself again,
                  <span className="block text-wine">without guessing</span>
                  what your hormones are doing.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-taupe leading-relaxed"
                >
                  Menopause symptoms, low energy, poor sleep, brain fog, and low
                  libido can make daily life feel heavier than it should.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-brown bg-cream p-6 rounded-2xl border-l-4 border-wine"
                >
                  At Nexus Clinic Kuala Lumpur, we keep HRT simple, medical, and
                  personalised, so you get a plan you can actually trust.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-taupe text-brown px-8 py-4 rounded-full font-semibold hover:bg-taupe/10 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
                  <img
                    src={images.heroWoman}
                    alt="Woman feeling rejuvenated"
                    className="w-full aspect-4/4 object-cover "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine/30 to-transparent"></div>
                </div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
                >
                  <Shield className="w-8 h-8 text-wine" />
                  <div>
                    <p className="font-bold text-brown">15+ Years</p>
                    <p className="text-sm text-taupe">Of Excellence</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-taupe rounded-full flex justify-center">
              <div className="w-1 h-3 bg-wine rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* What is HRT Section with Image */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-semibold tracking-wide">
                  UNDERSTANDING HRT
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  What Is Hormone Replacement Therapy (HRT)?
                </h2>
                <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    Hormone Replacement Therapy (HRT) is a medical treatment
                    that replaces hormones that have dropped, most commonly
                    during menopause. For many women, that means replacing
                    oestrogen, and in women who still have a uterus, adding
                    progestogen to protect the womb lining.
                  </p>
                  <p className="text-lg text-brown leading-relaxed bg-cream p-6 rounded-2xl border-l-4 border-rose">
                    In Malaysia, some clinics also use the term HRT more broadly
                    to describe hormone balancing for both women and men. Nexus
                    Clinic positions HRT as support for hormonal imbalance in
                    both genders, aimed at improving quality of life.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={images.hormones}
                    alt="Hormone balance representation"
                    className="w-full h-125 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                </div>

                {/* Stats Card */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brown">5000+</p>
                      <p className="text-sm text-taupe">Happy Patients</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Symptoms Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src={images.wellness}
                    alt="Women discussing wellness"
                    className="w-full h-125 object-cover rounded-3xl shadow-xl"
                  />

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-10 left-10 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-5 h-5 text-wine" />
                      <span className="text-sm font-medium text-brown">
                        Hot Flushes
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5 }}
                    className="absolute bottom-10 right-10 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-rose" />
                      <span className="text-sm font-medium text-brown">
                        Night Sweats
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <span className="text-wine font-semibold tracking-wide">
                  RECOGNIZE THE SIGNS
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  The Symptoms That Make People Search for HRT in Kuala Lumpur
                </h2>
                <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Activity className="w-5 h-5" />,
                      text: '"I wake up tired even after sleeping."',
                    },
                    {
                      icon: <Brain className="w-5 h-5" />,
                      text: '"My mood feels off and I do not know why."',
                    },
                    {
                      icon: <ThermometerSun className="w-5 h-5" />,
                      text: '"My hot flushes are embarrassing."',
                    },
                    {
                      icon: <Droplet className="w-5 h-5" />,
                      text: '"I feel dry, irritated, and intimacy hurts."',
                    },
                    {
                      icon: <Heart className="w-5 h-5" />,
                      text: '"My libido disappeared."',
                    },
                    {
                      icon: <Scale className="w-5 h-5" />,
                      text: '"I keep gaining belly weight."',
                    },
                  ].map((quote, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose flex items-center gap-3"
                    >
                      <div className="text-wine">{quote.icon}</div>
                      <p className="text-brown italic">{quote.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-lg text-brown bg-wine/5 p-4 rounded-xl"
                >
                  Hospitals in Malaysia describe common menopause symptoms such
                  as hot flushes, night sweats, sleep disturbance, weight
                  changes, reduced interest in sex or pain during intercourse,
                  and urinary issues.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Clinic Environment Section */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  Your Comfort{" "}
                  <span className="text-wine">Is Our Priority</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    A good HRT journey feels calm and structured. At our
                    centrally located clinic near KLCC, we've created an
                    environment where you can feel at ease discussing your
                    health concerns.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Shield className="w-6 h-6" />,
                        text: "Private & Confidential",
                      },
                      {
                        icon: <Heart className="w-6 h-6" />,
                        text: "Compassionate Care",
                      },
                      {
                        icon: <Clock className="w-6 h-6" />,
                        text: "Flexible Hours",
                      },
                      {
                        icon: <Users className="w-6 h-6" />,
                        text: "Expert Team",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-cream p-4 rounded-xl text-center"
                      >
                        <div className="text-wine flex justify-center mb-2">
                          {item.icon}
                        </div>
                        <p className="text-sm font-medium text-brown">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-cream p-6 rounded-xl">
                    <p className="text-brown font-medium">
                      📍 LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                      50450 Kuala Lumpur
                    </p>
                    <p className="text-wine font-bold mt-2">
                      016-7025699 / 03-21635699
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={images.clinic}
                    alt="Nexus Clinic modern interior"
                    className="w-full h-125 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Location Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-wine text-white rounded-xl p-4 shadow-xl flex items-center gap-3"
                >
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-bold">KLCC Area</p>
                    <p className="text-sm opacity-90">5 min walk</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Consultation Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <img
                  src={images.consultation}
                  alt="Doctor consultation"
                  className="w-full h-125 object-cover rounded-3xl shadow-xl"
                />
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  What to Expect{" "}
                  <span className="text-wine">at Your Consultation</span>
                </h2>

                <p className="text-lg text-brown mb-8">
                  A typical plan looks like:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Private consultation",
                      desc: "symptoms, goals, medical history, family history",
                    },
                    {
                      step: "2",
                      title: "Baseline checks",
                      desc: "if needed, especially when risk screening is important",
                    },
                    {
                      step: "3",
                      title: "A personalised recommendation",
                      desc: "type of HRT, route, and a realistic timeline",
                    },
                    {
                      step: "4",
                      title: "Follow-up and monitoring",
                      desc: "how you feel, side effects, and whether adjustments are needed",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-wine text-white rounded-full flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brown">
                          {item.title}
                        </h4>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section with Image Grid */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
              >
                Benefits of HRT{" "}
                <span className="text-wine">
                  (What It Can Actually Help With)
                </span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg text-brown leading-relaxed">
                  Major menopause societies and clinical resources consistently
                  state that hormone therapy is the most effective option for:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ThermometerSun />,
                      text: "Vasomotor symptoms – hot flushes and night sweats",
                    },
                    {
                      icon: <Droplet />,
                      text: "Genitourinary syndrome of menopause like vaginal dryness and discomfort",
                    },
                    {
                      icon: <Heart />,
                      text: "It can also help prevent bone loss and fractures in suitable patients.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-cream rounded-xl"
                    >
                      <div className="w-10 h-10 bg-wine text-white rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-brown">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-linear-to-br from-wine to-rose text-white p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold">80%</p>
                    <p className="text-sm">Reduction in hot flushes</p>
                  </div>
                  <div className="bg-linear-to-br from-brown to-taupe text-white p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold">90%</p>
                    <p className="text-sm">Improved sleep quality</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img
                    src="/images/treatment/face-filler.png"
                    alt="Peaceful sleep"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Energy and vitality"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Wellness and balance"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Yoga and meditation"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  Frequently Asked <span className="text-wine">Questions</span>
                </h2>
                <p className="text-lg text-brown mb-8">
                  Get answers to common questions about HRT and what to expect.
                </p>

                <div className="relative rounded-3xl overflow-hidden shadow-xl h-100">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Medical consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent flex items-end p-6">
                    <p className="text-white text-lg">
                      Have more questions? Our doctors are here to help.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="space-y-4 max-h-150 overflow-y-auto pr-4"
              >
                {[
                  {
                    q: "What is HRT and why is it used?",
                    a: "HRT replaces declining hormones, mainly oestrogen and sometimes progestogen, to ease menopause symptoms like hot flushes, night sweats, mood changes, and vaginal dryness.",
                  },
                  {
                    q: "What are the two main types of HRT?",
                    a: "Oestrogen-only HRT is usually for women after hysterectomy. Combined HRT is for women with a uterus to protect the womb lining.",
                  },
                  {
                    q: "Is HRT safe?",
                    a: "For many women, especially under 60 or within around 10 years of menopause, HRT can be safe when prescribed appropriately and reviewed regularly. Risks vary by type and personal health history.",
                  },
                  {
                    q: "Can HRT cause weight gain?",
                    a: "Most evidence and NHS guidance suggest HRT is not strongly linked to weight gain. Menopause itself can affect weight and fat distribution.",
                  },
                  {
                    q: "How soon does HRT start working?",
                    a: "Some people feel improvements in weeks, but timing varies depending on symptoms and formulation.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-semibold text-brown">
                          {faq.q}
                        </span>
                        <span className="text-wine group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-taupe">{faq.a}</div>
                    </details>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA Section with Background Image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Medical background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose mix-blend-multiply opacity-90"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ready to Start Your Journey?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 max-w-2xl mx-auto text-white/90"
            >
              If you're searching for hormone replacement therapy in Kuala
              Lumpur or HRT in Malaysia, start with a private consultation and a
              clear plan.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-lg mx-auto border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Nexus Clinic Kuala Lumpur
              </h3>
              <p className="mb-2 text-white/90">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-2xl font-bold mt-4 text-white">
                016-7025699 / 03-21635699
              </p>

              <button className="mt-6 bg-white text-wine px-8 py-4 rounded-full font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                Book Your Consultation
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HormonReplaceLanding;
