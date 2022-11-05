const glob = require('glob');
const fileSystem = require('file-system');
const logger = require('./logger');
const { FileService, fileService } = require('./file');

describe('File Service', () => {
  beforeEach(() => {
    logger.msg = jest.fn();
  });

  it('should use raw glob if no glob has been given', () => {
    const fileService = new FileService();
    expect(fileService.glob).toEqual(glob);
  });

  it('should use raw fileSystem if no fileSystem has been given', () => {
    const fileService = new FileService();
    expect(fileService.fileSystem).toEqual(fileSystem);
  });

  it('should use raw require if no require has been given', () => {
    const fileService = new FileService();
    expect(fileService.req.cache).toEqual(require.cache);
  });

  it('should require a file', () => {
    const requireMock = jest.fn();
    const filepath = './test.json';
    const fileService = new FileService({
      req: requireMock
    });
    fileService.require(filepath);
    expect(requireMock).toHaveBeenCalledWith(filepath);
  });

  it('should collect files that respect some pattern', () => {
    const successCallback = jest.fn();
    const filesMock = ['./test.json'];
    const globMock = jest.fn((pattern, callback) => callback(null, filesMock));
    const fileService = new FileService({
      glob: globMock
    });
    fileService.collect('**/*.json', successCallback);
    expect(globMock.mock.calls[0][0]).toEqual('**/*.json');
    expect(successCallback).toHaveBeenCalledWith(filesMock);
  });

  it('should execute error callback on collect error', () => {
    const errorMock = 'some error';
    const globMock = jest.fn((pattern, callback) => callback(errorMock));
    const onError = jest.fn();
    const fileService = new FileService({
      glob: globMock
    });
    fileService.collect('**/*.json', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMock);
  });

  it('should log error on collect error if no error callback has been provided', () => {
    const pattern = '**/*.js';
    const errorMock = {some: 'err'};
    const globMock = jest.fn((pattern, callback) => callback(errorMock));
    const fileService = new FileService({
      glob: globMock
    });
    fileService.collect(pattern);
    expect(logger.msg).toHaveBeenCalledWith(
      `Failed to collect **/*.js files: ${errorMock}`,
      { theme: 'error' }
    );
  });

  it('should write some file', () => {
    const fileSystemMock = { writeFile: jest.fn() };
    const filepath = './some/path/to/file.js';
    const data = 'some data';
    const fileService = new FileService({
      fileSystem: fileSystemMock
    });
    fileService.write(filepath, data);
    expect(fileSystemMock.writeFile.mock.calls[0][0]).toEqual(filepath);
    expect(fileSystemMock.writeFile.mock.calls[0][1]).toEqual(data);
    expect(typeof fileSystemMock.writeFile.mock.calls[0][2]).toEqual('function');
  });

  it('should execute success callback on write file success if callback has been provided', () => {
    const fileSystemMock = { writeFile: jest.fn((filepath, data, onComplete) => {
      onComplete();
    }) };
    const onSuccess = jest.fn();
    const fileService = new FileService({
      fileSystem: fileSystemMock
    });
    fileService.write('./some/path/to/file.js', 'some data', onSuccess);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('should execute error callback on write file error', () => {
    const errorMock = 'some error';
    const fileSystemMock = { writeFile: jest.fn((filepath, data, onComplete) => {
      onComplete(errorMock);
    }) };
    const onError = jest.fn();
    const fileService = new FileService({
      fileSystem: fileSystemMock
    });
    fileService.write('./some/path/to/file.js', 'some data', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMock);
  });

  it('should log error on write file error if no error callback has been provided', () => {
    const errorMock = 'some error';
    const fileSystemMock = { writeFile: jest.fn((filepath, data, onComplete) => {
      onComplete(errorMock);
    }) };
    const fileService = new FileService({
      fileSystem: fileSystemMock
    });
    fileService.write('./path/to/file.js', 'some data');
    expect(logger.msg).toHaveBeenCalledWith(
      `Failed to write ./path/to/file.js: ${errorMock}`,
      { theme: 'error' }
    );
  });

  it('should export a singleton', () => {
    expect(fileService instanceof FileService).toEqual(true);
  });
});
