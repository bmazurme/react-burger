import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './modal-overlay.module.css';

const ESC_CLOSE_ON = false;
const OVERLAY_CLOSE_ON = false;

export default function ModalOverlay({ children, onClose }) {
  const handleEscape = (evt) => {
    if (evt.type === 'keydown' && evt.code === 'Escape') {
      OVERLAY_CLOSE_ON && onClose();
    }
  };

  const closeModal = () => ESC_CLOSE_ON && onClose();

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

	return (
    <div className={style.overlay} onClick={closeModal}>
      {children}
    </div>
  );
}
