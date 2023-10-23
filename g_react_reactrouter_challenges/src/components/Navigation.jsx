import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnugszeiten">Öffnungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
