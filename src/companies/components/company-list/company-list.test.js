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
});
