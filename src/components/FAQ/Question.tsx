import { motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';

const Question = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className='border-b-[1px] border-b-slate-300'
    >
      <button
        onClick={onToggle}
        className='flex w-full items-start justify-between gap-4 py-6'
      >
        <motion.span
          variants={{
            open: {
              color: 'rgb(230 33 41)',
            },
            closed: {
              color: 'rgba(3, 6, 23, 1)',
            },
          }}
          className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left lg:text-lg font-medium'
        >
          {question}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: 'rgb(230 33 41)',
            },
            closed: {
              rotate: '0deg',
              color: '#030617',
            },
          }}
        >
          <FaAngleDown className='text-2xl' />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'fit-content' : '0px',
          marginBottom: isOpen ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-600'
      >
        <p className='text-sm xl:text-base'>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default Question;
