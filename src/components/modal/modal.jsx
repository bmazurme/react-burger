/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay';

import { ESC_CLOSE_ON, OVERLAY_CLOSE_ON } from '../../utils';

import style from './modal.module.css';

export default function Modal({
  title, children, onClose, isOpen,
}) {
  const reactModals = document.getElementById('modals');

  const handleEscape = (e) => {
    if (e.type === 'keydown' && e.code === 'Escape') {
      if (OVERLAY_CLOSE_ON) {
        onClose();
      }
    }
  };

  const closeModal = () => ESC_CLOSE_ON && onClose();

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

  return ReactDOM.createPortal(
    <ModalOverlay isOpen={isOpen} closeModal={closeModal}>
      {isOpen && (
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        {title && <h2 className={"text text_type_main-large mt-10 ml-10 pt-3'}"}>{title}</h2>}
        <button type="button" className={style.close}>
          <CloseIcon type="primary" onClick={onClose} />
        </button>
        {children}
      </div>
      )}
    </ModalOverlay>,
    reactModals,
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
