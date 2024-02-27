/// <reference types="cypress" />

describe("E2E - Rejestracja bez danych", () => {
    it("Otwarcie formularza rejesteracji", () => {
        cy.visit(Cypress.env("url"));
        cy.wait(500);
        cy.get(".JS-rodo-button-text").click({force: true});
        cy.on("window:confirm", () => true);

        cy.get(".vitalia-button_2").click ({force: true});
        cy.contains('Załóż konto').click ({force: true});
        cy.get("#email").type("przykladowy@test.pl");
        cy.get("#email_repeat").type("przykladowy@test.pl");
        cy.get("#password").type("przykladoweHaslo1");
        cy.get(".agreements").find("input").then(checkbox => {
            cy.get(checkbox).eq(1).check({force: true});
            cy.get(checkbox).eq(2).check({force: true});
        })
        cy.contains('[type="submit"]', ' Zarejestruj się ');
        
    })
})