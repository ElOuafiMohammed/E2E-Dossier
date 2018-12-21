import { AppPage } from './siga.po';
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}
let dossierAttache = "";
let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";

describe("E2E Tests Sprint 9 -> SIGA 1296, Dispositif", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("SIGA-1296 -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-1296 -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("SIGA-1296 -> Must be able to click on Rechercher dispositif", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("SIGA-1296 -> Must be able to click on Numero d'increment ", () => {
        page.clickClasse(1, "mat-select-arrow-wrapper-session");
    });
    it("SIGA-1296 -> Must be able to fill the field", () => {
        page.enterChamps(1, "0001", "mat-input-wrapper mat-form-field-wrapper");
    });
    it("SIGA-1296 -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("SIGA-1296 -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("SIGA-1296 -> Must be able to click Dossiers rataché", () => {
        page.clickClasse(1, "mat-tab-label-content");
        sleep(5000);
    });
    it("SIGA-1296 -> Must be able to click un element de la liste", () => {
        page.clickClasse(0, "nounderline ng-star-inserted");
        sleep(10000);
    });


    describe("E2E Tests Sprint 9 -> SIGA 2226, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-2226 -> Show Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2226 -> Click on dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2226 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-2226 -> Click on Responsable Technique", () => {
            page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2226 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
        });
        it("SIGA-2226 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2226 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-2226 -> Must be able to click on the >", () => {
            page.clickClasse(1, "mat-tab-header-pagination-chevron");
            sleep(1000);
        });
        it("SIGA-2226 -> Must be able to click on Bloc notes", () => {
            page.clickClasse(5, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-2226 -> Must be able to click on the text box", () => {
            page.clickClasse(13, "ng-untouched ng-pristine ng-valid");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 2520, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-2520 -> Show Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2520 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2520 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-2520 -> Must be able to fill the field Ancien numero AEAG", () => {
            page.enterChamps(3, "123-152-25", "mat-input-infix mat-form-field-infix");
        });
        it("SIGA-2520 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2520 -> Click on rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(3000);
        });
        it("SIGA-2520 -> Delete the Ancien numero AEAG", () => {
            page.clickClasse(0, "mat-icon material-icons");
            sleep(3000);
        });
        it("SIGA-2520 -> Must be able to fill the field Ancien numero AEAG", () => {
            page.enterChamps(3, "123-567-89", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-2520 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
            sleep(10000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 3067, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-3067 -> Dossiers Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-3067 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-3067 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-3067 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-3067 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
        });
        it("SIGA-3067 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-3067 -> Must be able to click on the list", () => {
            page.clickClasse(133, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-3067 -> Must be able to click on Localisation", () => {
            page.clickClasse(2, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-3067 -> Must be able to click on BV de gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-3067 -> Must be able to choisir a value from BV de gestion", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(3000);
        });
        it("SIGA-3067 -> Must be able to click on the X button from the value that was chosen ", () => {
            page.clickClasse(0, "siga-close-button-hover mat-button mat-icon-button ng-star-inserted");
            sleep(2000);
        });
        it("SIGA-3067 -> Must be able to click on BV de gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 1772, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-1772 -> Show Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-1772 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-1772 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-1772 -> Must be able to fill the field Numero d'increment", () => {
            page.enterChamps(1, "0001", "mat-input-infix mat-form-field-infix");
        });
        it("SIGA-1772 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-1772 -> Must be able to click an element from the list", () => {
            page.clickClasse(33, "ng-star-inserted");
        });
        it("SIGA-1772 -> Click on X button", () => {
            page.clickClasse(0, "mat-raised-button");
            sleep(3000);
        });
        it("SIGA-1772 -> Must be able to click on Creer dispositif", () => {
            page.clickAttribut(2, "span[translate]");
            sleep(5000);
        });
        it("SIGA-1772 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 2301, Dispositif", function () {
        let page: AppPage;
        beforeEach(() => {
            page = new AppPage();
            browser.driver.manage().window().setSize(1280, 1024);
        });
        it("SIGA-2301 -> Show Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2301 -> Click on Dispositifs de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2301 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-2301 -> Must be able to click on Type dispositif ", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2301 -> Must be able to choose an option from Type dispositif", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2301 -> Must be able to click bouton rechercher", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2301 -> Must be able to click an element from the list", () => {
            page.clickClasse(33, "ng-star-inserted");
        });
        it("SIGA-2301 -> Must be able click on Thematique(s)", () => {
            page.clickClasse(0, "mat-select-arrow");
            page.sendTab();
            sleep(5000);
        });
        it("SIGA-2301 -> Must be able to click on Ajouter ligne from Enveloppe initiale", () => {
            page.clickClasse(1, "siga-form-addLine btn btn-default");
            page.sendTab();
            sleep(5000);
        });
        it("SIGA-2301 -> Must be able to click on Ligne", () => {
            page.clickClasse(5, "mat-select-arrow-wrapper");
            sleep(5000);
        });
        it("SIGA-2301 -> Must be able to choose an option from Ligne", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to delete the Ligne", () => {
            page.clickClasse(4, "siga-tooltip siga-icon ion-trash-a");
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ajouter ligne from Enveloppe initiale", () => {
            page.clickClasse(1, "siga-form-addLine btn btn-default");
            page.sendTab();
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ligne", () => {
            page.clickClasse(5, "mat-select-arrow-wrapper");
            sleep(15000);
        });
        it("SIGA-2301 -> Must be able to choose an option from Type dispositif", () => {
            page.clickClasse(1, "mat-option-text");
            page.sendTab();
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ajouter ligne from Enveloppe initiale", () => {
            page.clickClasse(1, "siga-form-addLine btn btn-default");
            page.sendTab();
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ligne", () => {
            page.clickClasse(5, "mat-select-arrow-wrapper");
            sleep(15000);
        });
        it("SIGA-2301 -> Must be able to choose an option from Type dispositif", () => {
            page.clickClasse(0, "mat-option-text");
            page.sendTab();
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to delete the Ligne", () => {
            page.clickClasse(5, "siga-tooltip siga-icon ion-trash-a");
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ajouter ligne from Enveloppe initiale", () => {
            page.clickClasse(1, "siga-form-addLine btn btn-default");
            page.sendTab();
            sleep(10000);
        });
        it("SIGA-2301 -> Must be able to click on Ligne", () => {
            page.clickClasse(5, "mat-select-arrow-wrapper");
            sleep(15000);
        });
        it("SIGA-2301 -> Must be able to choose an option from Type dispositif", () => {
            page.clickClasse(0, "mat-option-text");
            page.sendTab();
            sleep(10000);
        });
    });


    describe("E2E Tests Sprint 9 -> SIGA 3093, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-3093 -> Dispositif Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-3093 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
        });
        it("SIGA-3093 -> Must be able to click on Responsable Technique", () => {
            page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to select an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(3000);
        });
        it("SIGA-3093 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click an element from the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Localisation", () => {
            page.clickClasse(2, "mat-tab-label-content");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Regions", () => {
            page.clickClasse(2, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to select an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Regions", () => {
            page.clickClasse(2, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to select an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to delete a selected region", () => {
            page.clickClasse(0, "siga-close-button-hover mat-button mat-icon-button ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Regions", () => {
            page.clickClasse(2, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to select an option from the list", () => {
            page.clickClasse(2, "mat-option-text");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to delete a selected region", () => {
            page.clickClasse(1, "siga-close-button-hover mat-button mat-icon-button ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to click on Regions", () => {
            page.clickClasse(2, "mat-select-arrow-down");
            sleep(3000);
        });

        it("SIGA-3093 -> Must be able to enter a text in the field of Regions", () => {
            page.enterChamps(0, "test", "mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-valid ng-touched ng-dirty");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to delete the text inputed on Regions", () => {
            page.clickClasse(2, "mat-icon material-icons");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to enter a text in the field of Regions", () => {
            page.enterChamps(0, "0000", "mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-valid ng-touched ng-dirty");
            sleep(3000);
        });
        it("SIGA-3093 -> Must be able to delete the text inputed on Regions", () => {
            page.clickClasse(2, "mat-icon material-icons");
            sleep(3000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 2277, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-2277 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2277 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2277 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-2277 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-2277 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2277 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2277 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-2277 -> Click on Description Generale", () => {
            page.clickClasse(4, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-2277 -> Click on Descriptif technique", () => {
            page.clickClasse(0, "mat-raised-button siga-form-confirm");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 482, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-482 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-482 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-482 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-482 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-482 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-482 -> Must be able to click on the list", () => {
            page.clickClasse(32, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-482 -> Click on Cloturer button", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Reactiver button", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Cloturer button", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-482 -> Click on the right arrow", () => {
            page.clickClasse(1, "mat-tab-header-pagination-chevron");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Bloc notes", () => {
            page.clickClasse(5, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Pieces jointes", () => {
            page.clickClasse(3, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Ajouter fichier", () => {
            page.clickClasse(0, "siga-bouton btn btn-default siga-form-space font-size-parcourir siga-form-parcourir");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Cloturer button (It is not possible to close an already closed RFP)", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Abandonner button (It is not possible to close an abandonned RFP)", () => {
            page.clickClasse(2, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-482 -> Click on Abandonner button (It is not possible to close an abandonned RFP) - Add an motif", () => {
            page.enterChamps(17, "test", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-482 -> Validate the abbandonation", () => {
            page.clickClasse(5, "mat-raised-button");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 463, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-463 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-463 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-463 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-463 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-463 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-463 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-463 -> Click on Abandonner button", () => {
            page.clickClasse(2, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Abandonner button - Add an motif", () => {
            page.enterChamps(17, "test", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-463 -> Do not validate the abbandonation", () => {
            page.clickClasse(4, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Cloturer button (Il n'est pas possbile d'abandonner un DP cloture)", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Reactiver button", () => {
            page.clickClasse(3, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Abandonner button", () => {
            page.clickClasse(2, "mat-raised-button");
            sleep(5000);
        });
        it("SIGA-463 -> Click on Abandonner button - Add an motif", () => {
            page.enterChamps(17, "test", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-463 -> Validate the abbandonation(Il n'est pas possible d'abandonner un DP cloture)", () => {
            page.clickClasse(5, "mat-raised-button");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 2636, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-2636 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2636 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2636 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-2636 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2636 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-2636 -> Click on Localisation", () => {
            page.clickClasse(2, "mat-tab-label-content");
            sleep(3000);
        });
        it("SIGA-2636 -> Click on BV Gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the option that was chosen", () => {
            page.clickClasse(0, "siga-close-button mat-icon material-icons");
            sleep(5000);
        });
        it("SIGA-2636 -> Fill the field an choose the option", () => {
            page.enterChamps(17, "bvg001", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });

        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the option that was chosen", () => {
            page.clickClasse(0, "siga-close-button mat-icon material-icons");
            sleep(5000);
        });
        it("SIGA-2636 -> Click on BV Gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(1, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the option that was chosen", () => {
            page.clickClasse(0, "siga-close-button mat-icon material-icons");
            sleep(5000);
        });
        it("SIGA-2636 -> Click on BV Gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Click on BV Gestion", () => {
            page.clickClasse(5, "mat-select-arrow-down");
            sleep(3000);
        });
        it("SIGA-2636 -> Choose an option from the list", () => {
            page.clickClasse(1, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the option that was chosen", () => {
            page.clickClasse(0, "siga-close-button mat-icon material-icons");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the option that was chosen", () => {
            page.clickClasse(0, "siga-close-button mat-icon material-icons");
            sleep(5000);
        });
        it("SIGA-2636 -> Enter an invalid text on the field (Check if the warning appears)", () => {
            page.enterChamps(17, "test", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-2636 -> Enter an invalid number on the field (Check if the warning appears)", () => {
            page.enterChamps(17, "1111", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-2636 -> Delete the invalid values", () => {
            page.clickClasse(2, "mat-icon material-icons");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 715, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-715 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-715 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-715 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-715 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-715 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-715 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-715 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-715 -> Click on Localisation", () => {
            page.clickClasse(2, "mat-tab-label-content");
            sleep(5000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to fill de Masses d'eau field", () => {
            page.enterChamps(18, "FRFRR68_3", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to fill de Masses d'eau field", () => {
            page.enterChamps(18, "FRFRR68_2", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to fill de Masses d'eau field", () => {
            page.enterChamps(18, "00001", "mat-input-infix mat-form-field-infix");
            sleep(5000);
        });
        it("SIGA-715 -> Must be able to click on the trash icon", () => {
            page.clickClasse(2, "siga-tooltip siga-icon ion-trash-a");
            sleep(5000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to click on Ajouter masse d'eau", () => {
            page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to fill de Masses d'eau field", () => {
            page.enterChamps(18, "FRFRR68_2", "mat-input-infix mat-form-field-infix");
            sleep(15000);
        });
        it("SIGA-715 -> Must be able to click on the trash icon", () => {
            page.clickClasse(1, "siga-tooltip siga-icon ion-trash-a");
            sleep(5000);
        });
    });

    describe("E2E Tests Sprint 9 -> SIGA 2111, Dispositif", function () {
        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
            browser.driver
                .manage()
                .window()
                .setSize(1280, 1024);
            sleep(1000);
        });
        it("SIGA-2111 -> Click on Accueil", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("SIGA-2111 -> Click on Dispositif de parteneriat", () => {
            page.clickAttribut(1, "span[translate]");
            sleep(1000);
        });
        it("SIGA-2111 -> Click on Rechercher dispositif", () => {
            page.clickAttribut(3, "span[translate]");
            sleep(5000);
        });
        it("SIGA-2111 -> Click on Type dispositif", () => {
            page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-2111 -> Choose an option from the list", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2111 -> Click on search button", () => {
            page.clickClasse(0, "mat-raised-button");
        });
        it("SIGA-2111 -> Must be able to click on the list", () => {
            page.clickClasse(33, "ng-star-inserted");
            sleep(3000);
        });
        it("SIGA-2111 -> Click on Localisation", () => {
            page.clickClasse(2, "mat-tab-label-content");
            sleep(5000);
        });

        it("SIGA-2111 -> Must be able to slide the toggle bar", () => {
            page.clickClasse(0, "mat-slide-toggle-thumb");
            sleep(5000);
        });
        it("SIGA-2111 -> Must be able to slide the toggle bar", () => {
            page.clickClasse(0, "mat-slide-toggle-thumb");
            sleep(5000);
        });
        it("SIGA-2111 -> Must be able to select something from Region if the toggle is on", () => {
            page.clickClasse(2, "mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-2111 -> Must be able to choose something from Region i7f the toggle is on", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
        it("SIGA-2111 -> Must be able to select something from Departements if the toggle is on", () => {
            page.clickClasse(3, "mat-select-arrow-down");
            sleep(5000);
        });
        it("SIGA-2111 -> Must be able to choose something from Departements if the toggle is on", () => {
            page.clickClasse(0, "mat-option-text");
            sleep(5000);
        });
    });
});


describe("E2E Tests Sprint 10 -> SIGA 681, Dispositif", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("SIGA-681 -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-681 -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(3000);
    });
    it("Siga-681 -> Info of the Utilisateur", () => {
        var texte = page.getClasse("container topContainer").getText().then(function (texte) {
            nomUtilisateur =
                page.getWordInString(1, texte, " ") + " " + page.getWordInString(2, texte, " ");
            console.log(nomUtilisateur);
        });
    });
    it("SIGA-681 -> Must be able to click on Rechercher dispositif", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("SIGA-681 -> Must be able to click on Type dispositif", () => {
        page.clickClasse(1, "mat-select-arrow-wrapper-session");
    });
    it("SIGA-681 -> Must be able to choose an option from Type dispositif", () => {
        page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-681 -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("SIGA-681 -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("SIGA-681 -> Must be able to click Description Generale", () => {
        page.clickClasse(4, "mat-tab-label-content");
        sleep(5000);
    });
    it("Siga-681 -> Info of the Utilisateur", () => {
        var texte = page.getClasse("rt-infos margin").getText().then(function (texte) {
            nomUtilisateur =
                page.getWordInString(3, texte, " ") + " " + page.getWordInString(4, texte, " ");
            console.log(nomUtilisateur);
        });
    });
    it("SIGA-681 -> Must be able to click on Pieces jointes", () => {
        page.clickClasse(3, "mat-tab-label-content");
        sleep(5000);
    });
    it("SIGA-681 -> Must be able to click on Pieces jointes - Ajouter Fichier", () => {
        page.clickClasse(0, "siga-bouton btn btn-default siga-form-space font-size-parcourir siga-form-parcourir");
        page.sendTab();
        sleep(5000);
    });

    it("Siga-681 -> Info of the Utilisateur", () => {
        var texte = page.getClasse("siga-marge-tableau specifiques").getText().then(function (texte) {
            nomUtilisateur =
                page.getWordInString(5, texte, " ") + " " + page.getWordInString(5, texte, " ");
            console.log(nomUtilisateur);
        });
    });
});

describe("E2E Tests Sprint 10 -> SIGA 2803, Dispositif", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("SIGA-2803 -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-2803 -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(3000);
    });
    it("SIGA-2803 -> Must be able to click on Rechercher dispositif", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("SIGA-2803 -> Must be able to click on Type dispositif", () => {
        page.clickClasse(1, "mat-select-arrow-wrapper-session");
    });
    it("SIGA-2803 -> Must be able to choose an option from Type dispositif", () => {
        page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-2803 -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("SIGA-2803 -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("SIGA-2803 -> Must be able to click Dossiers rattaches", () => {
        page.clickClasse(1, "mat-tab-label-content");
        sleep(5000);
    });
    it("Siga-2803 -> Must be able to display the TOTAL category", () => {
        var texte = page.getClasse("table-spec-total").getText().then(function (texte) {
            nomUtilisateur =
                page.getWordInString(0, texte, " ") + " " + page.getWordInString(1, texte, " ");
            console.log(nomUtilisateur);
        });
    });
    it("Siga-2803 -> Must be able to display the title of the table Dossiers hors T40 et A50", () => {
        var texte = page.getClasse("content text content").getText().then(function (texte) {
            nomUtilisateur =
                page.getWordInString(0, texte, " ") + "  " + page.getWordInString(1, texte, "  ") + page.getWordInString(2, texte, "  ") + page.getWordInString(3, texte, "  ") + page.getWordInString(4, texte, "  ");
            console.log(nomUtilisateur);
        });
    });

    it("SIGA-2803 -> Must be able to check dossier rattaché", () => {
        page.clickClasse(0, "nounderline ng-star-inserted");
        sleep(5000);
    });
});

describe("E2E Tests Sprint 10 -> SIGA 3359, Dispositif", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("SIGA-3359 -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-3359 -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("SIGA-3359 -> Must be able to click on Rechercher dispositif", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("SIGA-3359 -> Must be able to click on Type dispositif", () => {
        page.clickClasse(1, "mat-select-arrow-wrapper-session");
    });
    it("SIGA-3359 -> Must be able to fill the field", () => {
        page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3359 -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("SIGA-3359 -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("SIGA-3359 -> Must be able to click Partneaires", () => {
        page.clickClasse(0, "mat-tab-label-content");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Ajuouter partenaire(s)", () => {
        page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on the Search icon of Partenaires", () => {
        page.clickClasse(0, "element-row mat-button mat-icon-button");
    });
    it("SIGA-3359 -> Must be able to click on the Deaprtement field on Recherche Partenaire", () => {
        page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to choose an option from the Departement field on Recherche Partenaire", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on Recherche", () => {
        page.clickClasse(0, "styleButton mat-raised-button");
    });
    it("SIGA-3359 -> Must be able to click on the checkbox(s)", () => {
        page.clickClasse(1, "mat-checkbox mat-accent");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on the checkbox(s)", () => {
        page.clickClasse(2, "mat-checkbox mat-accent");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on the checkbox(s)", () => {
        page.clickClasse(3, "mat-checkbox mat-accent");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on the Valider button", () => {
        page.clickClasse(0, "bouton_valider_partenaire mat-raised-button");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire", () => {
        page.clickClasse(1, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire and choose an option", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire", () => {
        page.clickClasse(2, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire and choose an option", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire", () => {
        page.clickClasse(3, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire and choose an option", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Ajuouter partenaire(s)", () => {
        page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on the Search icon of Partenaires", () => {
        page.clickClasse(3, "element-row mat-button mat-icon-button");
    });
    it("SIGA-3359 -> Must be able to to fill the Nom field", () => {
        page.enterChamps(29, "%DES", "mat-input-infix mat-form-field-infix");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on Recherche", () => {
        page.clickClasse(0, "styleButton mat-raised-button");
    });
    it("SIGA-3359 -> Must be able to click on the checkbox(s)", () => {
        page.clickClasse(1, "mat-checkbox mat-accent");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on the checkbox(s)", () => {
        page.clickClasse(2, "mat-checkbox mat-accent");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on the Valider button", () => {
        page.clickClasse(0, "bouton_valider_partenaire mat-raised-button");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire", () => {
        page.clickClasse(4, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire and choose an option", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire", () => {
        page.clickClasse(5, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Type partenaire and choose an option", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on Ajuouter partenaire(s)", () => {
        page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on the Search icon of Partenaires", () => {
        page.clickClasse(5, "element-row mat-button mat-icon-button");
    });
    it("SIGA-3359 -> Must be able to click on the Deaprtement field on Recherche Partenaire", () => {
        page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to to choose an option from Departement", () => {
        page.clickClasse(0, "mat-option-text");
        page.sendTab();
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to delete the selected value from Departement", () => {
        page.clickClasse(0, "space-close mat-button mat-icon-button ng-star-inserted");
        page.sendTab();
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to to click on Departement", () => {
        page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to to choose an option from Departement", () => {
        page.clickClasse(0, "mat-option-text");
        page.sendTab();
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on Recherche", () => {
        page.clickClasse(0, "styleButton mat-raised-button");
        sleep(5000);
    });
    it("SIGA-3359 -> Must be able to click on the checkbox of Afficher les inactifs", () => {
        page.clickClasse(0, "mat-checkbox-inner-container");
        sleep(3000);
    });
    it("SIGA-3359 -> Must be able to click on Recherche", () => {
        page.clickClasse(0, "styleButton mat-raised-button");
        sleep(5000);
    });
});

describe("E2E Tests Sprint 10 -> SIGA 1758, Dispositif", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("SIGA-1758 -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-1758 -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to click on Rechercher dispositif", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("SIGA-1758 -> Must be able to click on Type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow-wrapper-session");
    });
    it("SIGA-1758 -> Must be able to choose an option from Type dispositif", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("SIGA-1758 -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("SIGA-1758 -> Must be able to click on Thematique", () => {
        page.clickClasse(0, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to click on Thematique and select a theme", () => {
        page.clickClasse(0, "mat-option-text");
        page.clickClasse(1, "mat-option-text");
        page.sendTab();
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to click on Engagement financier - Oui", () => {
        page.clickClasse(0, "mat-radio-button mat-accent ng-star-inserted");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to click on Date signature", () => {
        page.clickClasse(1, "mat-datepicker-toggle-default-icon ng-star-inserted");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to select a date from Date Signature", () => {
        page.clickClasse(0, "mat-calendar-body-cell mat-calendar-body-active ng-star-inserted");
        page.sendTab();
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to select a date from Date debut validite", () => {
        page.enterChamps(12, "31/10/2018", "mat-input-infix mat-form-field-infix");
        page.sendTab();
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to select a date from Date fin validite", () => {
        page.enterChamps(13, "01/01/2020", "mat-input-infix mat-form-field-infix");
        page.sendTab();
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to click on Enveloppe initiale", () => {
        page.clickClasse(6, "mat-tab-label-content");
        sleep(2000);
    });
    it("SIGA-1758 -> Must be able to click on Ajouter ligne", () => {
        page.clickClasse(1, "siga-form-addLine btn btn-default");
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to click on Ligne", () => {
        page.clickClasse(0, "mat-select-placeholder ng-tns-c19-45 ng-star-inserted");
        sleep(5000);
    });
    it("SIGA-1758 -> Must be able to select an option from the Ligne", () => {
        page.clickClasse(1, "mat-option-text");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to fill the field Previsionnel des operations", () => {
        page.enterChamps(17, "300", "mat-input-infix mat-form-field-infix");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to fill the field Avance", () => {
        page.enterChamps(18, "100", "mat-input-infix mat-form-field-infix");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to fill the field Subvention", () => {
        page.enterChamps(19, "100", "mat-input-infix mat-form-field-infix");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to click on the Valider button", () => {
        page.clickClasse(1, "mat-raised-button");
        sleep(3000);
    });
    it("SIGA-1758 -> Must be able to click on Disponible", () => {
        page.clickClasse(9, "mat-tab-label-content");
        sleep(5000);
    });
});
