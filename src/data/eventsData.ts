import { EventItem } from '../types';

export const SOCIOTHON_EVENT: EventItem = {
  id: 'sociothon',
  name: 'SOCIOTHON',
  track: 'Technical Track',
  isFlagshipCompetition: true,
  oneLiner: 'Build solutions for real-world social challenges and turn ideas into impact.',
  time: 'Day 2 · 10:00 AM - 03:00 PM',
  location: 'Auditorium',
  prizePool: {
    winner: '₹21,000',
    runnerUp: '₹11,000',
    total: '₹32,000'
  },
  importantThings: [
    'Prize Pool: Winner — ₹21,000 | Runner-up — ₹11,000 (Total ₹32,000)',
    'Team size: 4 members',
    'Eligibility: B.E./B.Tech students; strictly no cross-college teams',
    'Problem statements delivered via Unstop',
    'Technical architecture defense & functional prototype demonstration',
    'Prize Distribution on Day 2: 04:00 PM - 04:30 PM (Auditorium)'
  ],
  detailedOverview: 'Sociothon is the flagship technical competition of PRISM’26, focused on engineering software and hardware solutions for societal transformation. Participants tackle verified social problem statements provided via Unstop.',
  teamSize: '4 members',
  eligibility: 'B.E./B.Tech students; no cross-college teams',
  problemStatementSource: 'Problem statements via Unstop',
  registrationStatus: 'open',
  buttonLabel: 'REGISTER FOR SOCIOTHON →',
  registrationUrl: 'https://unstop.com/o/nHsywGA?lb=7950CjxR&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Dishapat2282'
};

export const IDEATHON_EVENT: EventItem = {
  id: 'ideathon',
  name: 'IDEATHON',
  track: 'Social Track',
  isFlagshipCompetition: true,
  oneLiner: 'Bring your ideas to the table and work on meaningful social problem statements.',
  time: 'Day 2 · 10:00 AM - 03:00 PM',
  location: 'Auditorium',
  prizePool: {
    winner: '₹7,000',
    runnerUp: '₹3,000',
    total: '₹10,000'
  },
  importantThings: [
    'Prize Pool: Winner — ₹7,000 | Runner-up — ₹3,000 (Total ₹10,000)',
    'Team size: 1–3 members',
    'Eligibility: Open to all Bachelor’s students',
    'Domain-wise social problem statements (Education, Healthcare, Governance, Environment, Community Welfare)',
    'Social impact slide pitch, feasibility defense & scaling roadmap',
    'Prize Distribution on Day 2: 04:00 PM - 04:30 PM (Auditorium)'
  ],
  detailedOverview: 'Ideathon is PRISM’26’s premier social ideation contest encouraging students across disciplines to formulate viable, scalable, and policy-backed strategies for urgent societal welfare challenges.',
  teamSize: '1–3 members',
  eligibility: 'Open to all Bachelor’s students',
  problemStatementSource: 'Domain-wise social problem statements (Education, Healthcare, Governance, Environment, Community Welfare)',
  registrationStatus: 'open',
  buttonLabel: 'REGISTER FOR IDEATHON →',
  registrationUrl: 'https://unstop.com/o/nHsywGA?lb=7950CjxR&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Dishapat2282'
};

