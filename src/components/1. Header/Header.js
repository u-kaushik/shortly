import React, { useState } from "react";
import "../../sass/_header.scss";
import Logo from "../../assets/icons/logo.svg";
import Hamburger from "../../assets/icons/hamburger-menu.svg";

function Header() {
  const [showMenu, toggleMenu] = useState(true);

  let menu;

  if (showMenu) {
    menu = (
      <div className="Nav__menus">
        <ul className="Nav__links links-list-1">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul className="Nav__links links-list-2">
          <li>Login</li>
          <li>
            <button className="Nav__button">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Header">
      <div className="Nav">
        <logo className="Nav__logo">
          <img src={Logo} alt="logo" />
        </logo>
        <div className="Nav__hamburger">
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => toggleMenu(!showMenu)}
          />
        </div>
        {menu}
      </div>
    </div>
  );
}

export default Header;
