import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';

const LatestBlogs = () => {
  return (
    <section className='my-20 space-y-4'>
      <div className='mx-auto text-center max-w-2xl'>
        <SectionHeading Tag='h2' text='Featured Blogs' isCentered={true} />
        <p>
          Dive into our featured blogs for the latest in automotive trends,
          maintenance tips, and exciting Toyota updates. Stay connected with the
          dynamic world of Global Links—where knowledge meets the road.
        </p>
      </div>
      <div className='w-11/12 max-w-6xl mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* {whatWeDoList.map(({ title, paragraph, icon }) => {
      return (
        <Card key={title} title={title} paragraph={paragraph} icon={icon} />
      );
    })} */}
      </div>
    </section>
  );
};

export default LatestBlogs;
