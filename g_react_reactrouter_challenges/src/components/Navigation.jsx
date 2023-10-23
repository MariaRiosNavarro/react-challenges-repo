import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Speisekarte</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
      <NavLink to="/oeffnugszeiten">Öffnungszeiten</NavLink>
      <NavLink to="/galerie">Galerie</NavLink>
    </nav>
  );
};

export default Navigation;
