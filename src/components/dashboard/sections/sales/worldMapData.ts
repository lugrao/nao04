import countryCodes from "./countryCodes.json";

export const data: { id: string; value: number }[] = [];

countryCodes.forEach((countryCode) =>
  data.push({
    id: countryCode,
    value: Math.floor(Math.random() * 1000001),
  }),
);
