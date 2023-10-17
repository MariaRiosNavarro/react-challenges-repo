// sfc= macht ein componente
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <header>
        <h1>Logo</h1>
        <div className="nav">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Nav</a>
        </div>
      </header>
    </>
  );
};

export default Nav;
