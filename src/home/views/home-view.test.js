import { waitFor, asyncMount } from '@src/base/services/testing';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import { HomeView } from './home-view';

describe('Home View', () => {
  async function mount(){
    return await asyncMount(<HomeView />);
  }

  beforeEach(() => {
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
  });

  it('should contain a logo', async () => {
    const { getByAltText } = await mount();
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
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
