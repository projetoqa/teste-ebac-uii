/// <reference types="cypress" />

context('Fucionalidade Login', () =>{
    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    })
    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () => {
        
        cy.get('#username').type('aluno_ebactrdr@teste.com')
        cy.get('#password').type('teste@teste1457.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')

    })

    it.only('Deve exibir uma mensagem de erro ao inserir senha inválidos', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste1457.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?' )

        

    })
})