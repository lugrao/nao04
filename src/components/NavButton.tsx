export interface NavButtonProps {
  isActive: boolean;
}

const NavButton = ({ isActive }: NavButtonProps) => {
  return (
    isActive && (
      <button className="btn">
        <div>
          <img src="src/assets/dashboard.svg" alt="Dashboard icon" />
        </div>
        <div>Dashboard</div>
      </button>
    )
  );
};

export default NavButton;
