import { useEffect, useState } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import CTA from '../CTA/CTA';
import { toast } from 'react-toastify';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const BlogShare = () => {
  const [currentURL, setCurrentURL] = useState(window.location.href);

  useEffect(() => {
    setCurrentURL(window.location.href);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);

  const copyToClipboard = () => {
    const notifySuccess = () => toast.success('Link Copied Successfully!');
    const notifyFailure = () => toast.error('Failed to copy link!');
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        console.log('URL copied to clipboard:', currentURL);
        notifySuccess();
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        notifyFailure();
      });
  };
  return (
    <section className='w-full card shadow-md pb-4 gap-2'>
      <h3 className='text-2xl mb-2 text-center'>Share Blog</h3>

      <label className='form-control flex-row w-full px-8'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
          disabled={true}
          value={currentURL}
        />
        <CTA text='Copy' isBtn={true} onClick={copyToClipboard} />
      </label>
      <div className='w-4/5 mx-auto grid place-items-center grid-cols-6 gap-4'>
        {socials.map(({ id, icon, ShareButton }) => {
          return (
            <ShareButton
              key={id}
              url={currentURL}
              className='tooltip w-10 h-10 grid place-items-center rounded-full group shadow'
              data-tip={id}
            >
              {icon}
            </ShareButton>
          );
        })}
      </div>
    </section>
  );
};

export default BlogShare;

const socials = [
  {
    id: 'email',
    icon: (
      <FaEnvelope className='text-xl xl:text-2xl group-hover:text-secondary' />
    ),
    ShareButton: EmailShareButton,
  },
  {
    id: 'facebook',
    icon: (
      <FaFacebookF className='text-xl xl:text-2xl group-hover:text-[#0b83ed]' />
    ),
    ShareButton: FacebookShareButton,
  },
  {
    id: 'linkedin',
    icon: (
      <FaLinkedin className='text-xl xl:text-2xl group-hover:text-[#0077b5]' />
    ),
    ShareButton: LinkedinShareButton,
  },
  {
    id: 'telegram',
    icon: (
      <FaTelegram className='text-xl xl:text-2xl group-hover:text-[#25a3e1]' />
    ),
    ShareButton: TelegramShareButton,
  },
  {
    id: 'twitter',
    icon: (
      <RiTwitterXFill className='text-xl xl:text-2xl group-hover:text-[#1da1f2]' />
    ),
    ShareButton: TwitterShareButton,
  },
  {
    id: 'whatsapp',
    icon: (
      <FaWhatsapp className='text-xl xl:text-2xl group-hover:text-[#50ca5e]' />
    ),
    ShareButton: WhatsappShareButton,
  },
];
