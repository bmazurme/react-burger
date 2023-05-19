const BASE_URL = 'https://norma.nomoreparties.space/api';
const ESC_CLOSE_ON = true;
const OVERLAY_CLOSE_ON = true;

const MODAL_CONFIG = {
  INITIAL: {
    opacity: 0,
    scale: 0.75,
  },
  ANIMATE: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.15,
    },
  },
  EXIT: {
    opacity: 0,
    scale: 0.75,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
};

export {
  BASE_URL,
  ESC_CLOSE_ON,
  OVERLAY_CLOSE_ON,
  MODAL_CONFIG,
};
