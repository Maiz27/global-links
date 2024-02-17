import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';
import Recommendations from '@/components/blogComp/Recommendations';
import BlogShare from '@/components/blogComp/BlogShare';
import { fetchSanityData, getPostBySlug } from '@/lib/sanity/queries';
import PageTransition from '@/components/animationWrappers/PageTransition';

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await fetchSanityData(getPostBySlug, { slug });
  const { body, slug: currentSlug, categories } = post;

  return (
    <PageTransition tag='article'>
      <PageHeader blog={post} />

      <div className='w-11/12 mx-auto flex flex-col xl:flex-row items-center lg:items-start gap-4 mt-10 mb-20'>
        <section className='w-full xl:w-2/3'>
          <BlogBody body={body} />
        </section>

        <aside className='w-full xl:w-1/3 flex flex-col items-center sticky top-20 gap-8'>
          <BlogShare />

          <Recommendations slug={currentSlug.current} categories={categories} />
        </aside>
      </div>
    </PageTransition>
  );
};

export default page;
