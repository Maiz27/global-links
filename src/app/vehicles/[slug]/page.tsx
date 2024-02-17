import { fetchSanityData, getVehicleBySlug } from '@/lib/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import { vehicle } from '@/lib/types';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';
import VehicleImageGallery from '@/components/imageGallery/VehicleImageGallery';

export const revalidate = 60;

const page = async ({ params }: { params: { slug: string } }) => {
  const vehicle: vehicle = await fetchSanityData(getVehicleBySlug, {
    slug: params.slug,
  });

  return (
    <main>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description!} />

      <VehicleSpecs vehicle={vehicle} />

      <VehicleImageGallery slug={params.slug} />
    </main>
  );
};

export default page;
