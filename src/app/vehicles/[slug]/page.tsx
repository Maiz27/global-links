import { fetchSanityData, getVehicleBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import { vehicle } from '@/types';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';

export const revalidate = 60;

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
