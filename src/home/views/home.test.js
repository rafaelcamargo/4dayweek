import { render } from '@testing-library/react';
import { HomeView } from './home';

describe('Home View', () => {
  it('should contain a logo', () => {
    const { getByAltText } = render(<HomeView />);
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
  });
});
