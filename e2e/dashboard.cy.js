import dashboardPage from '../pages/DashboardPage'

describe('Dashboard', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Abrir menu Campanha', () => {
    dashboardPage.openMenuCampanha()
    cy.url().should('include', '/dashboard/campanha')
  })

  it('Acessar Banco de Dados', () => {
    dashboardPage.openMenuCampanha()
    dashboardPage.acessarBancoDeDados()
    cy.url().should('include', '/dashboard/campanha/bancos-de-dados')
  })

  it('Acessar Colmeia Forms', () => {
    dashboardPage.openMenuCampanha()
    dashboardPage.acessarColmeiaForms()
    cy.url().should('include', '/dashboard/campanha/colmeia-forms')
  })

  it('Validar botão Candidato', () => {
    dashboardPage.openMenuCampanha()
    dashboardPage.clicarCandidato()
    dashboardPage.validarMenuCandidato()
    cy.screenshot('erro-botao-candidato')
  })

})