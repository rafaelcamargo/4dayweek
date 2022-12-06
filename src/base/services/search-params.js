import queryString from 'query-string';
import { history } from '@src/base/services/history';

export const getSearchParams = () => {
  return queryString.parse(window.location.search);
};

export const setSearchParams = newParams => {
  const currentParams = getSearchParams();
  const { pathname } = window.location;
  const params = queryString.stringify({ ...currentParams, ...newParams });
  history.push(`${pathname}?${params}`);
};
