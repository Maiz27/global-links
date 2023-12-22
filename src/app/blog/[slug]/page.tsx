import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';
import { fetchSanityData, getPostBySlug } from '@/services/sanity/queries';

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await fetchSanityData(getPostBySlug, { slug });
  const { body } = post;

  return (
    <article>
      <PageHeader blog={post} />

      <section className='w-4/5 lg:w-2/3 2xl:w-1/2 mx-auto mt-10 mb-20'>
        <BlogBody body={body} />
      </section>
    </article>
  );
};

export default page;
