const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.source.tests.files,
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@src\/(.*)$': `<rootDir>/${project.source.root}/$1`,
    '@environment$': `<rootDir>/${project.source.environments.root}/development.js`,
    '^.+\\.css$': `<rootDir>/${project.source.root}/base/mocks/raw-file.js`
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.styl$': `<rootDir>/${project.source.root}/base/mocks/raw-file.js`,
    '\\.(jpg|jpeg|png|svg)$': `<rootDir>/${project.source.root}/base/mocks/image-file.js`
  }
};
