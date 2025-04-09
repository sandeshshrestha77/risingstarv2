import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, Search, Tag, User } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <>
      {/* Recent Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Posts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Catch up on the latest news and stories from our talent hunt competitions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-3 w-3 text-primary" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest news, events, and stories from Sikkim&apos;s Premier Talent Hunt.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Sample data
const categories = ["Events", "Success Stories", "Interviews", "Behind the Scenes", "Announcements"]

const recentPosts = [
  {
    id: 1,
    title: "Top 10 Moments from Dance Sikkim Dance 2022",
    date: "May 10, 2023",
    category: "Events",
    excerpt:
      "Relive the most spectacular performances from last year's dance competition that left the audience spellbound.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "top-moments-dance-sikkim",
  },
  {
    id: 2,
    title: "From Sikkim to Bollywood: Priya's Journey",
    date: "May 5, 2023",
    category: "Success Stories",
    excerpt: "How our 2019 dance competition winner made her way to choreographing for major Bollywood productions.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sikkim-to-bollywood",
  },
  {
    id: 3,
    title: "Judges Announced for Sikkim Idol 2023",
    date: "April 30, 2023",
    category: "Announcements",
    excerpt:
      "Meet the panel of esteemed judges who will be evaluating performances in this year's singing competition.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "judges-sikkim-idol-2023",
  },
  {
    id: 4,
    title: "Talent Hunt Workshop: Preparing for Auditions",
    date: "April 25, 2023",
    category: "Events",
    excerpt: "Join our free workshop to learn tips and tricks to ace your audition from previous winners and judges.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "workshop-audition-preparation",
  },
  {
    id: 5,
    title: "The Impact of Talent Hunts on Sikkim's Cultural Scene",
    date: "April 20, 2023",
    category: "Behind the Scenes",
    excerpt:
      "How talent competitions have revitalized and transformed the cultural landscape of Sikkim over the years.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "impact-cultural-scene",
  },
  {
    id: 6,
    title: "Sponsorship Opportunities for Sikkim's Got Talent 2023",
    date: "April 15, 2023",
    category: "Announcements",
    excerpt: "Learn how your business can partner with Sikkim's biggest talent platform and reach a wider audience.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sponsorship-opportunities",
  },
]
