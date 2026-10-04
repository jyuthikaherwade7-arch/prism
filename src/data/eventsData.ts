import { EventItem } from '../types';

export const SOCIOTHON_EVENT: EventItem = {
  id: 'sociothon',
  name: 'SOCIOTHON',
  track: 'Technical Track',
  isFlagshipCompetition: true,
  oneLiner: 'Build solutions for real-world social challenges and turn ideas into impact.',
  time: 'Day 2 · 10:00 AM - 12:00 PM (Round 1) & 01:00 PM - 03:00 PM (Round 2)',
  location: 'Auditorium',
  importantThings: [
    'Team size: 4 members',
    'Eligibility: B.E./B.Tech students; strictly no cross-college teams',
    'Problem statements delivered via Unstop',
    'Round 1: 15-minute PPT Idea Pitch & system architecture defense',
    'Round 2: Prototype & final presentation after Round 1 selection',
    'Prize Distribution on Day 2: 04:00 PM - 04:30 PM (Auditorium)'
  ],
  detailedOverview: 'Sociothon is the flagship technical competition of PRISM’26, focused on engineering software and hardware solutions for societal transformation. Participants tackle verified social problem statements provided via Unstop.',
  teamSize: '4 members',
  eligibility: 'B.E./B.Tech students; no cross-college teams',
  problemStatementSource: 'Problem statements via Unstop',
  dayTimeline: [
    {
      day: 'Day 2 (Competition Day)',
      schedule: [
        { time: '09:00 AM - 10:00 AM', activity: 'Networking & Briefing Session' },
        { time: '10:00 AM - 12:00 PM', activity: 'Round 1: Idea Pitch (15 min evaluation per team)' },
        { time: '12:00 PM - 01:00 PM', activity: 'Break / Lunch' },
        { time: '01:00 PM - 03:00 PM', activity: 'Round 2: Prototype & Final Presentation (After Selection)' },
        { time: '04:00 PM - 04:30 PM', activity: 'Prize Distribution - Day 2' }
      ]
    }
  ],
  rounds: [
    {
      roundNumber: 1,
      title: 'Round 1: Idea Pitch',
      time: '10:00 AM - 12:00 PM (Day 2)',
      format: '15-minute presentation per team before technical panel',
      details: 'Teams present their technical architecture, chosen problem statement from Unstop, feasibility analysis, tech stack, and social impact strategy.',
      submissionRequirements: [
        'Presentation deck (PPT format, maximum 10-12 slides)',
        'System architecture diagram & data flow design',
        'Clearly defined target societal beneficiary and proposed KPI metrics'
      ]
    },
    {
      roundNumber: 2,
      title: 'Round 2: Prototype & Final Presentation',
      time: '01:00 PM - 03:00 PM (Day 2)',
      format: 'Live functional demonstration & intensive jury defense',
      details: 'Shortlisted teams from Round 1 present their working prototype / live deployment, source codebase, edge-case testing, and roadmap for real-world field deployment.',
      submissionRequirements: [
        'Working prototype / functional code demonstration',
        'GitHub / repository submission with technical documentation',
        'Live interactive demo and response to jury technical cross-examination'
      ]
    }
  ],
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
  time: 'Day 2 · 10:00 AM - 12:00 PM (Round 1) & 01:00 PM - 03:00 PM (Round 2)',
  location: 'Auditorium',
  importantThings: [
    'Team size: 1–3 members',
    'Eligibility: Open to all Bachelor’s students',
    'Domain-wise social problem statements (Education, Healthcare, Governance, Environment, Community Welfare)',
    'Round 1: PPT Presentation & Idea Pitch',
    'Round 2: Final In-Depth Submission & Jury Defense after Round 1 selection',
    'Prize Distribution on Day 2: 04:00 PM - 04:30 PM (Auditorium)'
  ],
  detailedOverview: 'Ideathon is PRISM’26’s premier social ideation contest encouraging students across disciplines to formulate viable, scalable, and policy-backed strategies for urgent societal welfare challenges.',
  teamSize: '1–3 members',
  eligibility: 'Open to all Bachelor’s students',
  problemStatementSource: 'Domain-wise social problem statements (Education, Healthcare, Governance, Environment, Community Welfare)',
  dayTimeline: [
    {
      day: 'Day 2 (Competition Day)',
      schedule: [
        { time: '09:00 AM - 10:00 AM', activity: 'Networking & Briefing Session' },
        { time: '10:00 AM - 12:00 PM', activity: 'Round 1: PPT Presentation & Idea Pitch' },
        { time: '12:00 PM - 01:00 PM', activity: 'Break / Lunch' },
        { time: '01:00 PM - 03:00 PM', activity: 'Round 2: Final Submission & In-Depth Jury Defense' },
        { time: '04:00 PM - 04:30 PM', activity: 'Prize Distribution - Day 2' }
      ]
    }
  ],
  rounds: [
    {
      roundNumber: 1,
      title: 'Round 1: PPT Presentation & Idea Pitch',
      time: '10:00 AM - 12:00 PM (Day 2)',
      format: 'Structured slide pitch & initial domain evaluation',
      details: 'Teams present their domain-wise social solution addressing designated issues in education, healthcare, environment, or civic governance.',
      submissionRequirements: [
        'Initial slide deck (PPT format) outlining core problem analysis',
        'Target demographic definition & field viability analysis',
        'Proposed implementation roadmap and cost-efficiency model'
      ]
    },
    {
      roundNumber: 2,
      title: 'Round 2: Final In-Depth Submission & Jury Defense',
      time: '01:00 PM - 03:00 PM (Day 2)',
      format: 'Selected finalists defend complete social execution framework',
      details: 'Shortlisted teams undergo comprehensive jury review evaluating scalability, regulatory/policy alignment, community sustainability, and measurable outcome impact.',
      submissionRequirements: [
        'Refined comprehensive presentation incorporating Round 1 jury feedback',
        'Policy & execution framework document',
        'Final Q&A defense before social development leaders and jury'
      ]
    }
  ],
  registrationStatus: 'open',
  buttonLabel: 'REGISTER FOR IDEATHON →',
  registrationUrl: 'https://unstop.com/o/nHsywGA?lb=7950CjxR&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Dishapat2282'
};

