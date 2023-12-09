import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import { sanityClient } from '@/services/sanity/sanityClient';
import { getAllHeroImages } from '@/services/sanity/queries';

export const revalidate = 60; // revalidate every minute

const fetchHeroImages = async () => {
  const images = await sanityClient.fetch(getAllHeroImages);
  return images;
};

export default async function Home() {
  const heroImages = await fetchHeroImages();
  return (
    <main>
      <Hero images={heroImages} />

      <WhatWeDo />

      <VehicleTabs />

      <BasicFAQ />
      <div className='min-h-screen'></div>
    </main>
  );
}
