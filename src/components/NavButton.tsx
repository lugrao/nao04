export interface NavButtonProps {
  isActive: boolean;
  label: "Dashboard" | "Ventas" | "Productos" | "Recibos" | "Cerrar sesión";
}

const NavButton = ({ isActive, label }: NavButtonProps) => {
  return isActive ? (
    <button className="btn flex w-44 justify-between bg-purple-50 shadow-lg hover:border-neutral-200 hover:bg-neutral-200">
      <div>
        <img
          width={25}
          height={25}
          src={`src/assets/${label.toLowerCase()}.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      <div className="text-base font-medium text-indigo-900">{label}</div>
    </button>
  ) : (
    <button className="btn flex w-44 justify-between border-white bg-white hover:border-neutral-200 hover:bg-neutral-200">
      <div>
        <img
          width={20}
          height={20}
          src={`src/assets/${label.toLowerCase()}-inactive.svg`}
          alt={`Ícono de ${label}`}
        />
      </div>
      <div className="text-base font-medium text-indigo-300">{label}</div>
    </button>
  );
};

export default NavButton;
