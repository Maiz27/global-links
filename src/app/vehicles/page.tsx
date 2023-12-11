import { getAllVehicles, getVehicleTypes } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehiclesCatalogue from '@/components/vehicleComp/vehiclesCatalogue';
import { fetchSanityData } from '@/constants';

export const revalidate = 60; // revalidate every minute

const page = async () => {
  const [vehicles, types] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);
  return (
    <main>
      <PageHeader pageIndex={0} />

      <div className='min-h-screen mb-40'>
        <VehiclesCatalogue types={types} vehicles={vehicles} />
      </div>
    </main>
  );
};

export default page;
