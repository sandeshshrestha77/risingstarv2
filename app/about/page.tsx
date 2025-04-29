import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react";
import Link from "next/link";
import { getPastEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "About Us - Discover Our Journey & Team",
  description:
    "Join Sikkim's Premier Talent Platform! Discover extraordinary talents, key milestones, and our dedicated team. Showcase your skills - Contact us now!",
  openGraph: {
    title: "About Us - Discover Our Journey & Team",
    description:
      "Join Sikkim's Premier Talent Platform! Discover extraordinary talents, key milestones, and our dedicated team. Showcase your skills - Contact us now!",
    images: [
      {
        url: "/02 About Section Main.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://sikkimrisingstar.com/about",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const SPONSORS = Array.from({ length: 26 }, (_, i) => ({
  name: `Sponsor ${i + 1}`,
  logo: `/past sponsor/${i + 1}.jpg`,
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
  { name: "Dinesh Rai", role: "Founder", image: "/team/dineshrai.jpg" },
  { name: "Basant Rai", role: "Event Manager", image: "" },
  { name: "Sandesh Shrestha", role: "Tech Lead", image: "/team/sandeshshrestha.jpeg" },
  { name: "Gyatsen Gurung", role: "Executive Head", image: "" },
  { name: "Yangchen Lhamu Tamang", role: "Co-Executive Head", image: "" },
  { name: "Giwan Chettri", role: "Photographer", image: "" },
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
  const pastEvents = getPastEvents();
  
  const stats = [
    { 
      icon: <Calendar className="w-6 h-6 text-primary" />, 
      value: pastEvents.length.toString(), 
      label: "Seasons" 
    },
    { 
      icon: <Users className="w-6 h-6 text-primary" />, 
      value: `${pastEvents.reduce((total, event) => {
        if (event.statistics && 'participants' in event.statistics) {
          return total + (event.statistics.participants || 0);
        }
        return total;
      }, 0) || '500+'}+`, 
      label: "Participants" 
    },
    { 
      icon: <Award className="w-6 h-6 text-primary" />, 
      value: `${pastEvents.reduce((total, event) => total + (event.winners?.length || 0), 0) || '50+'}+`, 
      label: "Winners" 
    },
    { 
      icon: <CheckCircle className="w-6 h-6 text-primary" />, 
      value: "10+", 
      label: "Districts" 
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block rounded-lg bg-primary/5 px-4 py-2 border border-primary/10">
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">Sikkim's Premier Talent Platform</h1>
              <p className="text-lg text-gray-600">
                Since 2018, we've been discovering and nurturing exceptional talent across Sikkim,
                transforming dreams into reality on the biggest stage.
              </p>
            </div>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/02 About Section Main.jpg"
                alt="About Us"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-secondary/5 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Key Milestones</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              Celebrating the milestones that define our journey in uncovering Sikkim's extraordinary talents.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-primary/10 hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {TIMELINE.map((item, index) => (
                  <div 
                    key={`timeline-${index}`} 
                    className={`relative ${index % 2 === 0 ? 'md:pr-6 md:pl-0' : 'md:pl-6 md:pr-0'}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary -ml-1.5 z-10 hidden md:block"></div>
                    
                    {/* Content */}
                    <div className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} md:max-w-[45%]`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-base font-bold text-primary">{item.year}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-0.5">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">Our Values</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Our Core Principles</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              The guiding values that shape our mission and events.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={`value-${index}`}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">Our Team</span>
            <h2 className="text-4xl font-extrabold mb-4 text-neutral-800">Meet the People Behind</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our dedicated team works tirelessly to discover and showcase Sikkim's brightest talents.
            </p>
          </div>
          <div className="overflow-x-auto pb-2 no-scrollbar">
            <div className="flex gap-8 min-w-max">
              {TEAM.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 rounded-xl overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-[256px] h-[256px] mx-auto grayscale hover:grayscale-0 transition-all duration-300">
                    <div>
                      <Image
                        src={member.image || '/placeholder.jpg'}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="object-cover w-[256px] h-[256px] rounded-xl"
                      />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-5 py-3 rounded-lg shadow-sm text-center w-[85%] backdrop-blur">
                        <h3 className="text-base font-semibold text-neutral-800 leading-tight">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">Supported By</span>
            <h2 className="text-4xl font-extrabold mb-4 text-neutral-800">Our Esteemed Sponsors</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We are grateful for the incredible support from our sponsors.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:hidden">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={`mobile-${sponsor.name}-${index}`}
                className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition duration-300 w-1/6 h-16 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    sizes="112px"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap justify-center items-center gap-10">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={`desktop-${sponsor.name}-${index}`}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition duration-300 w-36 h-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    sizes="144px"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600">
            Interested in becoming a sponsor? <Link href="/contact" className="text-primary underline">Contact us</Link> to learn more about partnership opportunities.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Join Our Journey</h2>
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
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
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