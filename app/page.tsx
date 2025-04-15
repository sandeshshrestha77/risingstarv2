import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Mic, Star, Trophy, ChevronRight, Play } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { getFeaturedEvent } from "@/lib/events";

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
  }
];

export default function Home() {
  const featuredEvent = getFeaturedEvent();
  const sponsors = [
    { name: "Sponsor 1", logo: "/sandesh logo.png" },
    { name: "Sponsor 2", logo: "/rod logo.png" },
    { name: "Sponsor 3", logo: "/falanocrafts logo.png" },
  ];

  return (
    <>
      <section className="relative bg-white text-black overflow-hidden w-full">
        <div className="container relative z-10 px-4 sm:px-6 py-20 md:py-28 lg:py-36 mx-auto">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className="space-y-7">
              {featuredEvent && (
                <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                  <span className="text-sm font-medium text-primary">Season {featuredEvent.season} Registration opening soon</span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Discover <br />
                <span className="text-primary relative inline-block mt-2">
                  Sikkim's Brightest Stars
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                The largest talent competition in Sikkim returns with its most spectacular season yet. Join us for an unforgettable journey.
              </p>
              <div className="flex flex-wrap gap-5 pt-2">
                <Link href="/events">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 px-6 py-4 text-sm sm:text-base">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Events
                      <ArrowRight className="h-4 w-4" />
                      </span>
                  </Button>
                </Link>
                {featuredEvent && (
                  <Link href={`/event/${featuredEvent.id}`}> 
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary/5 gap-2 px-6 py-4 text-sm sm:text-base"
                    >
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-md mx-auto md:max-w-none">
              <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/01 Home Page Image.jpg"
                  alt="Rising Star Performance"
                  fill
                  className="object-cover object-center w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
                  Featured Event
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Upcoming Competition</h2>
              </div>
              <Link href="/events" className="mt-4 md:mt-0 group inline-flex items-center text-primary hover:text-primary/80">
                View all events
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs text-white mb-2 w-fit">
                    Registration Open
                  </div>
                  <h3 className="text-2xl font-bold text-white">{featuredEvent.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{featuredEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">{featuredEvent.title}</h3>
                <p className="text-gray-600 text-lg">{featuredEvent.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{featuredEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{featuredEvent.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prize</p>
                      <p className="font-medium">{('prizePool' in featuredEvent.statistics) ? featuredEvent.statistics.prizePool : 'TBA'}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href={`/events/${featuredEvent.id}`}>
                    <Button size="lg" className="w-full md:w-auto bg-black hover:bg-black/80 text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
              Categories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Stage</h2>
            <p className="text-gray-600">
              Choose your category and let your talent shine in Sikkim's biggest talent hunt competition
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
              <p className="text-gray-400">Seasons Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-400">Participants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-400">Winners & Finalists</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <p className="text-gray-400">Districts Covered</p>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
              Our Sponsors
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proudly Supported By</h2>
            <p className="text-gray-600">
              Thank you to our amazing sponsors who make this event possible
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.name}-${index}`} 
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative w-36 h-20">
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
      </section>
      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Talent?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join Sikkim's Premier Talent Hunt Competition and let your talent shine on the biggest stage in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}