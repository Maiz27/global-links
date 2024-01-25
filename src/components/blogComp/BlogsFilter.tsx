import { blogCategory } from '@/types';

type props = {
  categories: blogCategory[];
  count: number;
  selected: {
    value: string[];
    setter: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const BlogsFilter = ({ categories, selected, count }: props) => {
  return (
    <aside className='w-full h-fit xl:w-1/5 card bg-base-200/60 p-4'>
      <div className='flex justify-between text-lg'>
        <span>Filter</span>
        <p>
          <span className='font-semibold'>{count}</span> Matches
        </p>
      </div>
      <div className='divider -mt-2'></div>

      <CategoriesSelector
        categories={categories}
        selected={selected.value}
        setSelected={selected.setter}
      />
    </aside>
  );
};

export default BlogsFilter;

type typesSelectorProps = {
  categories: blogCategory[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoriesSelector = ({
  categories,
  selected,
  setSelected,
}: typesSelectorProps) => {
  const handleChange = (title: string) => {
    setSelected((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(title)) {
        newSelected.delete(title);
      } else {
        newSelected.add(title);
      }
      return Array.from(newSelected);
    });
  };

  return (
    <div className='collapse collapse-plus -mt-4'>
      <input type='checkbox' />
      <div className='collapse-title text-lg font-medium'>Categories</div>
      <div className='collapse-content'>
        {categories.map(({ title }, index) => {
          return (
            <div key={index} className='form-control'>
              <label className='label justify-start gap-4 cursor-pointer'>
                <input
                  type='checkbox'
                  className='checkbox'
                  checked={selected.includes(title)}
                  onChange={() => handleChange(title)}
                />
                <span className='label-text'>{title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
