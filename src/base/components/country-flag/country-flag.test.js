import { render } from '@src/base/services/testing';
import { CountryFlag } from './country-flag';

describe('Country Flag', () => {
  function mount({ countryName } = {}){
    return render(<CountryFlag countryName={countryName} />);
  }

  it('should build appropriate css classes according with the country name given', () => {
    const countryName = 'Brazil';
    const { getByText } = mount({ countryName });
    expect(getByText(countryName)).toHaveAttribute('class', 'fdw-country-flag fdw-country-flag-br');
  });

  it('should not build country css class if no country name has been given', () => {
    const { container } = mount();
    expect(container.querySelector('span')).toHaveAttribute('class', 'fdw-country-flag');
  });
});
