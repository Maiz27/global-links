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
    <main>
      <PageHeader pageIndex={5} />

      <BlogsGrid blogs={blogs} categories={categories} />

      {/* <div className='min-h-screen'></div> */}
    </main>
  );
};

export default page;
