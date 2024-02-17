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
import { pagesMetaData } from '@/lib/constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const revalidate = 60;

export const metadata: Metadata = {
  title: pagesMetaData[0].title,
  description: pagesMetaData[0].description,
  icons: {
    icon: pagesMetaData[0].icon,
    shortcut: pagesMetaData[0].icon,
    apple: pagesMetaData[0].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[0].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[0].type,
    url: pagesMetaData[0].url,
    title: pagesMetaData[0].title,
    description: pagesMetaData[0].description,
    siteName: pagesMetaData[0].title,
    images: [
      {
        url: pagesMetaData[0].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[0].url,
    images: [
      {
        url: pagesMetaData[0].image,
      },
    ],
  },
};

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
