import { AppPage } from './siga.po';
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}
let dossierAttache = "";
let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";

describe("E2E Tests Sprint 9 -> Create dossiers for Dispositif de parteneriat", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Creer Dispositif", () => {
        page.clickAttribut(2, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif and choose an option from the list", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to fill the field Complement intitule", () => {
        page.enterChamps(1, "test", "mat-input-infix mat-form-field-infix");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to click on the Green Button", () => {
        page.clickClasse(1, "mat-raised-button");
    });
});

describe("E2E Tests Sprint 9 -> Create dossiers for Dispositif de parteneriat", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Creer Dispositif", () => {
        page.clickAttribut(2, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif and choose an option from the list", () => {
        page.clickClasse(0, "mat-option-text");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to fill the field Complement intitule", () => {
        page.enterChamps(1, "dontdelete", "mat-input-infix mat-form-field-infix");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to click on the Green Button", () => {
        page.clickClasse(1, "mat-raised-button");
    });
});

describe("E2E Tests Sprint 9 -> Create dossiers for Dispositif de parteneriat", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Creer Dispositif", () => {
        page.clickAttribut(2, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif and choose an option from the list", () => {
        page.clickClasse(1, "mat-option-text");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to fill the field Complement intitule", () => {
        page.enterChamps(1, "testzzz", "mat-input-infix mat-form-field-infix");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to click on the Green Button", () => {
        page.clickClasse(1, "mat-raised-button");
    });
});

describe("E2E Tests Sprint 9 -> Create dossiers for Dispositif de parteneriat", function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Show Accueil", () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Dispositifs de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Creer Dispositif", () => {
        page.clickAttribut(2, "span[translate]");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Click on Type dispositif and choose an option from the list", () => {
        page.clickClasse(8, "mat-option-text");
        sleep(1000);
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to fill the field Complement intitule", () => {
        page.enterChamps(1, "test", "mat-input-infix mat-form-field-infix");
    });
    it("E2E WORKERS FOR DISPOSITIF -> Must be able to click on the Green Button", () => {
        page.clickClasse(1, "mat-raised-button");
    });
});