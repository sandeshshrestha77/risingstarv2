import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getUpcomingEvents, getPastEvents } from "@/lib/events"

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents()
  const pastEvents = await getPastEvents()

  return (
    <>
      {/* Upcoming Events */}
      <section id="upcoming" className="w-full py-16 md:py-24 scroll-mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
              Upcoming
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Upcoming Events</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Register now to participate in these exciting talent competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md flex flex-col h-full"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 line-clamp-2 mb-4">{event.description}</p>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                    <span
                      className={`text-sm font-medium rounded-full px-2.5 py-0.5 ${
                        event.registrationOpen 
                          ? "bg-green-50 text-green-700" 
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {event.registrationOpen ? "Registration Open" : "Registration Closed"}
                    </span>
                    <Link href={`/events/${event.id}`}>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto gap-1 font-medium"
                      >
                        Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-12 border border-dashed border-gray-200 rounded-lg bg-gray-50">
              <p className="text-gray-500">No upcoming events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section id="past" className="w-full py-16 md:py-24 bg-gray-50 scroll-mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="bg-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
              Past Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Previous Competitions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Relive the moments from our past talent hunt events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md flex flex-col h-full"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 line-clamp-2 mb-4">{event.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href={`/events/${event.id}`}>
                      <Button 
                        className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                      >
                        View Event Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Everything you need to know about our events and registration process.
            </p>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left py-4 text-base md:text-lg font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Showcase Your Talent?</h2>
              <p className="text-lg md:text-xl text-white/90">
                Register now for upcoming events and let your talent shine on Sikkim's biggest platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
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
    </>
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