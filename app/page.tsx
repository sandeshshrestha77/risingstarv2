
'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Mic, Star, Trophy, ChevronRight, Play, Tag, User, Users } from "lucide-react";
import { getFeaturedEvent, getPastEvents } from "@/lib/events";
import { getRecentBlogPosts } from "@/lib/blog";

// Define talent categories with icons
const categories = [
  {
    name: "Singing",
    icon: <Mic className="h-6 w-6 text-primary" />,
    description: "Showcase your vocal talent through various genres"
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
        <path d="m12 4 8 4-8 4-8-4 8-4Z"></path>
        <path d="m4 12 8 4 8-4"></path>
        <path d="m4 18 8 4 8-4"></path>
      </svg>
    ),
    description: "From classical to contemporary, express yourself through movement"
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
        <path d="M8 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M12 2v2"></path>
        <path d="M12 22v-2"></path>
        <path d="m5 8-2-2"></path>
        <path d="m19 8 2-2"></path>
        <path d="m5 16-2 2"></path>
        <path d="m19 16 2 2"></path>
      </svg>
    ),
    description: "Bring characters to life through dramatic performances"
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
    description: "Instrumentalists and composers showcase their musical talent"
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
    description: "Make audiences laugh with stand-up, skits, and more"
  },
  {
    name: "Others",
    icon: <Trophy className="h-6 w-6 text-primary" />,
    description: "Magic, spoken word, and other unique talents welcome"
  }
];

