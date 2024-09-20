import React, { useState } from "react";
import { assets } from "../assets/assets";
import AuthForm from "../pages/AuthForm";
import { Link } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <header>
      {showLogin && <AuthForm setShowLogin={setShowLogin} />}
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="page-logo" />
        </Link>
      </div>
      <nav className="navbar">
        <a href="/#">home</a>
        <a href="/#catogorey">menu</a>
        <a href="/#appDownload">mobile-app</a>
        <a href="/#footer">contact-us</a>
      </nav>
      <div className="header-cta">
        <img src={assets.search_icon} alt="search icon" />
        <div className="header-cart">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="bag" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </header>
  );
}
