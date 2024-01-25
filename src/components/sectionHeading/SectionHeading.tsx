import React from 'react';
import Image from 'next/image';
import graphic from '/public/imgs/graphics/triangles.png';
import graphicAlt from '/public/imgs/graphics/triangles-2.png';

type props = {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';
  text: string;
  isCentered?: boolean;
  hasGraphic?: boolean;
  altGraphics?: boolean;
};

const SectionHeading = ({
  Tag,
  text,
  size = '4xl',
  isCentered = true,
  altGraphics = false,
  hasGraphic = true,
}: props) => {
  return (
    <Tag
      className={`text-center w-fit whitespace-normal pb-4 text-${size} font-bold relative
        ${isCentered && `mx-auto `}
      `}
    >
      {text}
      {hasGraphic && (
        <div className='absolute left-0 -top-6 h-6 w-16'>
          <Image
            src={altGraphics ? graphicAlt : graphic}
            loading='lazy'
            alt='Triangle Graphics'
            className='h-full object-contain'
          />
        </div>
      )}
    </Tag>
  );
};

export default SectionHeading;
