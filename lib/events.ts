import { Event } from "@/types/events"

export const events: Event[] = [
  {
    id: "101",
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
  {
    id: "102",
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
  {
    id: "103",
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
  {
    id: "201",
    season: 4,
    title: "Rising Star Season 4",
    description: "The highly anticipated fourth season is here. New talents. Bigger stage. Higher stakes.",
    longDescription: "Be part of Sikkim's biggest talent hunt! Showcase your skills on a grand stage with international judges, live streaming, and unprecedented opportunities. Join us for an unforgettable journey of talent, creativity, and stardom.",
    date: "To be Decided",
    location: "To be Decided",
    image: "/s4 main.jpg",
    gallery: [],
    winners: [],
    statistics: {
      estimatedParticipants: 1000,
      prizePool: "To be Decided",
      categories: 10,
    },
    highlights: [
      "International panel of judges",
      "Live streaming on major platforms",
      "Professional mentorship program",
      "Industry networking opportunities",
      "Recording contract for winners",
      "National media coverage"
    ],
    registrationOpen: true,
    registrationDeadline: "To be Decided",
    auditionDates: [
      { city: "Coming soon", date: "To be Decided" }
    ],
  }
]

export function getUpcomingEvents() {
  return events.filter(event => event.registrationOpen)
}

export function getPastEvents() {
  return events.filter(event => !event.registrationOpen).sort((a, b) => b.season - a.season)
}

export function getEventById(id: string) {
  return events.find(event => event.id === id)
}

export function getFeaturedEvent() {
  return events.find(event => event.registrationOpen)
}