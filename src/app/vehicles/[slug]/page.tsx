import PageHeader from '@/components/pageHeader/PageHeader';
import { fetchSanityData } from '@/constants';
import { getVehicleBySlug } from '@/services/sanity/queries';
import { vehicle } from '@/types';

const page = async ({ params }: { params: { slug: string } }) => {
  const vehicle: vehicle = await fetchSanityData(getVehicleBySlug, {
    slug: params.slug,
  });

  return (
    <main>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description} />

      <div className='min-h-screen'></div>
    </main>
  );
};

export default page;
