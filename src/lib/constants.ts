import { TbBrandToyota } from 'react-icons/tb';
import {
  FaTags,
  FaSprayCanSparkles,
  FaToolbox,
  FaUserGear,
  FaHandshake,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMedal,
  FaCircleUser,
  FaEnvelope,
  FaPhone,
  FaEnvelopeOpenText,
  FaComment,
  FaChargingStation,
  FaCarBattery,
  FaSnowflake,
  FaSmog,
  FaRegCalendarCheck,
  FaOilCan,
  FaHeadset,
} from 'react-icons/fa6';
import {
  FaTools,
  FaDotCircle,
  FaHandPaper,
  FaGripHorizontal,
  FaCogs,
  FaHeartbeat,
  FaShieldAlt,
  FaUserCog,
} from 'react-icons/fa';

const one = '/imgs/team/1.jpg';
const two = '/imgs/team/2.jpg';
const three = '/imgs/team/3.jpg';
const four = '/imgs/team/4.jpg';
const five = '/imgs/team/5.jpg';
const six = '/imgs/team/6.jpg';

import { blogBody } from './types';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const baseURl = 'https://globalinksauto.com';

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
    name: 'Services',
    href: '/services',
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

export const whyChooseUs = [
  {
    title: 'Authorized Toyota Dealer',
    paragraph:
      "As the official representative of Toyota in South Sudan, we offer a wide range of vehicles, from rugged SUVs to sleek sedans, all backed by Toyota's legendary reliability.",
    icon: TbBrandToyota,
  },
  {
    title: 'Expertise and Experience',
    paragraph:
      'With over 15 years in the automotive industry, our skilled professionals offer unmatched expertise in vehicle selection, maintenance, and care.',
    icon: FaMedal,
  },
  {
    title: 'Customer-Centric Approach',
    paragraph:
      'Your satisfaction is our priority. We provide personalized services, ensuring each client receives attention tailored to their unique needs.',
    icon: FaUserGear,
  },
  {
    title: 'Unwavering Commitment to Quality',
    paragraph:
      'Every vehicle and service offered meets stringent quality standards, ensuring peace of mind with every purchase.',
    icon: FaHandshake,
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

export const socials = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/globalautolinkscompanylimites8?igshid=Nmo4amo2c2EwNDhy',
    icon: FaInstagram,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100080486983630&mibextid=ZbWKwL',
    icon: FaFacebookF,
  },
  {
    title: 'Whatsapp',
    href: 'https://wa.me/211912301179',
    icon: FaWhatsapp,
  },
];

