/// <reference types = "cypress" />


describe("Test file upload via webdriveruni", () => {
    it("Upload a file", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});

        cy.fixture('test_image.png', 'base64').then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: 'test_image.png',
                    mimeType: 'image/png'
                },
                {
                    uploadType: 'Input'
                }
            )
        })
        cy.get('#submit-button').click();
    });

    it("Upload NO file", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});

        cy.get('#submit-button').click();
    });
});

