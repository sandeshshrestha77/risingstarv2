import { ReactNode } from "react"

export interface Winner {
  name: string
  category: string
  prize: string
}

export interface Testimonial {
  name: string
  quote: string
  role: string
}

export interface AuditionDate {
  city: string
  date: string
}

export interface PastEventStatistics {
  participants: number
  audience: number
  categories: number
}

export interface UpcomingEventStatistics {
  estimatedParticipants: number
  firstPrize: string
  secondPrize: string
  thirdPrize: string
  categories: number
}

export interface OngoingEventStatistics {
  thirdPrize: any
  secondPrize: any
  firstPrize: any
  registeredParticipants: number
  prizePool: string
  categories: number
}

interface BaseEvent {
  id: string
  season: number
  title: string
  description: string
  longDescription: string
  date: string
  location: string
  image: string
  gallery: string[]
}

export interface PastEvent extends BaseEvent {
  statistics: PastEventStatistics
  winners: Winner[]
  testimonials: Testimonial[]
  registrationOpen: false
  status: "past"
}

export interface UpcomingEvent extends BaseEvent {
  statistics: UpcomingEventStatistics
  winners: never[]
  gallery: never[]
  highlights: string[]
  registrationDeadline: string
  auditionDates: AuditionDate[]
  registrationOpen: true
  status: "upcoming"
}

export interface OngoingEvent extends BaseEvent {
  statistics: OngoingEventStatistics
  winners: never[]
  gallery: string[]
  highlights: string[]
  registrationDeadline: string
  auditionDates: AuditionDate[]
  registrationOpen: false
  status: "ongoing"
}

export type Event = PastEvent | UpcomingEvent | OngoingEvent
