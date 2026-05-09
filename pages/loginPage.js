class loginPage {
  visit() {
    cy.visit('/')
  }

  fillEmail(email) {
    cy.get('#email').clear().type(email)
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password)
  }

  submit() {
    cy.get('.p-16 > .flex-col > .flex').click()
  }

  closeModal() {
    cy.get('.fixed > .flex-col > .flex').click()
  }

  validateError(text) {
    cy.contains(text).should('be.visible')
  }
}

export default new loginPage()