"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Search,
  ChevronRight,
  Sparkles,
  Leaf,
  Heart,
  Zap,
  BookOpen,
  Filter,
} from "lucide-react";

type CategoryValue = "all" | "skincare" | "weight" | "aging" | "treatments";

interface Category {
  label: string;
  icon: React.ReactNode;
  value: CategoryValue;
}

import {
  fadeInUp,
  staggerContainer,
  fadeInRight,
  scaleIn,
  fadeInLeft,
} from "../lib/animations";

interface Post {
  id: number;
  category: Omit<CategoryValue, "all">;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  featured: boolean;
}

interface TagColorConfig {
  bg: string;
  text: string;
  dot: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  { label: "All", icon: <BookOpen size={14} />, value: "all" },
  { label: "Skincare", icon: <Sparkles size={14} />, value: "skincare" },
  { label: "Weight Loss", icon: <Leaf size={14} />, value: "weight" },
  { label: "Anti-Aging", icon: <Heart size={14} />, value: "aging" },
  { label: "Treatments", icon: <Zap size={14} />, value: "treatments" },
];

const posts: Post[] = [
  {
    id: 1,
    category: "skincare",
    tag: "Skincare",
    title:
      "Seasonal Skincare Guide for Malaysia's Climate (Wet vs Dry Seasons)",
    date: "February 6, 2026",
    readTime: "5 min read",
    image: "/images/blog-s.png",
    href: "https://www.nexus-clinic.com/en/seasonal-skincare-guide-for-malaysias-climate-wet-vs-dry-seasons/",
    featured: true,
  },
  {
    id: 2,
    category: "weight",
    tag: "Weight Loss",
    title:
      "Hormones, Weight Gain & Medical Weight Loss: What Patients Should Know",
    date: "February 6, 2026",
    readTime: "7 min read",
    image: "/images/blog-w.png",
    href: "https://www.nexus-clinic.com/en/hormones-weight-gain-medical-weight-loss-what-patients-should-know/",
    featured: false,
  },
  {
    id: 3,
    category: "skincare",
    tag: "Skincare",
    title: "Daily Skincare Routine After Aesthetic Treatments",
    date: "February 6, 2026",
    readTime: "4 min read",
    image: "/images/blog-s.png",
    href: "https://www.nexus-clinic.com/en/daily-skincare-routine-after-aesthetic-treatments/",
    featured: false,
  },
  {
    id: 4,
    category: "weight",
    tag: "Weight Loss",
    title: "Weight Loss Clinics in Malaysia: Costs, Options & What to Expect",
    date: "February 6, 2026",
    readTime: "6 min read",
    image: "/images/blog-w.png",
    href: "https://www.nexus-clinic.com/en/weight-loss-clinics-in-malaysia-costs-options-what-to-expect/",
    featured: false,
  },
  {
    id: 5,
    category: "skincare",
    tag: "Laser",
    title: "Laser Treatments for Acne & Pigmentation in Malaysian Skin Types",
    date: "February 6, 2026",
    readTime: "5 min read",
    image: "/images/blog-s.png",
    href: "https://www.nexus-clinic.com/en/laser-treatments-for-acne-pigmentation-in-malaysian-skin-types/",
    featured: false,
  },
  {
    id: 6,
    category: "treatments",
    tag: "Clinic Guide",
    title:
      "How to Choose the Right Aesthetic Clinic in Kuala Lumpur: A Practical Checklist",
    date: "February 6, 2026",
    readTime: "6 min read",
    image: "/images/blog-w.png",
    href: "https://www.nexus-clinic.com/en/how-to-choose-the-right-aesthetic-clinic-in-kuala-lumpur-a-practical-checklist/",
    featured: false,
  },
  {
    id: 7,
    category: "aging",
    tag: "Anti-Aging",
    title:
      "Best Non-Surgical Anti-Aging Treatments Available in Kuala Lumpur (2026 Update)",
    date: "February 6, 2026",
    readTime: "8 min read",
    image: "/images/blog-f.png",
    href: "https://www.nexus-clinic.com/en/best-non-surgical-anti-aging-treatments-available-in-kuala-lumpur-2026-update/",
    featured: false,
  },
  {
    id: 8,
    category: "weight",
    tag: "GLP-1",
    title:
      "All About GLP-1 Weight Loss Medications in Malaysia: Ozempic vs Wegovy vs Saxenda",
    date: "February 5, 2026",
    readTime: "9 min read",
    image: "/images/blog-w.png",
    href: "https://www.nexus-clinic.com/en/all-about-glp-1-weight-loss-medications-in-malaysia-ozempic-vs-wegovy-vs-saxenda/",
    featured: false,
  },
  {
    id: 9,
    category: "treatments",
    tag: "First Visit",
    title:
      "What to Expect During Your First Aesthetic Consultation in Malaysia",
    date: "February 5, 2026",
    readTime: "4 min read",
    image: "/images/blog-f.png",
    href: "https://www.nexus-clinic.com/en/what-to-expect-during-your-first-aesthetic-consultation-in-malaysia/",
    featured: false,
  },
];

