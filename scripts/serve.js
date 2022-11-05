const chokidar = require('chokidar');
const liveServer = require('live-server');
const path = require('path');
const webpack = require('webpack');
const companyDataService = require('../src/companies/services/company-data');
const logger = require('../src/base/services/logger');
const webpackConfig = require('../webpack.config');

let isServing;

function init(){
  logger.msg('Compiling website...');
  compile(onCompileSuccess);
}

function compile(onSuccess){
  const compiler = webpack(webpackConfig);
  const watching = compiler.watch(
    { aggregateTimeout: 300 },
    (err, stats) => {
      if(!err) {
        logger.msg('Website successfully compiled!', { theme: 'success' });
        onSuccess && onSuccess();
      }
    }
  );
}

function onCompileSuccess(){
  return !isServing ? companyDataService.concat(onCompanyDataConcat) : logWatching();
}

function onCompanyDataConcat(){
  watchCompanyDataChanges();
  serve();
  logWatching();
}

function watchCompanyDataChanges(){
  const companyDataDirectory = path.join(__dirname, '../src/companies/data');
  const watcher = chokidar.watch(companyDataDirectory, { persistent: true });
  watcher.on('change', onCompanyDataChange).on('unlink', onCompanyDataChange);
}

function onCompanyDataChange(){
  companyDataService.concat(() => logWatching());
}

function serve(){
  const port = 9000;
  const host = '0.0.0.0';
  isServing = true;
  logger.msg('Serving website...');
  liveServer.start({
    port,
    host,
    root: './dist',
    open: false,
    wait: 500,
    usePolling: true,
    interval: 500,
    logLevel: 0
  });
  logger.msg(
    `Website successfully served at http://${host}:${port}`,
    { theme: 'success' }
  );
}

function logWatching(){
  logger.msg('Watching for changes...');
}

init();
