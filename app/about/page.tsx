import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

interface Stat {
  icon: JSX.Element;
  value: string;
  label: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const team: TeamMember[] = [
  { name: "John Doe", role: "Founder", bio: "Visionary leader with 10 years of experience in event management", image: "/team/john-doe.jpg" },
  { name: "Jane Smith", role: "Event Director", bio: "Expert in talent management and show production", image: "/team/jane-smith.jpg" },
  { name: "Sam Wilson", role: "Marketing Head", bio: "Creative marketer with a passion for promoting local talent", image: "/team/sam-wilson.jpg" },
  { name: "Emily Davis", role: "Social Media Manager", bio: "Connecting with our audience through engaging content", image: "/team/emily-davis.jpg" },
  { name: "Michael Brown", role: "Technical Director", bio: "Ensuring flawless execution of all technical aspects of our events", image: "/team/michael-brown.jpg" },
];

const stats: Stat[] = [
  { icon: <Users className="w-6 h-6 text-primary" />, value: "250+", label: "Participants" },
  { icon: <Calendar className="w-6 h-6 text-primary" />, value: "4", label: "Events" },
  { icon: <Award className="w-6 h-6 text-primary" />, value: "50+", label: "Awards" },
  { icon: <CheckCircle className="w-6 h-6 text-primary" />, value: "100+", label: "Talent Categories" },
];

const values = [
  { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Excellence", description: "We strive for excellence in every aspect of our events and competitions." },
  { icon: <Award className="w-6 h-6 text-primary" />, title: "Recognition", description: "Providing well-deserved recognition to talented individuals across Sikkim." },
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Community", description: "Building a supportive community of artists and performers." },
  { icon: <Calendar className="w-6 h-6 text-primary" />, title: "Innovation", description: "Embracing new ideas and technologies to enhance our events." },
];

const timeline: TimelineItem[] = [
  { year: "2018", title: "Founded", description: "Started as a small event in Gangtok." },
  { year: "2019", title: "Expanded Statewide", description: "Reached all districts of Sikkim." },
  { year: "2021", title: "Virtual Events", description: "Held virtual shows during the pandemic." },
  { year: "2024", title: "Record Participation", description: "Over 250 participants showcased their talent." },
];

export default function AboutPage() {
  return (
    <>
      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-12">
        <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
          <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Story</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">The Journey of Sikkim&apos;s Biggest Talent Platform</h2>
          <p className="text-gray-500 md:text-xl">Founded in 2018 with a vision to provide a platform for the hidden talents of Sikkim.</p>
          </div>
          <p className="text-gray-500">From remote villages to urban centers, we have discovered extraordinary talents across categories like singing, dancing, acting, music, and more.</p>
          <Link href="/events">
          <Button className="bg-primary hover:bg-primary/90 text-white">Our Events <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2">
          <Image src="/02 About Section Main.jpg" alt="Talent Hunt Journey" fill className="object-cover rounded-lg" />
        </div>
        </div>
      </div>
      </section>
      {/* Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Journey</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Milestones</h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl">A look back at our journey of discovering extraordinary talents.</p>
          </div>
          <div className="relative mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                    <div className={`p-6 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Values</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">What We Stand For</h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl">The core principles that guide everything we do.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white shadow-sm w-full sm:w-[250px] max-w-[300px]">
                <div className="p-2 rounded-full bg-primary/20 w-fit">{value.icon}</div>
                <h3 className="text-xl font-bold mt-4">{value.title}</h3>
                <p className="mt-2 text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-full bg-primary/20">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Team */}
<section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Meet The Team</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Our Team</h2>
        <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl">The passionate individuals behind Sikkim&apos;s Premier Talent Hunt.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
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
      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Join Our Journey</h2>
            <p className="max-w-[900px] mx-auto md:text-xl">Be a part of Sikkim&apos;s biggest talent discovery platform.</p>
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">Upcoming Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}