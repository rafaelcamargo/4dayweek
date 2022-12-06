import { history } from '@src/base/services/history';
import { getSearchParams, setSearchParams } from './search-params';

describe('Search Params Service', () => {
  it('should get search param', () => {
    const name = 'Rafael';
    history.push(`/?name=${name}`);
    expect(getSearchParams()).toEqual({ name });
  });

  it('should set search param', () => {
    const city = 'Joinville';
    history.push(`/geo?city=${city}`);
    history.push = jest.fn();
    setSearchParams({ country: 'Brazil' });
    expect(history.push).toHaveBeenCalledWith('/geo?city=Joinville&country=Brazil');
  });
});
