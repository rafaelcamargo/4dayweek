import './home-view.styl';
import { useState } from 'react';
import { Link } from '@src/base/components/link/link';
import { View } from '@src/base/components/view/view';
import { getSearchParams, setSearchParams } from '@src/base/services/search-params';
import COMPANY_SORTS from '@src/companies/constants/company-sorts';
import { CompanyList } from '@src/companies/components/company-list/company-list';

export const HomeView = () => {
  const [companiesSort, setCompaniesSort] = useState(getInitialOrder());
  const onCompanySort = ({ target: { value } }) => {
    setSearchParams({ sort: value });
    setCompaniesSort(value);
  };

  return (
    <div className="fdw-home-view">
      <View heading="Four-Day Week">
        <p>
          The idea behind this website is getting togheter all the companies
          that already work four days a week or that sympathize with shorter
          work weeks.
        </p>
        <h2>
          <span>
            Companies by
            <select
              aria-label="company sort"
              className="fdw-home-view-company-sort-select"
              value={companiesSort}
              onChange={onCompanySort}
            >
              {Object.values(COMPANY_SORTS).map(sort => (
                <option value={sort} key={sort}>{sort}</option>
              ))}
            </select>
          </span>
          <span>
            <Link to="/contribute">
              <span role="presentation">+</span> Contribute
            </Link>
          </span>
        </h2>
        <CompanyList sortBy={companiesSort} />
      </View>
    </div>
  );
};

function getInitialOrder(){
  return getSearchParams().sort || COMPANY_SORTS.ADOPTION;
}
