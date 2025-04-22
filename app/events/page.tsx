import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getUpcomingEvents, getPastEvents } from "@/lib/events"

interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image?: string
  registrationOpen: boolean
}

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents()
  const pastEvents = await getPastEvents()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-primary/5 px-4 py-2 border border-primary/10 mb-6">
            <span className="text-sm font-medium text-primary">Events</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Discover Our Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Sikkim's most prestigious talent competitions and showcase your skills.
          </p>
        </div>
      </section>
    <div className="flex flex-col items-center">
    {/* Upcoming Events */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Don't miss out on these exciting opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {event.registrationOpen && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Registration Open
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Past Events</h2>
            <p className="text-gray-600">Relive our previous successful events</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <Link href={`/events/${event.id}`}>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-8 sm:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          FAQs
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
        <p className="max-w-[700px] text-gray-500 text-sm md:text-lg">
          Everything you need to know about our events and registration process.
        </p>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
            <AccordionTrigger className="text-left py-4 text-sm sm:text-lg font-medium hover:text-primary">
            {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-1 pb-4 text-sm sm:text-base">
            {faq.answer}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
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
          <Link href="#upcoming">
          <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
            Explore Events
          </Button>
          </Link>
        </div>
        </div>
      </div>
      </section>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "How can I register for an event?",
    answer:
      "You can register for any of our events by visiting the specific event page and clicking on the 'Register Now' button. Alternatively, you can visit our contact page and fill out the registration form.",
  },
  {
    question: "What are the age requirements for participation?",
    answer:
      "The age requirements vary depending on the event. Most of our events are open to participants aged 16 and above. Some events have specific categories for different age groups. Please check the specific event details for accurate information.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, most events have a nominal registration fee that helps us cover the organizational costs. The fee varies depending on the event and category. Early bird registrations often come with discounted fees.",
  },
  {
    question: "What should I prepare for the auditions?",
    answer:
      "For singing competitions, prepare 2-3 songs of your choice. For dance, prepare a 2-3 minute routine. For other categories, specific requirements will be mentioned on the event page. Always come prepared with any props or instruments you might need.",
  },
  {
    question: "When will I know if I've been selected?",
    answer:
      "Results of the preliminary selections are usually announced within a week of the auditions. All participants will be notified via email or phone. The selected participants will also be listed on our website and social media pages.",
  },
  {
    question: "Can I participate in multiple categories?",
    answer:
      "Yes, you can participate in multiple categories or events. However, you will need to register separately for each and pay the respective registration fees.",
  },
]
