import BasicFAQ from '@/components/FAQ/FAQ';
import Hero from '@/components/hero/Hero';
import VehicleTabs from '@/components/vehicleComp/VehicleTabs';
import WhatWeDo from '@/components/whatWeDo/WhatWeDo';
import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs';
import LatestBlogs from '@/components/latestBlogs/LatestBlogs';
import PageTransition from '@/components/animationWrappers/PageTransition';
import {
  fetchSanityData,
  getAllVehicles,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import { getMetadataByPageIndex } from '@/lib/constants';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = getMetadataByPageIndex(0);

export default async function Home() {
  const [vehicles, types] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);

  return (
    <PageTransition>
      <Hero />

      <WhyChooseUs />

      <VehicleTabs vehicles={vehicles} types={types} />

      <WhatWeDo />

      <BasicFAQ />

      <LatestBlogs />
    </PageTransition>
  );
}
