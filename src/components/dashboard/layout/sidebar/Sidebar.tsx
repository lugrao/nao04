import { NavButton } from "./NavButton";
import { CustomerService } from "./CustomerService";
import { ButtonId } from "./NavButton";
import { useIsScrolled } from "utils/useIsScrolled";
import { Label } from "./NavButton";
import { useLocation } from "react-router-dom";

/**
 * Represents a mapping of string keys to ButtonId values.
 */
interface ButtonIds {
  [K: string]: ButtonId;
}

/**
 * Mapping of section paths to button ids.
 */
export const btnIds: ButtonIds = {
  "/": "btn-dashboard",
  "/sales": "btn-sales",
  "/products": "btn-products",
  "/invoices": "btn-invoices",
  "/logout": "btn-logout",
};

/**
 * Represents the path corresponding to each section in the navigation.
 */
export type SectionPath =
  | "/"
  | "/sales"
  | "/products"
  | "/invoices"
  | "/logout";

/**
 * Mapping of section paths to section labels.
 */
export const labelBySectionPath: Record<SectionPath, Label> = {
  "/": "Dashboard",
  "/sales": "Ventas",
  "/products": "Productos",
  "/invoices": "Recibos",
  "/logout": "Cerrar sesión",
};

/**
 * Renders a sidebar with a navigation menu and a customer service section.
 * @component
 * @param {SidebarProps} props - See {@link SidebarProps}.
 * @see {@link SidebarProps}
 * @returns {JSX.Element} JSX element representing the Sidebar component.
 */
export const Sidebar = (): JSX.Element => {
  const { pathname } = useLocation();
  const [isScrolled, handleScroll] = useIsScrolled();

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
          {Object.keys(btnIds).map((sectionPath) => {
            return (
              <div
                className={`
              ${sectionPath == "/" && "mb-3"}
              ${sectionPath == "/logout" && "mt-6"}
              `}
              >
                <NavButton
                  withText={true}
                  id={btnIds[sectionPath]}
                  isActive={
                    sectionPath === "logout" ? false : pathname === sectionPath
                  }
                  isMobile={false}
                  label={labelBySectionPath[sectionPath as SectionPath]}
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
