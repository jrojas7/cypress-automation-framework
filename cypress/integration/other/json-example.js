/// <reference types = "cypress" />


describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [{"key": "Clark"}, {"key2": "Kent"}, {"key3": "30"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]);  //Tim
        cy.log(exampleObject["key2"]);  //jones
        cy.log(exampleObject.key);  //Tim

        cy.log(exampleArrayOfValues[0]);  //Sophie
        cy.log(exampleArrayOfValues[1]);  //Rose
        cy.log(exampleArrayOfValues[2]);  //Howard

        cy.log(users.Students[0].firstName);  //Jim
        cy.log(users.Students[1].lastName);  //Parker

        cy.log(exampleArrayOfObjects[0].key);  // Clark
        cy.log(exampleArrayOfObjects[1].key2); // Kent
        cy.log(exampleArrayOfObjects[2].key3);  // 30
    })
})