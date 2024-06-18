import statorama from '@compilorama/statorama';
import ENV from '@environment';
import analyticsService from './analytics';

describe('Analytics Service', () => {
  beforeEach(() => {
    statorama.init = jest.fn();
  });

  it('should initialize statorama', () => {
    const { ENABLED, SRC, ID } = ENV.ANALYTICS;
    analyticsService.init();
    expect(statorama.init).toHaveBeenCalledWith({
      enabled: ENABLED,
      src: SRC,
      id: ID
    });
  });
});
