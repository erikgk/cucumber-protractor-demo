// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './features/**/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4,
    chromeOptions: {
      args: ['--window-size=1280,900', "--incognito"]
    },
  },
  directConnect: true,
  baseUrl: 'http://todomvc.com/examples/angular2/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './steps/**/*.ts'
    ],
    format: [
      'json:e2e/test-reports/json/cucumber-test-results.json'
    ],
    tags: [ "~@fail" ]
  },
  onPrepare() {
  }
};