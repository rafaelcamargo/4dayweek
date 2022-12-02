import ENV from '@environment';
import GAnalytics from '@glorious/analytics';
import { GAnalyticsMock, ganalyticsInstanceMock } from '@src/base/mocks/glorious-analytics';
import analyticsService from './analytics';

jest.mock('@glorious/analytics');
GAnalytics.mockImplementation(GAnalyticsMock);

describe('Analytics Service', () => {
  beforeEach(() => {
    ganalyticsInstanceMock.init = jest.fn();
    ganalyticsInstanceMock.trackPageview = jest.fn();
  });

  it('should initialize glorious analytics', () => {
    analyticsService.init();
    expect(ganalyticsInstanceMock.init).toHaveBeenCalledWith(
      ENV.ANALYTICS.PLAUSIBLE.DOMAIN, {
        trackLocalhost: false
      }
    );
  });

  it('should track page view', () => {
    analyticsService.init();
    analyticsService.trackPageView();
    expect(ganalyticsInstanceMock.trackPageview).toHaveBeenCalledTimes(1);
  });
});
