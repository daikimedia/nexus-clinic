import type { Post } from "../types/blog";

export const posts: Post[] = [
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
  // ... rest of the posts
];