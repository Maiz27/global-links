import CTA from '@/components/CTA/CTA';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import PageTransition from '@/components/animationWrappers/PageTransition';
import IconCard from '@/components/cards/IconCard';
import ImageCard from '@/components/cards/ImageCard';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import {
  automotiveServices,
  getMetadataByPageIndex,
  slideLeft,
  slideRight,
} from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadataByPageIndex(4);

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={3} />

      <section className='my-20'>
        <SectionHeading Tag='h2' text='Our Services' />
        <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {automotiveServices.map(({ heading, list, icon }, idx) => {
            return (
              <IconCard
                key={heading}
                title={heading}
                list={list}
                icon={icon}
                index={idx}
              />
            );
          })}
        </div>
      </section>

      <section className='my-20 mx-auto w-11/12 flex flex-col items-around px-8 gap-16 lg:flex-row'>
        <AnimateInView
          initial={slideLeft.initial}
          whileInView={slideLeft.whileInView}
          className='w-full md:w-4/5 lg:w-3/5 max-w-2xl space-y-4 flex flex-col justify-center items-center'
        >
          <SectionHeading Tag='h2' text='Comprehensive After-Sales Service' />
          <p className=' mb-4'>
            Our commitment to you extends far beyond the initial purchase.
            Global Links Auto takes pride in offering comprehensive after-sales
            service that ensures your Toyota remains in impeccable condition.
            From routine maintenance to unexpected repairs, our expert
            technicians are equipped with the latest tools and genuine parts to
            provide you with service that upholds the Toyota standard.
            Experience peace of mind with every drive knowing that we are here
            to support you at every turn.
          </p>

          <CTA text='Explore After Sale' path='/services/after-sale' />
        </AnimateInView>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-full h-auto md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
        >
          <ImageCard image={`/imgs/workshop2.jpg`} title='After Sale Garage' />
        </AnimateInView>
      </section>

      <section className='my-20 mx-auto w-11/12 flex flex-col items-around px-8 gap-16 lg:flex-row-reverse'>
        <AnimateInView
          initial={slideLeft.initial}
          whileInView={slideLeft.whileInView}
          className='w-full md:w-4/5 lg:w-3/5 max-w-2xl space-y-4 flex flex-col justify-center items-center'
        >
          <SectionHeading Tag='h2' text='Genuine Toyota Spare Parts' />
          <p className=' mb-4'>
            Ensure the longevity and reliability of your vehicle with Global
            Links Auto’s genuine Toyota spare parts. Each part is designed and
            engineered to meet the highest quality standards, providing the
            perfect fit and performance for your Toyota. Whether you’re looking
            for a critical engine component or an accessory to enhance your
            driving experience, our extensive inventory promises authenticity
            and durability. Trust in our spare parts to keep your Toyota running
            like new.
          </p>

          <CTA text='Explore Our Spare Parts' path='/services/spare-parts' />
        </AnimateInView>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-full h-auto md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
        >
          <ImageCard
            image={`/imgs/spare-parts.jpg`}
            title='After Sale Garage'
          />
        </AnimateInView>
      </section>
    </PageTransition>
  );
};

export default page;
