import React from 'react';
import PropTypes from 'prop-types';

import style from './modal-overlay.module.css';

export default function ModalOverlay({ children, closeModal, isOpen }) {
	return (
    <div
      className={`${style.overlay} ${isOpen && style.overlay_open}`}
      style={{ overflow: 'hidden' }}
      onClick={closeModal}
    >
      {children}
    </div>
  );
}

ModalOverlay.protoType = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
