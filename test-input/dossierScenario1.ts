import { AppPage } from "./siga.po";
import { browser, Browser, promise, ElementArrayFinder } from "protractor";

function sleep(temps: number) {
  browser.driver.sleep(temps); // sleep for demonstration reasons
}
let n: number = 0;
let theme = "AGRI - Agriculture";
let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";
let textInput = "Ceci est un test";

describe("************ Dossier Creation + Bénéficiaire + Ouvrage avec Enregistrement **********", function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
  });

  describe("SIGA-3087: Verifier/Signer", function() {
    it("Must show -> accueil dossier", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-3087: Must show all buttons", () => {
      page.clickAttribut(1, "span[translate]");
      sleep(400);
      page.clickAttribut(7, "span[translate]");
      sleep(400);
      page.clickAttribut(11, "span[translate]");
      sleep(400);
      page.clickAttribut(20, "span[translate]");
      sleep(400);
    });
    it("SIGA-3087: Must be able to click on  -> Verifier/Signer", () => {
      page.clickAttribut(12, "span[translate]");
      sleep(1000);
    });
    it("SIGA-3087: Must be able to click on the arrow of Thematique", () => {
      page.clickClasse(0, "mat-select-arrow-wrapper");
    });
    it("SIGA-3087: Must be able to select an option from Thematique", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3087: Must be able to click on the arrow of Procedure decision", () => {
      page.clickClasse(1, "mat-select-arrow-wrapper");
    });
    it("SIGA-3087: Must be able to select an option from Procedure decision", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3087: Must be able to click on the arrow of Anne", () => {
      page.clickClasse(2, "mat-select-arrow-wrapper");
    });
    it("SIGA-3087: Must be able to select an option from Anne", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3087: Must be able to click on the arrow of Date attribution", () => {
      page.clickClasse(3, "mat-select-arrow-wrapper");
    });
    it("SIGA-3087: Must be able to select an option from Date attribution", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3087: Must be able to supprimer the Responsable Administrative", () => {
      page.clickClasse(4, "mat-icon material-icons");
    });
    it("SIGA-3087: Must be able to click on the arrow of Responsable Administrative", () => {
      page.clickClasse(4, "mat-select-arrow-wrapper");
    });
    it("SIGA-3087: Must be able to select an option from Responsable Administrative", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("SIGA-3087: Must be able to fill the field -> Code Thematique", () => {
      page.enterChampsById("codeThema", "test");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to supprimer the Code Thematique value", () => {
      page.clickClasse(5, "mat-icon material-icons");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to fill the field -> Departement", () => {
      page.enterChampsById("departement", "123");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to supprimer the Departement value", () => {
      page.clickClasse(5, "mat-icon material-icons");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to fill the field -> Numero", () => {
      page.enterChampsById("rechNumero", "123");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to supprimer the Numero value", () => {
      page.clickClasse(5, "mat-icon material-icons");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to click on the radio button of RA", () => {
      page.clickClasse(0, "mat-radio-label-content");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to click on the radio button of CAA", () => {
      page.clickClasse(1, "mat-radio-label-content");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to click on the radio button of DDG", () => {
      page.clickClasse(2, "mat-radio-label-content");
      sleep(3000);
    });
    it("SIGA-3087: Must be able to click on the Recherche button", () => {
      page.clickId("recherche");
      sleep(3000);
    });
  });

  describe("SIGA-2522 + 3068 + 3061: Verification de la Interlocuteurs et le Responsable Administratif, Nature Operation", function() {
    it("Must show -> accueil dossier", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-3549: Must show all buttons 1/2", () => {
      page.clickAttribut(1, "span[translate]");
      sleep(400);
      page.clickAttribut(7, "span[translate]");
      sleep(400);
      page.clickAttribut(20, "span[translate]");
      sleep(400);
    });
    it("SIGA-3549: Must show all buttons 2/2", () => {
      expect<any>(page.getByAttribut("span[translate]").getText()).toEqual([
        "Accueil",
        "Dossiers",
        "Rechercher",
        "Créer",
        "Gérer prévisionnel",
        "Valider siège",
        "Valider Délégué/DGA",
        "Gérer session",
        "Préparer",
        "Saisir avis",
        "Attribuer les aides",
        "Suivre les dossiers",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Emettre recette",
        "Paramétrer",
        "Liste_valeur",
        "Nature_operation",
        "Session_decision",
        "Ligne",
        "Financeur"
      ]);
    });
    it("Must be able to click on  -> Rechercher", () => {
      page.clickAttribut(2, "span[translate]");
      sleep(1000);
      page.sendEnter();
      sleep(1000);
    });
    it("Must be able to choose in the list -> Phase", () => {
      page.clickId("rechPhase");
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex("P00", text), "mat-option-text");
        });
    });
    it("Must be able to click on the Research button", () => {
      page.clickId("boutonRechercheDossier");
      sleep(1000);
    });
    it("Must select an dossier from the list of researched options", () => {
      page.clickClasse(133, "ng-star-inserted");
    });
    it("Must be able to click on the Pagination Arrow", () => {
      page.clickClasse(1, "mat-tab-header-pagination-chevron");
      page.clickClasse(1, "mat-tab-header-pagination-chevron");
      page.clickClasse(1, "mat-tab-header-pagination-chevron");
      sleep(1000);
    });
    it("Must be able to click on Interlocuteurs Tab", () => {
      page.clickClasse(8, "mat-tab-label-content");
      sleep(1000);
    });
    it("SIGA-3068: Must be able to click on the arrow of Responsable Administratif", () => {
      page.clickClasse(2, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-3068: Must be able to choose an option from the list of Responsable Administratif", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-3068: Must be able to delete the Responsable Administratif value", () => {
      page.clickClasse(2, "mat-button mat-icon-button");
      sleep(1000);
    });
    it("SIGA-3068: Must be able to click on the arrow of Responsable Administratif", () => {
      page.clickClasse(2, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-3068: Must be able to choose an option from the list of Responsable Administratif", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("Must be able to fill the field -> Responsable administratif", () => {
      page.enterChampsById("responsableAdministratif", "test");
    });
    it("SIGA-3068: Must be able to delete the Responsable Administratif value", () => {
      page.clickClasse(2, "mat-button mat-icon-button");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to click on Ajouter interlocuteur", () => {
      page.clickId("addInterlocuteur");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to click on -> Recherche Interlocuteur", () => {
      page.clickId("boutonRecherInterlocuteur");
      page.sendEnter();
      sleep(1000);
    });
    it("SIGA-2522: Must be able to click on the arrow of Departement", () => {
      page.clickClasse(8, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to select a value of Departement", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to click on -> Recherche Interlocutuer", () => {
      page.clickId("recherche_button");
      page.sendEnter();
      sleep(1000);
    });
    it("SIGA-2522: Choix dans la liste de resultats", () => {
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex("01262000A\nDESAUTEL S.A.\nActif", text),
            "ng-star-inserted"
          );
        });
    });
    it("SIGA-2522: Must be able to click on the arrow of Role", () => {
      page.clickClasse(3, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to select an option from Role", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to delete the Role value", () => {
      page.clickId("buttonCloseRole");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to click on the arrow of Role", () => {
      page.clickClasse(3, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-2522: Must be able to select an option from Role", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to click on the arrow of Nature Operation", () => {
      page.clickClasse(7, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to choose an option from Nature Operation", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to click on the arrow of Nature Operation", () => {
      page.clickClasse(7, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to choose an option from Nature Operation", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to click on the arrow of Nature Operation", () => {
      page.clickClasse(7, "mat-select-arrow-wrapper");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to choose an option from Nature Operation", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(1000);
    });
    it("SIGA-3061: Must be able to enter text in the Nature operation field ", () => {
      page.enterChampsById("natureOperation", "210");
      page.sendEnter();
      page.sendTab();
    });
  });

  describe("SIGA-3549: Verification de la Page Principale", function() {
    it("Must show -> accueil dossier", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-3549: Must show all buttons 1/2", () => {
      page.clickAttribut(1, "span[translate]");
      sleep(400);
      page.clickAttribut(7, "span[translate]");
      sleep(400);
      page.clickAttribut(20, "span[translate]");
      sleep(400);
    });
    it("SIGA-3549: Must show all buttons 2/2", () => {
      expect<any>(page.getByAttribut("span[translate]").getText()).toEqual([
        "Accueil",
        "Dossiers",
        "Rechercher",
        "Créer",
        "Gérer prévisionnel",
        "Valider siège",
        "Valider Délégué/DGA",
        "Gérer session",
        "Préparer",
        "Saisir avis",
        "Attribuer les aides",
        "Suivre les dossiers",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Emettre recette",
        "Paramétrer",
        "Liste_valeur",
        "Nature_operation",
        "Session_decision",
        "Ligne",
        "Financeur"
      ]);
    });
    it("SIGA-3549: Must be able to click on the Ligne -> Ligne", () => {
      page.clickAttribut(24, "span[translate]");
    });
    it("Must be able to click on the arrow of -> Thematique", () => {
      page.clickCss(0, ".mat-select-arrow-wrapper");
    });
    it("Must be able to select a value from -> Thematique", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("Must be able to click on the button -> Rechercher", () => {
      page.clickClasse(0, "mat-raised-button");
    });
    it("Must be able to delete the chosen Thematique -> Supprimer", () => {
      page.clickClasse(0, "mat-icon material-icons");
    });
    it("Must be able to click on the button -> Rechercher", () => {
      page.clickClasse(0, "mat-raised-button");
    });
    it("Must be able to click on the arrow of -> Valide", () => {
      page.clickCss(1, ".mat-select-arrow-wrapper");
    });
    it("Must be able to select a value from -> Valide", () => {
      page.clickClasse(1, "mat-option-text");
    });
    it("Must be able to click on the button -> Rechercher", () => {
      page.clickClasse(0, "mat-raised-button");
    });
    it("Must be able to delete the chosen Valide -> Supprimer", () => {
      page.clickClasse(0, "mat-icon material-icons");
    });
    it("Must be able to click on the button -> Rechercher", () => {
      page.clickClasse(0, "mat-raised-button");
    });
    it("Must be able to click on the arrow of -> Items per page", () => {
      page.clickCss(2, ".mat-select-arrow-wrapper");
    });
    it("Must be able to select a value from -> Items per page", () => {
      page.clickClasse(2, "mat-option-text");
    });
    it("Must be able to click on the arrow of -> Items per page", () => {
      page.clickCss(2, ".mat-select-arrow-wrapper");
    });
    it("Must be able to select a value from -> Items per page", () => {
      page.clickClasse(1, "mat-option-text");
    });
    it("Must be able to click on the RIGHT ARROW -> Ligne list", () => {
      page.clickClasse(0, "mat-paginator-navigation-next mat-icon-button");
    });
    it("Must be able to click on the the icon for -> Fin validite", () => {
      page.clickClasse(0, "mat-icon-button mat-datepicker-toggle");
    });
    it("Must be able to to choose the date in -> Fin validite", () => {
      page.clickClasse(0, "mat-calendar-body-cell-content");
    });
    it("Must be able to click on the button -> Rechercher", () => {
      page.clickClasse(0, "mat-raised-button");
      sleep(2000);
      page.clickClasse(0, "sizebuttonSave mat-button ng-star-inserted");
    });
    it("Must be able to input text  -> Libelle field", () => {
      page.enterChamps(
        2,
        textInput,
        "mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"
      );
    });
  });
  describe("      -> Creation dossier", function() {
    it("Must be able to click on the first button -> Creer Dossier", () => {
      page.clickAttribut(3, "span[translate]");
    });
    it("Must be able to click on the arrow of -> Thematique", () => {
      page.clickCss(0, "#create-dosier .mat-select-arrow-wrapper");
    });
    it("Must be able to choose on the list -> Thematique", () => {
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
    });
    it("Must be able to click on the arrow of -> Departement", () => {
      page.clickCss(1, "#create-dosier .mat-select-arrow-wrapper");
    });
    it("Must be able to choose on the list -> Departement", () => {
      page.clickCss(0, "#optionDepartement .mat-option-text");
      sleep(400);
    });
    it("Must be able to fill the field -> Intitule", () => {
      page.clickId("champsIntitule");
      page.sendMots("test");
    });
    it("1/4 Preparation -> Recherche Beneficiaire", () => {
      page.clickId("boutonRechercheBenef");
    });
    it("2/4 Preparation -> Departement du bénéficiaire", () => {
      page.clickId("rechDepartement");
    });
    it("3/4 Preparation -> Choix Departement", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("4/4 Preparation -> Click Rechercher", () => {
      page.clickId("recherche_button");
    });
    it("SIGA-922 -> Choix dans la liste de resultats", () => {
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex("01262000A\nDESAUTEL S.A.\nActif", text),
            "ng-star-inserted"
          );
        });
    });
    it("Must be able to click on the button -> Enregistrer", () => {
      page.clickId("enrigistrer");
      sleep(1000);
    });
    it("Get -> nom dossier", () => {
      //page.getClasse("ng-star-inserted").getText().then(function(texte){console.log(page.getFromElementToAnother(texte,50,99));});
      page
        .getOneElementByClasse(89, "ng-star-inserted")
        .getText()
        .then(function(texte) {
          numeroDossier = page.getWordInList(1, texte, " ");
          console.log(numeroDossier);
        });
    });
  });

  describe("      -> Ajout autre parametres", function() {
    it("Must be able to click on the date button -> Date de la demande", () => {
      sleep(400);
      page.clickId("dateDemande");
    });
    it("Must be able to to choose the date in -> Date de la demande", () => {
      page.clickClasse(0, "mat-calendar-body-cell-content");
    });
    it("Must be able to click on the date button  -> Date complet", () => {
      page.clickId("dateComplet");
    });

    it("Must be able to to choose the date in -> Date complet", () => {
      page.clickClasse(0, "mat-calendar-body-cell-content");
      sleep(400);
    });

    it("Must be able to click on the arrow of -> Priorite", () => {
      page.clickId("priorite");
    });
    it("Must be able to choose on the list -> Priorite", () => {
      page.clickClasse(0, "mat-option-text");
    });
    it("Must be able to click on the arrow of -> Session decision", () => {
      page.clickId("sessionDecision");
    });
    it("Must be able to choose on the list -> Session decision", () => {
      page.clickClasse(0, "mat-option-text");
    });
  });

  describe("      -> Nature operation + Aides", function() {
    it("Must be able to navigate to Recapitulatif des aides -> Click Recapitulatif des aides  ", () => {
      page.sendFlecheBasN(3);
      page.clickClasse(0, "mat-tab-label-content");
    });
    it("Must be able to click on the arrow of -> Nature Operation", () => {
      page.clickId("natureOperation");
      sleep(400);
    });
    it("Must be able to choose several elements on the list -> Nature Operation", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(400);
      page.sendFlecheBasN(15);
    });
    it("Must be able to add labbel -> Ajouter labbel", () => {
      //page.enterChamps(0, "test", "siga-uppercase-input mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-pristine ng-invalid ng-touched");
      page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
    });
    it("Must be able to enter input cout -> Ajouter cout", () => {
      page.enterChampsByCss(0, textInput, ".siga-border-bottom input");
    });
    it("Must be able to add aides  -> Ajouter cout taux avance", () => {
      page.clickId("tauxAvance");
      page.sendMots("1");
    });
    it("Must be able to add aides  -> Ajouter cout taux subvention", () => {
      page.clickId("tauxSubvention");
      page.sendMots("1");
    });
    it("Must be able to add aides  -> Ajouter cout taux specifique", () => {
      page.clickId("tauxSpecifique");
      page.sendMots("10");
    });
    it("Must be able to fill spécificité de calcul ", () => {
      page.enterChampsByCss(0, textInput, ".specifique textarea");
    });
    it("Must be able to validate -> Click Enregistrer", () => {
      page.clickId("enrigistrerDossier");
      page.sendTab();
      sleep(1000);
    });

    describe("      -> Nature Operation - Ouvrage", function() {
      it("Must be able to click on the button -> Ouvrages", () => {
        page.clickClasse(10, "mat-tab-label-content");
      });

      it("Must be able to add Ouvrage -> Recherche Ouvrage", () => {
        page.clickClasse(
          0,
          "siga-button siga-taille-image-plus siga-form-addLine btn btn-default siga-form-confirm ion-ios-plus-outline siga-form-invalid"
        );
        page.clickId("boutonRechercheOuvrage");
      });

      it("Must be able to add ouvrage -> Type ouvrage", () => {
        page.clickId("typeOuvrage");
        sleep(400);
        page
          .getClasse("mat-option-text")
          .getText()
          .then(function(text) {
            page.clickClasse(
              page.findIndex("EIP - Etablissement industriel", text),
              "mat-option-text"
            );
          });
      });

      it("Must be able to add ouvrage -> Etat ouvrage", () => {
        page.clickId("etatOuvrage");
        sleep(400);
      });

      it("Must be able to add ouvrage -> Choix dans etat ouvrage", () => {
        page
          .getClasse("mat-option-text")
          .getText()
          .then(function(text) {
            page.clickClasse(
              page.findIndex("EXPL - Exploitation", text),
              "mat-option-text"
            );
          });
      });

      it("Must be able to add ouvrage -> Departement ouvrage", () => {
        page.clickId("departementOuvrage");
        sleep(400);
      });

      it("Must be able to add ouvrage -> Choix departement ouvrage", () => {
        page
          .getClasse("mat-option-text")
          .getText()
          .then(function(text) {
            page.clickClasse(
              page.findIndex("31 - Haute-Garonne", text),
              "mat-option-text"
            );
          });
      });

      it("Must be able to add ouvrage -> Commune ouvrage", () => {
        page.clickId("communeOuvrage");
        page
          .getClasse("mat-option-text")
          .getText()
          .then(function(text) {
            page.clickClasse(
              page.findIndex("31555 - Toulouse", text),
              "mat-option-text"
            );
            page.sendTab();
          });
      });

      it("Must be able to add ouvrage -> libelle ouvrage", () => {
        page.sendMots("MICROTURBO");
      });

      it("Must be able to add ouvrage -> Rechercher ouvrage", () => {
        page.clickId("rechercheOuvrage");
        page.sendFlecheBasN(6);
      });

      it("SIGA-647 11 -> Ajouter un ouvrage", () => {
        page
          .getClasse(
            "mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"
          )
          .getText()
          .then(function(text) {
            page.clickClasse(
              page.findIndex("MICROTURBO", text) - 2,
              "mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"
            );
          });
        sleep(400);
        page.clickId("buttonValidationRechercheOuvrageMultiple");
      });
    });

    describe("      -> Nature Operation - Localisation", function() {
      it("Must be able to navigate to Localisation -> Click Localisation", () => {
        page.clickClasse(11, "mat-tab-label-content");
        sleep(400);
      });
      it("Must be able to click on Localisation pertinente button -> Click Localisation pertinente", () => {
        page.clickClasse(1, "mat-slide-toggle-thumb");
        sleep(400);
      });
      it("Must be able fill Localisation -> Click region", () => {
        // page.clickClasse(3,"mat-select-arrow-wrapper");
        page.clickId("inputRegion");
      });
      it("Must be able fill Localisation -> Select region", () => {
        page.clickClasse(0, "mat-option-text");
      });

      it("Must be able fill Localisation -> Click department", () => {
        page.clickId("inputDepartement");
      });
      it("Must be able fill Localisation -> Select departement", () => {
        page.clickClasse(0, "mat-option-text");
      });

      it("Must be able fill Localisation -> Click commune", () => {
        page.clickId("inputCommune");
      });
      it("Must be able fill Localisation -> Select commune", () => {
        page.clickClasse(0, "mat-option-text");
        page.sendFlecheBasN(4);
      });
      it("Must be able fill Localisation -> Click Bv Gestion", () => {
        page.clickId("inputBV");
      });
      it("Must be able fill Localisation -> Choix Bv Gestion", () => {
        page.clickClasse(1, "mat-option-text");
        page.sendFlecheBasN(3);
      });

      it("Must be able to add mass d'eau -> Click ajouter masse d'eau ", () => {
        page.clickId("ajouterMasseEau");
        sleep(400);
        page.sendFlecheBasN(15);
      });

      it("Must be able to add mass d'eau -> Click ajouter code masse d'eau ", () => {
        page.enterChampsByCss(0, "FRFRR68_3", "siga-app-code-masse-eau-cell");
        page.sendTab();
        sleep(400);
      });
      it("Must be able to add mass d'eau -> Verifier l'ajouter de la masse d'eau ", () => {
        page
          .getClasse("ng-star-inserted")
          .getText()
          .then(function(texte1) {
            page
              .getOneElementByClasse(
                page.findIndex(
                  "FRFRR68_3\nRuisseau d'Aujou\nRivière\nLot",
                  texte1
                ),
                "ng-star-inserted"
              )
              .getText()
              .then(function(texte2) {
                expect<any>(page.getWordInList(0, texte2, "\n")).toEqual(
                  "FRFRR68_3"
                );
                expect<any>(page.getWordInList(1, texte2, "\n")).toEqual(
                  "Ruisseau d'Aujou"
                );
                expect<any>(page.getWordInList(2, texte2, "\n")).toEqual(
                  "Rivière"
                );
                expect<any>(page.getWordInList(3, texte2, "\n")).toEqual("Lot");
              });
          });
      });
    });

    describe("      -> Nature Operation - Autre Infos ", function() {
      it("Must be able to navigate to Autre infos  -> Click autre info", () => {
        page.sendFlecheHautN(10);
        page.clickClasse(12, "mat-tab-label-content");
        sleep(400);
      });

      it("Must be able fill thémes  -> Click théme", () => {
        page.clickId("infosTheme");
        sleep(400);
      });

      it("Must be able fill thémes  -> Choix multiple théme", () => {
        page.clickClasse(0, "mat-option mat-option-multiple ng-star-inserted");
        page.clickClasse(1, "mat-option mat-option-multiple ng-star-inserted");
        page.clickClasse(2, "mat-option mat-option-multiple ng-star-inserted");
        page.sendTab();
        page.sendFlecheBasN(3);
      });
    });

    describe("      -> Verifier ouvrage", function() {
      it("Must be able to navigate to Ouvrage  -> Click Ouvrage", () => {
        page.clickClasse(10, "mat-tab-label-content");
        sleep(400);
      });
      it("SIGA-2229 -> Type Numero Intitule Statut ouvrage", () => {
        sleep(400);
        page
          .getClasse("ng-star-inserted")
          .getText()
          .then(function(texte1) {
            page
              .getOneElementByClasse(
                page.findIndex(
                  "EIP\n31555113\nMICROTURBO\nExploitation",
                  texte1
                ),
                "ng-star-inserted"
              )
              .getText()
              .then(function(texte2) {
                expect<any>(page.getWordInList(0, texte2, "\n")).toEqual("EIP");
                expect<any>(page.getWordInList(1, texte2, "\n")).toEqual(
                  "31555113"
                );
                expect<any>(page.getWordInList(2, texte2, "\n")).toEqual(
                  "MICROTURBO"
                );
                expect<any>(page.getWordInList(3, texte2, "\n")).toEqual(
                  "Exploitation"
                );
              });
            sleep(400);
            page.sendTab();
          });
      });
    });
  }); //fin de nature d'operation

  describe("      -> Description Générale", function() {
    it("Must be able to navigate to Description générale -> Click Description générale ", () => {
      page.sendFlecheHautN(12);
      page.clickClasse(1, "mat-tab-label-content");
    });
    it("Must be able to fill Description générale -> Fill Description de l'operation ", () => {
      page.clickId("descriptionOperation");
      page.sendMots(textInput);
    });
    it("Must be able to fill Description générale -> Fill resultat attendus ", () => {
      page.clickId("resultatsAttendus");
      page.sendMots(textInput);
    });
    it("Must be able to fill Dérogatoire -> Click Drogatoire and fill justification", () => {
      page.clickId("boutonDergatoir");
      sleep(400);
      page.sendMots(textInput);
    });
    it("Must be able to fill Dépassement VMR/marge avenir -> Click  Dépassement VMR/marge avenir ", () => {
      sleep(500);
      page.clickId("boutonDepassementVmr");
      sleep(200);
    });
    it("Must be able to fill Dépassement VMR/marge avenir -> Fill justification", () => {
      page.sendMots(textInput);
      page.sendFlecheBasN(9);
    });

    it("Must be able to add piece pour solde -> Click piece pour solde", () => {
      page.clickId("piecesPourSolde");
      sleep(400);
      page.clickClasse(0, "mat-option mat-option-multiple ng-star-inserted");
      page.clickClasse(1, "mat-option mat-option-multiple ng-star-inserted");
      sleep(20);
      page.sendTab();
      page.sendFlecheBasN(2);
    });

    it("Must be able to add disposition technique particuliere -> Click disposition technique particuliere", () => {
      page.clickId("dispositionTechniqueParticuliere");
      sleep(400);
      page.clickClasse(0, "mat-option mat-option-multiple ng-star-inserted");
      page.clickClasse(1, "mat-option mat-option-multiple ng-star-inserted");
      sleep(20);
      page.sendTab();
      page.sendFlecheBasN(5);
    });
    it("Must be able to modalité de versement des aides non standard -> Click versement des aides non standard and fill ", () => {
      page.clickClasse(0, "mat-radio-label-content");
      sleep(400);
      page.sendMots(textInput);
    });

    it("Must be able to add Modalité(s) de réduction des aides -> Click Modalité(s) de réduction des aides", () => {
      page.clickId("modalitesRductionAides");
      sleep(400);
      page.clickClasse(0, "mat-option mat-option-multiple ng-star-inserted");
      page.clickClasse(1, "mat-option mat-option-multiple ng-star-inserted");
      sleep(400);
      page.sendTab();
      page.sendFlecheBasN(3);
    });
  });

  describe("      -> Prévisionnel ", function() {
    it("Must be able to fill the Previsionnel form -> Click Previsionnel", () => {
      page.sendTab();
      page.sendFlecheHautN(21);
      page.clickClasse(2, "mat-tab-label-content");
    });

    it("Must be able to fill the Prévisionnel form -> Remplir année previsionnelle", () => {
      page.clickId("anneePrevisionnel");
      page.sendMots("2030");
      sleep(400);
    });
    it("Must be able to fill the Prévisionnel form -> Remplir année previsionnelle", () => {
      page.clickId("sesionPrevisionnel2");
      sleep(400);
      page.clickClasse(0, "mat-option-text");
    });
    it("Must be able to fill the Prévisionnel  form -> Remplir Typologie", () => {
      page.clickClasse(0, "mat-radio-container");
    });
    it("Must be able to click on the button -> Rattacher DP", () => {
      page.clickId("rattacherDP");
    });

    it("Must be able to click on the arrow of -> Type DP", () => {
      page.clickClasse(4, "mat-select-arrow-wrapper");
    });

    it("Must be able to choose in the list -> Type DP", () => {
      page.clickClasse(0, "mat-option-text");
    });

    it("Must be able to click on the arrow of ->Numéro DP", () => {
      page.clickClasse(5, "mat-select-arrow-wrapper");
    });

    it("Must be able to choose in the list -> Numéro DP", () => {
      page.clickClasse(0, "mat-option-text");
    });

    it("Verify the availability of -> Numero DP", () => {
      page
        .getClasse(
          "material-hint-error errorFormDispositif error-spec mat-hint ng-star-inserted"
        )
        .getText()
        .then(function(texte) {
          if (
            texte[0] === "Dispositif inconnu !" ||
            "Aucun dispositif trouvé pour ce type"
          ) {
            page.clickClasse(0, "siga-tooltip siga-icon ion-trash-a");
          }
        });
      sleep(400);
    });

    it("SIGA-2147 -> Origine de la demande initiale 1", () => {
      page.clickId("origineDemandeInitiale");
      sleep(400);
    });

    it("SIGA-2147 -> Origine de la demande initiale 2 ", () => {
      page.clickClasse(0, "mat-option-text");
    });

    it("Must be able to fill the Prévisionnel  form -> Clicker sur la ligne ", () => {
      page.clickClasse(3, "mat-select-arrow-wrapper");
      sleep(400);
    });

    it("Must be able to fill the Prévisionnel form -> Choisir la ligne ", () => {
      page.clickClasse(0, "mat-option-text");
      sleep(400);
    });

    it("Must be able to fill the Prévisionnel form -> Ajouter operation", () => {
      page.enterChampsByCss(0, "5000", "siga-input-cell2");
    });

    it("Must be able to fill the Prévisionnel form -> Ajouter aides", () => {
      page.enterChampsByCss(0, "1000", "siga-input-cell3");
    });
  });

  describe("      -> Plan Financement", function() {
    it("Must be able to click on the button -> Plan financement", () => {
      page.clickClasse(3, "mat-tab-label-content");
    });

    it("Must be able to click on the button -> Ajouter co-financeur", () => {
      page.clickId("ajouterCoFinanceur");
    });

    it("Must be able to click on the arrow of -> Co-financeur", () => {
      page.clickClasse(2, "mat-select-arrow-wrapper");
    });

    it("Must be able to choose in the list -> Co-financeur", () => {
      page.clickClasse(0, "mat-option-text");
    });

    it("Must be able to fill the field -> Precision", () => {
      page.enterChampsById("precision", "precision test");
    });
    it("Must be able to enter input cout -> Ajouter cout", () => {
      page.enterChampsById("taux", "0");
    });
  });
  // describe("     -> Bloc note", () => {
  //   it('Must be able to click on the button -> Bloc Notes', () => {
  //     page.sendFlecheHautN(16);
  //     page.clickClasse(1, "mat-tab-header-pagination-chevron");
  //     page.clickClasse(5, "mat-tab-label-content");
  //     sleep(20000);
  //   });
  //   it('Must be able to fill bloc notes -> insert on bloc note', () => {
  //     // page.enterChamps(0,"test","");
  //     page.clickClasse(0, "cke_editable cke_editable_themed cke_contents_ltr cke_show_borders");
  //     page.sendMots(textInput);
  //   });

  // });
  describe("Information  spécifiques", function() {
    it("Must be able to click on the button -> Information  spécifique ", () => {
      page.clickClasse(1, "mat-tab-header-pagination-chevron");
      page.clickClasse(1, "mat-tab-header-pagination-chevron");
      page.clickClasse(7, "mat-tab-label-content");
      sleep(400);
    });
    it("Must be able to fill Surface concernées", () => {
      page.clickCss(0, "#siga-valeur-number");
      page.sendMots("100");
    });
    it("Must be able to fill Nombre d'agriculteurs concernés", () => {
      page.clickCss(1, "#siga-valeur-number");
      page.sendMots("10");
    });
    it("Must be able to fill Nombre de collectivités concernées", () => {
      page.clickCss(2, "#siga-valeur-number");
      page.sendMots("10");
    });
  });

  it("Must be able to validate -> Click Enregistrer", () => {
    page.sendFlecheBasN(12);

    page.clickId("enrigistrerDossier");
    sleep(2000);
    page.clickId("basculerDossier");
    sleep(2000);
    page.sendEnter();
    sleep(2000);
  });
});

describe("************ Dossier -> Rechercher + Modification + Remarques ************", function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
  });
  it("Must be able to click on the first button -> Rechercher", () => {
    page.clickAttribut(2, "span[translate]");
    sleep(1000);
    page.sendEnter();
    sleep(1000);
  });

  it("Must be able to click on the arrow of -> Thematique", () => {
    page.clickId("rechThematique");
  });
  it("Must be able to choose on the list -> Thematique", () => {
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
  });
  it("Must be able to click on the arrow of -> Departement", () => {
    page.clickId("rechDepartement");
  });
  it("Must be able to choose in the list -> Departement", () => {
    page.clickClasse(0, "mat-option-text");
    page.sendTab();
  });
  it("Must be able to not fill the field -> Numero", () => {
    page.sendTab();
  });
  it("Must be able to fill the field -> Beneficiaire", () => {
    page.sendTab();
    page.enterChampsById("benef", "01262000A ");
  });
  it("Must be able to choose in the list -> Phase", () => {
    page.clickId("rechPhase");
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex("T10", text), "mat-option-text");
      });
  });
  it("Must be able to click on the Research button", () => {
    page.clickId("boutonRechercheDossier");
    sleep(1000);
  });
  it("It must navigate to dossier", () => {
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text),
          "ng-star-inserted"
        );
      });
    sleep(1000);
  });
  it("Prepare 1/3 -> Remarques", () => {
    page.sendFlecheBasN(19);
    page.clickId("remarqueDossier");
    sleep(5000);
    page.clickId("button");
  });
  it("Prepare 2/3 -> Remarques", () => {
    page.clickClasse(3, "mat-select-arrow-wrapper");
    page.clickClasse(0, "mat-option-text");
  });
  it("Prepare 3/3 -> Remarques", () => {
    page.clickId("remarqueText");
    sleep(400);
    page.sendMots(textInput);
    page.clickId("closeRemarque");
  });
  it("Enrigistrer", () => {
    page.clickId("enrigistrerDossier");
    sleep(2000);
  });
  it("Go back to Accueil", () => {
    page.sendFlecheHautN(7);
    page.clickAttribut(0, "span[translate]");
    sleep(1000);
    page.sendEnter();
    sleep(1000);
  });
  it("    -> Reprendre le dossier ", () => {
    page.clickClasse(1, "ng-star-inserted");
    sleep(2000);
  });
  it(numeroDossier + "   -> Remarques réponse 1/2", () => {
    page.clickClasse(
      0,
      "siga-numero-dossier mat-cell cdk-column-numDossier mat-column-numDossier ng-star-inserted"
    );
    sleep(400);
  });
  it(numeroDossier + "   -> Remarques réponse 2/2", () => {
    page.clickId("response");
    sleep(2000);
    page.clickId("textAreaResponse");
    page.sendMots(textInput);
    page.sendEnter();
    sleep(2000);
    page.clickId("closeRemarque");
  });

  it("Enrigistrer", () => {
    page.clickId("enrigistrerDossier");
    sleep(2000);
  });
  it("Go back to Accueil", () => {
    page.sendFlecheHautN(7);
    page.clickAttribut(0, "span[translate]");
    sleep(1000);
    page.sendEnter();
    sleep(1000);
  });

  it("    -> Reprendre le dossier ", () => {
    page.clickClasse(1, "ng-star-inserted");
    sleep(2000);
  });
  it("Go back to Accueil", () => {
    page.sendFlecheHautN(7);
    page.clickAttribut(0, "span[translate]");
    sleep(1000);
    page.sendEnter();
    sleep(1000);
  });
  it("    -> Click on the checkbox of the Dossier ", () => {
    page.clickClasse(
      0,
      "mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"
    );
    sleep(2000);
  });
  it("    -> Click on the the Archive button of the Remarques ", () => {
    page.clickClasse(0, "ion-close siga-form-cancel siga-archive-content");
    sleep(2000);
  });
  it("    -> Click on a dossier from remarques sans responses ", () => {
    page.clickClasse(
      0,
      "siga-numero-dossier mat-cell cdk-column-numDossier mat-column-numDossier ng-star-inserted"
    );
    sleep(2000);
  });
  it("    -> Supprimer le destinataire ", () => {
    page.clickClasse(1, "mat-button mat-icon-button ng-star-inserted");
    sleep(2000);
  });
  it("    -> Press on a destinataire ", () => {
    page.enterChampsById("recipId", "MYRIAM");
    page.sendEnter();
    sleep(5000);
    page.clickId("closeRemarque");
  });
  it("Enrigistrer", () => {
    page.clickId("enrigistrerDossier");
    sleep(2000);
  });
  it("Go back to Accueil", () => {
    page.sendFlecheHautN(7);
    page.clickAttribut(0, "span[translate]");
    sleep(1000);
    page.sendEnter();
    sleep(1000);
  });
  it("Must be able to get nombre de remarques sans responses", () => {
    page
      .getCss(".mat-expansion-panel .mat-expanded")
      .getText()
      .then(function(text) {
        console.log("le nombre de remarques sans responses est : " + text[34]);
        n = text[35];
      });
  });
});

