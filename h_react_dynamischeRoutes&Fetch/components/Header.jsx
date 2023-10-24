import { NavLink } from "react-router-dom";
import "./Header.css";

// mit navLink kriegen von der Tag en active wenn es selektiert ist,
// und können damit styles geben, was Link nicht her gibt. diese Klasse kann man nicht ändern

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">UseEffect</NavLink>
        <NavLink to="/fetch">Fetch</NavLink>
        <NavLink to="/dynamic">Dynamic Router</NavLink>
      </nav>
    </header>
  );
};

export default Header;
