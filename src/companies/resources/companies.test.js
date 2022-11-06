import baseResource from '@src/base/resources/base/base';
import companiesResource from './companies';

describe('Companies Resource', () => {
  beforeEach(() => {
    baseResource.get = jest.fn();
    Date.now = jest.fn(() => '123');
  });

  it('should get companies', () => {
    companiesResource.get();
    expect(baseResource.get).toHaveBeenCalledWith(
      '/data/companies.json',
      { params: { t: '123' } }
    );
  });
});
