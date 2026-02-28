import { wordpressService } from "@/src/services/wordpress";
import { adaptWordPressPost } from "@/src/utils/blogAdapter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SingleBlogPost } from "@/src/components/blog/SingleBlogPost";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/src/components/blog/ShareButton"; 

// This must be at the top level, not inside any function
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  // Add error handling for params
  if (!params) {
    return {
      title: "Blog Post Not Found",
    };
  }
  
  try {
    const { slug } = await params;
    
    if (!slug) {
      return {
        title: "Blog Post Not Found",
      };
    }
    
    const wordPressPost = await wordpressService.getPost(slug);
    
    if (!wordPressPost) {
      return {
        title: "Blog Post Not Found",
      };
    }
    
    const post = adaptWordPressPost(wordPressPost, 0);
    // console.log('Generating metadata for post:', post);
    
    return {
      title: post.title.replace(/<[^>]*>/g, ''),
      description: post.content ? post.content.substring(0, 300).replace(/<[^>]*>/g, '') : "Read our latest blog post",
      // alternates: {
      //   canonical: `https://www.nexus-clinic.com/blogs/${slug}`,
      // },
      openGraph: {
        title: post.title.replace(/<[^>]*>/g, ''),
        description: post.content ? post.content.substring(0, 400).replace(/<[^>]*>/g, '') : "Read our latest blog post",
        images: post.image ? [post.image] : [],
      },
      other: {
          'published_date': post.date,
          'modified_date': post.date,
        }
      }
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Add null check for params
  if (!params) {
    notFound();
  }
  
  try {
    const { slug } = await params;
    
    if (!slug) {
      notFound();
    }
    
    const wordPressPost = await wordpressService.getPost(slug);
    
    if (!wordPressPost) {
      notFound();
    }

    const post = adaptWordPressPost(wordPressPost, 0);
    return (
      <>
        <main className="min-h-screen bg-cream">
          <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title.replace(/<[^>]*>/g, '')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 lg:px-12 pb-16">
              <Link 
                href="/blogs" 
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
              
              <span 
                className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-wine text-white text-xs font-semibold rounded-full">
                  {post.tag}
                </span>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <article>
              <SingleBlogPost content={post.content || ''} />
            </article>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-taupe/20">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  href="/blogs" 
                  className="flex items-center gap-2 text-wine hover:gap-3 transition-all"
                >
                  <ArrowLeft size={16} />
                  Back to all articles
                </Link>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-taupe">Share:</span>
                  <div className="flex gap-2">
                    {['facebook', 'twitter', 'linkedin'].map((platform) => (
                      <ShareButton
                        key={platform}
                        platform={platform}
                        title={post.title.replace(/<[^>]*>/g, '')}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}
