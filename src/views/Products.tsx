"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import {
  ChevronRight,
  Star,
  Shield,
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Award,
  Users,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";

const treatments = [
  {
    id: 1,
    name: "Mounjaro",
    subtitle: "Tirzepatide Injection",
    price: "RM 1,588",
    badge: "Most Advanced",
    description:
      "Dual-action GLP-1 & GIP receptor agonist for superior weight loss results.",
    tag: "2.5mg · 4-pen box",
    href: "https://www.nexus-clinic.com/en/buy-mounjaro-malaysia-2-5mg-pre-filled-pen-4s-box/",
    linear: "from-wine to-brown",
    loss: "Up to 22.5%",
  },
  {
    id: 2,
    name: "Ozempic",
    subtitle: "Semaglutide Injection",
    price: "RM 1,800",
    badge: "Doctor Guided",
    description:
      "Clinically proven GLP-1 receptor agonist trusted by physicians worldwide.",
    tag: "1mg dose · pre-filled pen",
    href: "https://www.nexus-clinic.com/en/buy-ozempic-online-malaysia-1mg-dose-pre-filled-pen/",
    linear: "from-taupe to-wine",
    loss: "Up to 15%",
  },
  {
    id: 3,
    name: "Wegovy",
    subtitle: "High-Dose Semaglutide",
    price: "RM 1,850",
    badge: "FDA Approved",
    description:
      "Higher-dose semaglutide specifically approved for chronic weight management.",
    tag: "0.25mg · pre-filled pen",
    href: "https://www.nexus-clinic.com/en/buy-wegovy-malaysia-0-25mg-pre-filled-pen/",
    linear: "from-rose to-brown",
    loss: "Up to 17%",
  },
  {
    id: 4,
    name: "Saxenda",
    subtitle: "Liraglutide Injection",
    price: "RM 1,650",
    badge: "Proven & Trusted",
    description:
      "Daily GLP-1 analogue with a solid clinical track record in weight reduction.",
    tag: "6mg · 3ml × 3 pens",
    href: "https://www.nexus-clinic.com/en/buy-saxenda-flextouch-malaysia-6mg-pre-filled-pen-3ml-x3/",
    linear: "from-brown to-taupe",
    loss: "Up to 8%",
  },
];

const stats = [
  { value: "20+", label: "Years of Excellence", icon: Award },
  { value: "50K+", label: "Happy Patients", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "15+", label: "Specialist Doctors", icon: Shield },
];

const steps = [
  {
    num: "01",
    title: "Online Consultation",
    desc: "Chat with our doctors via WhatsApp or book a clinic visit.",
  },
  {
    num: "02",
    title: "Personalised Assessment",
    desc: "Your BMI, health history and goals are carefully reviewed.",
  },
  {
    num: "03",
    title: "Medical Prescription",
    desc: "Receive a tailored treatment plan with the right medication.",
  },
  {
    num: "04",
    title: "Ongoing Monitoring",
    desc: "Regular follow-ups ensure safe, sustained weight loss progress.",
  },
];

const faqs = [
  {
    q: "Are these weight loss injections safe?",
    a: "Yes. All medications we prescribe are approved by regulatory authorities and administered under the supervision of licensed physicians at Nexus Clinic.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most patients notice measurable weight loss within 4–8 weeks. Results vary depending on the medication and individual metabolic factors.",
  },
  {
    q: "Do I need to visit the clinic in person?",
    a: "An initial in-person consultation is recommended, but follow-ups can be done via telehealth for your convenience.",
  },
  {
    q: "Is there a consultation fee?",
    a: "We offer a complimentary first chat via WhatsApp. Formal medical consultations are charged separately and can be offset by our RM 100 voucher.",
  },
];

function DecorLine({ className = "" }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`h-px bg-linear-to-r from-transparent via-wine to-transparent ${className}`}
    />
  );
}

