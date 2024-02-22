import React from 'react';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import BlogCard from '../blogComp/BlogCard';
import { blog } from '@/lib/types';
import CTA from '../CTA/CTA';
import { fetchSanityData, getLatestPosts } from '@/lib/sanity/queries';
import AnimateInView from '../animationWrappers/AnimateInView';

export const revalidate = 60;

const LatestBlogs = async () => {
  const blogs: blog[] = await fetchSanityData(getLatestPosts);
  return (
    <section className='my-20 space-y-10'>
      <AnimateInView className='mx-auto text-center max-w-3xl space-y-2'>
        <SectionHeading
          Tag='h2'
          text='Insights and Inspirations from Our Road Experts'
        />
        <p className='px-1'>
          {`Delve into the world of Toyota through our featured blogs, where you'll find a trove of insights on the latest automotive trends, maintenance tips, and thrilling road adventures. Stay connected with Global Links Auto, where every story is crafted with the driver in mind.`}
        </p>

        <CTA text='Explore Insights' path='/blog' />
      </AnimateInView>
      <div className='w-11/12 pb-10 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {blogs.map((blog, idx) => {
          return (
            <AnimateInView
              key={blog.slug.current}
              delay={++idx * 0.2}
              className='h-full w-full'
            >
              <BlogCard blog={blog} />
            </AnimateInView>
          );
        })}
      </div>
    </section>
  );
};

export default LatestBlogs;
