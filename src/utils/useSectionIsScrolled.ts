import { useContext } from "react";
import { SectionIsScrolledContext } from "./SectionIsScrolledProvider";

/**
 * Custom hook to access the section scroll state.
 * It retrieves the context provided by SectionIsScrolledProvider.
 *
 * @returns The scroll state and the scroll handler function.
 * @throws An error if the hook is used outside of SectionIsScrolledProvider.
 */
export const useSectionIsScrolled = () => {
  const context = useContext(SectionIsScrolledContext);

  if (context === undefined) {
    throw new Error(
      "SectionIsScrolledContext must be used within a SectionIsScrolledProvider",
    );
  }

  return context;
};
