import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />



describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000);  // to override timeout in a complete test case
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();


    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            // if the above line does not work, write:
            globalThis.data = data;
        })
    })

    beforeEach(function() {
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        homepage_PO.visitHomepage();
        cy.wait(3000);
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause();
    })


    it("Should be able to submit a successful submission via Contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        // cy.get("[name='first_name']").type(data.first_name);
        // cy.get("[name='last_name']").type(data.last_name);
        // cy.get("[name='email']").type(data.email);
        // cy.get("[name='message']").type("This is my comment for the test");
        // cy.get("[value='SUBMIT']").click();
        // cy.get("h1").should("have.text", "Thank You for your Message!");
        //cy.webdriverUni_contactForm_submission(Cypress.env("first_name"), data.last_name, data.email, "This is my comment for the test", "h1", "Thank You for your Message!");
        contact_Us_PO.contactForm_submission(Cypress.env("first_name"), data.last_name, data.email, "This is my comment for the test", "h1", "Thank You for your Message!");
    })

    it("Should NOT be able to submit a successful submission via Contact us form as all fields are required", () => {
        //   cy.get("[name='first_name']").type(data.first_name);
        //   cy.get("[name='last_name']").type(data.last_name);
        //   cy.get("[name='email']").type(data.email);
        //   cy.get("[value='SUBMIT']").click();
        //   cy.get("body").should("have.text", "\n\n\n Error: all fields are required\n\n\n");
        //cy.webdriverUni_contactForm_submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", "body", "Error: Invalid email address");

        if(Cypress.isBrowser('firefox')) {

        } else {
            contact_Us_PO.contactForm_submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", "body", "Error: Invalid email address");
        }
    });
});