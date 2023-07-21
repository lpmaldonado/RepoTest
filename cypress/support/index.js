// Se configura el hook para que se visite la página antes de cada prueba
beforeEach(() => {
  cy.visit('/');
  cy.wait(2000);
});

// Después de cada caso limpiar y borrar cache
afterEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => win.location.reload());
});