import { StaticImageData } from 'next/image';

export type heroImages = {
  images: Array<{
    title: string;
    index: number;
    image: Object;
  }>;
};

export type blog = {
  index: number;
  slug: string;
  publishedAt: string;
  title: string;
  description: string;
  categories: Array<{
    title: string;
  }>;
  mainImage: string | StaticImageData;
  author: {
    name: string;
    title: string;
    image: Object;
  };
  body: blogBody;
};

export type blogBody = Array<{
  _type: string;
  style: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}>;
