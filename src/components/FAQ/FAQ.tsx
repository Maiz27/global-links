'use client';
import ImageCard from '@/components/cards/ImageCard';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { faqData } from '@/constants';
import Question from './Question';
import useAccordion from '@/hooks/useAccordion';
import team from 'public/imgs/10.jpg';

const BasicFAQ = () => {
  const { openIndex, handleToggle } = useAccordion();
  return (
    <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row py-20'>
      <div className='w-full md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'>
        <ImageCard image={team} />
      </div>
      <div className='w-full md:w-4/5 lg:w-3/5 m-auto max-w-3xl'>
        <SectionHeading
          Tag='h2'
          text='Frequently asked questions'
          isCentered={false}
        />
        {faqData.map(({ question, answer }, idx) => {
          return (
            <Question
              key={idx}
              question={question}
              answer={answer}
              isOpen={idx === openIndex}
              onToggle={() => handleToggle(idx)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BasicFAQ;