export const pageHeaderData = [
  {
    heading: 'Toyota Vehicles in South Sudan',
    text: 'Explore a Premium Selection of Toyota Vehicles Tailored for Every Lifestyle in South Sudan. From Sleek Sedans to Durable SUVs, Experience Unrivaled Quality and Performance with Global Links Auto. Embark on Your Journey to Automotive Excellence Today.',
  },
  {
    heading: 'About Global Links Auto Company',
    text: "Dive into the World of Global Links Auto Company Limited, South Sudan's Premier Automotive Dealer. Our Heritage is Built on a Profound Passion for Automobiles and a Commitment to Serve the Journeys of Our Esteemed Clients. A Car from Global Links is More Than a Vehicle; It's a Partner for Life, Ready to Create Unforgettable Stories on the Road.",
  },
  {
    heading: 'Experienced Automotive Leadership',
    text: 'Meet the Visionaries at Global Links Auto Company Limited, Pioneers Steering the Automotive Industry in South Sudan. Our Leaders Merge Decades of Expertise with an Innovative Mindset, Emphasizing Integrity, Customer Satisfaction, and Market Dominance. Discover the Dynamic Team Driving Our Legacy Forward and Elevating Your Driving Experience.',
  },
  {
    heading: 'Comprehensive Car Services',
    text: "Entrust Your Vehicle to Global Links Auto's Expert Care in South Sudan. From Routine Maintenance to Advanced Repairs, Our Comprehensive Services Ensure Your Toyota Runs at Peak Performance. Embrace the Peace of Mind that Comes with Our Unmatched Automotive Expertise and Exceptional Customer Service.",
  },
  {
    heading: 'After-Sale Excellence at Global Links Auto',
    text: 'Experience the commitment to satisfaction that extends beyond the sale with Global Links Auto in South Sudan. Benefit from our comprehensive warranty support, access to genuine Toyota parts, and exceptional customer care. Our periodic vehicle health checks and personalized setup services ensure your Toyota remains a joy to drive, mile after mile.',
  },
  {
    heading: 'Authentic Toyota Spare Parts in South Sudan',
    text: 'Find the Perfect Fit for Your Toyota with Global Links Auto’s Extensive Inventory of Genuine Spare Parts. Each Component is Crafted to the Highest Standards of Quality and Designed to Ensure Your Vehicle Operates at Its Best. In South Sudan, Trust in Our Authentic Parts for Your Toyota’s Maintenance and Upgrades.',
  },
  {
    heading: 'Get in Touch with Global Links Auto',
    text: "Your Exceptional Automotive Experience Begins with Global Links Auto in South Sudan. Contact Us for Personalized Service, Professional Assistance, and a Seamless Customer Journey. We're Here to Enhance Every Aspect of Your Vehicle Ownership, Ensuring Your Satisfaction with Every Mile.",
  },
  {
    heading: 'Insights from Global Links Auto Blog',
    text: 'Join the Global Links Auto Community and Keep Abreast with the Latest Automotive Insights. Our Blog is Your Ultimate Resource for Toyota News, Advanced Maintenance Strategies, and the Latest Trends Shaping the Roads of South Sudan. Stay Ahead with Global Links Auto – Your Trusted Source for Automotive Knowledge and Innovation.',
  },
];

export const pagesMetaData = [
  {
    title: 'Official Toyota Dealer in South Sudan - Global Links Auto',
    description:
      'Global Links Auto, the authorized Toyota dealer in South Sudan, offers a superior selection of vehicles known for durability and excellence. Begin your journey with a trusted name in automotive.',
    type: 'website',
    url: `${baseURl}`,
    image: `${baseURl}/imgs/logo/logo.png`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title:
      'Toyota Showroom - Premium Vehicles in South Sudan | Global Links Auto',
    description:
      "Step into Global Links Auto's showroom and explore a wide array of Toyota vehicles. Find the perfect match for your driving needs in South Sudan with our expert assistance.",
    type: 'website',
    url: `${baseURl}/vehicles`,
    image: `${baseURl}/imgs/logo/logo.png`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: "Our Story - Global Links Auto | South Sudan's Automotive Leader",
    description:
      'Discover the rich heritage of Global Links Auto, where we marry automotive passion with service to bring you the best in vehicle dealership across South Sudan.',
    type: 'website',
    url: `${baseURl}/about`,
    image: `${baseURl}/imgs/team2.jpg`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: 'Meet Our Leaders - Driving Excellence at Global Links Auto',
    description:
      'The leadership at Global Links Auto brings together years of experience with a progressive vision, leading the automotive industry in South Sudan toward a brighter future.',
    type: 'website',
    url: `${baseURl}/leadership`,
    image: `${baseURl}/imgs/team.jpg`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: 'Expert Toyota Services - Global Links Auto South Sudan',
    description:
      "Rely on Global Links Auto for comprehensive Toyota services. Our team ensures your vehicle's longevity and performance with meticulous care and expert knowledge in South Sudan.",
    type: 'website',
    url: `${baseURl}/services`,
    image: `${baseURl}/imgs/paint.jpg`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: 'Dedicated After-Sales Support - Global Links Auto',
    description:
      "Global Links Auto's after-sales service guarantees your Toyota's peak condition with unparalleled support and genuine parts in South Sudan.",
    type: 'website',
    url: `${baseURl}/services/after-sales`,
    image: `${baseURl}/images/garage.jpg`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: 'Genuine Toyota Spare Parts - Global Links Auto South Sudan',
    description:
      "Ensure your Toyota's integrity with Global Links Auto’s selection of genuine spare parts in South Sudan. Our authentic parts provide the perfect fit and long-lasting performance for your vehicle. Trust in our quality and expertise for all your Toyota spare part needs.",
    type: 'website',
    url: `${baseURl}/services/spare-parts`,
    image: `${baseURl}/imgs/spare-parts.jpg`,
    icon: '/imgs/logo/favicon.ico',
  },

  {
    title: 'Contact Global Links Auto - Excellence in Customer Care',
    description:
      'Connect with Global Links Auto, where our team is ready to provide exceptional service and support, ensuring an outstanding experience for every customer in South Sudan.',
    type: 'website',
    url: `${baseURl}/contact`,
    image: `${baseURl}/imgs/logo/logo.png`,
    icon: '/imgs/logo/favicon.ico',
  },
  {
    title: "Insider's Look - Global Links Auto Blog | Toyota News & Tips",
    description:
      "Stay informed with Global Links Auto's blog, featuring the latest updates, maintenance tips, and insights from the heart of South Sudan's automotive scene.",
    type: 'website',
    url: `${baseURl}/blog`,
    image: `${baseURl}/imgs/blog.png`,
    icon: '/imgs/logo/favicon.ico',
  },
];

