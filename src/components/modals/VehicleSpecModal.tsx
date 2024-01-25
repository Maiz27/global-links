'use client';
import React, { useRef } from 'react';
import BaseModal from './BaseModal';

const VehicleSpecModal = () => {
  const closeBtn = useRef(null);
  return (
    <BaseModal
      id='export-data'
      CTA='View All Specs'
      closeBtn={closeBtn}
      btnStyle='accent'
    >
      <></>
    </BaseModal>
  );
};

export default VehicleSpecModal;
