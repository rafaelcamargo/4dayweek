import { history } from '@src/base/services/history';

export const getSearchParams = () => {
  const params = new URLSearchParams(window.location.search);
  return Array.from(params.entries()).reduce((result, [key, value]) => {
    return { ...result, [key]: value };
  }, {});
};

export const setSearchParams = newParams => {
  const currentParams = getSearchParams();
  const { pathname } = window.location;
  const params = stringifyParams({ ...currentParams, ...newParams });
  history.push(`${pathname}?${params}`);
};

function stringifyParams(params){
  return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
}
