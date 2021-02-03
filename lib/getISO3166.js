"use strict";

const { getData } = require("./iso3166DataUtils");

// assign default to USA country first

module.exports = function getISO3166(country) {
  const iso3166_data = getData();

  if (country.length === 0) {
    return iso3166_data[0];
  }

  if (country.length === 2) {
    return (
      iso3166_data.find(
        (iso3166_datum) => country.toUpperCase() === iso3166_datum.alpha2,
      ) || {}
    );
  }

  if (country.length === 3) {
    return (
      iso3166_data.find(
        (iso3166_datum) => country.toUpperCase() === iso3166_datum.alpha3,
      ) || {}
    );
  }

  return (
    iso3166_data.find(
      (iso3166_datum) =>
        country.toUpperCase() === iso3166_datum.country_name.toUpperCase(),
    ) || {}
  );
};
