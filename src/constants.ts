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
