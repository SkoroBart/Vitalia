/// <reference types="cypress" />

describe("E2E - Strona glowna Vitalia", () => {
    it("Elementy na stronie glownej", () => {
        cy.visit(Cypress.env("url"));
        //cy.realType("Wpisywanie loginu" + Cypress.env('Nazwa użytkownika'))
        //cy.realType("Wpisywanie hasła" + Cypress.env('Hasło'))
        cy.wait(500);
        cy.get(".JS-rodo-button-text").click({force: true});
        cy.wait(500);
        cy.get(".JS-toggleSearchOverlayLink").click({force: true});
        cy.wait(500);
        cy.get('[type="text"][name="search"]').type("dieta");
        cy.wait(500);
        cy.get('[type="submit"]').click ({force: true});
    });
});