// Resume data exports for the game

import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Location } from '../game/types/game';
import { LOCATIONS } from '../game/utils/constants';

export const RESUME_LOCATIONS: Location[] = [
  {
    id: 'about',
    name: 'About Me',
    position: LOCATIONS.ABOUT.position,
    color: LOCATIONS.ABOUT.color,
    icon: '👤',
    component: About,
  },
  {
    id: 'experience',
    name: 'Experience',
    position: LOCATIONS.EXPERIENCE.position,
    color: LOCATIONS.EXPERIENCE.color,
    icon: '💼',
    component: Experience,
  },
  {
    id: 'education',
    name: 'Education',
    position: LOCATIONS.EDUCATION.position,
    color: LOCATIONS.EDUCATION.color,
    icon: '🎓',
    component: Education,
  },
  {
    id: 'projects',
    name: 'Projects',
    position: LOCATIONS.PROJECTS.position,
    color: LOCATIONS.PROJECTS.color,
    icon: '🚀',
    component: Projects,
  },
  {
    id: 'contact',
    name: 'Contact',
    position: LOCATIONS.CONTACT.position,
    color: LOCATIONS.CONTACT.color,
    icon: '📧',
    component: Contact,
  },
];

export const getLocationById = (id: string): Location | undefined => {
  return RESUME_LOCATIONS.find(loc => loc.id === id);
};
