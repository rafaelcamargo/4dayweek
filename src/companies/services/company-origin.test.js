import { formatOrigin } from './company-origin';

describe('Company Origin Service', () => {
  it('should return an empty object if no origin has been given', () => {
    expect(formatOrigin()).toEqual({});
  });

  it('should return an objet containing city and country code if origin has been given', () => {
    const origin = 'Joinville, Brazil';
    expect(formatOrigin(origin)).toEqual({
      city: 'Joinville',
      countryCode: 'br'
    });
  });
});
