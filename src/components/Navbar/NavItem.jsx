import { NavLink } from "react-router-dom";

export const NavItem = ({ to, children, activeStyle }) => {
  return (
    // Use la etiqueta NavLink y le pasé las propiedades to y className
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};
