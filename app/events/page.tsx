import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Events & Competitions
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl mx-auto">
                Discover upcoming talent hunt events across Sikkim and register to showcase your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter Events:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="singing">Singing</SelectItem>
                  <SelectItem value="dancing">Dancing</SelectItem>
                  <SelectItem value="acting">Acting</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="gangtok">Gangtok</SelectItem>
                  <SelectItem value="namchi">Namchi</SelectItem>
                  <SelectItem value="pelling">Pelling</SelectItem>
                  <SelectItem value="ravangla">Ravangla</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Upcoming</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register now to participate in these exciting talent competitions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {event.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                    <MapPin className="h-4 w-4 text-primary ml-2" />
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="mt-2 text-gray-500 line-clamp-2">{event.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`text-sm font-medium ${event.registrationOpen ? "text-green-600" : "text-red-600"}`}
                    >
                      {event.registrationOpen ? "Registration Open" : "Registration Closed"}
                    </span>
                    <Link href={`/events/${event.id}`}>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-white">Past Events</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Previous Competitions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Relive the moments from our past talent hunt events.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{event.date}</span>
                    <MapPin className="h-4 w-4 text-gray-500 ml-2" />
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="mt-2 text-gray-500 line-clamp-2">{event.description}</p>
                  <div className="mt-4">
                    <Link href={`/events/${event.id}`}>
                      <Button variant="outline" className="w-full">
                        View Gallery
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">FAQs</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about our events and registration process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                Register now for upcoming events and let your talent shine on Sikkim&apos;s biggest platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const upcomingEvents = [
  {
    id: 201,
    title: "Rising Star Season 4",
    description: "The highly anticipated fourth season is here. New talents. Bigger stage. Higher stakes.",
    date: "May 25, 2025",
    location: "Gangtok",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    registrationOpen: true,
  },
]

const pastEvents = [
  {
    id: 104,
    title: "Rising Star Season 3",
    description: "Season 3 brought together exceptional talents from across Sikkim and beyond.",
    date: "December 15, 2024",
    location: "Namchi",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 105,
    title: "Rising Star Season 2",
    description: "A vibrant showcase of young stars competing in music, dance, and drama.",
    date: "July 10, 2024",
    location: "Pelling",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 106,
    title: "Rising Star Season 1",
    description: "The inaugural season that kickstarted a new era of talent recognition in Sikkim.",
    date: "March 5, 2024",
    location: "Ravangla",
    image: "/placeholder.svg?height=400&width=600",
  },
]

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
