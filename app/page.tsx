'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Star, Trophy, ChevronRight, Play, Tag, User, Users, Music, PartyPopper, Theater, Guitar, Laugh, Sparkles } from "lucide-react";
import { getFeaturedEvent, getPastEvents } from "@/lib/events";
import { getRecentBlogPosts } from "@/lib/blog";
import ImagePopup from "@/components/ImagePopup";

const categories = [
  {
    name: "Singing",
    icon: <Music className="h-6 w-6 text-primary" />,
    description: "Showcase your vocal talent through various genres"
  },
  {
    name: "Dancing",
    icon: <PartyPopper className="h-6 w-6 text-primary" />,
    description: "From classical to contemporary, express yourself through movement"
  },
  {
    name: "Acting",
    icon: <Theater className="h-6 w-6 text-primary" />,
    description: "Bring characters to life through dramatic performances"
  },
  {
    name: "Music",
    icon: <Guitar className="h-6 w-6 text-primary" />,
    description: "Instrumentalists and composers showcase their musical talent"
  },
  {
    name: "Rap",
    icon: <Music className="h-6 w-6 text-primary" />,
    description: "Showcase your rap skills and lyrical talent"
  },
  {
    name: "Others",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    description: "Magic, spoken word, and other unique talents welcome"
  }
];

export default function Home() {
  const featuredEvent = getFeaturedEvent();
  const pastEvents = getPastEvents();
  const recentBlogs = getRecentBlogPosts(2);
  const sponsorData = [
    { name: "Sandesh Creations", logo: "sandesh logo.png" },
    { name: "ROD Nepal", logo: "rod logo.png" },
    { name: "Falano Crafts", logo: "falanocrafts logo.png" },
    { name: "Ole Sikkim", logo: "ole logo.png" },
    { name: "SG Vlogs", logo: "sg vlogs.png" },
  ];
  
  const SPONSORS = sponsorData.map(({ name, logo }) => ({
    name,
    logo: `/sponsor/${logo}`,
  }));
  

  return (
    <>
    <script dangerouslySetInnerHTML={{
     __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="heXM7DBQvSAvji83O3lKk";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`
      }} />
      <ImagePopup imageSrc="/s4 main.jpg" targetLink="https://sikkimrisingstar.com/events/rising-star-season-4" />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:hidden flex justify-center">
            <div className="inline-block rounded-xl bg-primary/5 px-4 py-2 border border-primary/10">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Star className="w-4 h-4" />
                Season {featuredEvent?.season} Registration Open
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/01 Home Page Image.jpg"
                  alt="Rising Star Performance"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Prize Pool</p>
                    <p className="text-xl font-bold text-primary">₹1,00,000+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="hidden lg:inline-block rounded-xl bg-primary/5 px-4 py-2 border border-primary/10">
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Season {featuredEvent?.season} Registration Open
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-secondary">Discover</span>
                <br />
                <span className="text-primary">Sikkim's Stars</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Join Sikkim's premier talent hunt competition and showcase your skills on the biggest stage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332"
                  passHref
                  legacyBehavior
                >
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <span>
                        {('firstPrize' in featuredEvent.statistics)
                          ? `First Prize: ${featuredEvent.statistics.firstPrize}`
                          : ('prizePool' in featuredEvent.statistics)
                            ? `Prize Pool: ₹${featuredEvent.statistics.prizePool}`
                            : 'Prize: TBA'}
                      </span>
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
              <div className="lg:col-span-2 flex flex-col">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6 flex-grow shadow-md">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Event Highlights</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-lg mb-6">
                      {featuredEvent.longDescription || featuredEvent.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-5 mt-8">
                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                        <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                          <Tag className="h-5 w-5 text-primary" />
                          Categories
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Singing", "Dancing", "Acting", "Rap", "Music", "Other"].map((category) => (
                            <span key={category} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {React.cloneElement(category.icon, { className: 'h-8 w-8 text-primary' }) }
                </div>
                <h3 className="text-base font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm hidden md:block">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold text-white mb-2">{pastEvents.length}</p>
              <p className="text-gray-200">Seasons</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold text-white mb-2">
              {pastEvents.reduce((total, event) => {
                if (event.statistics && 'participants' in event.statistics) {
                  return total + (event.statistics.participants || 0);
                }
                return total;
              }, 0) || '500+'}
              </p>
              <p className="text-gray-200">Participants</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold text-white mb-2">
                {pastEvents.reduce((total, event) => total + (event.winners?.length || 0), 0) || '50+'}
              </p>
              <p className="text-gray-200">Winners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold text-white mb-2">10+</p>
              <p className="text-gray-200">Districts</p>
            </div>
          </div>
        </div>
      </section>
      {recentBlogs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                Latest Updates
              </span>
              <h2 className="text-4xl font-bold">From Our Blog</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {recentBlogs.map((blog) => (
                <Link 
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-60">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
              Trusted By
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Proudly Supported By
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’re honored to collaborate with forward-thinking brands that help us go further.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:hidden">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={`mobile-${sponsor.name}-${index}`}
                className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition duration-300 w-1/4 h-16 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    sizes="112px"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-10">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={`desktop-${sponsor.name}-${index}`}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition duration-300 w-36 h-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    sizes="144px"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Interested in becoming a sponsor? <Link href="/contact" className="text-primary underline">Contact us</Link> to learn more about partnership opportunities.
          </p>
        </div>
      </section>
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