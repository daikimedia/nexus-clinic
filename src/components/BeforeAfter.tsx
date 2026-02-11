import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  floatAnimation,
} from "../lib/animations";

const ImageComparisonSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const sliderPosition = useTransform(x, [0, containerWidth], [0, 100]);

  React.useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        setContainerWidth(containerRef.current?.offsetWidth || 0);
        x.set((containerRef.current?.offsetWidth || 0) / 2);
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [x]);

  const handleDrag = (info: any) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let newX = info.point.x - rect.left;
    newX = Math.max(0, Math.min(newX, containerWidth));
    x.set(newX);
  };

  const handleClick = (event: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    x.set(Math.max(0, Math.min(clickX, containerWidth)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/5 sm:aspect-square rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onClick={handleClick}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Before Label */}
        <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-brown/80 backdrop-blur-sm text-light text-xs sm:text-sm rounded-full font-inter font-medium">
          {beforeLabel}
        </span>
      </div>

      {/* After Image (Clipped) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: useTransform(
            sliderPosition,
            (pos) => `inset(0 0 0 ${pos}%)`,
          ),
        }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* After Label */}
        <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-wine backdrop-blur-sm text-light text-xs sm:text-sm rounded-full font-inter font-medium">
          {afterLabel}
        </span>
      </motion.div>

      {/* Slider Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-light shadow-lg"
        style={{ left: x }}
      />

      {/* Draggable Handle */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 touch-none"
        style={{ left: x }}
      >
        <motion.div
          animate={{ scale: isDragging ? 1.2 : 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-light rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-wine"
        >
          <ArrowLeftRight className="w-5 h-5 sm:w-6 sm:h-6 text-wine" />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-wine/30 rounded-full blur-xl -z-10" />
      </motion.div>

      {/* Instructions Overlay (shows on hover) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        className="absolute inset-0 bg-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center"
      >
        <div className="bg-brown/70 backdrop-blur-sm px-4 py-2 rounded-full">
          <p className="text-light text-sm font-inter flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            Drag to compare
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      before: "/images/om-before1.png",
      after: "/images/om-after1.png",
      title: "Weight Loss Journey",
      result: "-15 kg in 12 weeks",
    },
    {
      id: 2,
      before: "/images/om-before2.png",
      after: "/images/om-after2.png",
      title: "Body Transformation",
      result: "-20 kg in 16 weeks",
    },
    {
      id: 3,
      before: "/images/om-before3.png",
      after: "/images/om-after3.png",
      title: "Lifestyle Change",
      result: "-18 kg in 14 weeks",
    },
  ];

  return (
    <section className="py-24 bg-brown relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-20 right-10 w-72 h-72 bg-wine/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1.5 },
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-wine/30 text-rose rounded-full text-sm font-inter font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Real Results
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light mb-4"
          >
            Before & <span className="italic text-rose">After</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-light/70 font-inter max-w-2xl mx-auto"
          >
            Slide to see the incredible transformations achieved by our clients
            with GLP-1 treatment
          </motion.p>
        </motion.div>

        {/* Comparison Sliders Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {transformations.map((item, index) => (
            <motion.div key={item.id} variants={scaleIn} className="group">
              {/* Image Comparison Slider */}
              <ImageComparisonSlider
                beforeImage={item.before}
                afterImage={item.after}
              />

              {/* Card Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-center"
              >
                <h3 className="font-georgia text-xl text-light mb-1">
                  {item.title}
                </h3>
                <p className="text-rose font-inter font-medium">
                  {item.result}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light/60 font-inter mb-6">
            Results may vary. Individual results depend on various factors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-wine text-light rounded-full font-inter font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/30 hover:bg-wine/90 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
