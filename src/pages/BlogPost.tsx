import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { wordpressService } from "../services/wordpress";
import { adaptWordPressPost } from "../utils/blogAdapter";
import { SingleBlogPost } from "../components/blog/SingleBlogPost";
import type { Post } from "../types/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("No slug provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const wordPressPost = await wordpressService.getPost(slug);

        if (!wordPressPost) {
          setError("Post not found");
          return;
        }

        const adaptedPost = adaptWordPressPost(wordPressPost, 0);
        setPost(adaptedPost);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load blog post",
        );
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const generateTOC = (content: string) => {
    const headingRegex = /<h2.*?>(.*?)<\/h2>/g;
    const matches = [...content.matchAll(headingRegex)];

    if (matches.length === 0) return null;

    return matches.map((match, index) => {
      const title = match[1].replace(/<[^>]*>/g, "");
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return { id, title, index };
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wine"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center py-24">
          <h2 className="text-2xl font-bold text-brown mb-4">Post Not Found</h2>
          <p className="text-taupe mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link
            to="/blogs"
            className="flex items-center gap-2 px-6 py-3 bg-wine text-white rounded-xl hover:bg-opacity-90 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // const toc = generateTOC(post.content || '');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title.replace(/<[^>]*>/g, "")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 lg:px-12 pb-16">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to all articles
            </Link>

            <div className="flex items-center gap-4 text-white/70 mb-4">
              <span className="flex items-center gap-1.5 text-sm">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1.5 text-sm">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-rose-600 text-white text-xs font-semibold rounded-full">
                {post.tag}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          {/* {toc && toc.length > 1 && (
            <div className="mb-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-taupe/10 sticky top-24 z-10">
              <h3 className="text-lg font-bold text-brown mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Table of Contents
              </h3>
              <nav className="flex flex-wrap gap-3">
                {toc.map((item) => (
                  <a
                    key={item.index}
                    href={`#${item.id}`}
                    className="text-sm text-taupe hover:text-wine transition-colors px-3 py-1 bg-cream rounded-full"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )} */}

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SingleBlogPost content={post.content || ""} />
          </motion.article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-taupe/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                to="/blogs"
                className="flex items-center gap-2 text-wine hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                Back to all articles
              </Link>

              <div className="flex items-center gap-4">
                <span className="text-sm text-taupe">Share:</span>
                <div className="flex gap-2">
                  {["facebook", "twitter", "linkedin"].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => {
                        const urls = {
                          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title.replace(/<[^>]*>/g, ""))}`,
                          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                        };
                        window.open(
                          urls[platform as keyof typeof urls],
                          "_blank",
                        );
                      }}
                      className="p-2 rounded-full bg-rose/10 text-wine hover:bg-rose/20 transition-colors"
                    >
                      <span className="sr-only capitalize">{platform}</span>
                      {platform === "facebook" && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                      {platform === "twitter" && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.665-3.603c.241-.442.452-.898.632-1.365a10.025 10.025 0 001.651-3.323c.165-.62.248-1.26.248-1.9 0-.145-.007-.29-.02-.434.963-.716 1.8-1.56 2.46-2.548z" />
                        </svg>
                      )}
                      {platform === "linkedin" && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
