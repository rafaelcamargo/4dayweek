import ReactDOM from 'react-dom';
import { screen, waitFor, userEvent } from '@src/base/services/testing';
import companiesResource from '@src/companies/resources/companies';
import companiesMock from '@src/companies/mocks/companies';
import analyticsService from '@src/base/services/analytics';
import { mount } from '.';

describe('Index', () => {
  beforeEach(() => {
    analyticsService.init = jest.fn();
    companiesResource.get = jest.fn(() => Promise.resolve({ data: companiesMock }));
    document.body.innerHTML = '<div data-app></div>';
  });

  afterEach(async () => {
    const container = document.querySelector('[data-app]');
    ReactDOM.unmountComponentAtNode(container);
    await new Promise(resolve => {
      setTimeout(() => {
        container.remove();
        resolve();
      });
    });
  });

  it('should render a homepage', async () => {
    mount();
    expect(analyticsService.init).toHaveBeenCalled();
    expect(screen.getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(companiesMock[0].name)).toBeInTheDocument();
    });
  });

  it('should track page view on route change', async () => {
    mount();
    const user = userEvent.setup();
    await waitFor(() => {
      expect(screen.getByText(companiesMock[0].name)).toBeInTheDocument();
    });
    user.click(screen.getByRole('link', { name: 'feedback' }));
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Feedback' })).toBeInTheDocument();
    });
  });
});
