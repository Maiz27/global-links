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
  title: pagesMetaData[7].title,
  description: pagesMetaData[7].description,
  icons: {
    icon: pagesMetaData[7].icon,
    shortcut: pagesMetaData[7].icon,
    apple: pagesMetaData[7].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[7].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[7].type,
    url: pagesMetaData[7].url,
    title: pagesMetaData[7].title,
    description: pagesMetaData[7].description,
    siteName: pagesMetaData[7].title,
    images: [
      {
        url: pagesMetaData[7].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[7].url,
    images: [
      {
        url: pagesMetaData[7].image,
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
      <PageHeader pageIndex={6} />

      <BlogsGrid blogs={blogs} categories={categories} />

      {/* <div className='min-h-screen'></div> */}
    </PageTransition>
  );
};

export default page;
