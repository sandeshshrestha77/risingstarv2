import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Mic, Star, Trophy } from "lucide-react"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  // Sample sponsors data
  const sponsors = [
    { name: "Sponsor 1", logo: "/sandesh logo.png" },
    { name: "Sponsor 2", logo: "/rod logo.png" },
    { name: "Sponsor 3", logo: "/falanocrafts logo.png" },

  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Sikkim's Premier Talent Hunt Competition
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Discovering extraordinary talents since 2018. Join us in celebrating the diverse talents across
                  Sikkim.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/events">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="text-primary">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Talent Hunt Performance"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2"></div>
        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Featured Events</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Competitions</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Don't miss your chance to showcase your talent and win amazing prizes.
        </p>
          </div>
          <div className="flex justify-center mt-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md max-w-2xl w-full"
          >
            <div className="relative aspect-[16/9] w-full">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-base">{event.date}</span>
            <MapPin className="h-5 w-5 text-primary ml-4" />
            <span className="text-base">{event.location}</span>
          </div>
          <h3 className="text-2xl font-bold">{event.title}</h3>
          <p className="mt-3 text-gray-500 text-lg">{event.description}</p>
          <div className="mt-6">
            <Link href={`/events/${event.id}`}>
              <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-6"
              >
            View Details
              </Button>
            </Link>
          </div>
            </div>
          </div>
        ))}
          </div>
          <div className="flex justify-center mt-10">
        <Link href="/events">
          <Button className="bg-primary hover:bg-primary/90">
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary mb-4">Categories</div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Discover Your Stage
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Choose your category and let your talent shine in Sikkim's biggest talent hunt
        </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center">
          <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transform group-hover:scale-110 transition-all duration-300">
            {category.icon}
          </div>
          <h3 className="text-lg font-medium text-gray-100 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <div className="mt-3 h-0.5 w-12 bg-primary/30 group-hover:w-16 transition-all duration-300"/>
            </div>
            <div className="absolute inset-0 border border-gray-700/50 rounded-xl group-hover:border-primary/50 transition-colors"/>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Sponsors</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proudly Supported By</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Thank you to our amazing sponsors who make this event possible
              </p>
            </div>
          </div>
          
          <div className="overflow-hidden relative">
            <div className="flex animate-slide whitespace-nowrap">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div 
                  key={`${sponsor.name}-${index}`} 
                  className="flex-shrink-0 mx-8"
                >
                  <div className="relative w-48 h-24">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Success Stories</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Champions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the talented individuals who have gone on to achieve great success after participating in our
                competition.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {champions.map((champion) => (
              <div
                key={champion.name}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src={champion.image || "/placeholder.svg"} alt={champion.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{champion.name}</h3>
                <p className="text-primary mb-2">{champion.category}</p>
                <p className="text-gray-500">{champion.achievement}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Showcase Your Talent?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Sikkim's Premier Talent Hunt Competition and let your talent shine on the biggest stage.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const events = [
  {
    id: 1,
    title: "Rising Star Season 4",
    description:
      "The biggest singing competition in Sikkim returns for its 5th season. Showcase your vocal talent and win exciting prizes.",
    date: "June 15, 2023",
    location: "Gangtok",
    image: "/s4 main.jpg",
  },
]

const categories = [
  {
    name: "Singing",
    icon: <Mic className="h-6 w-6 text-primary" />,
  },
  {
    name: "Dancing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <path d="m8 4 10 8-10 8V4Z"></path>
      </svg>
    ),
  },
  {
    name: "Acting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    ),
  },
  {
    name: "Music",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <circle cx="8" cy="18" r="4"></circle>
        <path d="M12 18V2l7 4"></path>
      </svg>
    ),
  },
  {
    name: "Comedy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
    ),
  },
  {
    name: "Others",
    icon: <Trophy className="h-6 w-6 text-primary" />,
  },
]

const champions = [
  {
    name: "Tenzin Dorjee",
    category: "Singing",
    achievement: "Now a professional singer with two albums released nationally",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Priya Sharma",
    category: "Dancing",
    achievement: "Choreographer for major Bollywood productions",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Karma Bhutia",
    category: "Acting",
    achievement: "Lead role in award-winning regional films",
    image: "/placeholder.svg?height=200&width=200",
  },
]
