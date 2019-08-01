const protractorConf = require('./protractor.conf');

let config = {
  ...protractorConf.config,
  capabilities: {
    browserName: 'firefox',
    shardTestFiles: false,
    maxInstances: 2
  }
};

exports.config = config;