// All other events in exact required order with Location as Auditorium:
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
    id: 'youth-floor',
    name: 'THE YOUTH FLOOR',
    track: 'Youth Parliament',
    isFlagshipCompetition: false,
    oneLiner: 'Youth parliament simulation — open to Youth & Social Units.',
    time: 'Day 1 · 09:00 AM - 10:30 AM',
    location: 'Auditorium',
    importantThings: [
      'Mock-parliamentary youth parliament format',
      'Eligibility: Youth & Social Units and eligible student teams',
      'Team size: 4 members',
      'Awards: Best Speaker, Best Team, and Overall Winners'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/youth-floor'
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
    id: 'conclave',
    name: 'CONCLAVE',
    track: 'Thought-Exchange',
    isFlagshipCompetition: false,
    oneLiner: 'Open-floor thought-exchange platform where participants from all backgrounds voice perspectives on social, civic, and innovation themes.',
    time: 'Day 1 · 03:00 PM - 04:00 PM',
    location: 'Auditorium',
    importantThings: [
      'Open-floor thought-exchange platform for all participants',
      'Themes: Social transformation, civic reforms, and innovation',
      'Structured for inclusive, facilitated dialogue without rigid formality',
      'Direct dialogue between youth, leaders, and policymakers'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/conclave'
  },
  {
    id: 'vishwa-aakhyan',
    name: 'VISHWA AAKHYAN',
    track: 'Cultural Finale',
    isFlagshipCompetition: false,
    oneLiner: 'Closing segment — celebration of Maharashtra’s heritage through Marathi music, narration, and drama.',
    time: 'Day 2 · 04:30 PM - 06:00 PM',
    location: 'Auditorium',
    importantThings: [
      'The official closing segment of Day 2',
      'Celebration of Maharashtra’s rich cultural heritage',
      'Soulful Marathi music, evocative narration, and traditional stage drama',
      'Brings the 2-day PRISM programme to a culturally resonant close'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/vishwa-aakhyan'
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
  {
    id: 'ted-talks',
    name: 'TED-x TALKS',
    track: 'Speaker Sessions',
    isFlagshipCompetition: false,
    oneLiner: 'Curated speaker sessions running alongside Day 2.',
    time: 'Day 2 · 02:00 PM - 04:00 PM',
    location: 'Auditorium',
    importantThings: [
      'Curated speaker sessions running alongside Day 2 competition tracks',
      'Practitioners, changemakers, and domain experts sharing lived experiences',
      'Actionable insights and perspectives on future societal leadership'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/ted-talks'
  },
  {
    id: 'tenure-presentations',
    name: 'TENURE PRESENTATIONS',
    track: 'Social Units',
    isFlagshipCompetition: false,
    oneLiner: 'Exclusive presentations for registered Youth & Social Units as per programme guidelines.',
    time: 'Day 1 · 12:00 PM - 02:00 PM',
    location: 'Auditorium',
    importantThings: [
      'Youth & Social Unit-exclusive event on Day 1',
      'Open specifically to registered Youth & Social Units',
      'Annual review of social service tenures, impact initiatives, and committee records'
    ],
    registrationStatus: 'open',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://prism26.org/register/tenure-presentations'
  }
];

export const EXPLORE_EVENTS_ORDERED: EventItem[] = [
  SOCIOTHON_EVENT,
  IDEATHON_EVENT,
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
    oneLiner: 'Register for The Youth Floor, Kala-Kriti cultural showcase, NGO Talks, Conclave thought-exchange, and Vishwa Aakhyan.',
    teamSize: 'Individual / Delegation / Troupe',
    eligibility: 'Open to youth, students & social units',
    buttonLabel: 'REGISTER →',
    registrationUrl: 'https://learner.vierp.in/event',
    registrationStatus: 'open'
  }
];

export const FESTIVAL_TIMELINE = {
  day1: [
    { time: '09:00 AM - 10:30 AM', event: 'The Youth Floor (Auditorium)' },
    { time: '10:30 AM - 12:00 PM', event: 'Inauguration Ceremony & Keynote Address (Auditorium)' },
    { time: '12:00 PM - 02:00 PM', event: 'NGO Talks (Auditorium) / Tenure Presentation' },
    { time: '02:00 PM - 03:00 PM', event: 'Break / Lunch' },
    { time: '03:00 PM - 04:00 PM', event: 'Conclave (Auditorium)' },
    { time: '04:00 PM - 06:00 PM', event: 'Kala-Kriti (Auditorium)' }
  ],
  day2: [
    { time: '09:00 AM - 10:00 AM', event: 'Networking & Briefing (Auditorium)' },
    { time: '10:00 AM - 12:00 PM', event: 'Sociothon & Ideathon - Round 1 (Auditorium)' },
    { time: '12:00 PM - 01:00 PM', event: 'Break / Lunch' },
    { time: '01:00 PM - 03:00 PM', event: 'Sociothon & Ideathon - Round 2 (Auditorium)' },
    { time: '02:00 PM - 04:00 PM', event: 'TED-x Talks (Auditorium)' },
    { time: '04:00 PM - 04:30 PM', event: 'Prize Distribution - Day 2 (Auditorium)' },
    { time: '04:30 PM - 06:00 PM', event: 'Vishwa Aakhyan (Auditorium)' }
  ]
};

export const CONTACT_INFO = {
  organization: 'Social Welfare & Development Committee',
  institution: 'Vishwakarma Institute of Technology, Pune',
  campus: '(Bibwewadi & Kondhwa Campuses) — 411037',
  contacts: [
    { name: 'Amit Jain', phone: '+91 90210 65817' },
    { name: 'Falguni Chaudhari', phone: '+91 97630 07984' },
    { name: 'Kuldeep Dukare', phone: '+91 93733 32969' },
    { name: 'Aditya Chiparikar', phone: '+91 70570 70071' }
  ],
  email: 'vitswd@vit.edu',
  social: '@vitsocials',
  website: 'www.swd.vit.edu'
};
