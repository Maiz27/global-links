import Link from 'next/link';

type props = {
  text: string;
  onClick?: () => void;
  isBtn?: boolean;
  path?: string;
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
  bg = 'primary',
  textColor,
}: props) => {
  const className = `btn transition-transform hover:scale-105 active:scale-95 ${
    isOutline ? 'btn-outline' : `btn-${bg}`
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
