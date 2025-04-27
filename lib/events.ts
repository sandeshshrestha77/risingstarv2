import { Event } from "@/types/events"

export const events: Event[] = [
  {
    id: "101",
    season: 1,
    title: "Rising Star Season 1",
    description: "The inaugural season that kickstarted a new era of talent recognition in Sikkim.",
    longDescription: "The inaugural season marked the beginning of a new era in talent discovery in Sikkim. Held in Gangtok, it attracted participants mainly from East Sikkim and laid the foundation for a platform where raw talent met opportunity. The overwhelming response and success of the show encouraged us to expand further.",
    date: "2018",
    location: "Gangtok",
    image: "/s1 main.jpg",
    gallery: Array.from({ length: 13 }, (_, i) => `/season 1/${i + 1}.jpg`),
    winners: [
      { name: "Ocean Rai", category: "Singing", prize: "₹10,000" },
      { name: "Rojan Limbu", category: "Dancing", prize: "₹5,000" },
      { name: "Laxmi Siwakoti", category: "Singing", prize: "₹2,500" },
    ],
    statistics: {
      participants: 250,
      audience: 1500,
      categories: 5,
    },
    testimonials: [],
    registrationOpen: false,
  },
  {
    id: "102",
    season: 2,
    title: "Rising Star Season 2",
    description: "A vibrant showcase of young stars competing in music, dance, and drama.",
    longDescription: "Season 2 saw wider participation across multiple districts, with improved production and judging standards. It introduced new categories like stand-up comedy and instrumental music, making the competition more diverse and exciting. This season also gained strong community support and media attention.",
    date: "2019",
    location: "Gangtok",
    image: "/s2 main.jpg",
    gallery: Array.from({ length: 29 }, (_, i) => `/season 2/${i + 1}.jpg`),
    winners: [
      { name: "Dynamic Flicker", category: "Dancing", prize: "₹80,000" },
      { name: "Ugen Bhutia", category: "Singing", prize: "₹40,000" },
      { name: "Rohit Rai", category: "Dancing", prize: "₹20,000" },
    ],
    statistics: {
      participants: 500,
      audience: 3000,
      categories: 7,
    },
    testimonials: [],
    registrationOpen: false,
  },
  {
    id: "103",
    season: 3,
    title: "Rising Star Season 3",
    description: "Season 3 brought together exceptional talents from across Sikkim and beyond.",
    longDescription: "After a pandemic-induced pause, Season 3 returned with greater energy and professionalism. The show reached all four districts of Sikkim and included digital promotions, live performances, and celebrity guest appearances. It was a massive hit and showcased the highest level of talent yet, setting the stage for an even bigger Season 4.",
    date: "2022",
    location: "Gangtok",
    image: "/s3 main.jpg",
    gallery: Array.from({ length: 40 }, (_, i) => `/season 3/${i + 1}.jpg`),
    winners: [
      { name: "The Dream Band", category: "Singing", prize: "₹1,00,000" },
      { name: "Sidhant Lama", category: "Mimicry", prize: "₹50,000" },
      { name: "Avinash Khati", category: "Singing", prize: "₹30,000" },
    ],
    statistics: {
      participants: 1000,
      audience: 5000,
      categories: 8,
    },
    testimonials: [],
    registrationOpen: false,
  },
  {
    id: "201",
    season: 4,
    title: "Rising Star Season 4",
    description: "The highly anticipated fourth season is here. New talents. Bigger stage. Higher stakes.",
    longDescription: "Be part of Sikkim's biggest talent hunt! Showcase your skills on a grand stage with international judges, live streaming, and unprecedented opportunities. Join us for an unforgettable journey of talent, creativity, and stardom.",
    date: "June 7, 2025",
    location: "Gangtok",
    image: "/s4 main.jpg",
    gallery: [],
    winners: [],
    statistics: {
      estimatedParticipants: 5000,
      prizePool: "2,00,000",
      categories: 10,
    },
    highlights: [],
    registrationOpen: true,
    registrationDeadline: "June 6, 2025",
    auditionDates: [
      { city: "Gangtok", date: "June 7 & 8, 2025" }
    ],
  }
]

export function getUpcomingEvents(): Event[] {
  return events.filter(event => event.registrationOpen)
}

export function getPastEvents(): Event[] {
  return events
    .filter(event => !event.registrationOpen)
    .sort((a, b) => b.season - a.season)
}

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id)
}

export function getFeaturedEvent(): Event | undefined {
  return events.find(event => event.registrationOpen)
}