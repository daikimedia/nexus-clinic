import React from "react";
import { motion } from "framer-motion";
import {
  Syringe,
  Clock,
  Zap,
  ShieldCheck,
  ChevronDown,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  TrendingDown,
  Users,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  floatAnimation,
} from "../../lib/animations";
import BeforeAfterSection from "../../components/BeforeAfter";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const PageOzempicMalaysia = () => {
  const treatments = [
    {
      icon: Syringe,
      label: "Treated Area",
      value: "Stomach, thighs, or upper arms",
    },
    { icon: Clock, label: "Duration", value: "A few minutes" },
    { icon: Zap, label: "Frequency", value: "1 injection per day" },
    { icon: ShieldCheck, label: "Downtime", value: "Minimal" },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduces Hunger",
      description:
        "Suppresses appetite naturally, making it easier to resist cravings",
    },
    {
      icon: Heart,
      title: "Increases Fullness",
      description: "Feel satisfied longer, making healthy eating effortless",
    },
    {
      icon: Sparkles,
      title: "Sustainable Results",
      description:
        "Gradual weight loss without the risk of rebound weight gain",
    },
  ];

  const doctors = [
    { name: "Dr. Aris", specialty: "Metabolic Health Expert" },
    { name: "Dr. Preetha", specialty: "Holistic Wellness" },
    { name: "Dr. Ashvinia", specialty: "Evidence-Based Solutions" },
    { name: "Dr. Charmaine", specialty: "Aesthetic & Weight Management" },
  ];

  const testimonials = [
    {
      name: "Hana Aisya",
      text: "I lost 15 pounds very quickly. This is the best treatment for weight loss to see results within weeks!",
      rating: 5,
    },
    {
      name: "Liya Lee",
      text: "I lost 25 kg, which wouldn't have been possible without the GLP-1 injections. Quick and non-invasive!",
      rating: 5,
    },
    {
      name: "Nina Patel",
      text: "My overall experience was beyond expectations. The treatment was smooth and pain-free.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What is the best injection for weight loss?",
      a: "GLP-1 receptor agonist injections are among the most effective options, supporting significant weight reduction and long-term management.",
    },
    {
      q: "Are there any side effects?",
      a: "Side effects may include nausea, vomiting, diarrhea, and abdominal pain. Always consult your healthcare provider before beginning treatment.",
    },
    {
      q: "How long does it take to show results?",
      a: "It typically takes 4 to 6 weeks to begin noticing visible results from GLP-1 receptor agonist treatment.",
    },
    {
      q: "Who is not suitable for the treatment?",
      a: "GLP-1 receptor agonists are not recommended for children under 18, pregnant women, or individuals with eating disorders.",
    },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <Navbar />
      <div className="bg-light min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-cream to-transparent" />
            <motion.div
              animate={floatAnimation}
              className="absolute top-20 right-20 w-72 h-72 bg-rose/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, delay: 1 },
              }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-wine/5 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium">
                    <Sparkles className="w-4 h-4" />
                    Medical Weight Loss Solution
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-4xl sm:text-5xl lg:text-6xl text-brown leading-tight"
                >
                  Transform Your Life with{" "}
                  <span className="text-wine italic">Ozempic</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-taupe font-inter text-lg leading-relaxed max-w-xl"
                >
                  Experience clinically proven weight management at Nexus Clinic
                  Kuala Lumpur. Our GLP-1 Liraglutide treatment helps you
                  achieve sustainable weight loss without feeling deprived.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-wine text-white rounded-full font-inter font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/25 hover:bg-wine/90 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-glass backdrop-blur-sm border border-taupe/20 text-brown rounded-full font-inter font-medium inline-flex items-center gap-2 hover:bg-cream transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with Us
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 pt-4"
                >
                  <div className="flex -space-x-3">
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile1.png"
                        alt="p1"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile2.png"
                        alt="p2"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile3.png"
                        alt="p3"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile4.png"
                        alt="p4"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-wine">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-taupe text-sm font-inter">
                      500+ satisfied patients
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <motion.div
                    animate={floatAnimation}
                    className="w-full aspect-square bg-linear-to-br from-cream via-rose/20 to-wine/10 rounded-[3rem] overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                      alt="Weight Loss Treatment"
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                  </motion.div>

                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -left-8 top-1/4 bg-glass backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <p className="text-brown font-inter font-semibold">
                          -15kg
                        </p>
                        <p className="text-taupe text-sm">Average Result</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -right-4 bottom-1/4 bg-glass backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-rose" />
                      </div>
                      <div>
                        <p className="text-brown font-inter font-semibold">
                          FDA Approved
                        </p>
                        <p className="text-taupe text-sm">Safe & Effective</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-taupe" />
          </motion.div>
        </section>

        {/* Treatment Stats */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {treatments.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-light p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-georgia text-brown text-lg mb-1">
                    {item.label}
                  </h3>
                  <p className="text-taupe font-inter text-sm">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About GLP-1 */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="aspect-5/5 rounded-4xl overflow-hidden bg-linear-to-br from-rose/20 to-wine/20">
                    <img
                      src="/images/liraglutide.png"
                      alt="Medical Treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cream rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-wine/10 rounded-full -z-10" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-inter font-medium"
                >
                  About The Treatment
                </motion.span>

                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-3xl sm:text-4xl text-brown leading-tight"
                >
                  What is{" "}
                  <span className="text-wine italic">GLP-1 Liraglutide?</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-taupe font-inter leading-relaxed"
                >
                  Originally developed to manage diabetes, GLP-1 Liraglutide has
                  been proven highly effective for weight management. It mimics
                  a hormone that helps regulate appetite and satiety, making it
                  easier to lose weight without feeling deprived or constantly
                  hungry.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-cream/50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                        <benefit.icon className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h4 className="font-georgia text-brown text-lg">
                          {benefit.title}
                        </h4>
                        <p className="text-taupe font-inter text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-brown text-light relative overflow-hidden">
          <motion.div
            animate={floatAnimation}
            className="absolute top-0 right-0 w-96 h-96 bg-wine/20 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/30 text-rose rounded-full text-sm font-inter font-medium mb-4"
              >
                Our Process
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light"
              >
                How Treatment Works
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Expert assessment of your medical history, goals, and challenges to create a personalized plan.",
                },
                {
                  step: "02",
                  title: "Custom Treatment",
                  desc: "Daily GLP-1 injections combined with dietary and lifestyle recommendations tailored to you.",
                },
                {
                  step: "03",
                  title: "Ongoing Support",
                  desc: "Regular monitoring and adjustments to ensure optimal results throughout your journey.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute -top-4 -left-4 text-5xl z-10 font-georgia text-glass/50 font-bold">
                    {item.step}
                  </div>
                  <div className="relative bg-glass/10 backdrop-blur-sm p-8 rounded-2xl border border-light/10 h-full">
                    <h3 className="font-georgia text-2xl text-light mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe font-inter">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                What You Can <span className="text-wine italic">Expect</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: TrendingDown,
                  title: "Gradual Weight Loss",
                  desc: "Steady, long-lasting results without drastic lifestyle changes",
                },
                {
                  icon: Heart,
                  title: "Appetite Control",
                  desc: "Manage hunger and cravings effortlessly",
                },
                {
                  icon: Sparkles,
                  title: "Improved Health",
                  desc: "More energy and reduced weight-related health risks",
                },
                {
                  icon: ShieldCheck,
                  title: "Clinically Proven",
                  desc: "Safe and effective with medical supervision",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-cream p-8 rounded-2xl text-center group hover:bg-wine transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-wine/10 group-hover:bg-light/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                    <item.icon className="w-8 h-8 text-wine group-hover:text-light transition-colors" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown group-hover:text-light mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-taupe group-hover:text-light/80 font-inter text-sm transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-rose/10 text-rose rounded-full text-sm font-inter font-medium mb-4"
              >
                Our Experts
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                Meet Our <span className="text-wine italic">Doctors</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-square bg-linear-to-br from-rose/20 to-wine/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-wine/20 group-hover:bg-wine/40 transition-colors" />
                    <Users className="w-20 h-20 text-wine/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-georgia text-xl text-brown mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-taupe font-inter text-sm">
                      {doctor.specialty}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                Success Stories
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                Client <span className="text-wine italic">Reviews</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-2xl relative"
                >
                  <div className="absolute -top-3 -left-3 text-6xl text-wine/20 font-georgia">
                    "
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-wine fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-taupe font-inter mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                      <span className="text-wine font-georgia font-bold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <p className="font-georgia text-brown">
                      {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Before/After */}
        <BeforeAfterSection />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-inter font-medium mb-4"
              >
                Got Questions?
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown"
              >
                Frequently Asked{" "}
                <span className="text-wine italic">Questions</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-cream rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h3 className="font-georgia text-lg text-brown pr-8">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-wine" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-taupe font-inter">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-br from-wine to-brown relative overflow-hidden">
          <motion.div
            animate={floatAnimation}
            className="absolute top-0 left-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              ...floatAnimation,
              transition: { ...floatAnimation.transition, delay: 1.5 },
            }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-light/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light mb-6"
              >
                Ready to Start Your{" "}
                <span className="italic text-rose">Transformation?</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-light/80 font-inter text-lg mb-10"
              >
                Take the first step towards a healthier you. Book your
                consultation today and discover how GLP-1 treatment can help you
                achieve your weight loss goals.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-light text-wine rounded-full font-inter font-medium inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-light/50 text-light rounded-full font-inter font-medium inline-flex items-center justify-center gap-2 hover:bg-light/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-light/70 font-inter text-sm"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wisma UOA II, Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+60 16-702 5699</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PageOzempicMalaysia;
