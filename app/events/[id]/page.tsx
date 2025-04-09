import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy, Clock, ArrowLeft, Star, Eye } from "lucide-react"
import { notFound } from "next/navigation"

// Define proper types for our events
type PastEventStatistics = {
  participants: number;
  audience: number;
  categories: number;
};

type UpcomingEventStatistics = {
  estimatedParticipants: number;
  prizePool: string;
  categories: number;
};

type Winner = {
  name: string;
  category: string;
  prize: string;
};

type Testimonial = {
  name: string;
  quote: string;
  role: string;
};

type AuditionDate = {
  city: string;
  date: string;
};

// Base event type with common properties
interface BaseEvent {
  id: number;
  season: number;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  location: string;
  image: string;
  gallery: string[];
  registrationOpen: boolean;
}

// Past event specific properties
interface PastEvent extends BaseEvent {
  statistics: PastEventStatistics;
  winners: Winner[];
  testimonials: Testimonial[];
  registrationOpen: false;
}

// Upcoming event specific properties
interface UpcomingEvent extends BaseEvent {
  statistics: UpcomingEventStatistics;
  winners: never[];
  gallery: never[];
  highlights: string[];
  registrationDeadline: string;
  auditionDates: AuditionDate[];
  registrationOpen: true;
}

// Union type for any event
type Event = PastEvent | UpcomingEvent;

// Event data from all seasons
const eventData: Record<string, Event> = {
  "101": {
    id: 101,
    season: 1,
    title: "Rising Star Season 1",
    description: "The inaugural season that kickstarted a new era of talent recognition in Sikkim.",
    longDescription: "Rising Star Season 1 marked the beginning of our journey to discover and showcase Sikkim's finest talents. This groundbreaking event featured participants from all corners of the state, competing in various categories including singing, dancing, and performing arts. The event was hosted in Ravangla and witnessed an overwhelming response from both participants and audiences alike.",
    date: "March 5, 2024",
    location: "Ravangla",
    image: "/s1 main.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    winners: [
      { name: "Tenzin Sherpa", category: "Singing", prize: "₹50,000" },
      { name: "Diki Bhutia", category: "Dancing", prize: "₹50,000" },
      { name: "Karma Chopel", category: "Instrumental", prize: "₹50,000" },
    ],
    statistics: {
      participants: 150,
      audience: 1200,
      categories: 5,
    },
    testimonials: [
      {
        name: "Pema Lhamu",
        quote: "Participating in Rising Star Season 1 was a life-changing experience. The platform gave me confidence and recognition I never imagined possible.",
        role: "Participant",
      },
      {
        name: "Tashi Namgyal",
        quote: "The quality of talent displayed in the first season was remarkable. This initiative truly brings out the best in Sikkim's youth.",
        role: "Judge",
      },
    ],
    registrationOpen: false,
  },
  "102": {
    id: 102,
    season: 2,
    title: "Rising Star Season 2",
    description: "A vibrant showcase of young stars competing in music, dance, and drama.",
    longDescription: "Building on the success of our inaugural season, Rising Star Season 2 expanded its reach to include participants from neighboring states as well. The competition was fiercer, the stage was larger, and the performances were more spectacular. Held in the picturesque town of Pelling, this season introduced new categories including group performances and original compositions.",
    date: "July 10, 2024",
    location: "Pelling",
    image: "/s2 main.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    winners: [
      { name: "Sonam Dorjee", category: "Singing", prize: "₹75,000" },
      { name: "Yangchen Doma", category: "Dancing", prize: "₹75,000" },
      { name: "Passang Tamang", category: "Drama", prize: "₹75,000" },
    ],
    statistics: {
      participants: 250,
      audience: 1800,
      categories: 7,
    },
    testimonials: [
      {
        name: "Dechen Wangmo",
        quote: "Season 2 provided an incredible platform for artists like me. The exposure and mentorship we received were invaluable.",
        role: "Participant",
      },
      {
        name: "Jigme Wangchuk",
        quote: "I was amazed by the growth in talent quality from season 1 to season 2. This competition is nurturing Sikkim's cultural future.",
        role: "Sponsor",
      },
    ],
    registrationOpen: false,
  },
  "103": {
    id: 103,
    season: 3,
    title: "Rising Star Season 3",
    description: "Season 3 brought together exceptional talents from across Sikkim and beyond.",
    longDescription: "Rising Star Season 3 elevated the competition to a national level, attracting participants from across India. The event was hosted in Namchi and featured celebrity judges from the entertainment industry. This season introduced a mentorship program where participants received guidance from established artists weeks before the finals. The grand finale was broadcast live on regional television channels.",
    date: "December 15, 2024",
    location: "Namchi",
    image: "/s3 main.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    winners: [
      { name: "Rinchen Namgyal", category: "Singing", prize: "₹100,000" },
      { name: "Pema Yangzom", category: "Dancing", prize: "₹100,000" },
      { name: "Dorji Tshering", category: "Overall Champion", prize: "₹250,000" },
    ],
    statistics: {
      participants: 350,
      audience: 2500,
      categories: 8,
    },
    testimonials: [
      {
        name: "Tshering Dorji",
        quote: "The production quality and organization of Season 3 was professional and impressive. Proud to see such an event in our state.",
        role: "Audience Member",
      },
      {
        name: "Dichen Lhamo",
        quote: "Winning Season 3 has opened doors I never thought possible. I've received offers from music labels and performance opportunities nationwide.",
        role: "Winner",
      },
    ],
    registrationOpen: false,
  },
  "201": {
    id: 201,
    season: 4,
    title: "Rising Star Season 4",
    description: "The highly anticipated fourth season is here. New talents. Bigger stage. Higher stakes.",
    longDescription: "Be part of Sikkim's biggest talent hunt! Showcase your skills on a grand stage with international judges, live streaming, and unprecedented opportunities. Join us for an unforgettable journey of talent, creativity, and stardom.",
    date: "July 25, 2025",
    location: "Gangtok",
    image: "/s4 main.jpg",
    gallery: [],
    winners: [],
    statistics: {
      estimatedParticipants: 500,
      prizePool: "₹10,00,000",
      categories: 10,
    },
    highlights: [
    ],
    registrationOpen: true,
    registrationDeadline: "June 30, 2025",
    auditionDates: [
     // { city: "Gangtok", date: "March 10-12, 2025" },
     // { city: "Namchi", date: "March 15-16, 2025" },
     // { city: "Geyzing", date: "March 20-21, 2025" },
      { city: "To Be Decided", date: "" },
    ],
  },
}

