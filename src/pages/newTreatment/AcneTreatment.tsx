import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import {
  ShieldCheck,
  MapPin,
  Stethoscope,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Star,
  Droplets,
  Zap,
  Heart,
  Activity,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const trustItems = [
  { icon: ShieldCheck, text: "MOH Registered & Compliant" },
  { icon: Stethoscope, text: "Doctor-Led Care" },
  { icon: MapPin, text: "KLCC — Wisma UOA II, Jalan Pinang" },
];

const acneTypes = [
  {
    number: "01",
    title: "Comedonal",
    subtitle: "Clogged Pores",
    desc: "Tiny bumps, blackheads, and texture that never feels smooth. Often worsened by heavy makeup or humid days.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Inflammatory",
    subtitle: "Red & Angry",
    desc: "Strong skin reactions with redness, swelling, and tenderness. Needs targeted anti-inflammatory care.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Hormonal",
    subtitle: "Cycle-Linked",
    desc: "Often shows around the jawline and chin in adults. Flares with stress, cycles, and sleep changes.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Body Acne",
    subtitle: "Back & Chest",
    desc: "Sweat, friction, tight clothing, and gym habits all contribute. Requires a lifestyle-aware plan.",
    icon: Heart,
  },
  {
    number: "05",
    title: "PIH & Marks",
    subtitle: "Post-Acne Scarring",
    desc: "Dark marks that linger long after breakouts. Early treatment prevents long-term pigmentation.",
    icon: Sparkles,
  },
];

const treatmentPhases = [
  {
    phase: "Phase 01",
    title: "Calm the Acne",
    desc: "Reduce inflammation, stop new breakouts, and simplify your routine to what actually works.",
    duration: "Weeks 1–4",
  },
  {
    phase: "Phase 02",
    title: "Fade the Marks",
    desc: "Once active acne slows, we target PIH and uneven tone while rebuilding your skin barrier.",
    duration: "Weeks 4–12",
  },
  {
    phase: "Phase 03",
    title: "Maintain & Protect",
    desc: "Right habits, a minimal maintenance routine. No heavy products forever — just what your skin needs.",
    duration: "Ongoing",
  },
];

const treatmentOptions = [
  {
    label: "A",
    title: "At-Home Foundation",
    items: ["Benzoyl Peroxide", "Retinoids", "Salicylic Acid"],
    note: "6–8 weeks minimum for real change.",
  },
  {
    label: "B",
    title: "Prescription Support",
    items: [
      "Topical + Oral Antibiotics",
      "Hormonal Options (where suitable)",
      "Isotretinoin (severe cases)",
    ],
    note: "4–8 weeks to show results.",
  },
  {
    label: "C",
    title: "In-Clinic Procedures",
    items: ["Chemical Peels", "Microdermabrasion", "Light & Laser Therapy"],
    note: "Chosen by acne type & downtime tolerance.",
  },
];

const faqs = [
  {
    q: "How long does acne treatment take?",
    a: "Most treatments need 6 weeks before you notice improvement. Prescription options take 4–8 weeks; some take 2–3 months for full effect. Anyone promising clear skin in 3 days is not being honest with you.",
  },
  {
    q: "Why is my acne getting worse before it gets better?",
    a: "Some actives — especially retinoids — cause a temporary flare as clogged pores clear. This is not failure. Pacing, moisturiser support, and the right frequency matter.",
  },
  {
    q: "Can I treat acne with sensitive skin?",
    a: "Yes. You need a gentler plan: start slow, avoid harsh scrubs, and focus on barrier support while introducing actives gradually.",
  },
  {
    q: "When should I see a doctor for acne?",
    a: "If your acne is painful, leaving marks, recurring, or affecting your confidence — don't wait. That is exactly the point at which a stronger plan makes a meaningful difference.",
  },
  {
    q: "Is acne laser treatment worth it?",
    a: "Laser helps certain acne types — especially inflammation-driven acne. It works best as part of a combination plan, not as a standalone.",
  },
];

const pros = [
  "Stops random trial-and-error with a structured plan",
  "Better control of breakouts and inflammation",
  "Reduced risk of marks and long-term scarring",
  "Guidance on what to stop doing — often the biggest win",
];

const cons = [
  "Acne rarely disappears overnight — real change takes weeks",
  "Some treatments cause early dryness or temporary purging",
  "Severe acne may require longer monitoring and combination care",
];

export default function AcneLandingPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen overflow-x-hidden"
        style={{
          backgroundColor: "var(--color-light)",
          color: "var(--color-brown)",
          fontFamily: "var(--font-georgia)",
        }}
      >
        {/* ── DECORATIVE TEXTURE OVERLAY ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(140,79,88,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(172,153,144,0.08) 0%, transparent 50%)",
          }}
        />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16">
          {/* Decorative vertical line */}
          <div
            className="absolute hidden md:block left-6 md:left-16 top-0 h-full w-px opacity-20"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-wine), transparent)",
            }}
          />

          {/* Floating label */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 items-center gap-3 hidden md:flex"
          ></motion.div>

          {/* H1 */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl px-24 md:px-0"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-normal mb-6"
              style={{ color: "var(--color-brown)" }}
            >
              Acne Treatment in{" "}
              <span className="italic" style={{ color: "var(--color-wine)" }}>
                Kuala Lumpur
              </span>{" "}
              That Finally Makes Sense for Your Skin
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg max-w-2xl leading-relaxed mb-4"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Acne is not just "dirty pores". It is stress, hormones, heat,
              habits, and the wrong routine all mixing together.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg max-w-2xl leading-relaxed mb-12"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-inter)",
              }}
            >
              At Nexus Clinic KL, your plan starts with a{" "}
              <span
                style={{ color: "var(--color-brown)" }}
                className="font-medium"
              >
                doctor-led assessment
              </span>
              , then we build a treatment path that fits your acne type, your
              skin tone, and your lifestyle.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              className="flex col sm:row gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--color-wine)",
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                }}
              >
                Book Assessment
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase border"
                style={{
                  borderColor: "var(--color-taupe)",
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                  backgroundColor: "transparent",
                }}
              >
                Learn More
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex wrap gap-6 md:gap-10"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-2"
                >
                  <item.icon size={16} style={{ color: "var(--color-wine)" }} />
                  <span
                    className="text-xs tracking-wide"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative number */}
          <div
            className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-bold leading-none select-none pointer-events-none hidden lg:block"
            style={{
              color: "rgba(140,79,88,0.04)",
              fontFamily: "var(--font-georgia)",
            }}
          >
            01
          </div>
        </section>

        {/* MALAYSIA CONTEXT SECTION */}
        <section
          className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  The KL Reality
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                Acne in Malaysia{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  can feel nonstop.
                </span>{" "}
                You are not imagining it.
              </h2>
              <p
                className="leading-relaxed mb-4 text-sm md:text-base"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Kuala Lumpur is hot. It is humid. You sweat on the way to lunch,
                you reapply sunscreen, you sit in aircon, then you step out
                again. Your skin gets confused.
              </p>
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                If you are reading this, you probably tried something already.
                Maybe a cleanser that felt too harsh. Maybe a "miracle" serum
                that worked for two weeks, then stopped.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "Identify what type of acne you have",
                "Understand what is triggering it",
                "Know what your skin can tolerate",
                "Receive a plan you can actually follow",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(140,79,88,0.12)",
                  }}
                >
                  <span
                    className="text-xs font-medium mt-0.5"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ACNE TYPES SECTION */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Diagnosis First
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                Types of Acne We{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  Commonly See
                </span>{" "}
                in KL
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {acneTypes.map((type, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="relative p-8 group"
                  style={{
                    backgroundColor:
                      i === 0 ? "var(--color-wine)" : "var(--color-cream)",
                    border:
                      i !== 0 ? "1px solid rgba(172,153,144,0.25)" : "none",
                  }}
                >
                  {/* Number watermark */}
                  <div
                    className="absolute top-4 right-6 text-5xl font-bold select-none"
                    style={{
                      color:
                        i === 0
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(140,79,88,0.06)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {type.number}
                  </div>

                  <type.icon
                    size={20}
                    className="mb-5"
                    style={{
                      color:
                        i === 0 ? "rgba(243,239,238,0.7)" : "var(--color-wine)",
                    }}
                  />

                  <h3
                    className="text-xl font-normal mb-1"
                    style={{
                      color:
                        i === 0 ? "var(--color-cream)" : "var(--color-brown)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-xs tracking-wider uppercase mb-4"
                    style={{
                      color:
                        i === 0
                          ? "rgba(243,239,238,0.6)"
                          : "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {type.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color:
                        i === 0
                          ? "rgba(243,239,238,0.85)"
                          : "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {type.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TREATMENT PROCESS — 3 PHASES */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-rose)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-rose)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Your Journey
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-cream)" }}
              >
                A Clear Path to{" "}
                <span className="italic" style={{ color: "var(--color-rose)" }}>
                  Clearer Skin
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-0 relative"
            >
              {/* Connecting line */}
              <div
                className="absolute top-8 left-[16%] right-[16%] h-px hidden md:block"
                style={{ backgroundColor: "rgba(172,153,144,0.2)" }}
              />

              {treatmentPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative p-8 md:p-10 text-center"
                >
                  {/* Circle */}
                  <div
                    className="w-16 h-16 mx-auto mb-8 flex items-center justify-center text-sm font-medium relative z-10"
                    style={{
                      border: `1px solid ${i === 1 ? "var(--color-rose)" : "rgba(172,153,144,0.3)"}`,
                      color:
                        i === 1 ? "var(--color-rose)" : "var(--color-taupe)",
                      backgroundColor: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.phase}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-normal mb-4"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.desc}
                  </p>
                  <div
                    className="inline-block px-3 py-1 text-xs tracking-widest uppercase"
                    style={{
                      border: "1px solid rgba(172,153,144,0.2)",
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TREATMENT OPTIONS */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  How We Treat
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal max-w-2xl"
                style={{ color: "var(--color-brown)" }}
              >
                Treatment Options{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  Chosen for You
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {treatmentOptions.map((opt, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-8"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    border: "1px solid rgba(172,153,144,0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center text-sm font-medium mb-6"
                    style={{
                      backgroundColor: "var(--color-wine)",
                      color: "var(--color-cream)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {opt.label}
                  </div>
                  <h3
                    className="text-lg font-normal mb-5"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {opt.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {opt.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "var(--color-wine)" }}
                        />
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--color-taupe)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="pt-5 text-xs italic leading-relaxed"
                    style={{
                      borderTop: "1px solid rgba(172,153,144,0.2)",
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {opt.note}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHAT TO EXPECT AT NEXUS */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Your First Visit
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8"
                style={{ color: "var(--color-brown)" }}
              >
                What Happens at{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  Nexus Clinic KL
                </span>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                A good acne plan always starts with three things: a clear
                diagnosis, a routine you can actually stick to, and treatments
                that match your goals.
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                You leave knowing what you likely have, what is making it worse,
                and what the first 4–8 weeks will look like — including what to
                do if dryness or purging happens.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  step: "01",
                  title: "Clear Acne Diagnosis",
                  desc: "We look at your acne type, location, inflammation level, and patterns that suggest hormones or irritation.",
                },
                {
                  step: "02",
                  title: "A Routine You Can Stick To",
                  desc: "Not a 9-step routine. Not 12 products. A realistic, followable plan.",
                },
                {
                  step: "03",
                  title: "Treatments That Match Your Goals",
                  desc: "Fewer breakouts fast? Fewer marks? Stopping cystic flare-ups? We choose based on your priorities and skin tolerance.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-5 p-6"
                  style={{
                    backgroundColor: "var(--color-light)",
                    border: "1px solid rgba(172,153,144,0.15)",
                  }}
                >
                  <span
                    className="text-2xl font-normal opacity-20 shrink-0 leading-tight"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4
                      className="text-base mb-2"
                      style={{
                        color: "var(--color-brown)",
                        fontFamily: "var(--font-georgia)",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--color-taupe)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════
          PROS & CONS
      ════════════════════════════════════════ */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Honest Expectations
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                Benefits &{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  Real Limitations
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Pros */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center gap-3 mb-8 pb-4"
                  style={{ borderBottom: "1px solid rgba(172,153,144,0.2)" }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--color-wine)" }}
                  />
                  <span
                    className="text-sm tracking-wider uppercase"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    What Works in Your Favour
                  </span>
                </div>
                <div className="space-y-5">
                  {pros.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(140,79,88,0.1)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-wine)" }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--color-taupe)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cons */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center gap-3 mb-8 pb-4"
                  style={{ borderBottom: "1px solid rgba(172,153,144,0.2)" }}
                >
                  <AlertCircle
                    size={18}
                    style={{ color: "var(--color-taupe)" }}
                  />
                  <span
                    className="text-sm tracking-wider uppercase"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    What to Prepare For
                  </span>
                </div>
                <div className="space-y-5">
                  {cons.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(172,153,144,0.1)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-taupe)" }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--color-taupe)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
          TIMELINE — HOW LONG
      ════════════════════════════════════════ */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Timeline
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                How Long Does{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  Treatment Take?
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                {
                  duration: "4 Weeks",
                  label: "Benzoyl Peroxide begins working",
                  source: "NHS",
                },
                {
                  duration: "6 Weeks",
                  label: "First visible improvement",
                  source: "NHS",
                },
                {
                  duration: "4–8 Weeks",
                  label: "Prescription treatments show results",
                  source: "Mayo Clinic",
                },
                {
                  duration: "2–3 Months",
                  label: "Full effect for most treatments",
                  source: "NHS",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="p-6 text-center"
                  style={{
                    backgroundColor: "var(--color-light)",
                    border: "1px solid rgba(172,153,144,0.2)",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl mb-3 font-normal"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {item.duration}
                  </div>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.label}
                  </p>
                  <span
                    className="text-xs italic"
                    style={{
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    — {item.source}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 text-center text-sm italic"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-georgia)",
              }}
            >
              If someone promises clear skin in 3 days, be careful.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════ */}
        <FAQ data={faqs} />

        {/* ════════════════════════════════════════
          FINAL CTA BANNER
      ════════════════════════════════════════ */}
        <section
          className="py-20 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 50%, rgba(75,58,51,0.3) 0%, transparent 60%)",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div
                className="h-px w-8"
                style={{ backgroundColor: "rgba(243,239,238,0.4)" }}
              />
              <Star size={12} style={{ color: "rgba(243,239,238,0.6)" }} />
              <div
                className="h-px w-8"
                style={{ backgroundColor: "rgba(243,239,238,0.4)" }}
              />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
              style={{ color: "var(--color-cream)" }}
            >
              Ready for a plan that{" "}
              <span className="italic">actually fits your skin?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base mb-12 max-w-xl mx-auto leading-relaxed"
              style={{
                color: "rgba(243,239,238,0.7)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Start with an assessment, not a sales pitch. We identify what you
              have, what triggers it, and what the next 4–8 weeks look like.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex col sm:row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-sm tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--color-cream)",
                  color: "var(--color-wine)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                }}
              >
                Book Your Assessment
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex wrap justify-center gap-8"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon
                    size={14}
                    style={{ color: "rgba(243,239,238,0.5)" }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: "rgba(243,239,238,0.6)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
