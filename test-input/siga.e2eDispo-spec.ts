import { AppPage } from './siga.po';
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}
let numeroDossier = "";


describe('Dispositif Partenariat -> Make sure dossiers rataches opens in a new window', function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it('Must show -> Accueil', () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("Must show all buttons 1/2 -> Click on Dispositif de parteneriat", () => {
        page.clickAttribut(1, "span[translate]");
        sleep(1000);
    });
    it("Must show all buttons 2/2 -> Show the rest of the buttons", () => {
        expect<any>(page.getByAttribut("span[translate]").getText()).toEqual([
            "Accueil",
            "Dispositifs de partenariat",
            "Créer dispositif",
            "Rechercher dispositif"
        ]);
    });
    it("Rechercher dispositif -> Must be able to click on the second button ", () => {
        page.clickAttribut(3, "span[translate]");
    });
    it("Rechercher dispositif -> Must be able to  click type dispositif", () => {
        page.clickClasse(0, "mat-select-arrow-wrapper-session");
    });
    it("Rechercher dispositif -> Must be able to choisir type dispositif", () => {
        page.clickClasse(0, "mat-option-text");
    });
    it('Complement intitule -> Must be able to fill the field', () => {
        page.enterChamps(1, "0001", "mat-input-wrapper mat-form-field-wrapper");
    });
    it("Rechercher dispositif -> Must be able to click bouton rechercher", () => {
        page.clickClasse(0, "mat-raised-button");
    });
    it("Rechercher dispositif -> Must be able to click an element from the list", () => {
        page.clickClasse(33, "ng-star-inserted");
    });
    it("Dossiers rataché -> Must be able to click Dossiers rataché", () => {
        page.clickClasse(1, "mat-tab-label-content");
        sleep(5000);
    });
    it("Dossiers rataché -> Must be able to click un element de la liste", () => {
        page.clickClasse(0, "nounderline ng-star-inserted");
        sleep(10000);
    });


    // Second batch of tests
    it('Must be able to click on the first button -> Creer dispositif', () => {
        page.clickAttribut(0, 'span[ng-reflect-translate]');
    });
    it('Must be able to click on the arrow of -> Type dispositif', () => {
        page.clickClasse(0, 'mat-select-arrow mat-select-arrow-down');
    });
    it('Must be able to choose on the list -> Type dispositif', () => {
        page.clickClasse(9, 'mat-option-text');
    });

    it('Must be able to click on the arrow of -> Responsable Technique', () => {
        page.clickClasse(1, 'mat-select-arrow mat-select-arrow-down');
    });
    it('Must be able to choose on the list -> Responsable Technique', () => {
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to click on the green button and go on the other page', () => {
        page.clickClasse(1, 'mat-raised-button');
        sleep(10000);
    });
    it('Get -> nom dossier', () => {
        //page.getClasse("ng-star-inserted").getText().then(function(texte){console.log(page.getFromElementToAnother(texte,0,99));});
        page.getOneElementByClasse(0, "ng-star-inserted").getText().then(function (texte) { console.log(numeroDossier = (page.getWordInList(1, texte, " "))); });
    });
    it('Must be able to click on the arrow of -> Thematique', () => {
        page.clickClasse(0, 'mat-select-arrow-wrapper');
    });
    it('Must be able to choose several elements on the list -> Thematique', () => {
        page.clickClasse(0, 'mat-option-text');
        page.clickClasse(3, 'mat-option-text');
        page.clickClasse(5, 'mat-option-text');
        sleep(20);
        page.sendTab();
    });
    it('Must be able to fill the field -> Annee previsionnelle debut', () => {
        page.enterChamps(1, "1994", 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Annee previsionnelle fin', () => {
        page.enterChamps(1, "1995", 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to click on the arrow of -> Instance', () => {
        page.clickClasse(0, 'mat-select-arrow-wrapper-session');
    });
    it('Must be able to choose one element on the list -> Instance', () => {
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to click on the arrow of -> Session dans Instance choisie', () => {
        page.clickClasse(1, 'mat-select-arrow-wrapper-session');
    });
    it('Must be able to choose one element on the list -> Session dans Instance choisie', () => {
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to fill the field -> Exercice dans Deliberation', () => {
        page.enterChamps(2, "1995", 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Numero dans Deliberation', () => {
        page.enterChamps(2, "0000012156", 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to click on the date button of -> Deliberation', () => {
        page.clickClasse(6, 'mat-icon-button');
    });
    it('Must be able to choose a date in -> Deliberation', () => {
        page.clickClasse(0, 'mat-calendar-body-cell-content');
    });
    it('Must be able to click in one of the circles of -> Engagement financier', () => {
        page.clickClasse(0, 'mat-radio-outer-circle');
    });
    it('Must be able to click on the date button of -> Date signature', () => {
        page.clickClasse(7, 'mat-icon-button');
    });
    it('Must be able to choose a date in -> Date signature', () => {
        page.clickClasse(0, 'mat-calendar-body-cell-content');
    });
    it('Must be able to click on the date button of -> Date debut validite', () => {
        page.clickClasse(8, 'mat-icon-button');
    });
    it('Must be able to choose a date in -> Date debut validite', () => {
        page.clickClasse(21, 'mat-calendar-body-cell-content');
    });
    it('Must be able to click on the date button of -> Date fin validite', () => {
        page.clickClasse(9, 'mat-icon-button');
    });
    it('Must be able to choose a date in -> Date fin validite', () => {
        page.clickClasse(22, 'mat-calendar-body-cell-content');
    });
    it('Must be able to add a partner', () => {
        page.clickClasse(0, 'siga-bouton siga-form-addLine btn btn-default');
    });
    it('Must be able to click in the circle of -> Structure porteuse pour la ligne partenaire', () => {
        page.clickClasse(0, 'ion-android-radio-button-off siga-icon');
    });
    it('Must be able to fill the field -> Numero partenaire', () => {
        page.enterChamps(2, "00000000A", 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
        page.clickClasse(0, 'mat-tab-label-content');
    });
    it('Must be able to click on the arrow of -> Type partenaire', () => {
        page.clickClasse(1, 'mat-select-arrow-wrapper');
    });
    it('Must be able to choose one element on the list -> Type partenaire', () => {
        page.clickClasse(1, 'mat-option-text');
    });
    it('Must be able to fill the field -> Bonification subvention', () => {
        page.enterChamps(0, "10", 'directon-right mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Bonification avance', () => {
        page.enterChamps(0, "5", 'directon-right mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Modalites Specifiques', () => {
        page.enterChamps(0, "Fonctionne", ' siga-textarea mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to click on button -> Localisation', () => {
        page.clickClasse(2, 'mat-tab-label-content');
    });
    it('Siga-1055 1/3 -> Localisation', () => {
        page.clickClasse(2, 'mat-select-arrow-down');
        page.clickClasse(0, 'mat-option-text');
    });
    it('Siga-1055 2/3 -> Localisation', () => {
        page.clickClasse(3, 'mat-select-arrow-down');
        page.clickClasse(0, 'mat-option-text');
    });
    it('Siga-1055 3/3 -> Localisation', () => {
        page.clickClasse(4, 'mat-select-arrow-down');
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to click on the green button', () => {
        page.clickClasse(1, 'mat-raised-button');
        sleep(2000);
    });
});

describe('Dispositif Partenariat -> Research + modification with cancelling and return to the first page', function () {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.driver.manage().window().setSize(1280, 1024);
    });
    it('Must show -> accueil', () => {
        page.navigateTo(browser.params.adresse);
        expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it('Must show all buttons', () => {
        page.clickAttribut(1, 'span[ng-reflect-translate]');
        expect<any>(page.getByAttribut('span[ng-reflect-translate]').getText()).toEqual(['Accueil', 'Dispositifs de partenariat', 'Créer dispositif', 'Rechercher dispositif']);
    });
    it('Must be able to click on the button -> Rechercher dispositif', () => {
        page.clickAttribut(3, 'span[ng-reflect-translate]');
    });
    it('Must be able to click on the arrow of -> Type dispositif', () => {
        page.clickClasse(0, 'mat-select-arrow-wrapper-session');
    });
    it('Must be able to choose one element on the list -> Type dispositif', () => {
        page.clickClasse(9, 'mat-option-text');
    });
    it('Must be able to fill the field -> Numero increment', () => {
        page.enterChamps(0, page.getWordInList(1, numeroDossier, "-"), 'mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to click on the arrow of -> Responsable Technique', () => {
        page.clickClasse(1, 'mat-select-arrow-wrapper-session');
    });

    it('Must be able to choose one element on the list -> Responsable Technique', () => {
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to click on the green research button', () => {
        page.clickClasse(0, 'mat-raised-button');
    });
    it('Must be able to find at least one -> Dispositif', () => {
        page.clickClasse(36, 'ng-star-inserted');
        sleep(10000);
    });
    it('Must be able to add a line in -> Suivi financier', () => {
        page.clickClasse(1, 'siga-form-addLine btn btn-default');
    });
    it('Must be able to click on the arrow of -> Ligne dans Suivi financier', () => {
        page.getClasse('mat-select-arrow-wrapper');
        page.clickClasse(2, 'mat-select-arrow-wrapper');
    });
    it('Must be able to choose one element on the list -> Responsable Technique', () => {
        page.clickClasse(0, 'mat-option-text');
    });
    it('Must be able to fill the field -> Previsionnel des operation', () => {
        page.enterChamps(0, "10000", 'position-middle mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Avance', () => {
        page.enterChamps(0, "500", 'position-middle mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Subvention', () => {
        page.enterChamps(0, "200", 'position-middle mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
        page.clickClasse(0, 'position-middle mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid');
    });
    it('Must be able to fill the field -> Total des aides', () => {
        expect<any>(page.getClasse('position-middle mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-untouched ng-pristine ng-valid').getAttribute('ng-reflect-model')).toEqual(['700']);
    });
    it('Must be able to click on the button -> Accueil', () => {
        page.clickAttribut(0, 'span[ng-reflect-translate]');
    });
    it('Must be able to click on the button -> Quitter', () => {
        page.clickClasse(0, 'sizebuttonLeave mat-button');
        sleep(2000);
    });
});