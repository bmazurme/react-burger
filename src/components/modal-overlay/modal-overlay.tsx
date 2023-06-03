/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import style from './modal-overlay.module.css';

export default function ModalOverlay({ children, closeModal, isOpen }
  : { children: ReactNode, closeModal: () => void, isOpen: boolean }) {
  return (
    <div
      className={classNames(style.overlay, { [style.overlay_open]: isOpen })}
      onClick={closeModal}
      data-test="modal"
    >
      {children}
    </div>
  );
}
