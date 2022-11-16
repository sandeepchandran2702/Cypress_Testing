/// <reference types="cypress" />
describe('Fetching Data from Fixture file->Login.json', function() {
    
    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
        cy.fixture('Web_Order').then(function (data) {
            this.data = data;
        })
        cy.fixture('Create_Order_Web_Order').then(function(order){
            this.order=order
        })
    })
    it('Visits the WebOrder Page and Perform Login Action', function() {
        //Visit the OrangeHRM Website
        //Login Starts------------ 
        for(var i = 0; i < this.data.Login.length; i++) {
            cy.visit(this.data.URL);
  
            // Enter UserName and Password
            cy.log("USER :",i+1)
            if(this.data.Login[i].uname!==""){
                cy.get('#ctl00_MainContent_username').type(this.data.Login[i].uname)}
            if(this.data.Login[i].password!==""){
                cy.get('#ctl00_MainContent_password').type(this.data.Login[i].password)}
            cy.get('#ctl00_MainContent_login_button').click()
            if(this.data.Login[i].expected_result==="Order"){
                cy.get("a[href='Process.aspx']").should('have.text',this.data.Login[i].expected_result)
            }
            else{
                cy.get("#ctl00_MainContent_status").should("have.text",this.data.Login[i].expected_result)
            }
        }
         //Login ends------------ 

        cy.get("a[href='Process.aspx']").should('have.contain','Order').click()
        cy.url().should('include','/samples/TestComplete11/WebOrders/Process.aspx')

       //Order Starts-------------
       for(var i = 0; i < this.order.length; i++) {
        cy.log("Order :",i+1)
        cy.xpath("//input[@value='Reset']").click()
        if(this.order[i].Product!=="")
        cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select(this.order[i].Product)
        if(this.order[i].Quantity!=="")
        cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(this.order[i].Quantity)
        if(this.order[i].Customer!=="")
        cy.get('#ctl00_MainContent_fmwOrder_txtName').type(this.order[i].Customer)
        if(this.order[i].Street!=="")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type(this.order[i].Street)
        if(this.order[i].City!=="")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type(this.order[i].City)
        if(this.order[i].Zip!=="")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(this.order[i].Zip)
        if(this.order[i].Card!=="")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(this.order[i].Card)
        if(i !== 6){
            cy.get('#ctl00_MainContent_fmwOrder_cardList_1').click()
        }
        if(this.order[i].Expire!=="")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type(this.order[i].Expire)
        cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()

        if(this.order[i].Result===" New order has been successfully added. "){
            //cy.xpath("//strong[normalize-space()='New order has been successfully added.']").should("have.text",this.order[i].Result)
            cy.contains("New order has been successfully added.")
        }
        else if(this.order[i].Result==="  Quantity must be greater than zero. "){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Customer name' cannot be empty."){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Street' cannot be empty."){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Street' cannot be empty."){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Zip' cannot be empty."){
            cy.contains(this.order[i].Result)
        } 
        else if(this.order[i].Result==="Select a card type."){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Card Nr' cannot be empty."){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Field 'Expire date' cannot be empty"){
            cy.contains(this.order[i].Result)
        }
        else if(this.order[i].Result==="Invalid format. Only digits allowed."){
            cy.contains(this.order[i].Result)
        }
       }
       //logout verification
        cy.get('#ctl00_logout').click()
        cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
    })
})
   