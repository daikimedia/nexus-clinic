// src/app/blogs/page.tsx
import BlogPage from "@/src/components/blog/BlogsPage";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <BlogPage />;
}