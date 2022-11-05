const fileSystem = require('file-system');
const glob = require('glob');
const logger = require('./logger');

class FileService {
  constructor(dependencies = {}){
    this.glob = getDependency(dependencies, 'glob', glob);
    this.fileSystem = getDependency(dependencies, 'fileSystem', fileSystem);
    this.req = getDependency(dependencies, 'req', require);
  }

  require(filepath){
    return this.req(filepath);
  }

  collect(pattern, onSuccess, onError){
    this.glob(pattern, (err, files) => {
      const errMsg = `Failed to collect ${pattern} files`;
      if(err) return onError ? onError(err) : logError(errMsg, err);
      onSuccess(files);
    });
  }

  write(filepath, data, onSuccess, onError){
    this.fileSystem.writeFile(filepath, data, err => {
      const errMsg = `Failed to write ${filepath}`;
      if(err) return onError ? onError(err) : logError(errMsg, err);
      onSuccess();
    });
  }
}

function getDependency(dependencies, dependencyName, rawDependency){
  return dependencies[dependencyName] || rawDependency;
}

function logError(msg, err){
  logger.msg(`${msg}: ${err}`, { theme: 'error' });
}

let fileService = new FileService();

module.exports = {
  fileService,
  FileService
};
