import baseResource from '@src/base/resources/base/base';

const _public = {};

_public.get = () => {
  const params = { t: Date.now() };
  return baseResource.get('/data/companies.json', { params });
};

export default _public;
