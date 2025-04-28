import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/blog"

interface RecentPostsProps {
  posts: BlogPost[]
  currentPostId?: string
}

export function RecentPosts({ posts, currentPostId }: RecentPostsProps) {
  const filteredPosts = currentPostId
    ? posts.filter((post) => post.id !== currentPostId).slice(0, 3)
    : posts.slice(0, 3)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Recent Articles</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] duration-300"
            >
              <div className="relative h-52">
                <Image
                  src={post.image || "/placeholder.svg?height=200&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.date)}</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full ml-auto">{post.category}</span>
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar || "/placeholder.svg?height=24&width=24"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-600">{post.author.name}</span>
                  </div>
                  <span className="text-primary text-xs font-medium group-hover:underline">Read more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
