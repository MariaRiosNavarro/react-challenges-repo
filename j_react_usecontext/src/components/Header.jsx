import "./Header.css";
import { NavLink } from "react-router-dom";
import DarkLight from "../assets/dark-light";

// Müssen für Context Importieren
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((pizza) => !pizza);
  };

  return (
    <header>
      <h1>Logo</h1>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/countries">Countries</NavLink>
        </nav>
        <div onClick={toggleTheme}>
          <DarkLight />
        </div>
      </div>
    </header>
  );
};

export default Header;