describe("************ Dossier -> Gérer prévisionnel+  Valider siege + Valider Délégué/DGA + Gérer session ************", function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver
      .manage()
      .window()
      .setSize(1280, 1024);
    sleep(1000);
  });
  describe("Verification de la page principale", function() {
    it("Must show -> accueil dossier", () => {
      page.navigateTo(browser.params.adresse);
      expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
    });
    it("SIGA-679 -> Utilisateur", () => {
      var texte = page
        .getClasse("container topContainer")
        .getText()
        .then(function(texte) {
          expect<any>(page.getWordInString(0, texte, " ")).toEqual("Bienvenue");
          nomUtilisateur =
            page.getWordInString(1, texte, " ") +
            " " +
            page.getWordInString(2, texte, " ");
          expect<any>(page.getWordInString(3, texte, " ")).toEqual("sur");
        });
    });
    it("Must show all buttons 1/2", () => {
      page.clickAttribut(1, "span[translate]");
      sleep(400);
      page.clickAttribut(7, "span[translate]");
      sleep(400);
      page.clickAttribut(20, "span[translate]");
      sleep(400);
    });
    it("Must show all buttons 2/2", () => {
      expect<any>(page.getByAttribut("span[translate]").getText()).toEqual([
        "Accueil",
        "Dossiers",
        "Rechercher",
        "Créer",
        "Gérer prévisionnel",
        "Valider siège",
        "Valider Délégué/DGA",
        "Gérer session",
        "Préparer",
        "Saisir avis",
        "Attribuer les aides",
        "Suivre les dossiers",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Emettre recette",
        "Paramétrer",
        "Liste_valeur",
        "Nature_operation",
        "Session_decision",
        "Ligne",
        "Financeur"
      ]);
    });
  });
  describe("Gestion prévisionnel", function() {
    it("Must be able to navigate to Previsionnel", () => {
      //  Gerer prévisionnel
      page.clickAttribut(4, "span[translate]");
      sleep(1000);
      page.sendEnter();
      sleep(1000);
    });
    it("Must be able to search for dossiers 1/2", () => {
      page.clickId("thematique");
      sleep(400);
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
      sleep(400);
      // page.clickId("phase");
      // sleep(400);
      // page.getClasse('mat-option-text').getText().then(function (text) {
      //   page.clickClasse(page.findIndex("T10", text), 'mat-option-text');
      //   sleep(400);
      // });
    });
    it("Must be able to search for dossiers 2/2", () => {
      page.clickId("searchResultat");
      sleep(1000);
    });
    it("Must be able to get nombre de dossiers", () => {
      page
        .getCss(".card-body  strong")
        .getText()
        .then(function(text) {
          console.log("le nombre de dossiers est : " + text[0]);
          n = text[0];
        });
    });
    it("Must be able to set session et priorité", () => {
      for (var i = 0; i < n * 2; i++) {
        page.clickCss(i, ".card-body .mat-select-arrow-wrapper");
        sleep(400);
        page.clickClasse(0, "mat-option-text");
        sleep(400);
      }
    });

    it("Enrigistrer", () => {
      page.clickId("saveButton");
      sleep(10000);
    });
  });
  describe("Must be able to go from T10 to T15", function() {
    // Recherche + basculer
    it("Must be able to click on the first button -> Rechercher", () => {
      page.clickAttribut(2, "span[translate]");
      sleep(1000);
      page.sendEnter();
      page.sendTab();
      sleep(1000);
    });

    it("Must be able to click on the arrow of -> Thematique", () => {
      page.clickId("rechThematique");
    });
    it("Must be able to choose on the list -> Thematique", () => {
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
    });
    it("Must be able to click on the arrow of -> Departement", () => {
      page.clickId("rechDepartement");
    });
    it("Must be able to choose in the list -> Departement", () => {
      page.clickClasse(0, "mat-option-text");
      page.sendTab();
    });
    it("Must be able to not fill the field -> Numero", () => {
      page.sendTab();
    });
    it("Must be able to fill the field -> Beneficiaire", () => {
      page.sendTab();
      page.enterChampsById("benef", "01262000A ");
    });
    it("Must be able to choose in the list -> Phase", () => {
      page.clickId("rechPhase");
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex("T10", text), "mat-option-text");
        });
    });
    it("Must be able to click on the research", () => {
      page.clickId("boutonRechercheDossier");
      sleep(1000);
    });
    it("It must navigate to dossier", () => {
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text),
            "ng-star-inserted"
          );
        });
      sleep(1000);
    });
    it("Prepare 1/3 -> Click valider", () => {
      page.clickId("basculerDossier");
      page.sendFlecheBasN(19);
    });
  });

  it("Must be able to go from T15 to T20 1/2", () => {
    //  valider délégué/DGA
    page.clickAttribut(6, "span[translate]");
    sleep(400);
    page.sendEnter();
    sleep(1000);
    page.clickId("thematique");
    sleep(400);
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
    sleep(400);
    page.clickId("delegue");
    sleep(400);
    page.clickId("recherche");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
  });
  it("Must be able to go from T15 to T20 2/2", () => {
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 4,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickClasse(1, "mat-raised-button");
    sleep(400);
  });

  it("Must be able to go from T20 to T25", () => {
    //  valider siege
    page.clickAttribut(5, "span[translate]");
    sleep(400);
    page.clickId("thematique");
    sleep(400);
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
    sleep(400);
    page.clickId("tech");
    sleep(400);
    page.clickId("recherche");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
    sleep(400);
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 2,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickId("validerDevalider");
    sleep(3000);
    page.clickId("admin");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
    sleep(400);
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 2,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickId("validerDevalider");
    sleep(400);
  });
  describe("Must be able to go from T25 to T30", () => {
    it("Must be able to navigate to VALIDER DÉLÉGUÉ/DGA ", () => {
      page.clickAttribut(6, "span[translate]");
    });
    it("Must be able to search dossier 1/2", () => {
      page.clickId("thematique");
      sleep(400);
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
      sleep(400);
    });
    it("Must be able to search dossier 2/2", () => {
      page.clickClasse(3, "mat-radio-label-content");
      sleep(400);
      page.clickId("recherche");
      sleep(400);
    });
    it("Must be able to validate ", () => {
      page.clickClasse(0, "mat-checkbox-inner-container");
      sleep(400);
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text) - 4,
            "ng-star-inserted"
          );
        });
      sleep(400);
      page.clickId("validerDevalider");
      sleep(400);
    });
  });

  describe("Must be able to go from T30 to T35 ", function() {
    // Recherche + basculer
    it("Must be able to click on the first button -> Rechercher", () => {
      page.clickAttribut(2, "span[translate]");
    });

    it("Must be able to click on the arrow of -> Thematique", () => {
      page.clickId("rechThematique");
    });
    it("Must be able to choose on the list -> Thematique", () => {
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
    });
    it("Must be able to click on the arrow of -> Departement", () => {
      page.clickId("rechDepartement");
    });
    it("Must be able to choose in the list -> Departement", () => {
      page.clickClasse(0, "mat-option-text");
      page.sendTab();
    });
    it("Must be able to not fill the field -> Numero", () => {
      page.sendTab();
    });
    it("Must be able to fill the field -> Beneficiaire", () => {
      page.sendTab();
      page.enterChampsById("benef", "01262000A ");
    });
    it("Must be able to choose in the list -> Phase", () => {
      page.clickId("rechPhase");
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex("T30", text), "mat-option-text");
        });
    });
    it("Must be able to click on the research", () => {
      page.clickId("boutonRechercheDossier");
      sleep(1000);
    });
    it("It must navigate to dossier", () => {
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text),
            "ng-star-inserted"
          );
        });
      sleep(1000);
    });
    it("Must be able to set Session décision ", () => {
      page.clickId("sessionDecision");
      page.clickClasse(0, "mat-option-text");
    });

    it("**** Enregistrement *****", () => {
      page.sendFlecheBasN(17);
      page.clickId("enrigistrerDossier");
      sleep(2000);
    });
    it("Se rendre sur ->  Rechercher dossier Preparer une session", () => {
      sleep(1000);
      page.clickAttribut(8, "span[translate]");
      sleep(800);
      page.sendEnter();
      sleep(400);
      page.clickClasse(4, "mat-select-arrow-wrapper");
      sleep(800);
      page.clickClasse(0, "mat-option-text");
      sleep(800);
      page.clickClasse(0, "mat-raised-button");
      sleep(800);
    });
    it("Selectionner le dossier", () => {
      page.clickClasse(0, "mat-checkbox-inner-container");
      sleep(4000);
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text) - 2,
            "ng-star-inserted"
          );
        });
    });
    it("Spécifier l'année", () => {
        page.clickClasse(5, "mat-select-arrow-wrapper");
        sleep(800);
      page.clickClasse(0, "mat-option-text");
      sleep(100);
    });
    it("Affecter a la session", () => {
      page.clickId("affecterRetirer");
      sleep(4000);
    });
    it("Must be able to go back from T35 to T30  -> Retirer de la session", () => {
      sleep(3000);
      page.clickId("retirer");
      sleep(400);
      page.clickClasse(0, "mat-raised-button");
      sleep(400);
      page.clickClasse(0, "mat-checkbox-inner-container");
      sleep(400);
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text) - 2,
            "ng-star-inserted"
          );
        });
      sleep(400);
      page.clickId("affecterRetirer");
    });
  });

  it("Must be able to go back from T30 to T25", () => {
    page.clickAttribut(6, "span[translate]");
    sleep(400);
    page.clickId("thematique");
    sleep(400);
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
    sleep(400);
    page.clickId("devalider");
    sleep(400);
    page.clickId("dga");
    sleep(400);
    page.clickId("recherche");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
    sleep(400);
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 4,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickId("validerDevalider");
    sleep(400);
  });
  it("Must be able to go back from T25 to T20", () => {
    //  valider siege
    page.clickAttribut(5, "span[translate]");
    sleep(400);
    page.clickId("thematique");
    sleep(400);
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
    sleep(400);
    page.clickId("devalider");
    sleep(400);
    page.clickId("tech");
    sleep(400);
    page.clickId("recherche");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
    sleep(400);
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 2,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickId("validerDevalider");
    sleep(3000);
    page.clickId("devalider");
    sleep(400);
    page.clickId("admin");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
    sleep(400);
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 2,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickId("validerDevalider");
    sleep(400);
  });
  it("Must be able to go  back from T20 to T15 1/2", () => {
    //  valider délégué/DGA
    page.clickAttribut(6, "span[translate]");
    sleep(400);
    page.clickId("thematique");
    sleep(400);
    page
      .getClasse("mat-option-text")
      .getText()
      .then(function(text) {
        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
      });
    sleep(400);
    page.clickId("devalider");
    sleep(400);
    page.clickId("delegue");
    sleep(400);
    page.clickId("recherche");
    sleep(400);
    page.clickClasse(0, "mat-checkbox-inner-container");
  });
  it("Must be able to go back from T20 to T15 2/2", () => {
    page
      .getClasse("ng-star-inserted")
      .getText()
      .then(function(text) {
        page.clickClasse(
          page.findIndex(numeroDossier, text) - 4,
          "ng-star-inserted"
        );
      });
    sleep(400);
    page.clickClasse(1, "mat-raised-button");
    sleep(400);
  });
  describe("Must be able to go back from T15 to T10", function() {
    // Recherche + basculer
    it("Must be able to click on the first button -> Rechercher", () => {
      page.clickAttribut(2, "span[translate]");
    });

    it("Must be able to click on the arrow of -> Thematique", () => {
      page.clickId("rechThematique");
    });
    it("Must be able to choose on the list -> Thematique", () => {
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex(theme, text), "mat-option-text");
        });
    });
    it("Must be able to click on the arrow of -> Departement", () => {
      page.clickId("rechDepartement");
    });
    it("Must be able to choose in the list -> Departement", () => {
      page.clickClasse(0, "mat-option-text");
      page.sendTab();
    });
    it("Must be able to not fill the field -> Numero", () => {
      page.sendTab();
    });
    it("Must be able to fill the field -> Beneficiaire", () => {
      page.sendTab();
      page.enterChampsById("benef", "01262000A ");
    });
    it("Must be able to choose in the list -> Phase", () => {
      page.clickId("rechPhase");
      page
        .getClasse("mat-option-text")
        .getText()
        .then(function(text) {
          page.clickClasse(page.findIndex("T15", text), "mat-option-text");
        });
    });
    it("Must be able to click on the research", () => {
      page.clickId("boutonRechercheDossier");
      sleep(1000);
    });
    it("It must navigate to dossier", () => {
      page
        .getClasse("ng-star-inserted")
        .getText()
        .then(function(text) {
          page.clickClasse(
            page.findIndex(numeroDossier, text),
            "ng-star-inserted"
          );
        });
      sleep(1000);
    });
    it("Prepare 1/3 -> Click valider", () => {
      page.sendFlecheBasN(19);
      page.clickId("basculerDossier");
      sleep(1000);
    });
  });

  describe("Modifier + ajouter nature operation", function() {
    it("Ajouter cout", () => {
      page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
      sleep(1000);
    });
    // it("Must be able to add labbel -> Ajouter labbel", () => {
    //     page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
    // });
    // it("Must be able to enter input cout -> Ajouter cout", () => {
    //     page.enterChampsByCss(
    //         1, textInput, ".positionTextLeft input"
    //     );
    // });
    // it("Must be able to validate -> Click Enregistrer", () => {
    //     page.clickId("enrigistrerDossier");
    //     page.sendFlecheBasN(5);
    //     sleep(5000);
    // });
    // it("Must be able to click on the arrow of -> Nature Operation", () => {
    //     page.clickId("natureOperation");
    //     sleep(5000);
    // });
    // it("Must be able to choose several elements on the list -> Nature Operation", () => {
    //     page.clickClasse(0, "mat-option-text");
    //     sleep(400);
    // });
    it("Must be able to add labbel -> Ajouter labbel", () => {
      //page.enterChamps(0, "test", "siga-uppercase-input mat-input-element mat-form-field-autofill-control mat-input-autofill-monitored ng-pristine ng-invalid ng-touched");
      page.clickClasse(0, "siga-bouton siga-form-addLine btn btn-default");
    });
    it("Must be able to enter input cout -> Ajouter cout", () => {
      page.enterChampsByCss(0, textInput, ".siga-border-bottom input");
    });
    it("Must be able to add aides  -> Ajouter cout taux avance", () => {
      page.clickId("tauxAvance");
      page.sendMots("1");
    });
    it("Must be able to add aides  -> Ajouter cout taux subvention", () => {
      page.clickId("tauxSubvention");
      page.sendMots("1");
    });
    it("Must be able to add aides  -> Ajouter cout taux specifique", () => {
      page.clickId("tauxSpecifique");
      page.sendMots("10");
    });
    it("Must be able to validate -> Click Enregistrer", () => {
      page.clickId("enrigistrerDossier");
      sleep(1000);
    });
  });
});
