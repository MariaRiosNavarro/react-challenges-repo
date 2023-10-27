// import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
// import "./Header.css";

const Header = () => {
  //     const [count, setCount] = useState(0);
  //     useEffect(() => {
  //         console.log(count);
  // }, [count]);

  return (
    <>
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/countries">countries</NavLink>
      </nav>
      <button>Dark/Night</button>
      <article></article>
    </>
  );
};

// Header.propTypes = {
//   property: PropTypes.string,
// };

export default Header;
