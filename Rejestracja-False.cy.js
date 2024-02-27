/// <reference types="cypress" />

describe("E2E - Rejestracja bez danych", () => {
    it("Otwarcie formularza rejesteracji", () => {
        cy.visit(Cypress.env("url"));
        cy.wait(500);
        cy.get(".JS-rodo-button-text").click({force: true});
        cy.on("window:confirm", () => true);
        cy.get(".vitalia-button_2").click ({force: true});
        cy.contains('Załóż konto').click ({force: true});
        cy.get("#registration-form").find(".form__submit").click();
        cy.get("#registration-form").find(".error-message").then(alerty => {
            expect(alerty).to.have.length(7);
        })
        
    })
})