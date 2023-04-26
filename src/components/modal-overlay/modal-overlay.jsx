import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// or props...
import { ESC_CLOSE_ON, OVERLAY_CLOSE_ON } from '../../utils/config';

import style from './modal-overlay.module.css';

export default function ModalOverlay({ children, onClose, isOpen }) {

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
    <div className={`${style.overlay} ${isOpen && style.overlay_open}`} style={{overflow: 'hidden'}} onClick={closeModal}>
      {children}
    </div>
  );
}

ModalOverlay.protoType = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
