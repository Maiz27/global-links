import { getVehicleBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import { fetchSanityData } from '@/constants';
import { vehicle } from '@/types';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';

const page = async ({ params }: { params: { slug: string } }) => {
  const vehicle: vehicle = await fetchSanityData(getVehicleBySlug, {
    slug: params.slug,
  });

  return (
    <main>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description} />

      <VehicleSpecs vehicle={vehicle} />
      <div className='min-h-screen'></div>
    </main>
  );
};

export default page;
