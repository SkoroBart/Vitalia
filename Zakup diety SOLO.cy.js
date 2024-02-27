/// <reference types="cypress" />


describe("E2E - Zakup diety NSD solo", () => {
    it("Proces zakupu", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Pobranie i kliknięcie w zakładkę Cennik
        cy.get('.menuLevel_1 > :nth-child(4) > .menu-item')
        .should("contain", "Cennik")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });

        cy.get('.menuLevel_1 > :nth-child(4) > .menu-item')
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


        //Kliknięcie w "Kup teraz"
        cy.get("#p-id-7946-52")
        .should("contain", "Kup wybrany plan")
        .click({force: true});



        //Pobieranie elementów koszyka

        //1.Może Cię także zainteresować
        cy.get('[class="your-order__choose-additions payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Może Cię także zainteresować");

        cy.get('[class="your-order__choose-additions payments__section"]')
        .find('[class="addition addition-ebook JS-addition"]')
        .find(".payments__custom-input");

        //2.Akceptujemy
        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Akceptujemy");

        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find("ul")
        .then(ul => {
            expect(ul).to.have.length(2)
        });

        //3.Najczęściej zadawane pytania
        cy.get('[class="your-order__faq payments__section"]')
        .find(".JS-toggle-faq-a")
        .then(p => {
            expect(p).to.have.length(3)
        });

        //4.Przycisk "Cofnij"
        cy.get('.payments__go-back > a')
        .should("contain", "Cofnij");

        //5.Kod rabatowy
        cy.get('[class="title JS-toggle-pc-input-wrap "]');

        cy.wait(500)

        //6.Podsumowanie
        cy.get("#shoppingBasket")
        .should("contain", "Podsumowanie")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .click({force: true});

        //Logowanie na konto
        cy.get('[class="payments__custom-button payments__custom-button--bordered JS-toggle-login-button"]')
        .should("contain", "Zaloguj się")
        .click({force: true});

        cy.get("#login").type("testowe_vitalia_nsd");
        cy.get("#password").type("Takie#Latwe4");
        
        cy.get(".JS-form-submit-button")
        .first()
        .should("contain", "Zaloguj się")
        .click({force: true});

        //Pobieranie elementów zakładki "Płatność"

        //Nawigacja
        cy.get(".payments__navigation")
        .find("li")
        .then(li => {
            expect(li).have.to.length(2)
        });

        //Forma płatności
        cy.get(".payments__section-title")
        .should("contain", "Wybierz formę płatności");

        cy.get('[class="payment-method__choose-method payments__section"]')
        .find(".JS-main-form ")
        .find('[class="payment-methods-wrap JS-payment-method"]')
        .find(".payment-item")
        .then(item => {
            expect(item).have.to.length(34)
        });

        //PayPo
        cy.contains('[class="pay-po-title"]', 'Nie masz pieniędzy w tym momencie? Kup teraz, zapłać później z PayPo');

        //Checkbox
        cy.get(".payments__custom-input")
        .find("input")
        .then(checkbox => {
            cy.get(checkbox).check({force: true})
        });

        //Podsumowanie
        cy.get("#shoppingBasket")
        .find(".head")
        .should("contain", "Podsumowanie");

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find('p[class="name"]');

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find(".flex-wrap")
        .find("p")
        .then(p => {
            expect(p).have.to.length(2)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".total")
        .find("p")
        .then(p => {
            expect(p).have.to.length(4)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".security-info")
        .find('i[class="fas fa-lock"]')
        
        cy.get("#shoppingBasket")
        .find(".foot")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .should("contain", "Zapłać")
        .click();


        //Walidacja
        cy.get('[class="JS-error-mf error"]')
        .should("contain", "Proszę wybrać jedną z metod płatności");


        //Wybór metody płatności
        cy.get(".payment-item")
        .eq(2)
        .trigger("focus")
        cy.get('img[src="https://static.przelewy24.pl/payment-form-logo/svg/222"]')
        .click();

        //Kliknięcie w "Zapłać"
        cy.get('[class="payments__custom-button"]')
        .first()
        .should("contain", "Zapłać")
        .click({force: true});

    })
})