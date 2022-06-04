/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
   it("Navigating to specific product pages", () => {

    cy.visit("https://automationteststore.com/");
        // Recommended aproach
    cy.get("a[href*= 'product/category&path=']").contains("Makeup").click();
    cy.get("a[href*= 'product/category&path=']").contains("Skincare").click();
   });

   it("Navigating to specific product pages using another way", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*= 'product/category&path=']").contains("Makeup").click();

    cy.get("h1 .maintext").then(($headerText) => {
        const headerText = $headerText.text();
        cy.log("Found header text: " + headerText)
        expect(headerText).is.eq("Makeup");
    })
   });

   it.only("Validate properties of the Contact Us page", () => {
       cy.visit("https://automationteststore.com/index.php?rt=content/contact");

       // Use Cypress commands and chaining
       cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

       // JQuery approach
       cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
           const firstNameText = text.find('#field_11').text()
           expect(firstNameText).to.contain('First name')

           // Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
            })
       })
   })
})
