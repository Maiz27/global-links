import ImageCard from '@/components/imageCard/ImageCard';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { aboutGlobalLinks } from '@/constants';
import team from 'public/imgs/team2.jpg';

const page = () => {
  const { about, mission, vision } = aboutGlobalLinks;
  return (
    <main>
      <PageHeader pageIndex={1} />

      <section className='flex flex-col items-around px-8 gap-16 lg:flex-row py-20'>
        <div className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'>
          <ImageCard image={team} />
        </div>
        <TextParagraph title={about.title} text={about.text} />
      </section>

      <section className='flex flex-col items-around px-8 gap-16 lg:flex-row py-20 bg-base-200/60'>
        <TextParagraph title={mission.title} text={mission.text} />

        <TextParagraph title={vision.title} text={vision.text} />
      </section>

      <div className='min-h-screen'></div>
    </main>
  );
};

export default page;

const TextParagraph = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col gap-4'>
      <SectionHeading Tag='h2' text={title} />
      <p>{text}</p>
    </div>
  );
};
