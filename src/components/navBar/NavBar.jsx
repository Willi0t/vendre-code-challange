import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import VendreLogo from "../../assets/images/vendre-optimizers_logo-black.webp";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <img src={VendreLogo} alt="Vendre Logo" />
        <div className="navigationContainer">
          <ul>
            <li>
              <Link className="listItems" to="/produkt">
                product
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/partners">
                partners
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/priser">
                priser
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kundcase">
                kundcase
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/kunskap">
                kunskap
              </Link>
            </li>
            <li>
              <Link className="listItems" to="/anställda">
                anställda
              </Link>
            </li>
          </ul>
        </div>
        <button>
          <p>boka demo</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
