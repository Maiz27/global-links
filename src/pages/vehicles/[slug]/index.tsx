import PageTransition from '@/components/animationWrappers/PageTransition';
import VehicleImageGallery from '@/components/imageGallery/VehicleImageGallery';
import PageHeader from '@/components/pageHeader/PageHeader';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';
import {
  fetchSanityData,
  getVehicleBySlug,
  getVehicleGalleryBySlug,
} from '@/lib/sanity/queries';
import { vehicle, vehicleGallery } from '@/lib/types';

const VehicleDetails = ({
  vehicle,
  gallery,
}: {
  vehicle: vehicle;
  gallery: { images: Object[] };
}) => {
  return (
    <PageTransition>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description!} />

      <VehicleSpecs vehicle={vehicle} />

      <VehicleImageGallery gallery={gallery} />
    </PageTransition>
  );
};

export default VehicleDetails;

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const [vehicle, { gallery }]: [vehicle, vehicleGallery] = await Promise.all([
    fetchSanityData(getVehicleBySlug, {
      slug,
    }),
    fetchSanityData(getVehicleGalleryBySlug, {
      slug,
    }),
  ]);

  if (!vehicle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle,
      gallery,
    },
  };
};
