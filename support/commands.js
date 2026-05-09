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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get('#email').type('qa@test.com')
  cy.get('#password').type('123456')
  cy.get('.p-16 > .flex-col > .flex').click()
  cy.get('.fixed > .flex-col > .flex').click()
})

Cypress.Commands.add('acessarBancoDeDados', () => {
  cy.get('.flex-col > .flex').click()
  cy.get('menu > .flex > :nth-child(1)').click()
})