/// <reference types="cypress" />


describe("E2E - Strona glowna Vitalia", () => {
    it("Elementy na stronie glownej", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);
        
        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});
        
        cy.wait(500);
        
        //Elementy górnego paska:

        //1.Pobieranie głowy z logo
        cy.get(".mainNavigation__wrapper")
        .find(".mainNavigation__logo")
        .find("a")
        .invoke("attr", "href")
        .then(link => {
            cy.log(link)
        });

        //2.Pobieranie nawigacji dla niezalogowanych
        cy.get(".mainNavigation__forNotLoggedUser")
        .find("a")
        .then(a => {
            expect(a).to.have.length(2)
        });

        //3.Przycisk "Zaloguj"
        cy.get(".vitalia-button_2")
        .should("contain", "Zaloguj")
        .and('have.attr', 'href')
        .then(link => {
            cy.log(link)
        });

        //4.Przycisk "Kup dietę"
        cy.get(".vitalia-button_3")
        .should("contain", "Kup dietę")
        .and('have.attr', 'href')
        .then(link => {
            cy.log(link)
        });

        //5.Pobieranie górnego menu
        cy.get("#vitaliaMainMenu")
        .should("have.class", "mainNavigation__mainMenu JS-vitaliaMainMenu");

        //6.Pobranie zakładek górnego menu
            //Zakładka "Diety"
            cy.get(".menuLevel_1")
            .contains('[title="Diety"]', 'Diety')
            .should('have.attr', 'href')
            .then(link => {
                cy.log(link)
            });
        
            //Elementy menu zakładki "Diety"
            cy.get(':nth-child(1) > [data-for-level="1"] > span')
            .should("contain", "Diety")
            .realHover()

            cy.get(".menuLevel_2")
            .should("be.visible")
            .eq(0)
            .find("li")
            .then(li => {
                cy.wrap(li)
                .find("li")
                .each(li => {
                    cy.wrap(li)
                    .invoke("text")
                    .then(tekst => {
                        cy.log(tekst)
                    })
                })
            })

            cy.get(':nth-child(1) > [data-for-level="1"]')
            .trigger("mouseout")


            //Elementy menu zakładki "Diety specjalistyczne
            cy.get('.menuLevel_1 > :nth-child(2) > .toggle-submenu')
            .should("contain", "Diety specjalistyczne")
            .realHover()

            cy.get(".menuLevel_2")
            .should("be.visible")
            .eq(1)
            .find("li")
            .then(li => {
                cy.wrap(li)
                .each(li => {
                    cy.wrap(li)
                    .invoke("text")
                    .then(tekst => {
                        cy.log(tekst)
                    })
                })
            })

            cy.get('.menuLevel_1 > :nth-child(2) > .toggle-submenu')
            .trigger("mouseout")
            
            cy.wait(1000);

            //Zakładka "Metamorfozy"
            cy.get('.menuLevel_1 > :nth-child(3) > .menu-item')
            .should("contain", "Metamorfozy")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Zakładka Cennik
            cy.get('.menuLevel_1 > :nth-child(4) > .menu-item')
            .should("contain", "Cennik")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            
                //cy.wait(1000);
                
                //Zamykanie okienka reklamowego
                //cy.get('[class="root page-1 page-last"]')
                //.find(".container")
                //.find(".close")
                //.click({force: true});


            //Elementy menu zakładki "Społeczność"
            cy.get(':nth-child(5) > [data-for-level="1"]')
            .should("contain", "Społeczność")
            .realHover()

            cy.get(".menuLevel_2")
            .should("be.visible")
            .eq(2)
            .find("li")
            .then(li => {
                cy.wrap(li)
                .each(li => {
                    cy.wrap(li)
                    .invoke("text")
                    .then(tekst => {
                        cy.log(tekst)
                    })
                })
            })

            cy.get(':nth-child(5) > [data-for-level="1"]')
            .trigger("mouseout")

            cy.wait(1000);

            //Elementy zakładki "Kalkulatory"
            cy.get(':nth-child(6) > .toggle-submenu > span')
            .should("contain", "Kalkulatory")
            .realHover()

            cy.get(".menuLevel_2")
            .should("be.visible")
            .eq(3)
            .find("li")
            .then(li => {
                cy.wrap(li)
                .each(li => {
                    cy.wrap(li)
                    .invoke("text")
                    .then(tekst => {
                        cy.log(tekst)
                    })
                })
            })

            cy.get(':nth-child(6) > .toggle-submenu > span')
            .trigger("mouseout")

            cy.wait(1000);

    //Pobieranie głównego kontenera z elementami
    cy.get(".home-page__main-container")
    .find("section")
    .then(section => {
        expect(section).to.have.length(11)  
        });


        //Sekcja S-1
        cy.get(".s-1")
        .find(".home-page__container")
        .find('[class="home-page__text s-1__text"]')
        .find('h1[class="title youth"]')
        .then(h1 => {
            expect(h1).to.contain("Najlepsza dieta online")
        });

        cy.get(".s-1")
        .find(".home-page__container")
        .find('[class="home-page__text s-1__text"]')
        .find("p")
        .then(p => {
            expect(p).to.contain("Idealnie dopasowana do Twoich potrzeb i trybu życia")
        });

        cy.get(".s-1")
        .find(".home-page__container")
        .find('[class="home-page__text s-1__text"]')
        .find(".vitalia-main-button")
        .should("contain", "Sprawdź ofertę")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });

        cy.get(".s-1")
        .find(".s-1__carousel")
        .find(".s-1__img");


        //Sekcja s-2
        cy.get(".s-2")
        .find(".home-page__container")
        .find('[class="home-page__text s-2__text"]')
        .find('h1[class="title youth"]')
        .then(h1 => {
            expect(h1).to.have.contain("Food-Life Balance")
            });

        cy.get(".s-2")
        .find(".home-page__container")
        .find('[class="home-page__text s-2__text"]')
        .find("p")
        .should("contain", "Najnowocześniejszy na rynku system, który pomoże Ci znaleźć równowagę pomiędzy tym co jesz, a tym jak żyjesz.");

        cy.get(".s-2")
        .find(".home-page__container")
        .find(".s-2__images")
        .find("picture")
        .then(picture => {
            expect(picture).to.have.length(5)  
            });

        
        //Sekcja s-3
        //BOX 1
        cy.get(".s-3")
        .find(".home-page__container")
        .find('[class="home-page__text s-3__text"]')
        .find('h2[class="title youth"]')
        .then(h2 => {
            expect(h2).to.have.contain("Zachowaj")
        })
        .find(".text-color-1")
        .should("contain", "zdrowy balans");

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(0)
        .find(".s-3__image")
        .find("picture")
        .then(picture => {
            expect(picture).to.have.length(2)
        });

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(0)
        .find(".s-3__text")
        .find('h4[class="youth"]')
        .should("contain", "Największa baza produktów");

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(0)
        .find(".s-3__text")
        .find("p");

        //BOX 2
        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(1)
        .find(".s-3__image")
        .find(".image__box-2")
        .find("picture")
        .then(picture => {
            expect(picture).to.have.length(2)
        });

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(1)
        .find(".s-3__text")
        .find('h4[class="youth"]')
        .should("contain", "Wymiana bez ograniczeń");

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(1)
        .find(".s-3__text")
        .find("p")
        .should("contain", "Food Life Balance uczy się Twoich preferencji żywieniowych, dlatego jadłospisy są dopasowane do tego co lubisz jeść. Jednak jeżeli nasza propozycja nie przypadnie Ci do gustu możesz wymienić ją w kilka sekund. Za darmo i bez limitu!")

        //BOX 3
        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(2)
        .find(".s-3__image")
        .find(".image__box-2")
        .find("picture")
        .then(picture => {
            expect(picture).to.have.length(2)
        });

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(2)
        .find(".s-3__text")
        .find('h4[class="youth"]')
        .should("contain", "Alkohol na diecie");

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(2)
        .find(".s-3__text")
        .find("p")
        .should("contain", "Wino do kolacji? Piwo ze znajomymi? Jako pierwsza usługa w Polsce wprowadziliśmy możliwość spożywania alkoholu na diecie, bo życie nie składa się z samych wyrzeczeń.");
        
        //BOX 4
        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(3)
        .find(".s-3__image")
        .find('[class="image__box-1 m-t"]')
        .find("picture")
        .then(picture => {
            expect(picture).to.have.length(2)
        });

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(3)
        .find(".s-3__text")
        .find('h4[class="youth"]')
        .should("contain", "Inteligentny dobór potraw");

        cy.get(".s-3")
        .find(".home-page__container")
        .find(".s-3__box-container")
        .find(".s-3__box")
        .then(box => {
            expect(box).to.have.length(4)
        })
        .eq(3)
        .find(".s-3__text")
        .find("p")
        .should("contain", "Wolisz śniadania na ciepło, zamiast kanapek? Wskazuj swoje ulubione kategorie potraw i naucz system Twoich preferencji, dzięki czemu skomponujemy najbardziej dopasowany do Ciebie jadłospis.");
        
        
        
        //Sekcja s-4
        //Home kontener
        cy.get(".s-4")
        .find(".home-page__container")
        .find('[class="home-page__text s-4__text"]')
        .find('h2[class="title youth"]')
        .should("contain", "Oszczędzaj");

        cy.get(".s-4")
        .find(".home-page__container")
        .find('[class="home-page__text s-4__text"]')
        .find("p")
        .should("contain", "Brak czasu na gotowanie i drogie diety to główne problemy osób, które chcą się zdrowo odżywiać. Mamy na to rozwiązanie.");

        cy.get(".s-4")
        .find(".home-page__container")
        .find('[class="home-page__text s-4__text"]')
        .find('a[class="vitalia-main-button"]')
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });

        //Swiper
        cy.get(".s-4")
        .find(".home-page__container")
        .find(".swiper-container")
        .find(".swiper-wrapper")
        .find(".swiper-slide")
        .then(slide => {
            expect(slide).to.have.length(3)
        });

        cy.get(".s-4")
        .find(".home-page__container")
        .find(".swiper-container")
        .find('[class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"]');
        
        
        //Sekcja s-5
        //Nagłówek
        cy.get(".s-5")
        .find(".home-page__container")
        .find('[class="home-page__text s-5__text"]')
        .find('h2[class="title youth"]')
        .find(".text-color-1")
        .should("contain", "11 Planów żywienia");

        //Tekst
        //cy.get(".s-5")
        //.find(".home-page__container")
        //.find('[class="home-page__text s-5__text"]')
        //.find("p")
        //.should("contain", " Kupując Vitalię możesz bez limitu i zupełnie za darmo przełączać się pomiędzy aż 11 różnymi rodzajami diet! ");
          
        //Nawigacja
        cy.get(".s-5")
        .find(".home-page__container")
        .find(".s-5__navigation")
        .find('a[class="vitalia-main-button"]')
        .should("contain", "Sprawdź ofertę")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });
        
        cy.get(".s-5")
        .find(".home-page__container")
        .find(".s-5__navigation")
        .find(".swiper-buttons");

        //Lista diet
        cy.get(".s-5")
        .find(".home-page__container")
        .find(".s-5__diets-list")
        .find('[class="swiper-container swiper-container-initialized swiper-container-horizontal"]')
        .find(".swiper-wrapper")
        .find(".swiper-slide")
        .then(slider => {
            expect(slider).to.have.length(11)
        });

        //Paginacja
        cy.get(".s-5")
        .find(".home-page__container")
        .find(".s-5__diets-list")
        .find('[class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"]')
        .find(".swiper-pagination-bullet")
        .then(bullet => {
            expect(bullet).to.have.length(3)
        });


        //Sekcja s-6
        //Nagłówek
        cy.get(".s-6")
        .find('[class="s-6__container home-page__container"]')
        .find('[class="home-page__text s-6__text"]')
        .find('h4[class="title youth"]')
        .should("contain", "Wielofunkcyjna aplikacja");

        //Tekst
        //cy.get(".s-6")
        //.find('[class="s-6__container home-page__container"]')
        //.find('[class="home-page__text s-6__text"]')
        //.find("p")
        //.should("contain", " Wiemy, że codzienność bywa skomplikowana. Zdrowie odżywnienie nie musi takie być, dlatego stworzyliśmy wygodną aplikację, w której poza dostępem do jadłospisów znajdziesz m. in. listę zakupów, powiadomienia i moduł motywacji. ");

        //Swiper
        cy.get(".s-6")
        .find('[class="s-6__container home-page__container"]')
        .find(".s-6__swiper")
        .find('[class="swiper-container swiper-container-initialized swiper-container-horizontal"]')
        .find(".swiper-wrapper")
        .find(".swiper-slide")
        .then(slide => {
            expect(slide).to.have.length(3)
        });

        //Paginacja
        cy.get(".s-6")
        .find('[class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"]')
        .find(".swiper-pagination-bullet")
        .then(bullet => {
            expect(bullet).to.have.length(3)
        });
        

        //Sekcja s-7
        //Nagłówek
        //cy.get(".s-7")
        //.find(".home-page__container")
        //.find('h2[class="home-page__text s-7__text"]')
        //.find(".title youth")
        //.should("contain", "Dlaczego dieta Vitalii jest lepsza niż inne diety online?");

        //Tabelka
        cy.get(".s-7")
        .find(".home-page__container")
        .find(".s-7__tab")
        .find(".tab-container")
        .find("table")

        //Przycisk
        cy.get(".s-7")
        .find(".home-page__container")
        .find(".s-7__button")
        .find(".vitalia-main-button")
        .should("contain", "Sprawdź ofertę")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });


        //Sekcja s-8
        //Nagłówek
        cy.get(".s-8")
        .find('[class="s-8__container home-page__container"]')
        .find('[class="home-page__text s-8__text"]')
        .find('h4[class="title youth"]')
        .should("contain", "Najlepsi eksperci");

        //Tekst
        //cy.get(".s-8")
        //.find('[class="s-8__container home-page__container"]')
        //.find('[class="home-page__text s-8__text"]')
        //.find("p")
        //.should("contain", "Kupując dowolny abonament otrzymujesz w pakiecie nielimitowany kontakt ze swoim dietetykiem. Nasz zespół tworzy kilkudziesięciu specjalistów: dietetyków i psychodietetyków");

        //Obrazek
        cy.get(".s-8")
        .find('[class="s-8__container home-page__container"]')
        .find(".s-8__img-container")
        .find(".s-8__img");


        //Sekcja s-9
        //Nagłówek
        cy.get(".s-9")
        .find(".home-page__container")
        .find('[class="home-page__text s-9__text"]')
        .find('h2[class="title youth"]')
        .should("contain", " Jak to ")
        .find(".text-color-1")
        .should("contain", "działa?")

        //Boxy
        cy.get(".s-9")
        .find(".home-page__container")
        .find(".s-9__container")
        .find(".s-9__box")
        .then(box => {
            expect(box).to.have.length(3)
        });


    //Cennik
    //Nagłówek
    cy.get("#vitalia-price-list")
    .find(".the-main-container")
    .find(".header")
    .find('h2[class="title youth"]')
    .should("contain", "długość planu")
    .find(".text-color-1")
    .should("contain", "Wybierz");

    //Tekst
    cy.get("#vitalia-price-list")
    .find(".the-main-container")
    .find(".header")
    .find(".subtitle")
    .should("contain", "Rodzaj diety wybierzesz po dokonaniu płatności.");

    //Switch
    cy.get("#vitalia-price-list")
    .find(".the-main-container")
    .find(".the-inner-container")
    .find('[class="single-couple-switch JS-single-couple-switch"]')
    .find(".floater");

    cy.get("#vitalia-price-list")
    .find(".the-main-container")
    .find(".the-inner-container")
    .find('[class="single-couple-switch JS-single-couple-switch"]')
    .find("a")
    .should("have.attr", "href")
    .then(link => {
        cy.log(link)
    });

        cy.get("#vitalia-price-list")
        .find(".the-main-container")
        .find(".the-inner-container")
        .find('[class="single-couple-switch JS-single-couple-switch"]')
        .find("a")
        .eq(0)
        .should("contain", "Dla jednej osoby");

        cy.get("#vitalia-price-list")
        .find(".the-main-container")
        .find(".the-inner-container")
        .find('[class="single-couple-switch JS-single-couple-switch"]')
        .find("a")
        .eq(1)
        .should("contain", "Dla pary");

    //Plany diet
    cy.get("#vitalia-price-list")
    .find(".the-main-container")
    .find(".the-inner-container")
    .find('[class="the-plans-container JS-plans-container"]')
    .find('[class="plan JS-plan"]')
    .find(".plan-box");

    //PayPo
    cy.get(".paypo")
    .find("p")
    .find("a")
    .should("have.attr", "href")
    .then(href => {
        expect(href).to.have.contain("https://start.paypo.pl/psp")
        });



    //Sekcja s-11
    cy.get(".s-11")
    .find(".home-page__container")
    .find('h2[class="youth"]')
    .should("contain", "Masz pytanie?");

    cy.get(".s-11")
    .find(".home-page__container")
    .find('[class="JS_item-add-active faqBox__item"]')
    .then(box => {
        expect(box).to.have.length(5)
        });

    cy.get(".s-11")
    .find(".home-page__container")
    .find(".faqBox__show")
    .find('p[class="show-text"]')
    .should("contain", "Nie ma tego czego szukasz?");

    cy.get(".s-11")
    .find(".home-page__container")
    .find(".faqBox__show")
    .find('a[class="vitalia-button_4"]')
    .should("contain", "Sprawdź więcej pytań")
    .and("have.attr", "href")
    .then(href => {
        expect(href).to.have.contain("/pomoc.html")
        });

        
    //Pobieranie stopki z elementami
    cy.get('[class="ref-foot-wrap"][style="width: 0; height: 0; overflow: hidden;"]')
    .find("ul")
    .then(ul => {
         expect(ul).to.have.length(4)
         });

    });
});