"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Moon,
  Heart,
  Droplets,
  Bone,
  Pill,
  Stethoscope,
  Shield,
  FileText,
  Sparkles,
  Activity,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";

const MonopauseLanding = () => {
  return (
    <>
      <main className="bg-light font-['Inter'] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Confident woman in professional setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-['Georgia'] text-5xl lg:text-6xl text-brown leading-tight">
                  Menopause should not steal your sleep,
                  <span className="text-wine block mt-2">
                    your confidence, or your comfort.
                  </span>
                </h1>

                <p className="text-lg text-taupe leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                  Hot flushes, night sweats, mood swings, and vaginal dryness
                  can make you feel like you're not in control of your own body.
                  At Nexus Clinic Kuala Lumpur, we help you understand your
                  symptoms, your options, and what "safe, personalised HRT"
                  actually looks like.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-rose transition-colors shadow-lg hover:shadow-xl"
                  >
                    Schedule a Private Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-brown px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-wine hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
                  >
                    <Phone className="w-5 h-5" />
                    +6016 702 5699
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-wine/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-4 border-b border-cream">
                      <MapPin className="w-5 h-5 text-wine" />
                      <span className="text-brown">
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur
                      </span>
                    </div>

                    <div className="grid gap-4">
                      <TrustItem
                        icon={MapPin}
                        text="Central Kuala Lumpur location for discreet visits"
                      />
                      <TrustItem
                        icon={FileText}
                        text="Step by step decision making based on your symptoms, health history, and comfort level"
                      />
                      <TrustItem
                        icon={Shield}
                        text="Evidence-based care: major menopause guidance consistently states hormone therapy is the most effective treatment"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Menopause with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-6">
                  What is menopause and perimenopause{" "}
                  <span className="text-wine">(in real life)</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    Menopause is officially diagnosed after 12 months without a
                    period, and many women go through a transition phase called
                    perimenopause before that. During perimenopause, hormones
                    can swing. That is why symptoms can feel random.
                  </p>
                  <p className="text-taupe">
                    Hospitals in Malaysia commonly explain that menopause often
                    happens between about 45 and 55, but it can occur earlier or
                    later.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-transparent rounded-3xl" />
                <img
                  src="/images/clinic/support.png"
                  alt="Women supporting each other"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <p className="text-wine font-medium">45-55 years</p>
                  <p className="text-sm text-taupe">
                    Typical menopause age range
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* HRT vs MHT Clarification */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 bg-rose/10 px-6 py-3 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-rose" />
                <span className="text-brown font-medium">
                  First, a simple clarification
                </span>
              </div>

              <h2 className="font-['Georgia'] text-4xl text-brown mb-8">
                HRT vs MHT
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="bg-wine w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-['Georgia'] text-2xl text-brown mb-2">
                    HRT
                  </h3>
                  <p className="text-taupe">Hormone Replacement Therapy</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="bg-rose w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-['Georgia'] text-2xl text-brown mb-2">
                    MHT
                  </h3>
                  <p className="text-taupe">Menopause Hormone Therapy</p>
                </motion.div>
              </div>

              <p className="mt-8 text-brown bg-white p-6 rounded-2xl shadow-lg">
                They usually mean the same idea: replacing hormones (mainly
                oestrogen, and sometimes progestogen) to reduce menopause
                symptoms and protect long term health when appropriate. Pantai
                KL describes Menopause Hormone Therapy as oestrogen therapy in
                different forms, and notes women with an intact uterus need
                additional progestogen therapy.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Common Symptoms Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia'] text-4xl text-brown mb-4">
                Symptoms that make women search
              </h2>
              <p className="text-xl text-wine font-medium">
                "menopause HRT Kuala Lumpur"
              </p>
              <p className="text-taupe mt-4">
                If you are reading this and thinking "that's me," you're not
                alone.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <SymptomCard
                  icon={Thermometer}
                  title="Hot flushes and night sweats"
                  description="This is the number one reason women start HRT. The North American Menopause Society notes hormone therapy remains the most effective treatment."
                />
                <SymptomCard
                  icon={Moon}
                  title="Sleep disturbance"
                  description="Waking up exhausted, mood changes, anxiety, irritability"
                />
                <SymptomCard
                  icon={Droplets}
                  title="Vaginal dryness"
                  description="Pain during intimacy, urinary symptoms like urgency or leakage. Many women suffer quietly here."
                />
                <SymptomCard
                  icon={Bone}
                  title="Bone loss prevention"
                  description="Menopause hormone therapy can help prevent bone loss and reduce fracture risk in appropriate women."
                />
              </div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Woman experiencing menopause symptoms"
                  className="rounded-3xl shadow-2xl w-full h-125 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-wine text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold">80%</p>
                  <p className="text-sm">experience hot flushes</p>
                </div>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-taupe bg-cream p-4 rounded-2xl"
            >
              Pantai's HRT page lists these exact types of symptoms as reasons
              women consider HRT.
            </motion.p>
          </div>
        </motion.section>

        {/* Types of HRT with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-8">
                  Types of Menopause HRT in Malaysia
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-['Georgia'] text-xl text-wine mb-2">
                      Oestrogen-only HRT
                    </h3>
                    <p className="text-taupe">
                      Usually used if you have had a hysterectomy (uterus
                      removed). Gleneagles notes oestrogen-only HRT is typically
                      recommended for women who have had their uterus removed.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-['Georgia'] text-xl text-rose mb-2">
                      Combined HRT (Oestrogen + Progestogen)
                    </h3>
                    <p className="text-taupe">
                      Used if you still have a uterus. Pantai KL explains women
                      with an intact uterus need additional progestogen therapy.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="HRT medications and patches"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
              </motion.div>
            </div>

            {/* Administration Methods */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="font-['Georgia'] text-2xl text-brown mb-8 text-center">
                Ways to take HRT (and why this matters)
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  "Tablets",
                  "Patches",
                  "Gels, creams, sprays",
                  "Vaginal preparations",
                ].map((method, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-2xl text-center shadow-md"
                  >
                    <span className="text-wine font-medium">{method}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-center mt-6 text-taupe">
                Pantai KL lists multiple oestrogen forms such as tablets, gels,
                creams, or sprays.
              </p>

              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-wine/5 p-6 rounded-2xl border-l-4 border-wine max-w-3xl mx-auto"
              >
                <p className="text-brown">
                  <span className="font-bold">A key safety point:</span> The
                  Menopause Society Australia summary of NAMS 2022 highlights
                  that transdermal routes and lower doses may decrease risk of
                  venous thromboembolism and stroke. In plain words: for many
                  women, a patch or gel may be a safer fit than a tablet,
                  depending on health history.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Consultation Process with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-6">
                  What happens at a Menopause HRT consultation
                </h2>
                <p className="text-xl text-wine mb-8">
                  A good clinic does not start with a prescription. It starts
                  with clarity.
                </p>

                <div className="space-y-4">
                  <ConsultationStep
                    number="01"
                    title="Symptom mapping"
                    description="We talk about what you feel, when it started, what triggers it, and what you have tried."
                  />
                  <ConsultationStep
                    number="02"
                    title="Health and risk screening"
                    description="Your history matters: breast cancer family history, clot risk, blood pressure, migraines, smoking, and your uterus status."
                  />
                  <ConsultationStep
                    number="03"
                    title="Choosing your best-fit plan"
                    description="Non-hormonal first steps, local vaginal therapy, systemic HRT, route choice based on risk profile."
                  />
                  <ConsultationStep
                    number="04"
                    title="Follow-up"
                    description="HRT should be reviewed regularly. Personalisation and periodic re-evaluation are core themes."
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/images/clinic/consultation.png"
                  alt="Doctor consulting with patient"
                  className="rounded-3xl shadow-2xl w-full h-150 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <Stethoscope className="w-8 h-8 text-wine mb-2" />
                  <p className="text-sm text-brown">Personalized care</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Candidate Selection */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h2 className="font-['Georgia'] text-3xl text-brown mb-6">
                  Who is a good candidate for Menopause HRT?
                </h2>
                <p className="text-taupe mb-6">
                  Guidance consistently supports a favourable benefit-risk ratio
                  for healthy symptomatic women under 60, or within about 10
                  years of menopause onset, assuming no contraindications.
                </p>
                <ul className="space-y-4">
                  {[
                    "Symptoms are affecting daily life (sleep, work, relationships)",
                    "You understand the benefits and risks",
                    "You are ready for follow-up reviews and monitoring",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h2 className="font-['Georgia'] text-3xl text-brown mb-6">
                  Who should avoid HRT?
                </h2>
                <p className="text-taupe mb-6">
                  NHS guidance notes HRT can slightly increase breast cancer
                  risk and is usually avoided in women who have had breast
                  cancer. Pantai's cancer risk article also notes HRT may not be
                  recommended for women with a history of breast cancer, blood
                  clots, or certain cardiovascular conditions.
                </p>
                <div className="bg-cream p-6 rounded-2xl">
                  <p className="font-medium text-brown mb-4">
                    Other situations needing careful review:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Prior blood clots",
                      "Stroke or severe cardiovascular disease history",
                      "Certain liver conditions",
                      "Unexplained vaginal bleeding",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects and Risks */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-4 text-center"
            >
              Side effects and risks, explained without fear
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              Most women tolerate HRT well, but you deserve honest expectations.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <RiskCard
                title="Common side effects (usually settle)"
                description="Breast tenderness, mild bloating, headaches, spotting or bleeding in early months"
                bgColor="bg-cream"
              />
              <RiskCard
                title="Breast cancer risk"
                description="NHS explains combined HRT can slightly increase breast cancer risk, with risk rising with longer duration and falling after stopping. Breast Cancer Now also notes vaginal HRT with low-dose oestrogen does not increase breast cancer risk."
                bgColor="bg-cream"
              />
              <RiskCard
                title="Blood clots and stroke"
                description="Risk depends on your baseline risk factors and the HRT route. Transdermal routes may reduce VTE and stroke risk compared with oral, according to NAMS 2022 summaries."
                bgColor="bg-cream"
              />
            </div>

            {/* FDA Update */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 max-w-3xl mx-auto bg-linear-to-r from-wine to-rose p-8 rounded-3xl shadow-xl text-white"
            >
              <h3 className="font-['Georgia'] text-2xl mb-4">
                A very recent update you might have seen online
              </h3>
              <p className="text-white/90 leading-relaxed">
                In November 2025, the FDA announced it removed the long-standing
                boxed warning from many hormone-based menopause medicines in the
                US, arguing newer evidence supports more personalised risk
                discussions. This change is still debated by experts. This does
                not automatically change Malaysian practice, but it shows the
                global conversation has moved toward "right patient, right
                timing, right route" rather than fear-based avoidance.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* HRT vs Non-hormonal */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-['Georgia'] text-4xl text-brown mb-12 text-center">
              HRT vs non-hormonal treatments
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="font-['Georgia'] text-2xl text-wine mb-4">
                  Hormone Therapy
                </h3>
                <p className="text-taupe mb-4">
                  Most effective treatment for vasomotor symptoms and GSM
                </p>
                <div className="space-y-3">
                  <BenefitItem text="Hot flushes and night sweats" />
                  <BenefitItem text="Vaginal dryness and intimacy pain" />
                  <BenefitItem text="Bone loss prevention" />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="font-['Georgia'] text-2xl text-rose mb-4">
                  Non-hormonal options
                </h3>
                <p className="text-taupe mb-4">
                  The Asia-Pacific Menopause Federation consensus notes
                  non-hormonal options like SSRIs, SNRIs, clonidine, and
                  gabapentin can help symptoms, but they are generally less
                  effective than MHT.
                </p>
                <div className="space-y-3">
                  <BenefitItem text="Cooler sleep environment" />
                  <BenefitItem text="Limiting alcohol and spicy foods" />
                  <BenefitItem text="Strength training for bone and mood" />
                  <BenefitItem text="Stress support and counselling" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-8 text-center"
            >
              Cost of Menopause HRT in Malaysia
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-8"
            >
              There is no single "HRT price" because the cost depends on:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-3xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Consultation fees",
                  "Blood tests if needed",
                  "Type of HRT (patch vs pill vs gel)",
                  "Follow-up frequency",
                  "Additional care for vaginal symptoms",
                  "Bone health or metabolic issues",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-brown border-t border-taupe/20 pt-6">
                <span className="font-bold">Practical tip:</span> ask for an
                itemised plan (consult + tests + monthly medication + follow-up
                review). That is the fairest way to compare clinics.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-4 text-center"
            >
              Menopause HRT in Malaysia
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12"
            >
              When people search "menopause HRT Malaysia" or "menopause hormone
              therapy Kuala Lumpur"
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  Pantai Hospitals
                </h3>
                <p className="text-sm text-taupe">
                  Strong educational content. Clear description of MHT, need for
                  progestogen if uterus intact, and bone benefits.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  Gleneagles Malaysia
                </h3>
                <p className="text-sm text-taupe">
                  Clear structure, explains oestrogen-only vs combined, and
                  offers easy-to-read FAQs.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  Premium & Anti-aging Clinics
                </h3>
                <p className="text-sm text-taupe">
                  Market BHRT as personalised hormone optimisation with varying
                  price ranges.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-wine text-white p-8 rounded-3xl"
            >
              <h3 className="font-['Georgia'] text-2xl mb-4">
                How Nexus Clinic Kuala Lumpur stands out
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Make the 'right route' decision simple (patch vs pill and why)",
                  "Give clear 'who should not take HRT' guidance in plain language",
                  "Add practical lifestyle tips that match KL life",
                  "Provide a structured follow-up plan, not just a one-time prescription",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
          className="relative py-20 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Peaceful and confident woman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          </div>

          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-white mb-6"
            >
              Ready to take control of your menopause journey?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 max-w-2xl mx-auto text-lg"
            >
              If you're searching for menopause hormone replacement therapy in
              Kuala Lumpur or menopause HRT in Malaysia, start with a private
              consult and a plan that feels safe, clear, and realistic.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                +6016 702 5699
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-wine transition-all text-lg">
                Book Your Consultation
              </button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 mt-8 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Nexus Clinic Kuala Lumpur • LG 10, Lower Ground Floor, Wisma UOA
              II, Jalan Pinang, 50450 Kuala Lumpur
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

const TrustItem = ({ icon: Icon, text }: any) => (
  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
    <Icon className="w-5 h-5 text-wine mt-1 shrink-0" />
    <span className="text-sm text-brown">{text}</span>
  </motion.div>
);

const SymptomCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -5 }}
    className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-all h-full"
  >
    <div className="bg-wine w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-['Georgia'] text-xl text-brown mb-2">{title}</h3>
    <p className="text-taupe text-sm">{description}</p>
  </motion.div>
);

const RiskCard = ({ title, description, bgColor }: any) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -5 }}
    className={`${bgColor} p-6 rounded-2xl shadow-lg`}
  >
    <h3 className="font-['Georgia'] text-lg text-brown mb-3">{title}</h3>
    <p className="text-taupe text-sm">{description}</p>
  </motion.div>
);

const ConsultationStep = ({ number, title, description }: any) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-start gap-4 bg-cream p-4 rounded-2xl"
  >
    <div className="bg-wine w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0">
      {number}
    </div>
    <div>
      <h3 className="font-['Georgia'] text-lg text-brown mb-1">{title}</h3>
      <p className="text-taupe text-sm">{description}</p>
    </div>
  </motion.div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-wine" />
    <span className="text-sm text-brown">{text}</span>
  </div>
);

