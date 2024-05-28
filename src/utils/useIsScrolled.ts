import { useState } from "react";

/**
 * Custom hook to determine if a scrollable element has been scrolled.
 *
 * @returns {[boolean, (e: React.UIEvent<HTMLDivElement>) => void]} An array containing:
 * - `isScrolled`: A boolean indicating if the element has been scrolled.
 * - `handleScroll`: A function to handle the scroll event of the element.
 */
export const useIsScrolled = (): [
  boolean,
  (e: React.UIEvent<HTMLDivElement>) => void,
] => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;
    setIsScrolled(div.scrollTop > 0);
  };

  return [isScrolled, handleScroll] as const;
};
