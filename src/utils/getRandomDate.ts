/**
 * Represents a year as a number.
 */
type Year = number;

/**
 * Generates a random date between the given start and end years.
 *
 * @param {Year} startYear - The start year for the date range.
 * @param {Year} endYear - The end year for the date range.
 * @returns {string} A random date in the format "DD/MM/YYYY".
 */
export const generateRandomDate = (startYear: Year, endYear: Year): string => {
  const startDate = new Date(`${startYear}-01-01`);
  const endDate = new Date(`${endYear}-12-31`);
  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTimestamp);
  const day = String(randomDate.getDate()).padStart(2, "0");
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;
};
