var id = 0;
describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token token", token);
      });
    });
  
    it("Create an Address", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token", token);

        cy.request({
          method: 'POST',
          url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
          auth: {
              bearer: token   
          },
          body :
          {
              "address": {
                firstname: "Surraj",
                lastname: "Kumar",
                address1: "BTM",
                address2: "2nd Floor",
                city: "Bethesda",
                phone: "3014445002",
                zipcode: "20814",
                state_name: "MD",
                country_iso: "US"
              }
      }}).then((response)=>{
      expect(response.status).to.equal(200);
       // response.body is automatically serialized into JSON
       cy.log(response.body);
       expect(response.body.data).to.have.property('type','address')
       expect(response.body.data.attributes).to.have.property('address1','BTM')
       expect(response.body.data.attributes).to.have.property('firstname','Surraj')
       id = response.body.data.id;
  });
});
});
it("Update an Address", () => {
    cy.getLocalStorage("access_token").should("exist");
    cy.getLocalStorage("access_token").then(token => {
      console.log("access_token", token);
      cy.request({
        method: 'PUT',
        url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses/'+id,
        auth: {
            bearer: token
        },
        body :
        {
            "address": {
              firstname: "Surraj",
              lastname: "P",
              address1: "BTM",
              address2: "2nd Floor",
              city: "Bethesda",
              phone: "3014445002",
              zipcode: "20814",
              state_name: "MD",
              country_iso: "USA"
            }
    }}).then((response)=>{
    expect(response.status).to.equal(200);
     // response.body is automatically serialized into JSON
     cy.log(response.body);
     expect(response.body.data).to.have.property('type','address')
     expect(response.body.data.attributes).to.have.property('address1','BTM')
     expect(response.body.data.attributes).to.have.property('firstname','Surraj')

});
});
});

it("deleting", () => {
    cy.getLocalStorage("access_token").should("exist");
    cy.getLocalStorage("access_token").then(token => {
      console.log("access_token", token);

      cy.request({
        method: 'DELETE',
        url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses/'+id,
        auth: {
            bearer: token
        }
    }).then((response)=>{
    expect(response.status).to.equal(204);
     // response.body is automatically serialized into JSON
     cy.log(response.body);
    

});
});
});
});