import ENV from '@environment';
import GAnalytics from '@glorious/analytics';

let analytics;

const _public = {};

_public.init = () => {
  const { DOMAIN, OPTIONS } = ENV.ANALYTICS.PLAUSIBLE;
  analytics = new GAnalytics();
  analytics.init(DOMAIN, OPTIONS);
};

_public.trackPageView = () => analytics.trackPageview();

export default _public;
