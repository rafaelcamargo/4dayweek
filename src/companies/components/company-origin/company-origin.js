import 'flag-icons/css/flag-icons.min.css';
import './company-origin.styl';
import { formatOrigin } from '@src/companies/services/company-origin';

export const CompanyOrigin = ({ origin }) => {
  const { city, countryCode } = formatOrigin(origin);

  return (
    <div className="fdw-company-origin">
      {buildContryFlagElement(countryCode)}
      {city || 'Unknown'}
    </div>
  );
};

function buildContryFlagElement(countryCode){
  return countryCode && <span className={`fi fi-${countryCode}`}></span>;
}
