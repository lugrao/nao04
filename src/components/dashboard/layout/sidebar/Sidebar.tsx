import { useState } from "react";
import { NavButton } from "./NavButton";
import { CustomerService } from "./CustomerService";
import { ButtonId } from "./NavButton";
import { useIsScrolled } from "utils/useIsScrolled";
import { Section } from "./NavButton";
import { Label } from "./NavButton";

interface ButtonIds {
  [K: string]: ButtonId;
}

export const btnIds: ButtonIds = {
  dashboard: "btn-dashboard",
  sales: "btn-sales",
  products: "btn-products",
  invoices: "btn-invoices",
  logout: "btn-logout",
};

export const labelBySection: Record<Section, Label> = {
  dashboard: "Dashboard",
  sales: "Ventas",
  products: "Productos",
  invoices: "Recibos",
  logout: "Cerrar sesión",
};

interface SidebarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebar = ({ setActiveSection }: SidebarProps) => {
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
        className="flex flex-col items-center overflow-scroll  pt-6"
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
