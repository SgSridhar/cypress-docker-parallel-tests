describe("B", () => {
    it("Foo should exist", () => {
        cy.visit("http://localhost:3000")
        cy.get("div").contains("Foo").should("exist")
    })
    it("Baz should exist", () => {
        cy.visit("http://localhost:3000")
        cy.get("div").contains("Baz").should("exist")
    })
})