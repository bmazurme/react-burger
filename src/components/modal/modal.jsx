import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay';

import style from './modal.module.css';

export default function Modal({
  title, children, onClose, isOpen,
}) {
  const reactModals = document.getElementById('modals');

	return ReactDOM.createPortal(
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      {isOpen && <div className={style.container}>
        {title &&
          <h2 className={"text text_type_main-large mt-10 ml-10 pt-3'}"}>
            {title}
          </h2>
        }
        <button type="button" className={style.close}>
          <CloseIcon type="primary" onClick={onClose} />
        </button>
        {children}
      </div>}
    </ModalOverlay>,
    reactModals
  );
}

Modal.protoType = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
