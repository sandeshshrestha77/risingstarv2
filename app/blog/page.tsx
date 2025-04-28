"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getBlogPosts, getBlogCategories, searchBlogPosts, getPaginatedPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"
import { CategoryFilter } from "@/components/category-filter"
import { SearchBar } from "@/components/search-bar"
import { Pagination } from "@/components/pagination"
import type { BlogPost } from "@/types/blog"

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true)

  const POSTS_PER_PAGE = 6

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const posts = getBlogPosts()
      const allCategories = getBlogCategories()

      setAllPosts(posts)
      setFilteredPosts(posts)
      setCategories(allCategories)

      const { posts: paginatedPosts, totalPages: pages } = getPaginatedPosts(1, POSTS_PER_PAGE, posts)
      setDisplayedPosts(paginatedPosts)
      setTotalPages(pages)

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)

    let newFilteredPosts = allPosts

    if (category) {
      newFilteredPosts = allPosts.filter((post) => post.category === category)
    }

    if (searchQuery) {
      newFilteredPosts = newFilteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredPosts(newFilteredPosts)

    const { posts: paginatedPosts, totalPages: pages } = getPaginatedPosts(1, POSTS_PER_PAGE, newFilteredPosts)
    setDisplayedPosts(paginatedPosts)
    setTotalPages(pages)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)

    let searchResults = allPosts

    if (query) {
      searchResults = searchBlogPosts(query)
    }

    if (selectedCategory) {
      searchResults = searchResults.filter((post) => post.category === selectedCategory)
    }

    setFilteredPosts(searchResults)

    const { posts: paginatedPosts, totalPages: pages } = getPaginatedPosts(1, POSTS_PER_PAGE, searchResults)
    setDisplayedPosts(paginatedPosts)
    setTotalPages(pages)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const { posts: paginatedPosts } = getPaginatedPosts(page, POSTS_PER_PAGE, filteredPosts)
    setDisplayedPosts(paginatedPosts)

    window.scrollTo({
      top: document.getElementById("blog-results")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  const featuredPost = filteredPosts[0]

  return (
    <div className="min-h-screen">
      <section className="bg-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-primary/5 px-4 py-2 border border-primary/10 mb-6">
            <span className="text-sm font-medium text-primary">Our Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Latest Updates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest news, events, and stories from Sikkim Rising Star.
          </p>
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : featuredPost ? (
            <BlogCard post={featuredPost} variant="featured" />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No posts found</h3>
            </div>
          )}
        </div>
      </section>

      <section id="blog-results" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-gray-600">Browse our complete collection of articles</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <CategoryFilter categories={categories} onSelectCategory={handleCategorySelect} />

            {searchQuery && (
              <div className="bg-primary/5 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-sm">
                  Search results for: <strong>{searchQuery}</strong>
                </span>
                <Button variant="ghost" size="sm" onClick={() => handleSearch("")} className="h-6 text-xs">
                  Clear
                </Button>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : displayedPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-600 mb-4">
                {searchQuery ? `No posts found matching "${searchQuery}"` : "No posts found in this category"}
              </h3>
              <Button
                onClick={() => {
                  handleSearch("")
                  handleCategorySelect(null)
                }}
              >
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
