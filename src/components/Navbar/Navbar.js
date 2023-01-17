import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CCS React Application</h1>
      <div className="links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/discussion">Discussion</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
