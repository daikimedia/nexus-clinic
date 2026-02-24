import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Shield,
  Clock,
  Droplets,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  MapPin,
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
import FAQ from "../../components/FAQ";

const TattooRemovalLanding = () => {
  const faqs = [
    {
      q: "Can tattoos be removed completely?",
      a: "Full erasing may not be possible, but significant fading is achievable with multiple sessions.",
    },
    {
      q: "How many sessions does tattoo removal take?",
      a: "Multiple sessions are needed because ink is layered and cannot be safely cleared in one visit.",
    },
    {
      q: "Does laser tattoo removal hurt?",
      a: "It can be uncomfortable, but numbing cream or an injection can be used to reduce pain.",
    },
    {
      q: "How does laser tattoo removal work?",
      a: "Laser breaks ink into tiny particles, and your body clears those particles over time between sessions.",
    },
    {
      q: "Can all tattoo colours be removed?",
      a: "Many multicolour tattoos need different wavelengths. A single laser cannot remove all ink colours.",
    },
    {
      q: "Is tattoo removal safe for dark or Asian skin?",
      a: "Mayo Clinic notes a Q-switched Nd:YAG may be used on darker skin to reduce the risk of permanent pigment change.",
    },
    {
      q: "What are the side effects?",
      a: "Redness and swelling are common. Light or dark spots can occur and often fade within 6-12 months.",
    },
    {
      q: "Will tattoo removal leave a scar?",
      a: "Scarring is possible with any removal method, and Mayo Clinic notes scarring is likely after most types.",
    },
    {
      q: "Can I remove cosmetic tattoo?",
      a: "Yes. The AAD specifically mentions permanent makeup removal as a common reason people seek laser tattoo removal.",
    },
    {
      q: "Can I do tattoo removal while pregnant?",
      a: "AAD advises women who are pregnant or breastfeeding should not be treated.",
    },
    {
      q: "How do I care for skin after in Malaysia?",
      a: "Follow your clinician's instructions, use ointment as advised, and protect the area from sun for months.",
    },
    {
      q: "How much does it cost in Kuala Lumpur?",
      a: "Cost varies widely by size and colour. Public KL sources show anything from around RM600+ per session.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="font-[(--font-inter)] bg-light">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image dengan overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/skin/laser-tatto.png"
              alt="Laser tattoo removal treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown/90 to-wine/80"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6 font-[(--font-georgia)]"
              >
                Ready to erase the ink and move on with confidence?
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                Whether it's a name, a rushed decision, or an old tattoo that no
                longer feels like you, you deserve a safe way forward.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/80 mb-12"
              >
                At Nexus Clinic Kuala Lumpur, we focus on smart laser choices,
                careful settings for Malaysian skin tones, and a clear plan you
                can actually follow.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                  Schedule Your Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-semibold">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  Central KL Location
                </h3>
                <p className="text-taupe">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  Medical Aesthetic Clinic
                </h3>
                <p className="text-taupe">
                  Advanced laser services with Pico Discovery Laser technology
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  Pico Discovery Laser
                </h3>
                <p className="text-taupe">
                  Advanced technology for tattoo removal (Nexus clinic network)
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  Safety Matters
                </h3>
                <p className="text-taupe">
                  Malaysia has formal guidelines for aesthetic medical practice
                  and credentialing (LCP) to protect the public
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Tattoo Removal Really Means */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
              >
                <h2 className="text-4xl font-bold text-brown mb-6 font-[(--font-georgia)]">
                  What Tattoo Removal Really Means
                </h2>
                <p className="text-lg text-taupe mb-6 leading-relaxed">
                  Tattoo ink sits below the top layer of the skin, which is why
                  removing it is harder than getting it done.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine mt-2"></div>
                    <p className="text-brown">
                      <span className="font-semibold">Laser removal</span> (most
                      common)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine mt-2"></div>
                    <p className="text-brown">
                      <span className="font-semibold">Surgical removal</span>{" "}
                      (small tattoos only)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine mt-2"></div>
                    <p className="text-brown">
                      <span className="font-semibold">Dermabrasion</span> (less
                      common today)
                    </p>
                  </div>
                </div>

                <p className="text-taupe italic border-l-4 border-wine pl-4">
                  In modern clinics, laser tattoo removal has largely replaced
                  older methods because it is generally safer and more effective
                  when done properly.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <img
                  src="/images/skin/removal-procedure.png"
                  alt="Tattoo removal procedure"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-wine text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Laser Works */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-12 font-[(--font-georgia)]"
            >
              How Laser Tattoo Removal Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="text-center"
              >
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-12 h-12 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  1. Laser Targets Ink
                </h3>
                <p className="text-taupe">
                  Laser light targets the ink particles beneath your skin
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="text-center"
              >
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Droplets className="w-12 h-12 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  2. Breaks Into Particles
                </h3>
                <p className="text-taupe">
                  The laser breaks the ink into tiny particles
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="text-center"
              >
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-12 h-12 text-wine" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  3. Body Clears Particles
                </h3>
                <p className="text-taupe">
                  Your body clears those particles over time between sessions
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-brown mt-8 text-lg italic"
            >
              That's why tattoo removal is not "one and done." Your skin needs
              time to heal, and your body needs time to flush out ink between
              sessions.
            </motion.p>
          </div>
        </section>

        {/* Pico vs Q-Switched */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-4 font-[(--font-georgia)]"
            >
              Pico Laser vs Q-Switched Laser
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-taupe mb-12"
            >
              You'll hear these terms a lot in Kuala Lumpur.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Q-switched lasers
                </h3>
                <p className="text-taupe mb-4">
                  Mayo Clinic notes Q-switched lasers are often a treatment of
                  choice for tattoo removal, and a Q-switched Nd:YAG can be used
                  on darker skin to reduce the risk of permanent pigment change.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-sm text-brown">
                    ✓ Effective for many skin types
                  </p>
                  <p className="text-sm text-brown">✓ Proven track record</p>
                  <p className="text-sm text-brown">✓ Good for dark ink</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Pico lasers
                </h3>
                <p className="text-taupe mb-4">
                  Pico lasers deliver extremely short pulses and are widely used
                  for tattoo pigment breakdown and other pigmentation concerns.
                  Nexus clinic branding highlights Pico Discovery Laser and
                  multi-wavelength capability.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-sm text-brown">✓ Faster ink breakdown</p>
                  <p className="text-sm text-brown">
                    ✓ Multi-wavelength capability
                  </p>
                  <p className="text-sm text-brown">
                    ✓ Versatile for various concerns
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              className="mt-8 p-6 bg-wine/10 rounded-2xl border border-wine/20"
            >
              <p className="text-brown text-center text-lg italic">
                <span className="font-bold">The honest takeaway:</span> For many
                people, both can work. The better result usually comes from the
                right laser for your skin + your ink colours + correct settings
                + good aftercare, not from hype.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Can All Colours Be Removed */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="order-2 lg:order-1"
              >
                <img
                  src="/images/skin/removal-multi.png"
                  alt="Multi-color tattoo removal"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl font-bold text-brown mb-6 font-[(--font-georgia)]">
                  Can All Tattoo Colours Be Removed?
                </h2>
                <p className="text-wine text-xl mb-4">Colour matters. A lot.</p>
                <p className="text-taupe mb-4">
                  The AAD explains that some places use only one laser, and
                  because a single laser cannot remove all ink colours, people
                  can be left with visible ink. Mayo Clinic also notes that
                  multicoloured tattoos may require different lasers and
                  wavelengths.
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-brown font-semibold mb-2">In real life:</p>
                  <p className="text-taupe">
                    Black and dark inks usually respond fastest. Light and mixed
                    colours often need more sessions and patience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Is Tattoo Removal For */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-12 font-[(--font-georgia)]"
            >
              Who Is Tattoo Removal For?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Regret an old tattoo or relationship tattoo",
                "Need a tattoo removed for work or personal reasons",
                "Want to fade a tattoo for a cover-up",
                "Want to remove cosmetic tattoo (brow, eyeliner, lip liner)",
                "Had an allergic reaction or complications from ink",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-cream p-6 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Avoid */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
              >
                <h2 className="text-4xl font-bold text-brown mb-6 font-[(--font-georgia)]">
                  Who Should Avoid Laser Tattoo Removal
                </h2>
                <p className="text-taupe mb-6">
                  The AAD notes that most people can safely have laser tattoo
                  removal, but there are exceptions:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">
                      You need a healthy immune system for it to work well
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">
                      People who are pregnant or breastfeeding should not be
                      treated
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
              >
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Also pause and get assessed first if you:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Get keloids easily (raised scars)",
                    "Have active infection, eczema flare, or open wound in the area",
                    "Recently tanned or have heavy sun exposure (higher pigment risk)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-4 font-[(--font-georgia)]"
            >
              What to Expect at Your Tattoo Removal Consultation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-taupe mb-12"
            >
              A proper consultation is not a sales talk. It is planning.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
              >
                <p className="text-taupe mb-6">
                  The AAD lists factors that must be considered before removing
                  a tattoo, including:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Tattoo age",
                    "Depth of ink",
                    "Ink colours",
                    "Location on your body",
                    "Your health",
                    "Medications",
                    "History of raised scars",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cream p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-brown mb-3">
                    At Nexus Clinic KL, you should expect:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-taupe">
                    <li>Skin and tattoo assessment</li>
                    <li>A plan for laser type and estimated sessions</li>
                    <li>
                      A clear aftercare guide (this matters as much as the
                      laser)
                    </li>
                  </ol>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <img
                  src="/images/clinic/consultation.png"
                  alt="Consultation at Nexus Clinic"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-wine text-white p-6 rounded-2xl shadow-xl">
                  <p className="font-bold">Nexus Clinic</p>
                  <p className="text-sm">LG 10, Wisma UOA II</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Many Sessions */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-12 font-[(--font-georgia)]"
            >
              How Many Sessions Will I Need?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-taupe mb-6">
                  The AAD explains you need multiple sessions because tattoo ink
                  is layered, and a laser cannot safely break down all layers in
                  one session. Mayo Clinic also notes repeated sessions are
                  usually needed to lighten a tattoo, and full erasing may not
                  be possible.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-brown mb-4">
                  In general, more sessions are needed when:
                </h3>
                <ul className="space-y-3">
                  {[
                    "The tattoo is professional (more ink, deeper ink)",
                    "The tattoo is newer (ink is denser)",
                    "The tattoo has multiple colours",
                    "The tattoo is on an area with lower circulation",
                    "You smoke or have slower healing (your clinician will discuss)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-wine font-bold">•</span>
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-taupe italic">
                  If you only want a fade for cover-up, you may need fewer
                  sessions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain and Healing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
              >
                <h2 className="text-4xl font-bold text-brown mb-6 font-[(--font-georgia)]">
                  Does Tattoo Removal Hurt?
                </h2>
                <p className="text-wine text-xl mb-4">
                  It can be uncomfortable.
                </p>
                <p className="text-taupe mb-6">
                  The AAD says it can feel painful, and a dermatologist can use
                  numbing cream or an injection to reduce pain. Many people
                  describe it like quick hot snaps. The good news is the session
                  is usually fast, especially for small tattoos.
                </p>

                <h3 className="text-2xl font-bold text-brown mb-4 mt-8">
                  Downtime and Healing
                </h3>
                <p className="text-taupe">
                  Most people can go back to normal routine quickly, but your
                  skin will look and feel "treated." After laser tattoo removal,
                  the AAD notes you may see redness, swelling, and a little
                  blistering. Mayo Clinic also notes swelling and possibly
                  blistering or bleeding can happen.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <img
                  src="/images/skin/tattoo-after.png"
                  alt="Aftercare process"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 bg-rose text-white p-4 rounded-xl shadow-lg">
                  <p className="font-semibold">Fast Recovery</p>
                  <p className="text-sm">
                    Most return to normal routine quickly
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aftercare Malaysia */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="order-2 lg:order-1"
              >
                <img
                  src="/images/skin/aftercare.png"
                  alt="Sun protection after treatment"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl font-bold text-brown mb-6 font-[(--font-georgia)]">
                  Aftercare in Malaysia
                </h2>
                <p className="text-wine text-xl mb-4">
                  Very Important Because of Sun
                </p>
                <p className="text-taupe mb-6">
                  Kuala Lumpur sun and heat can ruin your results if you do not
                  protect your skin.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="font-semibold text-brown mb-3">
                    AAD aftercare includes:
                  </p>
                  <p className="text-taupe mb-2">
                    • Follow your clinician's instructions for washing and
                    ointment
                  </p>
                  <p className="text-taupe">
                    • Protect treated skin from the sun for 3 months, ideally
                    with clothing that blocks light completely
                  </p>
                </div>

                <div className="bg-wine/10 p-6 rounded-xl">
                  <p className="font-semibold text-brown mb-3">
                    Simple rules that help most people:
                  </p>
                  <ul className="space-y-2 text-taupe">
                    <li>• Keep the area clean and dry at first</li>
                    <li>• Do not pick scabs or blisters</li>
                    <li>
                      • Avoid swimming pools, saunas, and heavy sweating until
                      cleared
                    </li>
                    <li>• Cover the area from sun if you are outdoors</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Risks and Side Effects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-4 font-[(--font-georgia)]"
            >
              Risks and Side Effects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-wine text-xl mb-12"
            >
              Let's be clear. Tattoo removal is a medical procedure. It has
              risks.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Laser tattoo removal side effects
                </h3>
                <p className="text-taupe mb-4">
                  AAD notes light or dark spots can develop, and they usually
                  fade within 6 to 12 months. It also says scarring, texture
                  changes, burns and wounds are more common when the person
                  performing treatment lacks medical training.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Overall tattoo removal risks
                </h3>
                <p className="text-taupe mb-4">
                  Mayo Clinic states scarring is likely after most types of
                  tattoo removal, and infection or skin discoloration is also
                  possible.
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              className="text-center text-brown mt-8 text-lg font-semibold"
            >
              This is why clinic choice matters. So does aftercare.
            </motion.p>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-4 font-[(--font-georgia)]"
            >
              Tattoo Removal Cost in Malaysia
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-taupe mb-12"
            >
              Kuala Lumpur pricing overview
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-wine text-sm font-semibold mb-2">
                  Premier Clinic
                </p>
                <p className="text-3xl font-bold text-brown mb-2">RM600+</p>
                <p className="text-taupe">pico laser per session</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-wine"
              >
                <p className="text-wine text-sm font-semibold mb-2">
                  Dr Jane Clinic
                </p>
                <p className="text-3xl font-bold text-brown mb-2">RM1,000</p>
                <p className="text-taupe">premium pico laser</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-wine text-sm font-semibold mb-2">
                  Erufu Care
                </p>
                <p className="text-3xl font-bold text-brown mb-2">RM600-680</p>
                <p className="text-taupe">community reported range</p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="mt-12 bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-brown mb-4">
                A fair way to budget is:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-taupe">
                <li>Cost per session</li>
                <li>Expected number of sessions</li>
                <li>
                  Any add-ons (numbing, aftercare products, follow-up reviews)
                </li>
              </ol>
            </motion.div>
          </div>
        </section>

        {/* Treatment Options Compared */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-12 font-[(--font-georgia)]"
            >
              Tattoo Removal Options Compared
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Laser removal
                </h3>
                <p className="text-taupe text-sm">
                  Most common modern option. Breaks ink into particles over
                  time. Multiple sessions.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Surgical removal
                </h3>
                <p className="text-taupe text-sm">
                  Can work for very small tattoos, but it leaves a scar and is
                  not practical for large pieces.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Dermabrasion
                </h3>
                <p className="text-taupe text-sm">
                  Mayo Clinic notes results are less predictable and less
                  effective than laser.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl border-2 border-wine"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Creams and DIY
                </h3>
                <p className="text-taupe text-sm">
                  The AAD warns there is no evidence these products remove
                  tattoos, and they can contain strong acids that burn or scar.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas We Treat */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-12 font-[(--font-georgia)]"
            >
              Areas We Commonly Treat
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Forearm and wrist",
                "Hand and finger",
                "Chest and shoulder",
                "Back",
                "Ankle and foot",
                "Cosmetic tattoo (brow)",
                "Cosmetic tattoo (eyeliner)",
                "Cosmetic tattoo (lip liner)",
              ].map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
                >
                  <p className="text-brown font-medium">{area}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-taupe mt-8"
            >
              The AAD also mentions permanent makeup removal as a common reason
              people seek laser tattoo removal.
            </motion.p>
          </div>
        </section>

        {/* Competitor Snapshot */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold text-center text-brown mb-4 font-[(--font-georgia)]"
            >
              Kuala Lumpur Tattoo Removal Landscape
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Directories & Reviews
                </h3>
                <p className="text-taupe">
                  Erufu Care is a major visibility player for tattoo removal
                  searches in KL, showing many clinics and patient reviews with
                  price mentions.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Pico Laser Branding
                </h3>
                <p className="text-taupe">
                  Clinic Cleo promotes pico laser tattoo removal and positions
                  it as precise and efficient, with multiple KL branches.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="bg-cream p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-wine mb-3">
                  Price Anchors
                </h3>
                <p className="text-taupe">
                  Some clinics publish starting prices (for example, pico laser
                  tattoo removal "around RM600 onwards").
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              className="mt-8 p-8 bg-wine/10 rounded-2xl border border-wine/20"
            >
              <h3 className="text-2xl font-bold text-brown mb-4">
                How Nexus Clinic KL can stand out
              </h3>
              <ul className="space-y-2 text-taupe">
                <li>
                  • Clear education about ink colours, session planning, and sun
                  aftercare
                </li>
                <li>
                  • Device credibility and multi-wavelength capability (Pico
                  Discovery positioning)
                </li>
                <li>
                  • Medical-led safety culture aligned with Malaysia aesthetic
                  practice guideline standards
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-brown relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/clinic/interior.png"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-[(--font-georgia)]"
              >
                Start Your Tattoo Removal Journey
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8"
              >
                If you're searching for tattoo removal in Malaysia or laser
                tattoo removal in Kuala Lumpur, start with a consult that tells
                you the truth: how many sessions, what results look like, and
                how to protect your skin.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                  Book Your Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-semibold">
                  Call/WhatsApp: 016-7025699
                </button>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-white/80 mt-8">
                Nexus Clinic Kuala Lumpur
                <br />
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
                <br />
                Tel: 03-21635699
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TattooRemovalLanding;
