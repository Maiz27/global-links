import { IconType } from 'react-icons';

type props = {
  title: string;
  paragraph: string;
  icon: IconType;
};

const IconCard = ({ title, paragraph, icon }: props) => {
  const Icon = icon;
  return (
    <div className='h-full card bg-primary text-primary-content shadow p-6 text-center gap-4'>
      <span className='w-fit shadow bg-primary rounded-md p-2 text-2xl text-primary-content mx-auto'>
        <Icon />
      </span>

      <h3 className='font-semibold'>{title}</h3>
      <p className='opacity text-sm'>{paragraph}</p>
    </div>
  );
};

export default IconCard;
