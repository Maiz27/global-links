import AnimateInView from '@/components/animationWrappers/AnimateInView';
import PageTransition from '@/components/animationWrappers/PageTransition';
import IconCard from '@/components/cards/IconCard';
import ImageCard from '@/components/cards/ImageCard';
import AfterSaleForm from '@/components/forms/AfterSaleForm';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import {
  afterSaleServices,
  getMetadataByPageIndex,
  slideLeft,
  slideRight,
} from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadataByPageIndex(5);

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={4} />

      <section className='my-20'>
        <SectionHeading Tag='h2' text='After Sale Services' />
        <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {afterSaleServices.map(({ name, text, icon }, idx) => {
            return (
              <IconCard
                key={name}
                title={name}
                paragraph={text}
                icon={icon}
                index={idx}
              />
            );
          })}
        </div>
      </section>

      <section className='min-h-screen w-full flex flex-col items-around px-8 gap-16 xl:flex-row'>
        <AnimateInView
          initial={slideRight.initial}
          whileInView={slideRight.whileInView}
          className='w-full md:w-4/5 xl:w-2/5 mx-auto grid place-items-center'
        >
          <ImageCard image={`/imgs/workshop.jpg`} title='After Sale Garage' />
        </AnimateInView>
        <AnimateInView
          initial={slideLeft.initial}
          whileInView={slideLeft.whileInView}
          className='w-full md:w-4/5 xl:w-3/5 m-auto max-w-2xl space-y-4 mb-20'
        >
          <SectionHeading Tag='h2' text='Book an After Sale Service' />
          <AfterSaleForm />
        </AnimateInView>
      </section>
    </PageTransition>
  );
};

export default page;
