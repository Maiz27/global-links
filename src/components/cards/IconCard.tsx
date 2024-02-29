import { IconType } from 'react-icons';
import AnimateInView from '../animationWrappers/AnimateInView';

type props =
  | {
      title: string;
      icon: IconType;
      index?: number;
      list: string[];
      paragraph?: null;
    }
  | {
      title: string;
      icon: IconType;
      index?: number;
      paragraph: string;
      list?: null;
    };

const IconCard = ({ title, paragraph, icon, index, list }: props) => {
  const Icon = icon;
  return (
    <AnimateInView
      delay={++index! * 0.2}
      className='h-full w-full card bg-primary text-primary-content shadow p-6 text-center gap-4'
    >
      <span className='w-fit shadow bg-primary rounded-md p-2 text-2xl text-primary-content mx-auto'>
        <Icon />
      </span>

      <h3 className='font-semibold'>{title}</h3>
      {paragraph ? (
        <p className='opacity text-sm'>{paragraph}</p>
      ) : list ? (
        <div className='px-4 list-disc text-sm text-left'>
          <ul className='list-disc space-y-1'>
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </AnimateInView>
  );
};

export default IconCard;
