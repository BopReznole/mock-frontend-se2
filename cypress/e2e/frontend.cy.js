describe('Simple frontend smoke', () => {
  it('loads the index and has expected content', () => {
    // Visit root (uses cypress.config.js baseUrl)
    cy.visit('/');

    // Check for the visible expected text
    cy.contains('Frontend ↔ Backend demo');
    cy.contains('This page will call the backend on Render and show the JSON response');

    // Check that the button exists and has correct text
    cy.get('#btn').should('be.visible').and('contain', 'Call backend');

    // Check that the output area exists with initial text
    cy.get('#out').should('be.visible').and('contain', '(click the button)');
  });
});
