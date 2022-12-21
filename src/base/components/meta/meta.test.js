import { render } from '@testing-library/react';
import { Meta } from './meta';

describe('Meta', () => {
  function mount({ content, ...rest } = {}){
    return render(
      <Meta {...rest}>
        {content}
      </Meta>
    );
  }

  it('should build default meta tags', () => {
    mount();
    const title = 'Four-Day Week';
    const description = 'This website gets together all the companies that already work four days a week or that sympathize with shorter work weeks.';
    const keywords = 'four-day week, rafael camargo, comapanies';
    expect(queryElement('title').textContent).toEqual(title);
    expect(queryMetaContent('twitter:title')).toEqual(title);
    expect(queryMetaContent('og:title', 'property')).toEqual(title);
    expect(queryMetaContent('description')).toEqual(description);
    expect(queryMetaContent('twitter:description')).toEqual(description);
    expect(queryMetaContent('og:description', 'property')).toEqual(description);
    expect(queryMetaContent('keywords')).toEqual(keywords);
  });

  it('should optionally build custom meta tags', () => {
    const props = {
      title: 'Custom Title',
      description: 'Some description',
      keywords: 'some, keywords'
    };
    mount(props);
    expect(queryElement('title').textContent).toEqual(props.title);
    expect(queryMetaContent('description')).toEqual(props.description);
    expect(queryMetaContent('keywords')).toEqual(props.keywords);
  });

  it('should optionally render custom content', () => {
    const heading = 'Hello!';
    const { getByRole } = mount({ content: <h1>{heading}</h1> });
    expect(getByRole('heading', { name: heading }));
  });

  function queryMetaContent(name, attrName = 'name'){
    return document.querySelector(`meta[${attrName}="${name}"]`).getAttribute('content');
  }

  function queryElement(selector){
    return document.querySelector(selector);
  }
});
