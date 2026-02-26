import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../lib/animations";

// Components
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroBanner } from "../components/blog/HeroBanner";
import { CategoryFilter } from "../components/blog/CategoryFilter";
import { FeaturedCard } from "../components/blog/FeaturedCard";
import { BlogCard } from "../components/blog/BlogCard";
import { SidebarCard } from "../components/blog/SidebarCard";
import { PromoCard } from "../components/blog/PromoCard";
import { NewsletterStrip } from "../components/blog/NewsletterStrip";
import { SectionHeader } from "../components/blog/SectionHeader";
import { LoadMoreButton } from "../components/blog/LoadMoreButton";
import { EmptyState } from "../components/blog/EmptyState";

// Data & Constants
import { posts } from "../data/post";
import { categories } from "../constants/blog";
import type { CategoryValue } from "../types/blog";
import { fadeInUp } from "../lib/animations";

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  const featured = posts.find((p) => p.featured);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCat && matchSearch && !p.featured;
  });

  const activeSectionNumber = activeCategory === "all" && !searchQuery ? "02" : "01";

  const sectionTitle = searchQuery
    ? `Results for "${searchQuery}"`
    : activeCategory === "all"
    ? "Latest Articles"
    : (categories.find((c) => c.value === activeCategory)?.label ?? "Articles");

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen"
        style={{
          background: "var(--color-cream)",
          fontFamily: "var(--font-inter)",
        }}
      >
        <HeroBanner
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
        />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

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
              <SectionHeader number="01" title="Featured Story" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <FeaturedCard post={featured} />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                  {posts.slice(1, 3).map((p) => (
                    <SidebarCard key={p.id} post={p} />
                  ))}
                  <PromoCard />
                </div>
              </div>
            </motion.section>
          )}

          {/* All Articles Grid */}
          <section>
            <SectionHeader 
              number={activeSectionNumber} 
              title={sectionTitle} 
              count={filtered.length} 
            />

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
                <EmptyState />
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
              <LoadMoreButton onClick={() => console.log("Load more")} />
            </motion.div>
          )}
        </main>

        <NewsletterStrip />
      </main>
      <Footer />
    </>
  );
}