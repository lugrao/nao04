import { useState } from "react";
import { NavButton } from "./NavButton";
import { CustomerService } from "./CustomerService";
import { ButtonId } from "./NavButton";
import { useIsScrolled } from "utils/useIsScrolled";
import { Section } from "./NavButton";
import { Label } from "./NavButton";

/**
 * Represents a mapping of string keys to ButtonId values.
 */
interface ButtonIds {
  [K: string]: ButtonId;
}

/**
 * Mapping of section names to button ids.
 */
export const btnIds: ButtonIds = {
  dashboard: "btn-dashboard",
  sales: "btn-sales",
  products: "btn-products",
  invoices: "btn-invoices",
  logout: "btn-logout",
};

/**
 * Mapping of section names to section labels.
 */
export const labelBySection: Record<Section, Label> = {
  dashboard: "Dashboard",
  sales: "Ventas",
  products: "Productos",
  invoices: "Recibos",
  logout: "Cerrar sesión",
};

/**
 * Props for the Sidebar component.
 */
interface SidebarProps {
  /** Function to set the active section of the sidebar. */
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Renders a sidebar with a navigation menu and a customer service section.
 * @component
 * @param {SidebarProps} props - See {@link SidebarProps}.
 * @see {@link SidebarProps}
 * @returns {JSX.Element} JSX element representing the Sidebar component.
 */
export const Sidebar = ({ setActiveSection }: SidebarProps): JSX.Element => {
  const [isScrolled, handleScroll] = useIsScrolled();
  const [activeButton, setActiveButton] = useState("btn-dashboard");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setActiveButton(id);
    setActiveSection(id.substring(4));
    if (id === btnIds.logout) return console.log("logged out");
  };

  return (
    <div className="flex w-72 flex-col items-center  bg-white pt-7">
      <div
        className={`${isScrolled && "shadow-bottom"} z-10 flex  w-full justify-center`}
      >
        <div className="mb-7 mt-0 flex h-20 w-20 justify-center">
          <img src="/capsule-corp.svg" alt="Capsule Corp. logo" />
        </div>
      </div>
      <div
        className="flex flex-col items-center overflow-auto  pt-6"
        onScroll={handleScroll}
      >
        <div className="flex flex-col gap-4 pb-7">
          {Object.keys(btnIds).map((section) => {
            return (
              <div
                className={`
              ${section == "dashboard" && "mb-3"}
              ${section == "logout" && "mt-6"}
              `}
              >
                <NavButton
                  withText={true}
                  id={btnIds[section]}
                  onClick={handleClick}
                  isActive={
                    section === "logout"
                      ? false
                      : activeButton === btnIds[section]
                  }
                  isMobile={false}
                  label={labelBySection[section as Section]}
                />
              </div>
            );
          })}
        </div>
        <CustomerService />
      </div>
    </div>
  );
};
