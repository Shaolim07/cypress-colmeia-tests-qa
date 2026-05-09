import databasePage from '../pages/databasePage'

describe('Banco de Dados', () => {

  beforeEach(() => {
    cy.login()
    cy.acessarBancoDeDados()
  })

  it('Criar banco de dados', () => {
    const nome = `database-${Date.now()}`

    databasePage.clicarCriar()
    databasePage.preencherNome(nome)
    databasePage.salvar()

    databasePage.validarExiste(nome)
  })

  it('Excluir banco de dados', () => {
    const nome = `database-${Date.now()}`

    databasePage.clicarCriar()
    databasePage.preencherNome(nome)
    databasePage.salvar()

    databasePage.excluir()
    databasePage.validarNaoExiste(nome)
  })
   it('Arquivar banco de dados', () => {
    const nome = `database-${Date.now()}`

    databasePage.clicarCriar()
    databasePage.preencherNome(nome)
    databasePage.salvar()

    databasePage.arquivar()
    databasePage.validarNaoExiste(nome)

    cy.screenshot("erro-banco-nao-arquivado")
  })

  it('Pesquisar um banco de dados', () => {
    const nome = `database-${Date.now()}`

    databasePage.clicarCriar()
    databasePage.preencherNome(nome)
    databasePage.salvar()

    databasePage.pesquisar(nome.split('-')[1]) // pesquisa pelo número

    databasePage.validarExiste(nome)
  })

  it('Refresh não deve excluir item criado', () => {
    const nome = `database-${Date.now()}`

    databasePage.clicarCriar()
    databasePage.preencherNome(nome)
    databasePage.salvar()

    databasePage.refresh()

    databasePage.validarExiste(nome)

    cy.screenshot("erro-database-deletado-apos-refresh")
  })

})