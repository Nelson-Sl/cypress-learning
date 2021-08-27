describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:8085') // change URL to match your dev URL
        cy.contains('Hello World Coming from 1');
        cy.contains('Hello World Coming from 2t');
    })
});