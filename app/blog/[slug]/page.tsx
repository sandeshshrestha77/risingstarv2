import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRecentBlogPosts, formatDate, calculateReadingTime, getBlogPosts } from "@/lib/blog"
import { Calendar, User, Tag, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShareButtons } from "@/components/share-buttons"
import { RelatedPosts } from "@/components/related-posts"
import "./blog.css"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch (error) {
    return { title: "Blog Post Not Found", description: "The requested blog post could not be found." };
  }

  if (!post) {
    return { title: "Blog Post Not Found", description: "The requested blog post could not be found." };
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
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://sikkimrisingstar.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const readingTime = calculateReadingTime(post.content)
  const recentPosts = await getRecentBlogPosts(3, post.id)
  const allPosts = await getBlogPosts()

  return (
    <>
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
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="blog-meta-item">
                <Tag className="h-4 w-4 text-primary" />
                <span>{post.category}</span>
              </div>
              <div className="blog-meta-item">
                <User className="h-4 w-4 text-primary" />
                <span>{post.author.name}</span>
              </div>
              <div className="blog-meta-item">
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="blog-feature-image relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg?height=500&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div
                className="blog-content prose prose-lg prose-blue max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-lg px-6 py-8 md:px-12 md:py-10 border border-gray-100 text-gray-900 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                    {post.category}
                  </span>
                </div>
                <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
              </div>

              <div className="author-card mt-12 flex gap-4 items-center">
                <div className="author-avatar relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=64&width=64"}
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
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 transition-transform hover:shadow-2xl duration-300">
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        href={`/blog/${recentPost.slug}`}
                        className="group flex gap-4 items-start rounded-lg hover:bg-primary/5 transition-colors duration-200 p-2 -mx-2"
                      >
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={recentPost.image || "/placeholder.svg?height=64&width=64"}
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
                          <p className="text-xs text-gray-500">{formatDate(recentPost.date)}</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
