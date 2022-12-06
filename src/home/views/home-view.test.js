import { asyncMount, within, userEvent, pause, RouterMock } from '@src/base/services/testing';
import { history } from '@src/base/services/history';
import { getSearchParams } from '@src/base/services/search-params';
import COMPANY_SORTS from '@src/companies/constants/company-sorts';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import { HomeView } from './home-view';

describe('Home View', () => {
  async function mount(){
    const user = userEvent.setup();
    const result = await asyncMount(
      <RouterMock>
        <HomeView />
      </RouterMock>
    );
    return { user, ...result };
  }

  beforeEach(() => {
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
  });

  afterEach(() => {
    history.push('/');
  });

  function queryCompanyListItems(container){
    return container.querySelectorAll('article ul li');
  }

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

  it('should sort companies by adoption by default', async () => {
    const { container } = await mount();
    const items = queryCompanyListItems(container);
    expect(within(items[0]).getByText(companiesMock[1].name)).toBeInTheDocument();
    expect(within(items[1]).getByText(companiesMock[0].name)).toBeInTheDocument();
  });

  it('should optionally sort companies by country', async () => {
    const { container, user, getByRole } = await mount();
    user.selectOptions(getByRole('combobox', { name: 'company sort' }), [COMPANY_SORTS.COUNTRY]);
    await pause(100);
    const items = queryCompanyListItems(container);
    expect(within(items[0]).getByText(companiesMock[1].name)).toBeInTheDocument();
    expect(within(items[1]).getByText(companiesMock[0].name)).toBeInTheDocument();
    expect(getSearchParams().sort).toEqual(COMPANY_SORTS.COUNTRY);
  });

  it('should optionally sort companies by name', async () => {
    const { container, user, getByRole } = await mount();
    user.selectOptions(getByRole('combobox', { name: 'company sort' }), [COMPANY_SORTS.NAME]);
    await pause(100);
    const items = queryCompanyListItems(container);
    expect(within(items[0]).getByText(companiesMock[0].name)).toBeInTheDocument();
    expect(within(items[1]).getByText(companiesMock[1].name)).toBeInTheDocument();
    expect(getSearchParams().sort).toEqual(COMPANY_SORTS.NAME);
  });

  it('should optionally sort companies by sort type found on url', async () => {
    const initialRoute = `/?sort=${COMPANY_SORTS.NAME}`;
    history.push(initialRoute);
    const { container } = await mount();
    const items = queryCompanyListItems(container);
    expect(within(items[0]).getByText(companiesMock[0].name)).toBeInTheDocument();
    expect(within(items[1]).getByText(companiesMock[1].name)).toBeInTheDocument();
  });
});
