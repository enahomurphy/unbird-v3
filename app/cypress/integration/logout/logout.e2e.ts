it('works', () => {
  cy.visit('/logout');
  cy.get('button').should('contain', 'Hello world');
});
