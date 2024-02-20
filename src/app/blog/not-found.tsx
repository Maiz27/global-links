import { Blog404 } from '@/components/404s/404Components';
import PageTransition from '@/components/animationWrappers/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <Blog404 />
    </PageTransition>
  );
}
