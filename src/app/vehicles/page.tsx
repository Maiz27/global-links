import {
  fetchSanityData,
  getAllVehicles,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehiclesCatalogue from '@/components/vehicleComp/vehiclesCatalogue';
import PageTransition from '@/components/animationWrappers/PageTransition';
import { pagesMetaData } from '@/lib/constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = {
  title: pagesMetaData[1].title,
  description: pagesMetaData[1].description,
  icons: {
    icon: pagesMetaData[1].icon,
    shortcut: pagesMetaData[1].icon,
    apple: pagesMetaData[1].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[1].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[1].type,
    url: pagesMetaData[1].url,
    title: pagesMetaData[1].title,
    description: pagesMetaData[1].description,
    siteName: pagesMetaData[1].title,
    images: [
      {
        url: pagesMetaData[1].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[1].url,
    images: [
      {
        url: pagesMetaData[1].image,
      },
    ],
  },
};

const page = async () => {
  const [vehicles, types] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);
  return (
    <PageTransition>
      <PageHeader pageIndex={0} />

      <div className='min-h-screen mb-40'>
        <VehiclesCatalogue types={types} vehicles={vehicles} />
      </div>
    </PageTransition>
  );
};

export default page;
