import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import PageHeader from '@/components/pageHeader/PageHeader';
import { pagesMetaData } from '@/lib/constants';
import {
  fetchSanityData,
  getAllPosts,
  getPostCategories,
} from '@/lib/sanity/queries';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const revalidate = 60;

export const metadata: Metadata = {
  title: pagesMetaData[8].title,
  description: pagesMetaData[8].description,
  icons: {
    icon: pagesMetaData[8].icon,
    shortcut: pagesMetaData[8].icon,
    apple: pagesMetaData[8].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[8].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[8].type,
    url: pagesMetaData[8].url,
    title: pagesMetaData[8].title,
    description: pagesMetaData[8].description,
    siteName: pagesMetaData[8].title,
    images: [
      {
        url: pagesMetaData[8].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[8].url,
    images: [
      {
        url: pagesMetaData[8].image,
      },
    ],
  },
};

const page = async () => {
  const [blogs, categories] = await Promise.all([
    fetchSanityData(getAllPosts),
    fetchSanityData(getPostCategories),
  ]);

  return (
    <PageTransition>
      <PageHeader pageIndex={7} />

      <BlogsGrid blogs={blogs} categories={categories} />

      {/* <div className='min-h-screen'></div> */}
    </PageTransition>
  );
};

export default page;
