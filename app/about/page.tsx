'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

const SPONSORS = Array.from({ length: 26 }, (_, i) => ({
  name: `Sponsor ${i + 1}`,
  logo: `/past sponsor/${i + 1}.jpg`
}));

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

interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
}

const TEAM: TeamMember[] = [
  { name: "Dinesh Rai", role: "Founder", image: "/team/john-doe.jpg" },
  { name: "Basant Rai", role: "Event Manager", image: "/team/jane-smith.jpg" },
  { name: "Sandesh Shrestha", role: "Tech Lead", image: "/sandeshshrestha.jpeg" },
  { name: "Gyatsen Gurung", role: "Executive Head", image: "/team/emily-davis.jpg" },
  { name: "Yangchen Lhamu Tamang", role: "Co-Executive Head", image: "/team/michael-brown.jpg" },
  { name: "Giwan Chettri", role: "Photographer", image: "/team/michael-brown.jpg" },
];

const STATS: Stat[] = [
  { icon: <Users className="w-6 h-6 text-primary" />, value: "2500+", label: "Participants" },
  { icon: <Calendar className="w-6 h-6 text-primary" />, value: "4", label: "Events" },
  { icon: <Award className="w-6 h-6 text-primary" />, value: "5+", label: "Awards" },
  { icon: <CheckCircle className="w-6 h-6 text-primary" />, value: "10+", label: "Talent Categories" },
];

const VALUES: Value[] = [
  { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Excellence", description: "We strive for excellence in every aspect of our events and competitions." },
  { icon: <Award className="w-6 h-6 text-primary" />, title: "Recognition", description: "Providing well-deserved recognition to talented individuals across Sikkim." },
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Community", description: "Building a supportive community of artists and performers." },
  { icon: <Calendar className="w-6 h-6 text-primary" />, title: "Innovation", description: "Embracing new ideas and technologies to enhance our events." },
];

const TIMELINE: TimelineItem[] = [
  { year: "2018", title: "Founded", description: "Started as a small event in Gangtok." },
  { year: "2019", title: "Expanded Statewide", description: "Reached all districts of Sikkim." },
  { year: "2021", title: "Virtual Events", description: "Held virtual shows during the pandemic." },
  { year: "2024", title: "Record Participation", description: "Over 1500 participants showcased their talent." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-medium">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Sikkim's Premier Talent Platform
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Since 2018, Sikkim Rising Star has been the beacon for hidden talents across Sikkim, transforming a modest Gangtok event into the state's most celebrated talent hunt.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                From remote villages to vibrant towns, our mission is to discover, nurture, and elevate local talent, providing a stage for artists to shine nationally and globally.
              </p>
              <Link href="/events" passHref legacyBehavior>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3">
                  Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/02 About Section Main.jpg"
                alt="Talent Hunt Journey"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-medium">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Key Milestones
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              Celebrating the milestones that define our journey in uncovering Sikkim's extraordinary talents.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary"></div>
            {TIMELINE.map((item, index) => (
              <div
                key={`timeline-${index}`}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-medium">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Core Principles
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              The guiding values that shape our mission and events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={`value-${index}`}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={`stat-${index}`} className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/20">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-medium">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Dedicated Team
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              The passionate individuals driving Sikkim's premier talent hunt.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {TEAM.map((member) => (
                <div
                  key={`team-${member.name}`}
                  className="flex-shrink-0 w-64 relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="object-cover h-64 w-full"
                    priority={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Sponsors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Trusted Partners
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              We extend our heartfelt gratitude to our past sponsors whose support has been instrumental in our success.
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-6">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Join Our Journey
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl">
              Become a part of Sikkim's leading talent discovery platform and showcase your skills.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" passHref legacyBehavior>
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events" passHref legacyBehavior>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-primary"
                >
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}