import team from 'public/imgs/team.jpg';
import Image from 'next/image';
import { faqData } from '@/constants';
import Question from './Question';

const BasicFAQ = () => {
  return (
    <section className='bg-base-200 flex flex-col items-center px-8 gap-8 lg:flex-row py-20'>
      <div className='w-full md:w-4/5 max-w-xl'>
        <Image
          src={team}
          alt='Ride'
          className='w-full object-cover rounded-2xl '
        />
      </div>
      <div className='w-full md:w-4/5 mx-auto max-w-3xl'>
        <h3 className='mb-4 text-3xl font-semibold'>
          Frequently asked questions
        </h3>
        {faqData.map(({ question, answer }, idx) => {
          return <Question key={idx} question={question} answer={answer} />;
        })}
      </div>
    </section>
  );
};

export default BasicFAQ;
