// images
import Logo from '../src/assets/img/header/logo.jpg';
import m1g from '../src/assets/img/workouts/m1g.JPG';
import m2g from '../src/assets/img/workouts/m2g.JPG';
import m3g from '../src/assets/img/workouts/m3g.avif';
import m4g from '../src/assets/img/workouts/m4g.JPG';
import m5g from '../src/assets/img/workouts/m5g.jpg_large';
// import eb from '../src/assets/img/banner/eb.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
// import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import ContactUsIcn from '../src/assets/img/contactus/icons/telephone.svg';

export const header = {
  logo: Logo,
  btnHome: 'Home',
  btnGallery: 'Gym Gallery',
  btnTestimonials : 'Testimonials',
  btnAbout : 'About',
  btnContactUs : 'Contactus',
};
// data.js
export const navmobile = [
  {
    name: 'Home',
    href: '#home', // ID of the corresponding section on the page
    sectionId: 'home' // Add the section ID here
  },
  {
    name: 'About',
    href: '#about',
    sectionId: 'about'
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
    sectionId: 'testimonials'
  },
  {
    name: 'Gym Gallery',
    href: '#gymgallery',
    sectionId: 'gymgallery'
  },
  {
    name: 'Contactus',
    href: '#contactus',
    sectionId: 'contactus'
  },
  // Add more navigation items with their respective section IDs wait
];



export const nav = [
  { name: 'Home', href: '/' ,sectionId: 'home'},
  { name: 'gymgallery', href: '/',sectionId: 'gymgallery' },
  { name: 'Testimonials', href: '/',sectionId: 'testimonials' },
  { name: 'About', href: '/',sectionId: 'about' },
  { name: 'contactus', href: '',sectionId: 'contactus' },
];

export const banner = {
  titlePart1: 'Get the best part of your day',
  titlePart2: '- you fit here.',
  subtitle:
    'We provide serious fitness but within friendly and safe space.',
  img: '' ,
};

export const about = {
  icon: UsersIcn,
  title: 'About',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const testimonials = {
  // icon: CommunityIcn,
  title: 'Testimonials',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mohammed K.',
      message:
        '“Gym is Well maintained. Coach is very kind, a professional body builder and ofcourse a dietitian too. He makes everyone to focus on each muscle of their body throughout a week. A Good inspiration for our younger generation.”',
    },
    {
      image: CommunityImg3,
      name: 'hameed M',
      message:
        '“Awesome gym by Esa Misri sahab equipment is also very good.”',
    },
    {
      image: CommunityImg1,
      name: 'Salman A.',
      message:
        '“Have been a member since a long time , one of the best gym in old city and won’t Burn a hole in your pocket very affordable . Awesome equipment can go for it undoubtedly, strongly recommend.”',
    },
  ],
};
export const workouts = {
  icon: CalendarIcn,
  title: 'Gym Gallery',
  programs: [
    {
      image: m5g,
    //   name: 'Battle Rope',
    },
    {
      image: m1g,
    //   name: 'Boxing',
    },
    {
      image: m2g,
    //   name: 'Body Pump',
    },
    {
      image: m3g,
    //   name: 'Yoga',
    },
    {
      image: m4g,
    //   name: 'Full Body',
    },
  ],
};

export const contactus = {
    icon: ContactUsIcn,
    title1: 'Contact Us',
    subt1: '89195 45558 , 86867 07930',
  
};


export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. © Misri Gym🏋️‍♂️ 2023.',
};
