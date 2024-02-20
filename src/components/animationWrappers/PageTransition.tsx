'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionTag } from '@/lib/types';

type props = {
  children: any;
  className?: string;
  tag?: MotionTag;
};
const PageTransition = ({ children, className, tag = 'main' }: props) => {
  const MotionComponent = motion[tag];
  return (
    <>
      <AnimatePresence>
        <MotionComponent
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.1 }}
          className={className}
        >
          {children}
        </MotionComponent>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
