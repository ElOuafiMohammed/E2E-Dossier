// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  //chromedriver: '/frontend/node_modules/chromedriver/lib/chromedriver',
  seleniumAddress: 'http://selenium:4444/wd/hub',
  allScriptsTimeout: 18000,
  specs: [
    '../test-input/**/*.e2eProg-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      // -- Paramètrage SANS la fenêtre du navigateur WEB
      'args': ['--headless', '--disable-gpu', '--no-sandbox','--disable-browser-side-navigation']

      // -- Paramètrage AVEC la fenêtre du navigateur WEB
      // 'args': ['--no-sandbox']
    },
  },
  params: {
    adresse: 'default',
  },
  useAllAngular2AppRoots: true,
  baseUrl: 'http://localhost:4201/',
  directConnect: false,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: '../test-input/tsconfig.e2e.json'
    });
  },
  onPrepare(browser) {
    // Register jasmine library
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    const jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        savePath: '../test-output',
        filePrefix: 'ng-e2eProg-results',
        consolidateAll: true,
        modifySuiteName: (generatedSuiteName, suite) => { return '[E2E].' + generatedSuiteName; }
      })
    );
  },
};

