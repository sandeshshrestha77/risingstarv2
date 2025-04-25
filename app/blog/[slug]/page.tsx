import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRecentBlogPosts } from "@/lib/blog";
import { Calendar, User, Tag, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./blog.css";

export async function generateStaticParams() {
  const posts = await getRecentBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        }
      ]
    },
    alternates: {
      canonical: `https://sikkimrisingstar.com/blog/${params.slug}`
    }
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);
  const recentPosts = await getRecentBlogPosts(3);

  if (!post) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-primary mb-2">
                <Link href="/blog" className="hover:underline flex items-center gap-1">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Blog
                </Link>
                <span className="text-gray-400">|</span>
                <span className="blog-tag">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                {post.title}
              </h1>
            </div>
            <div className="blog-info mt-4">
              <div className="blog-meta-item">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="blog-meta-item">
                <Tag className="h-4 w-4 text-primary" />
                <span>{post.category}</span>
              </div>
              <div className="blog-meta-item">
                <User className="h-4 w-4 text-primary" />
                <span>{post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="w-full py-6">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="blog-feature-image relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image 
              src={post.image || "/placeholder.svg"} 
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="blog-content prose prose-lg prose-blue" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Author Bio */}
              <div className="author-card">
                <div className="author-avatar relative w-16 h-16 flex-shrink-0">
                  <Image 
                    src={post.author.avatar || "/placeholder.svg"} 
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{post.author.name}</h4>
                  <p className="text-gray-600 text-sm">Content Writer</p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between border-t border-b border-gray-200 py-6">
                <Link href="/blog">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link 
                        key={recentPost.id} 
                        href={`/blog/${recentPost.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image 
                            src={recentPost.image || "/placeholder.svg"} 
                            alt={recentPost.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {recentPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">{recentPost.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/blog">
                      <Button variant="outline" className="w-full">
                        View All Posts
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-6 mt-6 shadow-sm border border-primary/10">
                  <h3 className="text-xl font-bold mb-4 text-primary">Subscribe</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest posts delivered straight to your inbox.
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}