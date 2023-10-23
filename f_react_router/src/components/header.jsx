import { Link, LinkNav, NavLink } from "react-router-dom";

// mit navLink kriegen von der Tag en active wenn es selektiert ist,
// und können damit styles geben, was Link nicht her gibt. diese Klasse kann man nicht ändern

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">Home</NavLink>
      </nav>
    </header>
  );
};

export default Header;
