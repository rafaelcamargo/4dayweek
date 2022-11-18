import ENV from '@environment';
import { render, RouterMock } from '@src/base/services/testing';
import { ContributeView } from './contribute-view';

describe('Contribute View', () => {
  function mount(){
    return render(
      <RouterMock>
        <ContributeView />
      </RouterMock>
    );
  }

  it('should contain logo and heading', () => {
    const { getByAltText, getByRole } = mount();
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Contribute' })).toBeInTheDocument();
  });

  it('should contain a link to contribute via Google form', () => {
    const { getByText } = mount();
    expect(getByText(/fill google form/i)).toHaveAttribute('href', ENV.ADD_COMPANY_FORM_LINK);
  });

  it('should contain a link to contribute via Github', () => {
    const link = 'https://github.com/rafaelcamargo/4dayweek#contributing';
    const { getByText } = mount();
    expect(getByText(/open a pull request/i)).toHaveAttribute('href', link);
  });
});
