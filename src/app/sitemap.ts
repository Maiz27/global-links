import { baseURl, routes } from '@/lib/constants';
import {
  fetchSanityData,
  getAllPostsForSiteMap,
  getAllVehicleForSiteMap,
} from '@/lib/sanity/queries';
import { blog, vehicle } from '@/lib/types';

export default async function sitemap() {
  const allPosts: blog[] = await fetchSanityData(getAllPostsForSiteMap);
  const allVehicles: vehicle[] = await fetchSanityData(getAllVehicleForSiteMap);

  const posts = allPosts.map(({ slug, publishedAt }) => ({
    url: `${baseURl}/blog/${slug.current}`,
    lastModified: publishedAt,
  }));

  const vehicles = allVehicles.map(({ slug }) => ({
    url: `${baseURl}/vehicles/${slug.current}`,
    lastModified: new Date().toISOString(),
  }));

  const allRoutes = [
    { name: 'Home', href: '/' },
    ...routes,
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'After Sale', href: '/services/after-sale' },
    { name: 'Spare Parts', href: '/services/spare-parts' },
  ];

  const _routes = allRoutes.map(({ href }) => ({
    url: `${baseURl}${href}`,
    lastModified: new Date().toISOString(),
  }));

  return [..._routes, ...posts, ...vehicles];
}
