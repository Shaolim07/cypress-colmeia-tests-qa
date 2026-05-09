import loginPage from '../pages/loginPage'

describe('Login', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('Realizar Login e direcionar para o dashboard', () => {
    loginPage.fillEmail('qa@test.com')
    loginPage.fillPassword('123456')
    loginPage.submit()

    cy.url().should('include', '/dashboard')
    cy.screenshot('erro-modal-login-incorreto')
  })

  it('Realizar Login com credenciais inválidas', () => {
    loginPage.fillEmail('qa@test.com')
    loginPage.fillPassword('123457')
    loginPage.submit()

    loginPage.validateError('Usuário ou senha inválidos')
    cy.url().should('include', '/')
  })

  it('Realizar Login mesmo com a modal incorreta', () => {
    loginPage.fillEmail('qa@test.com')
    loginPage.fillPassword('123456')
    loginPage.submit()

    loginPage.closeModal()
    cy.url().should('include', '/dashboard')
  })

})