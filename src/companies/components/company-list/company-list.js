import './company-list.styl';
import { useState } from 'react';
import { Fetcher } from '@glorious/taslonic/react';
import { Link } from '@src/base/components/link/link';
import { CompanyOrigin } from '@src/companies/components/company-origin/company-origin';
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
                  <h3>
                    {company.name}
                    <CompanyOrigin origin={company.origin} />
                  </h3>
                  <span className="fwd-company-list-item-detail-adoption">
                    <div className="fwd-company-list-item-detail-adoption-label">
                      Adoption
                    </div>
                    {company.adoption}
                  </span>
                </summary>
                <div className="fwd-company-list-item-detail-content">
                  <p>{company.description}</p>
                  <footer>
                    <Link href={buildFullCompanyLink(company.website)} external>
                      Website
                    </Link>
                    <Link href={buildFullCompanyLink(company.careers_page)} external>
                      Careers
                    </Link>
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

function buildFullCompanyLink(url){
  return `${url}?utm_source=4dayweek.rafaelcamargo.com`;
}
