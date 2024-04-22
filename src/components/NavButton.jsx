import PropTypes from "prop-types";

const NavButton = ({ isActive }) => {
  return isActive && <div></div>;
};

NavButton.propTypes = {
  isActive: PropTypes.boolean.isRequired,
};

export default NavButton;