const tagColors: Record<string, TagColorConfig> = {
  Skincare: { bg: "bg-rose-50", text: "text-rose-600", dot: "bg-rose-400" },
  "Weight Loss": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  Laser: { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-400" },
  "Anti-Aging": { bg: "bg-teal-50", text: "text-teal-600", dot: "bg-teal-400" },
  "Clinic Guide": {
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-400",
  },
  "GLP-1": {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  "First Visit": {
    bg: "bg-pink-50",
    text: "text-pink-600",
    dot: "bg-pink-400",
  },
};

const defaultTagColor: TagColorConfig = {
  bg: "bg-gray-100",
  text: "text-gray-600",
  dot: "bg-gray-400",
};

const sectionNumber = (n: string): React.ReactNode => (
  <span
    className="text-8xl font-bold opacity-5 select-none leading-none absolute -top-4 -left-2 pointer-events-none"
    style={{ fontFamily: "Georgia, serif", color: "var(--color-wine)" }}
  >
    {n}
  </span>
);

interface TagBadgeProps {
  tag: string;
}

function TagBadge({ tag }: TagBadgeProps) {
  const c: TagColorConfig = tagColors[tag] ?? defaultTagColor;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${c.bg} ${c.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {tag}
    </span>
  );
}

interface FeaturedCardProps {
  post: Post;
}

function FeaturedCard({ post }: FeaturedCardProps) {
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      style={{ background: "var(--color-cream)" }}
    >
      <a href={post.href} className="block">
        {/* Image */}
        <div className="relative overflow-hidden h-72 lg:h-80">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute top-4 left-4">
            <TagBadge tag={post.tag} />
          </div>

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest text-taupe border border-taupe/40 bg-white/10 backdrop-blur-sm uppercase">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div
            className="flex items-center gap-4 mb-4"
            style={{ color: "var(--color-taupe)" }}
          >
            <span className="flex items-center gap-1.5 text-sm">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5 text-sm">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h2
            className="text-xl lg:text-2xl font-bold leading-snug mb-4 transition-colors duration-200 group-hover:text-wine"
            style={{
              fontFamily: "Georgia, serif",
              color: "var(--color-brown)",
            }}
          >
            {post.title}
          </h2>

          <div
            className="flex items-center gap-2 font-semibold text-sm tracking-wide transition-all duration-200 group-hover:gap-3"
            style={{ color: "var(--color-wine)" }}
          >
            Read Article
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </a>
    </motion.article>
  );
}

interface BlogCardProps {
  post: Post;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer border"
      style={{
        background: "var(--color-light)",
        borderColor: "rgba(172,153,144,0.2)",
      }}
    >
      <a href={post.href} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <TagBadge tag={post.tag} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div
            className="flex items-center gap-3 mb-3"
            style={{ color: "var(--color-taupe)" }}
          >
            <span className="flex items-center gap-1 text-xs">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
            <span className="flex items-center gap-1 text-xs">
              {post.readTime}
            </span>
          </div>

          <h3
            className="text-base font-bold leading-snug mb-4 flex-1 transition-colors duration-200 group-hover:text-wine line-clamp-3"
            style={{
              fontFamily: "Georgia, serif",
              color: "var(--color-brown)",
            }}
          >
            {post.title}
          </h3>

          <div
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wide mt-auto pt-3 border-t transition-all duration-200 group-hover:gap-2.5"
            style={{
              color: "var(--color-wine)",
              borderColor: "rgba(172,153,144,0.2)",
            }}
          >
            Read More
            <ChevronRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </a>
    </motion.article>
  );
}

