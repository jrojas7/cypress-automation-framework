/// <reference types = "cypress" />


describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(function() {
        // cy.log(Cypress.env('name')); // This is just an example for Custom configuration file injection
        cy.navigateTo_webdriverUni_checkbox_page();
    });


    it("Check and validate checkbox", () => {
        cy.get("input[value='option-1']").as('option-1');
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get("input[value='option-3']").as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check and validate multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked');
    });
});