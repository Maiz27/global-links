import hilux from '/public/imgs/vehicles/hilux.jpg';
import lc79 from '/public/imgs/vehicles/79.jpg';
import lc76 from '/public/imgs/vehicles/76.jpg';
import v8 from '/public/imgs/vehicles/v8.jpg';
import lexus from '/public/imgs/vehicles/lexus.jpg';
import prado from '/public/imgs/vehicles/prado.jpg';
import fortuner from '/public/imgs/vehicles/fortuner.jpg';
import hiace from '/public/imgs/vehicles/hiace.jpg';

import { TbBrandToyota } from 'react-icons/tb';
import {
  FaTags,
  FaSprayCanSparkles,
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
    icon: FaTags,
  },
  {
    title: 'Painting and Washing',
    paragraph:
      'Our state-of-the-art facility boasts 12 bays dedicated to painting and washing, ensuring your vehicle maintains its pristine appearance.',
    icon: FaSprayCanSparkles,
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

export const TabCategories = ['SUVs', 'Trucks', 'Bus'];

export const vehicles = [
  {
    name: 'Hilux',
    year: 2023,
    category: 'Trucks',
    image: hilux,
  },
  {
    name: 'Land Cruiser 79',
    year: 2024,
    category: 'Trucks',
    image: lc79,
  },
  {
    name: 'Land Cruiser 76',
    year: 2024,
    category: 'SUVs',
    image: lc76,
  },
  {
    name: 'Land Cruiser V8',
    year: 2024,
    category: 'SUVs',
    image: v8,
  },
  {
    name: 'Lexus TX',
    year: 2024,
    category: 'SUVs',
    image: lexus,
  },
  {
    name: 'Cruiser Prado',
    year: 2024,
    category: 'SUVs',
    image: prado,
  },
  {
    name: 'Fortuner',
    year: 2024,
    category: 'SUVs',
    image: fortuner,
  },

  {
    name: 'Hiace HighTop',
    year: 2024,
    category: 'Bus',
    image: hiace,
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
