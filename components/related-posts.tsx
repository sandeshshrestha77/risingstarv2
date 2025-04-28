import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/blog"

interface RelatedPostsProps {
  currentPostId: string
  posts: BlogPost[]
  category: string
}

export function RelatedPosts({ currentPostId, posts, category }: RelatedPostsProps) {
  const relatedPosts = posts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block bg-gray-50 rounded-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
          >
            <div className="relative h-48">
              <Image
                src={post.image || "/placeholder.svg?height=200&width=400"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
