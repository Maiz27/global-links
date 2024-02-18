import CTA from '@/components/CTA/CTA';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import PageTransition from '@/components/animationWrappers/PageTransition';
import ImageCard from '@/components/cards/ImageCard';
import ImageGallery from '@/components/imageGallery/ImageGallery';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import {
  aboutGlobalLinks,
  getMetadataByPageIndex,
  slideLeft,
  slideRight,
} from '@/lib/constants';
import { fetchSanityData, getGalleryImages } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/sanityClient';
import { Gallery } from '@/lib/types';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadataByPageIndex(2);

const page = async () => {
  const gallery: Gallery = await fetchSanityData(getGalleryImages);

  const { about, mission, vision, leadership } = aboutGlobalLinks;

  const images = gallery.images.map((image, index) => {
    return { title: `Image (${index})`, src: urlFor(image).url() };
  });
  return (
    <PageTransition>
      <PageHeader pageIndex={1} />

      <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row py-20'>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
        >
          <ImageCard image={`/imgs/team2.jpg`} />
        </AnimateInView>

        <AnimateInView
          initial={slideLeft.initial}
          whileInView={slideLeft.whileInView}
          className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col justify-center gap-4'
        >
          <SectionHeading Tag='h2' text={about.title} />
          <p>{about.paragraph}</p>
        </AnimateInView>
      </section>

      <section className='min-h-[80vh] w-full py-20 bg-base-200/60 space-y-4'>
        <div className='w-4/5 xl:w-4/6 mx-auto grid md:grid-cols-2 gap-4'>
          <AnimateInView className='md:col-span-2'>
            <SectionHeading Tag='h2' text='Our Vision & Mission' />
            <SectionHeading
              Tag='h3'
              text='Vision'
              size='lg'
              isCentered={false}
              hasGraphic={false}
            />

            <p>{vision.paragraph}</p>
          </AnimateInView>

          <AnimateInView className='grid place-items-center bg-primary text-primary-content p-6 card max-w-md'>
            <p>
              We aim to be more than a dealership; we strive to be a trusted
              partner in every journey, driving towards a future where every
              road leads to satisfaction, safety, and environmental
              responsibility.
            </p>
          </AnimateInView>

          <AnimateInView>
            <SectionHeading
              Tag='h3'
              text='Mission'
              size='lg'
              isCentered={false}
              hasGraphic={false}
            />
            <p>{mission.paragraph}</p>
          </AnimateInView>
        </div>
      </section>

      <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row-reverse py-20'>
        <AnimateInView
          initial={slideLeft.initial}
          whileInView={slideLeft.whileInView}
          className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
        >
          <ImageCard image={`/imgs/team.jpg`} />
        </AnimateInView>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col justify-center items-center gap-4'
        >
          <SectionHeading Tag='h2' text={leadership.title} />
          <p>{leadership.paragraph}</p>
          <CTA text='Learn More' path='/about/leadership' />
        </AnimateInView>
      </section>

      <AnimateInView tag='section' className='py-20 space-y-2'>
        <SectionHeading Tag='h2' text='Global Links Gallery' />

        <ImageGallery images={images} />
      </AnimateInView>
    </PageTransition>
  );
};

export default page;