function TreatmentCard({ t }: { t: (typeof treatments)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden border border-taupe/20 bg-light cursor-pointer"
    >
      {/* linear stripe top */}
      <div className={`h-1 w-full bg-linear-to-r ${t.linear}`} />

      <div className="p-7 flex flex-col gap-4">
        {/* Badge */}
        <span className="self-start text-xs font-semibold tracking-widest uppercase text-wine bg-wine/10 px-3 py-1 rounded-full">
          {t.badge}
        </span>

        {/* Name */}
        <div>
          <h3 className="font-georgia text-2xl text-brown leading-tight">
            {t.name}
          </h3>
          <p className="text-taupe text-sm mt-1">{t.subtitle}</p>
        </div>

        {/* Weight loss pill */}
        <div className="flex items-center gap-2">
          <TrendingDown size={14} className="text-wine" />
          <span className="text-xs text-wine font-semibold">
            {t.loss} body weight
          </span>
        </div>

        {/* Description */}
        <p className="text-brown/70 text-sm leading-relaxed">{t.description}</p>

        <DecorLine />

        {/* Footer */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-taupe mb-1">{t.tag}</p>
            <p className="font-georgia text-xl text-brown">{t.price}</p>
          </div>
          <motion.a
            href={t.href}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center gap-1 text-xs font-semibold text-wine hover:text-brown transition-colors"
          >
            Learn more <ArrowRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({
  stat,
}: {
  stat: { value: string; label: string; icon: any };
  i: number;
}) {
  const Icon = stat.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center text-center gap-3 p-6"
    >
      <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center">
        <Icon size={20} className="text-wine" />
      </div>
      <span className="font-georgia text-4xl text-light">{stat.value}</span>
      <span className="text-taupe text-sm tracking-wide">{stat.label}</span>
    </motion.div>
  );
}

function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeInUp} className="border-b border-taupe/20 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-georgia text-brown text-base">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-7 h-7 rounded-full border border-wine/40 flex items-center justify-center text-wine"
        >
          <ChevronRight size={14} className="rotate-90" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-taupe text-sm leading-relaxed pt-3">{item.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <main className="bg-light font-inter text-brown overflow-x-hidden">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{
            background: "linear-linear(135deg,brown0%,wine60%,rose100%)",
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Large decorative circle */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute -right-32 -top-32 w-150 h-150 rounded-full border border-light"
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
            className="absolute -right-16 -top-16 w-100 h-100 rounded-full border border-light"
          />

          {/* Floating pill shapes */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-12 w-14 h-14 rounded-full bg-light/10 backdrop-blur-sm border border-light/20"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-24 w-8 h-8 rounded-full bg-rose/30"
          />

          {/* Announcement bar */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-0 left-0 right-0 bg-light hidden backdrop-blur-sm border-b border-light/10 py-2.5 text-center"
          >
            <p className="text-cream/80 text-xs tracking-widest">
              ✦ &nbsp; CLAIM YOUR RM 100 VOUCHER — CHAT WITH A DOCTOR NOW &nbsp;
              <a
                href="https://wa.link/q64h1l"
                className="underline text-light font-semibold"
              >
                WhatsApp Us
              </a>
              &nbsp; ✦
            </p>
          </motion.div>

          {/* Hero content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-20"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              {/* Left */}
              <div className="flex-1 text-center lg:text-left">
                <motion.p
                  variants={fadeInUp}
                  className="text-taupe text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2 justify-center lg:justify-start"
                >
                  <Sparkles size={12} className="text-rose" />
                  Nexus Clinic · Est. 2001 · Kuala Lumpur
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl sm:text-6xl lg:text-7xl text-taupe leading-[1.05] mb-8"
                >
                  Your <span className="italic text-rose">Slimmer</span>
                  <br />
                  Self, Medically
                  <br />
                  <span className="italic">Guided.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-wine/70 text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
                >
                  Advanced GLP-1 weight loss injections — Mounjaro, Ozempic,
                  Wegovy & Saxenda — prescribed and monitored by specialist
                  doctors at Nexus Clinic KL.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="https://wa.link/q64h1l"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 bg-light text-brown px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors"
                  >
                    <Phone size={15} />
                    Free Consultation
                  </motion.a>
                  <motion.a
                    href="#treatments"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 border border-brown/30 text-brown px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-colors"
                  >
                    View Treatments <ChevronRight size={15} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right — floating card */}
              <motion.div
                variants={fadeInRight}
                className="shrink-0 w-full max-w-xs"
              >
                <div className="bg-linear-to-br from-wine/10 to-rose/10 backdrop-blur-md rounded-3xl border border-light/15 p-7 space-y-5">
                  <p className="text-wine text-xs uppercase tracking-widest">
                    Why GLP-1 Therapy?
                  </p>
                  {[
                    "Clinically proven weight loss",
                    "Reduces appetite naturally",
                    "Improves metabolic health",
                    "Doctor-supervised programme",
                    "Discreet & confidential care",
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={15} className="text-rose shrink-0" />
                      <span className="text-wine/85 text-sm">{point}</span>
                    </motion.div>
                  ))}

                  <div className="pt-2 border-t border-light/10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
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
                      <p className="text-cream/70 text-xs leading-tight">
                        50,000+ patients
                        <br />
                        <span className="text-rose">trust Nexus Clinic</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 80L1440 80L1440 20C1200 70 800 -10 480 30C240 60 0 20 0 20L0 80Z"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="bg-brown py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-taupe/10"
          >
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} i={i} />
            ))}
          </motion.div>
        </section>

        {/* ── INTRO TAGLINE ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-xs tracking-[0.3em] uppercase mb-6"
            >
              The Nexus Difference
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl sm:text-5xl text-brown leading-tight mb-6"
            >
              More than a prescription —<br />
              <span className="italic text-wine">
                a complete transformation.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe leading-relaxed max-w-2xl mx-auto"
            >
              At Nexus Clinic, every weight loss journey is individually
              designed. Our specialist physicians assess your unique physiology,
              lifestyle and goals before recommending the optimal GLP-1 protocol
              — ensuring you lose weight safely, effectively and for the long
              term.
            </motion.p>
          </motion.div>
        </section>

        {/* ── TREATMENTS ───────────────────────────────────────────────────── */}
        <section id="treatments" className="pb-28 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-14 text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase mb-4"
              >
                GLP-1 Weight Loss Medications
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-brown"
              >
                Choose Your Treatment
              </motion.h2>
            </motion.div>

            <DecorLine className="mb-14" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {treatments.map((t) => (
                <TreatmentCard key={t.id} t={t} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-brown relative overflow-hidden">
          {/* Decorative ring */}
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-wine/20 pointer-events-none" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-wine/10 pointer-events-none" />

          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase mb-4"
              >
                Simple · Personalised · Effective
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-light"
              >
                Your Journey, Step by Step
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative flex flex-col gap-4"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-linear-to-r from-wine/40 to-transparent z-0" />
                  )}
                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-wine/30 bg-wine/10 flex items-center justify-center">
                    <span className="font-georgia text-2xl text-rose">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-georgia text-lg text-light">{s.title}</h3>
                  <p className="text-taupe text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase mb-4"
              >
                Common Questions
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-brown"
              >
                Frequently Asked
              </motion.h2>
            </motion.div>

            <DecorLine className="mb-4" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {faqs.map((item, i) => (
                <FaqItem key={i} item={item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-wine">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-linear(135deg,brown0%,wine100%)",
            }}
          >
            {/* Decorative ring */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-light/10" />
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-light/08" />

            <div className="relative z-10 p-12 lg:p-20 text-center flex flex-col items-center gap-8">
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-xs tracking-[0.3em] uppercase"
              >
                Begin Today
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl sm:text-5xl text-light leading-tight"
              >
                Ready to start your
                <br />
                <span className="italic text-rose">transformation?</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream/70 max-w-md leading-relaxed"
              >
                Claim your complimentary RM 100 voucher and chat with one of our
                specialist doctors today. No obligation, just clarity.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://wa.link/q64h1l"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-light text-brown px-9 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors"
                >
                  <Phone size={15} />
                  Claim RM 100 Voucher
                </motion.a>
              </motion.div>

              {/* Location & hours pills */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 text-cream/60 text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> LG 10, Wisma UOA II, Jalan Pinang, KL
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> Mon–Sat · 9:00am – 6:00pm
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={12} /> 016-702 5699
                </span>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
