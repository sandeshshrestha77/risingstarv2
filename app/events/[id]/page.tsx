import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy, Clock, ArrowLeft, Star, Eye } from "lucide-react"
import { notFound } from "next/navigation"
import { getEventById } from "@/lib/events"
import type { Event, PastEvent, UpcomingEvent, OngoingEvent } from "@/types/events"
import ScrollLink from "@/components/scroll-link"
import GalleryImage from "@/components/gallery-image"

function isUpcomingEvent(event: Event): event is UpcomingEvent {
  return event.status === "upcoming"
}

function isOngoingEvent(event: Event): event is OngoingEvent {
  return event.status === "ongoing"
}

function isPastEvent(event: Event): event is PastEvent {
  return event.status === "past"
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params
  const event = await getEventById(id)
  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    }
  }

  let metaDescription = ""

  if (isUpcomingEvent(event)) {
    metaDescription = `Register now for ${event.title}! Join Sikkim's biggest talent hunt with first prize ₹${event.statistics.firstPrize}, second prize ₹${event.statistics.secondPrize}, third prize ₹${event.statistics.thirdPrize}. Event date: ${event.date}`
  } else if (isOngoingEvent(event)) {
    metaDescription = `${event.title} is happening now! Join Sikkim's biggest talent hunt with first prize ₹${event.statistics.firstPrize}, second prize ₹${event.statistics.secondPrize}, third prize ₹${event.statistics.thirdPrize}. Event date: ${event.date}`
  } else {
    metaDescription = `Relive the moments from ${event.title}. View highlights, winners, and gallery from this spectacular showcase of talent.`
  }

  return {
    title: event.title,
    description: metaDescription,
    openGraph: {
      title: event.title,
      description: metaDescription,
      type: "website",
      images: [{ url: event.image, width: 1200, height: 630 }],
      url: `https://sikkimrisingstar.com/events/${event.id}`,
    },
    alternates: {
      canonical: `https://sikkimrisingstar.com/events/${event.id}`,
    },
  }
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const event = await getEventById(id)
  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto pt-6 md:pt-8 pb-4 md:pb-6 px-4">
        <div className="flex flex-wrap justify-between items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <Link href="/events">
            <Button variant="outline" className="gap-2 text-sm md:text-base" size="sm">
              <ArrowLeft className="h-4 w-4" /> Back to Events
            </Button>
          </Link>
          <div
            className={`${
              isOngoingEvent(event)
                ? "bg-green-100 text-green-700"
                : isUpcomingEvent(event)
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-700"
            } px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1`}
          >
            {isOngoingEvent(event) && (
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
            {isOngoingEvent(event) ? "Happening Now" : isUpcomingEvent(event) ? "Registration Open" : "Past Event"}
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
              src={event.image || "/placeholder.svg"}
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
          <div className="md:col-span-2">
            <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 pb-2 border-b border-gray-100">
                About This Event
              </h2>
              <div className="prose max-w-none text-gray-700 text-sm md:text-base">
                {event.longDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-3 md:mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
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
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">First Prize</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                      {event.statistics.firstPrize.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-gray-400 mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Second Prize</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                      {event.statistics.secondPrize.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-amber-700 mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Third Prize</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                      {event.statistics.thirdPrize.toLocaleString()}
                      </p>
                    </div>
                  </>
                ) : isOngoingEvent(event) ? (
                  <>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Registered Participants</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.statistics.registeredParticipants}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Prize Pool</h3>
                      <p className="text-gray-600 text-sm md:text-base">₹{event.statistics.prizePool}</p>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center">
                      <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-base md:text-lg font-semibold mb-1">Event Started</h3>
                      <p className="text-gray-600 text-sm md:text-base">{event.date}</p>
                    </div>
                  </>
                ) : (
                  isPastEvent(event) && (
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
                  )
                )}
              </div>
            </section>
            {isPastEvent(event) && event.winners && event.winners.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" /> Winners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {event.winners.map((winner, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-xl text-center border border-gray-200"
                    >
                      <div className="inline-block bg-white rounded-full p-2 md:p-3 mb-3 md:mb-4 shadow-sm">
                        <Trophy
                          className={`h-5 w-5 md:h-6 md:w-6 ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : index === 2 ? "text-amber-700" : "text-primary"}`}
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">{winner.name}</h3>
                      <p className="text-primary font-medium text-xs md:text-sm">{winner.category}</p>
                      <p className="text-gray-600 mt-1 md:mt-2 font-bold text-sm md:text-base">{winner.prize}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {(isUpcomingEvent(event) || isOngoingEvent(event)) && event.auditionDates && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" /> Audition Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {event.auditionDates.map((audition, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100 flex items-center gap-3 md:gap-4"
                    >
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
            {isOngoingEvent(event) && event.highlights && event.highlights.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Event Highlights
                </h2>
                <ul className="space-y-2 md:space-y-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Star className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {isPastEvent(event) && event.testimonials && event.testimonials.length > 0 && (
              <section className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100">
                  Testimonials
                </h2>
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
            {(isPastEvent(event) || isOngoingEvent(event)) && event.gallery && event.gallery.length > 0 && (
              <section
                id="gallery"
                className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-sm mb-6 md:mb-8 scroll-mt-20"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-gray-100">
                  Event Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {event.gallery.map((image, index) => (
                    <GalleryImage
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${event.title} gallery image ${index + 1}`}
                      index={index}
                      allImages={event.gallery}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-4 md:top-8">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
                {isUpcomingEvent(event) ? (
                  <>
                    <div className="bg-green-50 text-green-700 font-medium text-center py-2 px-3 md:px-4 rounded-lg mb-3 md:mb-4 text-sm md:text-base">
                      Registration Open
                    </div>
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Don't miss your chance!
                      </h3>
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
                ) : isOngoingEvent(event) ? (
                  <>
                    <div className="bg-green-100 text-green-700 font-medium text-center py-2 px-3 md:px-4 rounded-lg mb-3 md:mb-4 text-sm md:text-base flex items-center justify-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Happening Now
                    </div>
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Event in Progress!
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-1 md:mb-2">
                        The event is currently taking place at <span className="font-medium">{event.location}</span>
                      </p>
                    </div>
                    <ScrollLink href="#gallery" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base">
                        View Gallery
                      </Button>
                    </ScrollLink>
                    <p className="text-xs text-center text-gray-500 mt-2 md:mt-3">
                      Browse through photos from the ongoing event
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
                      <ScrollLink href="#gallery" className="block">
                        <Button variant="outline" className="w-full text-sm md:text-base">
                          View Gallery
                        </Button>
                      </ScrollLink>
                    )}
                  </>
                )}
              </div>
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
