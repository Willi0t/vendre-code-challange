import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import VendreLogo from "../../assets/images/vendre-optimizers_logo-black.webp";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <img src={VendreLogo} alt="Vendre Logo" />
        <nav className="navigationContainer">
          <ul>
            <li>
              <Link className="listItems" to="/produkt" onClick={closeMenu}>
                product
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/partners" onClick={closeMenu}>
                partners
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/priser" onClick={closeMenu}>
                priser
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kundcase" onClick={closeMenu}>
                kundcase
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kunskap" onClick={closeMenu}>
                kunskap
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/anställda" onClick={closeMenu}>
                anställda
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`hamburger ${isActive ? "is-active" : ""}`}
          onClick={handleToggle}
        >
          <div className="bar"></div>
        </button>

        <nav
          className={`mobileNavigationContainer ${isActive ? "is-active" : ""}`}
        >
          <ul>
            <li>
              <Link className="listItems" to="/produkt" onClick={closeMenu}>
                product
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/partners" onClick={closeMenu}>
                partners
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/priser" onClick={closeMenu}>
                priser
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kundcase" onClick={closeMenu}>
                kundcase
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kunskap" onClick={closeMenu}>
                kunskap
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/anställda" onClick={closeMenu}>
                anställda
              </Link>
            </li>
          </ul>
        </nav>
        <button className="demobutton">
          <p>boka demo</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
