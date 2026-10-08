export type PageId = 'home' | 'events' | 'gallery' | 'register';

export interface EventRound {
  roundNumber: number;
  title: string;
  time: string;
  format: string;
  details: string;
  submissionRequirements: string[];
}

export interface EventItem {
  id: string;
  name: string;
  track?: string;
  isFlagshipCompetition?: boolean;
  oneLiner: string;
  // Extracted from brochure for the hover reveal:
  time: string;
  location: string;
  importantThings: string[];
  // Detailed fields for Sociothon and Ideathon:
  detailedOverview?: string;
  teamSize?: string;
  eligibility?: string;
  problemStatementSource?: string;
  dayTimeline?: {
    day: string;
    schedule: { time: string; activity: string }[];
  }[];
  rounds?: EventRound[];
  prizePool?: {
    winner: string;
    runnerUp: string;
    total?: string;
  };
  registrationUrl: string;
  buttonLabel?: string;
  registrationStatus: 'open' | 'opening_soon';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  year: string;
  image: string;
}
