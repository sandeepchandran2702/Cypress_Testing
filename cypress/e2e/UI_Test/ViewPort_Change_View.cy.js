// type definitions for Cypress object "cy"
/// <reference types="cypress" />
it("Mobile View", () => {

    cy.visit("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo");
    cy.viewport('samsung-note9')//cy.viewport(600,850)
    cy.xpath("//p[normalize-space()='Input Forms']").click()
    cy.xpath("//a[normalize-space()='Input Form Submit']").click()
   // cy.injectAxe()
   // cy.checkA11y()
  })