import { pageHeaderData } from '@/constants';
import SectionHeading from '../sectionHeading/SectionHeading';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

type props = {
  pageIndex?: number;
  heading?: string;
  paragraph?: string;
  background?: string;
};

const PageHeader = ({ pageIndex, heading, paragraph }: props) => {
  return (
    <section className='min-h-[30vh] flex flex-col bg-gradient-to-r from-gray-900 to-black text-base-100'>
      <div className='h-5/6 grid place-items-center grow'>
        <div className='space-y-2'>
          <SectionHeading
            Tag='h1'
            text={heading ? heading : pageHeaderData[pageIndex!].heading}
            isCentered={true}
          />
          <p
            className={`px-2 text-center ${
              paragraph && 'text-sm xl:text-base'
            }`}
          >
            {paragraph ? paragraph : pageHeaderData[pageIndex!].text}
          </p>
        </div>
      </div>
      <Breadcrumbs />
    </section>
  );
};

export default PageHeader;
