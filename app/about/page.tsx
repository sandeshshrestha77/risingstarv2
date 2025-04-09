import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                About Sikkim&apos;s Premier Talent Hunt
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl mx-auto">
                Discovering and nurturing extraordinary talents since 2018.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Journey of Sikkim&apos;s Biggest Talent Platform
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Founded in 2018 with a vision to provide a platform for the hidden talents of Sikkim, our competition
                  has grown to become the state&apos;s most prestigious talent hunt.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500">
                  What started as a small event in Gangtok has now expanded to cover all districts of Sikkim,
                  discovering extraordinary talents from remote villages to urban centers. Our mission is to identify,
                  nurture, and promote local talent, providing them with opportunities to showcase their skills on
                  national and international platforms.
                </p>
                <p className="text-gray-500">
                  Over the years, we have witnessed incredible performances across various categories including singing,
                  dancing, acting, music, comedy, and many more unique talents that have left audiences spellbound.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/events">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Our Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Talent Hunt Journey"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Milestones</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A look back at our journey of discovering extraordinary talents.
              </p>
            </div>
          </div>
          <div className="mt-10 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} md:justify-between`}
                >
                  <div className={`hidden md:block ${index % 2 === 0 ? "order-1" : "order-2"} w-5/12`}>
                    <div
                      className={`p-6 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className={`md:hidden block w-full`}>
                    <div className={`p-6 rounded-lg shadow-lg bg-white ml-10`}>
                      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? "order-2" : "order-1"} w-5/12`}>
                    {index % 2 !== 0 && (
                      <div className="p-6 rounded-lg shadow-lg bg-white">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-gray-500">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Meet The Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate individuals behind Sikkim&apos;s Premier Talent Hunt.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-primary/20">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Stand For</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The core principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-2 rounded-full bg-primary/20 w-fit">{value.icon}</div>
                <h3 className="text-xl font-bold mt-4">{value.title}</h3>
                <p className="mt-2 text-gray-500">{value.description}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Journey</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be a part of Sikkim&apos;s biggest talent discovery platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Sample data
const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "First talent hunt organized in Gangtok with 100 participants across 3 categories.",
  },
  {
    year: "2019",
    title: "Expansion",
    description: "Extended to all four districts of Sikkim with 500+ participants.",
  },
  {
    year: "2020",
    title: "Virtual Edition",
    description: "Adapted to the pandemic with our first virtual talent hunt reaching 1000+ participants.",
  },
  {
    year: "2021",
    title: "National Recognition",
    description: "Our winners performed at national level events, bringing recognition to Sikkim's talent.",
  },
  {
    year: "2022",
    title: "International Collaboration",
    description: "Partnered with international talent agencies to provide global exposure to our winners.",
  },
  {
    year: "2023",
    title: "Record Breaking",
    description: "Largest edition yet with 2000+ participants and televised finals.",
  },
]

const team = [
  {
    name: "Tashi Namgyal",
    role: "Founder & Director",
    bio: "Visionary behind Sikkim's Premier Talent Hunt with 15+ years in the entertainment industry.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dichen Lhamu",
    role: "Creative Director",
    bio: "Award-winning choreographer bringing creative excellence to our events.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pema Wangchuk",
    role: "Event Manager",
    bio: "Logistics expert ensuring flawless execution of all our events across Sikkim.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Rinchen Doma",
    role: "Marketing Head",
    bio: "Digital marketing specialist who has grown our platform's reach exponentially.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const stats = [
  {
    value: "5+",
    label: "Years",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    value: "5000+",
    label: "Participants",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    value: "20+",
    label: "Events",
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
        <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z"></path>
        <path d="m3 3 7.07 16.97c.77 1.76 2.13 1.76 2.89 0L20 3"></path>
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Success Stories",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
]

const values = [
  {
    title: "Inclusivity",
    description:
      "We believe talent exists everywhere. Our platform is accessible to all, regardless of background or location.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in our competitions, judging, and opportunities provided to winners.",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Integrity",
    description: "Fairness and transparency are at the core of our judging process and overall operations.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
]
