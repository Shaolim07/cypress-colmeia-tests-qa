class databasePage {

  clicarCriar() {
    cy.contains('Criar').click()
  }

  preencherNome(nome) {
    cy.get('.flex-col > div.w-full > .w-full').clear().type(nome)
  }

  salvar() {
    cy.contains('Salvar').click()
  }

  excluir() {
    cy.get('.text-red-100').click()
  }

  arquivar() {
    cy.get('.text-blue-100').click()
  }

  pesquisar(valor) {
    cy.get('.py-1 > :nth-child(1) > .gap-2 > .w-full')
      .clear()
      .type(valor)
  }

  refresh() {
    cy.get(':nth-child(2) > [variant="icon"]').click()
  }

  validarExiste(nome) {
    cy.contains(nome).should('be.visible')
  }

  validarNaoExiste(nome) {
    cy.contains(nome).should('not.exist')
  }
}

export default new databasePage()