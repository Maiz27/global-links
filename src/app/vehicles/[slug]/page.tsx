import { fetchSanityData, getVehicleBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import { vehicle } from '@/types';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';
import ImageGallery from '@/components/imageGallery/ImageGallery';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { gallery } from '@/constants';

export const revalidate = 60;

const page = async ({ params }: { params: { slug: string } }) => {
  const vehicle: vehicle = await fetchSanityData(getVehicleBySlug, {
    slug: params.slug,
  });

  return (
    <main>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description!} />

      <VehicleSpecs vehicle={vehicle} />

      <section className=''></section>

      <section className='py-20 space-y-2'>
        <SectionHeading Tag='h2' text={`${vehicle.name} Gallery`} />

        <ImageGallery images={gallery} />
      </section>
      <div className='min-h-screen'></div>
    </main>
  );
};

export default page;