// Type guard to check if an event is an upcoming event
function isUpcomingEvent(event: Event): event is UpcomingEvent {
  return event.registrationOpen === true;
}

// Type guard to check if an event is a past event
function isPastEvent(event: Event): event is PastEvent {
  return event.registrationOpen === false;
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventData[params.id as keyof typeof eventData]
  
  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Event Header */}
      <div className="container mx-auto pt-8 pb-6 px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <Link href="/events">
            <Button 
              variant="outline" 
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Events
            </Button>
          </Link>
          <div className={`${isUpcomingEvent(event) ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'} px-4 py-1 rounded-full text-sm font-medium`}>
            {isUpcomingEvent(event) ? 'Registration Open' : 'Past Event'}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full mb-4">
              <span>Season {event.season}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 mb-6">{event.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Event Description */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-100">About This Event</h2>
              <div className="prose max-w-none text-gray-700">
                {event.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
            
            {/* Event Statistics */}
            <section className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {isUpcomingEvent(event) ? (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Registration Deadline</h3>
                      <p className="text-gray-600">{event.registrationDeadline}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Expected Participants</h3>
                      <p className="text-gray-600">{event.statistics.estimatedParticipants}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Total Prize Pool</h3>
                      <p className="text-gray-600">{event.statistics.prizePool}</p>
                    </div>
                  </>
                ) : isPastEvent(event) && (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Participants</h3>
                      <p className="text-gray-600">{event.statistics.participants}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Audience</h3>
                      <p className="text-gray-600">{event.statistics.audience}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                      <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg font-semibold mb-1">Categories</h3>
                      <p className="text-gray-600">{event.statistics.categories}</p>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Winners Section - Only for past events */}
            {isPastEvent(event) && event.winners.length > 0 && (
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" /> Winners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {event.winners.map((winner, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center border border-gray-200">
                      <div className="inline-block bg-white rounded-full p-3 mb-4 shadow-sm">
                        <Trophy className={`h-6 w-6 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-700' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-lg font-semibold">{winner.name}</h3>
                      <p className="text-primary font-medium text-sm">{winner.category}</p>
                      <p className="text-gray-600 mt-2 font-bold">{winner.prize}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights Section - For upcoming season */}
            {isUpcomingEvent(event) && event.highlights && (
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Season Highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="mt-1 bg-primary/10 rounded-full p-1 flex-shrink-0">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Audition Dates - For upcoming season */}
            {isUpcomingEvent(event) && event.auditionDates && (
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" /> Audition Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.auditionDates.map((audition: AuditionDate, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{audition.city}</h3>
                        <p className="text-gray-600">{audition.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials - Only for past events */}
            {isPastEvent(event) && event.testimonials.length > 0 && (
              <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-100">Testimonials</h2>
                <div className="grid grid-cols-1 gap-6">
                  {event.testimonials.map((testimonial: Testimonial, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <p className="italic text-gray-700 mb-4 text-lg">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section - Only for past events */}
            {isPastEvent(event) && event.gallery.length > 0 && (
              <section id="gallery" className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-100">Event Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg group">
                      <Image 
                        src={image} 
                        alt={`${event.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Eye className="h-6 w-6 text-white" />
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
            <div className="sticky top-8">
              {/* Registration Status */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                {isUpcomingEvent(event) ? (
                  <>
                    <div className="bg-green-50 text-green-700 font-medium text-center py-2 px-4 rounded-lg mb-4">
                      Registration Open
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Don't miss your chance!</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Registration closes on <span className="font-medium">{event.registrationDeadline}</span>
                      </p>
                      <div className="w-full bg-gray-100 h-2 rounded-full mt-3 mb-1">
                        <div className="bg-primary h-full rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-gray-500">Registration filling fast</p>
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Register Now
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-gray-500 mt-3">
                      By registering, you agree to our terms and conditions
                    </p>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-100 text-gray-700 font-medium text-center py-2 px-4 rounded-lg mb-4">
                      Event Completed
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      This event has already taken place. Check out the highlights, winners, and gallery.
                    </p>
                    {event.gallery.length > 0 && (
                      <Link href="#gallery">
                        <Button variant="outline" className="w-full">
                          View Gallery
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Date</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Season</p>
                      <p className="text-gray-600">{event.season}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Seasons */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Other Seasons</h3>
                <div className="space-y-3">
                  {Object.values(eventData)
                    .filter(otherEvent => otherEvent.id !== event.id)
                    .sort((a, b) => b.season - a.season)
                    .map(otherEvent => (
                      <Link 
                        key={otherEvent.id} 
                        href={`/events/${otherEvent.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isUpcomingEvent(otherEvent) ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {otherEvent.season}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{otherEvent.title}</p>
                          <p className="text-sm text-gray-500">{otherEvent.date}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Events */}
        <div className="mt-8 text-center">
          <Link href="/events">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}