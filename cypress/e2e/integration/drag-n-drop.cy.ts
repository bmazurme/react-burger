/* eslint-disable import/no-extraneous-dependencies */
import { selectors } from '../../support/selectors';

let login;
let password;

describe('drag-n-drop', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1800, 1200);

    login = Cypress.env('CYPRESS_EMAIL') || 'email@yandex.ru';
    password = Cypress.env('CYPRESS_PASSWORD') || 'password';
  });

  describe('dnd', () => {
    it('dnd-bun', () => {
      cy.wait(1000);

      console.log(123);

      cy.get(selectors.cards.card).eq(0).trigger('dragstart');

      cy.get(selectors.constructor.constructorTop).should('exist');
      cy.get(selectors.constructor.constructorTop).trigger('drop');

      cy.get(selectors.cards.card).eq(0).trigger('dragstart');

      cy.get(selectors.constructor.constructorBottom).should('exist');
      cy.get(selectors.constructor.constructorBottom).trigger('drop');

      cy.get(selectors.cards.card).eq(3).trigger('dragstart');
      cy.get(selectors.constructor.constructorMiddle).trigger('drop');

      cy.get(selectors.cards.card).eq(7).trigger('dragstart');
      cy.get(selectors.constructor.constructorMiddle).trigger('drop');

      cy.get(selectors.cards.card).eq(7).trigger('dragstart');
      cy.get(selectors.constructor.constructorMiddle).trigger('drop');

      cy.get(selectors.constructor.constructorMiddle)
        .find('[class^=constructor-element__action]').eq(1).click(); // delete

      cy.get(selectors.cards.card).eq(9).trigger('dragstart');
      cy.get(selectors.constructor.constructorMiddle).trigger('drop');

      cy.get(selectors.constructor.constructorMiddle).should('not.be.empty');

      cy.get('button').contains('Оформить заказ').click();
      cy.contains('Вход');

      cy.get(selectors.login.email).type(login);
      cy.get(selectors.login.password).type(password);

      cy.get('button').contains('Войти').click();
      cy.wait(1000);

      cy.get('button').contains('Оформить заказ').click();
      cy.wait(16000);

      cy.get(selectors.modal.overlay).should('exist');

      cy.get(selectors.modal.closeButton).click();

      cy.get(selectors.modal.overlay).should('not.exist');
    });
  });
});
