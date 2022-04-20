class EnderecoPage {
    editarEnderecoFaturamento(){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(Emppresa)
        cy.get('#select2-billing_country-container').click().type(Pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(Endereço)
        cy.get('#billing_address_2').clear().type(Número)
        cy.get('#billing_city').clear().type(Cidade)
        cy.get('#select2-billing_state-container').click().type(Estado{enter})
        cy.get('#billing_postcode').clear().type(CEP)
        cy.get('#billing_phone').clear().type(Telefone)
        cy.get('#billing_email').clear().type(E-mail)
        cy.get(':nth-child(2) > .button').click()
    
    }

    editarEnderecoEntrega(){

    }

}



export default new EnderecoPage()