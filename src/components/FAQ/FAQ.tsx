'use client';
import ImageCard from '@/components/cards/ImageCard';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { faqData, slideLeft, slideRight } from '@/lib/constants';
import Question from './Question';
import useAccordion from '@/lib/hooks/useAccordion';
import AnimateInView from '../animationWrappers/AnimateInView';

const BasicFAQ = () => {
  const { openIndex, handleToggle } = useAccordion();
  return (
    <section className='min-h-[80vh] flex flex-col items-around px-8 gap-16 lg:flex-row py-20 bg-base-200/60'>
      <AnimateInView
        initial={slideRight.initial}
        whileInView={slideRight.whileInView}
        className='w-full h-auto md:w-4/5 lg:w-2/5 mx-auto grid place-items-center'
      >
        <ImageCard image={'/imgs/10.jpg'} />
      </AnimateInView>
      <AnimateInView
        initial={slideLeft.initial}
        whileInView={slideLeft.whileInView}
        className='w-full md:w-4/5 lg:w-3/5 m-auto max-w-3xl'
      >
        <SectionHeading
          Tag='h2'
          text='Get Answers to Your Toyota Queries'
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
      </AnimateInView>
    </section>
  );
};

export default BasicFAQ;
