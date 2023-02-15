import logo from "../logo.svg";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="flex-container">
      <div className="logo-with-text">
        <img src={logo} className="app-logo" alt="logo" />
        <h3 className="logotext">React Facts</h3>
      </div>
      <h4 className="navbartitle">I am learning React</h4>
    </nav>
  );
}

export default Navbar;
