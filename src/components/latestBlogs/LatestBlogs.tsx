import React from 'react';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import BlogCard from '../blogComp/BlogCard';
import { blog } from '@/types';

const LatestBlogs = ({ blogs }: { blogs: blog[] }) => {
  return (
    <section className='my-20 space-y-10'>
      <div className='mx-auto text-center max-w-2xl'>
        <SectionHeading Tag='h2' text='Featured Blogs' />
        <p className='px-1'>
          Dive into our featured blogs for the latest in automotive trends,
          maintenance tips, and exciting Toyota updates. Stay connected with the
          dynamic world of Global Links—where knowledge meets the road.
        </p>
      </div>
      <div className='w-11/12 pb-10 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {blogs.map((blog) => {
          return <BlogCard key={blog.slug.current} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default LatestBlogs;
