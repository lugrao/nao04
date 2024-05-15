import { createContext, ReactNode } from "react";
import { useIsScrolled } from "./useIsScrolled";

/**
 * Context for tracking if a section is scrolled.
 */
export const SectionIsScrolledContext = createContext<
  [boolean, (e: React.UIEvent<HTMLDivElement>) => void] | undefined
>(undefined);

/**
 * Props for the {@link SectionIsScrolledProvider}.
 */
export interface SectionIsScrolledProviderProps {
  // Children components to be wrapped by the provider
  children: ReactNode;
}

/**
 * Provider component to manage the section scroll state.
 *
 * @component
 * @param {SectionIsScrolledProviderProps} props - See {@link SectionIsScrolledProviderProps}.
 * @returns {JSX.Element} The provider component.
 */
export const SectionIsScrolledProvider = ({
  children,
}: SectionIsScrolledProviderProps) => {
  const [isScrolled, handleScroll] = useIsScrolled();

  return (
    <SectionIsScrolledContext.Provider value={[isScrolled, handleScroll]}>
      {children}
    </SectionIsScrolledContext.Provider>
  );
};