// Vishwa Aakhyan: Same priority as Sociothon and Ideathon with same card size & information length
export const VISHWA_AAKHYAN_EVENT: EventItem = {
  id: 'vishwa-aakhyan',
  name: 'VISHWA AAKHYAN',
  track: 'Cultural Finale',
  isFlagshipCompetition: true,
  oneLiner: 'Closing segment — celebration of Maharashtra’s heritage through Marathi music, narration, and drama.',
  time: 'Day 2 · 04:30 PM - 06:00 PM',
  location: 'Auditorium',
  importantThings: [
    'Official grand closing segment and cultural culmination of PRISM’26',
    'Celebration of Maharashtra’s rich cultural, spiritual, and historical heritage',
    'Live soulful abhang, devotional Marathi music, and classical instruments',
    'Evocative storytelling, dramatic theatrical narrations, and stage enactment',
    'Open to all registered delegates, students, faculty, and visiting guests',
    'Venue: Main Auditorium (Day 2: 04:30 PM - 06:00 PM)'
  ],
  detailedOverview: 'Vishwa Aakhyan is PRISM’26’s signature cultural finale, uniting the entire institute in celebrating Maharashtra’s timeless art forms, classical music, and dramatic expressions on the main stage.',
  teamSize: 'Solo Vocalists, Instrumentalists & Cultural Troupe',
  eligibility: 'Open to all students, delegates, and registered attendees',
  problemStatementSource: 'Curated Marathi literary, devotional & dramatic compositions',
  registrationStatus: 'open',
  buttonLabel: 'REGISTER FOR VISHWA AAKHYAN →',
  registrationUrl: 'https://learner.vierp.in/event'
};

// UNMUTE (renamed from TED-x Talks):
export const UNMUTE_EVENT: EventItem = {
  id: 'unmute',
  name: 'UNMUTE',
  track: 'Speaker Sessions',
  isFlagshipCompetition: false,
  oneLiner: 'Curated speaker sessions running alongside Day 2.',
  time: 'Day 2 · 02:00 PM - 04:00 PM',
  location: 'Auditorium',
  importantThings: [
    'Curated speaker sessions running alongside Day 2 competition tracks',
    'Practitioners, changemakers, and domain experts sharing lived experiences',
    'Actionable insights and perspectives on future societal leadership',
    'Interactive audience Q&A with invited leaders'
  ],
  registrationStatus: 'open',
  buttonLabel: 'REGISTER →',
  registrationUrl: 'https://learner.vierp.in/event'
};

