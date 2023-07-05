import React from "react";
import "./navBar.css";
import VendreLogo from "../../assets/images/vendre-optimizers_logo-black.webp";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <img src={VendreLogo}></img>
        <div className="navigationContainer">
          <h2>
            <ul>
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">partners</a>
              </li>
              <li>
                <a href="#">priser</a>
              </li>
              <li>
                <a href="#">kundcase</a>
              </li>
              <li>
                <a href="#">kunskap</a>
              </li>
              <li>
                <a href="#">anställda</a>
              </li>
            </ul>
          </h2>
        </div>
        <button>
          <p>boka demo</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
