import { render } from '@src/base/services/testing';
import { Link } from './link';

describe('Link', () => {
  function mount({ content, ...rest }){
    return render(
      <Link {...rest}>
        {content}
      </Link>
    );
  }

  it('should render a content', () => {
    const content = 'website';
    const href = 'https://some.website.com';
    const { getByText } = mount({ content, href });
    expect(getByText(content)).toHaveAttribute('href', href);
    expect(getByText(content)).not.toHaveAttribute('rel');
    expect(getByText(content)).not.toHaveAttribute('target');
  });

  it('should set rel and target attributes for external links', () => {
    const content = 'website';
    const href = 'https://some.website.com';
    const { getByText } = mount({ content, href, external: true });
    expect(getByText(content)).toHaveAttribute('rel', 'noopener noreferrer nofollow');
    expect(getByText(content)).toHaveAttribute('target', '_blank');
  });
});
