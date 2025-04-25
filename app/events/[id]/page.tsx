import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Calendar, MapPin, Users, Trophy, Clock,
  ArrowLeft, Star, Eye
} from "lucide-react"
import { notFound } from "next/navigation"
import {
  getEventById,
  getUpcomingEvents,
  getPastEvents
} from "@/lib/events"
import type { Event, PastEvent, UpcomingEvent } from "@/types/events"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const event = await getEventById(params.id)
  
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
    }
  }

  const isUpcoming = event.registrationOpen
  const metaDescription = isUpcoming
    ? `Register now for ${event.title}! Join Sikkim's biggest talent hunt with prizes worth ₹${event.statistics.prizePool}. Event date: ${event.date}`
    : `Relive the moments from ${event.title}. View highlights, winners, and gallery from this spectacular showcase of talent.`

  return {
    title: event.title,
    description: metaDescription,
    openGraph: {
      title: event.title,
      description: metaDescription,
      type: 'website',
      images: [{ url: event.image, width: 1200, height: 630 }],
      url: `https://sikkimrisingstar.com/events/${event.id}`,
    },
    alternates: {
      canonical: `https://sikkimrisingstar.com/events/${event.id}`,
    }
  }
}

export async function generateStaticParams() {
  const upcoming = await getUpcomingEvents()
  const past = await getPastEvents()
  const allEvents = [...upcoming, ...past]
  return allEvents.map((event) => ({ id: event.id }))
}

function isUpcomingEvent(event: Event): event is UpcomingEvent {
  return event.registrationOpen === true
}

function isPastEvent(event: Event): event is PastEvent {
  return event.registrationOpen === false
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Event Header */}
      <div className="container mx-auto pt-6 md:pt-8 pb-4 md:pb-6 px-4">
        <div className="flex flex-wrap justify-between items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <Link href="/events">
            <Button 
              variant="outline" 
              className="gap-2 text-sm md:text-base"
              size="sm"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Events
            </Button>
          </Link>
          <div className={`${isUpcomingEvent(event) ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'} px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium`}>
            {isUpcomingEvent(event) ? 'Registration Open' : 'Past Event'}
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium bg-gray-100 px-2 py-1 md:px-3 md:py-1 rounded-full mb-3 md:mb-4">
              <span>Season {event.season}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">{event.title}</h1>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{event.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 text-xs md:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Event Description */}
            <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 pb-2 border-b border-gray-100">About This Event</h2>
              <div className="prose max-w-none text-gray-700 text-sm md:text-base">
                {event.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 md:mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
            
            {/* Event Statistics */}
            <section className="mb-6 md:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {isUpcomingEvent(event) ? (
                  <>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Registration Deadline</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.registrationDeadline}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Expected Participants</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.estimatedParticipants}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Total Prize Pool</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.prizePool}</p>
                    </div>
                  </>
                ) : isPastEvent(event) && (
                  <>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Participants</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.participants}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Eye className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Audience</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.audience}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Categories</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.categories}</p>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Winners Section - Only for past events */}
            {isPastEvent(event) && event.winners.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" /> Winners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {event.winners.map((winner, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-xl text-center border border-gray-200">
                      <div className="inline-block bg-white rounded-full p-2 md:p-3 mb-3 md:mb-4 shadow-sm">
                        <Trophy className={`h-5 w-5 md:h-6 md:w-6 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">{winner.name}</h3>
                      <p className="text-primary font-medium text-xs md:text-sm">{winner.category}</p>
                      <p className="text-gray-600 mt-1 md:mt-2 font-bold text-sm md:text-base">{winner.prize}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights Section - For upcoming season */}
            {isUpcomingEvent(event) && event.highlights && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Season Highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {event.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100">
                      <div className="mt-0.5 md:mt-1 bg-primary/10 rounded-full p-1 flex-shrink-0">
                        <Star className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Audition Dates - For upcoming season */}
            {isUpcomingEvent(event) && event.auditionDates && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" /> Audition Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {event.auditionDates.map((audition, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100 flex items-center gap-3 md:gap-4">
                      <div className="bg-primary/10 rounded-full p-2 md:p-3 flex-shrink-0">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{audition.city}</h3>
                        <p className="text-gray-600 text-xs md:text-sm">{audition.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials - Only for past events */}
            {isPastEvent(event) && event.testimonials.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100">Testimonials</h2>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {event.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100">
                      <p className="italic text-gray-700 mb-3 md:mb-4 text-base md:text-lg">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center font-bold text-base md:text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-primary text-xs md:text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section - Only for past events */}
            {isPastEvent(event) && event.gallery.length > 0 && (
              <section id="gallery" className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100">Event Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {event.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square sm:aspect-video overflow-hidden rounded-lg group">
                      <Image 
                        src={image} 
                        alt={`${event.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 md:p-2">
                          <Eye className="h-4 w-4 md:h-6 md:w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-4 md:top-8">
              {/* Registration Status */}
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
                {isUpcomingEvent(event) ? (
                  <>
                    <div className="bg-green-50 text-green-700 font-medium text-center py-2 px-3 md:px-4 rounded-lg mb-3 md:mb-4 text-sm md:text-base">
                      Registration Open
                    </div>
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Don't miss your chance!</h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">
                        Registration closes on <span className="font-medium">{event.registrationDeadline}</span>
                      </p>
                    </div>
                    <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base">
                        Register Now
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-gray-500 mt-2 md:mt-3">
                      By registering, you agree to our terms and conditions
                    </p>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-100 text-gray-700 font-medium text-center py-2 px-3 md:px-4 rounded-lg mb-3 md:mb-4 text-sm md:text-base">
                      Event Completed
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      This event has already taken place. Check out the highlights, winners, and gallery.
                    </p>
                    {event.gallery.length > 0 && (
                      <Link href="#gallery">
                        <Button variant="outline" className="w-full text-sm md:text-base">
                          View Gallery
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
                <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">Event Details</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Date</p>
                      <p className="text-gray-600 text-xs md:text-sm">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Location</p>
                      <p className="text-gray-600 text-xs md:text-sm">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Season</p>
                      <p className="text-gray-600 text-xs md:text-sm">{event.season}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Events */}
        <div className="mt-6 md:mt-8 text-center">
          <Link href="/events">
            <Button variant="outline" className="gap-2 text-sm md:text-base">
              <ArrowLeft className="h-4 w-4" /> Back to All Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}