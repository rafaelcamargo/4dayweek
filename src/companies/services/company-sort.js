import COMPANY_SORTS from '@src/companies/constants/company-sorts';

export const sortCompaniesBy = (companies, sortType) => {
  const sort = getSorterByType(sortType);
  return sort(cloneData(companies));
};

function getSorterByType(sortType){
  const { NAME, COUNTRY, ADOPTION } = COMPANY_SORTS;
  const sortByName = companies => sortByAttr(companies, NAME);
  return {
    [NAME]: sortByName,
    [ADOPTION]: companies => sortByAttr(companies, ADOPTION),
    [COUNTRY]: sortByCountry
  }[sortType] || sortByName;
}

function sortByAttr(companies, attr){
  return companies.sort((a, b) => {
    return a[attr].toLowerCase() > b[attr].toLowerCase() ? 1 : -1;
  });
}

function sortByCountry(companies){
  return companies.sort((a, b) => {
    return getCountryName(a) > getCountryName(b) ? 1 : -1;
  });
}

function getCountryName({ origin }){
  return origin.split(',')[1].trim().toLowerCase();
}

function cloneData(data){
  return JSON.parse(JSON.stringify(data));
}
