import { render, RouterMock } from '@src/base/services/testing';
import { Header } from './header';

describe('Header', () => {
  function mount(){
    return render(
      <RouterMock>
        <Header />
      </RouterMock>
    );
  }

  it('should contain link to home', () => {
    const { getByLabelText } = mount();
    expect(getByLabelText('homepage')).toHaveAttribute('href', '/');
  });
});
