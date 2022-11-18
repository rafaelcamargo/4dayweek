import { waitFor, asyncMount, within, RouterMock } from '@src/base/services/testing';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import { HomeView } from './home-view';

describe('Home View', () => {
  async function mount(){
    return await asyncMount(
      <RouterMock>
        <HomeView />
      </RouterMock>
    );
  }

  beforeEach(() => {
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
  });

  it('should contain logo and heading', async () => {
    const { getByAltText, getByRole } = await mount();
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Four-Day Week' })).toBeInTheDocument();
  });

  it('should contain a link to contribute', async () => {
    const { container } = await mount();
    const companyListHeading = container.querySelector('h2');
    expect(
      within(companyListHeading).getByText(/contribute/i)
    ).toHaveAttribute('href', '/contribute');
  });

  it('should contain a company list', async () => {
    const { getByText } = await mount();
    await waitFor(() => {
      companiesMock.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });
});
