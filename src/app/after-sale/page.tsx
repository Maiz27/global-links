import IconCard from '@/components/cards/IconCard';
import AfterSaleForm from '@/components/forms/AfterSaleForm';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { afterSaleServices } from '@/lib/constants';

const page = () => {
  return (
    <main>
      <PageHeader pageIndex={4} />

      <section className='my-20'>
        <SectionHeading Tag='h2' text='After Sale Services' />
        <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {afterSaleServices.map(({ name, text, icon }) => {
            return (
              <IconCard key={name} title={name} paragraph={text} icon={icon} />
            );
          })}
        </div>
      </section>

      <section className='min-h-screen w-full my-20'>
        <SectionHeading Tag='h2' text='Book an After Sale Service' />
        <AfterSaleForm />
      </section>
    </main>
  );
};

export default page;
