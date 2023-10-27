// import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
// import "./Header.css";

import { useContext } from "react";

const Header = () => {
  //     const [count, setCount] = useState(0);
  //     useEffect(() => {
  //         console.log(count);
  // }, [count]);
  const { theme, setTheme } = useContext();
  const toggleTheme = () => {
    setTheme((value) => !value);
    console.log(theme);
  };

  return (
    <>
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/countries">countries</NavLink>
      </nav>
      <button onClick={toggleTheme}>Dark/Night</button>
      <article></article>
    </>
  );
};

// Header.propTypes = {
//   property: PropTypes.string,
// };

export default Header;
