import axios from 'axios';
import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/abir_ar_rafi_dhrubo/',
  twitter: 'https://twitter.com',
  github: 'https://github.com/abir191197',
  linkedin: 'https://www.linkedin.com/in/abir191197/',
};

export const author = {
  name: 'M.Abir Alam',
  email: 'ardhrubo908@gmail.com',
};

export const seoData = {
  title: 'M.Abir Alam | Full-Stack Developer',
  description:
    'M.Abir Alam is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'M.Abir Alam',
    'M.Abir Alam',
    '@M.Abir Alam',
    'M.Abir Alam',
    'Portfolio',
    'Abir Portfolio ',
    'M.Abir Alam Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'education', url: '/#education' },
    { name: 'projects', url: '/#projects' },
    { name: 'Blog', url: '/#Blog' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section 
export const heroSection: HeroSectionType = {
  subtitle: "Welcome, I'm",
  title: 'M. Abir Alam',
  tagline: 'Full Stack Developer transforming ideas into elegant solutions',
  description:
    "I'm a Software Engineer specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies, I focus on creating efficient, scalable, and user-centric web applications using modern tech stacks.",
  specialText: 'React.js • TypeScript • Node.js • Express.js • MongoDB • PostgreSQL',

  cta: {
    title: 'View Resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section
export const aboutSection: AboutSectionType = { 
  title: 'About Me',
  list: { 
    title: 'Core Technologies & Expertise:',
    items: [
      'Frontend Development with React.js & Next.js',
      'Backend Architecture with Node.js & Express.js',
      'Database Design with MongoDB & PostgreSQL',
      'State Management using Redux & RTK Query',
      'UI/UX Implementation with Tailwind CSS',
      'API Development & Integration'
    ],
  },
  img: '/M.Abir_Alam.png',
};

// * Skills Section
export const skillsSection: SkillsSectionType = {
  title: 'Professional Skills',
  skills: [
    {
      id: getId(),
      title: 'Frontend Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing responsive and interactive web applications using React.js and Next.js',
        'Implementing efficient state management solutions with Redux and RTK Query',
        'Creating modern user interfaces with Tailwind CSS and custom styling',
        'Building type-safe applications using TypeScript for enhanced code quality',
      ],
      softwareSkills: [
        { name: 'React.js', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Redux', icon: 'logos:redux' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
      ],
    },
    {
      id: getId(),
      title: 'Backend Development',
      lottie: {
        light: '/lotties/backend.json',
        dark: '/lotties/backend-dark.json',
      },
      points: [
        'Designing and implementing RESTful APIs using Node.js and Express.js',
        'Developing robust database solutions with MongoDB and PostgreSQL',
        'Creating efficient data models using Mongoose ODM and Prisma ORM',
        'Implementing secure authentication and authorization systems',
      ],
      softwareSkills: [
        { name: 'Node.js', icon: 'logos:nodejs' },
        { name: 'Express.js', icon: 'logos:express' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'Mongoose', icon: 'devicon:mongoose-wordmark' }, // Placeholder

        { name: 'Prisma', icon: 'vscode-icons:file-type-prisma' },
      ],
    },
    {
      id: getId(),
      title: 'Development Tools & Practices',
      lottie: {
        light: '/lotties/tools.json',
        dark: '/lotties/tools-dark.json',
      },
      points: [
        'Version control and collaboration using Git and GitHub',
        'API testing and documentation with Postman',
        'UI/UX design and prototyping with Figma',
        'Following Software Development Life Cycle (SDLC) best practices',
      ],
      softwareSkills: [
        { name: 'Git', icon: 'logos:git' },
        { name: 'GitHub', icon: 'logos:github' },
        { name: 'Postman', icon: 'logos:postman' },
        { name: 'Figma', icon: 'logos:figma' },
        { name: 'VS Code', icon: 'logos:visual-studio-code' },
      ],
    },
  ],
};
// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'My Education and Achievements',
  experiences: [
    {
      company: 'Bachelor of Science',
      companyUrl: 'https://about.airmenus.in',
      role: 'BSCSE',
      started: 'Oct 2022',
      upto: 'Present',
      tasks: [
        "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
        'Developed and maintained responsive web applications for clients in the food and hospitality industry, enhancing their           online presence and customer engagement. Implemented Tailwind CSS to streamline the development process, reducing CSS            codebase by 20%',
        'Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded.',
      ],
    },
    {
      company: 'HSC',
      companyUrl: 'https://starkcon.com',
      role: 'StarkCon Cairo Fellow',
      started: 'January 2023',
      upto: 'March 2023',
      tasks: [
        'Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ',
        'Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ',
        'Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.',
        'Earned an exclusive NFT as proof of completion and custom swag kit.',
      ],
    },
    {
      company: 'Yellow Fryum',
      companyUrl: 'https://yellowfryum.com',
      role: 'Frontend Developer & Research Intern',
      started: 'March 2022',
      upto: 'May 2022',
      tasks: [
        'Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed',
        'Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.',
        'Met project deadlines consistently, delivering good-quality code and designs on time.',
      ],
    },
    {
      company: 'Google Cloud India',
      companyUrl: 'https://cloud.google.com/',
      role: 'Google Cloud Ready Facilitator',
      started: 'March 2022',
      upto: 'June 2022',
      tasks: [
        'Selected as Google Cloud Facilitator for my institution.',
        'Enrolled 600+ students from mine as well as students all across India.',
        'Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI',
        'At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks',
        'The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program.',
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};


//* Education Section

export const educationSection = {
  title: 'My Education and Achievements',
  education: [
    {
      institution: 'United International University',
      institutionUrl: 'https://www.uiu.ac.bd/',
      degree: 'Bachelor of Science in Computer Science and Engineering (BSCSE)',
      started: 'January 2019',
      upto: 'January 2024',
      achievements: [
        'Completed core courses in Algorithms, Data Structures, Software Engineering, and AI.',
        '1st Runner-Up, UIU CSE Project Show (Software Engineering Lab, Summer 2024).',
        '1st Runner-Up, UIU CSE Project Show (Final Year Project, Spring 2024).',
      ],
    },
    {
      institution: 'Rajbari Govt. College',
      institutionUrl: 'https://www.rajbarigovtcollege.edu.bd/',
      degree: 'Higher Secondary Certificate (HSC) in Science',
      started: 'July 2016',
      upto: 'June 2018',
      achievements: [],
    },
    {
      institution: 'Kumarkhali M. N. Secondary School',
      institutionUrl:
        'https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%8F%E0%A6%AE.%E0%A6%8F%E0%A6%A8._%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A6%9F_%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A6%BF%E0%A6%95_%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC',
      degree: 'Secondary School Certificate (SSC) in Science',
      started: 'January 2011',
      upto: 'December 2015',
      achievements: [],
    },
  ],
};





// * Projects Section

export const contactSection: ContactSectionType = {
  title: 'Get in Touch',
  subtitle: "What's Next?",
  paragraphs: [
    "I'm currently seeking remote job opportunities or exciting new challenges",
    'Whether you have a project in mind, want to collaborate, or just say hello—my inbox is always open!',
  ],
  link: `mailto:ardhrubo908@gmail.com`,
};
// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
