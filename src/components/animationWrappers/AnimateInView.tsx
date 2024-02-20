import { motion, TargetAndTransition } from 'framer-motion';
import { MotionTag } from '@/lib/types';

interface AnimateInViewProps {
  threshold?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  tag?: MotionTag;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  once?: boolean;
  [x: string]: any;
}

const AnimateInView = ({
  threshold = 0.2,
  delay = 0.3,
  children,
  className = '',
  tag = 'div',
  initial = { opacity: 0, y: 15 },
  whileInView = { opacity: 1, y: 0 },
  once = true,
  ...rest
}: AnimateInViewProps) => {
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      initial={initial as any}
      whileInView={whileInView}
      transition={{ delay: delay }}
      viewport={{ amount: threshold, once: once }}
      className={` ${className}`}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimateInView;
