import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Scale,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Star,
  ArrowRight,
  Quote,
  Zap,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  containerVariants,
  rowVariants,
} from "../lib/animations";
import BeforeAfterSection from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-4">
      {children}
    </h2>
    {subtitle && (
      <p className="text-taupe font-inter text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={fadeInUp}
    className={`bg-glass backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-brown via-wine to-rose">
    {/* Decorative Elements */}
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="absolute top-20 left-10 w-64 h-64 bg-cream/10 rounded-full blur-3xl"
    />
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="absolute bottom-20 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl"
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-cream/90 font-inter text-sm">
            <Sparkles className="w-4 h-4" />
            Trusted by 10,000+ Patients in Malaysia
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-georgia text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-6"
        >
          Transform Your Life with{" "}
          <span className="text-taupe italic">Duromine</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-inter text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Clinically proven weight loss treatment available in KL, JB & Penang.
          Begin your journey to a healthier, more confident you.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group bg-cream text-brown px-8 py-4 rounded-full font-inter font-medium text-lg hover:bg-light transition-all duration-300 flex items-center justify-center gap-2">
            Book Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-cream/50 text-cream px-8 py-4 rounded-full font-inter font-medium text-lg hover:bg-cream/10 transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "5-10kg", label: "Average Loss" },
            { value: "6-12", label: "Weeks Program" },
            { value: "95%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-georgia text-2xl md:text-3xl text-cream mb-1">
                {stat.value}
              </div>
              <div className="font-inter text-sm text-cream/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom Wave */}
    <div className="absolute bottom-0 left-0 right-0 2xl:-mb-0.5">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="#F3EFEE"
        />
      </svg>
    </div>
  </section>
);

const WhatIsDuromineSection = () => (
  <section className="py-20 md:py-32 bg-cream">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <motion.div variants={fadeInLeft}>
          <span className="inline-block bg-wine/10 text-wine px-4 py-1 rounded-full font-inter text-sm mb-6">
            Understanding Duromine
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6 leading-tight">
            What is <span className="text-wine italic">Duromine?</span>
          </h2>
          <p className="font-inter text-taupe text-lg leading-relaxed mb-8">
            Duromine is a prescription-only weight loss medication containing
            phentermine, a stimulant that works as an appetite suppressant. It
            is primarily used for short-term obesity management under medical
            supervision.
          </p>
          <div className="space-y-4">
            {[
              "Reduces hunger and cravings effectively",
              "Available in 15mg, 30mg, and 40mg capsules",
              "Taken once daily in the morning",
              "Visible results in 4-12 weeks",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                </div>
                <span className="font-inter text-brown">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInRight} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/duromine-mly.png"
              alt="Duromine Treatment"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent" />
          </div>
          {/* Floating Card */}
          <motion.div
            variants={scaleIn}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-wine" />
              </div>
              <div>
                <p className="font-georgia text-brown text-lg">KKM Approved</p>
                <p className="font-inter text-taupe text-sm">
                  Safe & Regulated
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const WhoIsItForSection = () => (
  <section className="py-20 md:py-32 bg-cream">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Scale,
                title: "BMI Over 30",
                desc: "Clinically obese individuals",
              },
              {
                icon: Heart,
                title: "Health Risks",
                desc: "Diabetes, hypertension concerns",
              },
              {
                icon: Target,
                title: "Stubborn Fat",
                desc: "Diet & exercise not enough",
              },
              {
                icon: Zap,
                title: "Quick Start",
                desc: "Need rapid initial results",
              },
            ].map((item, index) => (
              <GlassCard key={index} className="bg-white/80">
                <item.icon className="w-8 h-8 text-wine mb-4" />
                <h4 className="font-georgia text-lg text-brown mb-2">
                  {item.title}
                </h4>
                <p className="font-inter text-sm text-taupe">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInRight} className="order-1 lg:order-2">
          <span className="inline-block bg-wine/10 text-wine px-4 py-1 rounded-full font-inter text-sm mb-6">
            Ideal Candidates
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6 leading-tight">
            Is Duromine <span className="text-wine italic">Right for You?</span>
          </h2>
          <p className="font-inter text-taupe text-lg leading-relaxed mb-8">
            If you've been struggling to lose weight despite diet and exercise,
            Duromine may be a clinically viable option. Our doctors will assess
            your eligibility during consultation.
          </p>
          <button className="group bg-wine text-cream px-8 py-4 rounded-full font-inter font-medium hover:bg-brown transition-all duration-300 flex items-center gap-2">
            Free Eligibility Check
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-20 md:py-32 bg-brown/80 text-cream">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Understanding your options for weight management">
        <span className="text-cream">
          Duromine vs <span className="text-rose italic">Ozempic</span>
        </span>
      </SectionTitle>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-center font-inter">
            <div className="p-6 bg-wine/20">
              <span>Feature</span>
            </div>
            <div className="p-6 bg-wine/30">
              <span className="font-georgia text-xl">Duromine</span>
            </div>
            <div className="p-6 bg-wine/20">
              <span className="font-georgia text-xl">Ozempic</span>
            </div>
          </div>

          {[
            {
              feature: "Type",
              duromine: "Appetite Suppressant",
              ozempic: "GLP-1 Agonist",
            },
            {
              feature: "Onset",
              duromine: "Fast (days)",
              ozempic: "Gradual (weeks)",
            },
            { feature: "Form", duromine: "Oral Capsule", ozempic: "Injection" },
            {
              feature: "Duration",
              duromine: "Short-term",
              ozempic: "Long-term",
            },
            {
              feature: "Price",
              duromine: "More Affordable",
              ozempic: "Higher",
            },
          ].map((row, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`grid grid-cols-3 text-center font-inter ${index % 2 === 0 ? "bg-white/5" : ""}`}
            >
              <div className="p-4 text-cream/70">{row.feature}</div>
              <div className="p-4 text-cream font-medium">{row.duromine}</div>
              <div className="p-4 text-cream/70">{row.ozempic}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-center text-cream/60 font-inter mt-8"
        >
          Our doctors will help you choose the right treatment based on your
          goals and medical history.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-20 md:py-32 bg-light">
    <div className="container mx-auto px-4">
      <SectionTitle subtitle="Experience transformative results with proper medical guidance">
        Benefits of <span className="text-wine italic">Duromine</span>
      </SectionTitle>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          {
            icon: TrendingDown,
            title: "Reduced Hunger",
            desc: "Significantly suppresses appetite and food cravings throughout the day",
          },
          {
            icon: Zap,
            title: "Increased Energy",
            desc: "Feel more energetic and motivated to maintain an active lifestyle",
          },
          {
            icon: Scale,
            title: "Visible Results",
            desc: "See noticeable weight reduction in just 4-12 weeks of treatment",
          },
          {
            icon: Target,
            title: "Improved BMI",
            desc: "Achieve healthier BMI and reduced waist circumference measurements",
          },
          {
            icon: Heart,
            title: "Health Benefits",
            desc: "Lower risk of obesity-related conditions like diabetes and hypertension",
          },
          {
            icon: Star,
            title: "Confidence Boost",
            desc: "Enhanced self-confidence and motivation to achieve your goals",
          },
        ].map((benefit, index) => (
          <motion.div key={index} variants={fadeInUp} className="group">
            <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-taupe/10 group-hover:border-wine/20">
              <div className="w-14 h-14 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-wine" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                {benefit.title}
              </h3>
              <p className="font-inter text-taupe leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const DosageComparison = () => {
  const dosages = [
    {
      dosage: "15mg",
      useCase: "Beginners",
      notes: "Mild effects, fewer side effects",
      level: "low",
    },
    {
      dosage: "30mg",
      useCase: "Most common",
      notes: "Balanced results and tolerance",
      level: "mid",
    },
    {
      dosage: "40mg",
      useCase: "Advanced cases",
      notes: "Strongest dose, requires close monitoring",
      level: "high",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-taupe/20 border-l-taupe";
      case "mid":
        return "bg-rose/20 border-l-rose";
      case "high":
        return "bg-wine/20 border-l-wine";
      default:
        return "bg-cream";
    }
  };

  return (
    <section className="py-12 px-4 bg-cream">
      <SectionTitle subtitle="Your doctor will recommend the optimal dosage based on your needs">
        Available <span className="text-wine italic">Dosages</span>
      </SectionTitle>
      <div className="max-w-4xl mx-auto">
        {/* Desktop Table */}
        <motion.div
          className="hidden md:block overflow-hidden rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-wine text-light">
                <th className="px-6 py-4 text-left font-inter font-semibold">
                  Dosage
                </th>
                <th className="px-6 py-4 text-left font-inter font-semibold">
                  Use Case
                </th>
                <th className="px-6 py-4 text-left font-inter font-semibold">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {dosages.map((item, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className={`
                  ${index % 2 === 0 ? "bg-cream" : "bg-light"}
                  hover:bg-taupe/20 transition-colors duration-200
                  border-b border-taupe/20
                `}
                >
                  <td className="px-6 py-4 font-inter font-bold text-wine">
                    {item.dosage}
                  </td>
                  <td className="px-6 py-4 font-inter font-medium text-brown">
                    {item.useCase}
                  </td>
                  <td className="px-6 py-4 font-inter text-brown/80">
                    {item.notes}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          className="md:hidden space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {dosages.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className={`rounded-lg p-4 shadow-md border-l-4 ${getLevelColor(item.level)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-inter font-bold text-wine text-xl">
                  {item.dosage}
                </span>
                <span className="font-inter text-sm font-medium text-rose bg-rose/10 px-3 py-1 rounded-full">
                  {item.useCase}
                </span>
              </div>
              <p className="font-inter text-brown/80 text-sm">{item.notes}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SafetySection = () => (
  <section className="py-20 md:py-32 bg-light">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12"
      >
        {/* Side Effects */}
        <motion.div variants={fadeInLeft}>
          <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-rose" />
            Possible Side Effects
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-inter font-medium text-brown mb-3">
                  Common
                </h4>
                <ul className="space-y-2 font-inter text-taupe">
                  {["Dry mouth", "Insomnia", "Irritability", "Dizziness"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-taupe rounded-full" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-inter font-medium text-brown mb-3">
                  Rare (Serious)
                </h4>
                <ul className="space-y-2 font-inter text-taupe">
                  {[
                    "Heart palpitations",
                    "High blood pressure",
                    "Chest pain",
                    "Shortness of breath",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-wine rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-taupe font-inter border-t border-taupe/10 pt-4">
              Always consult your doctor if side effects persist or worsen.
            </p>
          </div>
        </motion.div>

        {/* Contraindications */}
        <motion.div variants={fadeInRight}>
          <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-wine" />
            Who Should Avoid Duromine
          </h3>
          <div className="bg-wine/5 rounded-2xl p-8 border border-wine/10">
            <ul className="space-y-4">
              {[
                "Heart disease or severe hypertension",
                "Hyperthyroidism or glaucoma",
                "History of drug or alcohol abuse",
                "Pregnant or breastfeeding women",
                "On certain antidepressants (MAOIs)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-inter text-brown"
                >
                  <span className="w-6 h-6 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-wine text-sm">✕</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-20 md:py-32 bg-linear-to-br from-wine to-brown text-cream overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Doctor Quote */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <Quote className="w-16 h-16 text-cream/20 mx-auto mb-6" />
          <blockquote className="font-georgia text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 italic">
            "Duromine isn't just about fast weight loss—it's about reclaiming
            your energy and confidence. With the right plan, our patients see
            meaningful changes in just weeks."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-cream/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-cream" />
            </div>
            <div className="text-left">
              <p className="font-inter font-medium text-cream">
                Dr. Farah Iskandar
              </p>
              <p className="font-inter text-sm text-cream/60">
                Weight Loss Specialist, Nexus Clinic KL
              </p>
            </div>
          </div>
        </motion.div>

        {/* Patient Testimonial */}
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-rose fill-rose" />
            ))}
          </div>
          <p className="font-inter text-lg md:text-xl text-cream/90 leading-relaxed mb-6">
            "After trying so many diets, Duromine gave me real momentum. I lost
            9kg in 6 weeks and felt amazing. The support from Nexus Clinic made
            all the difference."
          </p>
          <p className="font-inter text-cream/60">— Aira, 32, Kuala Lumpur</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-20 md:py-32 bg-light">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-block bg-wine/10 text-wine px-4 py-1 rounded-full font-inter text-sm mb-6">
            Transparent Pricing
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6">
            Investment in <span className="text-wine italic">Your Health</span>
          </h2>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="bg-white rounded-3xl p-10 shadow-xl border border-taupe/10"
        >
          <div className="font-georgia text-6xl md:text-7xl text-wine mb-2">
            RM 1,134
          </div>
          <p className="font-inter text-taupe mb-6">
            Duromine 30mg Program (No Trial Price)
          </p>
          <div className="space-y-3 mb-8">
            {[
              "Doctor Consultation",
              "Medical Assessment",
              "Full Course Supply",
              "Progress Monitoring",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 font-inter text-brown"
              >
                <CheckCircle2 className="w-5 h-5 text-wine" />
                {item}
              </div>
            ))}
          </div>
          <button className="w-full bg-wine text-cream py-4 rounded-full font-inter font-medium text-lg hover:bg-brown transition-colors">
            Get Started Today
          </button>
          <p className="font-inter text-sm text-taupe mt-4">
            Available at Kuala Lumpur, Johor Bahru & Penang
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const faqs = [
  {
    q: "Is Duromine still used for weight loss?",
    a: "Yes, Duromine is commonly prescribed for short-term weight loss under a doctor's care in Malaysia.",
  },
  {
    q: "How much weight can I lose on Duromine 30mg?",
    a: "Many patients report losing 5-10kg over 6-12 weeks when combined with diet and exercise.",
  },
  {
    q: "How long can you stay on Duromine?",
    a: "Generally, 12 weeks. Extended use is case-by-case and must be monitored by your doctor.",
  },
  {
    q: "Why is Duromine a controlled drug?",
    a: "Because it contains phentermine, which has a potential for dependency. Hence, it's only available with a doctor's prescription.",
  },
  {
    q: "How to take Duromine correctly?",
    a: "One capsule in the morning with water, before breakfast. Avoid caffeine and stimulants.",
  },
];

const PageDuromineMalaysia = () => {
  return (
    <>
      <Navbar />
      <main className="font-inter antialiased bg-cream overflow-x-hidden">
        <HeroSection />
        <WhatIsDuromineSection />
        <BeforeAfterSection />
        <WhoIsItForSection />
        <ComparisonSection />
        <BenefitsSection />
        <DosageComparison />
        <SafetySection />
        <TestimonialSection />
        <PricingSection />
        <FAQ data={faqs} />
      </main>
      <Footer />
    </>
  );
};

export default PageDuromineMalaysia;
