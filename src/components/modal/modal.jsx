import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay';

import style from './modal.module.css';

export default function Modal({ children, onClose }) {
  const reactModals = document.getElementById('modals');

	return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={style.container}>
        <h2 className={`${style.title} text text_type_main-large mt-10 ml-10 pt-3`}>
          Детали ингредиента
        </h2>
        <button className={style.close} >
          <CloseIcon onClick={onClose} />
        </button>
        {children}
      </div>
    </ModalOverlay>,
    reactModals
  );
}
