export interface NavButtonProps {
  isActive: boolean;
  label: "Dashboard" | "Ventas" | "Productos" | "Recibos" | "Cerrar sesión";
}

const NavButton = ({ isActive, label }: NavButtonProps) => {
  return (
    isActive && (
      <button className="btn flex w-40 justify-between bg-purple-50">
        <div>
          <img
            width={25}
            height={25}
            src={`src/assets/${label.toLowerCase()}.svg`}
            alt="Dashboard icon"
          />
        </div>
        <div className="text-indigo-900">{label}</div>
      </button>
    )
  );
};

export default NavButton;
