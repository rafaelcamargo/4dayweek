import { formatSrc } from './assets';

describe('Assets Service', () => {
  it('should format relative assets source', () => {
    expect(
      formatSrc(
        'http://localhost:8000/assets/../assets/images/logo-123.svg'
      )
    ).toEqual('/assets/images/logo-123.svg');
    expect(
      formatSrc(
        'http://localhost:9000/assets/../assets/images/sun-123.png'
      )
    ).toEqual('/assets/images/sun-123.png');
  });
});
