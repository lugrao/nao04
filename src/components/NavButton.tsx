export type ButtonId =
  | "btn-dashboard"
  | "btn-sales"
  | "btn-products"
  | "btn-invoices"
  | "btn-logout";

export interface NavButtonProps {
  id?: ButtonId;
  isActive: boolean;
  label: "Dashboard" | "Ventas" | "Productos" | "Recibos" | "Cerrar sesión";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
}

const NavButton = ({ id, isActive, label, onClick }: NavButtonProps) => {
  return isActive ? (
    <button
      id={id}
      onClick={onClick}
      className="btn flex w-44 justify-start bg-purple-50 shadow-lg hover:border-neutral-200 hover:bg-neutral-200"
    >
      <div>
        <img
          width={25}
          height={25}
          src={`src/assets/${label.toLowerCase()}.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      <div className="pl-4 text-base font-medium text-indigo-900">{label}</div>
    </button>
  ) : (
    <button
      id={id}
      onClick={onClick}
      className="btn flex w-44 justify-start border-white bg-white shadow-none hover:border-neutral-200 hover:bg-neutral-200"
    >
      <div>
        <img
          width={20}
          height={20}
          src={`src/assets/${label.toLowerCase()}-inactive.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      <div className="pl-4 text-sm font-medium text-indigo-300">{label}</div>
    </button>
  );
};

export default NavButton;
