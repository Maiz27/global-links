import SectionHeading from '@/components/sectionHeading/SectionHeading';
import ImageCard from '../cards/ImageCard';
import CTA from '../CTA/CTA';
import AnimateInView from '../animationWrappers/AnimateInView';
import { slideLeft, slideRight } from '@/lib/constants';

const WhatWeDo = () => {
  return (
    <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row-reverse py-20'>
      <AnimateInView
        initial={slideLeft.initial}
        whileInView={slideLeft.whileInView}
        className='w-full h-auto md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
      >
        <ImageCard image={`/imgs/paint.jpg`} title='Paint Job' />
      </AnimateInView>
      <AnimateInView
        initial={slideRight.initial}
        whileInView={slideRight.whileInView}
        className='w-full md:w-4/5 lg:w-3/5 m-auto max-w-2xl space-y-4'
      >
        <SectionHeading
          Tag='h2'
          text='Comprehensive Car Care and Expertise'
          isCentered={false}
        />
        <p className='text-balance'>
          {`At Global Links Auto, we offer a full spectrum of automotive services designed to keep your Toyota in pristine condition. From routine check-ups to complex repairs, our expert technicians ensure your vehicle delivers peak performance and reliability.`}
        </p>

        <div className='flex items-center gap-4'>
          <CTA path='/services' text='Explore Services' />
          <CTA path='/after-sale' text='After Sale' isOutline />
        </div>
      </AnimateInView>
    </section>
  );
};

export default WhatWeDo;
