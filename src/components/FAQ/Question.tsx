'use client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Question = ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className='border-b-[1px] border-b-slate-300'
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='flex w-full items-center justify-between gap-4 py-6'
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
          className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left font-medium'
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
          <FiChevronDown className='text-2xl' />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? 'fit-content' : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-600'
      >
        <p className='text-sm'>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default Question;
