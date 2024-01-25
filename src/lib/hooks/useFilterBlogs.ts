'use client';
import { useEffect, useState } from 'react';
import { blog } from '@/lib/types';

const useFilterBlogs = (blogs: blog[], selected?: string[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    selected ? selected : []
  );
  const [filteredList, setFilteredList] = useState(blogs);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const list: blog[] = blogs
        .filter((item) => {
          return item.categories.some((category) =>
            selectedCategories.includes(category.title)
          );
        })
        .sort((a, b) => a.title.localeCompare(b.title));
      setFilteredList(list);
    } else {
      setFilteredList(blogs);
    }
  }, [selectedCategories, blogs]);

  return { filteredList, selectedCategories, setSelectedCategories };
};

export default useFilterBlogs;
