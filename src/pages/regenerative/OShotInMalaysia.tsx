import { motion } from "framer-motion";
import {
  Droplets,
  Heart,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Zap,
  FileText,
  Info,
  CheckCircle2,
  XCircle,
  Star,
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

const OShotLanding = () => {
  const images = {
    hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    procedure:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    consultation:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    wellness:
      "https://images.unsplash.com/photo-1519823551278-64ac92734ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
  };

  const benefits = [
    {
      title: "Better comfort and less dryness",
      icon: Droplets,
      color: "text-rose-600",
    },
    {
      title: "Improved sensation or arousal response",
      icon: Zap,
      color: "text-wine",
    },
    {
      title: "More confidence during intimacy",
      icon: Heart,
      color: "text-rose-500",
    },
    {
      title: "Possible improvement in mild leakage",
      icon: Shield,
      color: "text-taupe",
    },
  ];

  const considerations = [
    "Vaginal dryness or discomfort",
    "Reduced sensation or difficulty reaching orgasm",
    "Pain during intercourse (dyspareunia)",
    "Mild urinary leakage (stress urinary incontinence)",
  ];

  const contraindications = [
    "Pregnancy or immediate post-delivery complications",
    "Active vaginal/urinary infection or unexplained bleeding",
    "Bleeding disorders or certain blood-thinning medications",
    "Significant pelvic pain with unclear cause",
  ];

  const comparisonData = [
    {
      title: "vs Lubricants and moisturisers",
      desc: "If the main issue is dryness during sex, you might improve with the right products and simple medical guidance. These are often the first step.",
    },
    {
      title: "vs Vaginal oestrogen",
      desc: "For menopause-related dryness, many women benefit from local oestrogen options. O-Shot is not a replacement but may be discussed if you want additional support.",
    },
    {
      title: "vs Laser vaginal rejuvenation",
      desc: "Laser treatments work via controlled thermal energy and collagen rebuilding, typically over multiple sessions.",
    },
    {
      title: "vs Radiofrequency (ThermiVa)",
      desc: "Nexus Clinic describes ThermiVa as a non-invasive RF approach and mentions combining O-Shot with ThermiVa as a 'powerful duo'.",
    },
  ];

  const timeline = [
    { period: "Week 1", description: "recovery and settling" },
    {
      period: "Weeks 2 to 6",
      description: "early changes in comfort or sensation for some women",
    },
    {
      period: "Months 2 to 6",
      description: "clearer pattern (either improvement or not)",
    },
  ];

  const faqs = [
    {
      q: "Is O-Shot painful?",
      a: "Most providers use numbing cream or local anaesthetic for comfort, though some mild discomfort may occur.",
    },
    {
      q: "How long does O-Shot last?",
      a: "There is no fixed duration. Many studies assess outcomes between 1 and 6 months.",
    },
    {
      q: "How many sessions do I need?",
      a: "It depends on your concern. Research describes monthly injections for 3 months as a common protocol.",
    },
    {
      q: "Can O-Shot help with urinary incontinence?",
      a: "PRP injections have been studied for female stress urinary incontinence, with some trials reporting symptom improvement.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream font-inter">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={images.hero}
              alt="Nexus Clinic KL"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-linear-to-r from-cream via-cream/90 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20 mb-6"
              >
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-brown text-sm font-medium">
                  Women's Wellness at Nexus Clinic Kuala Lumpur
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-georgia text-brown mb-6 leading-tight"
              >
                Feeling dry, less sensitive,
                <span className="text-wine block">
                  or "not the same" down there?
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-taupe mb-8 max-w-2xl"
              >
                You are not alone, and you have options. Intimacy can change
                after childbirth, during menopause, or simply with time and
                stress.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <button className="bg-wine text-light px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 flex items-center gap-2 group">
                  Schedule Private Consult
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-wine/30 text-brown px-8 py-4 rounded-full font-medium hover:border-wine hover:bg-white/50 transition-all">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center gap-6 text-sm text-brown"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-wine" />
                  <span>Medical-first screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-wine" />
                  <span>PRP from your own blood</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What is O-Shot Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-light"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium tracking-wider text-sm uppercase mb-4 block">
                  Understanding
                </span>
                <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                  What Is the O-Shot?
                </h2>
                <p className="text-lg text-taupe mb-6 leading-relaxed">
                  The O-Shot (often called the Orgasm Shot) is a procedure that
                  uses platelet-rich plasma (PRP) made from your own blood. PRP
                  is prepared by drawing blood, spinning it (centrifuge), and
                  separating the platelet-rich layer. Then PRP is injected into
                  specific intimate areas to support tissue healing signals and
                  blood flow.
                </p>
                <p className="text-lg text-taupe mb-8 leading-relaxed">
                  In Malaysia, many clinics position O-Shot as part of female
                  intimate wellness for concerns like vaginal dryness, reduced
                  sensation, orgasm difficulty, and sometimes mild urinary
                  leakage.
                </p>

                <div className="bg-cream p-6 rounded-2xl border border-taupe/10">
                  <h3 className="font-georgia text-brown text-xl mb-4">
                    Nexus Clinic Kuala Lumpur
                  </h3>
                  <p className="text-taupe mb-2">
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur
                  </p>
                  <p className="text-wine font-medium">
                    016-7025699 / 03-21635699
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={images.procedure}
                    alt="O-Shot Procedure"
                    className="w-full bg-cover aspect-4/4"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-rose/10 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* The Truth Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                The Most Important Truth Before You Book
              </h2>
              <p className="text-xl text-taupe">
                Does O-Shot "work"? Evidence is mixed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
              >
                <FileText className="w-12 h-12 text-wine mb-4" />
                <h3 className="text-2xl font-georgia text-brown mb-4">
                  What Studies Show
                </h3>
                <p className="text-taupe mb-4">
                  Some studies show improvements in sexual function and stress
                  urinary incontinence symptoms, but reviews also stress
                  limitations like small sample sizes and inconsistent PRP
                  protocols.
                </p>
                <p className="text-sm text-rose italic">
                  A 2023 systematic review concluded PRP might improve female
                  sexual dysfunction (FSD) and female stress urinary
                  incontinence (SUI), but strong conclusions are difficult due
                  to clinical heterogeneity.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10"
              >
                <Info className="w-12 h-12 text-rose mb-4" />
                <h3 className="text-2xl font-georgia text-brown mb-4">
                  The Honest Promise
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                    <p className="text-taupe">Some women feel better</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                    <p className="text-taupe">Some feel little change</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-brown mt-1 shrink-0" />
                    <p className="text-taupe">
                      The right screening and expectation-setting matter as much
                      as the injection
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who Considers Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-light"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-8">
                  Who Typically Considers O-Shot in Kuala Lumpur?
                </h2>

                <div className="space-y-6">
                  {considerations.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      custom={index}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-wine/20 transition-colors">
                        <span className="text-wine font-medium">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-lg text-brown">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-cream p-8 rounded-2xl border border-taupe/10">
                  <h3 className="text-2xl font-georgia text-wine mb-6">
                    Who Should Avoid O-Shot
                  </h3>
                  <ul className="space-y-4">
                    {contraindications.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-rose mt-0.5 shrink-0" />
                        <span className="text-taupe">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-taupe italic border-t border-taupe/20 pt-4">
                    If your main concern is urinary leakage that is moderate to
                    severe, you may need pelvic floor therapy, medical
                    management, or specialist referral. O-Shot is not a
                    replacement for proper urogynaecology care.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center mb-16"
            >
              How O-Shot Works
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Private consult",
                  desc: "We start with your symptoms, timeline, and what your body has been through",
                },
                {
                  step: 2,
                  title: "PRP preparation",
                  desc: "Blood is drawn from your arm and processed to prepare PRP",
                },
                {
                  step: 3,
                  title: "Numbing and injection",
                  desc: "Most providers use numbing cream or local anaesthetic for comfort",
                },
                {
                  step: 4,
                  title: "Back to normal life",
                  desc: "Most women return to normal routines quickly",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  custom={index}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-taupe/10 h-full">
                    <div className="w-12 h-12 rounded-full bg-wine text-light flex items-center justify-center text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-georgia text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe text-sm">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-taupe/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Results Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-light"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                When Will You See Results?
              </h2>
              <p className="text-taupe">
                Results are not instant like a painkiller. Many studies measure
                outcomes at 1 month to 6 months.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  custom={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-taupe/10 text-center"
                >
                  <Clock className="w-10 h-10 text-wine mx-auto mb-4" />
                  <h3 className="text-xl font-georgia text-brown mb-2">
                    {item.period}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center mb-16"
            >
              Benefits and Considerations
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-georgia text-wine mb-6">
                  Potential Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <benefit.icon
                        className={`w-6 h-6 ${benefit.color} mt-0.5 shrink-0`}
                      />
                      <span className="text-brown">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h3 className="text-2xl font-georgia text-rose mb-6">
                  Downsides and Limitations
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                    <span className="text-taupe">
                      Results vary and may be subtle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                    <span className="text-taupe">
                      Evidence quality is still evolving
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                    <span className="text-taupe">
                      You may need more than one session
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                    <span className="text-taupe">Cost is out-of-pocket</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-light"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-brown text-center mb-16"
            >
              O-Shot vs Other Options in Malaysia
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-taupe/10"
                >
                  <h3 className="text-xl font-georgia text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Safety Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                  Safety and Side Effects
                </h2>
                <p className="text-lg text-taupe mb-6">
                  Because PRP comes from your own blood, allergy risk is
                  generally low. The main risks are from the injection process
                  itself.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-wine mt-1 shrink-0" />
                    <span className="text-brown">
                      Temporary swelling, bruising, tenderness
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-wine mt-1 shrink-0" />
                    <span className="text-brown">
                      Spotting or mild discomfort
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-wine mt-1 shrink-0" />
                    <span className="text-brown">
                      Infection risk (rare, but possible with any injection)
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-taupe italic">
                  Research reviews often report minimal serious adverse events,
                  but also emphasize the need for better quality trials and
                  consistent reporting.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src={images.wellness}
                  alt="Women's Wellness"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-light"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-georgia text-brown mb-6">
                O-Shot Cost in Malaysia
              </h2>
              <p className="text-xl text-taupe mb-8">
                Pricing varies by provider, what is included, and whether you're
                doing O-Shot alone or as part of a broader intimate wellness
                plan.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-taupe/10">
                <p className="text-3xl font-georgia text-wine mb-4">
                  RM 1,500 to RM 6,000
                </p>
                <p className="text-taupe mb-6">
                  Published Malaysia references commonly show this range
                  depending on needs and clinic positioning.
                </p>
                <div className="border-t border-taupe/20 pt-6">
                  <p className="text-sm text-taupe">
                    Best way to compare prices: Ask what's included (consult,
                    numbing, PRP prep method, follow-up), and ask how many
                    sessions they recommend for your goal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-wine"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia text-light mb-6"
            >
              Start Your Journey Today
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto"
            >
              If you're searching for O-Shot in Malaysia or O-Shot in Kuala
              Lumpur, start with a private consult and an honest plan that fits
              your body and your comfort.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-glass backdrop-blur-sm max-w-lg mx-auto p-6 rounded-2xl"
            >
              <p className="text-light font-medium mb-2">
                Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-cream/80 text-sm mb-1">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-light text-lg font-medium">
                016-7025699 / 03-21635699
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default OShotLanding;