interface SidebarCardProps {
  post: Post;
}

function SidebarCard({ post }: SidebarCardProps) {
  return (
    <motion.article
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className="group flex gap-4 p-4 rounded-2xl border cursor-pointer"
      style={{
        background: "var(--color-light)",
        borderColor: "rgba(172,153,144,0.2)",
      }}
    >
      <a href={post.href} className="flex gap-4 w-full">
        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <TagBadge tag={post.tag} />
          <h3
            className="text-sm font-bold leading-snug line-clamp-2 transition-colors group-hover:text-wine"
            style={{
              fontFamily: "Georgia, serif",
              color: "var(--color-brown)",
            }}
          >
            {post.title}
          </h3>
          <span className="text-xs" style={{ color: "var(--color-taupe)" }}>
            {post.date}
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  const featured: Post | undefined = posts.find((p) => p.featured);

  const filtered: Post[] = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCat && matchSearch && !p.featured;
  });

  const handleMouseEnter = (e: any): void => {
    e.currentTarget.style.background = "var(--color-wine)";
    e.currentTarget.style.color = "white";
  };

  const handleMouseLeave = (e: any): void => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--color-wine)";
  };

  const activeSectionNumber: string =
    activeCategory === "all" && !searchQuery ? "02" : "01";

  const sectionTitle: string = searchQuery
    ? `Results for "${searchQuery}"`
    : activeCategory === "all"
      ? "Latest Articles"
      : (categories.find((c) => c.value === activeCategory)?.label ??
        "Articles");

  return (
    <>
      <main
        className="min-h-screen"
        style={{
          background: "var(--color-cream)",
          fontFamily: "var(--font-inter)",
        }}
      >
        {/* ─── Hero Banner ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24"
          style={{
            background:
              "linear-linear(135deg, var(--color-brown) 0%, var(--color-wine) 60%, #6b2d37 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
            style={{ background: "var(--color-rose)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"
            style={{ background: "var(--color-taupe)" }}
          />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <span
                  className="w-10 h-px"
                  style={{ background: "var(--color-rose)" }}
                />
                <span className="text-xs font-semibold tracking-widest uppercase text-taupe/60">
                  Nexus Clinic · Insights
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold text-rose mb-6 leading-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The{" "}
                <em
                  className="not-italic"
                  style={{ color: "var(--color-rose)" }}
                >
                  Journal
                </em>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-taupe/70 text-lg max-w-xl mb-10 leading-relaxed"
              >
                Expert insights on aesthetics, skincare, and transformative
                wellness — curated by our doctors for your journey.
              </motion.p>

              {/* Search bar */}
              <motion.div variants={scaleIn} className="relative max-w-md">
                <div
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300"
                  style={{
                    background: searchFocused
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(255,255,255,0.1)",
                    border: `1px solid ${
                      searchFocused
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(255,255,255,0.2)"
                    }`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Search size={16} className="text-white/50 shrink-0" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    placeholder="Search articles..."
                    className="bg-transparent text-white placeholder-white/40 text-sm outline-none flex-1"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── Category Filter ──────────────────────────────────────────────── */}
        <section
          className="sticky top-0 z-30 border-b"
          style={{
            background: "rgba(243,239,238,0.92)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(172,153,144,0.25)",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              <Filter
                size={14}
                className="shrink-0 mr-2"
                style={{ color: "var(--color-taupe)" }}
              />
              {categories.map((cat) => {
                const isActive: boolean = activeCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0"
                    style={{
                      color: isActive ? "white" : "var(--color-brown)",
                      background: isActive
                        ? "var(--color-wine)"
                        : "transparent",
                    }}
                  >
                    {cat.icon}
                    {cat.label}
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ background: "var(--color-wine)" }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          {/* Featured Section */}
          {activeCategory === "all" && !searchQuery && featured && (
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <motion.div
                variants={fadeInLeft}
                className="flex items-center gap-4 mb-8"
              >
                <div className="relative">
                  {sectionNumber("01")}
                  <h2
                    className="relative text-2xl font-bold pl-4"
                    style={{
                      fontFamily: "Georgia, serif",
                      color: "var(--color-brown)",
                    }}
                  >
                    Featured Story
                  </h2>
                </div>
                <div
                  className="flex-1 h-px"
                  style={{
                    background:
                      "linear-linear(to right, rgba(172,153,144,0.4), transparent)",
                  }}
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <FeaturedCard post={featured} />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                  {posts.slice(1, 3).map((p) => (
                    <SidebarCard key={p.id} post={p} />
                  ))}

                  {/* Promo pill */}
                  <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between"
                    style={{
                      background:
                        "linear-linear(135deg, var(--color-wine), var(--color-rose))",
                      minHeight: "120px",
                    }}
                  >
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 translate-x-8 -translate-y-8"
                      style={{ background: "white" }}
                    />
                    <p className="text-taupe/80 text-xs font-semibold tracking-widest uppercase mb-2">
                      Limited Offer
                    </p>
                    <p
                      className="text-taupe font-bold text-lg leading-snug"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Claim your RM100 Voucher
                    </p>
                    <a
                      href="https://wa.link/q64h1l"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-taupe/90 hover:text-taupe transition-colors"
                    >
                      Chat with doctor now <ArrowUpRight size={13} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* All Articles Grid */}
          <section>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <div className="relative">
                {sectionNumber(activeSectionNumber)}
                <h2
                  className="relative text-2xl font-bold pl-4"
                  style={{
                    fontFamily: "Georgia, serif",
                    color: "var(--color-brown)",
                  }}
                >
                  {sectionTitle}
                </h2>
              </div>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(140,79,88,0.1)",
                  color: "var(--color-wine)",
                }}
              >
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={activeCategory + searchQuery}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <Search
                    size={36}
                    className="mb-4 opacity-30"
                    style={{ color: "var(--color-taupe)" }}
                  />
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    No articles found
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Try a different search or category
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Load More */}
          {filtered.length > 0 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              <button
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 border"
                style={{
                  color: "var(--color-wine)",
                  borderColor: "var(--color-wine)",
                  background: "transparent",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Load More Articles
                <ChevronRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          )}
        </main>

        {/* ─── Newsletter Strip ─────────────────────────────────────────────── */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-6 lg:mx-12 mb-16 rounded-3xl overflow-hidden relative"
          style={{
            background:
              "linear-linear(120deg, var(--color-brown) 0%, var(--color-wine) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-taupe/50 mb-2">
                Stay informed
              </p>
              <h3
                className="text-3xl lg:text-4xl font-bold text-taupe mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Wellness in your inbox.
              </h3>
              <p className="text-taupe/60 text-sm">
                Expert tips, treatment guides, and exclusive offers — monthly.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 lg:w-64 px-5 py-3.5 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
              <button
                className="px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shrink-0 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--color-rose)", color: "white" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
