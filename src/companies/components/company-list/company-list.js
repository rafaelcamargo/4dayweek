import './company-list.styl';
import { useState } from 'react';
import { Fetcher } from '@glorious/taslonic/react';
import { Link } from '@src/base/components/link/link';
import companiesResource from '@src/companies/resources/companies';

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const handleFetch = () => companiesResource.get().then(({ data }) => setCompanies(data));

  return (
    <div className="fwd-company-list-wrapper">
      <Fetcher onFetch={handleFetch}>
        <ul className="fwd-company-list">
          {companies.map((company, index) => (
            <li key={index}>
              <details>
                <summary className="fwd-company-list-item-detail-summary">
                  <h3>{company.name}</h3>
                </summary>
                <div className="fwd-company-list-item-detail-content">
                  <p>{company.description}</p>
                  <footer>
                    <Link href={company.website} external>Website</Link>
                    <Link href={company.careers_page} external>Careers</Link>
                  </footer>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Fetcher>
    </div>
  );
};
