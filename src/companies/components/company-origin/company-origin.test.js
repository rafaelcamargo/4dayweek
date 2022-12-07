import { render } from '@testing-library/react';
import { CompanyOrigin } from './company-origin';

describe('Company Origin', () => {
  function mount({ origin } = {}){
    return render(<CompanyOrigin origin={origin} />);
  }

  it('should render "unknown" if no origin has been given', () => {
    const { getByText } = mount();
    expect(getByText('Unknown')).toBeInTheDocument();
  });

  it('should format origin if origin has been given', () => {
    const origin = 'Joinville, Brazil';
    const { getByText } = mount({ origin });
    const element = getByText(origin.split(',')[0]);
    expect(element).toBeInTheDocument();
    expect(element.querySelector('span')).toHaveClass('fdw-country-flag fdw-country-flag-br');
  });
});
