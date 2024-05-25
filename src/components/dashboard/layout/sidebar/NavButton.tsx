import { Link } from "react-router-dom";
import { SectionPath } from "./Sidebar";

/**
 * Represents a section of the application navigation.
 */
export type Section =
  | "dashboard"
  | "sales"
  | "products"
  | "invoices"
  | "logout";

/**
 * Represents the label corresponding to each section in the navigation.
 */
export type Label =
  | "Dashboard"
  | "Ventas"
  | "Productos"
  | "Recibos"
  | "Cerrar sesión";

/**
 * Represents the unique identifier for a navigation button.
 */
export type ButtonId = `btn-${Section}`;

/**
 * Props for the NavButton component.
 */
export interface NavButtonProps {
  /** The unique identifier of the button. */
  id?: ButtonId;
  /** Indicates whether the button is currently active. */
  isActive: boolean;
  /** Indicates whether the application is being viewed on a mobile device. */
  isMobile: boolean;
  /** The label text of the button. */
  label: Label;
  /** Indicates whether the button should display text alongside the icon. */
  withText: boolean;
}

/**
 * Mapping of section labels to section identifiers.
 */
const sectionsByLabel: Record<Label, Section> = {
  Dashboard: "dashboard",
  Ventas: "sales",
  Productos: "products",
  Recibos: "invoices",
  "Cerrar sesión": "logout",
};

/**
 * Mapping of section labels to section paths.
 */
const sectionPathByLabel: Record<Label, SectionPath> = {
  Dashboard: "/dashboard",
  Ventas: "/dashboard/sales",
  Productos: "/dashboard/products",
  Recibos: "/dashboard/invoices",
  "Cerrar sesión": "/dashboard/logout",
};

/**
 * Renders a button in the navigation menu.
 *
 * @component
 * @param {NavButtonProps} props - See {@link NavButtonProps}.
 * @returns {JSX.Element} JSX element representing the NavButton.
 */
export const NavButton = ({
  id,
  isActive,
  isMobile,
  label,
  withText,
}: NavButtonProps): JSX.Element =>
  isActive ? (
    <button
      id={id}
      className={`btn flex  bg-purple-50 hover:border-neutral-200 hover:bg-neutral-200
        ${withText ? "w-44 justify-start" : "w-min"}      
        ${isMobile ? "shadow-sm" : "shadow-lg"}
      `}
    >
      <div className="w-6">
        <img
          width={25}
          height={25}
          src={`/${sectionsByLabel[label]}.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      {withText && (
        <div className="pl-4 text-base font-medium text-indigo-900">
          {label}
        </div>
      )}
    </button>
  ) : label === "Cerrar sesión" ? (
    <button
      id={id}
      className={`btn flex border-white bg-white shadow-none hover:border-neutral-200 hover:bg-neutral-200
      ${withText ? "w-44 justify-start" : "w-min"}      
      `}
    >
      <div className="w-5">
        <img
          width={20}
          height={20}
          src={`/${sectionsByLabel[label]}-inactive.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      {withText && (
        <div className="pl-4 text-sm font-medium text-indigo-300">{label}</div>
      )}
    </button>
  ) : (
    <Link to={sectionPathByLabel[label]}>
      <button
        id={id}
        className={`btn flex border-white bg-white shadow-none hover:border-neutral-200 hover:bg-neutral-200
      ${withText ? "w-44 justify-start" : "w-min"}      
      `}
      >
        <div className="w-5">
          <img
            width={20}
            height={20}
            src={`/${sectionsByLabel[label]}-inactive.svg`}
            alt={`Ícono de ${label}`}
          />
        </div>
        {withText && (
          <div className="pl-4 text-sm font-medium text-indigo-300">
            {label}
          </div>
        )}
      </button>
    </Link>
  );
