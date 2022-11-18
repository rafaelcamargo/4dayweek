import { render, RouterMock } from '@src/base/services/testing';
import { View } from './view';

describe('View', () => {
  function mount({ content, ...rest } = {}){
    return render(
      <RouterMock>
        <View {...rest}>
          {content}
        </View>
      </RouterMock>
    );
  }

  it('should render default meta tags', () => {
    mount();
    expect(document.querySelector('title').innerHTML).toEqual('Four-Day Week');
  });

  it('should render custom meta tags', () => {
    const heading = 'Custom title';
    mount({ heading });
    expect(document.querySelector('title').innerHTML).toEqual(heading);
  });

  it('should render a content', () => {
    const content = 'This is some content';
    const { getByText } = mount({ content });
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should optionally render a heading', () => {
    const heading = 'About';
    const { getByRole } = mount({ heading });
    expect(getByRole('heading', { name: heading })).toBeInTheDocument();
  });
});
