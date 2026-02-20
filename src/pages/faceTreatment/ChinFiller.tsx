import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Syringe,
  Calendar,
  Clock,
  Shield,
  Users,
  ChevronRight,
  AlertCircle,
  Sparkles,
  Target,
  Heart,
  Feather,
  Scale,
  Camera,
  User,
  Droplets,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const ChinFillerLanding = () => {
  const faqs = [
    {
      q: "Does chin filler hurt?",
      a: "Most feel pressure and mild discomfort. Numbing helps.",
    },
    {
      q: "How long does chin filler last?",
      a: "12 to 24 months, depending on filler type and metabolism.",
    },
    {
      q: "What is the downtime?",
      a: "Return to normal quickly. Mild swelling/bruising may last days.",
    },
    {
      q: "Is chin filler safe?",
      a: "Yes with experienced medical professional using approved products.",
    },
    {
      q: "How much in Kuala Lumpur?",
      a: "Nexus Clinic: Juvederm from RM 2,200 per 1 cc.",
    },
    {
      q: "Can it be reversed?",
      a: "Yes, if hyaluronic acid filler is used.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="bg-cream text-wine px-4 py-2 rounded-full text-sm font-medium">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl lg:text-6xl leading-tight"
                  style={{ color: "var(--color-brown)" }}
                >
                  Chin Filler That Makes Your Whole Face Look
                  <span className="text-wine block mt-2">More Balanced</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe max-w-lg"
                >
                  Bukan sekadar menambah volume. Kami menciptakan harmoni wajah
                  Anda dengan presisi artistik dan keahlian medis.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl">
                    Jadwalkan Konsultasi
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300">
                    Lihat Portofolio
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-8 pt-8"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-wine" />
                    <span className="text-sm text-brown">
                      Produk Authentic US FDA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-wine" />
                    <span className="text-sm text-brown">500+ Pasien</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-glass backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                  <div className="space-y-6">
                    <h3 className="font-georgia text-2xl text-brown">
                      Your Chin, Your Harmony
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          icon: Target,
                          text: "1 cc is the sweet spot — but your face tells the real story",
                        },
                        {
                          icon: Scale,
                          text: "Balance your nose and jawline without surgery",
                        },
                        {
                          icon: Camera,
                          text: "Look defined in photos, not 'done'",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-3"
                        >
                          <item.icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                          <p className="text-brown">{item.text}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-cream rounded-2xl p-4">
                      <p className="text-sm text-taupe italic">
                        "The chin anchors the lower face. Small change, big
                        impact."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-rose rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine rounded-full opacity-20 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Chin Filler Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-wine font-medium mb-4 block">
                Understanding
              </span>
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is Chin Filler?
              </h2>
              <p className="text-taupe text-lg">
                A non-surgical treatment where dermal filler is placed into
                specific points of the chin to improve projection, shape, and
                overall facial harmony.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Scale,
                  title: "Projection",
                  desc: "For weak or recessed chin",
                },
                {
                  icon: Feather,
                  title: "Shape & Symmetry",
                  desc: "Correct uneven contours",
                },
                {
                  icon: TrendingUp,
                  title: "Jawline Flow",
                  desc: "Connect chin to jaw",
                },
                {
                  icon: Heart,
                  title: "Facial Proportions",
                  desc: "Balance your features",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Real Life Goals Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-georgia text-4xl text-brown">
                  Real-Life Goals,
                  <span className="text-wine block mt-2">Natural Results</span>
                </h2>

                <div className="space-y-4">
                  {[
                    "My chin looks weak in side photos",
                    "My jawline looks soft, but I don't want surgery",
                    "I have a double chin in photos",
                    "My chin is uneven",
                  ].map((concern, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3 bg-cream p-4 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                      <p className="text-brown">{concern}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-taupe italic">
                  Chin filler can address these concerns by improving the front
                  "anchor" of your lower face.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-6">
                    Who Is Chin Filler For?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Have a recessed chin",
                      "Want more definition without surgery",
                      "Seek better lower-face balance",
                      "Want to improve side profile",
                      "Desire minimal downtime",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* The Art of Planning Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Chin Filler is Geometry, Not Just Volume
              </h2>
              <p className="text-taupe">
                At Nexus Clinic KL, every treatment begins with understanding
                your unique facial architecture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Your profile at rest",
                "How your chin moves when you talk",
                "Chin width vs lip width",
                "Connection to your jawline",
                "What looks most 'off' in photos",
                "Your desired outcome",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium Fillers Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Premium Fillers for Premium Results
              </h2>
              <p className="text-taupe">
                We use only authentic Allergan Juvederm fillers, ensuring safety
                and natural-looking results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Juvederm Ultra Plus XC",
                  price: "RM 2,200",
                  use: "Chin structure",
                },
                {
                  name: "Juvederm Voluma",
                  price: "RM 2,400",
                  use: "Cheeks & chin",
                },
                {
                  name: "Juvederm Volux",
                  price: "RM 2,500",
                  use: "Lower face definition",
                },
                {
                  name: "Juvederm Volift",
                  price: "RM 2,500",
                  use: "Lips, chin & lower face",
                },
              ].map((filler, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-cream rounded-2xl p-6 text-center group cursor-pointer"
                >
                  <Syringe className="w-12 h-12 text-wine mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {filler.name}
                  </h3>
                  <p className="text-wine font-bold text-2xl mb-2">
                    {filler.price}
                  </p>
                  <p className="text-taupe text-sm">per 1 cc • {filler.use}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mt-8 text-sm"
            >
              *Prices are promotional and subject to change. Consultation
              determines exact needs.
            </motion.p>
          </div>
        </motion.section>

        {/* How Many CC Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-wine text-white"
        >
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-georgia text-4xl mb-6">
                How Many CC Do You Need?
              </h2>
              <p className="text-2xl mb-8 font-light">
                Chin is often around{" "}
                <span className="font-bold text-4xl">1 cc</span>
              </p>
              <p className="text-lg opacity-90 mb-12">
                But every face tells its own story. Some need less, some need
                more. That's why consultation is key.
              </p>
              <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 inline-flex items-center gap-2">
                Discover Your Ideal Amount
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* The Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              The Nexus Experience
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  step: "01",
                  title: "Marking & Mapping",
                  desc: "We confirm shape goals and safety points",
                },
                {
                  icon: Feather,
                  step: "02",
                  title: "Comfort & Numbing",
                  desc: "Manageable pressure, maximum comfort",
                },
                {
                  icon: Sparkles,
                  step: "03",
                  title: "Injection & Sculpting",
                  desc: "Precise placement, real-time symmetry check",
                },
                {
                  icon: Heart,
                  step: "04",
                  title: "Review & Aftercare",
                  desc: "Clear day-by-day expectations",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-6xl font-georgia text-wine/10 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <item.icon className="w-12 h-12 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown mt-8"
            >
              Session typically takes less than 30 minutes with immediate
              results
            </motion.p>
          </div>
        </motion.section>

        {/* Results & Aftercare Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">
                  What to Expect
                </h2>

                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4">
                    Immediate Results
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "See improvement right away",
                      "Mild swelling at first",
                      "Final look after swelling settles",
                      "Tiny bruises possible",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-taupe"
                      >
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-wine text-white rounded-2xl p-6">
                  <h3 className="font-georgia text-xl mb-4">
                    Downtime & Aftercare
                  </h3>
                  <p className="mb-4">
                    Return to daily life same day. For best results:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• No strenuous exercise for 24 hours</li>
                    <li>• Avoid heat (sauna) for 24-48 hours</li>
                    <li>• Skip alcohol around treatment time</li>
                    <li>• Don't press or rest chin on hand</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4">
                    How Long Does It Last?
                  </h3>
                  <p className="text-3xl font-bold text-wine mb-2">
                    12 to 24 months
                  </p>
                  <p className="text-taupe">
                    Varies by filler type, technique, and metabolism
                  </p>
                </div>

                <div className="border-2 border-wine rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-wine" />
                    Safety First
                  </h3>
                  <p className="text-taupe mb-4">
                    Common side effects: swelling, tenderness, mild redness,
                    bruising (settle in days)
                  </p>
                  <p className="text-sm text-wine">
                    Rare risks exist — product authenticity and injector skill
                    matter
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pros & Cons Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Non-surgical",
                    "Quick treatment",
                    "Immediate improvement",
                    "Supports facial balance",
                    "Minimal downtime",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-brown"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-wine" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Swelling or bruising possible",
                    "Results not permanent",
                    "Wrong technique can look sharp",
                    "Rare complications exist",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-brown"
                    >
                      <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Chin Filler vs Other Options
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Chin Filler",
                  desc: "Non-surgical, reversible (HA), temporary",
                  icon: Syringe,
                },
                {
                  title: "Chin Implant",
                  desc: "Surgical, longer-lasting, higher downtime",
                  icon: Activity,
                },
                {
                  title: "Fat Reduction",
                  desc: "For fat under chin, can combine with filler",
                  icon: Droplets,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream rounded-2xl p-6 text-center"
                >
                  <item.icon className="w-12 h-12 text-wine mx-auto mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.desc}</p>
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
          variants={staggerContainer}
          className="py-24 bg-wine text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <User className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-georgia text-4xl mb-6">
                Ready to Plan Your Chin Filler in Kuala Lumpur?
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Start with a proper assessment. The best results come from the
                right product, the right amount, and the right placement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Chat With Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ChinFillerLanding;
