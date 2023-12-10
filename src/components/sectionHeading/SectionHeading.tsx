import React from 'react';

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
};

const SectionHeading = ({
  Tag,
  text,
  size = '4xl',
  isCentered = false,
}: props) => {
  return (
    <Tag
      className={
        isCentered
          ? `mx-auto text-center w-fit whitespace-normal pb-4 text-${size} font-bold`
          : `text-center w-fit whitespace-normal pb-4 text-${size} font-bold`
      }
    >
      {text}
    </Tag>
  );
};

export default SectionHeading;
