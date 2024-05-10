export const formatUSDAmount = (num: number, withCents = true) => {
  const USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: withCents ? 2 : 0,
  });
  return USD.format(num);
};
