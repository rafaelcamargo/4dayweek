const path = require('path');
const { fileService } = require('../../base/services/file');
const logger = require('../../base/services/logger');
const companyDataService = require('./company-data');

describe('Company Data Service', () => {
  beforeEach(() => {
    logger.msg = jest.fn();
    fileService.fileSystem.writeFile = jest.fn((filepath, data, cb) => cb());
    fileService.req = jest.fn(filepath => mockFiles()[filepath]);
    fileService.glob = jest.fn((pattern, cb) => {
      const filepaths = Object.keys(mockFileSystem()[pattern]);
      cb(null, filepaths);
    });
  });

  it('should gather all company data in a single json', () => {
    companyDataService.concat();
    expect(logger.msg).toHaveBeenCalledWith('Found 3 companies');
    expect(fileService.fileSystem.writeFile).toHaveBeenCalledWith(
      path.join(__dirname, '../../../dist/data/companies.json'),
      JSON.stringify(Object.values(mockFiles())),
      expect.any(Function)
    );
    expect(logger.msg).toHaveBeenCalledWith('Successfully built data for 3 companies', { theme: 'success' });
  });

  function mockFileSystem(){
    return { [path.join(__dirname, '../data/*.json')]: mockFiles() };
  }

  function mockFiles(){
    return {
      [buildFilepath('a.json')]: { name: 'a' },
      [buildFilepath('b.json')]: { name: 'b' },
      [buildFilepath('c.json')]: { name: 'c' }
    };
  }

  function buildFilepath(filename){
    return path.join(__dirname, `some/path/to/${filename}`);
  }
});
