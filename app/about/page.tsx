'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

const sponsors = [
  { name: "Sponsor 1", logo: "/past sponsor/1.jpg" },
  { name: "Sponsor 2", logo: "/past sponsor/2.jpg" },
  { name: "Sponsor 3", logo: "/past sponsor/3.jpg" },
  { name: "Sponsor 4", logo: "/past sponsor/4.jpg" },
  { name: "Sponsor 5", logo: "/past sponsor/5.jpg" },
  { name: "Sponsor 6", logo: "/past sponsor/6.jpg" },
  { name: "Sponsor 7", logo: "/past sponsor/7.jpg" },
  { name: "Sponsor 8", logo: "/past sponsor/8.jpg" },
  { name: "Sponsor 9", logo: "/past sponsor/9.jpg" },
  { name: "Sponsor 10", logo: "/past sponsor/10.jpg" },
  { name: "Sponsor 11", logo: "/past sponsor/11.jpg" },
  { name: "Sponsor 12", logo: "/past sponsor/12.jpg" },
  { name: "Sponsor 13", logo: "/past sponsor/13.jpg" },
  { name: "Sponsor 14", logo: "/past sponsor/14.jpg" },
  { name: "Sponsor 15", logo: "/past sponsor/15.jpg" },
  { name: "Sponsor 16", logo: "/past sponsor/16.jpg" },
  { name: "Sponsor 17", logo: "/past sponsor/17.jpg" },
  { name: "Sponsor 18", logo: "/past sponsor/18.jpg" },
  { name: "Sponsor 19", logo: "/past sponsor/19.jpg" },
  { name: "Sponsor 20", logo: "/past sponsor/20.jpg" },
  { name: "Sponsor 21", logo: "/past sponsor/21.jpg" },
  { name: "Sponsor 22", logo: "/past sponsor/22.jpg" },
  { name: "Sponsor 23", logo: "/past sponsor/23.jpg" },
  { name: "Sponsor 24", logo: "/past sponsor/24.jpg" },
  { name: "Sponsor 25", logo: "/past sponsor/25.jpg" },
  { name: "Sponsor 26", logo: "/past sponsor/26.jpg" },
];

interface TeamMember {
  name: string;
  role: string;
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
  { name: "Dinesh Rai", role: "Founder", image: "/team/john-doe.jpg" },
  { name: "Basant Rai", role: "Event Manager", image: "/team/jane-smith.jpg" },
  { name: "Sandesh Shrestha", role: "Developer", image: "/team/sam-wilson.jpg" },
  { name: "Gyatsen Gurung", role: "Executive Head", image: "/team/emily-davis.jpg" },
  { name: "Yangchen Lhamu Tamang", role: "Co-Executive Head", image: "/team/michael-brown.jpg" },
  { name: "Giwan Chettri", role: "Photographer", image: "/team/michael-brown.jpg" },
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
  { year: "2024", title: "Record Participation", description: "Over 1500 participants showcased their talent." },
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
                <p className="text-gray-500 md:text-xl">Founded in 2018 with a vision to provide a platform for the hidden talents of Sikkim, Sikkim Rising Star has grown into the state's most prestigious talent hunt competition.</p>
              </div>
              <p className="text-gray-500">What began as a small event in Gangtok has evolved into a statewide movement, reaching every district and uncovering exceptional talents from remote villages to bustling towns. With a mission to identify, nurture, and uplift local talent, the platform has become a launchpad for aspiring artists to shine on both national and international stages.</p>
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
<section className="w-full py-10 sm:py-12 md:py-24 lg:py-32">
  <div className="container px-4 sm:px-6">
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-3">
        <div className="inline-block rounded-lg bg-primary px-4 py-2 text-xs sm:text-sm text-white uppercase font-semibold">Meet The Team</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight sm:tracking-tighter">Our Team</h2>
        <p className="max-w-[90%] sm:max-w-[700px] mx-auto text-base sm:text-lg md:text-xl text-gray-600">
          The passionate individuals behind Sikkim&apos;s Premier Talent Hunt.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
      {team.map((member) => (
        <div
          key={member.name}
          className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all"
        >
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden mb-4">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
          <p className="text-primary text-sm sm:text-base mb-1">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Sponsors */}
<section className="py-12 sm:py-16 md:py-20 bg-gray-50">
  <div className="container px-4 sm:px-6">
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
      <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm text-primary mb-2 sm:mb-3 uppercase font-semibold">Thank You</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Trusted By</h2>
      <p className="text-gray-600 text-lg sm:text-xl">We are grateful to all our past supporters and partners whose valuable contributions helped shape the success of our previous seasons.</p>
    </div>

    {/* Carousel container with infinite scroll */}
    <div className="overflow-hidden relative">
      <div className="flex animate-marquee space-x-6 sm:space-x-8 md:space-x-12 px-2">
        {sponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="shrink-0 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all w-36 sm:w-40 h-24 flex items-center justify-center"
          >
            <div className="relative w-32 h-16">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
        {/* Duplicate sponsors for smooth scrolling */}
        {sponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}-duplicate`}
            className="shrink-0 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all w-36 sm:w-40 h-24 flex items-center justify-center"
          >
            <div className="relative w-32 h-16">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Tailwind CSS for infinite scrolling */}
<style jsx>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100vw); /* Use viewport width (vw) for consistency */
    }
  }

  .animate-marquee {
    animation: marquee 15s linear infinite; /* Adjust speed by changing the duration */
  }
`}</style>

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