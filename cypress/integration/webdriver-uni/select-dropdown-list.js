/// <reference types = "cypress" />


describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select drop down lists", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript');

        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit');
        cy.get('#dropdowm-menu-2').select('Maven').contains('Maven');
    });
});