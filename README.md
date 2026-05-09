# 🚀 Cypress Automation Project – Colmeia QA

Projeto de automação E2E utilizando **Cypress** com aplicação do padrão **Page Object Model (POM)**.

---

## 📌 Sobre o projeto

Este projeto automatiza os principais fluxos do sistema Colmeia QA:

- ✅ Login
- ✅ Dashboard
- ✅ Navegação de menus
- ✅ CRUD de Banco de Dados
- ✅ Validações de erro
- ✅ Evidência de bugs (screenshots)

---

## 🛠 Tecnologias utilizadas

- JavaScript
- Cypress
- Page Object Model (POM)
- Git
- GitHub

---

## 📂 Estrutura do projeto

```
cypress/
 ├── e2e/
 │    ├── login.cy.js
 │    ├── dashboard.cy.js
 │    ├── bancoDeDados.cy.js
 │
 ├── pages/
 │    ├── LoginPage.js
 │    ├── DashboardPage.js
 │    ├── BancoDeDadosPage.js
 │
 └── support/
```

---

## ▶️ Como executar o projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Abrir Cypress

```bash
npx cypress open
```

ou rodar em modo headless:

```bash
npx cypress run
```

---

## 🧪 Cenários automatizados

### 🔐 Login
- Login com sucesso
- Validação de mensagem de erro
- Validação de modal inesperada

### 📊 Dashboard
- Acessar menu Campanha
- Acessar Banco de Dados
- Acessar Colmeia Forms
- Evidenciar bug no botão "Candidato"

### 🗂 Banco de Dados
- Criar banco
- Excluir banco
- Arquivar banco
- Pesquisar item
- Validar persistência após refresh

---

## 🐞 Evidência de Bugs

O projeto contém testes que:
- Validam comportamento incorreto de botões
- Geram screenshots para documentação
- Evidenciam inconsistências de UI

---

## 📸 Screenshots automáticas

Os prints ficam em:

```
cypress/screenshots/
```

---

## 📈 Próximas melhorias

- [ ] Implementar fixtures
- [ ] Adicionar GitHub Actions (CI)
- [ ] Adicionar relatórios (Mochawesome)
- [ ] Implementar testes com dados dinâmicos

---

## 👨‍💻 Autor

Brenno de Sousa Leite 
