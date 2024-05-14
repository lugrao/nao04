/**
 * Returns the current date formatted in Spanish locale.
 *
 * @returns {string} The current date in the format "DD de MMM de YYYY".
 *
 * @example
 *
 * ```tsx
 * console.log(getSpanishDate());
 * // 14 may 2024
 * ```
 */
export const getSpanishDate = (): string => {
  const date = new Date();
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
