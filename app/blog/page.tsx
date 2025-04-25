import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { getBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog - Latest News & Updates",
  description: "Stay updated with the latest news, event highlights, and success stories from Sikkim Rising Star. Read about our winners, upcoming events, and talent tips.",
  openGraph: {
    title: "Sikkim Rising Star Blog - News & Stories",
    description: "Get the latest updates from Sikkim's premier talent platform. Read about event highlights, winner stories, and upcoming competitions.",
    images: [{ url: '/s4 main.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://sikkimrisingstar.com/blog",
  },
}

export default async function BlogPage() {
  const posts = getBlogPosts();
  const featuredPost = posts[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block rounded-lg bg-primary/5 px-4 py-2 border border-primary/10 mb-6">
              <span className="text-sm font-medium text-primary">Our Blog</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Latest Updates</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, events, and stories from Sikkim Rising Star.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {featuredPost && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                <p className="text-gray-600">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-gray-600">Browse our complete collection of articles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}