import { useEffect, useState } from "react";

/**
 * Represents the dimensions of the window.
 */
export interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
}

/**
 * Custom hook to get the current window dimensions.
 *
 * @returns {WindowDimensions} An object of type {@link WindowDimensions} containing the width and height of the window.
 */
const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    /**
     * Updates the window dimensions state with the current window width and height.
     */
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    // Event listener for window resize.
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
