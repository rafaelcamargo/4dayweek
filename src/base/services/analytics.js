import statorama from '@compilorama/statorama';
import ENV from '@environment';

const _public = {};

_public.init = () => {
  const { ENABLED, SRC, ID } = ENV.ANALYTICS;
  statorama.init({ enabled: ENABLED, src: SRC, id: ID });
};

export default _public;
