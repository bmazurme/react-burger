import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

<<<<<<< Updated upstream
import style from './modal-overlay.module.css';

const ESC_CLOSE_ON = false;
const OVERLAY_CLOSE_ON = false;
=======
import { ESC_CLOSE_ON, OVERLAY_CLOSE_ON } from '../../utils/config';

import style from './modal-overlay.module.css';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

ModalOverlay.protoType = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
>>>>>>> Stashed changes