// FAQ Data
const faqs = [
  {
    q: "Is menopause HRT safe?",
    a: "For many healthy women under 60 or within about 10 years of menopause onset, the benefit-risk profile is favourable when there are no contraindications and therapy is reviewed regularly.",
  },
  {
    q: "What symptoms does HRT help the most?",
    a: "HRT is the most effective treatment for hot flushes and night sweats, and it is also highly effective for vaginal and urinary menopause symptoms (GSM).",
  },
  {
    q: "Do I need progesterone with oestrogen?",
    a: "If you still have a uterus, yes, you usually need a progestogen to protect the womb lining. Pantai KL states women with an intact uterus need additional progestogen therapy.",
  },
  {
    q: "What is the safest type of HRT?",
    a: "There is no single safest option for everyone. Route and dose matter. Summaries of NAMS 2022 state transdermal routes and lower doses may reduce clot and stroke risk.",
  },
  {
    q: "Will HRT cause weight gain?",
    a: "Weight change often happens around menopause due to hormonal shifts and ageing. Many women feel better on HRT because sleep improves and activity becomes easier, but HRT is not a weight loss drug.",
  },
  {
    q: "How quickly does HRT start working?",
    a: "Some women feel improvements within days to a couple of weeks, especially for hot flushes and sleep, though it varies. Pantai's HRT cancer risk FAQ notes symptom improvement can be seen within several days to a couple of weeks for some women.",
  },
  {
    q: "Does HRT increase breast cancer risk?",
    a: "Combined HRT slightly increases breast cancer risk, and risk increases with longer use. Risk generally falls again after stopping.",
  },
  {
    q: "Can I use vaginal oestrogen if I cannot take systemic HRT?",
    a: "Many guidance sources note low-dose vaginal oestrogen is treated differently from systemic HRT, and Breast Cancer Now states vaginal HRT does not increase breast cancer risk in the general population. Always confirm with your doctor for your personal history.",
  },
  {
    q: "What if I cannot take HRT?",
    a: "Non-hormonal options such as SSRIs, SNRIs, clonidine, and gabapentin may help, though they are generally less effective than MHT.",
  },
  {
    q: "How long can I stay on HRT?",
    a: "Duration is personalised. Major position statements emphasise shared decision making and periodic review to reassess benefits and risks.",
  },
  {
    q: "Do I need blood tests to start HRT?",
    a: "Not always for menopause diagnosis, but clinicians may order tests based on symptoms and risk factors. Many providers in Malaysia combine clinical evaluation with appropriate screening.",
  },
  {
    q: "Where can I get menopause HRT in Kuala Lumpur?",
    a: "Menopause care is offered by hospitals and clinics in Malaysia. If you want a central KL option, Nexus Clinic Kuala Lumpur is listed at Wisma UOA II, Jalan Pinang, with a published contact number.",
  },
];

export default MonopauseLanding;
