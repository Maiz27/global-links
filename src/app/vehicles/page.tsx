import { fetchSanityData } from '@/constants';
import { getAllVehicles, getVehicleTypes } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehiclesCatalogue from '@/components/vehiclesCatalogue/vehiclesCatalogue';

export const revalidate = 60; // revalidate every minute

const page = async () => {
  const [vehicles, types] = await Promise.all([
    fetchSanityData(getAllVehicles),
    fetchSanityData(getVehicleTypes),
  ]);
  return (
    <main>
      <PageHeader pageIndex={0} />

      <VehiclesCatalogue types={types} vehicles={vehicles} />
    </main>
  );
};

export default page;
