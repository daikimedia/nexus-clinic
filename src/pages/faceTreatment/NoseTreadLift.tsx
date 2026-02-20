import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Calendar,
  Droplets,
  Users,
  MapPin,
  Quote,
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

const NoseThreadLiftLanding = () => {
  const faqs = [
    {
      q: "What does a nose thread lift do?",
      a: "It enhances the nose bridge and tip using absorbable threads to improve contour without surgery.",
    },
    {
      q: "How long do results last?",
      a: "Many clinics state results usually last between 12 and 18 months, depending on thread type and individual factors.",
    },
    {
      q: "Is it painful?",
      a: "Discomfort is usually minimal because local anaesthesia is used.",
    },
    {
      q: "Can anyone get nose threads?",
      a: "Not always. Some noses cannot safely take many threads, and assessment is important to avoid complications.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Glass Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-wine/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="flex items-center gap-2 text-wine">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm tracking-wider uppercase">
                      Nexus Clinic Kuala Lumpur
                    </span>
                  </div>
                  <h1 className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl text-brown leading-tight">
                    Lift your nose shape
                    <span className="block text-wine">without surgery</span>
                  </h1>
                  <p className="text-xl text-taupe max-w-lg">
                    A higher bridge. A sharper tip. A cleaner side profile. Fast
                    treatment, low downtime, and natural-looking refinement.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-white transition-all duration-300">
                    View Gallery
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-4 pt-8"
                >
                  {[
                    { icon: Shield, text: "Doctor-led assessment" },
                    { icon: Users, text: "Asian nose expertise" },
                    { icon: MapPin, text: "Central KL location" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Price Range */}
                <motion.div
                  variants={scaleIn}
                  className="bg-light backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                >
                  <p className="text-taupe mb-2">Starting price guidance</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-wine">
                      RM 1,500
                    </span>
                    <span className="text-brown">-</span>
                    <span className="text-4xl font-bold text-wine">
                      RM 3,000
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
                    alt="Nose Thread Lift Result"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent" />

                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 bg-light/90 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-brown font-semibold">
                          Natural proportions
                        </p>
                        <p className="text-sm text-taupe">
                          Not "copy paste" results
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Nose Thread Lift */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  What is a
                  <span className="text-wine block">Nose Thread Lift?</span>
                </h2>
                <p className="text-lg text-taupe leading-relaxed">
                  A minimally invasive treatment that uses absorbable threads to
                  improve the look of your nose bridge and tip. The threads act
                  like a scaffold under the skin to support the new shape.
                </p>

                {/* Ideal For List */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-brown font-semibold text-lg">
                    Ideal for:
                  </h3>
                  {[
                    "A flatter bridge that looks low in photos",
                    "A tip that looks soft or slightly droopy",
                    "Mild asymmetry",
                    "A profile that needs sharper definition",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-wine/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                      </div>
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Clock className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">20-30 mins</h4>
                    <p className="text-sm text-taupe">Quick procedure</p>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Calendar className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">12-18 months</h4>
                    <p className="text-sm text-taupe">Results last</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Droplets className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">4-8 threads</h4>
                    <p className="text-sm text-taupe">Average per session</p>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Shield className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">PDO / PCL</h4>
                    <p className="text-sm text-taupe">Thread types</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Realistic Results Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                Realistic results,
                <span className="text-wine block">honest expectations</span>
              </h2>
              <p className="text-lg text-taupe">
                Be honest with yourself here. Nose threads are not magic, but
                they can create beautiful subtle improvements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* What it CAN do */}
              <motion.div
                variants={fadeInLeft}
                className="bg-light rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 bg-wine/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-2xl font-semibold text-brown mb-4">
                  Can do
                </h3>
                <ul className="space-y-4">
                  {[
                    "Create a more defined bridge line",
                    "Give a slightly higher bridge appearance",
                    "Help the tip look more lifted and projected",
                    "Improve contour in side photos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What it CANNOT do */}
              <motion.div
                variants={fadeInRight}
                className="bg-light rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 bg-rose/20 rounded-2xl flex items-center justify-center mb-6">
                  <XCircle className="w-8 h-8 text-rose" />
                </div>
                <h3 className="text-2xl font-semibold text-brown mb-4">
                  Cannot do
                </h3>
                <ul className="space-y-4">
                  {[
                    "Make a very wide nose become narrow",
                    "Reduce bone width",
                    "Fix major structural issues",
                    "Replace surgical rhinoplasty results",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                Your journey,
                <span className="text-wine block">day by day</span>
              </h2>
              <p className="text-lg text-taupe">
                What you see, and when you see it - a calm, real timeline from
                day 1 to day 14
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-wine via-rose to-taupe" />

              {[
                {
                  day: "Day 1",
                  title: "Immediate results",
                  description:
                    "Bridge looks sharper right away. Some swelling expected.",
                  icon: Sparkles,
                  align: "left",
                },
                {
                  day: "Days 3-7",
                  title: "Settling period",
                  description:
                    "Swelling is common. Mild bruising can happen. Most return to daily activities within 1-2 days.",
                  icon: Heart,
                  align: "right",
                },
                {
                  day: "Weeks 2-4",
                  title: "Final reveal",
                  description:
                    "The nose looks more settled. The result looks more 'yours'.",
                  icon: Star,
                  align: "left",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative mb-12 ${
                    item.align === "left"
                      ? "md:pr-12 md:text-right md:ml-0 md:mr-[50%]"
                      : "md:pl-12 md:ml-[50%]"
                  }`}
                >
                  <div
                    className={`bg-cream rounded-2xl p-6 shadow-lg ${
                      item.align === "left" ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        item.align === "left" ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-wine font-semibold">
                          {item.day}
                        </span>
                        <h3 className="text-xl font-semibold text-brown">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-taupe">{item.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-wine rounded-full border-4 border-light ${
                      item.align === "left"
                        ? "right-0 md:right-auto md:left-full"
                        : "left-0 md:right-full md:left-auto"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-wine relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brown rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                Ready for a natural-looking refinement?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-cream mb-10"
              >
                Book your doctor-led assessment at Nexus Clinic Kuala Lumpur.
                Let's create a plan that honors your unique facial proportions.
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="group bg-white text-wine px-10 py-5 rounded-full hover:bg-cream transition-all duration-300 flex items-center gap-2 shadow-xl text-lg font-semibold">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-wine transition-all duration-300 text-lg font-semibold">
                  View Pricing
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-2"
              >
                <Quote className="w-5 h-5 opacity-50" />
                <p className="text-sm opacity-80">
                  Because this is not a "trend treatment." It is a
                  face-balancing decision.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoseThreadLiftLanding;
