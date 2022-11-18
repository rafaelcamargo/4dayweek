import metaTagsService from './meta-tags';

describe('Meta Tags Service', () => {
  it('should not duplicate meta tags', () => {
    metaTagsService.build('/');
    metaTagsService.build('/contribute');
    expect(document.querySelectorAll('title')).toHaveLength(1);
  });
});
