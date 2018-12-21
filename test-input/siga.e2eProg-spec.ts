import { AppPage } from './siga.po';
import { browser, Browser } from 'protractor';

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}


describe('Test E2E Programme ->', function () {
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
        page.clickAttribut(1, 'span[_ngcontent-c6]');
        expect<any>(page.getByAttribut('span[_ngcontent-c6]').getText()).toEqual(['Accueil', 'Programme', 'Créer programme', 'Rechercher programme']);
    });

    it('Click sur le bouton -> Creer programme', () => {
        page.clickAttribut(2, 'span[_ngcontent-c6]');
    });

    it('Renseigne le champ -> Numero de programme', () => {
        page.enterChampsById('id_input_numero', '5');
    });

    it('Renseigne le champ -> annee de debut', () => {
        page.enterChampsById('id_input_anneeDebut', '2020');
    });

    it('Renseigne le champ -> annee de fin', () => {
        page.enterChampsById('id_input_anneeFin', '2022');
    });

    it('Click sur le bouton -> creer', () => {
        page.clickId('id_btn_creer');
    });

    it('Petite pause cafe avant de terminer :)', () => {
        sleep(5000);
    });
});
