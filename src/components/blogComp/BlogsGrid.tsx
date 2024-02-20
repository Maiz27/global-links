import AnimateInView from '../animationWrappers/AnimateInView';
import BlogCard from './BlogCard';
import BlogsFilter from './BlogsFilter';
import useFilterBlogs from '@/lib/hooks/useFilterBlogs';
import { blog, blogCategory } from '@/lib/types';

type props = {
  blogs: blog[];
  categories: blogCategory[];
};

const BlogsGrid = ({ blogs, categories }: props) => {
  const { filteredList, selectedCategories, setSelectedCategories } =
    useFilterBlogs(blogs);
  return (
    <section className='mt-10 mb-20 w-11/12 min-h-screen mx-auto flex flex-col xl:flex-row gap-8'>
      <BlogsFilter
        count={filteredList.length}
        categories={categories}
        selected={{ value: selectedCategories, setter: setSelectedCategories }}
      />

      <div className='w-full h-fit  grid place-items-center mx-auto gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
        {filteredList.map((blog, idx: number) => {
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

export default BlogsGrid;
