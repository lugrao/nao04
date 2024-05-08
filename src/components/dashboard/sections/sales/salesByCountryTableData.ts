import { SalesByCountryTableData } from "./SalesByCountryTable";
import worldCountries from "./worldCountries.json";

export const data: SalesByCountryTableData = []

worldCountries.features.forEach((country) =>
  data.push({
    countryCode: country.id,
    countryName: country.properties.name,
    numberOfSales: Math.floor(Math.random() * 10001),
    totalIncome: Math.floor(Math.random() * 1000001),
  }),
);
