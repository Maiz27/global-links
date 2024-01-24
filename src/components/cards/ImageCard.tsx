import Image, { StaticImageData } from 'next/image';

type props = {
  image: StaticImageData | string;
};

const ImageCard = ({ image }: props) => {
  const before =
    'before:content-[""] before:absolute before:card before:-top-4 before:-left-4 before:w-3/5 before:aspect-square before:bg-accent/90 before:-z-10';
  const after =
    'after:content-[""] after:absolute after:card after:-bottom-4 after:-right-4 after:w-3/5 after:aspect-square after:bg-secondary/90 after:-z-10';

  return (
    <div className={`w-full max-w-xl relative ${before} ${after}`}>
      <Image
        src={image}
        alt='Ride'
        className='w-full object-cover rounded-tl-xl rounded-br-xl z-1'
      />
    </div>
  );
};

export default ImageCard;
