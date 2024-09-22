import React from "react";
import { assets } from "../assets/assets";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>

        <div className="profile">
          <img src={assets.profile_image} alt="" />
        </div>
      </header>
      <hr />
    </>
  );
}
