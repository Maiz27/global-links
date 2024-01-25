import Image from 'next/image';
import CTA from '../CTA/CTA';
import { fetchSanityData, getRecommendedPosts } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/sanityClient';
import { blog, blogCategory } from '@/lib/types';

type props = {
  slug: string;
  categories: blogCategory[];
};

const Recommendations = async ({ slug, categories }: props) => {
  const category = categories[0].title;
  const posts: blog[] = await fetchSanityData(getRecommendedPosts, {
    currentSlug: slug,
    category,
  });

  if (posts)
    return (
      <section className='w-full pb-4 gap-2'>
        <div className='w-full px-4 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-4'>
          {posts.map((post) => {
            return <RecommendationCard key={post.slug.current} post={post} />;
          })}
        </div>
      </section>
    );
};

export default Recommendations;

const RecommendationCard = ({ post }: { post: blog }) => {
  const { title, slug, mainImage, categories } = post;

  const imgUrl = urlFor(mainImage).url();

  const after =
    'after:content-[""] after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-transparent after:via-black/40 after:to-black/90';
  const before =
    'before:content-[""] before:absolute before:inset-[1px] before:bg-transparent group-hover:before:bg-black/40 before:transition-colors before:duration-500';
  return (
    <div className='card w-full max-w-sm h-[20rem] bg-base-100 shadow-xl relative group'>
      <figure className={`absolute inset-0 rounded-xl ${before} ${after}`}>
        <Image
          src={imgUrl}
          width={1920}
          height={1080}
          loading='lazy'
          alt='blog'
          className='h-full object-cover rounded-xl'
        />
      </figure>
      <div className='card-body justify-end z-10 text-base-100'>
        <div className='flex gap-1 items-center flex-wrap '>
          {categories.map(({ title }) => {
            return (
              <div key={title} className='badge badge-sm badge-outline'>
                {title}
              </div>
            );
          })}
        </div>
        <h3 className='card-title'>{title}</h3>

        <div className='card-actions justify-end'>
          <CTA text='Learn More' path={`/blog/${slug.current}`} />
        </div>
      </div>
    </div>
  );
};
