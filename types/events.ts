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

export interface EventFixture {
  day: number
  date: string
  location: string
  description: string
  round?: string
}

export interface PastEventStatistics {
  participants: number
  audience: number
  categories: number
}

export interface UpcomingEventStatistics {
  estimatedParticipants: number
  firstPrize: number
  secondPrize: number
  thirdPrize: number
  categories: number
}

export interface OngoingEventStatistics {
  thirdPrize: number
  secondPrize: number
  firstPrize: number
  registeredParticipants: number
  prizePool: number
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
  highlights?: string[]
  registrationDeadline: string
  auditionDates: AuditionDate[]
  registrationOpen: true
  status: "upcoming"
}

export interface OngoingEvent extends BaseEvent {
  statistics: OngoingEventStatistics
  winners: never[]
  gallery: string[]
  highlights?: string[]
  fixtures: EventFixture[]
  registrationOpen: false
  status: "ongoing"
}

export type Event = PastEvent | UpcomingEvent | OngoingEvent
