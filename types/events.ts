export interface Winner {
  name: string;
  category: string;
  prize: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  role: string;
}

export interface AuditionDate {
  city: string;
  date: string;
}

export interface PastEventStatistics {
  participants: number;
  audience: number;
  categories: number;
}

export interface UpcomingEventStatistics {
  estimatedParticipants: number;
  prizePool: string;
  categories: number;
}

interface BaseEvent {
  id: string;
  season: number;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  location: string;
  image: string;
  gallery: string[];
  registrationOpen: boolean;
}

export interface PastEvent extends BaseEvent {
  statistics: PastEventStatistics;
  winners: Winner[];
  testimonials: Testimonial[];
  registrationOpen: false;
}

export interface UpcomingEvent extends BaseEvent {
  statistics: UpcomingEventStatistics;
  winners: never[];
  gallery: never[];
  highlights: string[];
  registrationDeadline: string;
  auditionDates: AuditionDate[];
  registrationOpen: true;
}

export type Event = PastEvent | UpcomingEvent;