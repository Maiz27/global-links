import ImageCard from '@/components/cards/ImageCard';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import AnimateInView from '../animationWrappers/AnimateInView';
import Question from './Question';
import useAccordion from '@/lib/hooks/useAccordion';
import { slideLeft, slideRight } from '@/lib/constants';
import { Faq } from '@/lib/types';

const BasicFAQ = ({ list }: { list: Faq[] }) => {
  const { openIndex, handleToggle } = useAccordion();
  const noFaqs = !list ? true : false;

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
        {noFaqs ? (
          <div className='max-w-4xl mx-auto'>
            <p>
              Currently, there are no FAQs available. We are in the process of
              compiling the most relevant questions and answers to assist you
              better. Our team is dedicated to providing you with comprehensive
              insights and support for all your Toyota inquiries. Please check
              back soon for updates, as we aim to equip you with all the
              information you need to enhance your experience with Global Links
              Auto.
            </p>
          </div>
        ) : (
          <>
            {list.map(({ question, answer }, idx) => {
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
          </>
        )}
      </AnimateInView>
    </section>
  );
};

export default BasicFAQ;
