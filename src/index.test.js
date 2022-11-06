import { screen } from '@testing-library/react';
import analyticsService from '@src/base/services/analytics';

describe('Index', () => {
  beforeAll(() => {
    analyticsService.init = jest.fn();
    document.body.innerHTML = '<div data-app></div>';
    require('@src/index.js');
  });

  it('should render a homepage', () => {
    expect(analyticsService.init).toHaveBeenCalled();
    expect(screen.getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
  });
});