export const aboutGlobalLinks = {
  about: {
    title: 'About Us',
    paragraph:
      'Founded in the vibrant heart of Juba in November 2007, Global Link Auto Company Limited embarked on its journey to redefine automotive excellence in South Sudan. As an authorized Toyota dealer, we commenced operations in August 2008, committing ourselves to delivering not just cars, but a legacy of trust and unparalleled service. Our commitment goes beyond the showroom. It extends to the long-lasting relationships we build with our customers, the comprehensive care we provide for every car, and the personalized experience each client receives. We are more than just a car dealership; we are a team of enthusiasts, professionals, and friends who believe in delivering nothing but the best. Join us at Global Link Auto Company Limited, where your automotive journey is not just about reaching a destination, but about enjoying every mile of the journey, securely and stylishly.',
  },
  mission: {
    title: 'Our Mission',
    paragraph:
      "Our mission at Global Link Auto Company Limited is to provide the people of South Sudan with unparalleled automotive products and services. We are dedicated to offering a diverse range of high-quality Toyota vehicles that meet the varied needs and preferences of our customers. Our commitment extends beyond sales, as we aim to deliver exceptional after-sales support, maintenance, and genuine parts, ensuring every vehicle's longevity and performance.",
  },
  vision: {
    title: 'Our Vision',
    paragraph:
      'At Global Link Auto Company Limited, our vision is to be the leading automotive force in South Sudan, setting the benchmark for excellence in the industry. We aspire to revolutionize the automotive experience by blending innovative solutions with unwavering commitment to quality and sustainability. Our goal is to not only meet but exceed the expectations of our customers, providing vehicles and services that enhance lives and contribute positively to our community.',
  },
  leadership: {
    title: 'Global Links Leadership',
    paragraph:
      'At Global Link Auto Company Limited, our leadership is the driving force behind our success. Comprising seasoned professionals with a passion for the automotive industry, our team combines decades of experience with a forward-thinking approach. Guided by principles of innovation, integrity, and customer-centricity, they are committed to steering the company towards new heights of excellence and market leadership. Each leader brings a unique blend of skills and vision, ensuring that we remain at the forefront of automotive solutions and customer satisfaction.',
  },
};

