/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.fixed_wrapper > div > a").click();
    })

    it("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("[class='prdocutname']").contains("Skinsheen Bronzer Stick").click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text());
        });
        console.log("Testing the order");
    })

    it("Click on the first item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
    })
})