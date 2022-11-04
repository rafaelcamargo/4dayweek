import { render } from '@testing-library/react';
import { HomeView } from './home';

describe('Home View', () => {
  it('should contain a home cover', () => {
    const { getByText } = render(<HomeView />);
    expect(getByText('Hello!')).toBeInTheDocument();
  });
});
