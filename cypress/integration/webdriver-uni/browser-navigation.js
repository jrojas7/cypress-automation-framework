/// <reference types = "cypress" />


describe("Validate webdriveruni homepage links", () => {
    it("Cofirm links redirect to the correct pages", () => {
        cy.visit('https://webdriveruniversity.com/');
        // Remove target in order to open the new page in the original box
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.reload();
        cy.url().should('include', 'https://webdriveruniversity.com/');
         // cy.reload(true) // reload without using cache

         cy.go('forward');
         cy.url().should('include', 'contactus');

         cy.go('back');
         // Remove target in order to open the new page in the original box
         cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
         cy.url().should('include', 'Login-Portal');
         cy.go('back');
         cy.url().should('include', 'webdriveruniversity');
        
         // Remove target in order to open the new page in the original box
         cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
         cy.url().should('include', 'To-Do-List');
         cy.go('back');
         cy.url().should('include', 'webdriveruniversity');
    });
});