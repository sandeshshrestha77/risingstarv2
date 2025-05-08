import type { Event } from "@/types/events"

export const events: Event[] = [
  {
    id: "rising-star-season-1",
    season: 1,
    title: "Rising Star Season 1",
    description: "The inaugural season that kickstarted a new era of talent recognition in Sikkim.",
    longDescription:
      "The inaugural season marked the beginning of a new era in talent discovery in Sikkim. Held in Gangtok, it attracted participants mainly from East Sikkim and laid the foundation for a platform where raw talent met opportunity. The overwhelming response and success of the show encouraged us to expand further.",
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
    status: "past",
  },
  {
    id: "rising-star-season-2",
    season: 2,
    title: "Rising Star Season 2",
    description: "A vibrant showcase of young stars competing in music, dance, and drama.",
    longDescription:
      "Season 2 saw wider participation across multiple districts, with improved production and judging standards. It introduced new categories like stand-up comedy and instrumental music, making the competition more diverse and exciting. This season also gained strong community support and media attention.",
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
    status: "past",
  },
  {
    id: "rising-star-season-3",
    season: 3,
    title: "Rising Star Season 3",
    description: "Season 3 brought together exceptional talents from across Sikkim and beyond.",
    longDescription:
      "After a pandemic-induced pause, Season 3 returned with greater energy and professionalism. The show reached all four districts of Sikkim and included digital promotions, live performances, and celebrity guest appearances. It was a massive hit and showcased the highest level of talent yet, setting the stage for an even bigger Season 4.",
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
    status: "past",
  },
  /*
  {
    id: "rising-star-season-3-5",
    season: 3.5,
    title: "Rising Star Special Edition",
    description: "A special mid-season showcase featuring the best talents from previous seasons.",
    longDescription:
      "This special edition brings together the most exceptional performers from our previous seasons for a unique showcase. Featuring collaborative performances, special celebrity guests, and interactive audience participation, this event bridges the gap between Season 3 and the upcoming Season 4. Don't miss this once-in-a-lifetime gathering of Sikkim's finest talents on one stage!",
    date: "April 15, 2025",
    location: "Gangtok",
    image: "/s3 main.jpg",
    gallery: Array.from({ length: 5 }, (_, i) => `/special edition/${i + 1}.jpg`),
    statistics: {
      registeredParticipants: 1200,
      firstPrize: 75000,
      secondPrize: 45000,
      thirdPrize: 30000,
      prizePool: 150000,
      categories: 6,
    },
    winners: [],
    registrationDeadline: "April 1, 2025",
    auditionDates: [
      { city: "Gangtok", date: "April 5 & 6, 2025" },
      { city: "Namchi", date: "April 8, 2025" },
    ],
    registrationOpen: false,
    status: "ongoing",
  },
  */
  {
    id: "rising-star-season-4",
    season: 4,
    title: "Rising Star Season 4",
    description: "The highly anticipated fourth season is here. New talents. Bigger stage. Higher stakes.",
    longDescription:
      "Be part of Sikkim's biggest talent hunt! Showcase your skills on a grand stage with international judges, live streaming, and unprecedented opportunities. Join us for an unforgettable journey of talent, creativity, and stardom.",
    date: "June 7, 2025",
    location: "Gangtok",
    image: "/s4 main.jpg",
    gallery: [],
    winners: [],
    statistics: {
      estimatedParticipants: 5000,
      firstPrize: 50000,
      secondPrize: 30000,
      thirdPrize: 20000,
      categories: 10,
    },
    registrationOpen: true,
    registrationDeadline: "June 6, 2025",
    auditionDates: 
    [{ city: "Gangtok", date: "June 7, 2025" },
     { city: "Gangtok", date: "June 8, 2025" }
    ],
    status: "upcoming",
  },
]

function hasDatePassed(dateString: string): boolean {
  const eventDate = new Date(dateString)
  const currentDate = new Date()

  return currentDate >= eventDate
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.status === "upcoming")
}

export function getOngoingEvents(): Event[] {
  return events.filter((event) => event.status === "ongoing")
}

export function getPastEvents(): Event[] {
  return events.filter((event) => event.status === "past").sort((a, b) => b.season - a.season)
}

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getFeaturedEvent(): Event | undefined {
  const ongoingEvents = getOngoingEvents()
  if (ongoingEvents.length > 0) {
    return ongoingEvents[0]
  }

  const upcomingEvents = getUpcomingEvents()
  if (upcomingEvents.length > 0) {
    return upcomingEvents[0]
  }

  const pastEvents = getPastEvents()
  if (pastEvents.length > 0) {
    return pastEvents[0]
  }

  return undefined
}
