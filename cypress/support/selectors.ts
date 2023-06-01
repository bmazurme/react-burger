export const selectors = {
  login: {
    email: '[name=email]',
    password: '[name=password]',
  },
  modal: {
    overlay: '[data-test=modal]',
    closeButton: '[data-test=close-button]',
  },
  cards: {
    card: '[data-test=card]',
    removeButton: '[data-test=remove]',
  },
  constructor: {
    constructorTop: '[data-test=constructor-top]',
    constructorBottom: '[data-test=constructor-bottom]',
    constructorMiddle: '[data-test=constructor-middle]',
  },
};
