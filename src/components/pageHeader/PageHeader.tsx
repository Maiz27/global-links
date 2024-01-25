import Image from 'next/image';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import { urlFor } from '@/lib/sanity/sanityClient';
import {
  calculateReadTime,
  getStringDate,
  pageHeaderData,
} from '@/lib/constants';
import { FaUserPen, FaCalendarDays, FaStopwatch } from 'react-icons/fa6';
import { blog } from '@/lib/types';

type Props =
  | {
      pageIndex: number;
      altGraphic?: boolean;
      heading?: never;
      paragraph?: never;
      blog?: never;
    }
  | {
      heading: string;
      paragraph: string;
      altGraphic?: boolean;
      pageIndex?: never;
      blog?: never;
    }
  | {
      blog: blog;
      altGraphic?: boolean;
      pageIndex?: never;
      heading?: never;
      paragraph?: never;
    };

const PageHeader = ({
  pageIndex,
  heading,
  paragraph,
  blog,
  altGraphic = true,
}: Props) => {
  if (blog) {
    const { title, publishedAt, author, mainImage, categories, body } = blog;
    const imgUrl = urlFor(mainImage).url();

    return (
      <section className='relative'>
        <div className='w-full h-[35rem] relative'>
          <Image
            src={imgUrl}
            width={2400}
            height={2400}
            alt='hero image'
            loading='eager'
            className='w-full h-full object-cover object-center'
            priority={true}
          />
          <div className='absolute inset-0 bg-black opacity-60'></div>
        </div>
        <div className='h-3/4 w-10/12 mt-2 flex flex-col justify-center text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <SectionHeading text={title} Tag='h1' isCentered={true} />

          <div className='flex flex-col lg:justify-evenly gap-4 mt-4 lg:mt-10 text-xs xl:text-base lg:w-3/5 lg:mx-auto tracking-wider leading-5'>
            <ul className='w-full flex flex-wrap lg:justify-evenly gap-2'>
              {categories.map(({ title }) => {
                return (
                  <li
                    key={title}
                    className='badge badge-xs text-neutral badge-outline py-2'
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
            <div className='w-full flex flex-col lg:flex-row lg:justify-evenly gap-1 pl-2'>
              <span className='flex items-center gap-2'>
                <FaUserPen className='text-' />
                {author.name}
              </span>
              <time className='flex items-center gap-2'>
                <FaCalendarDays className='text-' />
                {getStringDate(publishedAt)}
              </time>
              <span className='flex items-center gap-2'>
                <FaStopwatch className='text-' />
                {calculateReadTime(body)} mins read
              </span>
            </div>
          </div>
        </div>
        <Breadcrumbs />
      </section>
    );
  }

  return (
    <section className='min-h-[50vh] flex flex-col bg-triangle-pattern bg-cover bg-bottom text-base-100'>
      <div className='h-5/6 grid place-items-center grow py-10'>
        <div className='space-y-2'>
          <SectionHeading
            Tag='h1'
            text={heading ? heading : pageHeaderData[pageIndex!].heading}
            altGraphics={altGraphic}
          />
          <p
            className={`px-2 text-center w-11/12 mx-auto max-w-6xl ${
              paragraph && 'text-sm xl:text-base'
            }`}
          >
            {paragraph ? paragraph : pageHeaderData[pageIndex!].text}
          </p>
        </div>
      </div>
      <Breadcrumbs />
    </section>
  );
};

export default PageHeader;
