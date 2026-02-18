import { motion } from "framer-motion";
import {
  Droplets,
  Moon,
  Thermometer,
  Wind,
  MapPin,
  Shield,
  Sparkles,
  Heart,
  Brain,
  Sun,
  Droplet,
  AlertCircle,
  Coffee,
  ChevronRight,
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
import FAQ from "../../components/FAQ";

const EczemaLandingPage = () => {
  const faqs = [
    {
      q: "Will eczema go away without treatment?",
      a: "Some mild cases improve, but eczema often flares and returns. Management and prevention are key.",
    },
    {
      q: "Is eczema contagious?",
      a: "No. Atopic dermatitis is not contagious. You cannot spread it by touch.",
    },
    {
      q: "Why is eczema worse at night?",
      a: "Many people feel itch more at night due to routine changes, body temperature shifts, and subconscious scratching.",
    },
    {
      q: "Are steroid creams safe for eczema?",
      a: "They are widely used and safe when used correctly with proper medical guidance on strength, area, and duration.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-taupe rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="space-y-4">
                  <motion.div
                    variants={scaleIn}
                    className="inline-flex items-center px-4 py-2 bg-light rounded-full shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-wine mr-2" />
                    <span className="text-brown font-medium">
                      Nexus Clinic Kuala Lumpur
                    </span>
                  </motion.div>

                  <h1 className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl text-brown leading-tight">
                    Eczema relief
                    <span className="block text-wine">that feels real.</span>
                  </h1>

                  <p className="text-xl text-taupe max-w-lg">
                    Calm your skin, sleep better, and stop the flare cycle in
                    Kuala Lumpur.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center shrink-0">
                      <Moon className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">Sleep better</h3>
                      <p className="text-taupe">
                        When eczema flares, it steals sleep, confidence, and
                        comfort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        Doctor-led approach
                      </h3>
                      <p className="text-taupe">
                        MOH-registered clinic with diagnosis-first approach in
                        KLCC.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                >
                  <span>Start your calm journey</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-150 bg-light rounded-3xl shadow-2xl overflow-hidden">
                  {/* Glass Morphism Card */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80')] bg-cover"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 w-32 h-32 bg-wine rounded-full blur-2xl opacity-30"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose rounded-full blur-2xl opacity-30"></div>

                  {/* Content Cards */}
                  <div className="absolute top-20 left-20 right-20">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="bg-light/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                          <Thermometer className="w-6 h-6 text-wine" />
                        </div>
                        <div>
                          <p className="text-sm text-taupe">
                            KL Climate Impact
                          </p>
                          <p className="font-semibold text-brown">
                            Heat + Sweat Triggers
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">MOH-Registered</h4>
                  <p className="text-taupe text-sm">
                    Doctor-led with diagnosis-first approach
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Near KLCC</h4>
                  <p className="text-taupe text-sm">
                    LG 10, Wisma UOA II, Jalan Pinang
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Trigger Mapping</h4>
                  <p className="text-taupe text-sm">
                    Assessment before treatment
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why KL Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                Why eczema feels worse in
                <span className="text-wine"> Kuala Lumpur</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Malaysia's climate and lifestyle create a perfect storm for
                eczema
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Thermometer className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">Heat + Sweat</h3>
                <p className="text-taupe text-sm">
                  Sweat can sting cracked skin and trigger itching
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Wind className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Air Conditioning
                </h3>
                <p className="text-taupe text-sm">
                  Temperature swings stress your skin barrier
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Droplets className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Frequent Showers
                </h3>
                <p className="text-taupe text-sm">
                  Hot water strips natural protective oils
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Brain className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  Stress & Pollution
                </h3>
                <p className="text-taupe text-sm">
                  Both increase inflammation and scratching
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  Common eczema
                  <span className="text-wine"> symptoms</span>
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">
                      Intense itching, often before you see a rash
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">Dry, rough, flaky skin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">
                      Red or darker patches (brown, purple, or grey)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">
                      Small bumps, oozing, or crusting during flares
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-cream p-8 rounded-3xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Heart className="w-6 h-6 text-wine" />
                      </div>
                      <p className="text-sm text-brown">Skin folds</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Moon className="w-6 h-6 text-wine" />
                      </div>
                      <p className="text-sm text-brown">Behind knees</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Wind className="w-6 h-6 text-wine" />
                      </div>
                      <p className="text-sm text-brown">Neck</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Droplet className="w-6 h-6 text-wine" />
                      </div>
                      <p className="text-sm text-brown">Wrists</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Options */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                Treatment options that
                <span className="text-wine"> actually work</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Evidence-based care tailored to your skin's needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Droplets className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  Moisturisers & Barrier Repair
                </h3>
                <p className="text-taupe mb-4">
                  The foundation of eczema care. Moisturise every day, even when
                  skin looks calm.
                </p>
                <p className="text-sm text-wine">
                  Fragrance-free, daily routine
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Sparkles className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  Anti-inflammatory Creams
                </h3>
                <p className="text-taupe mb-4">
                  For active flares. Topical corticosteroids and calcineurin
                  inhibitors when needed.
                </p>
                <p className="text-sm text-wine">
                  Doctor-guided strength and duration
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Moon className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  Itch Control & Sleep Support
                </h3>
                <p className="text-taupe mb-4">
                  Cold compresses, night routine adjustments, and habit
                  strategies.
                </p>
                <p className="text-sm text-wine">Better sleep, calmer skin</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Daily Routine Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                Practical routine for
                <span className="text-wine"> KL life</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                Simple, sustainable steps that fit your daily rhythm
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <Sun className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">Morning</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• Quick rinse or gentle cleanse</li>
                    <li>• Moisturiser</li>
                    <li>• Sensitive-skin friendly sunscreen</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <Coffee className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">Midday</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• Rinse sweat if possible</li>
                    <li>• Reapply moisturiser if skin feels tight</li>
                    <li>• Avoid fragranced wipes</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <Moon className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">Night</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• Lukewarm shower</li>
                    <li>• Pat dry, moisturise</li>
                    <li>• Medicated creams as advised</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-wine to-rose opacity-90"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="font-['Georgia',serif] text-4xl text-light mb-4">
                Stop guessing with random creams
              </h2>
              <p className="text-xl text-light/90 max-w-2xl mx-auto">
                Visit Nexus Clinic Kuala Lumpur for a doctor-led skin assessment
                and a plan that fits real KL life
              </p>

              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2 group"
              >
                <MapPin className="w-5 h-5" />
                <span>Wisma UOA II, Jalan Pinang, near KLCC</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-light/70 text-sm">
                MOH-registered • Doctor-led • Diagnosis-first approach
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default EczemaLandingPage;
