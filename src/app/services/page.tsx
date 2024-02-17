import PageTransition from '@/components/animationWrappers/PageTransition';
import IconCard from '@/components/cards/IconCard';
import PageHeader from '@/components/pageHeader/PageHeader';
import { automotiveServices, pagesMetaData } from '@/lib/constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const metadata: Metadata = {
  title: pagesMetaData[4].title,
  description: pagesMetaData[4].description,
  icons: {
    icon: pagesMetaData[4].icon,
    shortcut: pagesMetaData[4].icon,
    apple: pagesMetaData[4].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[4].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[4].type,
    url: pagesMetaData[4].url,
    title: pagesMetaData[4].title,
    description: pagesMetaData[4].description,
    siteName: pagesMetaData[4].title,
    images: [
      {
        url: pagesMetaData[4].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[4].url,
    images: [
      {
        url: pagesMetaData[4].image,
      },
    ],
  },
};

const page = () => {
  return (
    <PageTransition>
      <PageHeader pageIndex={3} />

      <section className='my-20 w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {automotiveServices.map(({ heading, text, icon }, idx) => {
          return (
            <IconCard
              key={heading}
              title={heading}
              paragraph={text}
              icon={icon}
              index={idx}
            />
          );
        })}
      </section>
    </PageTransition>
  );
};

export default page;
