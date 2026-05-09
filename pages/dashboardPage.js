class dashboardPage {

  openMenuCampanha() {
    cy.get('.flex-col > .flex').click()
  }

  acessarBancoDeDados() {
    cy.get('menu > .flex > :nth-child(1)').click()
  }

  acessarColmeiaForms() {
    cy.get('menu > .flex > :nth-child(2)').click()
  }

  clicarCandidato() {
    cy.contains('Candidato').click()
  }

  validarMenuCandidato() {
    cy.contains('Menu Candidato').should('be.visible')
  }

}

export default new dashboardPage()