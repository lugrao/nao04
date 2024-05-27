import { NavButton } from "./NavButton";
import { CustomerService } from "./CustomerService";
import { ButtonId } from "./NavButton";
import { useIsScrolled } from "utils/useIsScrolled";
import { Label } from "./NavButton";
import { useLocation } from "react-router-dom";
import { removeTrailingSlashes } from "src/utils/removeTrailingSlashes";
import { logUserOut } from "src/components/authentication/userSlice";
import { useAppDispatch } from "src/redux/hooks";

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
  "/dashboard": "btn-dashboard",
  "/dashboard/sales": "btn-sales",
  "/dashboard/products": "btn-products",
  "/dashboard/invoices": "btn-invoices",
  "/dashboard/logout": "btn-logout",
};

/**
 * Represents the path corresponding to each section in the navigation.
 */
export type SectionPath =
  | "/dashboard"
  | "/dashboard/sales"
  | "/dashboard/products"
  | "/dashboard/invoices"
  | "/dashboard/logout";

/**
 * Mapping of section paths to section labels.
 */
export const labelBySectionPath: Record<SectionPath, Label> = {
  "/dashboard": "Dashboard",
  "/dashboard/sales": "Ventas",
  "/dashboard/products": "Productos",
  "/dashboard/invoices": "Recibos",
  "/dashboard/logout": "Cerrar sesión",
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
  const dispatch = useAppDispatch();

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
                key={sectionPath}
                className={`
              ${sectionPath === "/dashboard" && "mb-3"}
              ${sectionPath === "/dashboard/logout" && "mt-6"}
              `}
                onClick={
                  sectionPath === "/dashboard/logout"
                    ? () => {
                        dispatch(logUserOut());
                      }
                    : undefined
                }
              >
                <NavButton
                  withText={true}
                  id={btnIds[sectionPath]}
                  isActive={
                    sectionPath === "/dashboard/logout"
                      ? false
                      : removeTrailingSlashes(pathname) === sectionPath
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
