import Link from 'next/link';

type props = {
  text: string;
  onClick?: () => void;
  isBtn?: boolean;
  path?: string;
  btnSize?: 'xs' | 'sm' | 'md' | 'lg';
  btnType?: 'button' | 'submit' | 'reset' | undefined;
  isOutline?: boolean;
  bg?: 'primary' | 'secondary' | 'accent' | 'ghost';
  textColor?: string;
};

const CTA = ({
  text,
  onClick,
  path = '/',
  btnType = 'button',
  isBtn = false,
  isOutline = false,
  bg = 'accent',
  btnSize = 'md',
  textColor,
}: props) => {
  const className = `btn transition-transform hover:scale-105 active:scale-95 pointer-events-auto btn-${btnSize} ${
    isOutline ? `btn-outline btn-${bg}` : `btn-${bg}`
  } ${textColor && `text-${textColor}`}`;
  return (
    <div className='z-10'>
      {isBtn ? (
        <button className={className} type={btnType} onClick={onClick}>
          {text}
        </button>
      ) : (
        <Link className={className} href={path}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default CTA;
