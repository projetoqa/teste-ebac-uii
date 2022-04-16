/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')

describe('Funcionalidade Pré-cadastro', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.findName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)



        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@te25$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()    
        
        cy.get('.woocommerce-message').should('contain',  'Detalhes da conta modificados com sucesso.')


        
    });

    

























});
