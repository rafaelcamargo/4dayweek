import environmentService from './environment';

describe('Environment Service', () => {
  it('should answer if environment type is production', () => {
    expect(environmentService.isProduction()).toEqual(false);
  });
});
