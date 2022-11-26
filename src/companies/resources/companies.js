import baseResource from '@src/base/resources/base/base';
import environmentService from '@src/base/services/environment';

const _public = {};

let cachedResponse;

_public.get = () => {
  return environmentService.isProduction() && cachedResponse ?
    Promise.resolve(cachedResponse) :
    getFreshCompanies();
};

_public.flushCache = () => {
  cachedResponse = null;
};

function getFreshCompanies(){
  const params = { t: Date.now() };
  return baseResource.get('/data/companies.json', { params }).then(response => {
    cachedResponse = response;
    return cachedResponse;
  });
}

export default _public;
