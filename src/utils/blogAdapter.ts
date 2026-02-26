import type { WordPressPost } from '../types/wordpress';
import type { Post, CategoryValue } from '../types/blog';

// Map WordPress categories to your app's category values
const categoryMapping: Record<string, CategoryValue> = {
  'skincare': 'skincare',
  'weight-loss': 'weight',
  'anti-aging': 'aging',
  'treatments': 'treatments',
};

function getCategoryFromWordPress(post: WordPressPost): Omit<CategoryValue, "all"> {
  const terms = post._embedded?.['wp:term'] || [];
  const categories = terms.flat().filter(term => term.taxonomy === 'category');
  
  for (const category of categories) {
    const mappedCategory = categoryMapping[category.slug];
    if (mappedCategory && mappedCategory !== 'all') {
      return mappedCategory;
    }
  }
  
  return 'skincare';
}

function getTagFromWordPress(post: WordPressPost): string {
  const terms = post._embedded?.['wp:term'] || [];
  const tags = terms.flat().filter(term => term.taxonomy === 'post_tag');
  return tags[0]?.name || 'Article';
}

function getReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function adaptWordPressPost(post: WordPressPost, index: number): Post {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                        post.jetpack_featured_media_url || 
                        '/images/blog-default.png';
  
  return {
    id: post.id,
    category: getCategoryFromWordPress(post),
    tag: getTagFromWordPress(post),
    title: post.title.rendered,
    content: post.content.rendered, // Add this line
    date: formatDate(post.date),
    readTime: getReadTime(post.content.rendered), // Use full content for accuracy
    image: featuredImage,
    href: `https://blog.nexus-clinic.com/${post.slug}/`,
    featured: index === 0,
  };
}

export function adaptWordPressPosts(posts: WordPressPost[]): Post[] {
  return posts.map((post, index) => adaptWordPressPost(post, index));
}