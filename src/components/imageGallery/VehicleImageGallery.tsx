import { fetchSanityData, getVehicleGalleryBySlug } from '@/lib/sanity/queries';
import { vehicleGallery } from '@/lib/types';
import ImageGallery from './ImageGallery';
import { urlFor } from '@/lib/sanity/sanityClient';
import SectionHeading from '../sectionHeading/SectionHeading';

const VehicleImageGallery = async ({ slug }: { slug: string }) => {
  const { gallery }: vehicleGallery = await fetchSanityData(
    getVehicleGalleryBySlug,
    {
      slug,
    }
  );

  const images = gallery?.images.map((img, idx) => {
    return { title: `[GLA] Image ${idx + 1}`, src: urlFor(img).url() };
  });

  return (
    <section className='my-20 space-y-4'>
      <SectionHeading Tag='h2' text='Vehicle Gallery' />
      <ImageGallery images={images} />
    </section>
  );
};

export default VehicleImageGallery;
