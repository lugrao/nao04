import PropTypes from "prop-types";

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

NavButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default NavButton;
