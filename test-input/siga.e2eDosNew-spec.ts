import { AppPage } from "./siga.po";
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
  browser.driver.sleep(temps); // sleep for demonstration reasons
}

let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";

describe("E2E Tests Sprint 9 -> SIGA 556, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-556 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-556 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-556 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-556 -> Click on Departement", () => {
    page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-556 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-556 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-556 -> Must be able to click on the list", () => {
    page.clickClasse(133, "ng-star-inserted");
    sleep(3000);
});
it("SIGA-556 -> Must be able to click on Recapitulatif des aides", () => {
    page.clickClasse(0, "mat-tab-label-content");
    sleep(1000);
});
it("SIGA-556 -> Must be able to click on the >", () => {
    page.clickClasse(1, "mat-tab-header-pagination-chevron");
    sleep(1000);
});
it("SIGA-556 -> Must be able to click on Courriers", () => {
    page.clickClasse(6, "mat-tab-label-content");
    sleep(1000);
});
it("SIGA-556 -> Must be able to click on Creer un courrier", () => {
    page.clickClasse(0, "siga-bouton btn btn-default siga-form-space font-size-parcourir siga-form-parcourir");
    sleep(3000);
});
it("SIGA-556 -> Must be able to click on Modele", () => {
    page.clickClasse(0, "mat-select-arrow ng-star-inserted mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-556 -> Choose an option from the list of Modele", () => {
    page.clickClasse(0, "mat-option-text");
    sleep(3000);
});
});

describe("E2E Tests Sprint 9 -> SIGA 3067, Dossier", function() {
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
it("SIGA-3067 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-3067 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-3067 -> Click on Departement", () => {
    page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
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
it("SIGA-3067 -> Must be able to click on Nature Operation", () => {
    page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3067 -> Must be able to choose a value from the list of Nature Operation", () => {
    page.clickClasse(0, "mat-option-text");
    sleep(3000);
});
it("SIGA-3067 -> Must be able to click on Localisation", () => {
    page.clickClasse(10, "mat-tab-label-content");
    sleep(5000);
});
it("SIGA-3067 -> Must be able to click on BV de gestion", () => {
    page.clickClasse(5, "mat-select-arrow-wrapper");
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
    page.clickClasse(5, "mat-select-arrow-wrapper");
    sleep(5000);
});
});


describe("E2E Tests Sprint 9 -> SIGA 2525, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-2525 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-2525 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-2525 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-2525 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(5000);
});
it("SIGA-2525 -> Choose an option from the list", () => {
    page.clickClasse(9, "mat-option-text");
    sleep(5000);
});
it("SIGA-2525 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-2525 -> Must be able to click on the list", () => {
    page.clickClasse(33, "ng-star-inserted");
    sleep(3000);
});
it("SIGA-2525 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-2525 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(5000);
});
it("SIGA-2525 -> Choose an option from the list", () => {
    page.clickClasse(9, "mat-option-text");
    sleep(5000);
});
});

