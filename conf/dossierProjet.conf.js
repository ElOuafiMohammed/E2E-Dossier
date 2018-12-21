// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// Utilisation du framework Jasmine de test de développement basé sur les comportements pour JavaScript
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  //chromedriver: '/frontend/node_modules/chromedriver/lib/chromedriver',

  // Passerelle Selenium entre Protractor et le navigateur WEB (quand dockerisé)
 // seleniumAddress: 'http://selenium:4444/wd/hub',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 150000,

  // fichier typescript des tests
  specs: [
    '../test-input/**/*.dossierProjet-spec.ts'
  ],
  capabilities: {
    'proxy': {
      'proxyType': 'manual',
      'httpProxy': 'and-fgt-linux-01.akka.eu:9090',
      'httpsProxy': 'and-fgt-linux-01.akka.eu:9090',
      'noProxy': "localhost;127.0.0.1;*.akka.eu;*.office.com"
    },

    // A COMMITER : positionner firefox et commenter chrome quand push sur integration
    // ----------
    // 'browserName': 'firefox',
    'browserName': 'chrome',
    'chromeOptions': {
      // A COMMITER : paramètrage SANS la fenêtre du navigateur WEB
      // ----------        
      // 'args': ['--headless', '--disable-gpu', '--no-sandbox', '--disable-browser-side-navigation']

      // -- Paramètrage AVEC la fenêtre du navigateur WEB
      'args': ['--no-sandbox']
    },
    'moz:firefoxOptions': {
		'args': ['--no-sandbox','--safe-mode']
      
    },
  },

  params: {
    // Quand default, voir baseUrl ci-dessous
    adresse: 'default',
  },

  // Attente du chargement de la page avant tests E2E
  useAllAngular2AppRoots: true,

  // URL par défaut (cf. adresse=default ci-dessus)
  baseUrl: 'http://localhost:4200/',

  // A COMMITER : pas de connexion directe protractor au navigateur web quand dockerisé (on passe par Selenium)
  // ----------
  directConnect: false,
  //directConnect: true,

  // Version de jasmine
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function () { }
  },

  // Les tests ecrits en typescript nécessitent ts-node
  beforeLaunch: function () {
    require('ts-node').register({
      project: '../test-input/tsconfig.e2e.json'
    });
  },

  onPrepare(browser) {
    // Register jasmine library
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    const jasmineReporters = require('jasmine-reporters');
    // Sorties Jasmine au format XML
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        savePath: '../test-output',
        filePrefix: 'ng-e2eDos-results',
        consolidateAll: true,
        modifySuiteName: (generatedSuiteName, suite) => { return '[E2E].' + generatedSuiteName; }
      })
    );
  global.Actions = {
    openInNewTab: function (element) {
      var controlKey = protractor.Key.CONTROL;
      browser.actions().keyDown(controlKey).click(element).keyUp(controlKey).perform();
    }
  };  
  },
};
