export type Section =
  | "dashboard"
  | "sales"
  | "products"
  | "invoices"
  | "logout";

export type Label =
  | "Dashboard"
  | "Ventas"
  | "Productos"
  | "Recibos"
  | "Cerrar sesión";

export type ButtonId = `btn-${Section}`;

export interface NavButtonProps {
  id?: ButtonId;
  isActive: boolean;
  isMobile: boolean;
  label: Label;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  withText: boolean;
}

const sectionsByLabel: Record<Label, Section> = {
  Dashboard: "dashboard",
  Ventas: "sales",
  Productos: "products",
  Recibos: "invoices",
  "Cerrar sesión": "logout",
};

export const NavButton = ({
  id,
  isActive,
  isMobile,
  label,
  onClick,
  withText,
}: NavButtonProps) => {
  return isActive ? (
    <button
      id={id}
      onClick={onClick}
      className={`btn flex  bg-purple-50 hover:border-neutral-200 hover:bg-neutral-200
        ${withText ? "w-44 justify-start" : "w-min"}      
        ${isMobile ? "shadow-sm" : "shadow-lg"}
      `}
    >
      <div className="w-6">
        <img
          width={25}
          height={25}
          src={`src/assets/${sectionsByLabel[label]}.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      {withText && (
        <div className="pl-4 text-base font-medium text-indigo-900">
          {label}
        </div>
      )}
    </button>
  ) : (
    <button
      id={id}
      onClick={onClick}
      className={`btn flex border-white bg-white shadow-none hover:border-neutral-200 hover:bg-neutral-200
        ${withText ? "w-44 justify-start" : "w-min"}      
      `}
    >
      <div className="w-5">
        <img
          width={20}
          height={20}
          src={`src/assets/${sectionsByLabel[label]}-inactive.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      {withText && (
        <div className="pl-4 text-sm font-medium text-indigo-300">{label}</div>
      )}
    </button>
  );
};
