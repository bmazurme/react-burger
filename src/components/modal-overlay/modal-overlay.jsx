/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import style from './modal-overlay.module.css';

export default function ModalOverlay({ children, closeModal, isOpen }) {
  return (
    <div
      className={`${style.overlay} ${isOpen && style.overlay_open}`}
      onClick={closeModal}
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
