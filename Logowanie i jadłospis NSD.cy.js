/// <reference types="cypress" />

describe("E2E - Jadłospis NSD", () => {
  it("Logowanie, Moja Vitalia, Jadłospis. Nawodnienie i Makro", () => {
      cy.visit(Cypress.env("url"));

      cy.wait(500);

      //Akceptowanie ciasteczek
      cy.get(".JS-rodo-button-text")
      .click({force: true});


      cy.on("window:confirm", () => true);


      //LOGOWANIE
      //Kliknięcie w przycisk "Zaloguj"
      cy.get(".vitalia-button_2")
      .click ({force: true});

      //Wpisywanie loginu i hasła
      cy.get("#login").type("testowe_vitalia_nsd");
      cy.get("#password").type("Takie#Latwe4");

      //Logowanie
      cy.get(".JS-form-submit-button")
      .click ();

      //Pominięcie tygodniowej kontroli postępów
       //cy.get(".kontrolaPostepow__buttons")
       //.find('[class="btn btn-primary btn-lg"]');

       //cy.get(".kontrolaPostepow__buttons")
       //.find('[class="btn btn-secondary"]')
       //.click();

      //Onbording, Zamykanie pop-upu
       //cy.get('[class="onboarding-button onboarding-close"]')
       //.click();
  


    //MOJA VITALIA PO ZALOGOWANIU
    //Główny kontener
    cy.get(".row");

    //Moja Vitalia
    cy.get('[class="col-24 title-column"]')
    .find("h1")
    .should("contain", "Moja Vitalia");

    //Moje konto
    cy.get("#moje_konto")
    .should("contain", "Moje Konto");

    cy.get('.alert > .user-avatar > a')
    .should("have.attr", "href")
    .then(link => {
      cy.log(link)
    });

    cy.get('.alert > .user-avatar > a > p')
    .should("contain", "testowe_vitalia_nsd");

    cy.get('.alert > .links')
    .find("a")
    .then(a => {
      expect(a).to.have.length(3)
    });

    //Kolumna Auto - Menu
    cy.get("#scrollspy_menu")
    .find("a")
    .then(a => {
      expect(a).to.have.length(7)
    });

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(0)
    .should("contain", "Moje Konto");

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(1)
    .should("contain", "Moja Tablica")
    .click();

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(2)
    .should("contain", "Moje paski postępu")
    .click();

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(3)
    .should("contain", "Odwiedziny pamiętnika")
    .click();

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(4)
    .should("contain", "Moja dieta")
    .click();

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(5)
    .should("contain", "Uzupełnienie konta")
    .click();

    cy.get("#scrollspy_menu")
    .find("a")
    .eq(6)
    .should("contain", "Klub Fitness Online")
    .click();

  
    //Moja Tablica
    cy.get("#moja_tablica")
    .should("contain", "Moja Tablica");

    //Moje Paski postępu
    cy.get("#moje_paski_postepu")
    .should("contain", "Moje paski postępu");

    //Odwiedziny pamiętnika
    cy.get("#odwiedziny_pamietnika");
    cy.get('h2 > div > a')
    .should("have.attr", "href")
    .then(href => {
      expect(href).to.have.contain("/mid/96/fid/1206/diety/odchudzanie")
    });

    //Uzupełnienie konta
    cy.get("#uzupelnienie_konta")
    .should("contain", "Uzupełnienie konta");

    //Klub Fitness Online
    cy.get("#klub_fitness_online")
    .should("contain", "Klub Fitness Online - proponowane treningi");


    //JADŁOSPIS
    //Przejście do jadłospisu
    cy.get('.mainNavigation__goToDietPlanButton > .flex-icon > .h-far')
    .click();

    //Zamknięcie okienka OnBording
    cy.get(".onboarding-close > .far")
    .click();

    //Submenu
    cy.get('[class="breadcrumbs-submenu clearfix JS-breadcrumbsSubmenu submenu-for-diet"]')
    .find("li")
    .should("have.length", "4");

    cy.get('[class="breadcrumbs-submenu clearfix JS-breadcrumbsSubmenu submenu-for-diet"]')
    .find("li")
    .eq(0)
    .should("have.class", "li dayView el-0")
    .and("contain", "Jadłospis");

    cy.get('[class="breadcrumbs-submenu clearfix JS-breadcrumbsSubmenu submenu-for-diet"]')
    .find("li")
    .eq(1)
    .should("have.class", "li dayView el-1")
    .and("contain", "Lista zakupów");
    
    cy.get('[class="breadcrumbs-submenu clearfix JS-breadcrumbsSubmenu submenu-for-diet"]')
    .find("li")
    .eq(2)
    .should("have.class", "li dayView el-2")
    .and("contain", "Postępy");

    cy.get('[class="breadcrumbs-submenu clearfix JS-breadcrumbsSubmenu submenu-for-diet"]')
    .find("li")
    .eq(3)
    .should("have.class", "li dayView el-3")
    .and("contain", "Ustawienia");


    //Postępy
    cy.get(".progress-bar-container")
    .find("h3")
    .should("contain", "Postępy");

    //Kalorie
    cy.get('[class="date-menu-box"]')
    .find("h3");

    //Kalendarz
    cy.get(".calendar")
    .find(".calendar-container")
    .find('[class="calendar-navigation-week left"]')
    .click();

    cy.get(".calendar")
    .find(".calendar-container")
    .find('[class="calendar-navigation-week right"]')
    .click();


    //Pobieranie kontenera menu
    cy.get(".diet-menu-day__menu")
    .find(".menu-container");

    //Top bar pierwszego posiłku, kalorie i kliknięcie w "Dodaj"
    cy.get(".diet-menu-day__menu")
    .find(".top-bar")
    .eq(0)
    .find(".top-bar__actions")
    .find(".top-bar__calorie");

    cy.get(".diet-menu-day__menu")
    .find(".top-bar")
    .find(".top-bar__actions")
    .eq(0)
    .find(".button-base-plus")
    .find('[class="fas fa-plus"]')
    .click();

    //cy.wait(1000);

    //Zamykanie okienka informacyjnego class="tm-modal"
    cy.get(".tm-modal")
    .find('[class="tm-button standard-button"]', 'Zamknij')
    .click();

    //cy.wait(2000);

    //Zamykanie okienka reklamowego
    //cy.get('[class="root page-1 page-last"]')
    //.find(".container")
    //.find(".close")
    //.click({force: true});


    //Pobieranie modułu dodawania produktu/potrawy z elementami
    cy.get(".meal-exchange-scroll-content")
    .find(".meal-exchange-header")
    .find(".diet-menu-day-app__checkbox")
    .find(".label-text")
    .should("contain", "Dodaj do śniadań w całym tygodniu");

    cy.get("#exchange_in_whole_week")
    .then(checkbox => {
      cy.get(checkbox)
      .check({force: true})
    });

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .should("have.length", "5");

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(0)
    .should("contain", "Szukaj");

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(1)
    .should("contain", "Ulubione")
    .click();

    cy.wait(500);

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(2)
    .should("contain", "Ostatnio używane")
    .click();

    cy.wait(500);

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(3)
    .should("contain", "Własne")
    .click();

    cy.wait(500);

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(4)
    .should("contain", "Zero waste")
    .click();

    cy.wait(500);

    cy.get(".meal-exchange-menu")
    .find(".meal-exchange-menu-container")
    .find("button")
    .eq(0)
    .should("contain", "Szukaj")
    .click();


    cy.get("#search_input_text");

    cy.get(".input-container")
    .find('[class="fas fa-search"]');

    cy.get('[class="meal-exchange-search-box search-input"]')
    .find(".placeholder")
    .should("contain", "Wpisz nazwę potrawy lub składniki po przecinku");

    cy.get(".meal-exchange-search__navigation");

    cy.get(".meal-exchange-heading")
    .find(".diet-menu-day-app__button-go-back")
    .click();


    //Sprawdzanie elementów modułu karty posiłku
    cy.get(".menu-container")
    .find(".meal")
    .eq(1)
    .find(".item-container")
    .find(".item")
    .find(".meal-header-container")
    .find(".meal-image")
    .find(".dish-preparation-icon-type");


    //Pobieranie tytułu posiłku z przyciskiem 
    cy.get(".menu-container")
    .find(".meal")
    .eq(1)
    .find(".meal-title")
    .find(".meal-title__button");

    //Ranking potrawy
    cy.get(".menu-container")
    .find(".meal")
    .eq(1)
    .find(".meal-title")
    .find(".meal-rating");

    //Pobieranie przycisków akcji na posiłku
    cy.get(".menu-container")
    .find(".meal")
    .eq(1)
    .find(".meal-actions-container")
    .find("button")
    .then(button => {
     expect(button).to.have.length(4)
     });

     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-actions-container")
     .find("button")
     .eq(0)
     .should("contain", "Wymień");

     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-actions-container")
     .find("button")
     .eq(1)
     .should("contain", "Lubię");

     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-actions-container")
     .find("button")
     .eq(2)
     .should("contain", "Nie lubię");

     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-actions-container")
     .find("button")
     .eq(3)
     .should("contain", "Usuń");
     
     //Pobieranie sekcji składników z przyciskami
     cy.get(".meal-servings")
     .eq(1)
     .find(".meal-serving-box")
     .then(box => {
         expect(box).to.have.length(2)
    })

     .find("p")
     .then(p => {
         expect(p).to.have.length(5)
    });

    cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-ingredients")
     .find(".meal-editing-portion-scale")
     .find(".pencil-button");

     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-ingredients")
     .find('a[class="white standard-button edit-button"]')
     .should("contain", "Edytuj składniki");

     //Przepis
     cy.get(".menu-container")
     .find(".meal")
     .eq(1)
     .find(".meal-preparation-steps");


 //Pobieranie modułu nawodnienia
 cy.get(".diet-menu-day__water-needed")
 .find(".water-needed-container")
 .find(".water-condition")
 .should("contain", "Nawodnienie");

 
 cy.get(".diet-menu-day__water-needed")
 .find(".water-needed-container")
 .find(".water-condition-box")
 .find("button")
 .then(button => {
     expect(button).to.have.length(2)
     });


 //Pobieranie wykresu makroskładników
 cy.get(".nutrients-pie-chart");

 //Rozwijanie szczegółów makroskładników
 cy.get(".nutrients-more-details")
 .click();

 //Mój dietetyk + przycisk
 cy.get(".diet-menu-day__dietitian-actions")
 .find(".dietitian-button")
 .should("contain", "Wyślij wiadomość");

 //Pobieranie submenu z przyciskami
 cy.get(".submenu-actions-container")
 .find('[class="standard-button submenu-actions-link"]')
 .then(button => {
     expect(button).to.have.length(3)
     });
 
 cy.get(".submenu-actions-container")
 .find('[class="standard-button submenu-actions-link"]')
 .eq(0)
 .should("contain", "Jadłospis w PDF");

 cy.get(".submenu-actions-container")
 .find('[class="standard-button submenu-actions-link"]')
 .eq(1)
 .should("contain", "Lista ulubionych potraw");

 cy.get(".submenu-actions-container")
 .find('[class="standard-button submenu-actions-link"]')
 .eq(2)
 .should("contain", "Widok całego tygodnia");

    
  })
});