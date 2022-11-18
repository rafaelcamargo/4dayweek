import { render, RouterMock } from '@src/base/services/testing';
import { Menu } from './menu';

describe('Menu', () => {
  function mount(){
    return render(
      <RouterMock>
        <Menu />
      </RouterMock>
    );
  }

  it('should contain three items', () => {
    const { getByText } = mount();
    expect(getByText(/home/)).toHaveAttribute('href', '/');
    expect(getByText(/contribute/)).toHaveAttribute('href', '/contribute');
    expect(getByText(/feedback/)).toHaveAttribute('href', '/feedback');
  });
});
