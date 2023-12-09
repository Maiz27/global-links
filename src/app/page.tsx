import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import {
  getAllHeroImages,
  getAllVehicles,
  getVehicleTypes,
} from '@/services/sanity/queries';
import { fetchSanityData } from '@/constants';

export const revalidate = 60; // revalidate every minute

export default async function Home() {
  const [heroImages, vehicles, types] = await Promise.all([
    fetchSanityData(getAllHeroImages),
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);
  return (
    <main>
      <Hero images={heroImages} />

      <WhatWeDo />

      <VehicleTabs vehicles={vehicles} types={types} />

      <BasicFAQ />
      <div className='min-h-screen'></div>
    </main>
  );
}
