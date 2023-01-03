# 4 day week
> A list of companies friendly to 4 day workweek

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/rafaelcamargo/4dayweek/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rafaelcamargo/4dayweek/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/rafaelcamargo/4dayweek/badge.svg?branch=main)](https://coveralls.io/github/rafaelcamargo/4dayweek?branch=main)

## Contributing

1. Install [Node](https://nodejs.org/en/). Download the "Recommend for Most Users" version.

2. Clone the repo:
``` bash
git clone git@github.com:rafaelcamargo/4dayweek.git
```

3. Go to the project directory
``` bash
cd 4dayweek
```

4. Install the project dependencies
``` bash
npm install
```

5. Create a `<company-name>.json` in `src/companies/data` containing the following data:
``` javascript
{
  "name": String,
  // [Required] Company's name.
  "adoption": String,
  // [Required] "Full" or "Partial".
  // Full: Company adopts 4-day week for everyone during the whole year.
  // Partial: Company adopts 4-day week with restrictions (e.g. During summer only).
  "website": String,
  // [Required] Company's website.
  "careers_page": String,
  // [Required] Company's careers page.
  "description": String,
  // [Required] Brief description on how company applies 4-day week.
  "origin": String,
  // [Optional] City/Country where company has been founded (e.g. Chicago, USA).
  "created_on": String,
  // [Required] Date you you are creating the file.
  "updated_on": String
  // [Optional] Date you are updating the file.
}
```

6. Check your changes running the command below and accessing `http://localhost:9000`:
``` bash
npm run start
```

## Tests

1. In case you have changed any website behavior, ensure that all changes are covered with automated tests:
``` bash
npm run test
```

2. You can optionally generate a coverage report while running tests:
``` bash
npm run test -- --coverage
```