describe("E2E Tests Sprint 9 -> SIGA 3093, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-3093 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-3093 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-3093 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-3093 -> Click on Departement", () => {
    page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3093 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3093 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-3093 -> Must be able to click an element from the list", () => {
    page.clickClasse(0, "nounderline");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to click on Localisation", () => {
    page.clickClasse(10, "mat-tab-label-content");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to click on Regions", () => {
    page.clickClasse(3, "mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to select an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to click on Regions", () => {
    page.clickClasse(3, "mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to select an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to delete a selected region", () => {
    page.clickClasse(1, "siga-close-button mat-icon material-icons");
    sleep(5000);
});
it("SIGA-3093 -> Must be able to click on Regions", () => {
    page.clickClasse(3, "mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to select an option from the list", () => {
    page.clickClasse(2, "mat-option-text");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to delete a selected region", () => {
    page.clickClasse(2, "siga-close-button mat-icon material-icons");
    sleep(5000);
});
it("SIGA-3093 -> Must be able to click on Regions", () => {
    page.clickClasse(3, "mat-select-arrow-down");
    sleep(3000);
});

it("SIGA-3093 -> Must be able to enter a text in the field of Regions", () => {
    page.enterChamps(0, "test", "mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-valid ng-touched ng-dirty");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to delete the text inputed on Regions", () => {
    page.clickClasse(4, "mat-icon material-icons");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to enter a text in the field of Regions", () => {
    page.enterChamps(0, "0000", "mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-valid ng-touched ng-dirty");
    sleep(3000);
});
it("SIGA-3093 -> Must be able to delete the text inputed on Regions", () => {
    page.clickClasse(4, "mat-icon material-icons");
    sleep(3000);
});
});

describe("E2E Tests Sprint 9 -> SIGA 2769, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1680, 1050);
    sleep(1000);
});
it("SIGA-2769 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-2769 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-2769 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-2769 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2769 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2769 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-2769 -> Must be able to click on the list", () => {
    page.clickClasse(1, "nounderline");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click on Recapitulatif des aides", () => {
    page.clickClasse(0, "mat-tab-label-content");
    sleep(1000);
});
it("SIGA-2769 -> Must be able to click on the >", () => {
    page.clickClasse(1, "mat-tab-header-pagination-chevron");
    sleep(1000);
});
it("SIGA-2769 -> Must be able to click on Courriers", () => {
    page.clickClasse(6, "mat-tab-label-content");
    sleep(1000);
});
it("SIGA-2769 -> Must be able to click on Creer un courrier", () => {
    page.clickClasse(0, "siga-bouton btn btn-default siga-form-space font-size-parcourir siga-form-parcourir");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click on Modele", () => {
    page.clickClasse(0, "mat-select-arrow ng-star-inserted mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2769 -> Choose an option from the list of Modele", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click on Date Creation", () => {
    page.clickClasse(2, "mat-datepicker-toggle-default-icon ng-star-inserted");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to select a date on Date Creation", () => {
    page.clickClasse(0, "mat-calendar-body-cell mat-calendar-body-active ng-star-inserted");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on search icon of Beneficiare", () => {
    page.clickClasse(4, "mat-button mat-icon-button");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to enter a name on Nom", () => {
    page.enterChamps(29, "test", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on Departement", () => {
    page.clickClasse(6, "mat-select-arrow-wrapper");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to choose a Departement", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on Commune", () => {
    page.clickClasse(7, "mat-select-arrow-wrapper");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to choose a Commune", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to enter a number on SIREN", () => {
    page.enterChamps(32, "033333333", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to enter a value on NIC", () => {
    page.enterChamps(33, "033333", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to enter a value on Numero Agence", () => {
    page.enterChamps(34, "00000000A", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on Recherche button", () => {
    page.clickClasse(0, "styleButton mat-raised-button");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on X button - Recerche Beneficiare", () => {
    page.clickClasse(13, "mat-button mat-icon-button");
    sleep(10000);
});
it("SIGA-2769 -> Must be able to click on search icon of Beneficiare", () => {
    page.clickClasse(4, "mat-button mat-icon-button");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on Departement", () => {
    page.clickClasse(6, "mat-select-arrow-wrapper");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to choose an Departement", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on Recherche button", () => {
    page.clickClasse(0, "styleButton mat-raised-button");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to click on the list", () => {
    page.clickClasse(300, "ng-star-inserted");
    sleep(5000);
});
it("SIGA-2769 -> Delete the Titre", () => {
    page.clickClasse(2, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Tire", () => {
    page.enterChamps(13, "test", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Delete the Raison Sociale", () => {
    page.clickClasse(3, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill Raison Sociale", () => {
    page.enterChamps(16, "Test S.A", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Delete the Adresse", () => {
    page.clickClasse(4, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Adresse field", () => {
    page.enterChamps(19, "PARC de Test", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Delete the Code postal", () => {
    page.clickClasse(6, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Code postal field", () => {
    page.enterChamps(21, "31100", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Delete the Commune", () => {
    page.clickClasse(7, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Commune field", () => {
    page.enterChamps(22, "Test Commune", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to toggle the LR avec avis de reception (ON)", () => {
    page.clickClasse(0, "mat-slide-toggle-thumb");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to toggle the LR avec avis de reception (OFF)", () => {
    page.clickClasse(0, "mat-slide-toggle-thumb");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to toggle the LR avec avis de reception (ON)", () => {
    page.clickClasse(0, "mat-slide-toggle-thumb");
    page.sendTab();
    sleep(5000);
});
it("SIGA-2769 -> Must be able to fill Piece(s) jointe(s) field", () => {
    page.enterChamps(17, "Test", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Delete the VOS references text", () => {
    page.clickClasse(9, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to Vos references field - 1/2", () => {
    page.enterChamps(23, "Test", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to Vos reference field - 2/2", () => {
    page.enterChamps(24, "11/10/2018", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to fill Nos references field", () => {
    page.enterChamps(25, "Test nos references", "mat-input-infix mat-form-field-infix");
    sleep(5000);
});
it("SIGA-2769 -> Must be able to delete the text from Responsable Technique", () => {
    page.clickClasse(10, "mat-icon material-icons");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click on Responsable Technique", () => {
    page.clickClasse(4, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to select an option from Responsable Technique", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to delete the text on Objet field", () => {
    page.clickClasse(12, "mat-button mat-icon-button ng-star-inserted");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Objet field", () => {
    page.enterChamps(27, "Test", "mat-input-infix mat-form-field-infix");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to fill the Copie adressee pour information a", () => {
    page.enterChamps(26, "Test Copie Adressee", "mat-input-infix mat-form-field-infix");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click on Signataire", () => {
    page.clickClasse(5, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2769 -> Must be able to select an option from Signataire", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
    sleep(3000);
});
it("SIGA-2769 -> Must be able to click opn Generer Courier", () => {
    page.clickClasse(6, "mat-raised-button");
    page.sendTab();
    sleep(3000);
});
});
describe("E2E Tests Sprint 9 -> SIGA 2814, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-2814 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-2814 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-2814 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-2814 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2814 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2814 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-2814 -> Must be able to click an element from the list", () => {
    page.clickClasse(0, "nounderline");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to click on Nature Operation", () => {
    page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2814 -> Choose an option from the list of Nature Operation", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2814 -> Must be able to click on Ouvrages", () => {
    page.clickClasse(9, "mat-tab-label-content");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to click on Ajouter un ouvrage", () => {
    page.clickClasse(0, "siga-button siga-form-confirm siga-taille-image-plus siga-form-addLine btn btn-default ion-ios-plus-outline siga-form-invalid");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to click on search icon button", () => {
    page.clickClasse(0, "element-row mat-button mat-icon-button");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to enter a value on Maitre d'ouvrage field", () => {
    page.enterChamps(12, "00000000A", "mat-input-infix mat-form-field-infix");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to clicon Libelle maitre d'ouvrage", () => {
    page.clickClasse(13, "mat-input-infix mat-form-field-infix");
    sleep(3000);
});
it("SIGA-2814 -> Must be able to click on Recherche button", () => {
    page.clickClasse(0, "styleButton mat-raised-button");
    sleep(3000);
});
it("SIGA-2814 -> Choose an option from the list of Nature Operation", () => {
    page.clickClasse(304, "ng-star-inserted");
    sleep(5000);
});
});

describe("E2E Tests Sprint 10 -> SIGA 3221, Dossier", function() {
  let page: AppPage;

beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-3221 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("Siga-3221 -> Show the nom de l'utilisateur connecte", () => {
    var texte = page.getClasse("container topContainer ng-star-inserted").getText().then(function(texte) {
        nomUtilisateur =
        page.getWordInString(1, texte, " ") + " " +page.getWordInString(2, texte, " ");
        console.log(nomUtilisateur);
});
});
});


describe("E2E Tests Sprint 10 -> SIGA 3096, Dossier", function() {
    let page: AppPage;
  
  beforeEach(() => {
      page = new AppPage();
      browser.driver
        .manage()
        .window()
        .setSize(1280, 1024);
      sleep(1000);
  });
it("SIGA-3096 -> Dossiers Accueil", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-3096 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-3096 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-3096 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3096 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3096 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-3096 -> Must be able to click on the list", () => {
    page.clickClasse(133, "ng-star-inserted");
});
it("SIGA-3096 -> Must be able to click on Nature operation", () => {
    page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
});
it("SIGA-3096 -> Must be able to click on Nature operation and choose an option", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3096 -> Must be able to click on Autres infos", () => {
    page.clickClasse(11, "mat-tab-label-content");
});
it("SIGA-3096 -> Must be able to click on Rattacher DP", () => {
    page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
});
it("SIGA-3096 -> Must be able to click on Type for Dispositif de parteneriat rataches", () => {
    page.clickClasse(4, "mat-select-arrow-wrapper");
});
it("SIGA-3096 -> Must be able to choose an option", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3096 -> Must be able to click on Numero for Dispositif de parteneriat rataches", () => {
    page.clickClasse(5, "mat-select-arrow-wrapper");
});
it("SIGA-3096 -> Must be able to choose an option", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3096 -> Must be able to click on Enregistrer", () => {
    page.clickClasse(1, "mat-raised-button");
    sleep(5000);
});
it("SIGA-3096 -> Must be able to click on Dispositif de parteneriat rattaches", () => {
    page.clickClasse(0, "ion-ios-eye siga-tooltip siga-icon");
    sleep(10000);
});
it("SIGA-3096 -> Should open the second tab", function() {
    // We are in the first tab right now, we need to switch to the second one
    browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]);
    });
    sleep(10000);
});
it("SIGA-3096 -> Must be able to click on Oui button from Engagement financier", () => {
    page.clickClasse(0, "mat-radio-button mat-accent ng-star-inserted");
    sleep(3000);
});
it("SIGA-3096 -> Must be able to click on Sans Objet button from Engagement financier", () => {
    page.clickClasse(2, "mat-radio-button mat-accent ng-star-inserted");
    sleep(5000);
});
it("SIGA-3096 -> Must be able to click on Validate button from Dispositif de parteneriat", () => {
    page.clickClasse(1, "mat-raised-button");
    sleep(5000);
});
it("SIGA-3096 -> Should close the second tab and return to the first tab", function() {
    browser.getAllWindowHandles().then(function(handles){
        // We are in the second tab right now, we need to switch back to the first one
        browser.driver.close();
        sleep(5000);
        browser.switchTo().window(handles[0]);
    });
});
it("SIGA-3096 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-3096 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3096 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3096 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-3096 -> Must be able to click on the list", () => {
    page.clickClasse(133, "ng-star-inserted");
    sleep(5000);
});
it("SIGA-3096 -> Must be able to click on Autres infos", () => {
    page.clickClasse(11, "mat-tab-label-content");
});
});


describe("E2E Tests Sprint 10 -> SIGA 2770, Dossier", function() {
    let page: AppPage;
  
  beforeEach(() => {
      page = new AppPage();
      browser.driver
        .manage()
        .window()
        .setSize(1680, 1050);
      sleep(1000);
  });
it("SIGA-2770 -> Dossiers Accueil", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-2770 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-2770 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-2770 -> Click on Phase", () => {
    page.clickClasse(3, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-2770 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2770 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-2770 -> Must be able to click on the list", () => {
    page.clickClasse(133, "ng-star-inserted");
});
it("SIGA-2770 -> Must be able click on Courriers TAB", () => {
    page.clickClasse(6, "mat-tab-label-content");
});
it("SIGA-2770 -> Must be able click on Creer un courrier button", () => {
    page.clickClasse(0, "siga-bouton btn btn-default siga-form-space font-size-parcourir siga-form-parcourir");
});
it("SIGA-2770 -> Must be able click on Modele", () => {
    page.clickClasse(0, "mat-select-arrow mat-select-arrow-down ng-star-inserted");
});
it("SIGA-2770 -> Choose an option from the list of Modele", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2770 -> Must be able to click on Signataire", () => {
    page.clickClasse(5, "mat-select-arrow mat-select-arrow-down");
});
it("SIGA-2770 -> Choose an option from the list of Signataire", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-2770 -> Must be able to fill the Code postal field", () => {
    page.enterChamps(21, "31000", "mat-input-infix mat-form-field-infix");
});
it("SIGA-2770 -> Must be able to fill the Commune field", () => {
    page.enterChamps(22, "Commune test", "mat-input-infix mat-form-field-infix");
});
it("SIGA-2770 -> Must be able to click on Generer Courrier", () => {
    page.clickClasse(6, "mat-raised-button");
    sleep(10000);
});
it("SIGA-2770 -> Must be able to click on Visionner icon of Courriers", () => {
    sleep(10000);
    page.clickClasse(0, "ion-ios-eye sam-tooltip sam-icon");
});
it("SIGA-2770 -> Must be able to click on Enregistrer and see if the file is correctly created or not", () => {
    sleep(10000);
    page.clickClasse(1, "mat-raised-button");
});
});

describe("E2E Tests Sprint 10 -> SIGA 3355, Dossier", function() {
    let page: AppPage;
beforeEach(() => {
    page = new AppPage();
    browser.driver
    .manage()
    .window()
    .setSize(1280, 1024);
    sleep(1000);
});
it("SIGA-3355 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-3355 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-3355 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-3355 -> Click on Thematique", () => {
    page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-3355 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-3355 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-3355 -> Must be able to click on the list", () => {
    page.clickClasse(133, "ng-star-inserted");
    sleep(3000);
}); 
it("SIGA-3355 -> Must be able to click on Ouvrages", () => {
    page.clickClasse(9, "mat-tab-label-content");
});
it("SIGA-3355 -> Must be able to click on the Ajouter ouvrage(s) button", () => {
    page.clickClasse(0, "siga-button siga-form-confirm siga-taille-image-plus siga-form-addLine btn btn-default ion-ios-plus-outline siga-form-invalid");
    sleep(5000);
});     
it("SIGA-3355 -> Must be able to click on the search icon of Ouvrages", () => {
    page.clickClasse(0, "element-row mat-button mat-icon-button");
    sleep(5000);
});
it("SIGA-3355 -> Must be able to fill the field of Maitre d'ouvrage", () => {
    page.enterChamps(13, "00000000A", "mat-input-infix mat-form-field-infix");
    page.sendTab();
    sleep(5000);
});
it("SIGA-3355 -> Must be able to click on the Rechercher button", () => {
    page.clickClasse(0, "styleButton mat-raised-button");
    sleep(5000);
});
it("SIGA-3355 -> Must be able to click on the checkboxes of Recherche ouvrage", () => {
    page.clickClasse(0, "mat-checkbox mat-accent");
    sleep(3000);
});
it("SIGA-3355 -> Must be able to click on the checkboxes of Recherche ouvrage", () => {
    page.clickClasse(1, "mat-checkbox mat-accent");
    sleep(3000);
});
it("SIGA-3355 -> Must be able to click on the checkboxes of Recherche ouvrage", () => {
    page.clickClasse(2, "mat-checkbox mat-accent");
    sleep(3000);
});
it("SIGA-3355 -> Must be able to click on the checkboxes of Recherche ouvrage", () => {
    page.clickClasse(0, "bouton_valider_ouvrage mat-raised-button");
    sleep(5000);
});
});

describe("E2E Tests Sprint 10 -> SIGA 680, Dossier", function() {
    let page: AppPage;
beforeEach(() => {
    page = new AppPage();
    browser.driver
    .manage()
    .window()
    .setSize(1680, 1050);
    sleep(1000);
});
it("SIGA-680 -> Dossiers Accueil", () => {
    page.navigateTo(browser.params.adresse);
    expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
});
it("SIGA-680 -> Click on Dossiers", () => {
    page.clickAttribut(1, "span[translate]");
    sleep(1000);
});
it("SIGA-680 -> Click on Rechercher", () => {
    page.clickClasse(2, "al-sidebar-list-link ng-star-inserted");
    sleep(5000);
});
it("SIGA-680 -> Click on Thematique", () => {
    page.clickClasse(0, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-680 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-680 -> Click on Departement", () => {
    page.clickClasse(1, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-680 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-680 -> Click on search button", () => {
    page.clickClasse(0, "mat-raised-button");
});
it("SIGA-680 -> Must be able to click on the list", () => {
    page.clickClasse(2, "nounderline");
    sleep(3000);
}); 
it("SIGA-680 -> Must be able to click on Nature operation", () => {
    page.clickClasse(2, "mat-select-arrow mat-select-arrow-down");
    sleep(3000);
});
it("SIGA-680 -> Choose an option from the list", () => {
    page.clickClasse(0, "mat-option-text");
});
it("SIGA-680 -> Must be able to click on Ouvrages", () => {
    page.clickClasse(9, "mat-tab-label-content");
});
it("SIGA-680 -> Must be able to click on the Ajouter ouvrage(s) button", () => {
    page.clickClasse(0, "siga-button siga-form-confirm siga-taille-image-plus siga-form-addLine btn btn-default ion-ios-plus-outline siga-form-invalid");
    sleep(5000);
});     
it("SIGA-680 -> Must be able to click on the search icon of Ouvrages", () => {
    page.clickClasse(0, "element-row mat-button mat-icon-button");
    sleep(5000);
});
it("SIGA-680 -> Must be able to fill the field of Maitre d'ouvrage", () => {
    page.enterChamps(12, "00000000A", "mat-input-infix mat-form-field-infix");
    page.sendTab();
    sleep(5000);
});
it("SIGA-680 -> Must be able to click on the Rechercher button", () => {
    page.clickClasse(0, "styleButton mat-raised-button");
    sleep(5000);
});
it("SIGA-680 -> Must be able to click on the checkboxes of Recherche ouvrage", () => {
    page.clickClasse(0, "mat-checkbox mat-accent");
    sleep(3000);
});
it("SIGA-680 -> Must be able to click on the Valider button of Recherche ouvrage", () => {
    page.clickClasse(0, "bouton_valider_ouvrage mat-raised-button");
    sleep(5000);
});
it("SIGA-680 -> Must be able to click on the arrow to see the Characteristics and impacts of the Ouvrage", () => {
    page.clickClasse(7, "mat-button-wrapper");
    sleep(5000);
});
it("SIGA-680 -> Must be able to enter values on the field Valeurs of Impacts", () => {
    page.enterChamps(11, "100", "mat-input-infix mat-form-field-infix");
    sleep(3000);
});
it("SIGA-680 -> Must be able to enter values on the field Valeurs of Impacts", () => {
    page.enterChamps(12, "150", "mat-input-infix mat-form-field-infix");
    sleep(3000);
});
it("SIGA-680 -> Must be able to enter values on the field Valeurs of Impacts", () => {
    page.enterChamps(13, "AEP", "mat-input-infix mat-form-field-infix");
    page.sendTab();
    sleep(3000);
});
it("SIGA-680 -> Must be able to enter values on the field Valeurs of Impacts", () => {
    page.enterChamps(20, "test", "mat-input-infix mat-form-field-infix");
    sleep(3000);
});
});
