import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay';

import style from './modal.module.css';

<<<<<<< Updated upstream
export default function Modal({ children, onClose }) {
  const reactModals = document.getElementById('modals');
=======
export default function Modal({title, children, onClose }) {
  const reactModals = document.getElementById('root');
>>>>>>> Stashed changes

	return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={style.container}>
<<<<<<< Updated upstream
        <h2 className={`${style.title} text text_type_main-large mt-10 ml-10 pt-3`}>
          Детали ингредиента
        </h2>
        <button className={style.close} >
          <CloseIcon onClick={onClose} />
=======
        {title &&
          <h2 className={"text text_type_main-large mt-10 ml-10 pt-3'}"}>
            {title}
          </h2>
        }
        <button type="button" className={style.close} >
          <CloseIcon type="primary" onClick={onClose} />
>>>>>>> Stashed changes
        </button>
        {children}
      </div>
    </ModalOverlay>,
    reactModals
  );
}
<<<<<<< Updated upstream
=======

Modal.protoType = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
>>>>>>> Stashed changes
