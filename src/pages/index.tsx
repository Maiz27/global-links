import FAQWrapper from '@/components/FAQ/FAQWrapper';
import PageTransition from '@/components/animationWrappers/PageTransition';
import Hero from '@/components/hero/Hero';
import LatestBlogs from '@/components/latestBlogs/LatestBlogs';
import VehicleTabs from '@/components/vehicleComp/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs';
import {
  fetchSanityData,
  getAllHeroImages,
  getAllVehicles,
  getFAQs,
  getLatestPosts,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import { Faq, blog, heroImage, vehicle, vehicleType } from '@/lib/types';

type props = {
  vehicles: vehicle[];
  vehicleTypes: vehicleType[];
  images: heroImage[];
  faqs: Faq[];
  blogs: blog[];
};

export default function Home({
  vehicles,
  vehicleTypes,
  images,
  faqs,
  blogs,
}: props) {
  return (
    <PageTransition>
      <Hero images={images} />

      <WhyChooseUs />

      <VehicleTabs vehicles={vehicles} types={vehicleTypes} />

      <WhatWeDo />

      <FAQWrapper faqs={faqs} />

      <LatestBlogs blogs={blogs} />
    </PageTransition>
  );
}

export const getStaticProps = async () => {
  const [vehicles, vehicleTypes, images, faqs, blogs]: [
    vehicle[],
    vehicleType[],
    heroImage[],
    Faq[],
    blog[]
  ] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
    fetchSanityData(getAllHeroImages),
    fetchSanityData(getFAQs),
    fetchSanityData(getLatestPosts),
  ]);

  return {
    props: {
      vehicles,
      vehicleTypes,
      images,
      faqs,
      blogs,
    },
    revalidate: 60,
  };
};
