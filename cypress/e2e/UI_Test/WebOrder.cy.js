Cypress.config('pageLoadTimeout',80000)

describe('Web Order Page Testing', () => {
    it('Login to Web Order', () => {
      cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')

        //login
        cy.get('#ctl00_MainContent_username').type("Tester")
        cy.get('#ctl00_MainContent_password').type("test")
        cy.get('#ctl00_MainContent_login_button').click()

        //entering the detail
        cy.xpath("//a[@href='Process.aspx']").click()
        cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
        cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').clear()
        cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(10)
        cy.get(':nth-child(5) > .btn_dark').click() 
        cy.get('#ctl00_MainContent_fmwOrder_txtName').type("sandy")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type('Kamaraj Street')
        cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type('Chennai')
        cy.get('#ctl00_MainContent_fmwOrder_TextBox4').type('Tamilnadu')
        cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(601020)
        cy.get('#ctl00_MainContent_fmwOrder_cardList_0').click()
        cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type('9876543210')
        cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type('02/23')
        cy.url().should('include','samples/TestComplete11/WebOrders/Process.aspx')
        cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()

        //checks for the details
        cy.get('#ctl00_menu > :nth-child(1) > a').click()
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','sandy')
       
        //logout
        cy.get('#ctl00_logout').click()
      })  
})