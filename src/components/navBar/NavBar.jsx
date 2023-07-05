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
              <Link to="/produkt">product</Link>
            </li>
            <li>
              <Link to="/partners">partners</Link>
            </li>
            <li>
              <Link to="/priser">priser</Link>
            </li>
            <li>
              <Link to="/kundcase">kundcase</Link>
            </li>
            <li>
              <Link to="/kunskap">kunskap</Link>
            </li>
            <li>
              <Link to="/anställda">anställda</Link>
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
