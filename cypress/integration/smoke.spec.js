describe("Smoke Test",()=>{
    it('Make sure the welcome message comes up',()=>{
        cy.visit('http://localhost:1234');
        cy.contains('Hello, World!');
    })
})