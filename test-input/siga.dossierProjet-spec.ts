import { AppPage } from "./siga.po";
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}

let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";

describe("E2E Tests Sprint 9 -> DOSSIERS FOR DOSSIER", function () {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        browser.driver
            .manage()
            .window()
            .setSize(1280, 1024);
        sleep(1000);
    });
    it("DOSSIER WORKERS -> Dossiers Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("DOSSIER WORKERS -> Click on Dossiers", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("DOSSIER WORKERS -> Click on Creer", () => {
        page.clickClasse(3, "al-sidebar-list-link ng-star-inserted");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Click on Thematique", () => {
        page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Choose an option from Thematique", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Click on Departement", () => {
        page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Choose an option from Departement", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to fill the Intitule field", () => {
        page.enterChamps(2, "test", "mat-input-infix mat-form-field-infix");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to fill the Beneficiare", () => {
        page.enterChamps(3, "00000000A", "mat-input-infix mat-form-field-infix");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to click on Enregistrer", () => {
        page.clickClasse(1, "mat-raised-button");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to click on Previsionnel", () => {
        page.clickClasse(2, "mat-tab-label-content");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to click on the button Rattacher DP", () => {
        page.clickClasse(0, "siga-button siga-form-confirm siga-taille-image-plus siga-form-addLine btn btn-default ion-ios-plus-outline");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to click on the Type DP", () => {
        page.clickClasse(4, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Choose an option from Type DP", () => {
        page.clickClasse(8, "mat-option-text");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Must be able to click on the Numero", () => {
        page.clickClasse(5, "mat-select-arrow-wrapper");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Choose an option from Numero", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(5000);
    });
    it("DOSSIER WORKERS -> Click on Enregistrer", () => {
        page.clickClasse(0, "mat-raised-button");
        page.sendTab();
        sleep(5000);
    });
});