
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Calling Custom Command
    cy.Login('Admin','admin123')
    cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
    cy.Logout()
    // cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    // cy.xpath("//a[normalize-space()='Logout']").click()
    // cy.url().should('include','web/index.php/auth/login')
          
  })
  })