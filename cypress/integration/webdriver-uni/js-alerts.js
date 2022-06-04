/// <reference types = "cypress" />


describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        // The following is to open the popup-alerts page in the same window
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button1').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })
    });

    it("Validate js confirmation alert box works correctly when clicking ok", () => {
        cy.visit('https://webdriveruniversity.com/');
        // The following is to open the popup-alerts page in the same window
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            // in order to click OK
            return true;
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confirmation alert box works correctly when clicking Cancel", () => {
        cy.visit('https://webdriveruniversity.com/');
        // The following is to open the popup-alerts page in the same window
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            // in order to click Cancel
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it("Validate js confirm alert bix using a stub", () => {
        cy.visit('https://webdriveruniversity.com/');
        // The following is to open the popup-alerts page in the same window
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })
    });
});