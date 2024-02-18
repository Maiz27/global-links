import CTA from '@/components/CTA/CTA';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import PageTransition from '@/components/animationWrappers/PageTransition';
import ImageCard from '@/components/cards/ImageCard';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { getMetadataByPageIndex, slideLeft, slideRight } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadataByPageIndex(6);

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={5} />

      <section className='my-20 mx-auto w-4/5 grid place-items-center '>
        <div className='md:mb-10 grid place-items-center grid-cols-1 md:grid-cols-2 gap-16'>
          <AnimateInView
            initial={slideRight.initial}
            whileInView={slideRight.whileInView}
            className='w-full h-auto'
          >
            <ImageCard
              image={`/imgs/spare-parts.jpg`}
              title='After Sale Garage'
            />
          </AnimateInView>
          <AnimateInView
            initial={slideLeft.initial}
            whileInView={slideLeft.whileInView}
            className='w-full h-auto'
          >
            <ImageCard
              image={`/imgs/spare-parts-2.jpg`}
              title='After Sale Garage'
            />
          </AnimateInView>
        </div>

        <AnimateInView className='my-20 max-w-4xl text-center space-y-4'>
          <SectionHeading Tag='h2' text='Spare Parts Catalog - Coming Soon!' />

          <p>
            We are committed to providing our customers with the highest quality
            automotive solutions. That&apos;s why we are currently developing a
            comprehensive catalog of genuine Toyota spare parts to meet all of
            your vehicle&apos;s needs. While we work diligently to curate a
            selection that upholds the Toyota standard of excellence, we invite
            you to stay tuned for the launch of this vital resource. In the
            meantime, our team remains at your service to assist with any
            immediate spare part inquiries and to ensure your Toyota continues
            to perform at its best. Thank you for your patience and trust in
            Global Links Auto.
          </p>

          <div className='flex justify-center items-center gap-4'>
            <CTA path='/vehicles' text='Explore Vehicles' />
            <CTA path='/contact' text='Contact Us' isOutline />
          </div>
        </AnimateInView>
      </section>
    </PageTransition>
  );
};

export default page;
