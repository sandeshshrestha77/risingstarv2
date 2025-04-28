import type { BlogPost } from "@/types/blog"

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Season 4 Announced – Bigger and Better Than Ever",
    slug: "season-4-announced",
    date: "April 22, 2025",
    category: "Announcements",
    excerpt: "Sikkim Rising Star returns with its biggest season yet. Here's what to expect.",
    content: `
      <p>The stage is set. The spotlight is on. Sikkim Rising Star Season 4 is officially here—and it's bigger, bolder, and brimming with talent!</p>
  
      <h2>Registration Now Open</h2>
      <p>Registrations for Season 4 are now open! Whether you're a singer, dancer, actor, rapper, or have a unique talent, this is your chance to shine. The competition is fierce, and the spotlight awaits!</p>
  
      <h2>Audition Dates</h2>
      <p>Mark your calendars! Auditions are scheduled for:</p>
      <ul>
        <li><strong>June 7, 2025</strong></li>
        <li><strong>June 8, 2025</strong></li>
      </ul>
      <p>Prepare your best performance and get ready to showcase your talent to the world.</p>
  
      <h2>Competition Format</h2>
      <p>Season 4 introduces an exciting new format:</p>
      <ul>
        <li>Multiple performance categories</li>
        <li>Enhanced judging criteria</li>
        <li>Live audience voting</li>
        <li>Exclusive mentorship opportunities</li>
      </ul>
      <p>This revamped format ensures a dynamic and engaging experience for both participants and viewers.</p>
  
      <h2>Get Ready to Shine</h2>
      <p>The wait is almost over! Sikkim Rising Star Season 4 is just around the corner. Stay tuned for more updates and get ready to witness the rise of new stars!</p>
    `,
    image: "/s4 main.jpg",
    author: {
      name: "Sikkim Rising Star Team",
      avatar: "/favicon.ico",
    },
  },
]

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPostBySlug(slug: string) {
  const post = blogPosts.find((post) => post.slug === slug)
  if (post) return post

  return blogPosts.find((post) => {
    const generatedSlug = post.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
    return generatedSlug === slug
  })
}

export function getRecentBlogPosts(count = 3, excludeId?: string) {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  let filteredPosts = blogPosts

  if (excludeId) {
    filteredPosts = filteredPosts.filter((post) => post.id !== excludeId)
  }

  const recentPosts = filteredPosts.filter((post) => {
    const postDate = new Date(post.date)
    return postDate >= sevenDaysAgo
  })

  if (recentPosts.length < count) {
    return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
  }

  return recentPosts.slice(0, count)
}

export function getBlogCategories() {
  const categories = new Set<string>()
  blogPosts.forEach((post) => {
    if (post.category) categories.add(post.category)
  })
  return Array.from(categories)
}

export function searchBlogPosts(query: string) {
  const searchTerm = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm),
  )
}

export function getRelatedPosts(postId: string, category: string, count = 3) {
  return blogPosts.filter((post) => post.id !== postId && post.category === category).slice(0, count)
}

export function getPaginatedPosts(page = 1, postsPerPage = 6, filteredPosts = blogPosts) {
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredPosts.length / postsPerPage),
  }
}

/**
 * Formats a date string into a more readable format
 * @param dateString Date string in any valid format
 * @returns Formatted date string (e.g., "April 22, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Estimates reading time based on content length
 * @param content The blog post content
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const textOnly = content.replace(/<[^>]*>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Generates a share URL for social media
 * @param platform The social media platform
 * @param url The URL to share
 * @param title The title of the content
 * @returns A properly formatted share URL
 */
export function getShareUrl(platform: "twitter" | "facebook" | "linkedin", url: string, title: string): string {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    default:
      return "#"
  }
}
