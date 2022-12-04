export const formatOrigin = rawOrigin => {
  if(!rawOrigin) return {};
  const [city, country] = rawOrigin.split(',');
  return {
    countryCode: getCountryISO3166Alpha2Code(country),
    city
  };
};

function getCountryISO3166Alpha2Code(countryName){
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
