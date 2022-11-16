// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/*Console log will be displayed first as it is js where as cypress cannot handle 
js asynchronous so js will print first and cy.log waits for the wait to complete*/
describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
   // Search for product which start with Ca 
    
    cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')
    cy.wait(6000)

    //As a user i would like to Print message in Console about Product Added to Cart
    
    cy.log('Product name start with ca displayed -  from Cy log')
    console.log('Product name start with ca displayed - From Console Log')

  })
})