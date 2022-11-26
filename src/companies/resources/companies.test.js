import baseResource from '@src/base/resources/base/base';
import environmentService from '@src/base/services/environment';
import companiesMock from '@src/companies/mocks/companies';
import companiesResource from './companies';

describe('Companies Resource', () => {
  beforeEach(() => {
    baseResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
    Date.now = jest.fn(() => '123');
  });

  afterEach(() => {
    companiesResource.flushCache();
  });

  it('should get companies', () => {
    companiesResource.get();
    expect(baseResource.get).toHaveBeenCalledWith(
      '/data/companies.json',
      { params: { t: '123' } }
    );
  });

  it('should always make a request to get companies in development environment', async () => {
    await companiesResource.get();
    await companiesResource.get();
    expect(baseResource.get).toHaveBeenCalledTimes(2);
  });

  it('should not make more than one request, caching companies in production environment', async () => {
    environmentService.isProduction = jest.fn(() => true);
    await companiesResource.get();
    const data = await companiesResource.get();
    expect(baseResource.get).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ data: companiesMock });
  });
});
