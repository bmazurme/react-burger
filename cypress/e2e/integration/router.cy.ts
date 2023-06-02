describe('app works correctly with routes', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(1800, 1200);
  });

  it('main to feed', () => {
    cy.contains('Соберите бургер');
    cy.contains('Оформить заказ');
    cy.wait(1000);

    cy.visit('feed');

    cy.contains('Лента заказов');
    cy.contains('Выполнено за все время:');
    cy.wait(1000);

    cy.visit('/profile');
    cy.contains('Вход');
  });
});
