import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogBody from '@/components/blogComp/BlogBody';
import PageHeader from '@/components/pageHeader/PageHeader';
import { fetchSanityData, getTermsOfUse } from '@/lib/sanity/queries';
import { OtherGLAData } from '@/lib/types';

const page = async () => {
  const { terms }: OtherGLAData = await fetchSanityData(getTermsOfUse);

  const heading = {
    title: 'Terms of Use - Global Links Auto',
    paragraph:
      "Welcome to Global Links Auto! We're committed to providing you with exceptional service and transparency in all your dealings with us. Our Terms of Use outline the legal agreements between you and Global Links Auto regarding your use of our website, www.globallinksauto.com, and our services. By accessing or using our site, you agree to comply with and be bound by these terms, ensuring a smooth and trustworthy experience. Please read these terms carefully before proceeding, as they affect your legal rights and obligations.",
  };

  return (
    <PageTransition>
      <PageHeader heading={heading.title} paragraph={heading.paragraph} />
      <section className='mx-auto xl:w-2/3 mb-20'>
        <BlogBody body={terms!} />
      </section>
    </PageTransition>
  );
};

export default page;
