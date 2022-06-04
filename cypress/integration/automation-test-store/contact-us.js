/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {

    before(function() {
        //cy.viewport(550, 750);
        // alias with the name of "user"
        cy.fixture("userDetails").as("user");
    })


    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit("https://automationteststore.com/");
        // cy.get(".info_links_footer > :nth-child(5) > a").click();
        //a[contains(@href, 'contact')]
        cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        });
        cy.get("@user").then((user) => {
            cy.get("[name='first_name']").type(user.first_name);
            cy.get("[id='ContactUsFrm_email']").type(user.email);
        })
        cy.get("[id='ContactUsFrm_email']").should("have.attr", "name", "email");
        cy.get("[name='enquiry']").type("This is a test");
        cy.get("[class='btn btn-primary lock-on-click']").click();
        cy.get(".mb40 > :nth-child(3)").should("have.text", "Your enquiry has been successfully sent to the store owner!");
        cy.log("Test has completed!");
    })
})