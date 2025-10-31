describe('Simple frontend smoke', () => {
  it('loads the index and has expected content and injected BACKEND_URL', () => {
    // Visit root (uses cypress.config.js baseUrl)
    cy.visit('/');

    // Check for the visible expected text used by previous tests
    cy.contains('Frontend ↔ Backend demo');

    // Check that the server injected a BACKEND_URL on window
    cy.window().its('BACKEND_URL').should('match', /^https?:\/\//);
  });
});