export const automotiveServices = [
  {
    heading: 'Routine Vehicle Maintenance',
    text: "Keep your car running like new with our comprehensive routine maintenance program. Regular check-ups are the key to ensuring your vehicle's longevity and reliability.",
    icon: FaRegCalendarCheck,
  },
  {
    heading: 'Fluid and Filter Servicing',
    text: "Optimize your car's performance with our fluid and filter services. Regular changes are essential for maintaining engine health and vehicle efficiency.",
    icon: FaOilCan,
  },
  {
    heading: 'Tire Inspection and Services',
    text: 'Ensure maximum safety and performance with our tire services, including expert inspection, rotation, and replacement tailored to your driving needs.',
    icon: FaDotCircle,
  },
  {
    heading: 'Brake System Maintenance',
    text: "Stay safe on the road with our comprehensive brake services, including system inspections, pad replacements, and fluid checks to maintain your car's stopping power.",
    icon: FaHandPaper,
  },
  {
    heading: 'Battery Testing and Replacement',
    text: "Never get stranded with our battery services. Regular testing and maintenance will keep your car's electrical systems running smoothly without interruption.",
    icon: FaCarBattery,
  },
  {
    heading: 'Alignment and Suspension Tuning',
    text: 'Drive smoothly with precise alignment and suspension services. Proper adjustments ensure stability, comfort, and extend the life of your tires.',
    icon: FaGripHorizontal,
  },
  {
    heading: 'Exhaust System Maintenance',
    text: 'Reduce emissions and improve fuel efficiency with our exhaust system inspections and services, ensuring a quieter ride and cleaner performance.',
    icon: FaSmog,
  },
  {
    heading: 'Air Conditioning Repair and Maintenance',
    text: 'Stay cool and comfortable all year round with our air conditioning maintenance services, designed for optimal performance in extreme weather conditions.',
    icon: FaSnowflake,
  },
  {
    heading: 'Electrical System Diagnostics',
    text: 'Keep every component powered up with our electrical system checks, ensuring all electronics from headlights to onboard computers are functioning perfectly.',
    icon: FaChargingStation,
  },
  {
    heading: 'Comprehensive Diagnostic and Repair',
    text: "Trust our expert technicians to diagnose and repair any issues using state-of-the-art tools, restoring your vehicle's performance and reliability.",
    icon: FaTools,
  },
];

export const requestVehicleInfoFields = [
  {
    name: 'name',
    label: 'Name',
    icon: FaCircleUser,
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    icon: FaEnvelope,
    type: 'email',
    placeholder: 'username@site.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    icon: FaPhone,
    type: 'tel',
    placeholder: '+211 / 09',
    required: true,
  },
];

export const contactFormFields = [
  {
    name: 'name',
    label: 'Name',
    icon: FaCircleUser,
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    icon: FaEnvelope,
    type: 'email',
    placeholder: 'username@site.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    icon: FaPhone,
    type: 'tel',
    placeholder: '+211 / 09',
    required: true,
  },
  {
    name: 'subject',
    label: 'Message Subject',
    icon: FaEnvelopeOpenText,
    type: 'text',
    placeholder: 'Type here',
    required: false,
  },
  {
    name: 'message',
    label: 'Message',
    icon: FaComment,
    type: 'textarea',
    placeholder: 'Type here',
    required: true,
  },
];

export const afterSaleServices = [
  {
    name: 'Warranty Support',
    text: 'Enjoy peace of mind with our comprehensive warranty support tailored to protect your investment and ensure hassle-free ownership.',
    icon: FaShieldAlt,
  },
  {
    name: 'Genuine Parts Supply',
    text: "We provide a full inventory of genuine Toyota parts to maintain your vehicle's performance and longevity with quality you can trust.",
    icon: FaCogs,
  },
  {
    name: 'Customer Care & Support',
    text: 'Our dedicated customer service team is committed to providing you with the assistance and information you need, whenever you need it.',
    icon: FaHeadset,
  },
  {
    name: 'Vehicle Health Checks',
    text: 'Benefit from our thorough vehicle health checks to ensure your Toyota is always in optimal condition, delivering performance and safety on the road.',
    icon: FaHeartbeat,
  },
  {
    name: 'Personalized Vehicle Set-Up',
    text: 'Experience a tailored set-up for your new Toyota, adjusted to your personal preferences and driving style for an unparalleled driving experience.',
    icon: FaUserCog,
  },
];

export const afterSaleFormFields = [
  {
    name: 'name',
    label: 'Name',
    icon: FaCircleUser,
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'company',
    label: 'Company',
    icon: FaCircleUser,
    type: 'text',
    placeholder: 'Company Name',
    required: false,
  },
  {
    name: 'email',
    label: 'Email Address',
    icon: FaEnvelope,
    type: 'email',
    placeholder: 'username@site.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    icon: FaPhone,
    type: 'tel',
    placeholder: '+211 / 09',
    required: true,
  },
  {
    name: 'model',
    label: 'Vehicle Modal',
    icon: FaPhone,
    type: 'text',
    placeholder: '',
    required: true,
  },
  {
    name: 'services',
    label: 'Available Services',
    icon: FaTools,
    type: 'checkbox',
    placeholder: '',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    icon: FaComment,
    type: 'textarea',
    placeholder: 'Type here',
    required: true,
  },
];

