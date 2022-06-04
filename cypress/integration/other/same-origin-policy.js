/// <reference types = "cypress" />

describe("Cypress web security", () => {
    it.only("Validate visiting two different domains", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://www.cypress.io/');
    });

    it("Validate visiting two different domains via user actions", () => {
        cy.visit('https://webdriveruniversity.com/');
        // we will remove the Attr target in order to see the page opened inside the original page
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
});