import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Shield,
  Droplets,
  Pill,
  Heart,
  Award,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import FAQ from "../../components/FAQ";

const MinoxidilLanding = () => {
  const quickAnswers = [
    {
      question: "Apa itu minoxidil?",
      answer:
        "Membantu memperlambat rambut rontok dan merangsang pertumbuhan kembali, terutama pada tahap awal kebotakan.",
    },
    {
      question: "Berapa lama hasilnya?",
      answer:
        "Hasil mulai terlihat dalam 4-6 bulan, dengan hasil optimal setelah 6 bulan pemakaian konsisten.",
    },
    {
      question: "Apakah akan rontok di awal?",
      answer:
        "Ya, shedding ringan di 2-8 minggu pertama adalah normal sebagai bagian dari siklus regenerasi.",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Treatment",
      desc: "Dokter spesialis memastikan diagnosis tepat sebelum memulai treatment",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "MOH Registered",
      desc: "Klinik terdaftar resmi dengan protokol keamanan ketat",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      desc: "Ribuan pasien telah berhasil mempertahankan rambut mereka",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Holistic Care",
      desc: "Pendekatan menyeluruh, bukan sekadar menjual produk",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnosis Akurat",
      desc: "Konsultasi menyeluruh untuk menentukan jenis kerontokan",
    },
    {
      number: "02",
      title: "Rencana Personal",
      desc: "Dosis dan metode disesuaikan dengan gaya hidup Anda",
    },
    {
      number: "03",
      title: "Monitoring Rutin",
      desc: "Evaluasi berkala dengan foto progres dan adjustmen",
    },
  ];

  const faqs = [
    {
      q: "Apakah minoxidil aman untuk wanita?",
      a: "Ya, FDA menyetujui minoxidil 2% dan 5% untuk wanita. Nexus Clinic menyesuaikan dosis berdasarkan sensitivitas kulit.",
    },
    {
      q: "Apa bedanya foam dan solution?",
      a: "Foam lebih ringan dan cepat kering, solution lebih ekonomis. Dokter akan merekomendasikan sesuai tipe kulit kepala.",
    },
    {
      q: "Bagaimana dengan efek samping?",
      a: "Iritasi ringan bisa terjadi. Tim dokter kami akan memonitor dan menyesuaikan treatment jika diperlukan.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rose blur-3xl"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 py-20 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm text-wine font-inter">
                  Minoxidil Treatment in Kuala Lumpur
                </span>
              </div>

              <h1 className="font-georgia text-5xl md:text-6xl text-brown mb-6 leading-tight">
                Keep Your Hair
                <span className="block text-wine">Longer, Thicker</span>
              </h1>

              <p className="text-lg text-taupe mb-8 max-w-2xl mx-auto font-inter">
                Minoxidil adalah solusi paling terpercaya untuk rambut rontok.
                Mulai lebih awal, dapatkan hasil optimal dengan bimbingan dokter
                spesialis.
              </p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="bg-wine text-white px-8 py-4 rounded-full font-inter hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                  Konsultasi Gratis
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter hover:bg-wine hover:text-white transition-all duration-300">
                  Pelajari Dulu
                </button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            >
              {benefits.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[--color-glass] backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
                >
                  <div className="text-wine mb-3">{item.icon}</div>
                  <h3 className="font-georgia text-brown mb-2">{item.title}</h3>
                  <p className="text-sm text-taupe font-inter">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              Quick Answers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-12 max-w-2xl mx-auto"
            >
              Pertanyaan yang paling sering dicari, dijawab langsung
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickAnswers.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AlertCircle className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.question}
                  </h3>
                  <p className="text-taupe font-inter text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Who Is It For */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl text-brown mb-6">
                  Who is Minoxidil
                  <br />
                  Treatment For?
                </h2>
                <div className="space-y-4">
                  {[
                    "Pria dengan pola kebotakan pria",
                    "Wanita dengan pola kebotakan wanita (FDA approved)",
                    "Mereka dengan rambut menipis di tahap awal",
                    "Kombinasi dengan treatment lain seperti PRP",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                      <span className="text-brown font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-wine rounded-2xl p-6 text-white">
                  <Users className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-2xl mb-1">1,000+</p>
                  <p className="text-sm opacity-90">Pasien Pria</p>
                </div>
                <div className="bg-rose rounded-2xl p-6 text-white">
                  <Heart className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-2xl mb-1">800+</p>
                  <p className="text-sm opacity-90">Pasien Wanita</p>
                </div>
                <div className="col-span-2 bg-brown rounded-2xl p-6 text-white">
                  <Award className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-xl mb-1">
                    6+ Tahun Pengalaman
                  </p>
                  <p className="text-sm opacity-90">
                    Specialized in hair restoration
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Types of Minoxidil
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <Droplets className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  Topical Minoxidil
                </h3>
                <p className="text-taupe mb-4">
                  Solution atau foam untuk aplikasi langsung
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>Pria: 5% sekali/hari</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>Wanita: 2% atau 5% foam</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <Pill className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  Oral Minoxidil
                </h3>
                <p className="text-taupe mb-4">Low-dose, dokter-supervised</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-wine" />
                    <span>Resep dokter wajib</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-wine" />
                    <span>Monitoring tekanan darah</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              Realistic Timeline
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-12"
            >
              Perjalanan treatment Anda step by step
            </motion.p>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  time: "2-8 minggu pertama",
                  desc: "Shedding phase - normal, jangan panik",
                  color: "text-amber-600",
                },
                {
                  time: "2-4 bulan",
                  desc: "Early signs mulai terlihat",
                  color: "text-emerald-600",
                },
                {
                  time: "6 bulan+",
                  desc: "Hasil optimal mulai terlihat",
                  color: "text-wine",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInLeft}
                  className="flex items-start gap-4 mb-8 last:mb-0"
                >
                  <div className="w-24 shrink-0">
                    <span className={`font-georgia text-sm ${item.color}`}>
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1 relative">
                    <div className="h-2 bg-cream rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: idx === 0 ? "30%" : idx === 1 ? "60%" : "100%",
                        }}
                        transition={{ duration: 1, delay: idx * 0.3 }}
                        className={`h-full rounded-full ${idx === 0 ? "bg-amber-400" : idx === 1 ? "bg-emerald-400" : "bg-wine"}`}
                      />
                    </div>
                    <p className="mt-2 text-brown font-inter text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Your Journey at Nexus Clinic
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg"
                >
                  <span className="font-georgia text-6xl text-wine/20 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <ArrowRight className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {step.title}
                  </h3>
                  <p className="text-taupe text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-wine to-rose">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Dapatkan assessment gratis dengan dokter spesialis kami. Diagnosis
              tepat, treatment personal, hasil optimal.
            </motion.p>
            <motion.div variants={scaleIn}>
              <button className="bg-white text-wine px-8 py-4 rounded-full font-inter hover:bg-light transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto">
                Booking Konsultasi Sekarang
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Pet Safety Notice */}
        <section className="py-12 bg-brown">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 text-center"
          >
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <p className="text-white/90 text-sm max-w-2xl mx-auto font-inter">
              Important: Topical minoxidil can be highly toxic to pets,
              especially cats. Always wash hands after use and keep away from
              animals.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MinoxidilLanding;
