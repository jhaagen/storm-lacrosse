// Single source of truth for season facts. Pages read from here so fees,
// dates and links can't drift between pages.

const shortDate = (date) => date.replace(/\/(\d{2})(\d{2})$/, '/$2');

export const fees = {
  early: 375,
  earlyDeadline: 'Dec 31, 2026',
  earlyDeadlineLong: 'December 31, 2026',
  regular: 400,
  regularStart: 'Jan 1, 2027',
  regularStartLong: 'January 1, 2027',
  usaLacrosse: 35,
};

export const feeCovers = [
  'Winter training, January to March',
  'Outdoor practices, March to May',
  'About 10 spring games and a tournament',
];

export const links = {
  registration: 'https://forms.gle/54TY9wYb4fy1861YA',
  medical: 'https://forms.gle/FLANqquahxuuLZNHA',
  usaLacrosse: 'https://www.usalacrosse.com/membership',
};

export const steps = [
  { label: 'Registration form', sublabel: 'Google Form', href: links.registration },
  { label: 'Medical release form', sublabel: 'Google Form', href: links.medical },
  {
    label: 'USA Lacrosse membership',
    labelWithFee: `USA Lacrosse membership ($${fees.usaLacrosse})`,
    sublabel: `$${fees.usaLacrosse}, required for every player`,
    href: links.usaLacrosse,
    logo: true,
  },
];

export const teams = [
  { name: '10U', start: '9/1/2016', end: '8/31/2018' },
  { name: '12U', start: '9/1/2014', end: '8/31/2016' },
  { name: '14U', start: '9/1/2012', end: '8/31/2014', note: 'Through 8th grade' },
].map((team) => ({ ...team, range: `${shortDate(team.start)} – ${shortDate(team.end)}` }));

export const practices = {
  winter: {
    when: 'Sunday mornings',
    time: '8:00–10:00 AM',
    dates: 'Jan 10 – end of March',
    datesLong: 'January 10 through the end of March',
    where: 'PSM Empowered',
    mapUrl: 'https://maps.app.goo.gl/fTatdYHzMGEiv4Az7',
  },
  spring: {
    when: 'Tuesdays & Thursdays',
    time: '6:00–7:30 PM',
    dates: 'Early March – end of May',
    datesLong: 'Beginning of March through the end of May',
    where: 'Perry Hill Elementary',
    mapUrl: 'https://maps.app.goo.gl/NpiDyWCZtUv2iYRZ6',
  },
};

export const areaTeams = {
  highSchool: [
    { name: 'Homestead', url: 'https://homesteadlax.com/' },
    { name: 'Leo', url: 'https://www.leolionslacrosse.org/' },
    { name: 'Carroll', url: 'https://www.facebook.com/carrolllacrosseclub/' },
    { name: 'Snider', url: 'https://sniderathletics.com/teams/4395897/lacrosse/varsity' },
    { name: 'Bishop Dwenger', url: 'https://athletics.bishopdwenger.com/lacrosse' },
    { name: 'Concordia Lutheran', url: 'https://www.clhscadets.com/apps/pages/lacrosse' },
  ],
  college: [
    { name: 'Trine University', url: 'https://trinethunder.com/sports/mens-lacrosse' },
    { name: 'Indiana Tech', url: 'https://indianatechwarriors.com/sports/mens-lacrosse' },
  ],
};

export const vendors = [
  { name: 'Lacrosse Monkey', url: 'https://www.lacrossemonkey.com/' },
  { name: 'Empire Lacrosse', url: 'https://empirelax.com/' },
];

export const contact = {
  email: 'fwstormlacrosse@outlook.com',
  facebook: 'https://www.facebook.com/fortwaynestormlacrosse',
};

// Home photo strip. The section renders only when all three exist, each with alt text:
// { src: '/assets/...', alt: '...' } for practice drill, team huddle, goal celebration.
export const photos = [];
