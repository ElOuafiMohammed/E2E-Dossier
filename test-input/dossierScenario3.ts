import { AppPage } from "./siga.po";
import {
    browser,
    Browser,
    promise,
    ElementArrayFinder,
    element
} from "protractor";

function sleep(temps: number) {
    browser.driver.sleep(temps); // sleep for demonstration reasons
}
let p: number = 0;
let nombreDossierAvis = 0;
let nomUtilisateur = "";
let numeroDossier = "";
let nombreDossierInPreparerSession = "";
let textInput = "Ceci est un test *** Ceci est un test";
let themes: string[] = [
    "INDT - Industrie",
    "INDT - Industrie",
    "INTL - International"
];

describe("************  Scénario 3 Creation dossier + T10 + T15 + T20 + T25 + T30 + T35 + A01 + A05 ************ ", function () {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        browser.driver
            .manage()
            .window()
            .setSize(1280, 1024);
        sleep(1000);
    });

    describe("Verification de la page principale", function () {
        it("Must show -> accueil dossier", () => {
            page.navigateTo(browser.params.adresse);
            expect<any>(page.getTitre().getText()).toEqual("ACCUEIL");
        });
        it("Siga-679 -> Utilisateur", () => {
            var texte = page
                .getClasse("container topContainer")
                .getText()
                .then(function (texte) {
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
    describe("Test Paramétrer", function () {
        it("Must navigate to Liste_Valeur", () => {
            element(by.css("li[title=Liste_valeur]")).click();
            sleep(400);
        });
        it("Must serch of Liste_Valeur -> themartique 1/2 ", () => {
            element(by.css("input[formcontrolname=thematique]")).click();
            sleep(400);
        });
        it("Must serch of Liste_Valeur -> themartique 2/2 ", () => {
            page.clickClasse(0, "mat-option-text");
        });
        it("Must serch of Liste_Valeur -> param ", () => {
            element(by.css("input[formcontrolname=ligne]")).click();
            sleep(400);
            page.clickClasse(0, "mat-option-text");
        });
        it("Must desable valide  ", () => {
            page.clickClasse(0, "mat-checkbox-inner-container");
        });
        it("Must serch of Liste_Valeur -> themartique 1/2 ", () => {
            element(by.css("button[type=submit]")).click();
            sleep(400);
        });
    });

    for (var i = 0; i < 3; i++) {
        let theme = themes[i];
        describe("      -> Creation dossier", function () {
            it("Must be able to click on the first button -> Creer Dossier", () => {
                sleep(400);
                page.clickAttribut(3, "span[translate]");
                sleep(400);
                page.sendEnter();
            });
            it("Must be able to click on the arrow of -> Thematique", () => {
                page.clickCss(0, "#create-dosier .mat-select-arrow-wrapper");
            });
            it("Must be able to choose on the list -> Thematique", () => {
                page
                    .getClasse("mat-option-text")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                    });
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
                    .then(function (text) {
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
                    .then(function (texte) {
                        numeroDossier = page.getWordInList(1, texte, " ");
                        console.log(numeroDossier);
                    });
            });
        });

        describe("      -> ajout autre parametres", function () {
            it("Must be able to click on the date button -> Date de la demande", () => {
                sleep(400);
                page.clickId("dateDemande");
            });
            it("Must be able to to choose the date in -> Date de la demande", () => {
                page.clickClasse(
                    0,
                    "mat-calendar-body-cell-content mat-calendar-body-today"
                );
            });
            it("Must be able to click on the date button  -> Date complet", () => {
                page.clickId("dateComplet");
            });

            it("Must be able to to choose the date in -> Date complet", () => {
                page.clickClasse(
                    0,
                    "mat-calendar-body-cell-content mat-calendar-body-today"
                );
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
            if (i == 0) {
                it("Must be able to navigate to Information spécifique", () => {
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    sleep(400);
                    page.clickClasse(7, "mat-tab-label-content");
                    sleep(400);
                    page.clickCss(0, "siga-infos-specifiques .mat-select-arrow-wrapper");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"
                    );
                    page.sendTab();
                });
            } else if (i == 1) {
                it("Must be able to navigate to Information spécifique", () => {
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    sleep(400);
                    page.clickClasse(7, "mat-tab-label-content");
                    sleep(400);
                    page.clickCss(0, "siga-infos-specifiques .mat-select-arrow-wrapper");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"
                    );
                    page.sendTab();
                });
            } else if (i == 2) {
                it("Must be able to navigate to Information spécifique", () => {
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    page.clickClasse(1, "mat-tab-header-pagination-chevron");
                    sleep(400);
                    page.clickClasse(7, "mat-tab-label-content");
                    sleep(400);
                });
                it("Must be able to fill to Information spécifique -> Type d'action ", () => {
                    page.clickCss(0, "siga-infos-specifiques .mat-select-arrow-wrapper");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"
                    );
                    page.clickClasse(
                        1,
                        "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"
                    );
                    page.sendTab();
                });
                it("Must be able to fill to Information spécifique -> Pays", () => {
                    page.clickCss(
                        0,
                        "siga-infos-specifiques .mat-select-arrow-wrapper-liste-valeur"
                    );
                    sleep(400);
                    page.clickClasse(0, "mat-option-text");
                    page.sendTab();
                });
                it("Must be able to fill to Information spécifique -> Zone prioritaire", () => {
                    page.clickCss(
                        1,
                        "siga-infos-specifiques .mat-select-arrow-wrapper-liste-valeur"
                    );
                    sleep(400);
                    page.clickClasse(0, "mat-option-text");
                    page.sendTab();
                });
            }
        });

        describe("      -> Nature operation + aides", function () {
            it("Must be able to navigate to Recapitulatif des aides -> Click Recapitulatif des aides  ", () => {
                page.sendFlecheBasN(3);
                page.clickClasse(0, "mat-tab-header-pagination-chevron");
                page.clickClasse(0, "mat-tab-header-pagination-chevron");
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
                page.enterChampsByCss(0, "1000", ".siga-border-bottom input");
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
                sleep(1000);
            });
        }); //fin de nature d'operation

        describe(" must go to T15 ", function () {
            it("Must be able to click on the button -> Basculer", () => {
                page.clickId("basculerDossier");
                page.sendTab();
                sleep(10000);
            });
            it("Must be able to click on the button -> Basculer", () => {
                page.clickId("basculerDossier");
                page.sendTab();
                sleep(15000);
            });
        });
        describe(" must go from T15 > T20 > T25 > T30 ", function () {
            it("Must be able to go from T15 to T20 1/2 ", () => {
                //  valider délégué/DGA
                page.clickAttribut(6, "span[translate]");
                sleep(400);
                page.clickId("thematique");
                sleep(400);
                page
                    .getClasse("mat-option-text")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                    });
                sleep(400);
                page.clickId("delegue");
                sleep(400);
                page.clickId("recherche");
                sleep(400);
                page.clickClasse(0, "mat-checkbox-inner-container");
                page.sendTab();
            });
            it("Must be able to go from T15 to T20 2/2", () => {
                page
                    .getClasse("ng-star-inserted")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(
                            page.findIndex(numeroDossier, text) - 4,
                            "ng-star-inserted"
                        );
                    });
                sleep(400);
                page.clickClasse(1, "mat-raised-button");
                sleep(400);
                page.sendTab();
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
                    .then(function (text) {
                        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                    });
                page.clickId("tech");
                sleep(400);
                page.clickId("recherche");
                sleep(400);
                page.clickClasse(0, "mat-checkbox-inner-container");
                sleep(400);
                page
                    .getClasse("ng-star-inserted")
                    .getText()
                    .then(function (text) {
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
                    .then(function (text) {
                        page.clickClasse(
                            page.findIndex(numeroDossier, text) - 2,
                            "ng-star-inserted"
                        );
                    });
                sleep(400);
                page.clickId("validerDevalider");
                sleep(400);
                page.sendTab();
            });
            it("Must be able to go from T25 to T30", () => {
                page.clickAttribut(6, "span[translate]");
                sleep(400);
                page.clickId("thematique");
                sleep(400);
                page
                    .getClasse("mat-option-text")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                    });
                page.clickId("dga");
                sleep(400);
                page.clickId("recherche");
                sleep(400);
                page.clickClasse(0, "mat-checkbox-inner-container");
                sleep(400);
                page
                    .getClasse("ng-star-inserted")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(
                            page.findIndex(numeroDossier, text) - 4,
                            "ng-star-inserted"
                        );
                    });
                sleep(400);
                page.clickId("validerDevalider");
                sleep(400);
                page.sendTab();
            });
        });
        describe("Must be able to go from T30 to T35 ", function () {
            it("Se rendre sur ->  Rechercher dossier Preparer une session", () => {
                sleep(800);
                page.clickAttribut(8, "span[translate]");
                sleep(800);
                page.clickClasse(4, "mat-select-arrow-wrapper");
                sleep(800);
                page.clickClasse(0, "mat-option-text");
                sleep(800);
                page.clickClasse(0, "mat-raised-button");
                sleep(800);
            });
            it("Selectionner le dossier ", () => {
                page.clickClasse(0, "mat-checkbox-inner-container");
                sleep(4000);
                page
                    .getClasse("ng-star-inserted")
                    .getText()
                    .then(function (text) {
                        page.clickClasse(
                            page.findIndex(numeroDossier, text) - 2,
                            "ng-star-inserted"
                        );
                    });
            });
            it("spécifier l'année", () => {
                page.clickClasse(5, "mat-select-arrow-wrapper");
                sleep(800);
                page.clickClasse(0, "mat-option-text");
                sleep(100);
            });
            it(" Affecter a la session", () => {
                page.clickId("affecterRetirer");
                sleep(4000);
            });
        });
        if (i == 0) {
            describe("Must be able to go from T35 to A01 ", function () {
                it("Must navigate to Saisir avis 2/2", () => {
                    sleep(400);
                    page.clickAttribut(9, "span[translate]");
                    sleep(400);
                });
                it("Must search for dossier", () => {
                    page.clickId("procedureDecision");
                    page.clickClasse(0, "mat-option-text");
                    sleep(400);
                    page.clickId("thematique");
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                        });
                    page.clickId("rechercheSaisirAvis");
                });
                it("Must be able to get nombre de dossiers", () => {
                    page
                        .getCss(".card-body  strong")
                        .getText()
                        .then(function (text) {
                            console.log("le nombre de dossiers est : " + text[0]);
                            nombreDossierAvis = text[0];
                        });
                });
                it("Must be able to set Favorable 1/2", () => {
                    for (var j = 0; j < nombreDossierAvis; j++) {
                        page.clickCss(j, ".card-body .mat-select-arrow-wrapper");
                        page.clickClasse(2, "mat-option-text");
                        sleep(400);
                    }
                });
                it("Must be able to set avis Favorable 2/2", () => {
                    page.clickId("validAvis");
                    sleep(4000);
                });
            });
            describe("Must be able to go from A01 to A05 ", function () {
                it("Must navigate to Attribuer les aides", () => {
                    page.clickAttribut(10, "span[translate]");
                    sleep(400);
                });
                it("Must search for dossier", () => {
                    page.clickId("thematique");
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                        });
                    page.clickId("procedureDecision");
                    page.clickClasse(0, "mat-option-text");
                    sleep(400);
                    page.clickId("recherche");
                });
                it("Selectionner le dossier ", () => {
                    page.clickClasse(0, "mat-checkbox-inner-container");
                    sleep(4000);
                    page
                        .getClasse("ng-star-inserted")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(
                                page.findIndex(numeroDossier, text) - 2,
                                "ng-star-inserted"
                            );
                        });
                });
                it("Must be able to click on the date button -> Date de l'attribution", () => {
                    sleep(400);
                    page.clickId("dateAttribution");
                });
                it("Must be able to to choose the date in -> Date de la demande", () => {
                    page.clickClasse(
                        0,
                        "mat-calendar-body-cell-content mat-calendar-body-today"
                    );
                });
                it("Must be able to click on Attribuer", () => {
                    page.clickClasse(0, "siga-recherch-attribution mat-raised-button");
                    // "input[formControlName=
                });
            });
            describe("Verifier Dossier et log numeros aides  ", function () {
                it("Must be able to click on the first button -> Rechercher", () => {
                    sleep(1000);
                    page.clickAttribut(2, "span[translate]");
                    sleep(400);
                });

                it("Must be able to click on the arrow of -> Thematique", () => {
                    page.clickId("rechThematique");
                });
                it("Must be able to choose in the list -> Thematique", () => {
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
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
                        .then(function (text) {
                            page.clickClasse(page.findIndex("A05", text), "mat-option-text");
                        });
                });
                it("Must be able to click on the research", () => {
                    page.clickId("boutonRechercheDossier");
                    sleep(1000);
                });
                it("it must navigate to dossier", () => {
                    page
                        .getClasse("ng-star-inserted")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(
                                page.findIndex(numeroDossier, text),
                                "ng-star-inserted"
                            );
                        });
                    sleep(1000);
                });
                it("Verification des items existants", () => {
                    expect<any>(
                        page.getAllCss("mat-tab-header .mat-tab-label-content").getText()
                    ).toEqual([
                        "Synthèse",
                        "Description générale",
                        "Documents juridiques",
                        "Paiements",
                        "Récapitulatif des aides",
                        "Prévisionnel",
                        "Plan financement",
                        "Pièces jointes",
                        "Bloc notes",
                        "",
                        "",
                        "",
                        "Coûts/Aides",
                        "Ouvrages",
                        "Localisation",
                        "Autres infos"
                    ]);
                });
                it("Click sur les items existants", () => {
                    page.clickClasse(1, "mat-tab-label-content");
                    sleep(400);
                    page.clickClasse(2, "mat-tab-label-content");
                    sleep(400);
                    page.clickClasse(3, "mat-tab-label-content");
                    sleep(400);
                    page.clickClasse(0, "mat-tab-label-content");
                });
                it("it must find recapitulatif des aides", () => {
                    page
                        .getAllCss(
                            "siga-tableau-recap-des-numeros tbody td .ng-star-inserted"
                        )
                        .getText()
                        .then(function (text) {
                            console.log("récapitulatif des aides :" + text);
                        });
                });
            });
            describe(" Vérifier Description Générale", function () {
                it("Must be able to navigate to Description générale -> Click Description générale ", () => {
                    page.clickClasse(1, "mat-tab-label-content");
                });
                it("Must be able to fill Description générale -> fill Description de l'operation ", () => {
                    page.clickId("descriptionOperation");
                    page.sendMots(textInput);
                });
                it("Must be able to fill Description générale -> fill resultat attendus ", () => {
                    page.clickId("resultatsAttendus");
                    page.sendMots(textInput);
                    page.sendFlecheBasN(5);
                });

                it("Must be able to add piece pour solde -> click piece pour solde", () => {
                    page.clickId("piecesPourSolde");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    page.clickClasse(
                        1,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    sleep(20);
                    page.sendTab();
                });

                it("Must be able to add disposition technique particuliere -> click disposition technique particuliere", () => {
                    page.clickId("dispositionTechniqueParticuliere");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    page.clickClasse(
                        1,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    sleep(20);
                    page.sendTab();
                    page.sendFlecheBasN(5);
                });
                it("Must be able to modalité de versement des aides non standard -> click versement des aides non standard and fill ", () => {
                    page.clickClasse(0, "mat-radio-container");
                    sleep(400);
                    page.sendMots(textInput);
                });

                it("Must be able to add Modalité(s) de réduction des aides -> click Modalité(s) de réduction des aides", () => {
                    page.sendFlecheBasN(5);
                    page.clickId("modalitesRductionAides");
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    page.clickClasse(
                        1,
                        "mat-option mat-option-multiple ng-star-inserted"
                    );
                    sleep(400);
                    page.sendTab();
                });
                it("Must be able to click on the button -> Enregistrer", () => {
                    page.sendFlecheBasN(50);
                    page.clickId("enrigistrerDossier");
                    sleep(1000);
                });
            });
        } else if (i == 1) {
            describe("Must be able to go from T35 to A02 ", function () {
                it("Must navigate to Saisir avis", () => {
                    page.clickAttribut(9, "span[translate]");
                    sleep(400);
                });
                it("Must search for dossier", () => {
                    page.clickId("procedureDecision");
                    page.clickClasse(0, "mat-option-text");
                    sleep(400);
                    page.clickId("thematique");
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                        });
                    sleep(400);
                    page.clickId("rechercheSaisirAvis");
                });
                it("Must be able to get nombre de dossiers", () => {
                    page
                        .getCss(".card-body  strong")
                        .getText()
                        .then(function (text) {
                            console.log("le nombre de dossiers est : " + text[0]);
                            nombreDossierAvis = text[0];
                        });
                });
                it("Must be able to set Dossier différé 1/2 ", () => {
                    for (var j = 0; j < nombreDossierAvis; j++) {
                        page.clickCss(j, ".card-body .mat-select-arrow-wrapper");
                        page.clickClasse(1, "mat-option-text");
                        sleep(1000);
                        if (j == 0) {
                            page.enterChampsById("textArea", "ceci est un test");
                        } else {
                            page.clickCss(
                                j + 2,
                                ".card-body .mat-input-infix.mat-form-field-infix"
                            );
                        }
                        page.sendMots(textInput);
                        page.sendTab();
                    }
                });
                it("Must be able to set Dossier différé 2/2", () => {
                    page.clickId("validAvis");
                    sleep(1000);
                });
            });
            describe("Must be able to go from A02 to A05 ", function () {
                it("Must navigate to Attribuer les aides", () => {
                    sleep(2000);
                    page.clickAttribut(10, "span[translate]");
                    sleep(400);
                });
                it("Must search for dossier", () => {
                    page.clickId("thematique");
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                        });
                    sleep(400);
                    page.clickId("procedureDecision");
                    page.clickClasse(0, "mat-option-text");
                    sleep(400);
                    page.clickId("recherche");
                });
                it("Selectionner le dossier ", () => {
                    page.clickClasse(0, "mat-checkbox-inner-container");
                    sleep(4000);
                    page
                        .getClasse("ng-star-inserted")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(
                                page.findIndex(numeroDossier, text) - 2,
                                "ng-star-inserted"
                            );
                        });
                });
                it("Must be able to click on the date button -> Date de l'attribution", () => {
                    sleep(400);
                    page.clickId("dateAttribution");
                });
                it("Must be able to to choose the date in -> Date de la demande", () => {
                    sleep(400);
                    page.clickClasse(
                        0,
                        "mat-calendar-body-cell-content mat-calendar-body-today"
                    );
                    sleep(400);
                    page.sendEnter();
                    page.sendTab();
                });
                it("Must be able to click on Attribuer", () => {
                    page.clickClasse(0, "siga-recherch-attribution mat-raised-button");
                    // "input[formControlName=
                });
            });
        } else if (i == 2) {
            describe("Must be able to go from T35 to A00 ", function () {
                it("Must navigate to Saisir avis", () => {
                    page.clickAttribut(9, "span[translate]");
                    sleep(400);
                });
                it("Must search for dossier", () => {
                    page.clickId("procedureDecision");
                    page.clickClasse(0, "mat-option-text");
                    sleep(400);
                    page.clickId("thematique");
                    page
                        .getClasse("mat-option-text")
                        .getText()
                        .then(function (text) {
                            page.clickClasse(page.findIndex(theme, text), "mat-option-text");
                        });
                    sleep(400);
                    page.clickId("rechercheSaisirAvis");
                });
                it("Must be able to get nombre de dossiers", () => {
                    page
                        .getCss(".card-body  strong")
                        .getText()
                        .then(function (text) {
                            console.log("le nombre de dossiers est : " + text[0]);
                            nombreDossierAvis = text[0];
                        });
                });
                it("Must be able to set Refusé pour tous les dossier 1/2 ", () => {
                    for (var j = 0; j < nombreDossierAvis; j++) {
                        page.clickCss(j, ".card-body .mat-select-arrow-wrapper");
                        page.clickClasse(5, "mat-option-text");
                        sleep(1000);
                        if (j == 0) {
                            page.enterChampsById("textArea", "ceci est un test");
                        } else {
                            page.clickCss(
                                j + 2,
                                ".card-body .mat-input-infix.mat-form-field-infix"
                            );
                        }
                        page.sendMots(textInput);
                        page.sendTab();
                    }
                });
                it("Must be able to set avis Refusé 2/2", () => {
                    page.clickId("validAvis");
                    sleep(1000);
                });
            });
        }
    } //end of for loop
});
