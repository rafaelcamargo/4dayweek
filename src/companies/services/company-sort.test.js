import { sortCompaniesBy } from './company-sort';

describe('Company Order Service', () => {
  it('should order companies by country', () => {
    const companies = mockCompanies();
    expect(sortCompaniesBy(companies, 'country')).toEqual([
      { origin: 'Floripa, Brazil' },
      { origin: 'Joinville, Brazil' },
      { origin: 'Vancouver, Canada' },
      { origin: 'Munich, Germany' },
      { origin: 'San Fransico, USA' }
    ]);
  });

  function mockCompanies(){
    return [
      { origin: 'Joinville, Brazil' },
      { origin: 'Floripa, Brazil' },
      { origin: 'San Fransico, USA' },
      { origin: 'Vancouver, Canada' },
      { origin: 'Munich, Germany' }
    ];
  }
});
