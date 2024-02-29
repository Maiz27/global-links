import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogBody from '@/components/blogComp/BlogBody';
import PageHeader from '@/components/pageHeader/PageHeader';
import { fetchSanityData, getPrivacyPolicy } from '@/lib/sanity/queries';
import { OtherGLAData } from '@/lib/types';

export const revalidate = 14400;

const page = async () => {
  const { privacy }: OtherGLAData = await fetchSanityData(getPrivacyPolicy);

  const heading = {
    title: 'Privacy Policy - Global Links Auto',
    paragraph:
      "Your privacy is of paramount importance to us at Global Links Auto. This Privacy Policy details how we collect, use, protect, and share information gathered from our website, www.globallinksauto.com, and through the services we provide. We are dedicated to safeguarding your personal data and ensuring transparency in our practices. Whether you're visiting our site, booking after-sale services, or requesting additional vehicle information, understand how your information is treated and your rights concerning it. We encourage you to review our Privacy Policy carefully to stay informed about our privacy practices.",
  };

  return (
    <PageTransition>
      <PageHeader heading={heading.title} paragraph={heading.paragraph} />
      <section className='mx-auto xl:w-2/3 mb-20'>
        <BlogBody body={privacy!} />
      </section>
    </PageTransition>
  );
};

export default page;
