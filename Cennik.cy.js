/// <reference types="cypress" />


describe("E2E - Kliknięcie w zakładkę Cennik", () => {
    it("Otwarcie Cennika", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(500);
        
        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Kliknięcie w Cennik
        cy.get(".menuLevel_1 > :nth-child(4) > .menu-item > span")
        .should("contain", "Cennik")
        .click();

        //Elementy cennika
            //Header
            cy.get(".header > .title")
            .should("contain", "Wybierz długość planu");

            //Podpis - info
            cy.get(".subtitle")
            .should("contain", "Rodzaj diety wybierzesz po dokonaniu płatności.");

            //Switch single/para
            cy.get(".single-couple-switch");

            cy.get('.single-couple-switch > [data-for="single"]')
            .should("contain", "Dla jednej osoby");

            cy.get('.single-couple-switch > [data-for="couple"]')
            .should("contain", "Dla pary");

            //Plany diet w zakładce "Dla jednej osoby"
            cy.get(".the-plans-container")
            .find(".plan",".JS-plan")
            .then(plany => {
                expect(plany).to.have.length(8)
            });

            //Przyciski "Kup wybrany plan" w zakładce "Dla jednej osoby"
            cy.get(".JS-cta-button")
            .should("contain", "Kup wybrany plan")
            .then(button => {
                expect(button).to.have.length(8)
            });

            ////Switch - kliknięcie w zakłądkę "Dla pary"
            cy.get('.single-couple-switch > [data-for="couple"]')
            .click();

            cy.wait(500)

            //Plany diet w zakładce "Dla pary"
            cy.get(".the-plans-container")
            .find(".plan",".JS-plan")
            .then(plany => {
                expect(plany).to.have.length(8)
            });

            //Przyciski "Kup wybrany plan" w zakładce "Dla pary"
            cy.get(".JS-cta-button")
            .should("contain", "Kup wybrany plan")
            .then(button => {
                expect(button).to.have.length(8)
            });


        //PayPo
        cy.get(".paypo")
        .find("p")
        .find("a")
        .should("have.attr", "href")
        .then(href => {
            expect(href).to.have.contain("https://start.paypo.pl/psp")
            });


        //Wideokonsultacje
            //Tytuł
            cy.get(".video-consulting")
            .find(".video-consulting-inner > .title")
            //.should("contain", "Wideo konsultacje z dietetykiem Vitalii")

            //Tekst
            cy.get(".handler")
            .find("p")
            .then(p => {
                expect(p).to.have.length(2)
            })
            .eq(0)
            //.should("contain", "Jesteś na diecie, chcesz zredukować masę ciała i potrzebujesz porady oraz merytorycznego wsparcia w procesie odchudzania? Umów konsultację online z naszym dietetykiem.");

            cy.get(".handler")
            .find("p")
            .eq(1)
            //.should("contain", "Nasi eksperci pomogą Ci wybrać odpowiednią dietę dla Ciebie, wyliczą jej kaloryczność oraz dadzą cenne wskazówki, jak utrzymać motywację.");

            //Pobranie przycisku "Umów konsultację"
            cy.get(".call-to-action > .vitalia-main-button")
            .should("contain", "Umów konsultację za jedyne 140 zł")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Nota
            cy.get(".note")
            //.should("contain", "*Dla osób posiadających abonament Vitalii kontakt z dietetykiem oraz psychologiem odchudzania jest bez limitu i za darmo. Odpowiedź na czacie i przez e-mail również w weekendy.");

    })
})