export const team = [
  {
    img: one,
    position: 'left',
    name: 'Victor Gore',
    title: 'General Manager',
    paragraph:
      'As the General Manager at Global Link Auto Company Limited, Victor Gore brings over a decade of industry expertise, exemplifying a blend of strategic leadership and a deep passion for automotive excellence.',
  },
  {
    img: two,
    position: 'right',
    name: 'Mary Ngugi',
    title: 'Sales & Marketing',
    paragraph:
      "As the Head of Sales and Marketing at Global Link Auto Company Limited, Mary Ngugi stands out for her exceptional skills in customer engagement and market strategy. She's a dynamic leader",
  },
  {
    img: three,
    position: 'right',
    name: 'Stephan Misasa',
    title: 'Finance & Human Resources',
    paragraph:
      'Stephan Misasa oversees Finance and Human Resources, integrating financial acumen with a visionary approach to team management. His expertise ensures sustainable growth and a culture of inclusivity, propelling Global Link Auto towards its strategic goals.',
  },
  {
    img: five,
    position: 'left',
    name: 'Ravi Kiran',
    title: 'Sales (UN&NGO)/ After Sale',
    paragraph:
      'Ravi Kiran specializes in Sales (UN&NGO) and After-Sale services, offering tailored solutions that foster long-term relationships with key stakeholders. His dedication to service excellence and client satisfaction makes him a pivotal figure in our sales strategy.',
  },
  {
    img: six,
    position: 'left',
    name: 'Robert Ladu',
    title: 'Parts Department',
    paragraph:
      'Robert Ladu leads the Parts Department with a commitment to operational excellence and customer service. His extensive knowledge of automotive parts and logistics ensures the availability and timely delivery of high-quality components, supporting the company’s reputation for reliability.',
  },
];

//functions
export const getStringDate = (StringDate: string, isRelative = false) => {
  const currentDate = new Date();
  const inputDate = new Date(StringDate);
  const timeDifference = Math.abs(currentDate.getTime() - inputDate.getTime());
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (isRelative) {
    if (daysDifference >= 1) {
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (hoursDifference >= 1) {
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else {
      return `${minutesDifference} min${
        minutesDifference !== 1 ? 's' : ''
      } ago`;
    }
  } else {
    // By default, display the date in the "weekday, month day, year" format
    return inputDate.toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
const getWordCount = (blocks: blogBody) => {
  let wordCount = 0;

  blocks.forEach((block: { _type: string; children: any[] }) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child) => {
        if (child._type === 'span' && child.text) {
          wordCount += child.text.split(' ').length;
        }
      });
    }
  });

  return wordCount;
};

export const calculateReadTime = (blocks: blogBody, speed = 200) => {
  const wordCount = getWordCount(blocks);
  const readTime = Math.ceil(wordCount / speed);
  return readTime;
};

export const getMetadataByPageIndex = (index: number): Metadata => {
  const pageMetaData = pagesMetaData[index];

  return {
    metadataBase: new URL(baseURl),
    title: pageMetaData.title,
    description: pageMetaData.description,
    icons: {
      icon: pageMetaData.icon,
      shortcut: pageMetaData.icon,
      apple: pageMetaData.icon,
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: pageMetaData.icon,
      },
    },
    openGraph: {
      type: pageMetaData.type,
      url: pageMetaData.url,
      title: pageMetaData.title,
      description: pageMetaData.description,
      siteName: pageMetaData.title,
      images: [
        {
          url: pageMetaData.image,
        },
      ],
    } as OpenGraph,
    twitter: {
      card: 'summary_large_image',
      site: pageMetaData.url,
      images: [
        {
          url: pageMetaData.image,
        },
      ],
    },
  };
};

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

export const slideRight = {
  initial: { opacity: 0, x: -25 },
  whileInView: { opacity: 1, x: 0 },
};

export const slideLeft = {
  initial: { opacity: 0, x: 25 },
  whileInView: { opacity: 1, x: 0 },
};
