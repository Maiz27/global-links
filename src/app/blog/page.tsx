import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import PageHeader from '@/components/pageHeader/PageHeader';
import { getMetadataByPageIndex } from '@/lib/constants';
import {
  fetchSanityData,
  getAllPosts,
  getPostCategories,
} from '@/lib/sanity/queries';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = getMetadataByPageIndex(8);

const page = async () => {
  const [blogs, categories] = await Promise.all([
    fetchSanityData(getAllPosts),
    fetchSanityData(getPostCategories),
  ]);

  return (
    <PageTransition>
      <PageHeader pageIndex={7} />

      <BlogsGrid blogs={blogs} categories={categories} />
    </PageTransition>
  );
};

export default page;
