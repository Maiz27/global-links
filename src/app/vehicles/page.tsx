import {
  fetchSanityData,
  getAllVehicles,
  getVehicleTypes,
} from '@/lib/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehiclesCatalogue from '@/components/vehicleComp/vehiclesCatalogue';
import PageTransition from '@/components/animationWrappers/PageTransition';
import { getMetadataByPageIndex } from '@/lib/constants';
import { Metadata } from 'next';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = getMetadataByPageIndex(1);

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
