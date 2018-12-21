// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');


exports.config = {
  //chromedriver: '/frontend/node_modules/chromedriver/lib/chromedriver',
  seleniumAddress: 'http://selenium:4444/wd/hub',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 18000,
  specs: [
    '../test-input/**/*.e2eDispoNew-spec.ts'
  ],
  capabilities: {
    'proxy': {
      'proxyType': 'manual',
      'httpProxy': 'and-fgt-linux-01.akka.eu:9090',
      'httpsProxy': 'and-fgt-linux-01.akka.eu:9090',
      'noProxy': "localhost;127.0.0.1;*.akka.eu;*.office.com"
    },
    'browserName': 'chrome',
    'chromeOptions': {
      // -- Paramètrage SANS la fenêtre du navigateur WEB
      //'args': ['--headless', '--disable-gpu', '--no-sandbox','--disable-browser-side-navigation']

      // -- Paramètrage AVEC la fenêtre du navigateur WEB
       'args': ['--no-sandbox']
    },
  },
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, 
  // {
  //   'browserName': 'chrome'
  // },
  // {
  //   'browserName': 'internet explorer'
  // }],
  params: {
    adresse: 'default',
  },
  useAllAngular2AppRoots: true,
  baseUrl: 'http://localhost:4201/',
  directConnect: false,
  chromeOnly: true,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
  },
  onPrepare(browser) {
    // Register jasmine library
        require('ts-node').register({
      project: '../test-input/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    const jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        savePath: '../test-output',
        filePrefix: 'ng-e2eDispo-results',
        consolidateAll: true,
        modifySuiteName: (generatedSuiteName, suite) => { return '[E2E].' + generatedSuiteName; }
      })
    );
  },
};