// Other events in exact required order with Location as Auditorium
// (conclave, tenure presentation, and youth floor removed per user request):
export const OTHER_EVENTS_ORDERED: EventItem[] = [
  {
    id: 'kala-kriti',
    name: 'KALA-KRITI',
    track: 'Cultural Showcase',
    isFlagshipCompetition: false,
    oneLiner: 'Cultural showcase of dance & music performances.',
    time: 'Day 1 · 04:00 PM - 06:00 PM',
    location: 'Auditorium',
    importantThings: [
      'Dance performances (Classical, Folk, Contemporary)',
      'Vocal & Instrumental Music performances',
      'Other creative & dramatic stage performances',
      'Auditions apply for participation'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/kala-kriti'
  },
  {
    id: 'ngo-talks',
    name: 'NGO TALKS',
    track: 'Grassroots Insights',
    isFlagshipCompetition: false,
    oneLiner: 'Representatives from leading non-governmental organisations share field insights, impact stories, and calls to action.',
    time: 'Day 1 · 12:00 PM - 02:00 PM',
    location: 'Auditorium',
    importantThings: [
      'Representatives from leading NGOs share field insights',
      'Connecting academic audiences with grassroots realities',
      'Focus areas: Education, healthcare, environment, and social equity',
      'Impact stories and calls to community action'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/ngo-talks'
  },
  {
    id: 'open-mind',
    name: 'OPEN MIND',
    track: 'Dialogue Platform',
    isFlagshipCompetition: false,
    oneLiner: 'Open-floor thought-exchange platform.',
    time: 'Day 1 · Running parallel to afternoon sessions',
    location: 'Auditorium',
    importantThings: [
      'Open-floor thought-exchange platform for students',
      'Spontaneous dialogue on pressing societal challenges',
      'Promotes youth voice and constructive discourse'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/open-mind'
  },
  UNMUTE_EVENT
];

export const EXPLORE_EVENTS_ORDERED: EventItem[] = [
  SOCIOTHON_EVENT,
  IDEATHON_EVENT,
  VISHWA_AAKHYAN_EVENT,
  ...OTHER_EVENTS_ORDERED
];

export const EVENTS_DATA: EventItem[] = EXPLORE_EVENTS_ORDERED;

export interface RegisterOptionItem {
  id: string;
  name: string;
  track: string;
  oneLiner: string;
  teamSize?: string;
  eligibility?: string;
  buttonLabel: string;
  registrationUrl: string;
  registrationStatus: 'open' | 'opening_soon';
}

export const THREE_REGISTER_OPTIONS: RegisterOptionItem[] = [
  {
    id: 'ideathon',
    name: 'IDEATHON',
    track: 'Social Track',
    oneLiner: 'Bring your ideas to the table and work on meaningful social problem statements.',
    teamSize: '1–3 members',
    eligibility: "Open to all Bachelor's students",
    buttonLabel: 'REGISTER FOR IDEATHON →',
    registrationUrl: 'https://unstop.com/o/nHsywGA?lb=7950CjxR&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Dishapat2282',
    registrationStatus: 'open'
  },
  {
    id: 'sociothon',
    name: 'SOCIOTHON',
    track: 'Technical Track',
    oneLiner: 'Build solutions for real-world social challenges and turn ideas into impact.',
    teamSize: '4 members',
    eligibility: 'B.E./B.Tech students; no cross-college teams',
    buttonLabel: 'REGISTER FOR SOCIOTHON →',
    registrationUrl: 'https://unstop.com/o/nHsywGA?lb=7950CjxR&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Dishapat2282',
    registrationStatus: 'open'
  },
  {
    id: 'more-events',
    name: 'MORE EVENTS',
    track: 'All PRISM’26 Tracks & Sessions',
    oneLiner: 'Register for Kala-Kriti cultural showcase, NGO Talks, UNMUTE speaker sessions, and Vishwa Aakhyan.',
    teamSize: 'Individual / Delegation / Troupe',
    eligibility: 'Open to youth, students & social units',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://learner.vierp.in/event',
    registrationStatus: 'open'
  }
];

export const FESTIVAL_TIMELINE = {
  day1: [
    { time: '10:30 AM - 12:00 PM', event: 'Inauguration Ceremony & Keynote Address (Auditorium)' },
    { time: '12:00 PM - 02:00 PM', event: 'NGO Talks (Auditorium)' },
    { time: '02:00 PM - 03:00 PM', event: 'Break / Lunch' },
    { time: '03:00 PM - 04:00 PM', event: 'Open Mind (Auditorium)' },
    { time: '04:00 PM - 06:00 PM', event: 'Kala-Kriti (Auditorium)' }
  ],
  day2: [
    { time: '09:00 AM - 10:00 AM', event: 'Networking & Briefing (Auditorium)' },
    { time: '10:00 AM - 12:00 PM', event: 'Sociothon & Ideathon - Round 1 (Auditorium)' },
    { time: '12:00 PM - 01:00 PM', event: 'Break / Lunch' },
    { time: '01:00 PM - 03:00 PM', event: 'Sociothon & Ideathon - Round 2 (Auditorium)' },
    { time: '02:00 PM - 04:00 PM', event: 'UNMUTE (Auditorium)' },
    { time: '04:00 PM - 04:30 PM', event: 'Prize Distribution - Day 2 (Auditorium)' },
    { time: '04:30 PM - 06:00 PM', event: 'Vishwa Aakhyan (Auditorium)' }
  ]
};

export const CONTACT_INFO = {
  organization: 'Social Welfare & Development Committee',
  institution: 'Vishwakarma Institute of Technology, Pune',
  campus: '(Bibwewadi & Kondhwa Campuses) — 411037',
  contacts: [
    { name: 'Amit Jain', phone: '90210 65817' },
    { name: 'Falguni Chaudhari', phone: '97630 07984' },
    { name: 'Kuldeep Dukare', phone: '93733 32969' },
    { name: 'Aditya Chiparikar', phone: '70570 70071' }
  ],
  email: 'vitswd@vit.edu',
  social: '@vitsocials',
  website: 'www.swd.vit.edu'
};
