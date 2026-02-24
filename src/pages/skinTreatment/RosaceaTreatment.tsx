import { motion } from "framer-motion";
import {
  Sun,
  Thermometer,
  Coffee,
  Activity,
  AlertCircle,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Phone,
  Calendar,
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

const RosaceaLanding = () => {
  const faqs = [
    {
      q: "Can rosacea be cured permanently?",
      a: "Rosacea cannot be cured, but treatment can control symptoms and prevent it from getting worse.",
    },
    {
      q: "What is the best treatment for rosacea?",
      a: "It depends on symptoms. Topicals like azelaic acid, metronidazole, or ivermectin are common for bumps. Laser or IPL can help persistent redness and visible blood vessels.",
    },
    {
      q: "What triggers rosacea flare-ups?",
      a: "Common triggers include sunlight, heat, stress, alcohol, spicy foods, and hot drinks.",
    },
    {
      q: "Is rosacea the same as acne?",
      a: "No. Rosacea can look like acne but often comes with flushing and sensitivity, and harsh acne products can worsen it.",
    },
    {
      q: "How long do rosacea creams take to work?",
      a: "Azelaic acid and metronidazole may take 2 to 6 weeks. Ivermectin may take longer, but results can last longer.",
    },
    {
      q: "Can rosacea affect the eyes?",
      a: "Yes. Seek urgent assessment for eye pain, blurred vision, light sensitivity, or red gritty eye.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-wine opacity-5 rounded-full blur-3xl"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div variants={scaleIn} className="inline-block">
                  <span className="bg-wine bg-opacity-10 text-wine px-4 py-2 rounded-full text-sm font-medium">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-serif text-brown leading-tight"
                >
                  Calm the redness.
                  <br />
                  <span className="text-wine">Control the flare-ups.</span>
                  <br />
                  Feel confident in your skin again.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed"
                >
                  Rosacea can make your face look "hot" even when you feel fine.
                  It can sting, flush, and flare without warning. At Nexus
                  Clinic Kuala Lumpur, we build a practical plan that fits
                  Malaysian weather, your skin type, and your daily routine.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <button className="bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    Book Consultation <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-taupe text-brown px-8 py-4 rounded-full hover:border-wine hover:text-wine transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/clinic/consultation2.png"
                    alt="Rosacea treatment consultation at Nexus Clinic"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                </div>

                {/* Trust badge */}
                <motion.div
                  variants={scaleIn}
                  className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-wine" />
                    <div>
                      <p className="text-brown font-semibold">
                        Sensitive-skin approach
                      </p>
                      <p className="text-taupe text-sm">
                        Gentle, step-by-step care
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl border border-taupe/20"
              >
                <MapPin className="w-8 h-8 text-wine mb-4" />
                <h3 className="text-brown font-semibold mb-2">
                  Central KL Location
                </h3>
                <p className="text-taupe text-sm">
                  LG 10, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl border border-taupe/20"
              >
                <Sparkles className="w-8 h-8 text-wine mb-4" />
                <h3 className="text-brown font-semibold mb-2">
                  Sensitive-Skin Approach
                </h3>
                <p className="text-taupe text-sm">
                  Gentle skincare, trigger control, step-by-step treatment
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl border border-taupe/20"
              >
                <Activity className="w-8 h-8 text-wine mb-4" />
                <h3 className="text-brown font-semibold mb-2">
                  Advanced Options
                </h3>
                <p className="text-taupe text-sm">
                  Laser & light-based treatments for redness
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl border border-taupe/20"
              >
                <Clock className="w-8 h-8 text-wine mb-4" />
                <h3 className="text-brown font-semibold mb-2">
                  Clear Expectations
                </h3>
                <p className="text-taupe text-sm">
                  Ongoing care needed - symptoms may return
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What is Rosacea Section with Image */}
        <section className="py-20 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-serif text-brown">
                  What Is Rosacea?
                </h2>
                <p className="text-lg text-taupe leading-relaxed">
                  Rosacea is a long-term inflammatory skin condition that
                  usually affects the face. Many people notice persistent
                  redness, flushing, visible small blood vessels, and sometimes
                  acne-like bumps.
                </p>
                <p className="text-wine font-medium">
                  It is not caused by poor hygiene and it is not contagious.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">Redness across cheeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">Flushing that comes/goes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">Acne-like bumps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">Dry, sensitive skin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">Eye symptoms</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src="/images/clinic/rosacea-face.png"
                  alt="Rosacea symptoms on face"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="/images/clinic/facial-redness.png"
                  alt="Facial redness from rosacea"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Rosacea vs Acne */}
        <section className="py-16 px-4 bg-wine bg-opacity-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-taupe/20">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif text-brown mb-6"
              >
                Rosacea vs Acne: Why Many People Get the Wrong Treatment
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe leading-relaxed mb-4"
              >
                Rosacea can look like acne, but they are not the same. Using
                harsh acne products can make rosacea worse because rosacea skin
                is often sensitive.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-wine italic">
                The NHS also notes rosacea can resemble other conditions like
                acne, dermatitis, and lupus, which is why proper diagnosis
                matters.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Triggers Section with Image */}
        <section className="py-20 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl font-serif text-brown mb-6">
                  Common Rosacea Triggers in Malaysia
                </h2>
                <p className="text-taupe mb-8">
                  Rosacea triggers are personal, but some are very common,
                  especially in a hot, humid country like Malaysia.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <Sun className="w-6 h-6 text-wine" />
                    <span className="text-brown">
                      Outdoor heat and humidity
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <Thermometer className="w-6 h-6 text-wine" />
                    <span className="text-brown">
                      Sun exposure (even short commutes)
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <Coffee className="w-6 h-6 text-wine" />
                    <span className="text-brown">
                      Spicy meals and hot drinks
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <Activity className="w-6 h-6 text-wine" />
                    <span className="text-brown">
                      Gym sessions with intense cardio
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <AlertCircle className="w-6 h-6 text-wine" />
                    <span className="text-brown">Stress and poor sleep</span>
                  </div>
                </div>

                <motion.p variants={fadeInUp} className="mt-6 text-wine italic">
                  A simple trigger diary (notes on food, weather, skincare,
                  stress) helps a lot.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/images/clinic/rosacea-triggers.png"
                  alt="Common rosacea triggers in Malaysia"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Treatment Steps */}
        <section className="py-20 px-4 bg-brown text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif mb-12 text-center"
            >
              Rosacea Treatment in Malaysia: The Plan That Works Best
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Calm Your Skin Barrier
                </h3>
                <p className="text-cream text-sm">
                  Gentle skincare, SPF 30+ daily, avoid harsh products
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Prescription Creams
                </h3>
                <p className="text-cream text-sm">
                  Azelaic acid, metronidazole, or ivermectin for bumps
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Oral Medication</h3>
                <p className="text-cream text-sm">
                  Low-dose doxycycline for inflammatory control
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Laser & Light Therapy
                </h3>
                <p className="text-cream text-sm">
                  IPL or vascular lasers for persistent redness
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Laser Treatments Section with Image */}
        <section className="py-20 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl font-serif text-brown mb-6">
                  Laser and Light Treatments for Rosacea
                </h2>
                <p className="text-taupe mb-6">
                  If your main problem is long-lasting redness or visible blood
                  vessels, skincare alone often feels too slow. This is where
                  laser and IPL can help.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-cream rounded-xl">
                    <h3 className="font-semibold text-brown mb-2">
                      IPL (Intense Pulsed Light)
                    </h3>
                    <p className="text-taupe text-sm">
                      Targets redness and broken capillaries. From RM688 per
                      session.
                    </p>
                  </div>
                  <div className="p-4 bg-cream rounded-xl">
                    <h3 className="font-semibold text-brown mb-2">
                      Vascular Lasers
                    </h3>
                    <p className="text-taupe text-sm">
                      Target blood vessels directly. 3-5 sessions for gradual
                      improvement.
                    </p>
                  </div>
                  <div className="p-4 bg-cream rounded-xl">
                    <h3 className="font-semibold text-brown mb-2">
                      Combination Plans
                    </h3>
                    <p className="text-taupe text-sm">
                      Medication first, then laser to clean up persistent
                      redness.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/api/placeholder/500/600"
                  alt="Laser treatment for rosacea at Nexus Clinic"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <p className="text-wine font-semibold">Gentle, effective</p>
                  <p className="text-taupe text-sm">Minimal downtime</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Cost Section */}
        <section className="py-16 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif text-brown mb-8 text-center"
            >
              Cost of Rosacea Treatment in Malaysia
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <p className="text-taupe mb-2">Starting from</p>
                <p className="text-3xl font-serif text-wine mb-4">RM189</p>
                <p className="text-brown">Initial consultation & treatment</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <p className="text-taupe mb-2">IPL sessions from</p>
                <p className="text-3xl font-serif text-wine mb-4">RM499</p>
                <p className="text-brown">Per session, varies by clinic</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <p className="text-taupe mb-2">M22 IPL</p>
                <p className="text-3xl font-serif text-wine mb-4">RM688</p>
                <p className="text-brown">Per session at select KL clinics</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-linear-to-r from-wine to-rose text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif mb-6">
              Start Your Rosacea Treatment Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 text-white/90"
            >
              If you're searching for rosacea treatment in Kuala Lumpur or
              facial redness treatment in Malaysia, start with a plan that calms
              your skin first and targets the right trigger second.
            </motion.p>
            <motion.div variants={scaleIn}>
              <button className="bg-white text-wine px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2">
                Book Your Consultation <Calendar className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center justify-center gap-4 text-white/80"
            >
              <Phone className="w-5 h-5" />
              <span>016-7025699 / 03-21635699</span>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RosaceaLanding;
