import './country-flag.styl';

export const CountryFlag = ({ countryName }) => {
  return (
    <span className={buildCssClasses(countryName)}>
      {countryName}
    </span>
  );
};

function buildCssClasses(countryName){
  const baseCssClass = 'fdw-country-flag';
  const countryCode = getCountryISO3166Alpha2Code(countryName);
  const cssClasses = [baseCssClass];
  if(countryCode) cssClasses.push(`${baseCssClass}-${countryCode}`);
  return cssClasses.join(' ');
}

function getCountryISO3166Alpha2Code(countryName = ''){
  return {
    'australia': 'au',
    'austria': 'at',
    'brazil': 'br',
    'canada': 'ca',
    'denmark': 'dk',
    'france': 'fr',
    'germany': 'de',
    'ireland': 'ie',
    'netherlands': 'nl',
    'switzerland': 'ch',
    'uk': 'gb',
    'usa': 'us'
  }[countryName.trim().toLowerCase()] || '';
}
