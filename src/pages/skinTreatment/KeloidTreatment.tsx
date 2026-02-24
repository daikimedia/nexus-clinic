import { motion } from "framer-motion";
import {
  Shield,
  Scissors,
  Snowflake,
  Droplet,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const KeloidLandingPage = () => {
  const treatmentOptions = [
    {
      icon: (
        <Droplet className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Keloid Injections",
      description:
        "Steroid injections (triamcinolone) to reduce inflammation and slow collagen overgrowth. Monthly sessions for 4-6 weeks.",
      details: [
        "Softens and flattens over time",
        "Quick procedure",
        "Most common first-line treatment",
      ],
    },
    {
      icon: (
        <Shield className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Silicone Therapy",
      description:
        "Silicone gel or sheets for home use. Essential for early scars and preventing recurrence after in-clinic procedures.",
      details: [
        "Best with consistent use",
        "Simple but effective",
        "Weeks to months of use",
      ],
    },
    {
      icon: (
        <Snowflake className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Cryotherapy",
      description:
        "Liquid nitrogen freezing for scar tissue. Often combined with injections for stubborn keloids.",
      details: [
        "Effective for small keloids",
        "Combination approaches work best",
        "Monitor pigment changes",
      ],
    },
    {
      icon: (
        <Sparkles className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Laser Treatment",
      description:
        "Reduces redness, smooths texture, supports flattening when combined with injections.",
      details: [
        "Fractional CO2 laser",
        "Improves appearance",
        "Part of combination plan",
      ],
    },
    {
      icon: (
        <Scissors className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Surgical Excision",
      description:
        "For bulky, painful keloids. Always combined with strict aftercare to prevent regrowth.",
      details: [
        "Requires aftercare plan",
        "Often with radiotherapy",
        "For large or painful keloids",
      ],
    },
    {
      icon: (
        <Clock className="w-8 h-8" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Pressure Therapy",
      description:
        "Pressure earrings for ear keloids. Must be worn 12-20 hours daily for months.",
      details: [
        "Specifically for ear keloids",
        "High commitment needed",
        "Effective with consistency",
      ],
    },
  ];

  const commonLocations = [
    "Earlobes",
    "Shoulders",
    "Cheeks",
    "Middle Chest",
    "Jawline (from acne)",
    "Upper back",
    "Arms",
  ];

  const sideEffects = [
    "Skin thinning (atrophy)",
    "Spider veins",
    "Skin color changes (hypo/hyperpigmentation)",
    "Visible small vessels",
  ];

  const faqs = [
    {
      q: "Can keloids go away naturally?",
      a: "They can sometimes soften, but Mayo Clinic notes keloids can last for years and can recur.",
    },
    {
      q: "What is the best treatment for keloid scars?",
      a: "There is no single best option. AAD notes combination treatment often works best, commonly using injections, silicone, cryotherapy, and sometimes surgery with aftercare.",
    },
    {
      q: "Do keloid injections work?",
      a: "Steroid injections are widely used and can reduce thickness and symptoms, but response varies and repeat sessions are usually needed.",
    },
    {
      q: "How many steroid injections do I need for a keloid?",
      a: "Mayo Clinic notes you may need monthly injections for up to six months to see flattening.",
    },
    {
      q: "Do keloid injections hurt?",
      a: "They can sting or feel tight pressure, especially in sensitive areas, but the session is quick. Your clinician can guide pain control options.",
    },
    {
      q: "Can laser remove keloids permanently?",
      a: "Laser can help with redness and texture, but keloids can recur. Lasers are often used as part of a combination plan, not as a one-step cure.",
    },
    {
      q: "Is cryotherapy safe for dark skin in Malaysia?",
      a: "It can work, but hypopigmentation is a known risk, and studies note this can be persistent in darker Fitzpatrick skin types.",
    },
    {
      q: "What are the side effects of steroid injections for keloids?",
      a: "Possible side effects include skin thinning (atrophy), colour changes, and visible small vessels in the area.",
    },
    {
      q: "Do keloids come back after surgery?",
      a: "They can. Keloids have high recurrence risk, which is why surgery is usually combined with other therapies and strict aftercare.",
    },
    {
      q: "How much does keloid removal cost in Kuala Lumpur?",
      a: "Published clinic ranges commonly show steroid injections around RM150 to RM500 per session and laser around RM500 to RM1,500 per session, depending on scar size and method.",
    },
    {
      q: "Are keloids dangerous or cancerous?",
      a: "Mayo Clinic states keloids are not cancerous.",
    },
    {
      q: "What is the fastest way to flatten a keloid?",
      a: "Steroid injections are commonly used early to flatten and reduce symptoms, sometimes paired with cryotherapy to improve results.",
    },
    {
      q: "Can keloids form after ear piercing?",
      a: "Yes. Ear lobes are a common keloid site, and treatment often includes injections every 4 to 6 weeks and sometimes pressure earrings.",
    },
    {
      q: "Is silicone gel really effective for keloids?",
      a: "AAD notes silicone gel sheets may help flatten keloids and can also be used to prevent keloid formation after injury.",
    },
  ];

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-20 left-10 w-72 h-72 rounded-full"
              style={{ backgroundColor: "var(--color-rose)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
              style={{ backgroundColor: "var(--color-wine)" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  That raised, itchy scar is not "just a scar." It might be a
                  keloid, and it can be treated.
                </h1>
                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  style={{ color: "var(--color-taupe)" }}
                >
                  Keloids can grow beyond the original wound, feel tight or
                  painful, and keep coming back if treated the wrong way. At
                  Nexus Clinic Kuala Lumpur, we focus on the safest plan for
                  your skin type, your scar location, and your goals.
                </p>
                <motion.div variants={scaleIn} className="flex flex-wrap gap-4">
                  <button
                    className="px-8 py-4 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    Schedule Consultation
                  </button>
                  <button
                    className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                    style={{
                      backgroundColor: "var(--color-glass)",
                      color: "var(--color-brown)",
                      border: "1px solid var(--color-rose)",
                    }}
                  >
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/clinic/consultation-k.png"
                    alt="Keloid consultation at Nexus Clinic"
                    className="w-full h-auto"
                  />
                  {/* Glass Card Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{
                      backgroundColor: "var(--color-glass)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-brown)" }}
                      >
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur
                      </span>
                    </div>
                  </div>
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
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Central KL Location",
                  desc: "LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur. Easy access from anywhere in KL.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Private Consults",
                  desc: "Step-by-step scar plans tailored to you, not a one-size-fits-all menu approach.",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Combination Treatments",
                  desc: "Layered approach because keloids often respond best to multiple treatment methods.",
                },
                {
                  icon: <AlertCircle className="w-6 h-6" />,
                  title: "Clear Expectations",
                  desc: "Honest discussion about recurrence - keloids can last for years and may return even after treatment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    border: "1px solid var(--color-cream)",
                  }}
                >
                  <div className="mb-4" style={{ color: "var(--color-wine)" }}>
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* What is Keloid Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  What Is a Keloid?
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-taupe)" }}
                >
                  A keloid is a raised scar that grows beyond the edges of the
                  original wound. It can appear months, or even years, after
                  skin injury. It can look shiny, feel firm or rubbery, and may
                  itch or hurt.
                </p>

                <div className="space-y-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Keloid vs hypertrophic scar (quick difference)
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: "var(--color-light)" }}
                    >
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-rose)" }}
                      >
                        Hypertrophic scar:
                      </span>
                      <span style={{ color: "var(--color-taupe)" }}>
                        {" "}
                        raised but stays within the original wound border and
                        may improve over time.
                      </span>
                    </div>
                    <div
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: "var(--color-light)" }}
                    >
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        Keloid:
                      </span>
                      <span style={{ color: "var(--color-taupe)" }}>
                        {" "}
                        spreads outside the wound border and tends to persist or
                        keep growing.
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-sm italic"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Also, keloids are not cancerous.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src="/images/clinic/keloid-example.png"
                  alt="Keloid example"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="/images/clinic/hypertrophic-scar-example.png"
                  alt="Hypertrophic scar example"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Keloids Happen */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  Why Do Keloids Happen?
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-taupe)" }}
                >
                  Keloids happen when your body produces too much collagen
                  during healing. Some people's skin is simply more prone to
                  this over-repair response.
                </p>

                <div className="space-y-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Common triggers
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Acne scars",
                      "Cuts and burns",
                      "Surgery scars (C-section, appendix, etc.)",
                      "Piercings (especially ear keloids)",
                      "Vaccination scars (BCG scar thickening)",
                    ].map((trigger, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        className="flex items-center gap-2 p-3 rounded-lg"
                        style={{ backgroundColor: "var(--color-cream)" }}
                      >
                        <CheckCircle2
                          className="w-4 h-4"
                          style={{ color: "var(--color-rose)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-brown)" }}
                        >
                          {trigger}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Where Keloids Commonly Appear
                  </h3>
                  <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                    Mayo Clinic notes keloids often show up on earlobes,
                    shoulders, cheeks, and the middle chest. In Malaysia, we
                    also see many keloids on the jawline (from acne), upper
                    back, and arms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {commonLocations.map((location, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: "var(--color-wine)",
                          color: "white",
                        }}
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Signs Your Scar Is Turning Into a Keloid
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "It keeps growing past the original injury line",
                      "It feels itchy, sore, tight, or 'pulling'",
                      "It becomes raised and shiny",
                      "It changes colour (pink, red, purple, brown), depending on your skin tone",
                    ].map((sign, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle
                          className="w-5 h-5 mt-0.5 shrink-0"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span style={{ color: "var(--color-taupe)" }}>
                          {sign}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* When to Treat */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-georgia)",
                  color: "var(--color-brown)",
                }}
              >
                When Should You Treat a Keloid?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg"
                style={{ color: "var(--color-taupe)" }}
              >
                Treat it when:
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                "it is growing",
                "it is painful or itchy",
                "it affects confidence (visible areas like face, chest, neck)",
                "it limits movement (for example, near joints)",
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-xl text-center"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    className="font-medium"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-lg italic"
              style={{ color: "var(--color-rose)" }}
            >
              Early treatment usually gives a smoother, easier result than
              waiting until it becomes thick and hard.
            </motion.p>
          </div>
        </motion.section>

        {/* Treatment Options */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-georgia)",
                  color: "var(--color-brown)",
                }}
              >
                Keloid Treatment Options in Malaysia
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                (What Actually Works)
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentOptions.map((treatment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {treatment.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {treatment.title}
                  </h3>
                  <p
                    className="mb-4 text-sm"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {treatment.description}
                  </p>
                  <ul className="space-y-2">
                    {treatment.details.map((detail, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "var(--color-rose)" }}
                        />
                        <span style={{ color: "var(--color-brown)" }}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Side Effects Note */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <h4
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-brown)" }}
              >
                Possible Side Effects:
              </h4>
              <div className="flex flex-wrap gap-2">
                {sideEffects.map((effect, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "var(--color-wine)",
                      color: "white",
                    }}
                  >
                    {effect}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  What Results Can You Expect?
                </h2>
                <p
                  className="text-lg italic"
                  style={{ color: "var(--color-rose)" }}
                >
                  Let's be honest and practical.
                </p>

                <div className="space-y-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    The goal is usually:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "flatter scar",
                      "softer texture",
                      "less itch and pain",
                      "less redness",
                      "lower chance of regrowth",
                    ].map((goal, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-5 h-5"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span style={{ color: "var(--color-taupe)" }}>
                          {goal}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className="mt-6 p-4 rounded-lg italic"
                    style={{
                      backgroundColor: "var(--color-light)",
                      color: "var(--color-brown)",
                    }}
                  >
                    Not every keloid becomes "invisible." But many keloids
                    become far less noticeable and far less annoying.
                  </p>

                  <p
                    className="font-medium"
                    style={{ color: "var(--color-wine)" }}
                  >
                    Also, keloids can recur even after successful treatment, so
                    long-term maintenance matters.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/images/clinic/keloid-result.png"
                  alt="Keloid treatment results"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div
                  className="absolute -bottom-6 -left-6 p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Before • After
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Best Plan Approach */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-georgia)",
                  color: "var(--color-brown)",
                }}
              >
                A Simple "Best Plan" Approach
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                At Nexus Clinic Kuala Lumpur, the most realistic approach is to
                treat keloids like a project:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Diagnose properly",
                  desc: "We confirm whether it is a keloid or hypertrophic scar, then measure thickness, redness, symptoms, and location.",
                },
                {
                  step: "Step 2",
                  title: "Choose the right combination",
                  desc: "AAD notes combination approaches often work best and includes options like steroid injections, cryotherapy, silicone sheets, pressure therapy, and surgery with follow-up cryotherapy.",
                },
                {
                  step: "Step 3",
                  title: "Protect your results",
                  desc: "Silicone, pressure, scar care, and follow-ups are how you keep it from coming back.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative p-8 rounded-xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3 mt-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  Keloid Treatment Cost in Malaysia (Kuala Lumpur)
                </h2>
                <p style={{ color: "var(--color-taupe)" }}>
                  Costs depend on size, location, and how many sessions you
                  need.
                </p>
                <p
                  className="text-sm italic"
                  style={{ color: "var(--color-rose)" }}
                >
                  Here are published ranges from KL and Malaysia clinics to help
                  set expectations:
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4">
                {[
                  {
                    treatment: "Keloid steroid injections",
                    range: "RM150 - RM500 per session",
                  },
                  {
                    treatment: "Laser treatment",
                    range: "RM500 - RM1,500 per session",
                  },
                  {
                    treatment: "Cryotherapy",
                    range: "RM250 - RM500 per session",
                  },
                  {
                    treatment: "Surgical excision",
                    range:
                      "RM1,000+ depending on complexity, plus aftercare sessions",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="flex justify-between items-center p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-light)" }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {item.treatment}
                    </span>
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {item.range}
                    </span>
                  </motion.div>
                ))}

                <p
                  className="mt-4 text-sm italic"
                  style={{ color: "var(--color-taupe)" }}
                >
                  A good clinic will quote based on your scar size and expected
                  number of sessions, not just a single "price from" number.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Competitor Review */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-georgia)",
                  color: "var(--color-brown)",
                }}
              >
                Competitor Review
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                What Top Clinics in Malaysia Are Doing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  pattern: "Price-led pages",
                  desc: "Some clinics publish price ranges per treatment, which helps users budget quickly.",
                },
                {
                  pattern: "Injection-first messaging",
                  desc: "Many clinics highlight injections as primary treatment option.",
                },
                {
                  pattern: "Laser and combination packages",
                  desc: "Several clinics highlight laser plus injection combinations to improve both thickness and redness.",
                },
                {
                  pattern: "Directory and review platforms",
                  desc: "ERUFU Care ranks clinics and shows patient reviews and service mentions for keloid removal in Kuala Lumpur.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.pattern}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--color-wine)" }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                How Nexus Clinic KL should stand out
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>
                    More education about recurrence and prevention, so you do
                    not waste money repeating the wrong approach.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>
                    Better guidance for Malaysian skin tones, especially pigment
                    risk with cryotherapy and steroid injections.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>
                    A clear plan: flatten, calm symptoms, then improve texture,
                    then prevent return.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Prevention Tips */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <img
                  src="/api/placeholder/500/400"
                  alt="Keloid prevention"
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-georgia)",
                    color: "var(--color-brown)",
                  }}
                >
                  Keloid Prevention Tips
                </h2>
                <p
                  className="text-lg italic"
                  style={{ color: "var(--color-rose)" }}
                >
                  (After Acne, Surgery, Piercing)
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  You cannot fully control keloids if your skin is prone, but
                  you can reduce risk:
                </p>

                <ul className="space-y-3">
                  {[
                    "Treat acne early to reduce deep inflammation scars",
                    "Avoid unnecessary piercings if you already have keloid history",
                    "Use silicone gel or sheets after injury when advised",
                    "Do not pick scabs or squeeze pimples",
                    "Protect healing wounds from friction and sun (sun can darken scars)",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-white"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-georgia)" }}
              >
                Start Your Keloid Treatment Journey Today
              </h2>
              <p className="text-lg mb-8 text-white/90">
                If you're searching for keloid treatment in Malaysia or keloid
                removal in Kuala Lumpur, start with a proper assessment and a
                plan that matches your scar and your skin type.
              </p>

              <motion.div variants={scaleIn} className="space-y-4">
                <p className="font-semibold text-xl">
                  Nexus Clinic Kuala Lumpur
                </p>
                <p className="flex items-center justify-center gap-2 text-white/90">
                  <MapPin className="w-5 h-5" />
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-12 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-2xl"
                  style={{
                    backgroundColor: "white",
                    color: "var(--color-wine)",
                  }}
                >
                  Schedule Your Consultation
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default KeloidLandingPage;
