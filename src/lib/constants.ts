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
} from 'react-icons/fa6';
import {
  FaTools,
  FaDotCircle,
  FaHandPaper,
  FaGripHorizontal,
} from 'react-icons/fa';

import teamPic from 'public/imgs/team.jpg';
import teamPic2 from 'public/imgs/team2.jpg';
import paint from 'public/imgs/paint.jpg';
import img1 from 'public/imgs/1.jpg';
import img2 from 'public/imgs/2.jpg';
import img3 from 'public/imgs/3.jpg';
import img4 from 'public/imgs/4.jpg';
import img5 from 'public/imgs/5.jpg';
import img6 from 'public/imgs/6.jpg';
import img7 from 'public/imgs/7.jpg';
import img8 from 'public/imgs/8.jpg';
import img9 from 'public/imgs/9.jpg';

import one from 'public/imgs/team/1.jpg';
import two from 'public/imgs/team/2.jpg';
import three from 'public/imgs/team/3.jpg';
import four from 'public/imgs/team/4.jpg';
import five from 'public/imgs/team/5.jpg';
import six from 'public/imgs/team/6.jpg';
import { blogBody } from './types';

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
    name: 'After-Sale',
    href: '/after-sale',
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

export const faqData = [
  {
    question:
      'What makes Global Links the official Toyota company in South Sudan?',
    answer:
      "Global Links earned the prestigious title of Toyota's Official company in South Sudan due to our longstanding commitment to excellence, unmatched customer service, and a proven track record in the automotive industry since our inception in November 2007.",
    defaultOpen: true,
  },
  {
    question: 'What types of vehicles does Global Links offer?',
    answer:
      "Global Links offers a diverse range of premium Toyota vehicles, including sedans, SUVs, trucks, and hybrids. Our extensive lineup ensures there's a perfect Toyota vehicle to suit every customer's preferences and requirements.",
  },
  {
    question:
      'Can I trust the quality of the pre-owned vehicles offered by Global Links?',
    answer:
      "Absolutely. At Global Links, we meticulously inspect and certify all our pre-owned vehicles to meet Toyota's high-quality standards. Our commitment to transparency and reliability ensures that you can trust the quality and performance of every pre-owned vehicle we offer.",
  },
  {
    question: 'What after-sales services does Global Links provide?',
    answer:
      'Global Links is dedicated to providing comprehensive after-sales support. Our services include regular maintenance, genuine Toyota parts replacements, vehicle repairs, and expert technical assistance. Our goal is to ensure that your Toyota vehicle continues to perform optimally throughout its lifespan.',
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
    heading: 'Get in Touch with Global Links Auto',
    text: "Your Exceptional Automotive Experience Begins with Global Links Auto in South Sudan. Contact Us for Personalized Service, Professional Assistance, and a Seamless Customer Journey. We're Here to Enhance Every Aspect of Your Vehicle Ownership, Ensuring Your Satisfaction with Every Mile.",
  },
  {
    heading: 'Global Links Auto Blog',
    text: 'Join the Global Links Auto Community and Keep Abreast with the Latest Automotive Insights. Our Blog is Your Ultimate Resource for Toyota News, Advanced Maintenance Strategies, and the Latest Trends Shaping the Roads of South Sudan. Stay Ahead with Global Links Auto – Your Trusted Source for Automotive Knowledge and Innovation.',
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

export const gallery = [
  {
    title: 'Image 1',
    src: img1,
  },
  {
    title: 'Image 2',
    src: img2,
  },
  {
    title: 'Image 3',
    src: teamPic,
  },
  {
    title: 'Image 4',
    src: img3,
  },
  {
    title: 'Image 5',
    src: img4,
  },
  {
    title: 'Image 6',
    src: teamPic2,
  },
  {
    title: 'Image 7',
    src: img5,
  },
  {
    title: 'Image 8',
    src: img6,
  },
  {
    title: 'Image 9',
    src: paint,
  },
  {
    title: 'Image 10',
    src: img7,
  },
  {
    title: 'Image 11',
    src: img8,
  },
  {
    title: 'Image 12',
    src: img9,
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
    required: false,
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
    name: 'Name',
    title: 'Title',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corporis excepturi? Magnam dolores quae natus inventore minima, nemo beatae, voluptas aperiam quaerat, possimus harum suscipit minus fugit culpa a facere.',
  },
  {
    img: four,
    position: 'left',
    name: 'Name',
    title: 'Title',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corporis excepturi? Magnam dolores quae natus inventore minima, nemo beatae, voluptas aperiam quaerat, possimus harum suscipit minus fugit culpa a facere.',
  },
  {
    img: five,
    position: 'left',
    name: 'Name',
    title: 'Title',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corporis excepturi? Magnam dolores quae natus inventore minima, nemo beatae, voluptas aperiam quaerat, possimus harum suscipit minus fugit culpa a facere.',
  },
  {
    img: six,
    position: 'right',
    name: 'Name',
    title: 'Title',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corporis excepturi? Magnam dolores quae natus inventore minima, nemo beatae, voluptas aperiam quaerat, possimus harum suscipit minus fugit culpa a facere.',
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
