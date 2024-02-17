import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleComp/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs';
import {
  fetchSanityData,
  getAllVehicles,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import LatestBlogs from '@/components/latestBlogs/LatestBlogs';

export const revalidate = 60; // revalidate every minute

export default async function Home() {
  const [vehicles, types] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);

  return (
    <main>
      <Hero />

      <WhyChooseUs />

      <VehicleTabs vehicles={vehicles} types={types} />

      <WhatWeDo />

      <BasicFAQ />

      <LatestBlogs />
    </main>
  );
}
