import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  ChevronRight,
  Star,
  Calendar,
  Award,
  CheckCircle2,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const StretchMarkLanding = () => {
  const faqs = [
    {
      q: "Can stretch marks be removed completely?",
      a: "Stretch marks often fade, but they may not disappear completely. Treatment usually improves appearance and texture rather than fully erasing them. (mayoclinic.org)",
    },
    {
      q: "What is the best treatment for stretch marks in Malaysia?",
      a: "The best treatment depends on your stretch mark type, age, and location. Nexus Clinic offers Fractional CO2 Laser, Carboxytherapy, and Dermaroller - each suited for different cases.",
    },
    {
      q: "Is laser better than microneedling for stretch marks?",
      a: "Laser can be stronger for older white marks and texture, while microneedling is a lower-downtime collagen option. Many people do best when treatments are combined or planned in stages. (pmc.ncbi.nlm.nih.gov)",
    },
    {
      q: "How many sessions do I need to remove stretch marks?",
      a: "Most people need multiple sessions, especially for older marks. Your exact number depends on mark age, depth, and the treatment type used.",
    },
    {
      q: "Is stretch mark removal safe for darker skin in Malaysia?",
      a: "Yes, but settings must be chosen carefully because pigment change risk can be higher in medium to deeper skin tones. A good clinic plans conservatively and prioritises aftercare.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bg-light font-[--font-inter] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-wine filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-[--font-georgia] text-5xl lg:text-6xl text-brown leading-tight"
                >
                  Stretch marks are common.
                  <span className="block text-wine mt-2">
                    Feeling uncomfortable about them is common too.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed"
                >
                  Let's fade them safely. Whether your stretch marks came from
                  pregnancy, weight change, or gym gains, you deserve options
                  that actually make sense. At Nexus Clinic Kuala Lumpur, we
                  focus on realistic improvement, better texture, and a plan
                  that suits your skin tone.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Book Consultation
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-white transition-all duration-300">
                    View Treatments
                  </button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-4 pt-8"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brown">LG 10</div>
                    <div className="text-xs text-taupe">Wisma UOA II</div>
                  </div>
                  <div className="text-center border-x border-taupe/20">
                    <div className="text-2xl font-bold text-brown">
                      016-7025699
                    </div>
                    <div className="text-xs text-taupe">24/7 Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brown">
                      03-21635699
                    </div>
                    <div className="text-xs text-taupe">Clinic Line</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-4/4 shadow-2xl">
                  <img
                    src="/images/clinic/interior.png"
                    alt="Nexus Clinic KL - Professional stretch mark treatment"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-glass backdrop-blur-md p-4 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-brown">
                        Fractional CO2 Laser
                      </div>
                      <div className="text-sm text-taupe">
                        Carboxytherapy • Dermaroller
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What Are Stretch Marks */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  What Are Stretch Marks?
                </h2>
                <p className="text-lg text-taupe mb-8 leading-relaxed">
                  Stretch marks (also called striae) are lines that form when
                  skin stretches or shrinks quickly. This rapid change can cause
                  the deeper layer of skin to tear and heal in a different way.
                  That is why stretch marks are a type of scar. (mayoclinic.org)
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "stomach and waist",
                    "thighs and hips",
                    "buttocks",
                    "breasts",
                    "upper arms",
                    "lower back",
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-center gap-2 text-brown"
                    >
                      <div className="w-2 h-2 rounded-full bg-wine"></div>
                      <span>{area}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-cream rounded-2xl">
                  <p className="text-taupe italic">
                    "Stretch marks are not harmful. They are not dangerous. Many
                    people simply do not like how they look. Mayo Clinic notes
                    they often fade over time, but they may never disappear
                    completely." (mayoclinic.org)
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/images/clinic/stretchMark.png"
                  alt="Understanding stretch marks - medical illustration"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-wine text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    <div>
                      <div className="font-semibold">Safe & Effective</div>
                      <div className="text-sm opacity-90">
                        FDA Approved Methods
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* New vs Old Stretch Marks */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-4">
                New Stretch Marks vs Old Stretch Marks
              </h2>
              <p className="text-lg text-taupe">
                This is one of the most important things to understand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">🔴</span>
                </div>
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-4">
                  New stretch marks (red or purple)
                </h3>
                <p className="text-taupe mb-4">
                  These are often called striae rubra. They are newer and may
                  respond faster to treatment because the skin is still actively
                  changing.
                </p>
                <div className="flex items-center gap-2 text-wine">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Better response to treatment</span>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">⚪</span>
                </div>
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-4">
                  Old stretch marks (white or silvery)
                </h3>
                <p className="text-taupe mb-4">
                  These are often called striae alba. They are older and usually
                  need more sessions because the scar is more established.
                </p>
                <div className="flex items-center gap-2 text-wine">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Requires more sessions</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <p className="text-brown font-medium">
                Your treatment plan depends on which type you have, and where
                they are on your body.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Stretch Marks Happen */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="relative">
                <img
                  src="/images/clinic/stretch-mark-causus.png"
                  alt="Common causes of stretch marks"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  Why Stretch Marks Happen
                </h2>
                <div className="space-y-4">
                  {[
                    "Pregnancy (especially in later months)",
                    "Weight gain or weight loss",
                    "Puberty growth spurts",
                    "Rapid muscle growth (gym and bodybuilding)",
                    "Family tendency (some skin types scar more easily)",
                  ].map((cause, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{cause}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-taupe italic"
                >
                  If your skin makes stretch marks easily, it does not mean you
                  did something wrong. It means your skin heals in a certain
                  way.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatments Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-4">
                Stretch Mark Treatments in Malaysia
              </h2>
              <p className="text-lg text-taupe max-w-2xl mx-auto">
                At Nexus Clinic Kuala Lumpur, the stretch mark service
                highlights three practical solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Dermaroller */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group"
              >
                <div className="h-48 bg-linear-to-br from-rose to-wine relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-[--font-georgia]">
                      Dermaroller
                    </h3>
                    <p className="text-sm opacity-90">& Microneedling</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-taupe mb-4">
                    Microneedling creates tiny controlled micro-injuries in the
                    skin. As the skin heals, it produces collagen and elastin
                    that can improve texture and scars.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Best for early to mid-stage stretch marks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Low downtime</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Fractional CO2 Laser */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group"
              >
                <div className="h-48 bg-linear-to-br from-brown to-wine relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-[--font-georgia]">
                      Fractional CO2
                    </h3>
                    <p className="text-sm opacity-90">Laser Treatment</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-taupe mb-4">
                    Creates tiny columns of controlled "micro-treatment zones"
                    in the skin, encouraging new collagen and resurfacing over
                    time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Best for older white stretch marks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Stronger remodeling</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Carboxytherapy */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group"
              >
                <div className="h-48 bg-linear-to-br from-taupe to-rose relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-[--font-georgia]">
                      Carboxytherapy
                    </h3>
                    <p className="text-sm opacity-90">CO2 Delivery</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-taupe mb-4">
                    Uses controlled medical CO2 delivery to support circulation
                    and collagen stimulation for concerns like stretch marks and
                    skin laxity.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Mild to moderate stretch marks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-wine" />
                      <span>Great as "add-on" treatment</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Treatments */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-[--font-georgia] text-xl text-brown mb-3">
                  Topical Retinoids for New Stretch Marks
                </h4>
                <p className="text-taupe">
                  If your stretch marks are new (less than a few months),
                  topical tretinoin may improve appearance in some cases by
                  supporting collagen rebuilding. (mayoclinic.org)
                </p>
                <p className="text-sm text-wine mt-3">
                  Important: Not used in pregnancy
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-[--font-georgia] text-xl text-brown mb-3">
                  Combination Treatment
                </h4>
                <p className="text-taupe">
                  Many dermatology discussions note that combining treatments
                  can improve outcomes for stretch marks. Stretch marks often
                  respond best to a layered plan, not a single one-off session.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Common Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-4">
                Areas We Commonly Treat
              </h2>
              <p className="text-lg text-taupe">
                Stretch mark removal in Kuala Lumpur is most commonly requested
                for
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "abdomen and waist",
                "thighs (inner and outer)",
                "hips",
                "buttocks",
                "breasts",
                "upper arms",
                "back and shoulders",
              ].map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-square rounded-2xl bg-linear-to-br from-cream to-taupe/20 p-6 flex items-center justify-center text-center group-hover:from-wine group-hover:to-rose transition-all duration-500">
                    <span className="text-brown group-hover:text-white transition-colors font-medium">
                      {area}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-taupe"
            >
              Your plan can be full-area or targeted. Many people start with one
              area, see improvement, then move to the next.
            </motion.p>
          </div>
        </motion.section>

        {/* Consultation Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-4">
                What to Expect at Your Stretch Mark Consultation
              </h2>
              <p className="text-lg text-taupe">
                A good consult should feel simple and respectful
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "Step 1",
                  title: "We assess your stretch marks",
                  items: [
                    "new vs old",
                    "depth and texture",
                    "skin tone and sensitivity",
                    "area size and healing",
                  ],
                },
                {
                  step: "Step 2",
                  title: "We choose your best-fit treatment",
                  items: [
                    "Fractional CO2 Laser",
                    "Carboxytherapy",
                    "Dermaroller",
                    "Based on your needs",
                  ],
                },
                {
                  step: "Step 3",
                  title: "You get a clear plan",
                  items: [
                    "Number of sessions",
                    "Realistic results",
                    "Aftercare rules",
                    "Prevention tips",
                  ],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-wine text-white flex items-center justify-center font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-[--font-georgia] text-xl text-brown mb-4">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-taupe"
                      >
                        <ChevronRight className="w-4 h-4 text-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-white"
            >
              <h2 className="font-[--font-georgia] text-4xl mb-6">
                Start with a plan that's honest, safe, and built for your skin
              </h2>
              <p className="text-lg mb-8 opacity-90">
                If you're searching for stretch mark removal in Malaysia or
                stretch marks treatment in Kuala Lumpur
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-5 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Book Your Consultation Today
              </motion.button>
              <div className="mt-8 text-sm opacity-75">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default StretchMarkLanding;
