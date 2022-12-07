import './company-origin.styl';
import { CountryFlag } from '@src/base/components/country-flag/country-flag';

export const CompanyOrigin = ({ origin = '' }) => {
  const [city, countryName = ''] = origin.split(',');

  return (
    <div className="fdw-company-origin">
      <CountryFlag countryName={countryName.trim()} />
      {city || 'Unknown'}
    </div>
  );
};
