import { render } from '@testing-library/react';
import { View } from './view';

describe('View', () => {
  function mount({ content, ...rest }){
    return render(
      <View {...rest}>
        {content}
      </View>
    );
  }

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
