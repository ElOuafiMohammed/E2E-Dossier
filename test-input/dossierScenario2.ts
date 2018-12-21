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
let textInput = "Ceci est un test *** Ceci est un test  ";
describe(" ************ Scénario 2 Creation dossier + Informations spécifiques avec AEEP + ASST + GREE ************ ", function() {
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
    it("Siga-679 -> Utilisateur", () => {
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
  let themes: number[] = [0, 2, 6];

  for (let theme of themes) {
    describe("      -> Creation dossier", function() {
      it("Must be able to click on the first button -> Creer Dossier", () => {
        page.clickAttribut(3, "span[translate]");
        sleep(1000);
        page.sendEnter();
        sleep(1000);
      });
      it("Must be able to click on the arrow of -> Thematique", () => {
        page.clickCss(0, "#create-dosier .mat-select-arrow-wrapper");
      });
      it("Must be able to choose on the list -> Thematique", () => {
        if (theme == 6) {
          page.sendFlecheBasN(7);
        }
        page.clickCss(theme, "#optionThematique .mat-option-text");
      });
      it("Must be able to click on the arrow of -> Departement", () => {
        page.clickCss(1, "#create-dosier .mat-select-arrow-wrapper");
      });
      it("Must be able to choose on the list -> Departement", () => {
        page.clickCss(0, "#optionDepartement .mat-option-text");
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
      it("3/4 Preparation -> choix Departement", () => {
        page.clickClasse(0, "mat-option-text");
      });
      it("4/4 Preparation -> Click Rechercher", () => {
        page.clickId("recherche_button");
      });
      it("Siga-922 -> Choix dans la liste de resultats", () => {
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

    describe("      -> ajout autre parametres", function() {
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

    describe("Information  spécifiques", function() {
      it("Must be able to click on the button -> Information  spécifique ", () => {
        page.clickClasse(1, "mat-tab-header-pagination-chevron");
        page.clickClasse(1, "mat-tab-header-pagination-chevron");
        page.clickClasse(7, "mat-tab-label-content");
        sleep(400);
      });
      it("Must be able to fill Auteur marché", () => {
        page.clickCss(1, "siga-infos-specifiques tbody td.ng-star-inserted");
        page.sendMots("100");
      });
      it("Must be able to click on the date button -> Date marché", () => {
        sleep(400);
        page.clickCss(
          0,
          "siga-infos-specifiques .mat-datepicker-toggle-default-icon.ng-star-inserted"
        );
        page.clickClasse(0, "mat-calendar-body-cell-content");
        sleep(400);
      });
      it("Must be able to to click and choose  ->  Type de document", () => {
        page.clickCss(
          0,
          "siga-infos-specifiques .mat-select-arrow.mat-select-arrow-down"
        );
        sleep(400);
        page.clickClasse(0, "mat-option-text");
      });
      if (theme != 2) {
        it("Must be able to to click and choose ->  Enjeu", () => {
          page.clickCss(
            1,
            "siga-infos-specifiques .mat-select-arrow.mat-select-arrow-down"
          );
          sleep(400);
          page.clickClasse(0, "mat-option-text");
        });
      }
      if (theme != 6) {
        it("Must be able to fill prix de l'eau->  prix total", () => {
          page.clickId("siga-prix-total");
          page.sendMots("10");
          sleep(400);
        });
        it("Must be able to fill prix de l'eau->  prix total", () => {
          page.clickId("siga-prix-htva");
          page.sendMots("8");
        });
      }

      it("Must be able to validate -> Click Enregistrer", () => {
        page.sendFlecheBasN(12);
        page.clickId("enrigistrerDossier");
        sleep(10000);
      });
    });
  }
});
