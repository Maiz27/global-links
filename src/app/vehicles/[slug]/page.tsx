import { notFound } from 'next/navigation';
import {
  fetchSanityData,
  getVehicleBySlug,
  getVehicleDataForSEO,
} from '@/lib/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import { vehicle } from '@/lib/types';
import VehicleSpecs from '@/components/vehicleComp/VehicleSpecs';
import VehicleImageGallery from '@/components/imageGallery/VehicleImageGallery';
import PageTransition from '@/components/animationWrappers/PageTransition';
import { baseURl } from '@/lib/constants';
import { urlFor } from '@/lib/sanity/sanityClient';

export const revalidate = 60;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const vehicle: vehicle = await fetchSanityData(getVehicleDataForSEO, {
    slug,
  });
  if (vehicle) {
    const imgUrl = urlFor(vehicle.mainImage).url();
    const url = `${baseURl}/vehicles/${vehicle.slug.current}`;

    return {
      title: `${vehicle.name} - Global Links Auto`,
      description: vehicle.description,
      image: imgUrl,

      icons: {
        icon: '/imgs/logo/favicon.ico',
        shortcut: '/imgs/logo/favicon.ico',
        apple: '/imgs/logo/favicon.ico',
        other: {
          rel: 'apple-touch-icon-precomposed',
          url: '/imgs/logo/favicon.ico',
        },
      },
      openGraph: {
        type: 'article',
        url: url,
        title: `${vehicle.name} - Global Links Auto`,
        description: vehicle.description,
        siteName: `${vehicle.name} - Global Links Auto`,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: url,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
    };
  }
}

const page = async ({ params }: { params: { slug: string } }) => {
  const vehicle: vehicle = await fetchSanityData(getVehicleBySlug, {
    slug: params.slug,
  });

  if (!vehicle) {
    return notFound();
  }

  return (
    <PageTransition>
      <PageHeader heading={vehicle.name} paragraph={vehicle.description!} />

      <VehicleSpecs vehicle={vehicle} />

      <VehicleImageGallery slug={params.slug} />
    </PageTransition>
  );
};

export default page;
