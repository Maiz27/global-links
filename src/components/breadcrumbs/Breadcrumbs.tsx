'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLastSegment = index === pathSegments.length - 1;
    const breadcrumb = {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the first letter
      link: `/${pathSegments.slice(0, index + 1).join('/')}`, // Construct the breadcrumb link
      isActive: isLastSegment && !segment.includes('?'), // Set isActive to true if it's the last segment and there are no query parameters
    };
    return breadcrumb;
  });
  return (
    <div className='text-sm breadcrumbs h-1/6 flex items-end mt-4 pl-4 lg:pl-6'>
      <ul>
        <Crumb label='Home' link='/' isActive={false} />
        {breadcrumbs.map(({ link, label, isActive }) => (
          <Crumb key={label} label={label} link={link} isActive={isActive} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;

type props = {
  label: string;
  link: string;
  isActive: boolean;
};

const Crumb = ({ label, link, isActive }: props) => {
  return (
    <li>
      {!isActive ? <Link href={link}>{label}</Link> : <span>{label}</span>}
    </li>
  );
};
