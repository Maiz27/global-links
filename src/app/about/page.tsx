import CTA from '@/components/CTA/CTA';
import IconCard from '@/components/cards/IconCard';
import ImageCard from '@/components/cards/ImageCard';
import ImageGallery from '@/components/imageGallery/ImageGallery';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { aboutGlobalLinks, gallery } from '@/lib/constants';
import team from 'public/imgs/team.jpg';
import team2 from 'public/imgs/team2.jpg';

const page = () => {
  const { about, mission, vision, leadership } = aboutGlobalLinks;
  return (
    <main>
      <PageHeader pageIndex={1} />

      <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row py-20'>
        <div className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'>
          <ImageCard image={team2} />
        </div>
        <div className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col justify-center gap-4'>
          <SectionHeading Tag='h2' text={about.title} />
          <p>{about.paragraph}</p>
        </div>
      </section>

      <section className='min-h-[80vh] w-full py-20 bg-base-200/60 space-y-4'>
        <SectionHeading Tag='h2' text='Our Vision & Mission' />
        <div className='w-4/5 xl:w-4/6 mx-auto grid md:grid-cols-2 gap-4'>
          <div className='md:col-span-2'>
            <SectionHeading
              Tag='h3'
              text='Vision'
              size='lg'
              isCentered={false}
              hasGraphic={false}
            />

            <p>{vision.paragraph}</p>
          </div>

          <div className='grid place-items-center bg-accent text-accent-content p-6 card max-w-md'>
            <p>
              We aim to be more than a dealership; we strive to be a trusted
              partner in every journey, driving towards a future where every
              road leads to satisfaction, safety, and environmental
              responsibility.
            </p>
          </div>

          <div>
            <SectionHeading
              Tag='h3'
              text='Mission'
              size='lg'
              isCentered={false}
              hasGraphic={false}
            />
            <p>{mission.paragraph}</p>
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row-reverse py-20'>
        <div className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'>
          <ImageCard image={team} />
        </div>
        <div className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col justify-center items-center gap-4'>
          <SectionHeading Tag='h2' text={leadership.title} />
          <p>{leadership.paragraph}</p>
          <CTA text='Learn More' path='/about/leadership' />
        </div>
      </section>

      <section className='py-20 space-y-2'>
        <SectionHeading Tag='h2' text='Global Links Gallery' />

        <ImageGallery images={gallery} />
      </section>
    </main>
  );
};

export default page;
