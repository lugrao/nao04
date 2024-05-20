import { NavButton } from "../sidebar/NavButton";
import { btnIds } from "../sidebar/Sidebar";
import { labelBySectionPath } from "../sidebar/Sidebar";
import { SectionPath } from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { removeTrailingSlashes } from "src/utils/removeTrailingSlashes";

/**
 * Props for the TopbarNav component.
 */
export interface TopbarNavProps {
  /** Indicates whether buttons should display text. */
  buttonsWithText: boolean;
}

/**
 * Displays navigation buttons.
 *
 * @component
 * @param {TopbarNavProps} props - See {@link TopbarNavProps}.
 * @returns {JSX.Element} JSX element representing the TopbarNav component.
 */
export const TopbarNav = ({ buttonsWithText }: TopbarNavProps): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center bg-white p-3">
      <div className="mr-5 h-10 w-10">
        <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
      </div>
      <div className="flex w-full justify-around">
        {Object.keys(btnIds).map((sectionPath) => {
          return (
            <NavButton
              withText={buttonsWithText}
              id={btnIds[sectionPath]}
              isActive={
                sectionPath === "/dashboard/logout"
                  ? false
                  : removeTrailingSlashes(pathname) === sectionPath
              }
              isMobile={true}
              label={labelBySectionPath[sectionPath as SectionPath]}
            />
          );
        })}
      </div>
    </div>
  );
};
