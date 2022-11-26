import ENV from '@environment';

const _public = {};

_public.isProduction = () => {
  return ENV.TYPE == 'production';
};

export default _public;
