const path = require('path');
const logger = require('../../base/services/logger');
const { fileService } = require('../../base/services/file');

const _public = {};

const COMPANY_FILES_GLOB = '../data/*.json';
const TARGET_DATA_FILE = '../../../dist/data/companies.json';

_public.concat = () => {
  fileService.collect(path.join(__dirname, COMPANY_FILES_GLOB), filepaths => {
    const totalCompanies = filepaths.length;
    logger.msg(`Found ${totalCompanies} companies`);
    fileService.write(
      path.join(__dirname, TARGET_DATA_FILE),
      JSON.stringify(concatenateData(filepaths)),
      () => onBuildSuccess(totalCompanies)
    );
  });
};

function concatenateData(filepaths){
  return filepaths.map(filepath => fileService.require(filepath));
}

function onBuildSuccess(totalCompanies){
  logger.msg(
    `Successfully built data for ${totalCompanies} companies`,
    { theme: 'success' }
  );
}

module.exports = _public;
