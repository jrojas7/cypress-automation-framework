/// <reference types = "cypress" />


describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});

    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});

        // we locate the box to be dragged
        cy.get('#draggable').trigger('mousedown', {which: 1});
        // we locate the box destination, move the box and leave the mouse
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
    });

    it("I should be able to perform a doble mouse click", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});

        // double click the box
        cy.get('#double-click').dblclick();

    });

    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});

        // in order to hold down the left mouse click button
        // {which: 1} means in the center
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')       
        })
    });
});