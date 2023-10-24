import { Link, NavLink } from "react-router-dom";

// mit navLink kriegen von der Tag en active wenn es selektiert ist,
// und können damit styles geben, was Link nicht her gibt. diese Klasse kann man nicht ändern

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Use</NavLink>
        <NavLink to="/fetch">Fetch</NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>
    </header>
  );
};

export default Header;
