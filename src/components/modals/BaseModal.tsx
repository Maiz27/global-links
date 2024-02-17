import React, { ReactNode } from 'react';

type props = {
  id: string;
  CTA: string;
  closeBtn: React.RefObject<HTMLButtonElement>;
  children: ReactNode;
  icon?: ReactNode;
  btnStyle?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  isDisabled?: boolean;
  classNames?: string;
};

const BaseModal = ({
  id,
  CTA,
  icon,
  closeBtn,
  children,
  btnStyle = 'primary',
  isDisabled = false,
  classNames = '',
}: props) => {
  const handleOpenModal = () => {
    if (document) {
      (document.getElementById(`${id}-modal`) as HTMLFormElement).showModal();
    }
  };

  return (
    <>
      <button
        title={CTA}
        className={`btn btn-sm normal-case btn-${btnStyle}`}
        onClick={handleOpenModal}
        disabled={isDisabled}
      >
        {icon}
        <p className={`${icon && 'hidden md:block'}`}>{CTA}</p>
      </button>
      <dialog id={`${id}-modal`} className='modal modal-bottom sm:modal-middle'>
        <div
          className={`modal-box bg-base-100 border-2 border-base-300 ${classNames}`}
        >
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button
              ref={closeBtn}
              className='btn btn-sm btn-circle btn-ghost text-primary absolute right-2 top-2'
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default BaseModal;
