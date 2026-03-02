import "./navbar.css";
import logo from "../assets/Screenshot 2026-03-02 221855.png";

function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">

        <a href="#home" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;