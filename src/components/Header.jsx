import React, { useState } from "react";
import { assets } from "../assets/assets";

export default function Header() {
  //   const [activeLink, setActiveLink] = useState("home");
  return (
    <header>
      <div className="logo">
        <img src={assets.logo} alt="page-logo" />
      </div>
      <nav className="navbar">
        <a href="#">home</a>
        <a href="#">menu</a>
        <a href="#">mobile-app</a>
        <a href="#">contact-us</a>
      </nav>
      <div className="header-cta">
        <img src={assets.search_icon} alt="search icon" />
        <div className="header-cart">
          <img src={assets.basket_icon} alt="bag" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </header>
  );
}
