// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Si no se especifican las opciones, utiliza las opciones por defecto
    const newOptions = Object.assign(
      {
        pageLoadTimeout: 20000, // Tiempo de espera para que la página se cargue completamente (15 segundos)
        requestTimeout: 10000, // Tiempo de espera para las solicitudes de red (10 segundos)
      },
      options
    );
  
    return originalFn(url, newOptions);
  });