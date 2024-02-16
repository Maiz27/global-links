import IconCard from '@/components/cards/IconCard';
import PageHeader from '@/components/pageHeader/PageHeader';
import { automotiveServices } from '@/lib/constants';

const page = () => {
  return (
    <main className='min-h-screen'>
      <PageHeader pageIndex={3} />

      <section className='my-20 w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {automotiveServices.map(({ heading, text, icon }) => {
          return (
            <IconCard
              key={heading}
              title={heading}
              paragraph={text}
              icon={icon}
            />
          );
        })}
      </section>
    </main>
  );
};

export default page;
