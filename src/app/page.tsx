import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleComp/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import {
  fetchSanityData,
  getAllHeroImages,
  getAllVehicles,
  getLatestPosts,
  getVehicleTypes,
} from '@/services/sanity/queries';
import LatestBlogs from '@/components/latestBlogs/LatestBlogs';

export const revalidate = 60; // revalidate every minute

export default async function Home() {
  const [heroImages, vehicles, types, blogs] = await Promise.all([
    fetchSanityData(getAllHeroImages),
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
    fetchSanityData(getLatestPosts),
  ]);

  return (
    <main>
      <Hero images={heroImages} />

      <WhatWeDo />

      <VehicleTabs vehicles={vehicles} types={types} />

      <BasicFAQ />

      <LatestBlogs blogs={blogs} />
    </main>
  );
}
