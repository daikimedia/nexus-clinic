import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Star,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  Heart,
  Award,
  Shield,
  MessageCircle,
  ArrowRight,
  Play,
  Quote,
  Scan,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl tracking-tight font-georgia text-brown"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-normal">NEXUS</span>
            <span className="font-light text-wine">CLINIC</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {["About", "Services", "Treatments", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide relative group text-brown hover:text-wine transition-colors"
                whileHover={{ color: "#8C4F58" }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-wine group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:flex items-center px-6 py-3 rounded-full text-sm tracking-wide border border-brown text-brown hover:bg-brown hover:text-white transition-colors"
          >
            Book Now
          </motion.button>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brown"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-8 space-y-6">
              {["About", "Services", "Treatments", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-2xl font-georgia text-brown"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Floating Glass Card Component
const GlassCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
    className={`backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/50 bg-white/70 ${className}`}
  >
    {children}
  </motion.div>
);

// Circular Progress Component
const CircularProgress = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const circumference = 2 * Math.PI * 36;
  const progress = ((100 - value) / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            className="stroke-cream"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            className="stroke-wine"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
            animate={{ strokeDashoffset: progress }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-brown">{value}</span>
        </div>
      </div>
      <span className="text-sm mt-2 font-medium text-taupe">{label}</span>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 50,
      y: (e.clientY - rect.top - rect.height / 2) / 50,
    });
  };

  return (
    <section
      className="relative min-h-screen pt-24 lg:pt-0 overflow-hidden bg-cream"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-200 h-200 rounded-full blur-3xl bg-linear-radial from-rose/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-150 h-150 rounded-full blur-3xl bg-linear-radial from-taupe/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Decorative Quote */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-6xl lg:text-8xl mb-4 opacity-20 font-georgia text-wine"
              >
                "
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 font-georgia text-brown">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  Redefine Your
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="block text-wine"
                >
                  Natural Beauty
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base lg:text-lg mb-10 max-w-md mx-auto lg:mx-0 text-taupe leading-relaxed"
              >
                We specialize in enhancing your natural beauty, creating
                timeless radiance with a harmony of science & artistry.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(140, 79, 88, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-white text-sm tracking-wider flex items-center gap-3 bg-brown hover:bg-wine transition-colors"
                >
                  Arrange Schedule
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 text-sm tracking-wider text-brown"
                >
                  <span className="w-12 h-12 rounded-full border-2 border-brown flex items-center justify-center hover:bg-brown hover:text-white transition-colors">
                    <Play size={16} className="fill-current" />
                  </span>
                  View Your Treatment
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-12 mt-16"
            >
              <div className="text-center lg:text-left">
                <span className="text-5xl lg:text-6xl font-light font-georgia text-brown">
                  35
                </span>
                <p className="text-sm mt-2 text-taupe">
                  Traditional & Modern
                  <br />
                  Beauty Treatments
                </p>
              </div>
              <div className="w-px h-16 bg-taupe/30" />
              <div className="text-center lg:text-left">
                <span className="text-5xl lg:text-6xl font-light font-georgia text-brown">
                  50+
                </span>
                <p className="text-sm mt-2 text-taupe">
                  Professional Expert
                  <br />
                  Beauticians
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Image with Floating Elements */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              className="relative"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-md lg:max-w-full"
              >
                <div className="relative rounded-[40px] lg:rounded-[60px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop"
                    alt="Beauty Treatment"
                    className="w-full aspect-3/4 object-cover"
                  />

                  {/* Overlay linear */}
                  <div className="absolute inset-0 bg-linear-to-t from-cream/40 to-transparent" />

                  {/* Decorative dotted lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-60">
                    <motion.path
                      d="M 200 150 Q 250 200 280 280"
                      className="stroke-cream"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="150"
                      r="6"
                      className="fill-cream"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                    <motion.circle
                      cx="280"
                      cy="280"
                      r="6"
                      className="fill-cream"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                    />
                  </svg>
                </div>

                {/* Floating Cards */}

                {/* Scan Face Card */}
                <GlassCard
                  className="absolute -top-4 lg:top-8 right-0 lg:-right-8 p-3 lg:p-4"
                  delay={1.2}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cream">
                      <Scan size={20} className="text-wine" />
                    </div>
                    <span className="text-sm font-medium pr-2 text-brown">
                      Scan Your Face
                    </span>
                  </div>
                </GlassCard>

                {/* Moisture Card */}
                <GlassCard
                  className="absolute top-1/3 -left-4 lg:-left-16 p-4 lg:p-5"
                  delay={1.4}
                >
                  <CircularProgress value={75} label="Moisture" />
                </GlassCard>

                {/* Treatment Gallery Card */}
                <GlassCard
                  className="absolute -bottom-8 lg:bottom-8 -right-4 lg:-right-12 p-4 lg:p-5 max-w-70"
                  delay={1.6}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-brown">
                      Natural Skin Treatment
                    </span>
                    <ChevronRight size={18} className="text-taupe" />
                  </div>
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="w-12 h-12 rounded-xl overflow-hidden"
                      >
                        <img
                          src={`https://images.unsplash.com/photo-${
                            [
                              "1596755389378-c31d21fd1273",
                              "1515377905703-c4788e51af15",
                              "1570172619644-dfd03ed5d881",
                              "1552693673-1bf958298935",
                            ][i - 1]
                          }?w=100&auto=format&fit=crop`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-2 rounded-full text-sm border border-taupe text-brown text-center hover:bg-brown hover:text-white hover:border-brown transition-colors"
                  >
                    View Recommendations
                  </motion.button>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-taupe">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-taupe flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-taupe"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Services Bento Grid
const ServicesSection = () => {
  const services = [
    {
      title: "Facial Rejuvenation",
      subtitle: "Anti-Aging & Contouring",
      description: "Botox, fillers, and advanced lifting treatments",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Medical Weight Loss",
      subtitle: "Science-Based Programs",
      description: "Ozempic, Mounjaro & body contouring",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      span: "",
    },
    {
      title: "Skin Treatments",
      subtitle: "Acne & Pigmentation",
      description: "Laser therapy & chemical peels",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400",
      span: "",
    },
    {
      title: "Hair Restoration",
      subtitle: "PRP & Mesotherapy",
      description: "Advanced hair loss solutions",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      span: "lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-5xl font-georgia text-brown">
              Specialized <br className="hidden lg:block" />
              <span className="text-wine">Treatments</span>
            </h2>
          </div>
          <p className="max-w-md mt-6 lg:mt-0 text-taupe">
            Discover our comprehensive range of medical aesthetic services, each
            tailored to your unique needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${service.span}`}
              style={{
                minHeight: service.span.includes("row-span-2")
                  ? "500px"
                  : "250px",
              }}
            >
              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brown/80 via-brown/40 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-xs tracking-widest text-white/70 mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-xl lg:text-2xl text-white mb-2 font-georgia">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 max-w-xs">
                  {service.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-white text-sm group-hover:gap-4 transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "MOH Registered",
      desc: "Fully compliant with medical standards",
    },
    {
      icon: Award,
      title: "Doctor-Led Care",
      desc: "Licensed medical professionals",
    },
    {
      icon: Heart,
      title: "Personalized Plans",
      desc: "Tailored to your unique needs",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      desc: "FDA approved treatments",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl lg:rounded-[40px] overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&auto=format&fit=crop"
                  alt="Clinic Interior"
                  className="w-full aspect-4/5 object-cover"
                />
              </motion.div>

              {/* Floating Experience Card */}
              <GlassCard
                className="absolute -bottom-8 -right-8 lg:-right-12 p-6"
                delay={0.3}
              >
                <div className="text-center">
                  <span className="text-5xl font-light font-georgia text-wine">
                    15+
                  </span>
                  <p className="text-sm mt-2 text-taupe">
                    Years of
                    <br />
                    Excellence
                  </p>
                </div>
              </GlassCard>

              {/* Decorative */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-wine opacity-30"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              Why Nexus Clinic
            </span>
            <h2 className="text-3xl lg:text-5xl mb-6 font-georgia text-brown">
              Where Science Meets <span className="text-wine">Artistry</span>
            </h2>
            <p className="text-lg mb-12 text-taupe leading-relaxed">
              At Nexus Clinic, we believe in enhancing your natural beauty
              through evidence-based treatments. Our doctor-led approach ensures
              safety, efficacy, and results you'll love.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow"
                >
                  <feature.icon size={28} className="text-wine mb-4" />
                  <h3 className="font-semibold mb-2 text-brown">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-taupe">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote:
        "Nexus Clinic transformed not just my appearance, but my confidence. The doctors truly listen and create personalized solutions.",
      author: "Sarah Chen",
      role: "Business Executive",
    },
    {
      quote:
        "I was impressed by their transparent approach. They never push unnecessary treatments. A clinic you can truly trust.",
      author: "Michael Tan",
      role: "Entrepreneur",
    },
    {
      quote:
        "The weight loss program changed my life. With proper medical guidance, I achieved my goals safely and sustainably.",
      author: "Emily Wong",
      role: "Creative Director",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-5xl mb-12 font-georgia text-brown">
              What Our <span className="text-wine">Patients</span> Say
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Quote size={48} className="text-wine mb-6 opacity-30" />
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-georgia text-brown">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold text-brown">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-taupe">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-12 h-1 rounded-full transition-colors ${
                    current === index ? "bg-wine" : "bg-taupe/40"
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl lg:rounded-[40px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&auto=format&fit=crop"
                alt="Happy Patient"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Rating Card */}
            <GlassCard
              className="absolute -bottom-6 left-6 lg:left-12 p-5"
              delay={0.5}
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-wine fill-wine" />
                  ))}
                </div>
                <span className="font-semibold text-brown">5.0</span>
                <span className="text-sm text-taupe">(500+ Reviews)</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-widest uppercase mb-4 block text-rose">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-5xl text-white mb-8 font-georgia">
              Visit <span className="text-rose">Nexus Clinic</span>
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, text: "LG 10, Wisma UOA II, Jalan Pinang, KL" },
                { icon: Phone, text: "016-702 5699 / 03-2163 5699" },
                { icon: Clock, text: "Mon - Sat: 9:00 AM - 6:00 PM" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-wine">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {["Facebook", "Instagram", "TikTok"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="px-5 py-2 rounded-full text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl mb-8 font-georgia text-brown">
                Book Your Consultation
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                />
                <select className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-taupe">
                  <option>Select Treatment Interest</option>
                  <option>Facial & Anti-Aging</option>
                  <option>Weight Loss Program</option>
                  <option>Skin Treatments</option>
                  <option>Hair Restoration</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine resize-none transition-colors text-brown placeholder:text-taupe"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-medium tracking-wide bg-wine hover:bg-rose transition-colors"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              NEXUS<span className="text-wine">CLINIC</span>
            </span>
            <p className="max-w-md mb-6 text-taupe">
              Advanced aesthetic and medical weight loss clinic in Kuala Lumpur.
              Where science meets artistry for your natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Treatments", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block text-taupe hover:text-wine transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">Contact</h4>
            <ul className="space-y-3 text-taupe">
              <li>Wisma UOA II, KL</li>
              <li>016-702 5699</li>
              <li>info@nexusclinic.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            © 2026 Nexus Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-taupe hover:text-wine transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function HomePageNexus() {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/60167025699"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 bg-[#25D366]"
      >
        <MessageCircle className="text-white" size={24} />
      </motion.a>
    </div>
  );
}
