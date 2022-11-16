/// <reference types="cypress" />

describe('SpreeHRM Application', function() {

    it('Visits the Spree Commerce Page and Perform Login Action', function() {
   
    cy.visit("https://demo.spreecommerce.org/login");
    
   // Enter UserName and Password
    
    cy.get('#spree_user_email').type('sandeep123@gmail.com')
    cy.get('#spree_user_password').type('sandeep123')
    cy.get('#new_spree_user > .btn').click()
    //Verify Dashboard Tab
   
    cy.get('.spree-mb-large').should('have.text','My Account')
      
  })
  it('LogOut from Spree Commerce Page ', function() {
   
    cy.get("#account-button").click()
    cy.get('#link-to-account > [data-method="get"]').click()
   //cy.get("input[id='account-button']").click()
    //cy.get("input[href='/logout']").click()
    cy.get('#existing-customer > .col-lg-11 > .spree-mb-large').should('have.text','Log in to continue')
       
   })
  })