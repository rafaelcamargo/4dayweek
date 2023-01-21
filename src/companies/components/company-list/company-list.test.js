import { render, waitFor, userEvent } from '@src/base/services/testing';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import { CompanyList } from './company-list';

describe('Company List', () => {
  async function mount(){
    const user = userEvent.setup();
    const { getByText, ...rest } = render(<CompanyList />);
    await waitFor(() => {
      expect(getByText(companiesMock[0].name)).toBeInTheDocument();
    });
    return { user, getByText, ...rest };
  }

  beforeEach(() => {
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
  });

  it('should show company adoption', async () => {
    const { getByText } = await mount();
    const [company] = companiesMock;
    expect(getByText(company.adoption)).toBeInTheDocument();
  });

  it('should show company origin', async () => {
    const { getByText } = await mount();
    const [companyCity] = companiesMock[0].origin.split(',');
    expect(getByText(companyCity)).toBeInTheDocument();
  });

  it('should contain links to the company\'s home and careers pages', async () => {
    const { getAllByText } = await mount();
    const [company] = companiesMock;
    expect(getAllByText(/website/i)[0]).toHaveAttribute(
      'href', `${company.website}?utm_source=4dayweek.rafaelcamargo.com`
    );
    expect(getAllByText(/careers/i)[0]).toHaveAttribute(
      'href', `${company.careers_page}?utm_source=4dayweek.rafaelcamargo.com`
    );
  });
});
