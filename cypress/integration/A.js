describe("A", () => {
    it("Foo should exist", () => {
        cy.visit("http://localhost:3000")
        cy.get("div").contains("Foo").should("exist")
    })
    it("Bar should exist", () => {
        cy.visit("http://localhost:3000")
        cy.get("div").contains("Bar").should("exist")
    })
})