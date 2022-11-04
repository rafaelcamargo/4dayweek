import { render } from '@testing-library/react';
import { Blockquote } from './blockquote';

describe('Blockquote', () => {
  function mount({ content, ...rest }){
    return render(
      <Blockquote {...rest}>
        {content}
      </Blockquote>
    );
  }

  it('should render a content', () => {
    const content = 'This is a quotation';
    const { getByText } = mount({ content });
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should optionally render a cite', () => {
    const cite = 'https://some.cite.com/';
    const { container } = mount({ cite });
    expect(container.firstChild.querySelector('blockquote')).toHaveAttribute('cite', cite);
  });

  it('should optionally render a caption', () => {
    const caption = 'This is a caption';
    const { getByText } = mount({ caption });
    expect(getByText(caption)).toBeInTheDocument();
  });
});
