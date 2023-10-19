import { useState } from "react";
import Dark from "./svg/dark";
import "./Header.css";

const Header = ({ setParentPropierty }) => {
  const [darkmode, setDarkmode] = useState(false);
  console.log(darkmode);

  // HERE unten der State die Funktionen

  const changeBG = () => {
    setParentPropierty((parent) => !parent);
  };

  return (
    <>
      <header className={darkmode ? "dark" : ""}>
        <h1>Header</h1>
        <div>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div onClick={() => setDarkmode((darkmode) => !darkmode)}>
          <Dark />
        </div>
        <button onClick={changeBG}>CHANGE with State in Parent</button>
      </header>
    </>
  );
};

export default Header;
