import IconCard from '@/components/cards/IconCard';
import ImageCard from '@/components/cards/ImageCard';
import ImageGallery from '@/components/imageGallery/ImageGallery';
import PageHeader from '@/components/pageHeader/PageHeader';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { aboutGlobalLinks, gallery } from '@/constants';
import team from 'public/imgs/team2.jpg';

const page = () => {
  const { about, mission, vision, values } = aboutGlobalLinks;
  return (
    <main>
      <PageHeader pageIndex={1} />

      <section className='flex flex-col items-around px-8 gap-16 lg:flex-row py-20'>
        <div className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'>
          <ImageCard image={team} />
        </div>
        <TextParagraph title={about.title} paragraph={about.paragraph} />
      </section>

      <section className='flex flex-col items-around px-8 gap-16 lg:flex-row py-20 bg-base-200/60'>
        <TextParagraph title={mission.title} paragraph={mission.paragraph} />

        <TextParagraph title={vision.title} paragraph={vision.paragraph} />
      </section>

      <section className='flex flex-col py-20 space-y-4'>
        <SectionHeading Tag='h2' text='Our Values' />
        <div className='w-4/5 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {values.map(({ title, paragraph, icon }) => (
            <IconCard
              key={title}
              title={title}
              paragraph={paragraph}
              icon={icon}
            />
          ))}
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

const TextParagraph = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div className='w-full md:w-4/5 lg:w-1/2 mx-auto max-w-2xl flex flex-col gap-4'>
      <SectionHeading Tag='h2' text={title} />
      <p>{paragraph}</p>
    </div>
  );
};
