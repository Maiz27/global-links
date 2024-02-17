import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import PageHeader from '@/components/pageHeader/PageHeader';
import {
  fetchSanityData,
  getAllPosts,
  getPostCategories,
} from '@/lib/sanity/queries';

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
