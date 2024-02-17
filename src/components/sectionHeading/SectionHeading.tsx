'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useWindowWidth from '@/lib/hooks/useWindowWidth';

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
  const tagRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [tagWidth, setTagWidth] = useState(0);
  const width = useWindowWidth();

  const calculateWidths = useCallback(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
    if (tagRef.current) {
      setTagWidth(tagRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    calculateWidths();
  }, [text, width, calculateWidths]);

  return (
    <Tag
      ref={tagRef}
      className={`whitespace-normal pb-4 text-${size} font-bold relative
        ${isCentered ? `text-center` : ''}
      `}
    >
      <span ref={textRef}>{text}</span>
      {hasGraphic && (
        <div
          className='absolute -top-6 h-6 w-16'
          style={{
            left: isCentered ? `${(tagWidth - textWidth) / 32}rem` : '0',
          }}
        >
          <Image
            src={
              altGraphics
                ? `/imgs/graphics/triangles-2.png`
                : `/imgs/graphics/triangles.png`
            }
            width={250}
            height={250}
            loading='lazy'
            alt='Triangle Graphics'
            className='h-full object-contain'
          />
        </div>
      )}
    </Tag>
  );
};

export default React.memo(SectionHeading);
