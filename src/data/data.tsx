import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
/*
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Noah Kahn',
  description: "Resume & More for Noah Kahn",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Noah Kahn.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hey There! I'm a Chicago based <strong className="text-stone-100">Student, Developer, and Entrepreneur
        </strong>, currently studying <strong className="text-stone-100">Physics and Molecular Engineering </strong>
         at <strong className="text-stone-100">The University of Chicago</strong>. Outside of the classroom, I've been 
         creating projects in Qiskit, contributing to open source, and diving down a different rabbit hole each day.
          
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Chess</strong>,
        making music on the <strong className="text-stone-100">piano</strong>, or exploring the incredible city of{' '}
        <strong className="text-stone-100">Chicago</strong>. Feel free to contact me! I'm always excited to learn 
        something new.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm in my first year at the University of Chicago, 
  where I'm majoring in Physics and Quantum Molecular Engineering. My journey so far has 
  been filled with a diverse exploration of subjects, both academically and beyond, and I'm
  so excited to discover more. One of my many interests and hobbies, programming, began when
  I discovered Scratch in the 4th grade. Since then, I've developed a proficiency in a variety
  of languages, tried nearly every operating system, and made probably over 100 different
  hello worlds. 
  
  Whether it be programming, physics, engineering, math, (or really just anything interesting),
  I'm always on the lookout for new ideas and opportunities. If you've got
  either of those, send them my way!
  `,
  aboutItems: [
    {label: 'Location', text: 'Chicago, IL', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'United States', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess, Piano, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Chicago', Icon: AcademicCapIcon},
    {label: 'Work', text: 'Looking for Internships', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'C-like Languages',
        level: 5,
      },
    ],
  },
  {
    name: 'Productivity Tools',
    skills: [
      {
        name: 'Microsoft 365 (Excel, Outlook, Teams...)',
        level: 10,
      },
      {
        name: 'Adobe Suite (Premiere, Photoshop, Acrobat...)',
        level: 10,
      },
      {
        name: 'Google Workspace (Docs, Sheets, Drive...)',
        level: 10,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Kind',
        level: 10,
      },
      {
        name: 'Problem-Solver',
        level: 9,
      },
      {
        name: 'Teamworker',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  /*
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'GLSL Fractals: Using the OpenGL Shading Language, I render complex mathematical objects to better understand them.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2023',
    location: 'University School of Nashville',
    title: 'High School Diploma',
    content: <p>In high school, I excelled in advanced courses, especially in chemistry, physics, and computer science, 
      but these STEM subjects were only one part of my education. Whether it be comparing varying translations of ancient
      epics, cutting &amp; slumping glass in a kiln, or even running a youtube channel - I constantly tried new things,
      expanded my palate, and picked up skills along the way.
    </p>,
  },
  {
    date: 'June 2027 (Anticipated)',
    location: 'University of Chicago',
    title: 'B.S. Molecular Engineering, B.A. Physics',
    content: <p>I'm currently a freshman here at UChicago, but even in my short time here, I've already fell in love
      with the school. I'm currently taking coursework in <b>physics</b>, <b>chemistry</b>, <b>math</b>, and the
      <b>humanities</b>, but in addition, I'm supplementing this in-class learning by attending guest lectures,
      participating in clubs, and learning through online resources. 
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - August 2022',
    location: 'Southwest Airlines',
    title: 'High School Intern',
    content: (
      <p>
        At Southwest, I did a little bit of everything. I wrote a Python script which automated several tasks
        in labeling and distributing PPE, I helped coordinate multi-department tasks, and after shadowing several
        different roles, I learned and could perform all tasks asked of me. Because this job was at the airport,
        I went through the Secure Identification Display Area badging process and had full unescorted access to
        the airport. As part of the SIDA badge, I held additional security and safety responsibilities.
      </p>
    ),
  },
  {
    date: 'July 2021 - September 2021',
    location: 'Henrietta Red',
    title: 'Dishwasher, Cook',
    content: (
      <p>
        Henrietta Red is a seafood restaurant in Nashville, Tennessee where I had my first job. I was initially
        hired as a dishwasher, and during any downtime, I would help prep food, make dishes, shuck oysters, and
        a whole variety of tasks. After awhile, I took on further roles in preparing raw seafood, baking, and 
        acting essentially as a chef. The most valuable things I took away from this experience were the people
        skills and character to handle almost any scenario. After working my first rush, most other problems seem 
        to become easier in comparison.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    /* Currently commented out
    {
      name: 'John Doe',
      text: 'He is just that guy',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    */
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to message me on any of the social links, and for the quickest response, please email me through the buttom below or at noahsilaskahn@gmail.com',
  items: [
    {
      type: ContactType.Email,
      text: 'noahsilaskahn@gmail.com',
      href: 'mailto:noahsilaskahn@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chicago, IL',
      href: 'https://maps.app.goo.gl/sbT5NzvQnNpAmgJY8',
    },
    {
      type: ContactType.Instagram,
      text: '@noahskahn',
      href: 'https://www.instagram.com/noahskahn/',
    },
    {
      type: ContactType.Github,
      text: 'noahskahn',
      href: 'https://github.com/noahskahn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/noahskahn'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/12282360/noah'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/noahsk/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/noahskahn/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/noahskahn/'},
];
