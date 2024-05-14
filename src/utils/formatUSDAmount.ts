/**
 * Formats a number as a USD currency string.
 *
 * @param {number} num - The number to format.
 * @param {boolean} [withCents=true] - Whether to include cents in the formatted string.
 * @returns {string} The formatted USD currency string.
 */
export const formatUSDAmount = (
  num: number,
  withCents: boolean = true,
): string => {
  const USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: withCents ? 2 : 0,
  });
  return USD.format(num);
};
