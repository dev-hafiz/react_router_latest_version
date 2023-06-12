import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/foods">Foods</NavLink>
      <NavLink to="/about">Abouts</NavLink>
    </div>
  );
};

export default Header;
