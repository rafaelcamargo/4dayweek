import { render, waitFor } from '@testing-library/react';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import { CompanyList } from './company-list';

describe('Company List', () => {
  function mount(){
    return render(<CompanyList />);
  }

  beforeEach(() => {
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
  });

  it('should list companies', async () => {
    const { getByText } = mount();
    await waitFor(() => {
      companiesMock.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  it('should show company adoption', async () => {
    const { getByText } = mount();
    const [company] = companiesMock;
    await waitFor(() => {
      expect(getByText(company.adoption)).toBeInTheDocument();
    });
  });

  it('should show company origin', async () => {
    const { getByText } = mount();
    const [company] = companiesMock;
    const [companyCity] = company.origin.split(',');
    await waitFor(() => {
      expect(getByText(companyCity)).toBeInTheDocument();
    });
  });

  it('should contain links to the company\'s home and careers pages', async () => {
    const { getAllByText } = mount();
    const [company] = companiesMock;
    await waitFor(() => {
      expect(getAllByText(/website/i)[0]).toHaveAttribute('href', `${company.website}?utm_source=4dayweek.rafaelcamargo.com`);
    });
    expect(getAllByText(/careers/i)[0]).toHaveAttribute('href', `${company.careers_page}?utm_source=4dayweek.rafaelcamargo.com`);
  });
});
