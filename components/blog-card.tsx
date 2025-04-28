import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { calculateReadingTime } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "featured"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const readingTime = calculateReadingTime(post.content)

  if (variant === "featured") {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=600"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
            priority
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{readingTime} min read</span>
          </div>
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Read More
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] duration-300">
      <div className="relative h-48">
        <Image
          src={post.image || "/placeholder.svg?height=200&width=400"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
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
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{readingTime} min read</span>
          <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium flex items-center">
            Read More
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
