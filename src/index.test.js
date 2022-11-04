import { screen } from '@testing-library/react';

describe('Index', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div data-app></div>';
    require('@src/index.js');
  });

  it('should render a homepage', () => {
    expect(screen.getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
  });
});
