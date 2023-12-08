import tacoma23 from '/public/imgs/vehicles/Tacoma23.jpg';
import tundra24 from '/public/imgs/vehicles/tundra24.jpg';
import tundraForce24 from '/public/imgs/vehicles/tundraForce24.png';
import highlander24 from '/public/imgs/vehicles/highlander24.jpg';
import BX24 from '/public/imgs/vehicles/BX24.jpg';
import RAVA from '/public/imgs/vehicles/RAVA.jpg';
import runner24 from '/public/imgs/vehicles/4runner24.jpg';
import Sequoia24 from '/public/imgs/vehicles/Sequoia24.jpg';
import crown24 from '/public/imgs/vehicles/crown24.jpg';
import priusPrime24 from '/public/imgs/vehicles/priusPrime24.jpg';
import grCorolla from '/public/imgs/vehicles/grCorolla24.jpg';
import camry24 from '/public/imgs/vehicles/camry24.jpg';
import grSupra from '/public/imgs/vehicles/grSupra.jpg';

import { TbBrandToyota } from 'react-icons/tb';
import {
  FaCartShopping,
  FaPaintRoller,
  FaToolbox,
  FaUserGear,
  FaHandshake,
} from 'react-icons/fa6';

export const routes = [
  {
    name: 'Vehicles',
    href: '/vehicles',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'After Sales',
    href: '/after-sales',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

export const whatWeDoList = [
  {
    title: 'Authorized Toyota Service',
    paragraph:
      'As an authorized Toyota service station, we provide top-notch maintenance and repair services for your Toyota vehicle, ensuring it performs at its best',
    icon: TbBrandToyota,
  },
  {
    title: 'Toyota Vehicle Sales',
    paragraph:
      "Explore our showroom filled with a wide selection of brand-new Toyota vehicles, each representing Toyota's hallmark quality, innovation, and reliability",
    icon: FaCartShopping,
  },
  {
    title: 'Painting and Washing',
    paragraph:
      'Our state-of-the-art facility boasts 12 bays dedicated to painting and washing, ensuring your vehicle maintains its pristine appearance.',
    icon: FaPaintRoller,
  },
  {
    title: 'Quality Parts and Accessories',
    paragraph:
      'We offer genuine Toyota parts and accessories, ensuring your vehicle receives only the best components for optimal performance.',
    icon: FaToolbox,
  },
  {
    title: 'Customer-Centric Approach',
    paragraph:
      'We prioritize your needs and satisfaction, delivering a personalized experience that goes beyond just selling cars or servicing vehicles.',
    icon: FaUserGear,
  },
  {
    title: 'Community Engagement',
    paragraph:
      'We are actively involved in community projects and initiatives, making a positive impact on the lives of those we serve.',
    icon: FaHandshake,
  },
];

export const TabCategories = ['Cars & Minivan', 'Trucks', 'SUVs'];

export const vehicles = [
  {
    name: 'Tacoma',
    year: 2023,
    category: 'Trucks',
    image: tacoma23,
  },
  {
    name: 'Tundra',
    year: 2024,
    category: 'Trucks',
    image: tundra24,
  },
  {
    name: 'Tundra i-FORCE MAX',
    year: 2024,
    category: 'Trucks',
    image: tundraForce24,
  },
  {
    name: 'Highlander',
    year: 2024,
    category: 'SUVs',
    image: highlander24,
  },
  {
    name: 'bZ4X',
    year: 2024,
    category: 'SUVs',
    image: BX24,
  },
  {
    name: 'RAVA',
    year: 2024,
    category: 'SUVs',
    image: RAVA,
  },
  {
    name: '4Runner',
    year: 2024,
    category: 'SUVs',
    image: runner24,
  },
  {
    name: 'Sequoia',
    year: 2024,
    category: 'SUVs',
    image: Sequoia24,
  },
  {
    name: 'Toyota Crown',
    year: 2024,
    category: 'Cars & Minivan',
    image: crown24,
  },
  {
    name: 'Prius Prime',
    year: 2024,
    category: 'Cars & Minivan',
    image: priusPrime24,
  },
  {
    name: 'GR Corolla',
    year: 2024,
    category: 'Cars & Minivan',
    image: grCorolla,
  },
  {
    name: 'Camry',
    year: 2024,
    category: 'Cars & Minivan',
    image: camry24,
  },
  {
    name: 'GR Supra',
    year: 2024,
    category: 'Cars & Minivan',
    image: grSupra,
  },
];

//Framer motion variables
export const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

export const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

export const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
