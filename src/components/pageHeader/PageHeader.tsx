import { pageHeaderData } from '@/constants';
import SectionHeading from '../sectionHeading/SectionHeading';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

type props = {
  pageIndex: number;
};

const PageHeader = ({ pageIndex }: props) => {
  return (
    <section className='h-72 bg-gradient-to-r from-gray-900 to-black text-base-100'>
      <div className='h-5/6 grid place-items-center'>
        <div className='space-y-2'>
          <SectionHeading
            Tag='h1'
            text={pageHeaderData[pageIndex].heading}
            isCentered={true}
          />
          <p className='px-2 text-center'>{pageHeaderData[pageIndex].text}</p>
        </div>
      </div>
      <Breadcrumbs />
    </section>
  );
};

export default PageHeader;
