import type { ReactNode } from "react";

export type CategoryValue = "all" | "skincare" | "weight" | "aging" | "treatments";

export interface Category {
  label: string;
  icon: ReactNode;
  value: CategoryValue;
}

export interface Post {
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

export interface TagColorConfig {
  bg: string;
  text: string;
  dot: string;
}