export default function Home() {
  // Fetch data from lib files
  const featuredEvent = getFeaturedEvent();
  const pastEvents = getPastEvents();
  const recentBlogs = getRecentBlogPosts(2);
  
  // Generate sponsors from past sponsor images
  const sponsors = [
    { name: "Sandesh Creations", logo: "/sandesh logo.png" },
    { name: "ROD Nepal", logo: "/rod logo.png" },
    { name: "Falano Crafts", logo: "/falanocrafts logo.png" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden w-full bg-white">
        <div className="absolute inset-0 bg-[url('/01 Home Page Image.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container relative z-10 px-4 sm:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              {featuredEvent && (
                <div className="inline-block rounded-full bg-primary px-5 py-2.5 shadow-md">
                  <span className="text-sm font-bold text-white">Season {featuredEvent.season} Registration Open</span>
                </div>
              )}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary">
                <span className="block mb-2">Discover</span>
                <span className="text-primary">Sikkim's Brightest Stars</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                The largest talent competition in Sikkim returns with its most spectacular season yet. Join us for an unforgettable journey of talent discovery and celebration.
              </p>
              <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
                <Link href="/events">
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-1">
                    <span className="relative z-10 flex items-center gap-2 font-bold">
                      Explore Events
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </Link>
                {featuredEvent && (
                  <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332">
                    <Button
                      variant="outline"
                      className="gap-2 px-8 py-6 text-base rounded-xl bg-black text-white hover:bg-gray-800 hover:text-gray-300 shadow-lg transition-transform duration-300 hover:translate-y-1 hover:shadow-xl"
                    >
                      <span className="font-bold">Register Now</span>
                    </Button>  </Link>
                )}
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>

              <div className="relative z-10">
                <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/01 Home Page Image.jpg"
                      alt="Rising Star Performance"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[200px] hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    <p className="font-bold text-sm">Grand Prize</p>
                  </div>
                  <p className="text-lg font-bold text-primary">₹2,00,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-20 md:py-28 bg-gray-100">
          <div className="container px-4">
            <div className="mb-16 relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="relative z-10">
                  <div className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm text-white mb-4">
                    Featured Event
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-secondary">Upcoming <span className="text-primary">Competition</span></h2>
                </div>
                <Link href="/events" className="mt-4 md:mt-0 group inline-flex items-center text-white hover:text-white/90 bg-secondary rounded-full px-6 py-2 transition-all duration-300">
                  View all events
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch relative z-10">
              {/* Left Event Card */}
              <div className="lg:col-span-1 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Registration Open
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-600 text-sm">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">{featuredEvent.title}</h3>
                  
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>Prize: ₹{('prizePool' in featuredEvent.statistics) ? featuredEvent.statistics.prizePool : 'TBA'}</span>
                    </div>
                  </div>
                  
                  <Link href={`/events/${featuredEvent.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right Content Area */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6 flex-grow shadow-md">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Event Highlights</h3>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-lg mb-6">
                      {featuredEvent.longDescription || featuredEvent.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-5 mt-8">
                      {/* Categories */}
                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                        <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                          <Tag className="h-5 w-5 text-primary" />
                          Categories
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Singing", "Dancing", "Acting", "Comedy", "Music", "Other"].map((category) => (
                            <span key={category} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Statistics */}
                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                        <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          Participants
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-primary">
                              {('estimatedParticipants' in featuredEvent.statistics) ? 
                                featuredEvent.statistics.estimatedParticipants.toLocaleString() : 
                                '10,000+'}
                            </p>
                            <p className="text-xs text-gray-500">Expected Participants</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-primary">
                              {('categories' in featuredEvent.statistics) ? 
                                featuredEvent.statistics.categories : '10+'}
                            </p>
                            <p className="text-xs text-gray-500">Talent Categories</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Registration CTA */}
                <div className="bg-secondary rounded-2xl border border-gray-200 p-6 md:p-8 shadow-md">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ready to Participate?</h3>
                      <p className="text-white/90">Register now to showcase your talent and win amazing prizes!</p>
                    </div>
                    <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332">
                      <Button size="lg" className="whitespace-nowrap bg-primary hover:bg-primary/90 text-white font-bold px-8">
                        Register Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
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
                <h3 className="font-medium mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm hidden md:block">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Stardom</h2>
            <p className="text-gray-600">
              Follow these simple steps to participate in Sikkim Rising Star
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
                title: "Register Online",
                description: "Complete the simple registration form with your details and chosen category"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 13v2"></path><path d="M9 13v2"></path><path d="M12 9v6"></path></svg>,
                title: "Audition",
                description: "Showcase your talent in front of our expert panel of judges"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h.01"></path><path d="M17 7h.01"></path><path d="M7 17h.01"></path><path d="M17 17h.01"></path></svg>,
                title: "Competition Rounds",
                description: "Progress through elimination rounds with guidance from mentors"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>,
                title: "Grand Finale",
                description: "Perform in the spectacular finale event and win amazing prizes"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      {recentBlogs.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
                  From Our Blog
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Latest Updates</h2>
              </div>
              <Link href="/blog" className="mt-4 md:mt-0 group inline-flex items-center text-primary hover:text-primary/80">
                Read all posts
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {recentBlogs.map((blog) => (
                <div 
                  key={blog.id}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                       src={blog.image || "/placeholder.svg"} 
                       alt={blog.title}
                       fill
                       className="object-cover"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                       priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3 text-primary" />
                        <span>{blog.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{blog.title}</h3>
                    <p className="mt-2 text-gray-500 line-clamp-2">{blog.excerpt}</p>
                    <div className="mt-4">
                      <Link href={`/blog/${blog.slug}`}>
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
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{pastEvents.length}</div>
              <p className="text-gray-400">Seasons Completed</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {pastEvents.reduce((total, event) => total + (event.statistics?.participants || 0), 0) || '500+'}
              </div>
              <p className="text-gray-400">Participants</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {pastEvents.reduce((total, event) => total + (event.winners?.length || 0), 0) || '50+'}
              </div>
              <p className="text-gray-400">Winners & Finalists</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
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
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
              >
                <div className="relative w-36 h-20">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-8 sm:py-16 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Showcase Your Talent?</h2>
          <p className="text-lg md:text-xl text-white/90">
          Register now for upcoming events and let your talent shine on Sikkim's biggest platform.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332" passHref legacyBehavior>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Register Now
          </Button>
          </Link>
          <Link href="./events#upcoming">
          <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
            Explore Events
          </Button>
          </Link>
        </div>
        </div>
      </div>
      </section>
    </>
  );
}
  

