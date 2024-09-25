import { FC } from "react";
import { navLinks } from "../utils/utils";
import { NavLink } from "react-router-dom";

const AppNavigation: FC = () => {
  return (
    <nav className="main-page__nav">
      {navLinks.map((link) => (
        <NavLink className="nav-link" key={link.to} to={link.to}>
          {link.text} {<link.icon size={32} />}
        </NavLink>
      ))}
    </nav>
  );
};

export default AppNavigation;
