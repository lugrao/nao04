/**
 * Removes trailing slashes from the given string.
 * 
 * @param {string} str - The string from which to remove trailing slashes.
 * @returns {string} - The string without trailing slashes.
 */
export const removeTrailingSlashes = (str: string) => str.replace(/\/+$/, "");
