import { IconType } from 'react-icons';
import AnimateInView from '../animationWrappers/AnimateInView';

type props = {
  title: string;
  paragraph: string;
  icon: IconType;
  index?: number;
};

const IconCard = ({ title, paragraph, icon, index }: props) => {
  const Icon = icon;
  return (
    <AnimateInView
      delay={++index! * 0.2}
      className='h-full card bg-primary text-primary-content shadow p-6 text-center gap-4'
    >
      <span className='w-fit shadow bg-primary rounded-md p-2 text-2xl text-primary-content mx-auto'>
        <Icon />
      </span>

      <h3 className='font-semibold'>{title}</h3>
      <p className='opacity text-sm'>{paragraph}</p>
    </AnimateInView>
  );
};

export default IconCard;
