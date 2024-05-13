import { useState } from "react";
import { NavButton } from "../sidebar/NavButton";
import { btnIds } from "../sidebar/Sidebar";
import { labelBySection } from "../sidebar/Sidebar";
import { Section } from "../sidebar/NavButton";

/**
 * Props for the TopbarNav component.
 */
interface TopbarNavProps {
  /** Function to set the active section. */
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
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
export const TopbarNav = ({
  setActiveSection,
  buttonsWithText,
}: TopbarNavProps): JSX.Element => {
  const [activeButton, setActiveButton] = useState("btn-dashboard");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setActiveButton(id);
    setActiveSection(id.substring(4));
    if (id === btnIds.logout) return console.log("logged out");
  };
  return (
    <div className="flex items-center bg-white p-3">
      <div className="mr-5 h-10 w-10">
        <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
      </div>
      <div className="flex w-full justify-around">
        {Object.keys(btnIds).map((section) => {
          return (
            <NavButton
              withText={buttonsWithText}
              id={btnIds[section]}
              onClick={handleClick}
              isActive={
                section === "logout" ? false : activeButton === btnIds[section]
              }
              isMobile={true}
              label={labelBySection[section as Section]}
            />
          );
        })}
      </div>
    </div>
  );
};
