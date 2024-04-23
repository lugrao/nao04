const NavButton = ({ isActive }) => {
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
