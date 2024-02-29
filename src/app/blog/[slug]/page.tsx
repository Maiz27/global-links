import { notFound } from 'next/navigation';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';
import Recommendations from '@/components/blogComp/Recommendations';
import BlogShare from '@/components/blogComp/BlogShare';
import {
  fetchSanityData,
  getPostBySlug,
  getPostDataForSEO,
} from '@/lib/sanity/queries';
import PageTransition from '@/components/animationWrappers/PageTransition';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import { blog } from '@/lib/types';
import { urlFor } from '@/lib/sanity/sanityClient';
import { baseURl } from '@/lib/constants';

export const revalidate = 60;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post: blog = await fetchSanityData(getPostDataForSEO, { slug });
  if (post) {
    const imgUrl = urlFor(post.mainImage).url();
    const url = `${baseURl}/blog/${post.slug.current}`;

    return {
      title: `${post.title} - Global Links Auto`,
      description: post.description,
      image: imgUrl,
      alternates: {
        canonical: url,
      },
      icons: {
        icon: '/imgs/logo/favicon.ico',
        shortcut: '/imgs/logo/favicon.ico',
        apple: '/imgs/logo/favicon.ico',
        other: {
          rel: 'apple-touch-icon-precomposed',
          url: '/imgs/logo/favicon.ico',
        },
      },
      openGraph: {
        type: 'article',
        url: url,
        title: post.title,
        description: post.description,
        siteName: post.title,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: url,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
    };
  }
}

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await fetchSanityData(getPostBySlug, { slug });

  if (!post) {
    return notFound();
  }

  const { body, slug: currentSlug, categories } = post;

  return (
    <PageTransition tag='article'>
      <PageHeader blog={post} />

      <div className='w-11/12 mx-auto flex flex-col xl:flex-row items-center lg:items-start gap-4 mt-10 mb-20'>
        <section className='w-full xl:w-2/3'>
          <BlogBody body={body} />
        </section>

        <AnimateInView
          tag='aside'
          className='w-full xl:w-1/3 flex flex-col items-center sticky top-20 gap-8'
        >
          <BlogShare />

          <Recommendations slug={currentSlug.current} categories={categories} />
        </AnimateInView>
      </div>
    </PageTransition>
  );
};

export default page;
